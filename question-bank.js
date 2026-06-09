/**
 * CTB Exam Prep — Question Bank
 * Source: ASBA Running Tracks: A Construction & Maintenance Manual, 11th Edition (2023)
 * Additional source: ASBA Certification Handbook – Tennis & Track (Rev. 11/10/2020)
 *
 * All questions verified against primary source documents.
 * Page references cite the ASBA Manual 11th Ed. unless noted.
 *
 * Exposes: window.CTB_QUESTIONS (Array)
 */

window.CTB_QUESTIONS = [

  /* ══════════════════════════════════════════════════════════
     DOMAIN I — PROJECT ADMINISTRATION (10%)
  ══════════════════════════════════════════════════════════ */

  {
    id: "I-E-001",
    domain: "I", domain_name: "Project Administration",
    subcategory: "Certification & Eligibility",
    difficulty: "easy",
    question: "The ASBA Certified Track Builder (CTB) examination consists of how many multiple-choice questions and how long is the exam?",
    choices: {
      A: "50 questions, 2 hours",
      B: "75 questions, 3 hours",
      C: "100 questions, 4 hours",
      D: "100 questions, 2 hours"
    },
    correct: "C",
    explanation: "The CTB examination is a four-hour written test consisting of 100 multiple-choice questions. It is an open-book exam; candidates may refer to the ASBA Running Tracks manual and other publications.",
    source_document: "ASBA Certification Handbook – Tennis & Track",
    source_page: "4"
  },

  {
    id: "I-E-002",
    domain: "I", domain_name: "Project Administration",
    subcategory: "Certification & Eligibility",
    difficulty: "easy",
    question: "What is the minimum years of field experience required to apply for ASBA CTB certification?",
    choices: {
      A: "1 year",
      B: "2 years",
      C: "3 years",
      D: "5 years"
    },
    correct: "C",
    explanation: "A candidate must have had a minimum of three years of experience in running track construction at the time of application.",
    source_document: "ASBA Certification Handbook – Tennis & Track",
    source_page: "4"
  },

  {
    id: "I-E-003",
    domain: "I", domain_name: "Project Administration",
    subcategory: "Certification & Eligibility",
    difficulty: "easy",
    question: "How many eligibility points must a track builder demonstrate to qualify for ASBA CTB certification?",
    choices: {
      A: "50 points",
      B: "75 points",
      C: "100 points",
      D: "150 points"
    },
    correct: "C",
    explanation: "Track builders must demonstrate 100 eligibility points from the areas of project administration, site/sub-base/base work, layout, surfacing and marking, and track renovation.",
    source_document: "ASBA Certification Handbook – Tennis & Track",
    source_page: "4"
  },

  {
    id: "I-E-004",
    domain: "I", domain_name: "Project Administration",
    subcategory: "Delivery Methods",
    difficulty: "easy",
    question: "In which project delivery method does the owner engage a design firm to prepare drawings and specifications, then put the project out to competitive bid?",
    choices: {
      A: "Design/Build",
      B: "Negotiated Agreement",
      C: "Design/Bid",
      D: "Request for Proposal"
    },
    correct: "C",
    explanation: "In the design/bid (competitive bid) approach, the owner engages a design firm to devise plans and specifications, then bids are submitted by general contractors. The lowest responsive bid typically wins.",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "3"
  },

  {
    id: "I-M-001",
    domain: "I", domain_name: "Project Administration",
    subcategory: "Delivery Methods",
    difficulty: "medium",
    question: "A school district wants a contractor who both designs and builds the track facility, streamlining the process and reducing costs. Which delivery method best fits this scenario?",
    choices: {
      A: "Design/Bid",
      B: "Design/Build",
      C: "Cooperative Purchasing",
      D: "Lease/Leaseback"
    },
    correct: "B",
    explanation: "In a design/build project, the owner works with an expert contractor or contractor/designer team that both designs and builds the project. This streamlines the design and construction process, saving time and cost.",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "5"
  },

  {
    id: "I-M-002",
    domain: "I", domain_name: "Project Administration",
    subcategory: "Planning",
    difficulty: "medium",
    question: "Which of the following is NOT identified in the ASBA Manual as a component of a complete project budget?",
    choices: {
      A: "Site investigation and drainage",
      B: "Track construction (base, pavement, surface, striping)",
      C: "Athlete performance bonuses",
      D: "Permits and site acquisition"
    },
    correct: "C",
    explanation: "The ASBA Manual lists feasibility study, site acquisition, planning and design, permits, site investigation, site preparation, drainage, utilities, track construction, fencing, accessories, and landscaping as budget components. Athlete performance bonuses are not a construction budget item.",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "10"
  },

  {
    id: "I-H-001",
    domain: "I", domain_name: "Project Administration",
    subcategory: "Delivery Methods",
    difficulty: "hard",
    question: "A 2008 decision by the Massachusetts Office of the Attorney General upheld a school district's right to restrict track bidding. Which requirement did the district use to prequalify bidders, and what was the legal basis for upholding it?",
    choices: {
      A: "Requiring bidders to be licensed engineers; the district had authority over professional licensing",
      B: "Requiring bidders to employ an ASBA Certified Track Builder; this formed a rational basis for identifying qualified contractors and was not overly restrictive because certification is open to anyone meeting ASBA's standards",
      C: "Requiring bidders to use only union labor; this was upheld under state labor laws",
      D: "Requiring a performance bond equal to 200% of the contract; this protected public funds"
    },
    correct: "B",
    explanation: "The Massachusetts decision upheld the district's requirement that bidders employ an ASBA Certified Track Builder. The Attorney General found this was not arbitrary because it 'formed a rational basis' for identifying qualified contractors, and was not overly restrictive because 'certification is open to anyone who meets the ASBA's standards.'",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "4"
  },

  /* ══════════════════════════════════════════════════════════
     DOMAIN II — SITE, SUB-BASE AND BASE WORK (16%)
  ══════════════════════════════════════════════════════════ */

  {
    id: "II-E-001",
    domain: "II", domain_name: "Site, Sub-base and Base Work",
    subcategory: "Site Assessment",
    difficulty: "easy",
    question: "Before any track construction begins, what type of professional investigation should be conducted to determine whether site soils are suitable for the project?",
    choices: {
      A: "Environmental impact statement",
      B: "Geotechnical investigation",
      C: "Hydrological survey",
      D: "Atmospheric assessment"
    },
    correct: "B",
    explanation: "Any site considered for the construction of a running track must have stable soil. A geotechnical investigation determines whether site soils are suitable for the project or identifies recommended modifications.",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "15"
  },

  {
    id: "II-E-002",
    domain: "II", domain_name: "Site, Sub-base and Base Work",
    subcategory: "Aggregate Base",
    difficulty: "easy",
    question: "According to the ASBA Manual, what is the minimum thickness of aggregate base course after compaction for a running track?",
    choices: {
      A: "2 inches",
      B: "3 inches",
      C: "4 inches",
      D: "6 inches"
    },
    correct: "C",
    explanation: "The ASBA Manual states that aggregate base course shall be installed to a thickness that depends on the geotechnical investigation but 'is not less than 4 inches after compaction.'",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "28"
  },

  {
    id: "II-E-003",
    domain: "II", domain_name: "Site, Sub-base and Base Work",
    subcategory: "Compaction",
    difficulty: "easy",
    question: "To what minimum Proctor Test compaction percentage must aggregate base material be compacted?",
    choices: {
      A: "85%",
      B: "90%",
      C: "95%",
      D: "100%"
    },
    correct: "C",
    explanation: "The ASBA Manual states the aggregate base material must be compacted to '95% minimum Proctor Test as outlined in the geotechnical investigation and recommendations.'",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "29"
  },

  {
    id: "II-E-004",
    domain: "II", domain_name: "Site, Sub-base and Base Work",
    subcategory: "Site Grading",
    difficulty: "easy",
    question: "What is the maximum longitudinal slope permitted in the running direction over the length of any individual track event?",
    choices: {
      A: "1.0%",
      B: "0.5%",
      C: "0.2%",
      D: "0.1%"
    },
    correct: "D",
    explanation: "ASBA Manual states grading rules allow for 'a maximum longitudinal slope of one tenth of one percent (0.1%) in the running direction over the length of any individual event.' This equals 1:1000.",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "23"
  },

  {
    id: "II-M-001",
    domain: "II", domain_name: "Site, Sub-base and Base Work",
    subcategory: "Compaction Tolerance",
    difficulty: "medium",
    question: "After aggregate base is spread and compacted, what is the maximum allowable surface variation when measured in any direction with a 10-foot straightedge?",
    choices: {
      A: "0.25 inch",
      B: "0.5 inch",
      C: "0.75 inch",
      D: "1.0 inch"
    },
    correct: "B",
    explanation: "The ASBA Manual states that compacted aggregate base 'should not vary more than 0.5\" in 10' when measured in any direction with a 10' straight edge.'",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "29"
  },

  {
    id: "II-M-002",
    domain: "II", domain_name: "Site, Sub-base and Base Work",
    subcategory: "Aggregate Base",
    difficulty: "medium",
    question: "What is the maximum depth per layer in which crushed aggregate should be placed before compaction?",
    choices: {
      A: "3 inches",
      B: "4 inches",
      C: "6 inches",
      D: "8 inches"
    },
    correct: "C",
    explanation: "The ASBA Manual specifies: 'The crushed aggregate is placed in layers not more than 6\" in depth and then compacted.'",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "29"
  },

  {
    id: "II-M-003",
    domain: "II", domain_name: "Site, Sub-base and Base Work",
    subcategory: "Drainage",
    difficulty: "medium",
    question: "Which type of drain has become the most common system for track construction and is typically used around the inside perimeter of the track to catch surface drainage?",
    choices: {
      A: "French drain",
      B: "Swale with catch basins",
      C: "Precast channel drain",
      D: "Perforated pipe trench drain"
    },
    correct: "C",
    explanation: "Per the ASBA Manual: 'Precast channel drains have become the most common system for track construction. They typically are used around the inside perimeter of the track to catch surface drainage from the track oval.'",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "25"
  },

  {
    id: "II-M-004",
    domain: "II", domain_name: "Site, Sub-base and Base Work",
    subcategory: "Drainage",
    difficulty: "medium",
    question: "What is the maximum cross-slope permitted on a track oval for NCAA and USATF (World Athletics standard)?",
    choices: {
      A: "0.5% (1:200)",
      B: "1.0% (1:100)",
      C: "2.0% (1:50)",
      D: "0.1% (1:1000)"
    },
    correct: "B",
    explanation: "Per the ASBA Manual Appendix D slope table and Appendix C specs: maximum cross-slope on the track oval is 1.0% (1:100) for WA, USATF, and NCAA. NFHS allows up to 2.0%.",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "175"
  },

  {
    id: "II-H-001",
    domain: "II", domain_name: "Site, Sub-base and Base Work",
    subcategory: "Soil Conditions",
    difficulty: "hard",
    question: "A geotechnical investigation identifies peat and expansive clay in a proposed track site's upper 3 feet. Which approach does the ASBA Manual NOT recommend for soil stabilization?",
    choices: {
      A: "Undercutting and replacing with suitable soils",
      B: "Placement of a geotextile membrane over questionable soils",
      C: "Soil stabilization with lime",
      D: "Increasing the number of irrigation heads to keep soil moist"
    },
    correct: "D",
    explanation: "The ASBA Manual lists valid remediation methods including geotextile membrane, full-depth construction, uniform blending, lowering water table, frost-resistant granular base, more extensive drainage, soil stabilization/treatment, and undercutting/replacing. Increasing irrigation would worsen expansive clay conditions by adding moisture.",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "22"
  },

  {
    id: "II-H-002",
    domain: "II", domain_name: "Site, Sub-base and Base Work",
    subcategory: "Drainage Design",
    difficulty: "hard",
    question: "A new track is to be constructed adjacent to a synthetic turf infield. The ASBA Manual warns about a specific drainage risk in this configuration. What is it?",
    choices: {
      A: "The turf infill will wash onto the track surface during heavy rain",
      B: "The collector trench for the synthetic turf field may allow water to migrate under the track subbase if not positioned far enough away or below the track subbase materials",
      C: "The synthetic turf creates excessive UV reflection that accelerates surface degradation",
      D: "The turf drainage pipes will rust and contaminate the aggregate base"
    },
    correct: "B",
    explanation: "The ASBA Manual states: 'when building an adjacent synthetic turf field on the inside of the track, ensure the collector trench for the field is far enough away and/or lower than the bottom of track subbase materials to prevent water from making its way under the track.'",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "25"
  },

  /* ══════════════════════════════════════════════════════════
     DOMAIN III — TRACK LAYOUT (40%)
  ══════════════════════════════════════════════════════════ */

  {
    id: "III-E-001",
    domain: "III", domain_name: "Track Layout",
    subcategory: "Track Geometry — Formulas",
    difficulty: "easy",
    question: "What is the standard formula for calculating the total distance of a 400m track (non-double-bend configuration)?",
    choices: {
      A: "400m = 2 × straight length + π × radius to measure line",
      B: "400m = 4 × straight length + 2 × radius to measure line",
      C: "400m = 2 × distance between radius points + 2 × (π × radius to measure line)",
      D: "400m = straight length + 2 × π × radius to measure line"
    },
    correct: "C",
    explanation: "Per the ASBA Manual: '400m = 2 × distance between the radius points + 2 × arc length' where 'Arc length = Pi × radius to the measure line.' This equals: 400m = 2(R-to-R) + 2(π × r).",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "18"
  },

  {
    id: "III-E-002",
    domain: "III", domain_name: "Track Layout",
    subcategory: "Measure Line",
    difficulty: "easy",
    question: "When a track has a painted inside line (no raised curb), how far from the measure line is the runner's edge of Lane 1's inside line?",
    choices: {
      A: "10cm (0.328 ft)",
      B: "20cm (0.656 ft)",
      C: "30cm (0.984 ft)",
      D: "50cm (1.640 ft)"
    },
    correct: "B",
    explanation: "Per the ASBA Manual: '20cm = 0.6562 ft or 7.87\" — Distance from the measure line to the start of lane 1 (flush curb/painted line rule).' When a raised curb is used, the distance is 30cm.",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "18"
  },

  {
    id: "III-E-003",
    domain: "III", domain_name: "Track Layout",
    subcategory: "Measure Line",
    difficulty: "easy",
    question: "When a raised curb is used in Lane 1, how far from the measure line is the runner's edge of the raised curb?",
    choices: {
      A: "15cm",
      B: "20cm",
      C: "25cm",
      D: "30cm"
    },
    correct: "D",
    explanation: "Per the ASBA Manual: '30cm = 0.9843 ft or 11.81\" — Distance from the measure line to the start of lane 1 (raised curb rule).' A track designed for a raised curb but measured without the curb will be approximately 399.37m long.",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "18"
  },

  {
    id: "III-E-004",
    domain: "III", domain_name: "Track Layout",
    subcategory: "Lane Dimensions",
    difficulty: "easy",
    question: "What is the standard lane width for high school (NFHS) running tracks?",
    choices: {
      A: "36 inches (0.914m)",
      B: "42 inches (1.0668m)",
      C: "48 inches (1.2192m)",
      D: "60 inches (1.524m)"
    },
    correct: "B",
    explanation: "Per the ASBA Manual Appendix C: 'NFHS — Standard lane width 42\" (1.07m). Each lane is the same width.' The ASBA Manual also lists 1.0668m = 3.5 ft or 42\" as the standard lane width (except World Athletics).",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "18"
  },

  {
    id: "III-E-005",
    domain: "III", domain_name: "Track Layout",
    subcategory: "Lane Dimensions",
    difficulty: "easy",
    question: "What is the standard lane width for World Athletics (WA) competition tracks?",
    choices: {
      A: "1.0668m (42 inches)",
      B: "1.1000m (43.3 inches)",
      C: "1.2192m (48 inches)",
      D: "1.5000m (59 inches)"
    },
    correct: "C",
    explanation: "Per the ASBA Manual: '1.2192m = 4.003 ft or 48\" — Width of standard lane (WA).' World Athletics specifies 1.22m ± 0.03.",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "18"
  },

  {
    id: "III-E-006",
    domain: "III", domain_name: "Track Layout",
    subcategory: "Track Configurations",
    difficulty: "easy",
    question: "The World Athletics standard 400m track configuration has what straightaway length and measure line radius?",
    choices: {
      A: "Straights 100m, radius 36.80m",
      B: "Straights 84.39m, radius 36.80m",
      C: "Straights 90.00m, radius 32.00m",
      D: "Straights 84.39m, radius 36.50m"
    },
    correct: "B",
    explanation: "Per the ASBA Manual: 'World Athletics (WA) specifies a type of track that has straightaways of 84.39m and measure line radii of 36.80m.' The 36.50m figure is the radius to the runner's edge of the first lane line (with curb).",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "17"
  },

  {
    id: "III-M-001",
    domain: "III", domain_name: "Track Layout",
    subcategory: "Track Geometry — Calculation",
    difficulty: "medium",
    question: "An existing running track has measurements of 329.5 feet between radius points and 109.4 feet to the measuring line. What is the total length of this track?",
    choices: {
      A: "1,345.42 feet",
      B: "1,345.39 feet",
      C: "1,346.38 feet",
      D: "1,347.04 feet"
    },
    correct: "C",
    explanation: "Using the formula: Length = 2(R-to-R) + 2(π × r). Straight: 329.5 × 2 = 659.0 ft. Curved: 109.4 × 2 × 3.1416 = 687.38 ft. Total = 659.0 + 687.38 = 1,346.38 ft.",
    source_document: "ASBA Certification Handbook – Tennis & Track",
    source_page: "18 (Sample Q1)"
  },

  {
    id: "III-M-002",
    domain: "III", domain_name: "Track Layout",
    subcategory: "Stagger Calculations",
    difficulty: "medium",
    question: "A track is designed with 8 lanes, each 1.22m wide. What is the stagger for Lane 2 relative to Lane 1?",
    choices: {
      A: "3.83m",
      B: "7.66m",
      C: "9.52m",
      D: "5.28m"
    },
    correct: "B",
    explanation: "Stagger per lane = 2π × lane width = 2 × 3.1416 × 1.22m = 7.66m. Each lane adds one full circumference difference (2π × lane width) due to the curve. This represents the one-lap stagger needed so all runners travel the same distance.",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "18"
  },

  {
    id: "III-M-003",
    domain: "III", domain_name: "Track Layout",
    subcategory: "Marking Tolerances",
    difficulty: "medium",
    question: "For NFHS tracks, what is the acceptable plus tolerance for a 400m lap measurement? What is the minus tolerance?",
    choices: {
      A: "Plus tolerance: 4cm; Minus tolerance: 4cm",
      B: "Plus tolerance: 8cm; Minus tolerance: none allowed",
      C: "Plus tolerance: 10cm; Minus tolerance: 2cm",
      D: "Plus tolerance: 6cm; Minus tolerance: 6cm"
    },
    correct: "B",
    explanation: "Per the ASBA Manual: 'Note that no governing body allows a minus tolerance of any kind in any track measurement.' For NFHS, the plus tolerance is 8cm per 400m lap. For WA and NCAA, plus tolerance cannot exceed 4cm per 400m lap.",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "110"
  },

  {
    id: "III-M-004",
    domain: "III", domain_name: "Track Layout",
    subcategory: "Track Configurations",
    difficulty: "medium",
    question: "What is a primary advantage of using a larger radius (wider curve) on a running track?",
    choices: {
      A: "Smaller overall site footprint",
      B: "Greater flexibility for spectator sightlines",
      C: "Wider radius favors runners, enhances performance, lessens injury, and allows greater flexibility in placing fields within the oval",
      D: "Lower construction cost due to shorter total distance"
    },
    correct: "C",
    explanation: "Per the ASBA Manual regarding equal quadrant vs. wider-radius tracks: 'A wider radius, such as is found on the International Standard and Double Bend tracks, favors runners and enhances performance; a wider radius lessens injury; a wider radius allows greater flexibility in placing fields, especially soccer pitches, within the track oval.'",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "17"
  },

  {
    id: "III-M-005",
    domain: "III", domain_name: "Track Layout",
    subcategory: "Field Event Dimensions",
    difficulty: "medium",
    question: "What is the minimum runway length for Long Jump, Triple Jump, and Pole Vault per WA, USATF, and NFHS rules?",
    choices: {
      A: "30m (98.4 ft)",
      B: "35m (114.8 ft)",
      C: "40m (131.2 ft)",
      D: "50m (164.0 ft)"
    },
    correct: "C",
    explanation: "Per the ASBA Manual Appendix C: 'The minimum length of the runway shall be 40m' for Long Jump (WA, USATF, NCAA, NFHS all specify 40m minimum). NFHS recommends 45m.",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "166"
  },

  {
    id: "III-H-001",
    domain: "III", domain_name: "Track Layout",
    subcategory: "Track Geometry — Calculation",
    difficulty: "hard",
    question: "High school field event areas are designed to NFHS minimum requirements: 4 long jump/triple jump runways and 2 pole vault runways with 2 (5m×5m) landing pads. Asphalt is 3\" thick, weighing 330 lbs/sq yd. Approximately how many tons of asphalt are required?",
    choices: {
      A: "54 tons",
      B: "64 tons",
      C: "61 tons",
      D: "57 tons"
    },
    correct: "B",
    explanation: "LJ/TJ: 1.07m × 3.28083 = 3.51 ft wide; 40m × 3.28083 + 12 ft = 143.23 ft long. Area = 502.75 sq ft/runway × 4 = 2,010.98 sq ft ÷ 9 = 223.44 sq yd. PV: 3.51 × 131.23 = 460.63 sq ft × 2 ÷ 9 = 102.36 sq yd. Pads: 16.404 × 16.404 = 269.09 sq ft × 2 ÷ 9 = 59.80 sq yd. Total = 385.60 sq yd × 330 lbs/sq yd × (3/12) ÷ 2000 = 63.6 tons → 64 tons.",
    source_document: "ASBA Certification Handbook – Tennis & Track",
    source_page: "18 (Sample Q3)"
  },

  {
    id: "III-H-002",
    domain: "III", domain_name: "Track Layout",
    subcategory: "Track Geometry — Calculation",
    difficulty: "hard",
    question: "A track has a World Athletics standard configuration: 84.39m straights and a measure line radius of 36.80m. What is the theoretical track length to the nearest 0.001m?",
    choices: {
      A: "399.756m",
      B: "400.000m",
      C: "400.087m",
      D: "401.225m"
    },
    correct: "B",
    explanation: "Length = 2(84.39) + 2(π × 36.80) = 168.78 + 2(115.610) = 168.78 + 231.220 = 400.000m. This is the WA design standard — the values 84.39m and 36.80m are specifically chosen to produce exactly 400m.",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "17"
  },

  {
    id: "III-H-003",
    domain: "III", domain_name: "Track Layout",
    subcategory: "Double-Bend Formula",
    difficulty: "hard",
    question: "For a double-bend track with 60° sectors, which formula correctly represents the total track length?",
    choices: {
      A: "400m = 2 × SD + π × SR + π × LR",
      B: "400m = 2 × SD + (4/3) × π × SR + (2/3) × π × LR",
      C: "400m = 2 × SD + 2π × SR + 2π × LR",
      D: "400m = 4 × SD + π × (SR + LR)"
    },
    correct: "B",
    explanation: "Per the ASBA Manual for a double-bend (60° sector) facility: '400m = 2 × SD + 4/3 × Pi × SR + 2/3 × Pi × LR' where SD = straightaway distance, SR = short radius to measure line, LR = long radius to measure line.",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "18"
  },

  {
    id: "III-M-006",
    domain: "III", domain_name: "Track Layout",
    subcategory: "Pole Vault",
    difficulty: "medium",
    question: "What are the minimum dimensions for a pole vault landing pad per World Athletics and USATF rules?",
    choices: {
      A: "3m × 3m",
      B: "4m × 4m",
      C: "5m × 5m",
      D: "6m × 6m (preferred)"
    },
    correct: "C",
    explanation: "Per the ASBA Manual Appendix C (WA/USATF): 'The landing area shall measure no less than 5m by 5m with 6m × 6m recommended.' NFHS specifies a minimum of 19'8\" × 19'8\" (6m × 6m) overall with minimum 5m back mat depth.",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "167"
  },

  {
    id: "III-E-007",
    domain: "III", domain_name: "Track Layout",
    subcategory: "Track Length Standards",
    difficulty: "easy",
    question: "Per the ASBA Manual, what is the maximum permitted track length for NFHS tracks built starting in 2024?",
    choices: {
      A: "400.00m (no tolerance)",
      B: "400.04m",
      C: "400.08m",
      D: "400.12m"
    },
    correct: "C",
    explanation: "Per the ASBA Manual Appendix C: 'NFHS — 400m track standard, and not more than 400.08m for tracks built starting in 2024.' The WA/USATF/NCAA maximum is 400.04m (not more than 4cm plus tolerance).",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "161"
  },

  /* ══════════════════════════════════════════════════════════
     DOMAIN IV — TRACK SURFACING AND MARKING (18%)
  ══════════════════════════════════════════════════════════ */

  {
    id: "IV-E-001",
    domain: "IV", domain_name: "Track Surfacing and Marking",
    subcategory: "Surface Classification",
    difficulty: "easy",
    question: "Which type of track surface allows water to pass through the surface to the pavement below?",
    choices: {
      A: "Impermeable surface",
      B: "Permeable (porous) surface",
      C: "Latex impermeable surface",
      D: "Asphalt emulsion surface"
    },
    correct: "B",
    explanation: "Per the ASBA Manual: 'Permeable (porous) track surfaces are designed so that water will flow through the surface to the pavement below while allowing moisture vapors to escape vertically.' Impermeable surfaces do not allow water penetration and rely on slope and gravity.",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "56"
  },

  {
    id: "IV-E-002",
    domain: "IV", domain_name: "Track Surfacing and Marking",
    subcategory: "Surfacing Systems",
    difficulty: "easy",
    question: "What is the standard surface thickness for a latex track surfacing system?",
    choices: {
      A: "1/4 inch (6.35mm)",
      B: "3/8 inch (9.5mm)",
      C: "1/2 inch (12.7mm)",
      D: "3/4 inch (19.1mm)"
    },
    correct: "C",
    explanation: "Per the ASBA Manual: 'Latex surfacing systems...The surface thickness is normally 12.7mm (1/2\").' The polyurethane base mat standalone surface is also normally 12.7mm (1/2\").",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "57"
  },

  {
    id: "IV-E-003",
    domain: "IV", domain_name: "Track Surfacing and Marking",
    subcategory: "Lane Lines",
    difficulty: "easy",
    question: "What is the specified width for lane lines on a competition running track?",
    choices: {
      A: "2.5cm (approximately 1 inch)",
      B: "5cm (approximately 2 inches)",
      C: "7.5cm (approximately 3 inches)",
      D: "10cm (approximately 4 inches)"
    },
    correct: "B",
    explanation: "Per the ASBA Manual: 'Most rules specify a width of 5cm (approximately 2\") for lane lines and many other markings.'",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "112"
  },

  {
    id: "IV-E-004",
    domain: "IV", domain_name: "Track Surfacing and Marking",
    subcategory: "Polyurethane Installation",
    difficulty: "easy",
    question: "Within what temperature and humidity range should polyurethane sports surfaces ideally be installed?",
    choices: {
      A: "30–60°F and 20–50% relative humidity",
      B: "50–90°F and 30–70% relative humidity",
      C: "60–100°F and 40–80% relative humidity",
      D: "40–80°F and 50–90% relative humidity"
    },
    correct: "B",
    explanation: "Per the ASBA Manual: 'Ideally, polyurethane sports surfaces should be installed within 50 to 90 degrees F and between 30% to 70% humidity to ensure quality and integrity in the finished surface.'",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "63"
  },

  {
    id: "IV-M-001",
    domain: "IV", domain_name: "Track Surfacing and Marking",
    subcategory: "Materials Calculation",
    difficulty: "medium",
    question: "The rubber required to install a synthetic surface is 1.86 lbs per square foot at 1/2\" depth. A track surface will be 3/8\" deep covering 5,300 square yards. How many pounds of rubber are needed?",
    choices: {
      A: "22,180.50 lbs",
      B: "88,722.00 lbs",
      C: "39,432.00 lbs",
      D: "66,541.50 lbs"
    },
    correct: "D",
    explanation: "Adjust rate for depth: 1.86 ÷ 4 × 3 = 1.395 lbs/sq ft (3/8\" is 3/4 of 1/2\"). Convert sq yd to sq ft: 5,300 × 9 = 47,700 sq ft. Total: 47,700 × 1.395 = 66,541.50 lbs.",
    source_document: "ASBA Certification Handbook – Tennis & Track",
    source_page: "18 (Sample Q2)"
  },

  {
    id: "IV-M-002",
    domain: "IV", domain_name: "Track Surfacing and Marking",
    subcategory: "Marking",
    difficulty: "medium",
    question: "The ASBA Manual recommends applying how many coats for lane lines, and why?",
    choices: {
      A: "Two coats for better coverage and durability",
      B: "One solid coat; multiple coats can lead to shadowing and increased width",
      C: "Three thin coats for best adhesion",
      D: "As many coats as needed until the color is opaque"
    },
    correct: "B",
    explanation: "Per the ASBA Manual: 'ASBA recommends applying one solid coat for lane lines. Multiple coats can lead to shadowing and increased width of lane lines.'",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "112"
  },

  {
    id: "IV-M-003",
    domain: "IV", domain_name: "Track Surfacing and Marking",
    subcategory: "Surface Preparation",
    difficulty: "medium",
    question: "Prior to applying a synthetic surface, the ASBA Manual recommends what test to identify and correct drainage problems?",
    choices: {
      A: "Core sampling to check asphalt density",
      B: "Flooding the track to identify areas holding water, then planing or filling before surfacing",
      C: "Proctor compaction test of the asphalt surface",
      D: "Infrared thermal scan to detect soft spots"
    },
    correct: "B",
    explanation: "Per the ASBA Manual: 'the owner or design professional should require that the track be flooded, and areas that hold water should be marked and planed or filled prior to surfacing... Tracks should not be surfaced until drainage issues are corrected.'",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "25"
  },

  {
    id: "IV-M-004",
    domain: "IV", domain_name: "Track Surfacing and Marking",
    subcategory: "Pavement Extension",
    difficulty: "medium",
    question: "In the pavement extension method, the aggregate base inside perimeter is placed how far inside of the track measure line?",
    choices: {
      A: "16 inches inside the measure line",
      B: "22 inches inside the measure line",
      C: "27 inches inside the measure line",
      D: "30 inches inside the measure line"
    },
    correct: "C",
    explanation: "Per the ASBA Manual on pavement extension: 'the aggregate base is placed so that its inside perimeter is parallel to and 27\" inside of the track measure line.' The asphalt is 22\" inside and the synthetic surface is 16\" inside.",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "27"
  },

  {
    id: "IV-H-001",
    domain: "IV", domain_name: "Track Surfacing and Marking",
    subcategory: "Impermeable Surfaces",
    difficulty: "hard",
    question: "A contractor installs a new impermeable polyurethane surface on a track. Shortly after, the surface begins to blister. The most likely cause is:",
    choices: {
      A: "Excessive spike usage by athletes in lane 1",
      B: "UV degradation from prolonged sun exposure during curing",
      C: "Moisture beneath the surface creating hydrostatic pressure, likely because the asphalt moisture content was too high or the drainage system failed",
      D: "The polyurethane binder was mixed at too high a ratio of rubber particles"
    },
    correct: "C",
    explanation: "Per the ASBA Manual: 'Entrapped moisture can cause hydrostatic pressure, which may cause the surface to separate' (under the sealers/coatings section). Impermeable surfaces do not allow vapors to escape, so 'care must be taken to ensure that moisture does not find a way beneath the surface system.'",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "59"
  },

  {
    id: "IV-H-002",
    domain: "IV", domain_name: "Track Surfacing and Marking",
    subcategory: "Track Verification Classes",
    difficulty: "hard",
    question: "Which ASBA track verification class is required when the measurement for each lane must be verified in 26 measurement points, slopes must be confirmed, and the track will be used for NCAA collegiate events?",
    choices: {
      A: "Class 5 — Certificate of Accuracy",
      B: "Class 4 — Marking Verification",
      C: "Class 3 — Marking and Slope Verification",
      D: "Class 2 — World Athletics"
    },
    correct: "C",
    explanation: "Per the ASBA Manual: 'Class 3 is generally used to verify tracks that will be used for collegiate events. Procedures include verifying the distance run for each event and that slopes are within acceptable limits.' Class 3 verifies markings at 26 radius points per curve and confirms slopes.",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "116"
  },

  /* ══════════════════════════════════════════════════════════
     DOMAIN V — TRACK RENOVATION (16%)
  ══════════════════════════════════════════════════════════ */

  {
    id: "V-E-001",
    domain: "V", domain_name: "Track Renovation",
    subcategory: "Repair Levels",
    difficulty: "easy",
    question: "According to the ASBA Manual, which level of repair involves applying new synthetic surface material over the existing surface after spot repairs, when symptoms of wear do not extend beyond the synthetic surface?",
    choices: {
      A: "Spot repair",
      B: "Resurfacing",
      C: "Surface replacement",
      D: "Reconstruction"
    },
    correct: "B",
    explanation: "Per the ASBA Manual: 'Resurfacing implies spot repair of the existing synthetic surface followed by covering that surface with new material. If the symptoms of surface wear and/or cracks do not go beyond the synthetic surface, resurfacing is a viable option.'",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "146"
  },

  {
    id: "V-E-002",
    domain: "V", domain_name: "Track Renovation",
    subcategory: "Maintenance",
    difficulty: "easy",
    question: "What is the maximum recommended track spike length that should be permitted on a synthetic track surface?",
    choices: {
      A: "1/8 inch (3mm)",
      B: "1/4 inch (6mm)",
      C: "3/8 inch (9mm)",
      D: "1/2 inch (12mm)"
    },
    correct: "B",
    explanation: "Per the ASBA Manual: 'Spikes should never exceed 1/4\" (6mm) in length and should be conical or pyramidal in design. Needle spikes or Christmas tree spikes will accelerate wear on the surface.'",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "140"
  },

  {
    id: "V-E-003",
    domain: "V", domain_name: "Track Renovation",
    subcategory: "Maintenance Schedule",
    difficulty: "easy",
    question: "How often does the ASBA Manual recommend repainting lane lines and event markings?",
    choices: {
      A: "Every 1–2 years",
      B: "Every 4–7 years",
      C: "Every 10 years",
      D: "Only when markings become illegible"
    },
    correct: "B",
    explanation: "Per the ASBA Manual: 'Repainting the lane lines and event markings every four to seven years, depending on the condition of the surface and the markings, promotes the safety of the athlete.' Some surfaces may require repainting as early as two years after installation.",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "144"
  },

  {
    id: "V-M-001",
    domain: "V", domain_name: "Track Renovation",
    subcategory: "Defect Diagnosis",
    difficulty: "medium",
    question: "A track inspector observes bubbles 12–18 inches in diameter on the curved sections of an impermeable track surface. What is the most probable cause?",
    choices: {
      A: "Excessive UV exposure during the initial cure period",
      B: "Subsurface moisture migrating upward through the asphalt, creating hydrostatic pressure beneath the impermeable surface",
      C: "Improper rubber particle grading in the base mat",
      D: "Overloading by maintenance vehicles"
    },
    correct: "B",
    explanation: "Per the ASBA Manual: 'Entrapped moisture can cause hydrostatic pressure, which may cause the surface to separate.' On impermeable surfaces, moisture beneath the surface cannot escape through evaporation, so it builds pressure and lifts the surface in bubbles. This is commonly caused by a failed drainage system or moisture in the asphalt base.",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "59"
  },

  {
    id: "V-M-002",
    domain: "V", domain_name: "Track Renovation",
    subcategory: "Reconstruction",
    difficulty: "medium",
    question: "Which condition on an existing track indicates that resurfacing alone is NOT adequate and full reconstruction is necessary?",
    choices: {
      A: "Faded lane markings",
      B: "Surface wear confined to the top layer of the synthetic surface",
      C: "Cracks that extend into the asphalt (structural cracks) or loss of planarity (wavy/bumpy surface)",
      D: "Minor surface delamination at the outer edge of lane 8"
    },
    correct: "C",
    explanation: "Per the ASBA Manual: 'If the symptoms in the existing track include cracks that extend into the asphalt (structural cracks) or loss of planarity (wavy or bumpy surface), reconstruction is necessary.' Resurfacing is only appropriate when symptoms don't extend beyond the synthetic surface.",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "147"
  },

  {
    id: "V-M-003",
    domain: "V", domain_name: "Track Renovation",
    subcategory: "Repair Sequence",
    difficulty: "medium",
    question: "Before applying a new synthetic surface over an existing one (resurfacing), what should be done with old markings?",
    choices: {
      A: "Power wash and leave in place; they provide a contrasting base for new marks",
      B: "They do not need to be treated if the new surface material is the same color",
      C: "Old markings should be blacked out (or covered with a color matching the track) to minimize ghosting of old markings through the new surface",
      D: "Sand blast all old markings to bare asphalt before applying new surface"
    },
    correct: "C",
    explanation: "Per the ASBA Manual: 'old markings should be blacked out (or covered with another color to match the track surface) to minimize ghosting, a faint reminder of the old markings on a newly resurfaced track. Remember that in most cases, the surfacing material will be porous. Old paint can easily show through the pores in a new surface.'",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "147"
  },

  {
    id: "V-H-001",
    domain: "V", domain_name: "Track Renovation",
    subcategory: "Renovation Decision Making",
    difficulty: "hard",
    question: "A 15-year-old track shows: (1) surface delamination on 40% of curve sections, (2) asphalt cracks wider than 1/4 inch on 12% of the track, (3) functional drainage, (4) good curb condition. According to ASBA repair guidelines, what is the correct approach?",
    choices: {
      A: "Spot repair the delamination and topcoat the entire track",
      B: "Full surface removal, structural asphalt crack repair, then new synthetic surface installation",
      C: "Apply a seal coat over the entire track to stabilize delamination",
      D: "Reconstruct only the curved sections where delamination occurs"
    },
    correct: "B",
    explanation: "Delamination covering 40% of curves exceeds what spot repair can address economically. The ASBA Manual states surface replacement (full removal of existing synthetic surface + asphalt repairs + new surface) is appropriate when the synthetic surface is delaminating. Asphalt cracks wider than 1/4 inch are structural cracks that must be repaired before re-surfacing or they will telegraph through. The drainage and curb are serviceable, so full reconstruction of base is not needed.",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "146"
  },

  {
    id: "V-H-002",
    domain: "V", domain_name: "Track Renovation",
    subcategory: "Safety Zone",
    difficulty: "hard",
    question: "What is the minimum safety zone width recommended by the ASBA Manual between runners' lanes and all fixed objects?",
    choices: {
      A: "0.5 meters",
      B: "1 meter",
      C: "1.5 meters",
      D: "2 meters"
    },
    correct: "B",
    explanation: "Per the ASBA Manual: 'A running track should maintain the recommended 1-meter safety zone between runners' lanes and all fixed objects. This safety zone is designed to promote the safety of athletes.' WA specifies at least 1 meter on both inside and outside. NFHS Rule 5 Section 1 also specifies a minimum 1 meter in width.",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "117"
  },

  /* ══════════════════════════════════════════════════════════
     ADDITIONAL DOMAIN III — VERIFICATION & SLOPE
  ══════════════════════════════════════════════════════════ */

  {
    id: "III-M-007",
    domain: "III", domain_name: "Track Layout",
    subcategory: "Verification Classes",
    difficulty: "medium",
    question: "What does Class 5 verification (Certificate of Accuracy) consist of, and who typically issues it?",
    choices: {
      A: "A full World Athletics certified measurement by an accredited surveyor",
      B: "A letter from a Certified Track Builder verifying the track has been striped to all rules and certifying the measured length of one lap in Lane 1",
      C: "A third-party engineering report confirming all slopes and markings",
      D: "An ASBA headquarters inspection and issued certificate"
    },
    correct: "B",
    explanation: "Per the ASBA Manual: 'Class 5 is usually reserved for tracks that need some assurance of general accuracy. The certificate of accuracy consists of a letter from a Certified Track Builder.' The letter certifies the track is striped to all rules and states the measured lap length in Lane 1.",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "137"
  },

  {
    id: "III-E-008",
    domain: "III", domain_name: "Track Layout",
    subcategory: "Slope Standards",
    difficulty: "easy",
    question: "What slope value represents the maximum DOWNWARD inclination permitted in the running direction for runways (long jump, pole vault, etc.) per WA, USATF, and NCAA?",
    choices: {
      A: "0.4% (1:250)",
      B: "1.0% (1:100)",
      C: "0.1% (1:1000)",
      D: "2.0% (1:50)"
    },
    correct: "C",
    explanation: "Per the ASBA Manual Appendix D slope table: '0.1% — 1\" in 83.33\' — 1:1000 — Maximum downward longitudinal slope.' This applies to the running direction for the oval and runways. The 0.4% (1:250) applies only to the direction of the crossbar on high jump approaches.",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "175"
  },

  /* ══════════════════════════════════════════════════════════
     ADDITIONAL DOMAIN II — BASE CONSTRUCTION
  ══════════════════════════════════════════════════════════ */

  {
    id: "II-E-005",
    domain: "II", domain_name: "Site, Sub-base and Base Work",
    subcategory: "Soil Conditions",
    difficulty: "easy",
    question: "Which soil property is most critical for running track subgrade because planarity requirements are extremely important and loads are relatively low?",
    choices: {
      A: "High water table",
      B: "High clay content for moisture retention",
      C: "Stable, non-heaving subgrade free of peat, topsoil, clay, and decomposed materials",
      D: "Maximum compressibility to absorb construction equipment loads"
    },
    correct: "C",
    explanation: "Per the ASBA Manual: 'The site with the best soil for a good, hard, nonheaving subgrade without peat, topsoil, clay, shear sand or other decomposed materials should be selected.' Track construction differs from roads — planarity is critical but loads are minimal.",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "22"
  },

  {
    id: "II-M-005",
    domain: "II", domain_name: "Site, Sub-base and Base Work",
    subcategory: "Curbs",
    difficulty: "medium",
    question: "If a removable raised curb is installed on an existing 20cm measuring line track (designed for painted line measurement), what happens to the track length?",
    choices: {
      A: "The track length increases to over 400m because the curb adds extra distance",
      B: "There is no change; the curb is decorative only",
      C: "The effective running distance in Lane 1 decreases to approximately 399.37m because the curb moves the running line 10cm inward from its designed position",
      D: "The track must be completely re-marked to account for the new curb position"
    },
    correct: "C",
    explanation: "Per the ASBA Manual: 'installing these curbs on the lane line on an existing 20cm measuring line track will result in an incorrect track length when the curbs are used...Lane one on a 400-meter track designed for a raised curb will be approximately 399.37 meters without the curb in place.' The 30cm rule (with curb) vs. 20cm rule (painted line) changes the measurement line position.",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "28"
  },

  /* ══════════════════════════════════════════════════════════
     DOMAIN IV — ADDITIONAL SURFACING
  ══════════════════════════════════════════════════════════ */

  {
    id: "IV-M-005",
    domain: "IV", domain_name: "Track Surfacing and Marking",
    subcategory: "Marking Colors",
    difficulty: "medium",
    question: "Per ASBA Appendix G, what color are 4×400m relay exchange zone markings for NFHS competition?",
    choices: {
      A: "White",
      B: "Green",
      C: "Yellow",
      D: "Blue"
    },
    correct: "D",
    explanation: "Per the ASBA Manual Appendix G color coding: '4×400m Relay — NFHS: Blue.' This is consistent across all governing bodies (NFHS, NCAA, USATF, and WA all use blue for 4×400m exchange zones).",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "178"
  },

  {
    id: "IV-E-005",
    domain: "IV", domain_name: "Track Surfacing and Marking",
    subcategory: "Surfacing Systems",
    difficulty: "easy",
    question: "What percentage of total weight do rubber particles typically account for in a polyurethane full-pour system?",
    choices: {
      A: "5%–10%",
      B: "15%–22%",
      C: "30%–40%",
      D: "50%–60%"
    },
    correct: "B",
    explanation: "Per the ASBA Manual on full-pour polyurethane systems: 'The rubber will account for 15%–22% of the total weight of the full pour.'",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "61"
  },

  /* ══════════════════════════════════════════════════════════
     DOMAIN V — ADDITIONAL MAINTENANCE
  ══════════════════════════════════════════════════════════ */

  {
    id: "V-E-004",
    domain: "V", domain_name: "Track Renovation",
    subcategory: "Maintenance",
    difficulty: "easy",
    question: "The ASBA Manual specifies a minimum mow strip width around the track perimeter. What is that minimum width?",
    choices: {
      A: "2 inches",
      B: "4 inches",
      C: "6 inches",
      D: "12 inches"
    },
    correct: "C",
    explanation: "Per the ASBA Manual: 'create a mow strip a minimum of 6\" wide to help keep equipment away from the track edges.'",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "144"
  },

  {
    id: "V-M-004",
    domain: "V", domain_name: "Track Renovation",
    subcategory: "Reconstruction",
    difficulty: "medium",
    question: "When reconstructing a track, the ASBA Manual recommends a cost-effective approach to existing asphalt. What is it?",
    choices: {
      A: "Haul all existing asphalt off-site and install all-new materials",
      B: "Leave existing asphalt in place and overlay with new base course and asphalt",
      C: "Pulverize the existing pavement, mix with existing aggregate, compact and level it as a base, then install a new aggregate base course on top",
      D: "Break up existing asphalt into pieces and use as fill in low spots"
    },
    correct: "C",
    explanation: "Per the ASBA Manual: 'it is popular to recycle the pavement by pulverizing it and mixing it with the existing aggregate, compacting and leveling it to form a new base. However, it is recommended that a layer of aggregate base course be installed on top of the pulverized pavement.' This minimizes waste and takes advantage of existing materials.",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "147"
  },

  /* ══════════════════════════════════════════════════════════
     DOMAIN III — INDOOR TRACKS
  ══════════════════════════════════════════════════════════ */

  {
    id: "III-M-008",
    domain: "III", domain_name: "Track Layout",
    subcategory: "Indoor Track Design",
    difficulty: "medium",
    question: "For a new indoor 200-meter track, what banking angle range does World Athletics and USATF specify for banked curves?",
    choices: {
      A: "5–10 degrees",
      B: "10–15 degrees",
      C: "15–20 degrees",
      D: "20–25 degrees"
    },
    correct: "B",
    explanation: "Per the ASBA Manual (Chapter 9 indoor track specs): WA/USATF specifies: 'Banking angle should be 10 to 15 degrees and the same in all lanes.' NCAA allows up to 18 degrees maximum.",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "153"
  },

  {
    id: "III-E-009",
    domain: "III", domain_name: "Track Layout",
    subcategory: "Indoor Track Design",
    difficulty: "easy",
    question: "For indoor tracks built after January 1, 2004, what is the NCAA maximum permitted track length?",
    choices: {
      A: "200 meters",
      B: "250 meters",
      C: "300 meters",
      D: "No maximum specified"
    },
    correct: "C",
    explanation: "Per the ASBA Manual NCAA indoor track specs: 'Those built after January 1, 2004 cannot exceed 300 meters.' The standard is 200 meters.",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "152"
  },

  /* ══════════════════════════════════════════════════════════
     DOMAIN II — FENCING & SITE REQUIREMENTS
  ══════════════════════════════════════════════════════════ */

  {
    id: "II-E-006",
    domain: "II", domain_name: "Site, Sub-base and Base Work",
    subcategory: "Site Requirements",
    difficulty: "easy",
    question: "Per the ASBA Manual, where should the fence around the outside perimeter of the track be placed relative to the running lane?",
    choices: {
      A: "Immediately at the edge of the last lane",
      B: "At least 1 meter from the outside edge of the running lane",
      C: "At least 3 meters from the outside edge of the running lane",
      D: "No specific distance required"
    },
    correct: "B",
    explanation: "Per the ASBA Manual: 'ASBA recommends that, at a minimum, a 4' fence be placed around the outside perimeter of the track at least 1m from the outside edge of the running lane.' This also applies to the inside — a 1m clear zone is required on both inside and outside.",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "98"
  },

  /* ══════════════════════════════════════════════════════════
     DOMAIN III — SITE SIZE
  ══════════════════════════════════════════════════════════ */

  {
    id: "III-M-009",
    domain: "III", domain_name: "Track Layout",
    subcategory: "Site Requirements",
    difficulty: "medium",
    question: "Per the ASBA Manual, what is the approximate site size required for a typical eight-lane 400m track (not including site amenities)?",
    choices: {
      A: "50m × 120m to 80m × 150m",
      B: "70m × 190m to 104m × 171m",
      C: "100m × 200m to 130m × 220m",
      D: "60m × 160m to 90m × 180m"
    },
    correct: "B",
    explanation: "Per the ASBA Manual: 'The site for a typical eight-lane track, not including site amenities, is approximately 70m (230') × 190m (623') to 104m (340') × 171m (560').'",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "20"
  },

  /* ══════════════════════════════════════════════════════════
     DOMAIN I — ENVIRONMENTAL & LEED
  ══════════════════════════════════════════════════════════ */

  {
    id: "I-M-003",
    domain: "I", domain_name: "Project Administration",
    subcategory: "Environmental Design",
    difficulty: "medium",
    question: "Per the ASBA Manual, what is the LEED provision regarding the use of regional materials in track construction?",
    choices: {
      A: "Materials must be manufactured within 100 miles of the project site",
      B: "Materials must be sourced within 500 miles of the project site",
      C: "Only recycled materials may be used on LEED-certified projects",
      D: "Materials must meet ASTM standards regardless of regional origin"
    },
    correct: "B",
    explanation: "Per the ASBA Manual LEED section: 'Regional Materials — Use materials sourced within 500 miles of the project site' is listed as a LEED point consideration for track construction projects.",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "10"
  },

  /* ══════════════════════════════════════════════════════════
     DOMAIN IV — MARKING METHODS
  ══════════════════════════════════════════════════════════ */

  {
    id: "IV-M-006",
    domain: "IV", domain_name: "Track Surfacing and Marking",
    subcategory: "Layout Methods",
    difficulty: "medium",
    question: "Which track marking layout method uses a total station to locate ALL markings on the track?",
    choices: {
      A: "Chord method",
      B: "Steel tape and transit method",
      C: "Total station method",
      D: "Laser level method"
    },
    correct: "C",
    explanation: "Per the ASBA Manual, three acceptable layout methods are described: (1) steel tape + transit/theodolite for curved marks, (2) steel tape 'chord method' for all marks, and (3) total station method where 'all markings on the [track] can be located' using a single instrument. The Manual notes 'pacing off or guessing a mark's location relative to another's' is NOT acceptable.",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "111"
  },

  {
    id: "IV-H-003",
    domain: "IV", domain_name: "Track Surfacing and Marking",
    subcategory: "Track Verification",
    difficulty: "hard",
    question: "During a Class 3 verification, the surveyor calculates that the measured deviation from the desired radius at curve DA is +0.009 meters (average of 26 points). Per ASBA Class 3 procedures, is this acceptable, and why?",
    choices: {
      A: "Yes — any deviation under 1cm (0.01m) is acceptable for Class 3",
      B: "No — the average deviation from desired radius must not exceed 0.007 meters for Class 3",
      C: "Yes — individual points may exceed 0.007m as long as the average is under 0.015m",
      D: "No — the deviation must be exactly zero; any positive tolerance fails Class 3"
    },
    correct: "B",
    explanation: "Per the ASBA Manual Class 3 procedures: 'b. Calculate the average deviation... the desired value should not exceed +0.007 meters.' The 0.009m average exceeds the 0.007m tolerance. However, individual points may deviate up to 0.015m from design radius — it's the average that must be within 0.007m.",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "118"
  },

// NEW QUESTIONS PART 1 — Domains I and II additional
// Source: ASBA Running Tracks Manual 11th Ed. (2023)

  {
    id: "I-E-005",
    domain: "I", domain_name: "Project Administration",
    subcategory: "Certification",
    difficulty: "easy",
    question: "How often must a CTB recertify to maintain their Certified Track Builder designation?",
    choices: { A: "Every year", B: "Every two years", C: "Every three years", D: "Every five years" },
    correct: "C",
    explanation: "Per the ASBA Manual: 'Certification is good for three years, at which time a CTB can recertify, either by retaking the exam or via continuing education points and the eligibility spreadsheet demonstrating the CTB's relevant work of the last three years.'",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "ix"
  },

  {
    id: "I-E-006",
    domain: "I", domain_name: "Project Administration",
    subcategory: "Planning Team",
    difficulty: "easy",
    question: "Which of the following is NOT listed in the ASBA Manual as a member of the typical track facility planning team?",
    choices: { A: "A Certified Track Builder (CTB)", B: "A design professional", C: "The governing body referee", D: "Manufacturers and installers of surfacing materials" },
    correct: "C",
    explanation: "The ASBA Manual lists CTBs, track consultants, design professionals, experienced contractors, facility managers, and manufacturers/installers as planning team members. A governing body referee is not a planning team role.",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "2"
  },

  {
    id: "I-E-007",
    domain: "I", domain_name: "Project Administration",
    subcategory: "ASBA History",
    difficulty: "easy",
    question: "In what year was ASBA founded, and under what original name?",
    choices: {
      A: "1954, as the National Track Builders Association (NTBA)",
      B: "1965, as the U.S. Tennis Court & Track Builders Association (USTC&TBA)",
      C: "1975, as the American Sports Facility Contractors Association",
      D: "1980, as the Sports Builders Guild (SBG)"
    },
    correct: "B",
    explanation: "Per the ASBA Manual: 'Founded in 1965 as the U.S. Tennis Court & Track Builders Association (USTC&TBA) by a group of contractors who recognized the need for an organization that could help them address their mutual problems...its name was changed in 2004 to reflect the broad range of work performed by its members.'",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "viii"
  },

  {
    id: "I-E-008",
    domain: "I", domain_name: "Project Administration",
    subcategory: "Cooperative Purchasing",
    difficulty: "easy",
    question: "What is the primary advantage of cooperative purchasing for a school district building a running track?",
    choices: {
      A: "It eliminates the need for competitive bidding entirely",
      B: "It leverages the purchasing power of a large group to obtain volume pricing discounts; vendors are pre-vetted and the process is shortened",
      C: "It allows the school to select the lowest bid without any vetting process",
      D: "It requires no contracts or documentation"
    },
    correct: "B",
    explanation: "Per the ASBA Manual: 'The real advantage of this approach is it puts the owner in control and shortens the process for getting a project started. The owner is typically assured of a responsible bid as all vendors are vetted prior to eligibility.'",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "2"
  },

  {
    id: "I-M-004",
    domain: "I", domain_name: "Project Administration",
    subcategory: "Procurement",
    difficulty: "medium",
    question: "In an RFP (Request for Proposal) procurement, which weighted formula example does the ASBA Manual describe for comparing proposals?",
    choices: {
      A: "Price 70%, product 20%, installer 10%",
      B: "Price 40%, product 30%, installer 30%",
      C: "Price 50%, product 25%, experience 25%",
      D: "Price 60%, quality 40%"
    },
    correct: "B",
    explanation: "Per the ASBA Manual: 'One popular method for doing so is called a 'calculated formula' in which each aspect of the proposal is weighted. For example, price might be weighted at 40%, product at 30% and installer at 30%.'",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "6"
  },

  {
    id: "I-M-005",
    domain: "I", domain_name: "Project Administration",
    subcategory: "Construction Timetable",
    difficulty: "medium",
    question: "Per the ASBA Manual, how long should an owner expect for actual construction of a track and field event area after permitting and bidding is completed?",
    choices: { A: "Up to one month", B: "Up to two months", C: "Up to five months", D: "Up to twelve months" },
    correct: "C",
    explanation: "Per the ASBA Manual: 'For a track and field event area, an owner can count on an actual construction period of up to five months after permitting and bidding is completed. Stadium-type construction can take upwards of two to three years.'",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "88"
  },

  {
    id: "I-M-006",
    domain: "I", domain_name: "Project Administration",
    subcategory: "Permits and Authorities",
    difficulty: "medium",
    question: "Which office can typically provide information regarding permits and regulations affecting a track construction site?",
    choices: {
      A: "The state athletics association",
      B: "ASBA headquarters only",
      C: "The municipal or county clerk's office",
      D: "The U.S. Army Corps of Engineers"
    },
    correct: "C",
    explanation: "Per the ASBA Manual: 'The municipal or county clerk's office usually can provide information regarding which permits and regulations affect the site. Permits often require certified surveys or stamped architectural or engineering drawings.'",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "21"
  },

  {
    id: "I-M-007",
    domain: "I", domain_name: "Project Administration",
    subcategory: "Construction Documents",
    difficulty: "medium",
    question: "Which of the following is typically NOT included as a component of track construction documents per the ASBA Manual?",
    choices: {
      A: "Detailed scope description and drawings",
      B: "Insurance and bonding requirements",
      C: "As-built drawings from a previously completed similar project",
      D: "Allowable substitutions and preselected proprietary products"
    },
    correct: "C",
    explanation: "Per the ASBA Manual, construction documents include: detailed scope description, drawings, specifications, contract, general conditions, preselected products, allowable substitutions, insurance/bonding, responsibility for permits/taxes/utilities, and work done by others. As-built drawings from another project are not a standard component.",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "29"
  },

  {
    id: "I-M-008",
    domain: "I", domain_name: "Project Administration",
    subcategory: "Bidding",
    difficulty: "medium",
    question: "Per the ASBA Manual, when offering a public bid, what is required to choose a contractor based on lowest bid only?",
    choices: {
      A: "All contractors must be pre-certified by the state",
      B: "Everything in the contract price must be identical — responsibilities for permits, site preparation, taxes, insurance, restoration, etc. must all be the same across all bids",
      C: "Only contractors employing a CTB may submit bids",
      D: "Bonds must be set at 100% of the contract value"
    },
    correct: "B",
    explanation: "Per the ASBA Manual: 'When offering a public bid for the project, it is extremely important to ensure that products to be used and methods of construction are identical to your specifications. Everything that is to be included in the contract price...must be identical in order to choose a contractor based on lowest bid only.'",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "73"
  },

  {
    id: "I-M-009",
    domain: "I", domain_name: "Project Administration",
    subcategory: "Site Selection",
    difficulty: "medium",
    question: "The ASBA Manual cautions owners not to purchase a site before what is completed?",
    choices: {
      A: "A full topographic survey",
      B: "At least a preliminary discussion of demographics, financial feasibility, and construction feasibility including zoning/permit requirements",
      C: "The complete design package including construction documents",
      D: "Approval from the relevant governing body for the planned track"
    },
    correct: "B",
    explanation: "Per the ASBA Manual: 'owners are cautioned not to purchase a site until they have at least preliminarily discussed demographics, financial feasibility and construction feasibility. Rather than delaying a project, careful advance consideration can prevent expensive and time-consuming mistakes.' Also: 'Owners are cautioned not to purchase the site...until zoning and permit requirements have been investigated.'",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "11"
  },

  {
    id: "I-H-002",
    domain: "I", domain_name: "Project Administration",
    subcategory: "Contractor Selection",
    difficulty: "hard",
    question: "An owner receives three bids: Bid A (CTB-staffed) = $485,000; Bid B = $410,000; Bid C = $390,000. Bid C omits herbicide treatment and a topographic survey. Which ASBA guidance most directly applies?",
    choices: {
      A: "Always accept the lowest bid to comply with public procurement law",
      B: "Require the owner to split work between Bids B and C",
      C: "The owner should carefully compare bids, question inconsistencies, and recognize the lowest bid may not be best value; hidden costs from omitted items can make a low bid more expensive",
      D: "Automatically disqualify Bid C and proceed with Bid B"
    },
    correct: "C",
    explanation: "Per the ASBA Manual: 'An owner should be especially careful with a very low bid or a very high bid...what the owner should seek is not the lowest price, but the best value for the investment.' Omitted items like herbicide treatment and surveys represent real costs that will appear later as change orders.",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "3"
  },

  {
    id: "I-H-003",
    domain: "I", domain_name: "Project Administration",
    subcategory: "Curing Time",
    difficulty: "hard",
    question: "What is the typical asphalt curing period before synthetic track surfacing can be applied, per the ASBA Manual?",
    choices: { A: "3–5 days", B: "7–14 days", C: "28 days", D: "60 days minimum" },
    correct: "C",
    explanation: "Per the ASBA Manual: 'Prior to surfacing, the asphalt should be cured in accordance with the recommendations of the specification writer and the manufacturer of the surfacing system. This is typically 28 days based on depth of asphalt and oil content.' This may add up to 30 days to the project schedule.",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "83"
  },

  {
    id: "I-H-004",
    domain: "I", domain_name: "Project Administration",
    subcategory: "LEED",
    difficulty: "hard",
    question: "The ASBA Manual references LEED stormwater design criteria. What is the stated stormwater management goal?",
    choices: {
      A: "Post-construction runoff must be reduced by 50% vs preconstruction",
      B: "Post-construction stormwater quantity and quality must meet or exceed preconstruction conditions",
      C: "All stormwater must be retained on-site",
      D: "Only permeable surfaces are allowed in LEED-certified track construction"
    },
    correct: "B",
    explanation: "Per the ASBA Manual LEED section: 'Stormwater Design — Implement proper stormwater management systems to ensure that the post-construction stormwater quantity and quality meet or exceed preconstruction conditions.'",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "9"
  },

  // DOMAIN II ADDITIONAL
  {
    id: "II-E-007",
    domain: "II", domain_name: "Site, Sub-base and Base Work",
    subcategory: "Asphalt Surface Course",
    difficulty: "easy",
    question: "What is the minimum average compacted thickness for the asphalt surface course on a running track per ASBA guidelines?",
    choices: { A: "3/4 inch", B: "1 inch", C: "1-1/4 inch", D: "1-1/2 inch" },
    correct: "D",
    explanation: "Per the ASBA Manual: 'Surface course shall be installed to a minimum average 1-½\" compacted thickness; ensure that no thickness of less than 1-¼\" compacted thickness is placed.' The surface course uses fine-graded HMA with ½\" maximum aggregate (NMAS 3/8\").",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "75"
  },

  {
    id: "II-E-008",
    domain: "II", domain_name: "Site, Sub-base and Base Work",
    subcategory: "Asphalt Smoothness",
    difficulty: "easy",
    question: "What is the maximum asphalt surface course smoothness tolerance per the ASBA Manual?",
    choices: { A: "1/8 inch in 10 feet", B: "1/4 inch in 10 feet", C: "3/8 inch in 10 feet", D: "1/2 inch in 10 feet" },
    correct: "B",
    explanation: "Per the ASBA Manual: 'Smoothness shall meet the requirements of no greater than ¼\" in 10 ft. for base and leveling courses and ¼\" in 10 ft. for surface course.' High or low spots exceeding this tolerance must be corrected before surfacing.",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "81"
  },

  {
    id: "II-E-009",
    domain: "II", domain_name: "Site, Sub-base and Base Work",
    subcategory: "Concrete",
    difficulty: "easy",
    question: "What is the minimum typical thickness for concrete pavement in track construction?",
    choices: { A: "2 inches", B: "3 inches", C: "4 inches", D: "6 inches" },
    correct: "C",
    explanation: "Per the ASBA Manual: 'Typically, concrete should be at least 4\" thick; however, the thickness of specific concrete components may vary depending upon the subgrade materials, freeze-thaw activity and other factors.'",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "86"
  },

  {
    id: "II-E-010",
    domain: "II", domain_name: "Site, Sub-base and Base Work",
    subcategory: "Asphalt Temperature",
    difficulty: "easy",
    question: "At what temperature range should HMA generally arrive at the project site?",
    choices: { A: "200–230°F", B: "240–260°F", C: "270–300°F", D: "300–340°F" },
    correct: "C",
    explanation: "Per the ASBA Manual: 'Install HMA which shall generally arrive on the project between 270–300° Fahrenheit...with a temperature of 50°F and rising for all asphalt lifts.' These temperatures are critical for proper compaction and bonding.",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "81"
  },

  {
    id: "II-E-011",
    domain: "II", domain_name: "Site, Sub-base and Base Work",
    subcategory: "Aggregate Base Materials",
    difficulty: "easy",
    question: "What aggregate base course materials are acceptable per the ASBA Manual?",
    choices: {
      A: "Only virgin crushed stone",
      B: "Crushed aggregate, processed/recycled asphalt, or processed/recycled concrete",
      C: "Only recycled materials",
      D: "Sand and gravel without crushing"
    },
    correct: "B",
    explanation: "Per the ASBA Manual: 'An aggregate base course of crushed aggregate, processed/recycled asphalt or processed/recycled concrete is installed over the properly prepared subgrade.' Materials must meet applicable ASTM and state DOT specifications.",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "28"
  },

  {
    id: "II-E-012",
    domain: "II", domain_name: "Site, Sub-base and Base Work",
    subcategory: "Herbicide",
    difficulty: "easy",
    question: "Per the ASBA Manual, when should liquid herbicide NOT be sprayed?",
    choices: {
      A: "During daylight hours",
      B: "During windy conditions, when rain is imminent, or when soil is water-saturated after heavy rainfall",
      C: "In temperatures below 50°F",
      D: "After aggregate base is placed"
    },
    correct: "B",
    explanation: "Per the ASBA Manual: 'Liquid herbicide should not be sprayed during windy conditions' (damages adjacent vegetation). 'If rain or surface water washes onto the sterilized area before it is covered, some of the herbicide will leach...Leaching also may occur if herbicides are applied to water-saturated soils.'",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "24"
  },

  {
    id: "II-E-013",
    domain: "II", domain_name: "Site, Sub-base and Base Work",
    subcategory: "Concrete Finishing",
    difficulty: "easy",
    question: "What surface finish does the ASBA Manual recommend for concrete areas where track surfacing will be applied?",
    choices: {
      A: "Smooth trowel finish for maximum adhesion",
      B: "Light to medium broom finish to improve the mechanical bond",
      C: "Heavy broom finish perpendicular to running direction",
      D: "Exposed aggregate finish for maximum texture"
    },
    correct: "B",
    explanation: "Per the ASBA Manual: 'Typically, areas to be surfaced should have a light to medium broom finish to improve the mechanical bond for the track surfacing.' Concrete surfaces must not vary by more than ¼\" in a 10' straightedge.",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "86"
  },

  {
    id: "II-M-006",
    domain: "II", domain_name: "Site, Sub-base and Base Work",
    subcategory: "RAP",
    difficulty: "medium",
    question: "What is the maximum percentage of Reclaimed Asphalt Pavement (RAP) permitted in HMA base and leveling courses per ASBA guidelines?",
    choices: { A: "0% — RAP is not permitted", B: "10%", C: "15%", D: "20%" },
    correct: "D",
    explanation: "Per the ASBA Manual: RAP 'May be used up to 20% in the HMA binder/base and leveling courses.' For the surface course, typically 0% is specified; however, up to 15% may be used if approved by the architect/engineer of record.",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "78"
  },

  {
    id: "II-M-007",
    domain: "II", domain_name: "Site, Sub-base and Base Work",
    subcategory: "Asphalt Compaction",
    difficulty: "medium",
    question: "What minimum in-place density is required for the asphalt surface course as a percentage of Gmm (theoretical maximum specific gravity)?",
    choices: { A: "90.0% of Gmm", B: "92.0% of Gmm", C: "94.0% of Gmm", D: "96.0% of Gmm" },
    correct: "C",
    explanation: "Per the ASBA Manual: 'Compact the HMA to a minimum in-place density of 94.0% of the Theoretical Maximum Specific Gravity, Gmm.' The average sub-lot measure shall be 94.0% of Gmm with no individual value less than 92.5% of Gmm.",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "79"
  },

  {
    id: "II-M-008",
    domain: "II", domain_name: "Site, Sub-base and Base Work",
    subcategory: "Asphalt Joints",
    difficulty: "medium",
    question: "What is the minimum offset required between longitudinal joints in successive lifts of asphalt?",
    choices: { A: "2 inches", B: "4 inches", C: "6 inches", D: "12 inches" },
    correct: "C",
    explanation: "Per the ASBA Manual: 'Off-set joints a minimum of 6\" between lifts of asphalt.' Surface course longitudinal joints 'shall be smooth and true; no deviation from level and true as required of the mat will be allowed.'",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "82"
  },

  {
    id: "II-M-009",
    domain: "II", domain_name: "Site, Sub-base and Base Work",
    subcategory: "Concrete Surface Preparation",
    difficulty: "medium",
    question: "Before applying synthetic surface to concrete, what must be done to prepare the surface?",
    choices: {
      A: "Apply two coats of latex primer directly to concrete",
      B: "Test that concrete is dry per manufacturer requirements; acid-etch or shot-blast to remove salts; apply approved primer",
      C: "Wet the concrete surface thoroughly before applying adhesive",
      D: "Apply waterproofing membrane and wire-brush roughening"
    },
    correct: "B",
    explanation: "Per the ASBA Manual: 'Installation of a surfacing system should not begin until the concrete has been tested and determined to be dry...Naturally occurring salts in concrete may prevent surface systems from adequately bonding. Generally, the concrete pavement is acid-etched or shot-blasted to clean it and neutralize the salts. Next, the pavement is primed with a primer approved by the manufacturer.'",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "87"
  },

  {
    id: "II-M-010",
    domain: "II", domain_name: "Site, Sub-base and Base Work",
    subcategory: "Concrete Curing",
    difficulty: "medium",
    question: "Concrete slabs for track construction must be kept continuously moist for approximately how many days during curing?",
    choices: { A: "1–2 days", B: "3–5 days", C: "7 days", D: "14 days" },
    correct: "C",
    explanation: "Per the ASBA Manual: 'concrete slabs must be kept continuously moist for approximately seven days...by a covering of polyethylene film, burlap or curing paper, or by sprinkling or ponding.' Curing compounds should not be used as they may affect bonding. Total time to reach sufficient strength for surfacing is typically 21–60 days.",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "86"
  },

  {
    id: "II-M-011",
    domain: "II", domain_name: "Site, Sub-base and Base Work",
    subcategory: "Fill Material",
    difficulty: "medium",
    question: "What characteristics must fill material meet per the ASBA Manual?",
    choices: {
      A: "Pre-compressed clay to achieve stability",
      B: "Well-graded granular locally available material, free of organic or expansive material, placed in lifts and compacted per geotechnical recommendations",
      C: "Topsoil if compacted to 85% Proctor",
      D: "Recycled concrete or asphalt exclusively"
    },
    correct: "B",
    explanation: "Per the ASBA Manual: 'Fill is normally well-graded, granular, locally available materials. It must be free of organic or expansive material, such as clay. Fill should be placed in lifts and compacted in conformance with the site-specific recommendations of the geotechnical engineer.' All trench backfill must be granular material.",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "23"
  },

  {
    id: "II-M-012",
    domain: "II", domain_name: "Site, Sub-base and Base Work",
    subcategory: "Tack Coat",
    difficulty: "medium",
    question: "When applying tack coat over existing asphalt pavement between lifts laid more than 24–48 hours apart, what application rate applies?",
    choices: {
      A: "0.05 gal/sy residual AC",
      B: "0.10 gal/sy (0.04 gal/sy residual AC)",
      C: "0.15 gal/sy (0.05 gal/sy residual AC)",
      D: "0.30 gal/sy"
    },
    correct: "B",
    explanation: "Per the ASBA Manual tack coat rates: '0.05 gal/sy over newly constructed asphalt leveling or base mixes; 0.10 gal/sy (0.04 gal/sy residual AC) over existing asphalt pavements; and 0.15 gal/sy (0.05 gal/sy residual AC) over milled surfaces.'",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "81"
  },

  {
    id: "II-M-013",
    domain: "II", domain_name: "Site, Sub-base and Base Work",
    subcategory: "Expansion Joints",
    difficulty: "medium",
    question: "Why does the ASBA Manual recommend against using expansion joints within the track surface area?",
    choices: {
      A: "Expansion joints are too expensive",
      B: "Expansion joints may reopen, creating a raised edge or gap that is a safety hazard and surface defect; control joints are used instead",
      C: "Expansion joints always cause delamination",
      D: "Governing bodies prohibit expansion joints"
    },
    correct: "B",
    explanation: "Per the ASBA Manual: 'Expansion joints may reopen, they are not recommended for use within the track or field events where surfacing material will be applied.' Additionally, 'Caulking has been found to push up in the areas of cold/hard winters due to moisture pulling through cracks from below.' Control joints (saw-cut) are the preferred alternative.",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "85"
  },

  {
    id: "II-M-014",
    domain: "II", domain_name: "Site, Sub-base and Base Work",
    subcategory: "Asphalt Mix",
    difficulty: "medium",
    question: "What minimum percentage of crushed faces must the coarse aggregate fraction have in track asphalt per ASBA guidelines?",
    choices: { A: "60%/50%", B: "75%/65%", C: "85%/75%", D: "95%/90%" },
    correct: "C",
    explanation: "Per the ASBA Manual: 'Coarse aggregate fraction shall have a minimum of 85%/75% crushed faces.' This ensures adequate aggregate interlock and stability in track asphalt.",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "78"
  },

  {
    id: "II-H-003",
    domain: "II", domain_name: "Site, Sub-base and Base Work",
    subcategory: "Asphalt Correction",
    difficulty: "hard",
    question: "What corrective method is permitted for HIGH spots in asphalt surface course?",
    choices: {
      A: "Apply additional asphalt to blend the high spot",
      B: "Grinding, or heating and rolling (only if approved by the surfacing contractor)",
      C: "Apply self-leveling urethane screed to surrounding areas",
      D: "Score the surface with a diamond blade saw"
    },
    correct: "B",
    explanation: "Per the ASBA Manual: 'For high spots: grinding; heating and rolling (only if approved by the surfacing contractor).' For low spots: removing and replacing, keying into existing asphalt, or having the surfacing contractor apply approved leveling materials.",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "84"
  },

  {
    id: "II-H-004",
    domain: "II", domain_name: "Site, Sub-base and Base Work",
    subcategory: "Post-Tensioned Concrete",
    difficulty: "hard",
    question: "What is the primary structural advantage of post-tensioned concrete over standard reinforced concrete for track pavement?",
    choices: {
      A: "Post-tensioned concrete costs significantly less",
      B: "Post-tensioned concrete eliminates the aggregate base requirement",
      C: "Post-tensioned concrete provides a monolithic, expansion-joint-free slab with cables in compression, offering increased resistance to settling and heaving on unstable soils",
      D: "Post-tensioned concrete can be installed without a licensed CTB"
    },
    correct: "C",
    explanation: "Per the ASBA Manual: 'The track oval and chute are installed as one monolithic unit. This eliminates any expansion joints...Any cracking that may occur is minor as the tensioning cables hold them together...There is an increased resistance to settling and/or heaving, making this an ideal alternative for unstable soils.'",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "85"
  },

  {
    id: "II-H-005",
    domain: "II", domain_name: "Site, Sub-base and Base Work",
    subcategory: "Weed Control",
    difficulty: "hard",
    question: "The ASBA Manual identifies three situations causing weed growth through track pavement. Which is NOT one of them?",
    choices: {
      A: "Excavation that cut preexisting weed growth but did not entirely eliminate it",
      B: "Excavation that uncovered ungerminated seeds that then germinated from pavement moisture and heat",
      C: "Weed seeds deposited by wind or birds after construction is complete",
      D: "Contaminated fill materials containing ungerminated seeds"
    },
    correct: "C",
    explanation: "The ASBA Manual lists exactly three causes: (1) preexisting weed growth not fully eliminated by excavation, (2) uncovered ungerminated seeds germinating due to pavement moisture and heat, and (3) contaminated fill containing ungerminated seeds. Post-construction wind/bird deposition is not one of the identified causes.",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "23"
  },

  {
    id: "II-H-006",
    domain: "II", domain_name: "Site, Sub-base and Base Work",
    subcategory: "Specialized Fill",
    difficulty: "hard",
    question: "What specialized fill materials might a soils engineer recommend between the subgrade and aggregate base course?",
    choices: {
      A: "Portland cement concrete poured directly over unstable soil",
      B: "Lime, sand, geotextile fabric, or a combination of several",
      C: "RAP compacted to 95% Proctor",
      D: "Crushed rubber from recycled tires for resilience"
    },
    correct: "B",
    explanation: "Per the ASBA Manual: 'A soils engineer may recommend additional specialized fill materials to be placed between the subgrade and the aggregate base course...These materials may include lime, sand, geotextile fabric or a combination of several.'",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "29"
  },

  {
    id: "II-H-007",
    domain: "II", domain_name: "Site, Sub-base and Base Work",
    subcategory: "Geotechnical",
    difficulty: "hard",
    question: "How does track construction differ from road or building construction in a way that affects geotechnical recommendations?",
    choices: {
      A: "Tracks withstand heavier loads than roads",
      B: "Tracks carry minimal loads (mainly construction/maintenance vehicles), but planarity is extremely important — these factors must be considered when recommending the subgrade and base cross section",
      C: "Tracks require deeper foundations than buildings due to athlete impact",
      D: "Tracks are more affected by wind loads than any other structure"
    },
    correct: "B",
    explanation: "Per the ASBA Manual: 'Track construction differs considerably from the construction of roads or buildings; tracks carry minimal loads (mainly construction and maintenance vehicles), but planarity is extremely important. These requirements should be considered when evaluating the subgrade and when recommending the cross section of the base course and asphalt or concrete.'",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "22"
  },
// NEW QUESTIONS PART 2 — Domains III, IV, V additional

  // DOMAIN III ADDITIONAL
  {
    id: "III-E-010",
    domain: "III", domain_name: "Track Layout",
    subcategory: "Track Configurations",
    difficulty: "easy",
    question: "How many radius points does a standard (non-double-bend) 400m track have?",
    choices: { A: "One", B: "Two", C: "Four", D: "Six" },
    correct: "B",
    explanation: "Per the ASBA Manual: 'A standard track, whether equal quadrant or nonequal quadrant, has semicircular curves, each drawn from a single radius point, meaning that there will be two radius points for this type of track.' A double-bend track has six radius points.",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "17"
  },

  {
    id: "III-E-011",
    domain: "III", domain_name: "Track Layout",
    subcategory: "Track Configurations",
    difficulty: "easy",
    question: "How many radius points does a double-bend (broken-back) 400m track have?",
    choices: { A: "Two", B: "Three", C: "Four", D: "Six" },
    correct: "D",
    explanation: "Per the ASBA Manual: 'A double-bend track with its complex curves will have six radius points.' The double-bend has a compound radius curve (usually two small curves and a large curve formed by three different radii) at each end.",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "17"
  },

  {
    id: "III-E-012",
    domain: "III", domain_name: "Track Layout",
    subcategory: "Track Measurement",
    difficulty: "easy",
    question: "What is 400m expressed in feet per the ASBA Manual?",
    choices: { A: "1,300.000 feet", B: "1,312.336 feet", C: "1,320.000 feet", D: "1,328.000 feet" },
    correct: "B",
    explanation: "Per the ASBA Manual: '400m = 1312.336' — Measure line distance in lane 1.' This standard conversion is referenced in both Chapter 2 and Chapter 6.",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "18"
  },

  {
    id: "III-E-013",
    domain: "III", domain_name: "Track Layout",
    subcategory: "Calculation Precision",
    difficulty: "easy",
    question: "To what precision should track calculation results be expressed in metric units?",
    choices: { A: "Nearest 0.1m", B: "Nearest 0.01m", C: "Nearest 0.001m", D: "Nearest 0.0001m" },
    correct: "D",
    explanation: "Per the ASBA Manual: 'The results of calculations should be expressed to the nearest 0.0001m (metric) or to the nearest 0.001' (imperial). These may be rounded up to the nearest 0.001m or 0.01' for construction and marking. Distances are rounded up to ensure the distance is not less than 400m.'",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "18"
  },

  {
    id: "III-E-014",
    domain: "III", domain_name: "Track Layout",
    subcategory: "Finish Line Location",
    difficulty: "easy",
    question: "Where is the most commonly recommended location for the common finish line?",
    choices: {
      A: "At the midpoint of the back straightaway",
      B: "PC#1 — the point of transition between the home straightaway and the first curve",
      C: "At the midpoint of the home straightaway",
      D: "At PC#2 — transition between the first curve and the back straight"
    },
    correct: "B",
    explanation: "Per the ASBA Manual: 'it is recommended that, whenever possible, the design includes a common finish line located at the end of the main straightaway, also known as PC#1: point of first curve.'",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "110"
  },

  {
    id: "III-E-015",
    domain: "III", domain_name: "Track Layout",
    subcategory: "Layout Equipment",
    difficulty: "easy",
    question: "Which types of tape should NEVER be used for track layout?",
    choices: {
      A: "Steel engineer's tape",
      B: "Cloth tape, fiberglass tape, and measuring wheels",
      C: "Stainless steel tape",
      D: "Invar steel tape"
    },
    correct: "B",
    explanation: "Per the ASBA Manual: 'Cloth tapes, fiberglass tapes and measuring wheels should never be used for track layout.' The required equipment is a total station or transit/theodolite (minimum 20 seconds accuracy) plus a steel engineer's tape reading to 0.001m or 0.01'.",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "111"
  },

  {
    id: "III-E-016",
    domain: "III", domain_name: "Track Layout",
    subcategory: "WA Track Standards",
    difficulty: "easy",
    question: "What is the World Athletics standard inside radius (to runner's edge of first lane line) for a standard 400m outdoor track?",
    choices: { A: "34.00m", B: "35.00m", C: "36.50m", D: "36.80m" },
    correct: "C",
    explanation: "Per the ASBA Manual Appendix C: 'WA — Standard 400m track radius is 36.50m to the runner's edge of the first lane line (36.8m to measure line).' The 36.80m is the measure line radius. USATF specifies inside radius 35m to 38m.",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "161"
  },

  {
    id: "III-E-017",
    domain: "III", domain_name: "Track Layout",
    subcategory: "Indoor Track",
    difficulty: "easy",
    question: "What is the preferred radius for a WA/USATF standard 200m indoor track?",
    choices: { A: "12m", B: "15m", C: "17.2m", D: "21m" },
    correct: "C",
    explanation: "Per the ASBA Manual Chapter 9 indoor specs: WA/USATF specifies 'The radius should be 15 to 19 meters, with 17.2 meters preferred.' NCAA prefers 18 to 21 meters.",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "152"
  },

  {
    id: "III-E-018",
    domain: "III", domain_name: "Track Layout",
    subcategory: "Equal Quadrant",
    difficulty: "easy",
    question: "In an equal quadrant 400m track, what is the length of each of the four quadrants?",
    choices: { A: "80m each", B: "90m each", C: "100m each", D: "110m each" },
    correct: "C",
    explanation: "Per the ASBA Manual: 'The equal quadrant track consists of two straightaways of 100m each and two curves of 100m each.' This configuration is rarely built today because wider radii favor runners, reduce injury, and provide more infield flexibility.",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "17"
  },

  {
    id: "III-E-019",
    domain: "III", domain_name: "Track Layout",
    subcategory: "Indoor Track",
    difficulty: "easy",
    question: "What is the standard indoor straight sprint facility length per the ASBA Manual?",
    choices: {
      A: "50 meters with 3m before start and 5m run-out",
      B: "60 meters with 3m before the start and 10m beyond the finish",
      C: "60 meters flat",
      D: "55 meters with 5m run-out"
    },
    correct: "B",
    explanation: "Per the ASBA Manual NFHS indoor straight specifications: '60 meters long — An additional 3 meters before the start and 10 meters beyond the finish.'",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "152"
  },

  {
    id: "III-E-020",
    domain: "III", domain_name: "Track Layout",
    subcategory: "Radius Monuments",
    difficulty: "easy",
    question: "Why are radius points often permanently marked on the site with radius monuments?",
    choices: {
      A: "ASBA certification requires permanent monuments on all tracks",
      B: "Because of their importance in layout and marking a track",
      C: "To mark emergency drainage access points",
      D: "Only required for WA Class 1 and 2 certification"
    },
    correct: "B",
    explanation: "Per the ASBA Manual: 'The radius point is the theoretical point (or points) used to define the curves of the track. Because of their importance in layout and marking a track, the radius points may be permanently marked on the site by radius monuments.'",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "17"
  },

  {
    id: "III-E-021",
    domain: "III", domain_name: "Track Layout",
    subcategory: "WA Lane Requirements",
    difficulty: "easy",
    question: "What is the minimum number of lanes required for WA international competition on the oval?",
    choices: { A: "4 lanes", B: "6 lanes", C: "8 lanes", D: "10 lanes" },
    correct: "C",
    explanation: "Per the ASBA Manual Appendix C: 'WA — Oval: At least 4 lanes; Straight: At least 6 lanes; International Competition: At least 8 lanes (Rule 1 a, b and c).'",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "161"
  },

  {
    id: "III-E-022",
    domain: "III", domain_name: "Track Layout",
    subcategory: "Chute",
    difficulty: "easy",
    question: "What is a 'chute' in the context of a running track?",
    choices: {
      A: "The drainage channel inside the track oval",
      B: "The straightaway extension beyond the finish for deceleration",
      C: "The sprint starting area rectangle at the beginning of the main straight",
      D: "The curved section of a double-bend track"
    },
    correct: "C",
    explanation: "Per the ASBA Manual, tracks 'differ with regard to the location and length of the chute and the location of the starting line for the 110-meter and 300-meter hurdles.' A chute is the starting rectangle in the main straight, and its length/location affects start lines for sprint events.",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "17"
  },

  {
    id: "III-E-023",
    domain: "III", domain_name: "Track Layout",
    subcategory: "Pi Value",
    difficulty: "easy",
    question: "What value of pi does the ASBA Manual specify for track distance calculations?",
    choices: { A: "3.14", B: "3.1416", C: "3.14159265", D: "22/7" },
    correct: "B",
    explanation: "Per the ASBA Manual: 'pi = 3.1416 — Calculation used for curve distances.' This value is used consistently throughout all track geometry formulas. Results are expressed to the nearest 0.0001m.",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "18"
  },

  {
    id: "III-M-010",
    domain: "III", domain_name: "Track Layout",
    subcategory: "Stagger Calculation",
    difficulty: "medium",
    question: "A track has 8 lanes, each 1.0668m (42\") wide. What is the stagger per lane for a 400m event?",
    choices: { A: "3.35m", B: "6.70m", C: "8.50m", D: "9.52m" },
    correct: "B",
    explanation: "Stagger per lane = 2π × lane width = 2 × 3.1416 × 1.0668m = 6.7038m ≈ 6.70m. For WA lanes (1.2192m), the stagger would be 2 × 3.1416 × 1.2192m = 7.66m.",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "18"
  },

  {
    id: "III-M-011",
    domain: "III", domain_name: "Track Layout",
    subcategory: "Track Length Calculation",
    difficulty: "medium",
    question: "A WA standard track has R-to-R distance of 84.39m and measure line radius 36.80m. What is the measure line arc length for one complete semicircle?",
    choices: { A: "107.63m", B: "115.61m", C: "157.08m", D: "231.22m" },
    correct: "B",
    explanation: "Arc for one semicircle = π × r = 3.1416 × 36.80m = 115.61m. Two semicircles = 231.22m. Two straights = 168.78m. Total = exactly 400.00m. So one curve = 115.61m.",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "17"
  },

  {
    id: "III-M-012",
    domain: "III", domain_name: "Track Layout",
    subcategory: "Common Marking Errors",
    difficulty: "medium",
    question: "What are the precise values for 20cm and 30cm in inches? The ASBA Manual identifies assuming 8\" = 20cm and 12\" = 30cm as a common error.",
    choices: {
      A: "8\" = 20cm exactly; 12\" = 30cm exactly",
      B: "20cm = 7.874\"; 30cm = 11.811\"",
      C: "20cm = 8.267\"; 30cm = 12.400\"",
      D: "20cm = 7.500\"; 30cm = 11.250\""
    },
    correct: "B",
    explanation: "Per the ASBA Manual: '20cm = 0.656' or 7.874\"' and '30cm = 0.984' or 11.811\"'. These precise values are critical — using 8\" and 12\" introduces small errors that compound into significant measurement inaccuracies.",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "113"
  },

  {
    id: "III-M-013",
    domain: "III", domain_name: "Track Layout",
    subcategory: "Verification Classes",
    difficulty: "medium",
    question: "Class 4 verification is used for which level of competition?",
    choices: {
      A: "International/Olympic competition",
      B: "NCAA collegiate events requiring slope verification",
      C: "Major high school events where state or national records may be set",
      D: "Small high schools without championship aspirations"
    },
    correct: "C",
    explanation: "Per the ASBA Manual: 'Class 4 is generally used to verify tracks that will be used for major high school events. Procedures include verifying the distances run but not any slope verification.' Class 3 is for collegiate events and includes slope verification. Class 5 is for small facilities.",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "128"
  },

  {
    id: "III-M-014",
    domain: "III", domain_name: "Track Layout",
    subcategory: "Radius Measurement",
    difficulty: "medium",
    question: "In Class 3 and Class 4 verification, at what angular interval are radius control points placed around each curve?",
    choices: { A: "10 degrees (36 points per curve)", B: "15 degrees (13 points per curve, 26 total)", C: "20 degrees (9 points per curve)", D: "30 degrees (6 points per curve)" },
    correct: "B",
    explanation: "Per the ASBA Manual: 'Place a mark...at points 1-13, which are 15 degrees between points. These are the radius control points.' Points 1–13 cover curve DA; points 14–26 cover curve BC, for 26 total measurement points per oval.",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "130"
  },

  {
    id: "III-M-015",
    domain: "III", domain_name: "Track Layout",
    subcategory: "Verification Tolerance",
    difficulty: "medium",
    question: "In Class 4 verification, if the theoretical running distance deviation from 400m does not exceed what value can the oval be considered dimensionally accurate?",
    choices: { A: "0.005m", B: "0.007m", C: "0.08m (and not short of 400m)", D: "0.04m" },
    correct: "C",
    explanation: "Per the ASBA Manual Class 4 procedures: 'If such deviation does not exceed 0.08m (and is not short of 400m), the 400m oval can be considered dimensionally accurate.' No minus tolerance is ever permitted.",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "130"
  },

  {
    id: "III-M-016",
    domain: "III", domain_name: "Track Layout",
    subcategory: "Sand Pit",
    difficulty: "medium",
    question: "What is the minimum sand depth in a long jump or triple jump landing pit?",
    choices: { A: "6 inches", B: "8 inches", C: "12 inches", D: "18 inches" },
    correct: "C",
    explanation: "Per the ASBA Manual: 'At a minimum, the sand should be 12\" deep. Drainage may be incorporated in the bottom of the pit where natural drainage is not effective.'",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "91"
  },

  {
    id: "III-M-017",
    domain: "III", domain_name: "Track Layout",
    subcategory: "Steeplechase",
    difficulty: "medium",
    question: "Per WA rules, what is the length of the steeplechase water jump (including the hurdle)?",
    choices: { A: "2.44m ± 2cm", B: "3.00m ± 2cm", C: "3.66m ± 2cm", D: "4.00m ± 2cm" },
    correct: "C",
    explanation: "Per the ASBA Manual Appendix C: 'The water jump, including the hurdle, shall be 3.66m (+/- 2cm) in length. The width shall be equal to the length, namely 3.66m (+/- 2cm).' Water depth at the hurdle end is 50cm for approximately 30cm, then slopes to track level.",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "165"
  },

  {
    id: "III-M-018",
    domain: "III", domain_name: "Track Layout",
    subcategory: "Runway Width",
    difficulty: "medium",
    question: "What runway width does the ASBA Manual recommend for long jump/triple jump runways?",
    choices: {
      A: "Minimum 42\" to match lane width",
      B: "Ideally 5' of concrete/asphalt, center 52\" surfaced",
      C: "Minimum 6' wide with 48\" surfaced center",
      D: "Minimum 8' wide throughout"
    },
    correct: "B",
    explanation: "Per the ASBA Manual: 'Runways are often constructed at a too narrow 42\" wide...This is a safety concern as well as a potential area for erosion. Make the runways wide enough...ideally 5' of concrete or asphalt, the center 52\" of which is surfaced.'",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "90"
  },

  {
    id: "III-M-019",
    domain: "III", domain_name: "Track Layout",
    subcategory: "Indoor Track",
    difficulty: "medium",
    question: "What minimum number of lanes is preferred for a WA/USATF standard 200m indoor track?",
    choices: { A: "Min 2, preferred 4", B: "Min 4, preferred 6", C: "Min 6, preferred 8", D: "Min 8, preferred 10" },
    correct: "B",
    explanation: "Per the ASBA Manual WA/USATF indoor track specs: 'Minimum of 4 lanes, with 6 preferred.' NCAA specifies a minimum of 6 lanes indoors.",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "152"
  },

  {
    id: "III-M-020",
    domain: "III", domain_name: "Track Layout",
    subcategory: "Track Orientation",
    difficulty: "medium",
    question: "How should a track be oriented relative to prevailing winds?",
    choices: {
      A: "Curves oriented toward prevailing wind to reduce wind resistance",
      B: "Straightaways and jump runways parallel to prevailing winds so dashes and hurdles can be reversed to take advantage of the wind",
      C: "Finish line facing into prevailing wind to reduce times",
      D: "Orientation does not affect performance"
    },
    correct: "B",
    explanation: "Per the ASBA Manual: 'It is desirable to have the track laid out so that the straightaways and jump runways are parallel to the prevailing winds. This is important so that dashes and hurdle races can be reversed to take advantage of the wind.'",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "20"
  },

  {
    id: "III-M-021",
    domain: "III", domain_name: "Track Layout",
    subcategory: "High Jump Slope",
    difficulty: "medium",
    question: "What is the maximum downward slope for the high jump approach in the direction of the crossbar per WA, USATF, and NCAA?",
    choices: { A: "0.1% (1:1000)", B: "0.4% (1:250)", C: "1.0% (1:100)", D: "2.0% (1:50)" },
    correct: "B",
    explanation: "Per the ASBA Manual Appendix D: '0.4% — 1\" in 20.833' — 1:250 — Maximum downward slope in the direction of the crossbar on high jump for all but NFHS.' The Class 3 certification allows up to 0.60% for the high jump running direction toward the crossbar.",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "175"
  },

  {
    id: "III-M-022",
    domain: "III", domain_name: "Track Layout",
    subcategory: "Shot Put Circle",
    difficulty: "medium",
    question: "What is the inside diameter of the shot put throwing circle per WA rules?",
    choices: { A: "2.000m ± 5mm", B: "2.135m ± 5mm", C: "2.500m ± 5mm", D: "2.744m ± 5mm" },
    correct: "B",
    explanation: "Per the ASBA Manual Appendix C: 'WA — Shot Put: Inside diameter 2.135m +/- 5mm.' NFHS specifies 7' (2.134m). The discus circle is different (2.500m).",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "169"
  },

  {
    id: "III-M-023",
    domain: "III", domain_name: "Track Layout",
    subcategory: "D-Zone",
    difficulty: "medium",
    question: "What is the D-zone of a running track?",
    choices: {
      A: "The danger zone 1m inside the track surface",
      B: "The area of the infield made up of all or part of the semicircle inside the curve of the running track",
      C: "The deceleration zone beyond the finish line",
      D: "The discus sector inside the oval"
    },
    correct: "B",
    explanation: "Per the ASBA Manual: 'The D-zone, or the area of the infield made up of all or part of the semicircle inside the curve of the running track.' D-zone dimensions are calculated from the radius and the centerline distance.",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "19"
  },

  {
    id: "III-M-024",
    domain: "III", domain_name: "Track Layout",
    subcategory: "Steeplechase Placement",
    difficulty: "medium",
    question: "Regarding steeplechase water jump placement, what does the ASBA Manual recommend?",
    choices: {
      A: "Water jump must always be outside the oval",
      B: "Water jump may be inside or outside the oval, but inside is recommended; it must be placed on the curve prior to the finish line",
      C: "Water jump must be located exactly 200m from the start",
      D: "Water jump placement is at the contractor's discretion"
    },
    correct: "B",
    explanation: "Per the ASBA Manual: 'The steeplechase water jump pit can be constructed either inside or outside the track oval (inside is recommended). There is flexibility as to its placement; however, it must be placed on the curve prior to the finish line.'",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "92"
  },

  {
    id: "III-M-025",
    domain: "III", domain_name: "Track Layout",
    subcategory: "Break-Line",
    difficulty: "medium",
    question: "Which event type is most affected by failure to apply break-line compensation?",
    choices: {
      A: "The 100m dash (straight sprint)",
      B: "The 5000m run (multiple laps)",
      C: "Multi-lane staggered starts and relay exchange zones where runners change lanes",
      D: "High jump approach runs"
    },
    correct: "C",
    explanation: "Break-line compensation applies specifically to events where runners leave staggered positions and converge to a common lane. In relay exchanges and staggered starts, if the break line is not properly calculated, exchange zones and start staggers will be incorrect.",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "113"
  },

  {
    id: "III-M-026",
    domain: "III", domain_name: "Track Layout",
    subcategory: "Javelin Runway",
    difficulty: "medium",
    question: "The ASBA Manual recommends the javelin runway be extended 1m beyond what feature when synthetic surfacing is used?",
    choices: {
      A: "1m beyond the scratch line into the landing sector",
      B: "1m beyond the painted foul line",
      C: "1m beyond the edge of the track oval",
      D: "1m beyond the end of the grass landing sector"
    },
    correct: "B",
    explanation: "Per the ASBA Manual: 'The javelin runway should be extended 1m beyond the painted foul line when synthetic surfacing is used.' This prevents delamination at the surface edge.",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "91"
  },

  {
    id: "III-M-027",
    domain: "III", domain_name: "Track Layout",
    subcategory: "Indoor Safety Zone",
    difficulty: "medium",
    question: "What safety zone width is required for the inside of banked indoor track curves, measured from the outer edge of the outer lane outer marking?",
    choices: { A: "0.1 meters", B: "0.2 meters", C: "0.5 meters", D: "1.0 meters" },
    correct: "B",
    explanation: "Per the ASBA Manual Chapter 9: 'the banked bends on indoor tracks should include a safety zone minimum of 0.2 meters wide as measured from the outer edge of the outer lane outer marking. The outer edges should include a protective railing from the beginning of the banking to the end.'",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "153"
  },

  {
    id: "III-H-004",
    domain: "III", domain_name: "Track Layout",
    subcategory: "Track Geometry",
    difficulty: "hard",
    question: "An equal quadrant track has 100m per semicircle. What is the measure line radius?",
    choices: { A: "28.65m", B: "31.83m", C: "36.80m", D: "40.00m" },
    correct: "B",
    explanation: "Arc = π × r, so r = 100m ÷ π = 100 ÷ 3.1416 = 31.83m. Two straights × 100m = 200m. Two semicircles × 100m = 200m. Total = 400m. Measure line radius = 31.83m.",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "17"
  },

  {
    id: "III-H-005",
    domain: "III", domain_name: "Track Layout",
    subcategory: "Track Geometry",
    difficulty: "hard",
    question: "A non-equal quadrant track has R-to-R = 100m and measure line radius = 36.80m. What is the total track length?",
    choices: { A: "400.00m", B: "425.61m", C: "431.22m", D: "432.78m" },
    correct: "C",
    explanation: "Length = 2(R-to-R) + 2(π × r) = 2(100) + 2(3.1416 × 36.80) = 200 + 231.22 = 431.22m. This is NOT a standard 400m track — the WA standard uses R-to-R = 84.39m with radius 36.80m to produce exactly 400m.",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "17"
  },

  {
    id: "III-H-006",
    domain: "III", domain_name: "Track Layout",
    subcategory: "High Jump Certification Slope",
    difficulty: "hard",
    question: "During Class 3 slope verification, what is the maximum slope of the high jump area in the running direction toward the crossbar center?",
    choices: { A: "0.10% (1:1000)", B: "0.40% (1:250)", C: "0.60% (1:167)", D: "1.00% (1:100)" },
    correct: "C",
    explanation: "Per the ASBA Manual Class 3 slope certification: 'The slope of the high jump in the running direction toward the center of the crossbar is no more than 0.60%.' This is slightly more lenient than the 0.40% general runway rule, reflecting the unique geometry of high jump approaches.",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "127"
  },

  {
    id: "III-H-007",
    domain: "III", domain_name: "Track Layout",
    subcategory: "Layout Methods",
    difficulty: "hard",
    question: "When using transit/theodolite for curve markings, measurements are taken from radius points and which four track points?",
    choices: {
      A: "The four lane line mid-curve points",
      B: "The four tangent points of the track (PCs 1, 2, 3 and 4)",
      C: "The four finish line positions for 100m, 200m, 400m, and 800m",
      D: "The four corners of the track rectangle"
    },
    correct: "B",
    explanation: "Per the ASBA Manual: 'measurements are taken from the radius points and the four tangent points of the track (PCs 1, 2, 3 and 4). The location of each mark along the curve is converted to an angle, then located via the transit or theodolite.' PCs = Points of Curvature (straight-to-curve transitions).",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "111"
  },

  {
    id: "III-H-008",
    domain: "III", domain_name: "Track Layout",
    subcategory: "WA Lane Width Tolerance",
    difficulty: "hard",
    question: "What is the permissible tolerance on WA standard lane width of 1.22m?",
    choices: { A: "1.22m ± 0.01m", B: "1.22m ± 0.03m", C: "1.22m ± 0.05m", D: "1.22m ± 0.10m" },
    correct: "B",
    explanation: "Per the ASBA Manual Appendix C: 'WA — 1.22m +/- 0.03.' The 5cm lane line on the right side of each lane is included in the lane measurement.",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "161"
  },

  {
    id: "III-H-009",
    domain: "III", domain_name: "Track Layout",
    subcategory: "Break-Line Compensation",
    difficulty: "hard",
    question: "What does 'break-line compensation' refer to in track marking?",
    choices: {
      A: "Adjusting start lines for measurement equipment errors",
      B: "Adjusting start lines and exchange zones to account for the running path change when runners leave staggered lanes and converge toward the inside",
      C: "Adding extra distance to total track length for measurement tolerances",
      D: "Applying extra paint at lines where surface texture creates shadows"
    },
    correct: "B",
    explanation: "Per the ASBA Manual common errors: 'Not applying break-line compensation to start lines and exchange zones.' Break-line compensation accounts for the point where runners leave staggered lane positions. Omitting this produces incorrect race distances for multi-lane events.",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "113"
  },

  {
    id: "III-H-010",
    domain: "III", domain_name: "Track Layout",
    subcategory: "Runway Measurement",
    difficulty: "hard",
    question: "When calculating runway length for long jump or pole vault, from where is the measurement taken?",
    choices: {
      A: "From the edge of the landing area to the opposite end of the runway",
      B: "From the back of the vault box or the foul lines — NOT from the edge of landing areas",
      C: "From the center of the landing pit to the far end of the runway",
      D: "From the start of the surfaced portion to the takeoff board"
    },
    correct: "B",
    explanation: "Per the ASBA Manual: 'The length of a runway is not determined from the edge of the landing areas but from the back of the vault box or the foul lines. It is imperative that, in laying runways, correct measurements are followed per governing body recommendations.'",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "90"
  },

  // DOMAIN IV ADDITIONAL
  {
    id: "IV-E-006",
    domain: "IV", domain_name: "Track Surfacing and Marking",
    subcategory: "Minimum Surface Thickness",
    difficulty: "easy",
    question: "What minimum track surface thickness does ASBA recommend?",
    choices: { A: "3/8 inch (9.5mm)", B: "1/2 inch (12.7mm)", C: "5/8 inch (15.9mm)", D: "3/4 inch (19.1mm)" },
    correct: "B",
    explanation: "Per the ASBA Manual: 'ASBA recommends a minimum thickness of 1/2\" (12.7mm).' ASTM F-2157-09 specifies 12mm minimum (Class B & C) with nowhere less than 10mm. Areas with less surfacing are subject to spike penetration, a safety concern.",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "68"
  },

  {
    id: "IV-E-007",
    domain: "IV", domain_name: "Track Surfacing and Marking",
    subcategory: "SAR Systems",
    difficulty: "easy",
    question: "What are the typical rubber and asphalt oil percentages in a SAR (Sand-Asphalt-Rubber) surface system?",
    choices: {
      A: "4%–8% rubber, 5%–10% asphalt oil",
      B: "9%–14% rubber, 11%–15% high-penetration asphalt oil",
      C: "20%–25% rubber, 15%–20% asphalt oil",
      D: "1%–5% rubber, 3%–8% asphalt oil"
    },
    correct: "B",
    explanation: "Per the ASBA Manual: 'SAR systems typically consist of 9% to 14% rubber, 11% to 15% high-penetration asphalt oil and sand aggregate. They are mixed and installed similar to hot mix asphalt, usually to a compacted thickness of 1\". They tend to lose resiliency as they age.'",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "65"
  },

  {
    id: "IV-E-008",
    domain: "IV", domain_name: "Track Surfacing and Marking",
    subcategory: "Surface Weight Testing",
    difficulty: "easy",
    question: "For the surface weight per unit area QC test, what minimum percentage of the specified weight must the 18\" × 18\" sample achieve?",
    choices: { A: "85%", B: "90%", C: "95%", D: "98%" },
    correct: "C",
    explanation: "Per the ASBA Manual: 'The weight per unit area of the sample should be at least 95% of the weight per unit area specified by the manufacturer.' This verifies correct proportions of rubber and binder were installed.",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "69"
  },

  {
    id: "IV-E-009",
    domain: "IV", domain_name: "Track Surfacing and Marking",
    subcategory: "EPDM Content",
    difficulty: "easy",
    question: "What is the minimum EPDM polymer content required in Type 1 colored EPDM rubber granules?",
    choices: { A: "10%", B: "15%", C: "20%", D: "25%" },
    correct: "C",
    explanation: "Per the ASBA Manual: 'The EPDM polymer content of the compound should be no less than 20%.' Type 1 colored EPDM granules from virgin compounds offer superior resistance to weathering, with excellent resistance to ozone, oxidation and water.",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "67"
  },

  {
    id: "IV-E-010",
    domain: "IV", domain_name: "Track Surfacing and Marking",
    subcategory: "400m Marking Color",
    difficulty: "easy",
    question: "What color are the 400m dash start line markings for all four major governing bodies?",
    choices: {
      A: "White for all",
      B: "White for WA/USATF/NCAA, Yellow for NFHS",
      C: "Blue for all",
      D: "Green for WA/USATF/NCAA, White for NFHS"
    },
    correct: "A",
    explanation: "Per the ASBA Manual Appendix G: '400m Dash/Hurdles/Relay — White — White — White — White' for NFHS, NCAA, USATF, and WA. White is universal for 400m start lines across all governing bodies.",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "178"
  },

  {
    id: "IV-E-011",
    domain: "IV", domain_name: "Track Surfacing and Marking",
    subcategory: "4x100 Relay Color",
    difficulty: "easy",
    question: "Per ASBA Appendix G, the USATF and World Athletics 4×100m relay acceleration marks are what color?",
    choices: { A: "Yellow", B: "Orange", C: "Red", D: "Blue" },
    correct: "C",
    explanation: "Per the ASBA Manual Appendix G note: 'The USATF and World Athletics acceleration marks for the 4×100m are red.' This distinguishes them from the white exchange zone markings.",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "178"
  },

  {
    id: "IV-E-012",
    domain: "IV", domain_name: "Track Surfacing and Marking",
    subcategory: "1500m Marking Color",
    difficulty: "easy",
    question: "Per ASBA Appendix G, what color are 1500m and 5000m/3000m start line markings for WA competition?",
    choices: { A: "White", B: "Green", C: "Yellow", D: "Blue" },
    correct: "A",
    explanation: "Per the ASBA Manual Appendix G, most start lines (100m, 200m, 300m, 400m, 800m, 1500m, 3000m/5000m) use white for WA, USATF, NCAA, and NFHS. Notable exceptions: 400m starting position (green for WA/USATF/NCAA) and 4×400m exchange zones (blue for all).",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "178"
  },

  {
    id: "IV-E-013",
    domain: "IV", domain_name: "Track Surfacing and Marking",
    subcategory: "EPDM Specific Gravity",
    difficulty: "easy",
    question: "What specific gravity range is specified for Type 1 colored EPDM rubber granules?",
    choices: { A: "0.90–1.10", B: "1.15–1.40", C: "1.40–1.60", D: "1.60–1.80" },
    correct: "C",
    explanation: "Per the ASBA Manual: 'The specific gravity is between 1.40 and 1.60' for Type 1 colored EPDM granules. Shore A hardness should be 55 to 70. (Type 2 black SBR granules have specific gravity 1.15–1.40.)",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "67"
  },

  {
    id: "IV-M-007",
    domain: "IV", domain_name: "Track Surfacing and Marking",
    subcategory: "Weather Effects — Quadrant 2",
    difficulty: "medium",
    question: "Under Quadrant 2 weather conditions (high temperature/high humidity) during polyurethane installation, what defect is most likely?",
    choices: {
      A: "Spider cracking from insufficient rubber bonding",
      B: "Micro-bubbling and bubbling in the top portion; cold seams in base mat passes; structural spray premature wear",
      C: "Premature stiffening causing screed marks",
      D: "Complete cure failure leaving a permanently gummy surface"
    },
    correct: "B",
    explanation: "Per the ASBA Manual: 'Quadrant 2—High Temperature/High Humidity — Can show micro-bubbling and bubbling in top portion of the application causing premature wear; Base mat applications can experience cold seams in which the passes are not bonded well at the seams.'",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "64"
  },

  {
    id: "IV-M-008",
    domain: "IV", domain_name: "Track Surfacing and Marking",
    subcategory: "Weather Effects — Quadrant 3",
    difficulty: "medium",
    question: "Under Quadrant 3 weather conditions (low temperature/low humidity), what defect is most likely?",
    choices: {
      A: "Micro-bubbling from premature cure",
      B: "Cold seams at passes",
      C: "Spider cracking from insufficient bond between rubber particles in the base mat",
      D: "Color fading from UV"
    },
    correct: "C",
    explanation: "Per the ASBA Manual: 'Quadrant 3—Low Temperature/Low Humidity — In base mat installations, the binder can be inhibited from forming a proper bond between the rubber granules. The effect: base mat applications can experience spider cracking in which the bond between the rubber particles is not sufficient.'",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "64"
  },

  {
    id: "IV-M-009",
    domain: "IV", domain_name: "Track Surfacing and Marking",
    subcategory: "Rolled Goods",
    difficulty: "medium",
    question: "When installing rolled goods (premanufactured surfaces), how should head joints be oriented?",
    choices: {
      A: "Perpendicular to running direction for uniform appearance",
      B: "Staggered to prevent a continuous joint line",
      C: "Parallel to running direction for best adhesion",
      D: "All joints must align with lane lines"
    },
    correct: "B",
    explanation: "Per the ASBA Manual: 'making sure that each sheet is placed in a straight line or around a curve at a constant radius. Head joints should be staggered.' Additionally, 'Seams and joints should be level and not pinched. Placing weights on seams and joints will help the mat to lie flat.'",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "62"
  },

  {
    id: "IV-M-010",
    domain: "IV", domain_name: "Track Surfacing and Marking",
    subcategory: "Prime Coat",
    difficulty: "medium",
    question: "At what rate is prime coat applied to aggregate base course before asphalt installation?",
    choices: {
      A: "Never used — only between lifts",
      B: "When shown on plans, at 0.30 gal/sy diluted over newly placed aggregate base",
      C: "Always before every lift",
      D: "Only when temperature exceeds 90°F"
    },
    correct: "B",
    explanation: "Per the ASBA Manual: 'If shown on the plans, apply prime coat at the diluted rate of 0.30 gal/sy over newly placed aggregate base course prior to the installation of the base asphalt.' Tack coat (not prime coat) is used between asphalt lifts.",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "81"
  },

  {
    id: "IV-M-011",
    domain: "IV", domain_name: "Track Surfacing and Marking",
    subcategory: "Plus Tolerance",
    difficulty: "medium",
    question: "What is the generally accepted planned plus tolerance built into marking calculations to ensure no minus tolerance occurs?",
    choices: { A: "2–4cm", B: "6–8cm", C: "10–12cm", D: "0cm — no plus tolerance planned" },
    correct: "B",
    explanation: "Per the ASBA Manual: 'It is generally accepted that a planned plus tolerance of 6 to 8cm for a 400m lap will ensure that there will be no minus tolerance.' WA/NCAA maximum is 4cm; NFHS maximum is 8cm, so marking specialists adjust in-field application to meet governing body requirements.",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "110"
  },

  {
    id: "IV-M-012",
    domain: "IV", domain_name: "Track Surfacing and Marking",
    subcategory: "Paint Rate",
    difficulty: "medium",
    question: "What paint application rate does the ASBA Manual typically specify for track lane marking?",
    choices: { A: "3 mils", B: "6 mils", C: "9 mils", D: "12 mils" },
    correct: "C",
    explanation: "Per the ASBA Manual: 'Typically 9mls is specified for an application rate, although this rate may vary depending on the material.' Insufficient paint causes premature wear; excessive thickness causes cracking and curling.",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "112"
  },

  {
    id: "IV-M-013",
    domain: "IV", domain_name: "Track Surfacing and Marking",
    subcategory: "Striping Machine Pressure",
    difficulty: "medium",
    question: "What is the pressure range for conventional (air-mixed) track striping machines?",
    choices: { A: "5–30 psi", B: "30–90 psi", C: "100–300 psi", D: "800–3000 psi" },
    correct: "B",
    explanation: "Per the ASBA Manual: 'Conventional machines mix air and paint at a specific ratio of pressure (usually 30 to 90psi combined pressure). Airless technology is newer, applying only paint (no air), typically between 800 and 3000psi.'",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "112"
  },

  {
    id: "IV-M-014",
    domain: "IV", domain_name: "Track Surfacing and Marking",
    subcategory: "400m Starting Position Color",
    difficulty: "medium",
    question: "Per ASBA Appendix G, what color are the 400m starting position markings for NCAA competition?",
    choices: { A: "White", B: "Yellow", C: "Green", D: "Red" },
    correct: "C",
    explanation: "Per the ASBA Manual Appendix G: '400m starting position — NCAA: Green; USATF: Green; WA: Green.' NFHS lists 'NA' for the 400m starting position color. The 400m start LINE is white for all bodies, but the starting position markers are green.",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "178"
  },

  {
    id: "IV-M-015",
    domain: "IV", domain_name: "Track Surfacing and Marking",
    subcategory: "Latex Sandwich",
    difficulty: "medium",
    question: "In a latex sandwich system, what are the composition and depth of the black base layer before the colored top layer?",
    choices: {
      A: "Multiple layers of colored EPDM to 3/8\" depth",
      B: "Multiple layers of black SBR rubber and neutral binder to approximately 3/8\"; then colored EPDM/pigmented binder at 1/8\" on top",
      C: "Single layer of black SBR to 1/2\" depth, then colored top coat",
      D: "Polyurethane base mat 1/2\" then colored latex top coat 1/8\""
    },
    correct: "B",
    explanation: "Per the ASBA Manual: 'In the case of a sandwich system, multiple layers of black SBR rubber and neutral binder are installed to a depth of approximately 3/8\". Then multiple layers of colored EPDM rubber particles and pigmented binder are installed at a depth of 1/8\" over the black base.' Total ≈ 1/2\" (12.7mm).",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "57"
  },

  {
    id: "IV-M-016",
    domain: "IV", domain_name: "Track Surfacing and Marking",
    subcategory: "Asphalt Surface Cleanliness",
    difficulty: "medium",
    question: "Before installing tack coat or asphalt, the existing surface must be in what condition?",
    choices: {
      A: "Still warm from prior compaction",
      B: "Clean — free of materials that would contaminate HMA, prevent bonding, or interfere with spreading; oil/grease spots scraped and treated",
      C: "Lightly misted with water to improve adhesion",
      D: "Tack coated immediately regardless of surface condition"
    },
    correct: "B",
    explanation: "Per the ASBA Manual: 'Existing surfaces to receive HMA must be clean prior to the installation of any portion of the work...free of accumulations of materials that would contaminate the mixture, prevent bonding, or interfere with spreading operations.' Oil spots must be scraped and treated before tack coat.",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "80"
  },

  {
    id: "IV-M-017",
    domain: "IV", domain_name: "Track Surfacing and Marking",
    subcategory: "Concrete Vapor Test",
    difficulty: "medium",
    question: "What ASTM test determines the moisture vapor emission rate of a concrete subfloor prior to track surfacing?",
    choices: {
      A: "ASTM F-1869-10 — Anhydrous Calcium Chloride test",
      B: "ASTM D-4318 — Liquid Limit and Plasticity",
      C: "ASTM C-39 — Compressive Strength",
      D: "ASTM E-1745 — Water Vapor Retarder"
    },
    correct: "A",
    explanation: "Per the ASBA Manual: acceptable tests include 'ASTM F-1869-10–Standard Test Method for Measuring Moisture Vapor Emission Rate of Concrete Subfloor Using Anhydrous Calcium Chloride.' Other options include ASTM F-710-11 and ASTM F-2170-09 (in situ probes).",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "87"
  },

  {
    id: "IV-H-004",
    domain: "IV", domain_name: "Track Surfacing and Marking",
    subcategory: "Surface Standards Organizations",
    difficulty: "hard",
    question: "Which organizations have comprehensive programs for evaluating and classifying sports surfaces per the ASBA Manual?",
    choices: {
      A: "World Athletics, ASTM International (F-2157-09), and DIN 18035 Part 6",
      B: "NCAA, NFHS, and USATF only",
      C: "ASBA exclusively certifies track surfaces",
      D: "ISO standards apply; WA and ASTM do not evaluate sports surfaces"
    },
    correct: "A",
    explanation: "Per the ASBA Manual: 'World Athletics (WA), the Deutsche Institute of Norms (DIN# 18035 Part 6) and ASTM International (ASTM F-2157-09) have comprehensive programs for evaluating and classifying sports surfaces.' Facilities must meet WA standards only if used for international WA competition.",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "69"
  },

  {
    id: "IV-H-005",
    domain: "IV", domain_name: "Track Surfacing and Marking",
    subcategory: "Surface Properties",
    difficulty: "hard",
    question: "Which surface property is listed in the ASBA Manual as a required evaluation parameter for synthetic track surfaces?",
    choices: { A: "Thermal expansion coefficient", B: "Water absorption rate", C: "Force reduction", D: "Sound attenuation" },
    correct: "C",
    explanation: "Per the ASBA Manual surface property list: evenness and imperfections, thickness, modified vertical deformation, force reduction, coefficient of friction, tensile strength, elongation, weathering, and flammability. Force reduction is a critical safety parameter for athlete protection.",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "69"
  },

  {
    id: "IV-H-006",
    domain: "IV", domain_name: "Track Surfacing and Marking",
    subcategory: "Pore Sealer",
    difficulty: "hard",
    question: "When adding a pore sealer coat to a permeable polyurethane base mat, what critical precaution must be taken?",
    choices: {
      A: "Apply in two coats to increase sealer thickness",
      B: "The base mat and pavement must be completely dry before applying the seal coat; entrapped moisture causes hydrostatic pressure that can separate the surface from the pavement",
      C: "Sand the base mat surface before applying the pore sealer",
      D: "Install the pore sealer only in temperatures above 80°F"
    },
    correct: "B",
    explanation: "Per the ASBA Manual: 'It is extremely important that the base mat and pavement are completely dry before applying the seal coat. Entrapped moisture can cause hydrostatic pressure, which may cause the surface to separate from the pavement.' Adding a pore sealer also converts the surface from permeable to completely impermeable.",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "59"
  },

  {
    id: "IV-H-007",
    domain: "IV", domain_name: "Track Surfacing and Marking",
    subcategory: "Surface Weight Test",
    difficulty: "hard",
    question: "How is the surface weight per unit area test conducted per the ASBA Manual?",
    choices: {
      A: "Core samples from the finished track are weighed",
      B: "An 18\" × 18\" independent sample is made on strippable medium using the same materials and technique as the track; removed and weighed on a certified analytical scale",
      C: "Contractor provides manufacturer certificates; no independent testing needed",
      D: "Thickness measurements at 100 points determine weight by calculation"
    },
    correct: "B",
    explanation: "Per the ASBA Manual: 'During construction of the track, an 18\" × 18\" independent sample is made on a strippable medium from the same materials, method and technique used in the construction of the track...The sample is then removed from its medium and weighed on a certified analytical scale or laboratory balance.'",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "69"
  },

  {
    id: "IV-H-008",
    domain: "IV", domain_name: "Track Surfacing and Marking",
    subcategory: "PU Design Conditions",
    difficulty: "hard",
    question: "At what standard temperature and humidity were most polyurethane surfacing products designed and tested?",
    choices: { A: "55°F and 40% humidity", B: "68°F and 50% humidity", C: "72°F and 60% humidity", D: "75°F and 55% humidity" },
    correct: "B",
    explanation: "Per the ASBA Manual: 'The majority of polyurethane surfacing products are designed and tested at a consistent 68-degree Fahrenheit temperature with 50% humidity, which are ideal conditions for installation.' Outside 50–90°F and 30–70% RH requires special attention and planning.",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "63"
  },

  // DOMAIN V ADDITIONAL
  {
    id: "V-E-005",
    domain: "V", domain_name: "Track Renovation",
    subcategory: "Spot Repair",
    difficulty: "easy",
    question: "How should cuts in synthetic surface be oriented when making spot repairs?",
    choices: {
      A: "At 45-degree angles to minimize visual impact",
      B: "Randomly shaped to match the damage",
      C: "Symmetrically; larger cuts should be from lane line to lane line",
      D: "Circular cuts to distribute stress evenly"
    },
    correct: "C",
    explanation: "Per the ASBA Manual: 'Cuts made for repairing the surface should always be symmetrical. When larger cuts are required, they should be made from lane line to lane line.' This ensures even stress distribution and professional appearance.",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "146"
  },

  {
    id: "V-E-006",
    domain: "V", domain_name: "Track Renovation",
    subcategory: "Cleaning",
    difficulty: "easy",
    question: "What type of cleaning solution should NEVER be used on a synthetic track surface?",
    choices: {
      A: "Water-based cleaning solutions",
      B: "Mild soap and water",
      C: "Petroleum or solvent-based cleaning solutions",
      D: "Diluted bleach solution"
    },
    correct: "C",
    explanation: "Per the ASBA Manual: 'do not use petroleum or solvent-based cleaning solutions.' Always test any cleaning solution in an inconspicuous spot for compatibility with the surface before broader application.",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "141"
  },

  {
    id: "V-E-007",
    domain: "V", domain_name: "Track Renovation",
    subcategory: "Repair Levels",
    difficulty: "easy",
    question: "Which of the five repair levels in the ASBA Manual continuum involves applying new surface material over existing material after spot repairs?",
    choices: { A: "Spot repair only", B: "Resurfacing", C: "Surface replacement", D: "Reconstruction" },
    correct: "B",
    explanation: "Per the ASBA Manual: 'Resurfacing implies spot repair of the existing synthetic surface followed by covering that surface with new material. If the symptoms of surface wear and/or cracks do not go beyond the synthetic surface, resurfacing is a viable option.' Surface replacement removes all existing synthetic; reconstruction addresses asphalt/base issues.",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "146"
  },

  {
    id: "V-E-008",
    domain: "V", domain_name: "Track Renovation",
    subcategory: "Equipment Safety",
    difficulty: "easy",
    question: "What must maintenance equipment be inspected for before being used on the track surface?",
    choices: {
      A: "Proper wheel pressure to avoid indentation",
      B: "Fluid leaks — oil and petroleum products must not be added while equipment is on the track surface",
      C: "Weight certification to ensure surface is not overloaded",
      D: "Exhaust direction to prevent fume contamination"
    },
    correct: "B",
    explanation: "Per the ASBA Manual: 'Any equipment used to assist in cleaning or maintenance should be inspected for fluid leaks before being used on the track surface...No fluids are to be added while the equipment is on the track surface to prevent spills or overfilling.'",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "140"
  },

  {
    id: "V-M-005",
    domain: "V", domain_name: "Track Renovation",
    subcategory: "Ghosting",
    difficulty: "medium",
    question: "What is 'ghosting' in track resurfacing, and how is it prevented?",
    choices: {
      A: "Air bubbles under the new surface; prevented by proper drying",
      B: "Faint old markings showing through the new porous surface; prevented by blacking out old markings before resurfacing",
      C: "Shadow cast by lane lines in low-angle sunlight; not preventable",
      D: "Moisture vapor escaping through the new surface; prevented by impermeable coating"
    },
    correct: "B",
    explanation: "Per the ASBA Manual: 'old markings should be blacked out (or covered with another color to match the track surface) to minimize ghosting, a faint reminder of the old markings on a newly resurfaced track. Remember that in most cases, the surfacing material will be porous. Old paint can easily show through the pores in a new surface.'",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "147"
  },

  {
    id: "V-M-006",
    domain: "V", domain_name: "Track Renovation",
    subcategory: "Pit Maintenance",
    difficulty: "medium",
    question: "What annual maintenance tasks does the ASBA Manual recommend for long jump/triple jump sand pits?",
    choices: {
      A: "Replace all sand annually; power wash pit walls",
      B: "Lightly scarify to mix in new material, level and compact roll; top up sand to border level; clean sand and vegetation from perimeter",
      C: "Add only 2\" of fresh sand on top without disturbing existing sand",
      D: "Remove all sand and refill with new masonry sand each season"
    },
    correct: "B",
    explanation: "Per the ASBA Manual: 'lightly scarify the sector to mix in new material, followed by leveling and compact rolling...top up with sand to the top of the border surrounding the pit. The new and existing sand should be mixed and leveled. Any sand or vegetation build-up around the perimeter should be removed.'",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "141"
  },

  {
    id: "V-M-007",
    domain: "V", domain_name: "Track Renovation",
    subcategory: "Winterizing",
    difficulty: "medium",
    question: "What does the ASBA Manual recommend doing with cracks before winter?",
    choices: {
      A: "Leave them open so water can drain through",
      B: "Fill with expansion filler to prevent freezing",
      C: "Repair cracks before winter; water freezing in a crack will enlarge it",
      D: "Cover the entire track with tarpaulins"
    },
    correct: "C",
    explanation: "Per the ASBA Manual: 'Note any cracks and, if possible, repair them before winter sets in. If water settles in a crack and freezes, it will enlarge the crack. Periodically remove any debris over the course of the winter to minimize [damage].'",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "144"
  },

  {
    id: "V-M-008",
    domain: "V", domain_name: "Track Renovation",
    subcategory: "Lane Wear",
    difficulty: "medium",
    question: "Why does the ASBA Manual note that wear tends to be heavier in Lanes 1 and 2?",
    choices: {
      A: "Lanes 1 and 2 have sharper curves causing more lateral stress",
      B: "High use from physical education classes and recreational runners preferring inside lanes",
      C: "The surface in Lanes 1 and 2 is thinner due to radius curvature",
      D: "Surface installers apply less material in inside lanes"
    },
    correct: "B",
    explanation: "Per the ASBA Manual: 'Track surfaces will tend to wear in lanes 1 and 2 due to high use.' The Manual recommends encouraging 'education classes to use outside lanes' to distribute wear more evenly.",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "141"
  },

  {
    id: "V-M-009",
    domain: "V", domain_name: "Track Renovation",
    subcategory: "Drainage Maintenance",
    difficulty: "medium",
    question: "What is one common cause of inadequate drainage on a track after construction, per the ASBA Manual?",
    choices: {
      A: "Aggregate base settling to create low spots",
      B: "Asphalt under a porous surface being lower than a curb or barrier on the drainage side, preventing water from escaping",
      C: "Lane lines creating a dam effect during heavy rain",
      D: "EPDM rubber particles migrating into drain channels"
    },
    correct: "B",
    explanation: "Per the ASBA Manual: 'One common cause of inadequate drainage is when the asphalt under a porous surface is lower than a curb or other barrier on the side where the water drains, meaning the water cannot escape.' Another problem is minimal slope requirements on high jump approaches.",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "25"
  },

  {
    id: "V-M-010",
    domain: "V", domain_name: "Track Renovation",
    subcategory: "Pre-Repaint Inspection",
    difficulty: "medium",
    question: "Per the ASBA Manual, what must occur BEFORE repainting existing lane lines?",
    choices: {
      A: "Paint must be the same brand as original",
      B: "Existing lines must be verified for accuracy; if inaccurate, the owner must decide how to proceed; track surface must be inspected for bubbles, cracks, wear, peeling and flaking",
      C: "New topographic survey must confirm all slopes before repainting",
      D: "Class 3 or 4 certification must be renewed"
    },
    correct: "B",
    explanation: "Per the ASBA Manual: '2. The existing lines and markings should be verified for accuracy. 3. Should there be lines and markings that are not accurate, the owner must decide on the procedure.' Additionally: 'the track surface should be inspected for surface bubbles, cracks, wear, peeling and flaking. Any necessary repairs should precede repainting.'",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "144"
  },

  {
    id: "V-M-011",
    domain: "V", domain_name: "Track Renovation",
    subcategory: "Compatible Resurfacing",
    difficulty: "medium",
    question: "Which type of track resurfacing does the ASBA Manual list as acceptable?",
    choices: {
      A: "Applying asphalt emulsion directly over existing polyurethane surface",
      B: "Applying a solvent-based or waterborne polyurethane structural spray over an existing polyurethane base mat track",
      C: "Bonding new asphalt base course directly to existing synthetic surface without removal",
      D: "Installing latex system over polyurethane without surface preparation"
    },
    correct: "B",
    explanation: "Per the ASBA Manual: 'Applying a solvent-based or waterborne polyurethane structural spray over an existing polyurethane base mat track' is an acceptable resurfacing option. Also acceptable: applying a seal coating to an existing polyurethane base mat. Surface compatibility and proper preparation are key.",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "146"
  },

  {
    id: "V-H-003",
    domain: "V", domain_name: "Track Renovation",
    subcategory: "Light Pole Safety",
    difficulty: "hard",
    question: "What specific light pole hazard does the ASBA Manual warn about, and what is the recommended solution?",
    choices: {
      A: "Lightning attraction; use underground conduit only",
      B: "Junction boxes above grade can be struck by maintenance equipment, leaving exposed wiring. Solution: insert conduit into the pole from below grade, or use poles with anchor-bolt base plates",
      C: "Junction boxes rust and must be replaced every 5 years",
      D: "Junction boxes must face away from the track for electrical safety"
    },
    correct: "B",
    explanation: "Per the ASBA Manual: 'These poles are manufactured with a nipple just above the grade where a junction box is installed...It is not unusual for maintenance equipment—mowers, carts, etc.—to strike this junction box and break it from the pole, leaving the serious safety hazard of exposed wiring...A better option...is to insert a conduit into the pole from below grade to feed the power source to the pole or to use poles with anchor-bolt base plates.'",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "95"
  },

  {
    id: "V-H-004",
    domain: "V", domain_name: "Track Renovation",
    subcategory: "Renovation Decision",
    difficulty: "hard",
    question: "A track survey finds: 15% surface delamination on straights only; no asphalt cracking; 3 minor birdbaths on curves; all markings faded but geometrically accurate. What is the appropriate repair strategy?",
    choices: {
      A: "Full reconstruction — delamination requires complete base removal",
      B: "Surface replacement — remove all synthetic, repair asphalt, apply new surface",
      C: "Resurfacing — spot repair delamination, correct birdbaths with approved leveling, apply new surface overlay; then repaint all markings",
      D: "Spot repair only — patch delamination; birdbaths are acceptable tolerance"
    },
    correct: "C",
    explanation: "Per the ASBA Manual repair continuum: 15% delamination without underlying asphalt structural failure falls within the resurfacing range. Birdbaths must be corrected before resurfacing. Reconstruction is not needed since there are no structural asphalt cracks. Full surface replacement would be appropriate if delamination were more extensive or if asphalt issues were present.",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "146"
  },

  {
    id: "V-H-005",
    domain: "V", domain_name: "Track Renovation",
    subcategory: "Health and Hygiene",
    difficulty: "hard",
    question: "What skin infection organism does the ASBA Manual specifically reference in the health and hygiene section, and what are its primary symptoms?",
    choices: {
      A: "Streptococcus; fever, swollen joints, and fatigue",
      B: "MRSA (methicillin-resistant Staphylococcus aureus); skin infections presenting as pimples, pustules and boils — red, swollen, painful areas or with pus",
      C: "E. coli; intestinal distress only",
      D: "Pseudomonas; rashes only in wet conditions"
    },
    correct: "B",
    explanation: "Per the ASBA Manual: MRSA 'usually manifest as skin infections, such as pimples, pustules and boils, which present as red, swollen, painful, or have pus or other drainage.' The Manual advises active participants to take precautions with suspicious lesions and maintain good hygiene including routine use of alcohol-based hand sanitizer.",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "144"
  },

  {
    id: "V-H-006",
    domain: "V", domain_name: "Track Renovation",
    subcategory: "Record Keeping",
    difficulty: "hard",
    question: "Why does the ASBA Manual recommend keeping written records of maintenance procedures over time?",
    choices: {
      A: "Required for ASBA certification renewal",
      B: "To track weather patterns",
      C: "Excessive maintenance may indicate more serious problems; records help establish appropriate schedule and support repair decisions",
      D: "State laws require documentation for athletic facilities"
    },
    correct: "C",
    explanation: "Per the ASBA Manual: 'The need for excessive maintenance may be an indicator of more serious problems.' Owners 'should keep clear, written records of maintenance procedures, conditions and problems noted.' Tracking maintenance history helps establish an appropriate schedule and identify progressive deterioration before major repairs are needed.",
    source_document: "ASBA Running Tracks Manual, 11th Ed.",
    source_page: "141"
  },

];

// ── Validate bank on load ──────────────────────────────────
(function validateBank() {
  const ids = window.CTB_QUESTIONS.map(q => q.id);
  const dupes = ids.filter((id, i) => ids.indexOf(id) !== i);
  if (dupes.length) console.warn('CTB_QUESTIONS: Duplicate IDs found:', dupes);

  window.CTB_QUESTIONS.forEach((q, i) => {
    const required = ['id','domain','domain_name','difficulty','question','choices','correct','explanation'];
    required.forEach(key => {
      if (!q[key]) console.warn(`CTB_QUESTIONS[${i}] (${q.id}): missing field "${key}"`);
    });
    if (!q.choices[q.correct]) {
      console.warn(`CTB_QUESTIONS[${i}] (${q.id}): correct key "${q.correct}" not in choices`);
    }
  });

  console.log(`CTB Question Bank loaded: ${window.CTB_QUESTIONS.length} questions`);
})();
