/**
 * CTB Exam Prep — app.js
 * Production application logic for the ASBA Certified Track Builder
 * learning platform.
 *
 * Architecture:
 *   DB       — LocalStorage abstraction layer
 *   Engine   — Adaptive question selection
 *   Exam     — Exam session state machine
 *   Study    — Study mode controller
 *   FC       — Flashcard controller
 *   Analytics— Performance analytics + canvas chart
 *   UI       — DOM utilities, navigation, toast, modal
 *   Init     — Boot sequence
 *
 * Dependencies: question-bank.js must be loaded before this file.
 */

'use strict';

/* ════════════════════════════════════════════════════════════
   DB — LocalStorage abstraction
═══════════════════════════════════════════════════════════ */
const DB = (() => {
  const KEYS = {
    sessions:   'ctb_sessions',
    analytics:  'ctb_analytics',
    flashcards: 'ctb_flashcards',
    weakMap:    'ctb_weak_map',
    settings:   'ctb_settings',
  };

  const DEFAULT_ANALYTICS = {
    total_answered: 0,
    total_correct: 0,
    exams_completed: 0,
    streak_days: 0,
    last_activity: null,
    domain: { I:{c:0,t:0}, II:{c:0,t:0}, III:{c:0,t:0}, IV:{c:0,t:0}, V:{c:0,t:0} },
    difficulty: { easy:{c:0,t:0}, medium:{c:0,t:0}, hard:{c:0,t:0} },
  };

  const DEFAULT_WEAK_MAP = {
    I: { weight: 1.0, wrong: 0 },
    II: { weight: 1.0, wrong: 0 },
    III: { weight: 1.0, wrong: 0 },
    IV: { weight: 1.0, wrong: 0 },
    V: { weight: 1.0, wrong: 0 },
  };

  function read(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch { return fallback; }
  }

  function write(key, data) {
    try { localStorage.setItem(key, JSON.stringify(data)); return true; }
    catch (e) { console.error('DB write error:', e); return false; }
  }

  function getSessions()   { return read(KEYS.sessions, []); }
  function getAnalytics()  { return read(KEYS.analytics, structuredClone(DEFAULT_ANALYTICS)); }
  function getWeakMap()    { return read(KEYS.weakMap, structuredClone(DEFAULT_WEAK_MAP)); }
  function getFCState()    { return read(KEYS.flashcards, { mastered: [], learning: [] }); }

  function saveSession(session) {
    const sessions = getSessions();
    sessions.unshift(session);
    // keep last 100 sessions
    if (sessions.length > 100) sessions.length = 100;
    write(KEYS.sessions, sessions);
  }

  function updateAnalytics(domain, diff, correct) {
    const a = getAnalytics();
    a.total_answered++;
    if (correct) a.total_correct++;

    a.domain[domain] = a.domain[domain] || { c:0, t:0 };
    a.domain[domain].t++;
    if (correct) a.domain[domain].c++;

    a.difficulty[diff] = a.difficulty[diff] || { c:0, t:0 };
    a.difficulty[diff].t++;
    if (correct) a.difficulty[diff].c++;

    const today = new Date().toDateString();
    if (a.last_activity !== today) {
      const yesterday = new Date(Date.now() - 86400000).toDateString();
      a.streak_days = (a.last_activity === yesterday) ? a.streak_days + 1 : 1;
      a.last_activity = today;
    }
    write(KEYS.analytics, a);
    return a;
  }

  function finalizeExam() {
    const a = getAnalytics();
    a.exams_completed++;
    write(KEYS.analytics, a);
  }

  function updateWeakMap(domain, correct) {
    const wm = getWeakMap();
    if (!wm[domain]) wm[domain] = { weight: 1.0, wrong: 0 };
    if (!correct) {
      wm[domain].weight = Math.min(2.5, wm[domain].weight + 0.2);
      wm[domain].wrong++;
    } else {
      wm[domain].weight = Math.max(0.5, wm[domain].weight - 0.1);
      wm[domain].wrong = Math.max(0, wm[domain].wrong - 1);
    }
    write(KEYS.weakMap, wm);
  }

  function saveFCState(state) {
    write(KEYS.flashcards, state);
  }

  function resetAll() {
    Object.values(KEYS).forEach(k => localStorage.removeItem(k));
  }

  return {
    getSessions, getAnalytics, getWeakMap, getFCState,
    saveSession, updateAnalytics, finalizeExam,
    updateWeakMap, saveFCState, resetAll,
    DEFAULT_ANALYTICS,
  };
})();


/* ════════════════════════════════════════════════════════════
   ENGINE — Adaptive question selection
═══════════════════════════════════════════════════════════ */
const Engine = (() => {
  /**
   * Fisher-Yates shuffle (in-place, returns array).
   */
  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  /**
   * Shuffle the answer choices of a question, returning a new object
   * with randomized choices and a mapping to find the correct key.
   */
  function shuffleChoices(q) {
    const letters = Object.keys(q.choices);          // ['A','B','C','D']
    shuffle(letters);
    const newChoices = {};
    const newLetters = ['A', 'B', 'C', 'D'];
    let newCorrect = '';
    letters.forEach((origLetter, i) => {
      newChoices[newLetters[i]] = q.choices[origLetter];
      if (origLetter === q.correct) newCorrect = newLetters[i];
    });
    return { ...q, choices: newChoices, correct: newCorrect };
  }

  /**
   * Weighted random sampling — selects `count` questions from `pool`.
   * Each question gets a weight; higher-weight questions are more likely.
   * Uses a weighted partial Fisher-Yates variant.
   */
  function weightedSample(pool, count) {
    if (pool.length <= count) return shuffle([...pool]);
    const weights = pool.map(q => q._weight || 1);
    const totalWeight = weights.reduce((a, b) => a + b, 0);
    const selected = [];
    const available = pool.map((q, i) => ({ q, w: weights[i] }));

    while (selected.length < count && available.length > 0) {
      let roll = Math.random() * available.reduce((s, x) => s + x.w, 0);
      let idx = 0;
      while (idx < available.length - 1 && roll > available[idx].w) {
        roll -= available[idx].w;
        idx++;
      }
      selected.push(available[idx].q);
      available.splice(idx, 1);
    }
    return selected;
  }

  /**
   * Build a weighted pool and sample questions.
   * @param {number} count
   * @param {string} domainFilter  — '' = all
   * @param {string} diffFilter    — '' = all
   * @param {boolean} adaptive     — use weak-category weights
   */
  function selectQuestions(count, domainFilter = '', diffFilter = '', adaptive = false) {
    if (!window.CTB_QUESTIONS || !window.CTB_QUESTIONS.length) {
      console.error('CTB_QUESTIONS not loaded');
      return [];
    }

    const weakMap = adaptive ? DB.getWeakMap() : null;

    // Filter
    let pool = window.CTB_QUESTIONS.filter(q => {
      if (domainFilter && q.domain !== domainFilter) return false;
      if (diffFilter && q.difficulty !== diffFilter) return false;
      return true;
    });

    if (!pool.length) return [];

    // Assign weights
    pool = pool.map(q => {
      let w = 1.0;
      if (adaptive && weakMap && weakMap[q.domain]) {
        w = weakMap[q.domain].weight;
      }
      return { ...q, _weight: w };
    });

    const sampled = weightedSample(pool, Math.min(count, pool.length));
    // Shuffle question order
    shuffle(sampled);
    // Shuffle each question's answer choices
    return sampled.map(q => shuffleChoices(q));
  }

  return { selectQuestions, shuffle, shuffleChoices };
})();


/* ════════════════════════════════════════════════════════════
   EXAM — Session state machine
═══════════════════════════════════════════════════════════ */
const Exam = (() => {
  let state = {
    questions: [],        // array of question objects (choices already shuffled)
    answers:   {},        // { questionId: chosenLetter }
    flagged:   new Set(), // question ids
    current:   0,
    started:   null,      // timestamp ms
    timerInterval: null,
    mode: 'exam',         // 'exam' | 'study'
  };

  /* ── DOM refs (exam view) ── */
  const el = {
    topbarText:    () => document.getElementById('examProgressText'),
    timer:         () => document.getElementById('examTimer'),
    progressFill:  () => document.getElementById('examProgressFill'),
    progressBar:   () => document.getElementById('examProgressBar'),
    qDomainBadge:  () => document.getElementById('qDomainBadge'),
    qDiffBadge:    () => document.getElementById('qDiffBadge'),
    qSource:       () => document.getElementById('qSource'),
    qText:         () => document.getElementById('qText'),
    choicesGrid:   () => document.getElementById('choicesGrid'),
    feedback:      () => document.getElementById('qFeedback'),
    feedbackVerdict:     () => document.getElementById('feedbackVerdict'),
    feedbackExplanation: () => document.getElementById('feedbackExplanation'),
    feedbackCitation:    () => document.getElementById('feedbackCitation'),
    prevBtn:       () => document.getElementById('prevBtn'),
    nextBtn:       () => document.getElementById('nextBtn'),
    skipBtn:       () => document.getElementById('skipBtn'),
    flagBtn:       () => document.getElementById('flagCurrentBtn'),
    flaggedChips:  () => document.getElementById('flaggedChips'),
    resultsPanel:  () => document.getElementById('resultsPanel'),
    examWrap:      () => document.querySelector('.exam-wrap'),
    resultsScore:  () => document.getElementById('resultsScore'),
    resultsBreakdown: () => document.getElementById('resultsBreakdown'),
  };

  function init(questions) {
    state.questions = questions;
    state.answers   = {};
    state.flagged   = new Set();
    state.current   = 0;
    state.started   = Date.now();

    // Hide results, show exam
    el.resultsPanel().hidden = true;
    el.examWrap().hidden     = false;

    startTimer();
    renderQuestion();
    updateNav();
    renderFlagged();
  }

  /* ── Timer ── */
  function startTimer() {
    clearInterval(state.timerInterval);
    const timerEl = el.timer();
    state.timerInterval = setInterval(() => {
      const elapsed = Math.floor((Date.now() - state.started) / 1000);
      const h = Math.floor(elapsed / 3600);
      const m = Math.floor((elapsed % 3600) / 60);
      const s = elapsed % 60;
      timerEl.textContent = h > 0
        ? `${h}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`
        : `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
    }, 1000);
  }

  function stopTimer() {
    clearInterval(state.timerInterval);
    return Math.floor((Date.now() - state.started) / 1000);
  }

  /* ── Render ── */
  function renderQuestion() {
    const q = state.questions[state.current];
    if (!q) return;

    const n = state.current;
    const total = state.questions.length;

    // Progress
    el.topbarText().textContent = `Question ${n + 1} of ${total}`;
    const pct = Math.round((n / total) * 100);
    el.progressFill().style.width = pct + '%';
    el.progressBar().setAttribute('aria-valuenow', pct);

    // Meta badges
    const domainBadge = el.qDomainBadge();
    domainBadge.textContent = `Domain ${q.domain} — ${q.domain_name}`;
    domainBadge.className = `q-domain-badge domain-${q.domain}`;

    const diffBadge = el.qDiffBadge();
    diffBadge.textContent = q.difficulty.charAt(0).toUpperCase() + q.difficulty.slice(1);
    diffBadge.setAttribute('data-diff', q.difficulty);

    el.qSource().textContent = q.source_page ? `p. ${q.source_page}` : '';

    // Question text
    el.qText().textContent = q.question;

    // Build choices
    const grid = el.choicesGrid();
    grid.innerHTML = '';
    const answered = state.answers[q.id] !== undefined;

    ['A', 'B', 'C', 'D'].forEach(letter => {
      const btn = document.createElement('button');
      btn.className = 'choice-btn';
      btn.setAttribute('type', 'button');
      btn.setAttribute('role', 'radio');
      btn.setAttribute('aria-checked', 'false');
      btn.dataset.letter = letter;

      const letterSpan = document.createElement('span');
      letterSpan.className = 'choice-letter';
      letterSpan.textContent = letter;

      const textSpan = document.createElement('span');
      textSpan.className = 'choice-text';
      textSpan.textContent = q.choices[letter] || '';

      btn.appendChild(letterSpan);
      btn.appendChild(textSpan);

      if (answered) {
        btn.disabled = true;
        const chosen = state.answers[q.id];
        if (letter === q.correct) btn.classList.add('correct');
        else if (letter === chosen && chosen !== q.correct) btn.classList.add('incorrect');
        else if (letter === chosen) btn.classList.add('selected');
      } else {
        btn.addEventListener('click', () => answer(letter));
      }

      grid.appendChild(btn);
    });

    // Flag state
    const flagBtn = el.flagBtn();
    flagBtn.classList.toggle('flagged', state.flagged.has(q.id));

    // Show/hide feedback
    const feedbackEl = el.feedback();
    if (answered) {
      showFeedback(q, state.answers[q.id]);
    } else {
      feedbackEl.hidden = true;
    }

    updateNav();
  }

  function answer(letter) {
    const q = state.questions[state.current];
    if (!q || state.answers[q.id] !== undefined) return;

    state.answers[q.id] = letter;
    const correct = letter === q.correct;

    // Update DB
    DB.updateAnalytics(q.domain, q.difficulty, correct);
    DB.updateWeakMap(q.domain, correct);

    // Re-render choices with feedback states
    const btns = el.choicesGrid().querySelectorAll('.choice-btn');
    btns.forEach(btn => {
      btn.disabled = true;
      const l = btn.dataset.letter;
      if (l === q.correct) btn.classList.add('correct');
      else if (l === letter && !correct) btn.classList.add('incorrect');
    });

    showFeedback(q, letter);
    updateNav();
  }

  function showFeedback(q, chosen) {
    const correct = chosen === q.correct;
    const feedbackEl = el.feedback();
    feedbackEl.hidden = false;
    feedbackEl.className = `q-feedback ${correct ? 'feedback-correct' : 'feedback-incorrect'}`;

    const verdict = el.feedbackVerdict();
    verdict.className = `feedback-verdict ${correct ? 'verdict-correct' : 'verdict-incorrect'}`;
    verdict.textContent = correct ? '✓ Correct' : `✗ Incorrect — Correct answer: ${q.correct}. ${q.choices[q.correct]}`;

    el.feedbackExplanation().textContent = q.explanation || '';

    const citeEl = el.feedbackCitation();
    citeEl.textContent = buildCitation(q);
  }

  function buildCitation(q) {
    const parts = [];
    if (q.source_document) parts.push(q.source_document);
    if (q.source_page) parts.push(`p. ${q.source_page}`);
    return parts.length ? '📖 Source: ' + parts.join(', ') : '';
  }

  function updateNav() {
    el.prevBtn().disabled = state.current === 0;
    el.nextBtn().disabled = state.current >= state.questions.length - 1;
  }

  function prev() {
    if (state.current > 0) { state.current--; renderQuestion(); }
  }

  function next() {
    if (state.current < state.questions.length - 1) { state.current++; renderQuestion(); }
  }

  function skip() {
    if (state.current < state.questions.length - 1) { state.current++; renderQuestion(); }
  }

  function toggleFlag() {
    const q = state.questions[state.current];
    if (!q) return;
    if (state.flagged.has(q.id)) state.flagged.delete(q.id);
    else state.flagged.add(q.id);
    el.flagBtn().classList.toggle('flagged', state.flagged.has(q.id));
    renderFlagged();
  }

  function renderFlagged() {
    const chips = el.flaggedChips();
    chips.innerHTML = '';
    state.flagged.forEach(id => {
      const idx = state.questions.findIndex(q => q.id === id);
      if (idx === -1) return;
      const chip = document.createElement('button');
      chip.className = 'flag-chip';
      chip.textContent = `Q${idx + 1}`;
      chip.title = state.questions[idx].question.slice(0, 60) + '…';
      chip.addEventListener('click', () => { state.current = idx; renderQuestion(); });
      chips.appendChild(chip);
    });
  }

  function finish() {
    const timeTaken = stopTimer();
    const total = state.questions.length;
    const correct = state.questions.filter(q => state.answers[q.id] === q.correct).length;
    const unanswered = total - Object.keys(state.answers).length;
    const pct = Math.round((correct / total) * 100);

    // Domain breakdown
    const domainBreakdown = {};
    state.questions.forEach(q => {
      if (!domainBreakdown[q.domain]) domainBreakdown[q.domain] = { c: 0, t: 0, name: q.domain_name };
      domainBreakdown[q.domain].t++;
      if (state.answers[q.id] === q.correct) domainBreakdown[q.domain].c++;
    });

    // Build session record
    const session = {
      id: `sess_${Date.now()}`,
      timestamp: new Date().toISOString(),
      mode: 'exam',
      question_count: total,
      correct,
      unanswered,
      score_percent: pct,
      time_taken_seconds: timeTaken,
      domain_breakdown: domainBreakdown,
      question_ids: state.questions.map(q => q.id),
      answers: { ...state.answers },
      questions_snapshot: state.questions, // for review
    };

    DB.saveSession(session);
    DB.finalizeExam();

    showResults(session);
    return session;
  }

  function showResults(session) {
    el.examWrap().hidden = true;
    const panel = el.resultsPanel();
    panel.hidden = false;

    // Score
    const scoreEl = el.resultsScore();
    scoreEl.textContent = session.score_percent + '%';
    scoreEl.className = 'results-score ' + (
      session.score_percent >= 80 ? 'score-high' :
      session.score_percent >= 60 ? 'score-mid' : 'score-low'
    );

    // Breakdown chips
    const breakdownEl = el.resultsBreakdown();
    breakdownEl.innerHTML = '';

    Object.entries(session.domain_breakdown).forEach(([domain, data]) => {
      const domainPct = data.t > 0 ? Math.round((data.c / data.t) * 100) : 0;
      const chip = document.createElement('div');
      chip.className = 'results-domain-chip';
      chip.innerHTML = `Domain ${domain}: <strong>${domainPct}%</strong> (${data.c}/${data.t})`;
      breakdownEl.appendChild(chip);
    });

    // Also show quick stats
    const statsChip = document.createElement('div');
    statsChip.className = 'results-domain-chip';
    statsChip.innerHTML = `Time: <strong>${formatTime(session.time_taken_seconds)}</strong>`;
    breakdownEl.appendChild(statsChip);

    if (session.unanswered > 0) {
      const skipChip = document.createElement('div');
      skipChip.className = 'results-domain-chip';
      skipChip.innerHTML = `Skipped: <strong>${session.unanswered}</strong>`;
      breakdownEl.appendChild(skipChip);
    }
  }

  function getState() { return state; }

  function formatTime(secs) {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${String(s).padStart(2,'0')}`;
  }

  return { init, prev, next, skip, toggleFlag, finish, getState, buildCitation };
})();


/* ════════════════════════════════════════════════════════════
   STUDY — Untimed study mode controller
═══════════════════════════════════════════════════════════ */
const Study = (() => {
  let questions = [];
  let current   = 0;
  let answered  = {}; // { index: chosenLetter }

  const el = {
    session:    () => document.getElementById('studySession'),
    domainBadge:() => document.getElementById('sDomainBadge'),
    diffBadge:  () => document.getElementById('sDiffBadge'),
    qText:      () => document.getElementById('sQText'),
    choicesGrid:() => document.getElementById('sChoicesGrid'),
    feedback:   () => document.getElementById('sQFeedback'),
    verdict:    () => document.getElementById('sFeedbackVerdict'),
    explanation:() => document.getElementById('sFeedbackExplanation'),
    citation:   () => document.getElementById('sFeedbackCitation'),
    counter:    () => document.getElementById('studyCounter'),
    prevBtn:    () => document.getElementById('sPrevBtn'),
    nextBtn:    () => document.getElementById('sNextBtn'),
  };

  function start(domainFilter, diffFilter) {
    questions = Engine.selectQuestions(200, domainFilter, diffFilter, false);
    if (!questions.length) {
      UI.toast('No questions match that filter.', 'error');
      return false;
    }
    current = 0;
    answered = {};
    el.session().hidden = false;
    render();
    return true;
  }

  function render() {
    const q = questions[current];
    if (!q) return;

    el.counter().textContent = `${current + 1} / ${questions.length}`;
    el.prevBtn().disabled = current === 0;
    el.nextBtn().disabled = current >= questions.length - 1;

    const db = el.domainBadge();
    db.textContent = `Domain ${q.domain}`;
    db.className = `q-domain-badge domain-${q.domain}`;

    const diff = el.diffBadge();
    diff.textContent = q.difficulty.charAt(0).toUpperCase() + q.difficulty.slice(1);
    diff.setAttribute('data-diff', q.difficulty);

    el.qText().textContent = q.question;

    const grid = el.choicesGrid();
    grid.innerHTML = '';
    const ans = answered[current];

    ['A','B','C','D'].forEach(letter => {
      const btn = document.createElement('button');
      btn.className = 'choice-btn';
      btn.type = 'button';
      btn.dataset.letter = letter;

      const lsp = document.createElement('span');
      lsp.className = 'choice-letter';
      lsp.textContent = letter;

      const tsp = document.createElement('span');
      tsp.textContent = q.choices[letter] || '';

      btn.appendChild(lsp); btn.appendChild(tsp);

      if (ans !== undefined) {
        btn.disabled = true;
        if (letter === q.correct) btn.classList.add('correct');
        else if (letter === ans && ans !== q.correct) btn.classList.add('incorrect');
      } else {
        btn.addEventListener('click', () => pick(letter));
      }
      grid.appendChild(btn);
    });

    const fb = el.feedback();
    if (ans !== undefined) {
      const correct = ans === q.correct;
      fb.hidden = false;
      fb.className = `q-feedback ${correct ? 'feedback-correct' : 'feedback-incorrect'}`;
      const vd = el.verdict();
      vd.className = `feedback-verdict ${correct ? 'verdict-correct' : 'verdict-incorrect'}`;
      vd.textContent = correct ? '✓ Correct' : `✗ Incorrect — Correct: ${q.correct}. ${q.choices[q.correct]}`;
      el.explanation().textContent = q.explanation || '';
      el.citation().textContent = Exam.buildCitation(q);
    } else {
      fb.hidden = true;
    }
  }

  function pick(letter) {
    const q = questions[current];
    if (!q) return;
    answered[current] = letter;
    const correct = letter === q.correct;
    DB.updateAnalytics(q.domain, q.difficulty, correct);
    DB.updateWeakMap(q.domain, correct);
    render();
  }

  function prev() { if (current > 0) { current--; render(); } }
  function next() { if (current < questions.length - 1) { current++; render(); } }

  return { start, prev, next };
})();


/* ════════════════════════════════════════════════════════════
   FC — Flashcard controller
═══════════════════════════════════════════════════════════ */
const FC = (() => {
  let deck      = [];    // all cards for this session
  let remaining = [];    // card indices not yet resolved
  let mastered  = [];    // card indices mastered
  let learning  = [];    // card indices marked "still learning"
  let currentIdx = 0;    // index into remaining[]
  let flipped    = false;

  const el = {
    arena:       () => document.getElementById('fcArena'),
    counter:     () => document.getElementById('fcCounter'),
    progFill:    () => document.getElementById('fcProgressFill'),
    domainLabel: () => document.getElementById('fcDomainLabel'),
    question:    () => document.getElementById('fcQuestion'),
    answer:      () => document.getElementById('fcAnswer'),
    citation:    () => document.getElementById('fcCitation'),
    card:        () => document.getElementById('flashcard'),
    failBtn:     () => document.getElementById('fcFail'),
    passBtn:     () => document.getElementById('fcPass'),
    skipBtn:     () => document.getElementById('fcSkipBtn'),
    masteredStat:() => document.getElementById('fcMastered'),
    learningStat:() => document.getElementById('fcLearning'),
    remainStat:  () => document.getElementById('fcRemaining'),
  };

  function buildFlashcards(questions) {
    // Each flashcard is: front = question, back = correct answer + explanation
    return questions.map((q, i) => ({
      id: i,
      domain: q.domain,
      domain_name: q.domain_name,
      front: q.question,
      back: `${q.choices[q.correct]}\n\n${q.explanation || ''}`,
      citation: Exam.buildCitation(q),
    }));
  }

  function start(domainFilter) {
    const qs = Engine.selectQuestions(60, domainFilter, '', false);
    if (!qs.length) { UI.toast('No questions for this domain.', 'error'); return false; }
    deck      = buildFlashcards(qs);
    remaining = deck.map((_, i) => i);
    mastered  = [];
    learning  = [];
    currentIdx = 0;
    flipped    = false;
    el.arena().hidden = false;
    render();
    return true;
  }

  function render() {
    if (!remaining.length) {
      if (learning.length > 0) {
        // Cycle through learning cards
        remaining = [...learning];
        learning  = [];
        currentIdx = 0;
        UI.toast(`Round complete! Reviewing ${remaining.length} learning cards.`, 'info');
      } else {
        UI.toast('🎉 All cards mastered!', 'success');
        el.arena().hidden = true;
        return;
      }
    }

    const idx = remaining[currentIdx % remaining.length];
    const card = deck[idx];
    if (!card) return;

    // Unflip
    flipped = false;
    el.card().classList.remove('flipped');

    el.counter().textContent = `Card ${currentIdx + 1} of ${remaining.length}`;
    const pct = Math.round(mastered.length / deck.length * 100);
    el.progFill().style.width = pct + '%';

    el.domainLabel().textContent = `Domain ${card.domain} — ${card.domain_name}`;
    el.question().textContent = card.front;
    el.answer().textContent   = card.back;
    el.citation().textContent = card.citation || '';

    updateStats();
  }

  function flip() {
    flipped = !flipped;
    el.card().classList.toggle('flipped', flipped);
  }

  function pass() {
    const idx = remaining[currentIdx % remaining.length];
    mastered.push(idx);
    remaining.splice(currentIdx % remaining.length, 1);
    updateStats();
    render();
  }

  function fail() {
    const idx = remaining[currentIdx % remaining.length];
    learning.push(idx);
    remaining.splice(currentIdx % remaining.length, 1);
    updateStats();
    render();
  }

  function skip() {
    currentIdx = (currentIdx + 1) % (remaining.length || 1);
    render();
  }

  function updateStats() {
    el.masteredStat().textContent = mastered.length;
    el.learningStat().textContent = learning.length;
    el.remainStat().textContent   = remaining.length;
  }

  return { start, flip, pass, fail, skip };
})();


/* ════════════════════════════════════════════════════════════
   ANALYTICS — Charts and data display
═══════════════════════════════════════════════════════════ */
const Analytics = (() => {
  const DOMAIN_NAMES = {
    I:   'I — Project Admin',
    II:  'II — Site & Base',
    III: 'III — Track Layout',
    IV:  'IV — Surfacing',
    V:   'V — Renovation',
  };

  const DOMAIN_COLORS = {
    I: '#818cf8', II: '#34d399', III: '#f97316', IV: '#f472b6', V: '#38bdf8',
  };

  function pct(c, t) { return t > 0 ? Math.round(c / t * 100) : 0; }

  function render() {
    const a    = DB.getAnalytics();
    const sessions = DB.getSessions();

    renderDomainBars(a);
    renderWeakList(a);
    renderRecentList(sessions);
    renderReadinessRing(a);
    renderStats(a);
    renderTrendChart(sessions);
    renderDomainAnalytics(a);
    renderDiffAnalytics(a);
    renderSessionTable(sessions);
  }

  function renderReadinessRing(a) {
    const p = a.total_answered > 0 ? Math.round(a.total_correct / a.total_answered * 100) : 0;
    const circumference = 2 * Math.PI * 50; // r=50
    const arc = document.getElementById('readinessArc');
    if (arc) {
      const offset = circumference - (p / 100) * circumference;
      arc.style.strokeDashoffset = offset;
    }
    const pctEl = document.getElementById('readinessPct');
    if (pctEl) pctEl.textContent = a.total_answered > 0 ? p + '%' : '—';
  }

  function renderStats(a) {
    const set = (id, v) => { const el = document.getElementById(id); if (el) el.textContent = v; };
    set('statAnswered', a.total_answered);
    set('statExams', a.exams_completed);
    set('statStreak', a.streak_days);
  }

  function renderDomainBars(a) {
    const container = document.getElementById('domainBars');
    if (!container) return;
    container.innerHTML = '';
    Object.entries(a.domain).forEach(([d, data]) => {
      const p = pct(data.c, data.t);
      const color = DOMAIN_COLORS[d] || '#f97316';
      const row = document.createElement('div');
      row.className = 'domain-bar-row';
      row.innerHTML = `
        <div class="domain-bar-meta">
          <span class="domain-bar-name">${DOMAIN_NAMES[d] || 'Domain ' + d}</span>
          <span class="domain-bar-pct">${data.t > 0 ? p + '%' : '—'}</span>
        </div>
        <div class="domain-bar-track">
          <div class="domain-bar-fill" style="width:${p}%;background:${color};"></div>
        </div>`;
      container.appendChild(row);
    });
  }

  function renderWeakList(a) {
    const container = document.getElementById('weakList');
    if (!container) return;
    container.innerHTML = '';
    const sorted = Object.entries(a.domain)
      .filter(([, d]) => d.t >= 3)
      .sort((a, b) => pct(a[1].c, a[1].t) - pct(b[1].c, b[1].t))
      .slice(0, 3);

    if (!sorted.length) {
      container.innerHTML = '<p class="empty-state">Answer more questions to see focus areas.</p>';
      return;
    }
    sorted.forEach(([d, data]) => {
      const p = pct(data.c, data.t);
      const item = document.createElement('div');
      item.className = 'weak-item';
      item.innerHTML = `
        <span class="weak-item-pct">${p}%</span>
        <span>${DOMAIN_NAMES[d] || 'Domain ' + d}</span>`;
      container.appendChild(item);
    });
  }

  function renderRecentList(sessions) {
    const container = document.getElementById('recentList');
    if (!container) return;
    container.innerHTML = '';
    if (!sessions.length) {
      container.innerHTML = '<p class="empty-state">No exams completed yet. Start one above!</p>';
      return;
    }
    sessions.slice(0, 8).forEach(s => {
      const item = document.createElement('div');
      item.className = 'recent-item';
      item.setAttribute('role', 'button');
      item.setAttribute('tabindex', '0');
      item.title = 'Review this exam';

      const scoreClass = s.score_percent >= 80 ? 'score-good' : s.score_percent >= 60 ? 'score-ok' : 'score-low';
      const date = new Date(s.timestamp).toLocaleDateString('en-US', { month:'short', day:'numeric' });
      item.innerHTML = `
        <span class="recent-score ${scoreClass}">${s.score_percent}%</span>
        <span class="recent-meta">${s.question_count} questions · ${formatTime(s.time_taken_seconds)}</span>
        <span class="recent-date">${date}</span>`;

      const handler = () => Review.loadSession(s);
      item.addEventListener('click', handler);
      item.addEventListener('keydown', e => { if (e.key === 'Enter') handler(); });
      container.appendChild(item);
    });
  }

  function renderTrendChart(sessions) {
    const canvas = document.getElementById('trendChart');
    const emptyEl = document.getElementById('trendEmpty');
    if (!canvas) return;

    const examSessions = sessions.filter(s => s.mode === 'exam' && s.score_percent !== undefined);
    if (examSessions.length < 2) {
      if (emptyEl) emptyEl.style.display = 'block';
      canvas.style.display = 'none';
      return;
    }
    if (emptyEl) emptyEl.style.display = 'none';
    canvas.style.display = 'block';

    const data = examSessions.slice(0, 10).reverse().map(s => s.score_percent);
    const ctx  = canvas.getContext('2d');
    const W    = canvas.offsetWidth || 600;
    const H    = 180;
    canvas.width  = W;
    canvas.height = H;

    const pad  = { top: 20, right: 20, bottom: 30, left: 36 };
    const gW   = W - pad.left - pad.right;
    const gH   = H - pad.top  - pad.bottom;

    ctx.clearRect(0, 0, W, H);

    // Grid lines
    ctx.strokeStyle = 'rgba(42,48,69,1)';
    ctx.lineWidth   = 1;
    [0, 25, 50, 75, 100].forEach(v => {
      const y = pad.top + gH - (v / 100) * gH;
      ctx.beginPath();
      ctx.moveTo(pad.left, y);
      ctx.lineTo(pad.left + gW, y);
      ctx.stroke();
      ctx.fillStyle = 'rgba(138,144,168,0.6)';
      ctx.font = '10px monospace';
      ctx.textAlign = 'right';
      ctx.fillText(v + '%', pad.left - 6, y + 3.5);
    });

    // Area fill
    const points = data.map((v, i) => ({
      x: pad.left + (data.length === 1 ? gW/2 : (i / (data.length - 1)) * gW),
      y: pad.top  + gH - (v / 100) * gH,
    }));

    const grad = ctx.createLinearGradient(0, pad.top, 0, pad.top + gH);
    grad.addColorStop(0, 'rgba(249,115,22,0.25)');
    grad.addColorStop(1, 'rgba(249,115,22,0)');

    ctx.beginPath();
    ctx.moveTo(points[0].x, pad.top + gH);
    points.forEach(p => ctx.lineTo(p.x, p.y));
    ctx.lineTo(points[points.length - 1].x, pad.top + gH);
    ctx.closePath();
    ctx.fillStyle = grad;
    ctx.fill();

    // Line
    ctx.beginPath();
    ctx.strokeStyle = '#f97316';
    ctx.lineWidth   = 2.5;
    ctx.lineJoin    = 'round';
    points.forEach((p, i) => i === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y));
    ctx.stroke();

    // Dots
    points.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, 4, 0, Math.PI * 2);
      ctx.fillStyle = '#f97316';
      ctx.fill();
      ctx.strokeStyle = '#0f1117';
      ctx.lineWidth   = 1.5;
      ctx.stroke();
    });

    // X-axis labels (exam number)
    ctx.fillStyle = 'rgba(138,144,168,0.6)';
    ctx.font = '10px monospace';
    ctx.textAlign = 'center';
    const startNum = examSessions.slice(0, 10).reverse().length;
    points.forEach((p, i) => {
      ctx.fillText('E' + (i + 1), p.x, H - 8);
    });
  }

  function renderDomainAnalytics(a) {
    const container = document.getElementById('domainAnalytics');
    if (!container) return;
    container.innerHTML = '';
    Object.entries(a.domain).forEach(([d, data]) => {
      const p = pct(data.c, data.t);
      const color = DOMAIN_COLORS[d] || '#f97316';
      const row = document.createElement('div');
      row.className = 'analytics-row';
      row.innerHTML = `
        <div class="analytics-meta">
          <span class="analytics-name">${DOMAIN_NAMES[d]}</span>
          <span class="analytics-pct-label" style="color:${color}">${data.t > 0 ? p + '%' : '—'} (${data.c}/${data.t})</span>
        </div>
        <div class="analytics-track">
          <div class="analytics-fill" style="width:${p}%;background:${color};"></div>
        </div>`;
      container.appendChild(row);
    });
  }

  function renderDiffAnalytics(a) {
    const container = document.getElementById('diffAnalytics');
    if (!container) return;
    container.innerHTML = '';
    const DIFFS = { easy: { label: 'Easy', color: '#22c55e' }, medium: { label: 'Medium', color: '#eab308' }, hard: { label: 'Hard', color: '#ef4444' } };
    Object.entries(a.difficulty).forEach(([d, data]) => {
      const info = DIFFS[d] || { label: d, color: '#8a90a8' };
      const p = pct(data.c, data.t);
      const row = document.createElement('div');
      row.className = 'analytics-row';
      row.innerHTML = `
        <div class="analytics-meta">
          <span class="analytics-name">${info.label}</span>
          <span class="analytics-pct-label" style="color:${info.color}">${data.t > 0 ? p + '%' : '—'} (${data.c}/${data.t})</span>
        </div>
        <div class="analytics-track">
          <div class="analytics-fill" style="width:${p}%;background:${info.color};"></div>
        </div>`;
      container.appendChild(row);
    });
  }

  function renderSessionTable(sessions) {
    const tbody = document.getElementById('sessionTableBody');
    if (!tbody) return;
    tbody.innerHTML = '';
    if (!sessions.length) {
      tbody.innerHTML = '<tr><td colspan="6" class="empty-state">No sessions yet.</td></tr>';
      return;
    }
    sessions.slice(0, 30).forEach(s => {
      const scoreClass = s.score_percent >= 80 ? 'score-good' : s.score_percent >= 60 ? 'score-ok' : 'score-low';
      const date = new Date(s.timestamp).toLocaleDateString('en-US', { month:'short', day:'numeric', year:'2-digit' });
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${date}</td>
        <td>${s.question_count}</td>
        <td><span class="session-score recent-score ${scoreClass}">${s.score_percent}%</span></td>
        <td>${formatTime(s.time_taken_seconds)}</td>
        <td>${s.mode || 'exam'}</td>
        <td><button class="session-review-btn">Review</button></td>`;
      tr.querySelector('.session-review-btn').addEventListener('click', () => Review.loadSession(s));
      tbody.appendChild(tr);
    });
  }

  function formatTime(secs) {
    if (!secs && secs !== 0) return '—';
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${String(s).padStart(2,'0')}`;
  }

  return { render };
})();


/* ════════════════════════════════════════════════════════════
   REVIEW — Display post-exam answer review
═══════════════════════════════════════════════════════════ */
const Review = (() => {
  function loadSession(session) {
    const list = document.getElementById('reviewList');
    list.innerHTML = '';

    const questions = session.questions_snapshot || [];
    const answers   = session.answers || {};

    if (!questions.length) {
      list.innerHTML = '<p class="empty-state">No question data saved for this session.</p>';
      UI.navigate('review');
      return;
    }

    questions.forEach((q, i) => {
      const chosen  = answers[q.id];
      const correct = chosen === q.correct;

      const item = document.createElement('div');
      item.className = `review-item ${correct ? 'review-correct' : 'review-incorrect'}`;

      const chosenText  = chosen  ? `${chosen}. ${q.choices[chosen]}` : '(skipped)';
      const correctText = `${q.correct}. ${q.choices[q.correct]}`;

      item.innerHTML = `
        <div class="review-item-header">
          <span class="review-verdict-icon">${correct ? '✓' : '✗'}</span>
          <span class="q-domain-badge domain-${q.domain}">Domain ${q.domain}</span>
          <span class="q-diff-badge" data-diff="${q.difficulty}">${q.difficulty}</span>
          <span class="q-source" style="margin-left:auto">Q${i+1}</span>
        </div>
        <p class="review-q">${q.question}</p>
        <div class="review-answer-row">
          <span class="review-your-answer">Your answer: <strong>${chosenText}</strong></span>
          ${!correct ? `<span class="review-correct-answer">Correct: <strong>${correctText}</strong></span>` : ''}
        </div>
        <div class="review-explanation">
          ${q.explanation || ''}
          ${q.source_document ? `<p class="review-citation">📖 ${Exam.buildCitation(q)}</p>` : ''}
        </div>`;

      list.appendChild(item);
    });

    UI.navigate('review');
  }

  return { loadSession };
})();


/* ════════════════════════════════════════════════════════════
   UI — Navigation, toast, modal, event wiring
═══════════════════════════════════════════════════════════ */
const UI = (() => {
  let currentView = 'dashboard';

  function navigate(viewName) {
    // Deactivate all views
    document.querySelectorAll('.view').forEach(v => {
      v.classList.remove('active');
      v.hidden = true;
    });
    // Activate target
    const target = document.getElementById('view-' + viewName);
    if (target) {
      target.classList.add('active');
      target.hidden = false;
    }
    // Update nav buttons
    document.querySelectorAll('.nav-btn[data-view]').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.view === viewName);
      btn.setAttribute('aria-current', btn.dataset.view === viewName ? 'page' : 'false');
    });
    currentView = viewName;

    // Close hamburger menu
    const nav = document.getElementById('mainNav');
    nav.classList.remove('open');
    document.getElementById('hamburger').setAttribute('aria-expanded', 'false');

    // Refresh analytics on navigate
    if (viewName === 'analytics' || viewName === 'dashboard') {
      Analytics.render();
    }
    // Redraw trend chart after layout is visible (avoids 0-width canvas)
    if (viewName === 'analytics') {
      requestAnimationFrame(() => Analytics.render());
    }
  }

  function toast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    const t = document.createElement('div');
    t.className = `toast toast-${type}`;
    t.textContent = message;
    container.appendChild(t);
    setTimeout(() => { if (t.parentNode) t.parentNode.removeChild(t); }, 3000);
  }

  function showModal(id) {
    const m = document.getElementById(id);
    if (m) { m.hidden = false; m.querySelector('[autofocus], button')?.focus(); }
  }

  function hideModal(id) {
    const m = document.getElementById(id);
    if (m) m.hidden = true;
  }

  function startExam(count, adaptive, domainFilter, diffFilter) {
    const qs = Engine.selectQuestions(count, domainFilter, diffFilter, adaptive);
    if (!qs.length) { toast('No questions match your filters. Try broader settings.', 'error'); return; }
    navigate('exam');
    // Reset exam view state
    document.getElementById('resultsPanel').hidden = true;
    document.querySelector('.exam-wrap').hidden = false;
    Exam.init(qs);
    toast(`Exam started — ${qs.length} questions`, 'success');
  }

  function wireEvents() {
    /* ── Navigation ── */
    document.getElementById('mainNav').addEventListener('click', e => {
      const btn = e.target.closest('.nav-btn[data-view]');
      if (btn) navigate(btn.dataset.view);
    });

    document.getElementById('hamburger').addEventListener('click', function() {
      const nav = document.getElementById('mainNav');
      const expanded = nav.classList.toggle('open');
      this.setAttribute('aria-expanded', String(expanded));
    });

    /* ── Dashboard quick-start ── */
    document.querySelectorAll('.qs-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const count    = parseInt(btn.dataset.count, 10);
        const adaptive = btn.dataset.adaptive === 'true';
        const domain   = document.getElementById('domainFilter').value;
        const diff     = document.getElementById('diffFilter').value;
        startExam(count, adaptive, domain, diff);
      });
    });

    /* ── Exam controls ── */
    document.getElementById('prevBtn').addEventListener('click', () => Exam.prev());
    document.getElementById('nextBtn').addEventListener('click', () => Exam.next());
    document.getElementById('skipBtn').addEventListener('click', () => Exam.skip());
    document.getElementById('flagCurrentBtn').addEventListener('click', () => Exam.toggleFlag());
    document.getElementById('examEndBtn').addEventListener('click', () => {
      const state = Exam.getState();
      const answered = Object.keys(state.answers).length;
      if (answered < state.questions.length) {
        const confirmed = window.confirm(`You've answered ${answered} of ${state.questions.length} questions. End and score now?`);
        if (!confirmed) return;
      }
      Exam.finish();
    });

    // Keyboard navigation in exam
    document.addEventListener('keydown', e => {
      if (currentView !== 'exam') return;
      if (document.getElementById('resultsPanel') && !document.getElementById('resultsPanel').hidden) return;
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') Exam.next();
      if (e.key === 'ArrowLeft'  || e.key === 'ArrowUp')   Exam.prev();
      if (e.key >= '1' && e.key <= '4') {
        const letters = ['A','B','C','D'];
        const btn = document.querySelector(`.choice-btn[data-letter="${letters[parseInt(e.key)-1]}"]`);
        if (btn && !btn.disabled) btn.click();
      }
    });

    /* ── Results panel ── */
    document.getElementById('reviewAnswersBtn').addEventListener('click', () => {
      Review.loadSession({
        questions_snapshot: Exam.getState().questions,
        answers: Exam.getState().answers,
      });
    });

    document.getElementById('newExamFromResultsBtn').addEventListener('click', () => navigate('dashboard'));
    document.getElementById('dashFromResultsBtn').addEventListener('click',   () => navigate('dashboard'));

    /* ── Review back button ── */
    document.getElementById('backFromReview').addEventListener('click', () => {
      const state = Exam.getState();
      // If we came from an active exam, go back to it
      navigate(state.questions.length > 0 ? 'exam' : 'dashboard');
    });

    /* ── Study mode ── */
    document.getElementById('startStudyBtn').addEventListener('click', () => {
      const domain = document.getElementById('studyDomain').value;
      const diff   = document.getElementById('studyDiff').value;
      Study.start(domain, diff);
    });
    document.getElementById('sPrevBtn').addEventListener('click', () => Study.prev());
    document.getElementById('sNextBtn').addEventListener('click', () => Study.next());

    /* ── Flashcards ── */
    document.getElementById('startFCBtn').addEventListener('click', () => {
      const domain = document.getElementById('fcDomain').value;
      FC.start(domain);
    });

    const fcCard = document.getElementById('flashcard');
    fcCard.addEventListener('click',   () => FC.flip());
    fcCard.addEventListener('keydown', e => { if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); FC.flip(); }});

    document.getElementById('fcFail').addEventListener('click', () => FC.fail());
    document.getElementById('fcPass').addEventListener('click', () => FC.pass());
    document.getElementById('fcSkipBtn').addEventListener('click', () => FC.skip());

    /* ── Reset ── */
    document.getElementById('resetDataBtn').addEventListener('click', () => showModal('resetModal'));
    document.getElementById('confirmResetBtn').addEventListener('click', () => {
      DB.resetAll();
      hideModal('resetModal');
      Analytics.render();
      toast('All progress reset.', 'info');
      navigate('dashboard');
    });
    document.getElementById('cancelResetBtn').addEventListener('click', () => hideModal('resetModal'));

    // Close modal on overlay click
    document.getElementById('resetModal').addEventListener('click', e => {
      if (e.target === e.currentTarget) hideModal('resetModal');
    });

    // Escape key closes modals
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        document.querySelectorAll('.modal-overlay:not([hidden])').forEach(m => {
          m.hidden = true;
        });
      }
    });
  }

  return { navigate, toast, showModal, hideModal, startExam, wireEvents };
})();


/* ════════════════════════════════════════════════════════════
   INIT — Boot sequence
═══════════════════════════════════════════════════════════ */
(function init() {
  // Verify question bank loaded
  if (!window.CTB_QUESTIONS || !Array.isArray(window.CTB_QUESTIONS)) {
    document.body.innerHTML = `
      <div style="padding:3rem;text-align:center;font-family:sans-serif;color:#ef4444;">
        <h1>⚠ question-bank.js not loaded</h1>
        <p style="color:#8a90a8;margin-top:1rem;">
          Ensure question-bank.js is in the same folder as index.html and loaded before app.js.
        </p>
      </div>`;
    return;
  }

  // Wire all DOM events
  UI.wireEvents();

  // Initial render
  Analytics.render();

  // Navigate to dashboard (default)
  UI.navigate('dashboard');

  // Toast on load with question count
  const count = window.CTB_QUESTIONS.length;
  setTimeout(() => UI.toast(`${count} questions loaded. Ready to study!`, 'success'), 500);
})();
