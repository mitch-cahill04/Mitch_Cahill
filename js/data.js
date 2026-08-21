
/**
 * ═══════════════════════════════════════════════════════════════
 *  PORTFOLIO DATA — js/data.js
 *  ─────────────────────────────────────────────────────────────
 *  This file is the single source of truth for ALL content.
 *
 *  HOW TO UPDATE:
 *    Option A (Easy): Click the lock icon (bottom-right of the site),
 *                     enter the password, and edit everything in-browser.
 *    Option B (Code): Edit the values below, then reload the page.
 *
 *  EDIT PASSWORD: Stern#27Pitch
 * ═══════════════════════════════════════════════════════════════
 */
 
const PORTFOLIO_DATA = {
 
  /* ── PERSONAL ──────────────────────────────────────────────── */
  personal: {
    name:           "Mitch Cahill",
    title:          "Finance & Data Science",
    subtitle:       "NYU Stern School of Business",
    tagline:        "Equity research, venture capital, and product strategy: the intersection of finance and technology.",
    bio:            "Finance and Computing & Data Science student at NYU Stern with hands-on experience in equity research, VC due diligence, and product management. I thrive at the intersection of analytical rigor and creative thinking.",
    email:          "Mcc9930@stern.nyu.edu",
    phone:          "",
    location:       "New York, NY",
    linkedin:       "https://www.linkedin.com/in/mitch-cahill-b875702b3/",
    github:         "",
    twitter:        "",
    resumeUrl:      "Cahill-Mitch-Resume-Dec.pdf",
    contactHeading: "Let's Connect",
    contactSub:     "Open to opportunities in finance, venture capital, and product strategy.",
  },
 
  /* ── HERO STATS (shown in the card on the right) ───────────── */
  heroStats: [
    { value: "3.9",   label: "GPA at UNT"     },
    { value: "$165",  label: "MU Price Target" },
    { value: "150+",  label: "Club Members"    },
    { value: "1",     label: "Publication"     },
  ],
 
  /* ── EDUCATION ──────────────────────────────────────────────── */
  education: [
    {
      id:          "edu-1",
      institution: "New York University",
      school:      "Stern School of Business",
      location:    "New York, NY",
      degree:      "B.S. in Finance, Computing and Data Science",
      period:      "Expected Dec 2027",
      gpa:         null,
      highlights: [
        "Foundations of Finance",
        "Economics of Global Business",
        "Statistics",
        "Management & Organization",
        "Microeconomics",
      ],
    },
    {
      id:          "edu-2",
      institution: "University of North Texas",
      school:      "",
      location:    "Denton, TX",
      degree:      "Transfer Student",
      period:      "Aug 2023 – May 2025",
      gpa:         "3.9",
      highlights: [
        "Student Investment Group",
        "Financial Management Association",
        "American Marketing Association",
        "Real Estate Club",
      ],
    },
  ],
 
  /* ── PROFESSIONAL EXPERIENCE ────────────────────────────────── */
  experience: [
    {
      id:       "exp-4",
      company:  "1752vc",
      location: "",
      role:     "Scout",
      period:   "Aug 2026 – Present",
      type:     "Venture Capital",
      bullets: [
        "Completed venture capital fellowship focused on startup evaluation, market research, investing, and deal sourcing across emerging industries",
        "Evaluated early-stage startups through market, product, and company research, developing investment theses and assessing growth potential",
        "Became Scout, sourcing startups and evaluating companies based on market size, business model, competitive positioning, and growth metrics",
      ],
    },
    {
      id:       "exp-3",
      company:  "Nielsen Holdings",
      location: "",
      role:     "Analytics Intern",
      period:   "June 2026 – Aug 2026",
      type:     "Data Science",
      bullets: [
        "Built database from thousands of metadata overages using regex based data processing, improving organization and usability of large datasets",
        "Analyzed spending and subscriber trends to develop forecasting model, identifying patterns to assist projections of future spending and usage",
        "Conducted data science study on token efficiency for MCP tool, using Python to analyze token usage and evaluate potential efficiency increase",
      ],
    },
    {
      id:       "exp-1",
      company:  "KMF Investments",
      location: "Denton, TX",
      role:     "Equity Research Intern",
      period:   "Apr 2025 – Sep 2025",
      type:     "Finance",
      bullets: [
        "Developed segment-level forecasts (HBM, DRAM, NAND, Embedded) and free cash flow projections through 2026 on Micron Technology",
        "Researched and analyzed companies across industries comparing metrics (P/E ratio, enterprise value, etc.) against Micron",
        "Centered thesis on (MU) growth around DRAM and HBM3E chip development — pitched at $69; stock grew to $165 within months",
      ],
    },
    {
      id:       "exp-2",
      company:  "Bohm Technologies",
      location: "Flower Mound, TX",
      role:     "Team Lead",
      period:   "May 2021 – Sep 2022",
      type:     "Operations",
      bullets: [
        "Led teams through warehouse operations including Amazon FBA and Apple product testing (iPad, AirPods, iPhone, Apple Watch)",
        "Tested, repaired, and packaged electric products (drones, go-karts, scooters); used Excel to track output and consistently hit 30+ units/night",
        "Utilized warehouse equipment to improve efficiency, organization, and workspace quality",
      ],
    },
  ],
 
  /* ── LEADERSHIP & EXTRACURRICULARS ──────────────────────────── */
  leadership: [
    {
      id:           "lead-1",
      organization: "Strategic Venture Society",
      location:     "New York, NY",
      role:         "The Venturist",
      period:       "Feb 2026 – Present",
      type:         "VC/Investing",
      bullets: [
        "Researched analytical pieces on venture capital trends, with a focus on cybersecurity, AI, and early-stage startups on club blog column",
        "Evaluated startup business models, market positioning, and competitive moats, particularly within the cybersecurity and enterprise SaaS sectors",
        "Participated in weekly meetings on emerging startups and investment theses, forming perspectives based on financial analysis and market research",
      ],
    },
    {
      id:           "lead-2",
      organization: "Business Analytics Club",
      location:     "New York, NY",
      role:         "Insight Team Lead",
      period:       "Feb 2026 – Present",
      type:         "Technology",
      bullets: [
        "Collaborated on a semester-long data analytics project analyzing the impact of tennis serve performance on match outcomes using large datasets",
        "Applied Python for data cleaning, analysis, and visualization to identify correlations between serve speed, first-serve percentage, and win probability",
        "Presented quantitative findings during weekly meets, translating analysis into clear strategic insights supported by data-driven conclusions",
      ],
    },
    {
      id:           "lead-3",
      organization: "Product Management Club",
      location:     "New York, NY",
      role:         "Product Team",
      period:       "Feb 2026 – Present",
      type:         "Product",
      bullets: [
        "Developed and pitched new feature (\"Hinge Plus One\") for Hinge, conducting user research, defining KPIs, and identifying pain points",
        "Presented product strategy and feature recommendations to industry professionals, articulating user pain points and measurable impact",
        "Led end-to-end product development: ideation, MVP scoping, stakeholder analysis, value-effort matrix, and A/B testing design",
      ],
    },
    {
      id:           "lead-4",
      organization: "Entrepreneurial Exchange Group",
      location:     "New York, NY",
      role:         "Investing Team Analyst & Community Lead",
      period:       "Oct 2025 – Present",
      type:         "VC/Investing",
      bullets: [
        "Participated in bi-weekly meetings focused on Venture Capital, startups, and tech; attended weekly general meetings",
        "Conducted due diligence analyzing business models, market size, competitive positioning, and revenue scalability of early-stage startups",
        "Pitched multiple early-stage startups to the full club with Figma slides and a Substack-published white paper",
      ],
    },
    {
      id:           "lead-5",
      organization: "North Texas Pickleball",
      location:     "Denton, TX",
      role:         "Founder & President",
      period:       "Dec 2023 – May 2025",
      type:         "Entrepreneurship",
      bullets: [
        "Founded and led club with weekly meets, tournaments, managed $500 budget, and grew membership to 150+",
        "Brought club to collegiate championship; designed merchandise generating $600 profit; featured in Denton Chronicle",
        "Recruited team, secured university approval, scheduled facilities, and organized competitive events and travel logistics",
      ],
    },
    {
      id:           "lead-6",
      organization: "Student Investment Group",
      location:     "Denton, TX",
      role:         "Junior Analyst",
      period:       "Sep 2023 – Dec 2023",
      type:         "Finance",
      bullets: [
        "Completed weekly assignments analyzing company balance sheets and examining industry metrics",
        "Led a 3-person team that linked financial statements and built a DCF model for Walmart, presented to club leadership",
        "Conducted equity research on multiple public companies analyzing financial statements, industry dynamics, and KPIs",
      ],
    },
  ],
 
  /* ── SKILLS ─────────────────────────────────────────────────── */
  skills: {
    "Finance & Analysis":  ["Financial Modeling", "Equity Research", "Valuation", "Due Diligence", "PitchBook", "Crunchbase"],
    "Technology":          ["Python", "NumPy", "Pandas", "Microsoft Excel", "Figma"],
    "Business":            ["Product Management", "Research & Analysis", "Stakeholder Analysis", "Microsoft Word"],
  },
 
  /* ── INTERESTS ──────────────────────────────────────────────── */
  interests: [
    "Chess", "Poker", "Tennis", "Pickleball", "Acting & Theatre",
    "Weightlifting", "Football", "Hiking", "Cooking & Baking", "Geography & History",
  ],
 
  /* ── PUBLISHED WORKS ─────────────────────────────────────────*/
  publishedWorks: [
    {
      id:          "work-1",
      title:       "Oasis Security: A Cyber Security Startup Dedicated to NHI Management",
      publication: "The Venturist — Substack",
      date:        "Dec 2025",
      type:        "Article",
      description: "An analysis of Non-Human Identity (NHI) management and agentic access in cybersecurity, using Oasis Security as a case study for how modern organizations handle machine identity risk.",
      url:         "https://mitchcahill.substack.com/p/oasis-security-a-cyber-security-startup",
    },
    {
      id:          "work-2",
      title:       "NHIs in Cybersecurity: Identity is the New Perimeter",
      publication: "Strategic Venture Society — Industry Report",
      date:        "May 2026",
      type:        "Article",
      description: "An industry report mapping the full cybersecurity identity stack — infrastructure, SaaS, access control, and behavioral monitoring — with investment thesis, market sizing, and exit landscape analysis.",
      url:         "https://substack.com/home/post/p-197911726",
    },
    {
      id:          "work-3",
      title:       "NHIs in Cybersecurity: Industry Pitch Presentation",
      publication: "Strategic Venture Society",
      date:        "May 2026",
      type:        "Presentation",
      description: "Slide deck companion to the NHI cybersecurity industry report, presented to the Strategic Venture Society. Covers the evolution of the cybersecurity market, fragmentation analysis, regulatory tailwinds, and a platform investment thesis.",
      url:         "SVS-Industry-Pitch-(3).pdf",
    },
    {
      id:          "work-4",
      title:       "Long Okta: A Contrarian Equity Research Report",
      publication: "Independent Research",
      date:        "Apr 2026",
      type:        "Research",
      description: "A long thesis on Okta (OKTA) at $64.09, arguing the market has mispriced the stock following a sector-wide AI panic selloff. Builds a three-case model (bear $76, base $111, bull $146) centered on Okta's April 30 AI agent product launch and machine identity opportunity.",
      url:         "Long-Okta-Updated-(1).pdf",
    },
    {
      id:          "work-5",
      title:       "Okta Investment Dashboard",
      publication: "Independent Research",
      date:        "Apr 2026",
      type:        "Presentation",
      description: "An interactive financial dashboard built to visualize the Okta long thesis — including valuation scenarios, peer comparables, NRR trends, and free cash flow analysis.",
      url:         "OKTA-Investment-Dashboard(17).html",
    },
    {
      id:          "work-6",
      title:       "Openlayer: The Control Plane for Enterprise AI",
      publication: "NYU Stern VC Pitch Competition",
      date:        "Apr 2026",
      type:        "Pitch",
      description: "VC pitch on Openlayer (YC S21, $19.4M raised), arguing it is the only unified platform for AI evaluation, observability, and governance. Presented at the NYU Stern VC Pitch Competition with a buy recommendation at sub-$100M implied valuation.",
      url:         "Openlayer_Pitch.pdf",
    },
    {
      id:          "work-7",
      title:       "Salesforce AI Features: PMC Case Competition Pitch",
      publication: "NYU Product Management Club",
      date:        "Apr 2026",
      type:        "Pitch",
      description: "Product pitch proposing new AI-powered features for Salesforce, developed and presented as part of the NYU Product Management Club case competition.",
      url:         "https://ledry.lovable.app/",
    },
    {
      id:          "work-8",
      title:       "Analyzing Tennis Serve Importance",
      publication: "NYU Business Analytics Club",
      date:        "May 2026",
      type:        "Presentation",
      description: "Data-driven analysis of 216,000+ US Open data points (2013–2023) using Python, Random Forest, and multivariate regression to determine how serve speed and serve metrics predict match outcomes. Random Forest model achieved 70.3% accuracy.",
      url:         "Team-Pitch(2).pdf",
    },
    {
      id:          "work-9",
      title:       "Hinge Plus One: New Feature Pitch",
      publication: "NYU Product Management Club",
      date:        "May 2026",
      type:        "Pitch",
      description: "End-to-end product pitch proposing 'Hinge Plus One,' a new feature for Hinge designed to reduce first-date anxiety by enabling users to bring a friend. Includes user research, KPI definition, pain point analysis, MVP scoping, and A/B testing design. Presented to industry professionals.",
      url:         "Mitch-(Hinge)-PMC-Final-(1).pdf",
    },
    {
      id:          "work-11",
      title:       "IG Follower Tracker",
      publication: "Personal Project — CS50P Final Project",
      date:        "Built Dec 2025 (uploaded Aug 2026)",
      type:        "Project",
      description: "A Python command-line tool that compares your Instagram followers and following lists (from your own exported data) to identify accounts that don't follow you back, outputting a summary and detailed CSV report. Built as the final project for Harvard's CS50P in December 2025; only recently uploaded to GitHub.",
      url:         "https://github.com/mitch-cahill04/IG-Follower-Tracker",
    },
    {
      id:          "work-10",
      title:       "Church Chase",
      publication: "Roblox",
      date:        "Mar 2026",
      type:        "Project",
      description: "Independently designed and published a multiplayer chase game on Roblox, inspired by the Temple Run format. Built from scratch including game mechanics, level design, and player experience.",
      url:         "https://www.roblox.com/share?code=0dbb93a8b2072b41a5c45d882d129f9b&type=ExperienceDetails&stamp=1778878353723",
    },
  ],
 
};