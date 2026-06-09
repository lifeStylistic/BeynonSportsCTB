/**
 * auth.js
 *
 * Session management and access control for the CTB Exam Prep platform.
 * Loaded on: index.html, account.html
 * Not loaded on: login.html, signup.html (those pages handle their own session checks)
 *
 * On load:
 *   1. Verify Supabase session — redirect to login.html if none
 *   2. Fetch user profile (role, subscription_status) from the profiles table
 *   3. Expose window.CTBAuth with role helpers and sign-out
 *   4. index.html  — check access, show gate or dynamically load app scripts
 *   5. account.html — render profile data into the page
 */

'use strict';

(async function initAuth() {
  const page = window.location.pathname.split('/').pop() || 'index.html';

  // ── 1. Verify session ─────────────────────────────────────────────
  const { data: { session } } = await supabaseClient.auth.getSession();

  if (!session) {
    window.location.replace('login.html');
    return;
  }

  // ── 2. Fetch profile ──────────────────────────────────────────────
  const { data: profile } = await supabaseClient
    .from('profiles')
    .select('id, email, full_name, role, subscription_status, subscription_plan, subscription_end')
    .eq('id', session.user.id)
    .single();

  // Fallback if profile row does not exist yet
  const safeProfile = profile || {
    id:                  session.user.id,
    email:               session.user.email,
    full_name:           null,
    role:                'guest',
    subscription_status: 'inactive',
    subscription_plan:   null,
    subscription_end:    null,
  };

  // ── 3. Expose auth state globally ─────────────────────────────────
  window.CTBAuth = {
    session,
    user:    session.user,
    profile: safeProfile,

    hasAccess() {
      const { role, subscription_status } = this.profile;
      if (role === 'admin' || role === 'super_admin') return true;
      return role === 'subscriber' && subscription_status === 'active';
    },

    isAdmin() {
      const r = this.profile.role;
      return r === 'admin' || r === 'super_admin';
    },

    isSuperAdmin() {
      return this.profile.role === 'super_admin';
    },

    async signOut() {
      await supabaseClient.auth.signOut();
      window.location.replace('login.html');
    },
  };

  // ── 4. Wire shared nav elements ───────────────────────────────────
  const accountBtn = document.getElementById('accountNavBtn');
  const signOutBtn = document.getElementById('signOutBtn');

  if (accountBtn) accountBtn.removeAttribute('style');
  if (signOutBtn) {
    signOutBtn.removeAttribute('style');
    signOutBtn.addEventListener('click', () => window.CTBAuth.signOut());
  }

  // ── 5. Page-specific handling ─────────────────────────────────────
  if (page === 'account.html') {
    renderAccountPage(safeProfile);
    wireAccountPageEvents();
    return;
  }

  // index.html — gate check, then load app scripts
  if (!window.CTBAuth.hasAccess()) {
    showAccessGate(safeProfile);
    return;
  }

  loadScript('question-bank.js').then(() => loadScript('app.js'));
})();


/* ── Helpers ──────────────────────────────────────────────────────── */

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const s    = document.createElement('script');
    s.src      = src;
    s.onload   = resolve;
    s.onerror  = () => reject(new Error(`[CTB] Failed to load ${src}`));
    document.body.appendChild(s);
  });
}

function showAccessGate(profile) {
  const appMain    = document.getElementById('appMain');
  const gate       = document.getElementById('accessGate');
  const emailEl    = document.getElementById('gateUserEmail');
  const signOutBtn = document.getElementById('gateSignOutBtn');

  if (appMain) appMain.hidden = true;
  if (!gate)   return;

  if (emailEl && profile.email) emailEl.textContent = profile.email;

  if (signOutBtn) {
    signOutBtn.addEventListener('click', async () => {
      await supabaseClient.auth.signOut();
      window.location.replace('login.html');
    });
  }

  gate.hidden = false;
}

function renderAccountPage(profile) {
  const set = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.textContent = val || '—';
  };
  set('accountEmail',     profile.email);
  set('accountName',      profile.full_name);
  set('accountRole',      roleLabel(profile.role));
  set('accountSubStatus', subStatusLabel(profile.subscription_status));
  set('accountSubPlan',   planLabel(profile.subscription_plan));
  set('accountSubEnd',    formatDate(profile.subscription_end));
}

function wireAccountPageEvents() {
  const signOutBtn = document.getElementById('accountSignOutBtn');
  if (signOutBtn) {
    signOutBtn.addEventListener('click', () => window.CTBAuth.signOut());
  }
}

function roleLabel(role) {
  const map = {
    guest:       'Guest',
    subscriber:  'Subscriber',
    admin:       'Admin',
    super_admin: 'Super Admin',
  };
  return map[role] || role || '—';
}

function subStatusLabel(status) {
  const map = {
    active:   'Active',
    trialing: 'Trial',
    past_due: 'Past Due',
    canceled: 'Canceled',
    inactive: 'No Subscription',
  };
  return map[status] || status || 'No Subscription';
}

function planLabel(plan) {
  const map = {
    monthly: 'Monthly — $9.99/mo',
    annual:  'Annual — $99/yr',
  };
  return map[plan] || '—';
}

function formatDate(str) {
  if (!str) return '—';
  return new Date(str).toLocaleDateString('en-US', {
    year:  'numeric',
    month: 'long',
    day:   'numeric',
  });
}
