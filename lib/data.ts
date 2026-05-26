export const SITE_META = {
  name: "Mariela Bedrova",
  tagline: "Builder of Practical AI",
  lede: "Turning rough ideas into working products — fast — using AI, automation, and a deep allergy to unnecessary complexity. Simple, useful, and aimed at the real business problem underneath.",
  location: "Plovdiv, Bulgaria · 42.14°N",
  email: "mariela@bedrova.ai",
  social: {
    linkedin: "https://linkedin.com/in/marielabedrova",
    twitter: "https://twitter.com/marielabedrova",
    github: "https://github.com/marielabedrova",
    readcv: "https://read.cv/marielabedrova",
  },
};

export const MANIFESTO_PRINCIPLES = [
  { num: "01.", lines: ["Ship the thing.", "Then improve it."] },
  { num: "02.", lines: ["Tools are scaffolding.", "Outcomes are the building."] },
  { num: "03.", lines: ["Pretty code can't", "save a wrong idea."] },
  { num: "04.", lines: ["Make it useful", "before you make it clever."] },
];

export const CAPABILITIES = [
  {
    idx: "/ 01",
    title: "AI Assistants & Chatbots",
    desc: "Domain-trained agents that handle the first ninety percent of conversation, so your team can do the last ten with full context.",
    tags: ["GPT", "RAG", "Voice"],
    glyph: `<svg viewBox="0 0 44 44" fill="none" stroke="currentColor" stroke-width="1.2"><circle cx="22" cy="22" r="18"/><path d="M14 18c2 3 5 5 8 5s6-2 8-5"/><circle cx="16" cy="16" r="1.5" fill="currentColor"/><circle cx="28" cy="16" r="1.5" fill="currentColor"/></svg>`,
  },
  {
    idx: "/ 02",
    title: "Workflow Automation",
    desc: "The repeatable, boring, error-prone parts of your day — sent quietly into the background where they belong.",
    tags: ["n8n", "Make", "Zapier"],
    glyph: `<svg viewBox="0 0 44 44" fill="none" stroke="currentColor" stroke-width="1.2"><rect x="6" y="6" width="12" height="12" rx="2"/><rect x="26" y="6" width="12" height="12" rx="2"/><rect x="6" y="26" width="12" height="12" rx="2"/><rect x="26" y="26" width="12" height="12" rx="2"/><path d="M18 12h8M12 18v8M26 32h-8M32 26v-8"/></svg>`,
  },
  {
    idx: "/ 03",
    title: "AI Customer Support",
    desc: "Triage, routing, drafting, summarising. Tickets answered at the speed your customers actually feel.",
    tags: ["Tier-1", "Escalation", "24/7"],
    glyph: `<svg viewBox="0 0 44 44" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M8 30c4-8 8-8 12 0s8 8 12 0M8 14c4-8 8-8 12 0s8 8 12 0"/><path d="M6 38h32"/></svg>`,
  },
  {
    idx: "/ 04",
    title: "Content Generation",
    desc: "Tone-trained pipelines for posts, emails, briefs, and ads — sounding like your brand, not a model.",
    tags: ["Long-form", "Social", "SEO"],
    glyph: `<svg viewBox="0 0 44 44" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M10 8h18l6 6v22a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2z"/><path d="M28 8v6h6M14 22h16M14 28h16M14 16h8"/></svg>`,
  },
  {
    idx: "/ 05",
    title: "Lead Generation Systems",
    desc: "Enrichment, scoring, and outreach that runs while you sleep — and stops the moment a lead becomes a person.",
    tags: ["Scraping", "CRM-sync", "Outreach"],
    glyph: `<svg viewBox="0 0 44 44" fill="none" stroke="currentColor" stroke-width="1.2"><circle cx="22" cy="18" r="10"/><path d="M22 28v8M14 36h16"/><path d="M18 16l3 4 5-6"/></svg>`,
  },
  {
    idx: "/ 06",
    title: "Travel & Booking Automation",
    desc: "Discovery → quote → confirmation, threaded through email, chat, and calendar without anyone copy-pasting.",
    tags: ["Itineraries", "Reservations"],
    glyph: `<svg viewBox="0 0 44 44" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M22 6l-14 8v12l14 8 14-8V14z"/><path d="M8 14l14 8 14-8M22 22v16"/></svg>`,
  },
  {
    idx: "/ 07",
    title: "AI Productivity Tools",
    desc: "Internal copilots: meeting summaries, doc search, weekly reviews. The boring miracles that compound.",
    tags: ["Internal", "Search", "Drafting"],
    glyph: `<svg viewBox="0 0 44 44" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M22 4v6M22 34v6M4 22h6M34 22h6M9 9l4 4M31 31l4 4M9 35l4-4M31 13l4-4"/><circle cx="22" cy="22" r="6"/></svg>`,
  },
  {
    idx: "/ 08",
    title: "Rapid MVP Development",
    desc: "Two-week sprints from sketch to shipped. A working thing in your customer's hands beats a brilliant deck every time.",
    tags: ["2-wk sprint", "Vibe-coded"],
    glyph: `<svg viewBox="0 0 44 44" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M6 22c4-12 28-12 32 0"/><path d="M14 22a8 8 0 1 0 16 0"/><path d="M18 36l4-8 4 8"/></svg>`,
  },
];

export const WORK_CARDS = [
  {
    chip: "AI Assistant",
    year: "2026",
    title: "Concierge.ai",
    sub: "Hospitality · Bookings · 24/7 reception",
  },
  {
    chip: "Automation",
    year: "2026",
    title: "LeadLoop OS",
    sub: "B2B · Outreach pipeline · 9-step graph",
  },
  {
    chip: "MVP · 14 days",
    year: "2025",
    title: "Brandstack",
    sub: "Content engine · Creators · 14-day MVP",
  },
  {
    chip: "Support",
    year: "2025",
    title: "Helpline",
    sub: "DTC · Tier-1 support · 78% deflection",
  },
  {
    chip: "Internal Tool",
    year: "2025",
    title: "Recall",
    sub: "Knowledge copilot · ⌘K for ops",
  },
  {
    chip: "Travel",
    year: "2025",
    title: "Wayfare",
    sub: "Travel · Itinerary & booking agent",
  },
];

export const SIGNAL_NUMBERS = [
  {
    idx: "/ 01",
    label: "Sprint",
    value: 14,
    unit: "days",
    decimals: 0,
    desc: "Average idea-to-MVP, end-to-end, in production.",
  },
  {
    idx: "/ 02",
    label: "Reach",
    value: 78,
    unit: "%",
    decimals: 0,
    desc: "Median tier-1 support deflection on the assistants I ship.",
  },
  {
    idx: "/ 03",
    label: "Stack",
    value: 8,
    unit: "verticals",
    decimals: 0,
    desc: "Practice areas — assistants, automation, content, leads, support, travel, productivity, MVPs.",
  },
  {
    idx: "/ 04",
    label: "Reply",
    value: 24,
    unit: "hrs",
    decimals: 0,
    desc: "First reply on a new project enquiry — usually much sooner.",
  },
];

export const METHOD_STEPS = [
  {
    no: "/ 01",
    title: "Listen for the real problem.",
    body: "A 45-minute call. No deck, no diagrams. We figure out what's actually slow, what's actually missing, and what success looks like in terms a customer could feel.",
    time: "Day 0 · 45 minutes",
  },
  {
    no: "/ 02",
    title: "Map the smallest useful version.",
    body: "One page. Inputs, outputs, the three or four moves that matter. Everything else gets a polite “not yet.” This is where we kill the wrong ideas cheaply.",
    time: "Days 1–2 · scope & constraints",
  },
  {
    no: "/ 03",
    title: "Build it. Fast, in the open.",
    body: "Vibe-coded sprints with a working URL by the end of day three. You see it growing — not a Gantt chart of it growing.",
    time: "Days 3–10 · daily progress",
  },
  {
    no: "/ 04",
    title: "Put it in real hands.",
    body: "A handful of actual customers, watched closely. The honest feedback always shows up in the first three sessions. We listen and adjust.",
    time: "Days 11–12 · live testing",
  },
  {
    no: "/ 05",
    title: "Ship, measure, decide.",
    body: "Launch to production. Watch the numbers for a week. Three doors: double down, pivot the angle, or quietly retire it. All three are wins.",
    time: "Days 13–14 · launch & learn",
  },
];

export const TESTIMONIALS = [
  {
    name: "Sofia Ramirez",
    initials: "SR",
    role: "CEO, Luminary Health",
    stars: 5,
    highlight: "Shipped in 9 days",
    quote: "Mariela took a vague idea and turned it into a working product in under two weeks. She asked the right questions and built exactly what we needed — not more, not less.",
  },
  {
    name: "Andrei Popescu",
    initials: "AP",
    role: "Founder, Fieldwork CRM",
    stars: 5,
    highlight: "Cut ops time by 60%",
    quote: "We'd been stuck on the same bottleneck for months. One call with Mariela and we had a plan. One sprint later, the problem was gone. I genuinely didn't think it was possible that fast.",
  },
  {
    name: "Leah Thornton",
    initials: "LT",
    role: "Head of Product, Stackform",
    stars: 5,
    highlight: "Zero scope creep",
    quote: "Every consultant I've hired has over-promised and under-delivered. Mariela was the opposite — she kept things tight, communicated clearly, and shipped on time. Will work with her again.",
  },
];

export const PROCESS_STEPS = [
  {
    number: "01",
    iconName: "Search",
    title: "Discover",
    description: "A focused call to find what's actually slow, missing, or broken — and what success looks like in terms a customer could feel.",
  },
  {
    number: "02",
    iconName: "Map",
    title: "Define",
    description: "One-page scope. The three or four moves that matter. Everything else gets a polite 'not yet.' We kill wrong ideas cheaply here.",
  },
  {
    number: "03",
    iconName: "Rocket",
    title: "Build",
    description: "Vibe-coded sprints with a working URL by day three. You see it growing — not a Gantt chart of it growing.",
  },
  {
    number: "04",
    iconName: "TrendingUp",
    title: "Launch",
    description: "Ship to real customers, watch the numbers, and decide: double down, pivot, or retire it. All three outcomes are wins.",
  },
];

export const AI_TOOLS = [
  { name: "Claude" },
  { name: "ChatGPT" },
  { name: "Gemini" },
  { name: "Cursor" },
  { name: "Midjourney" },
  { name: "Runway" },
  { name: "ElevenLabs" },
  { name: "Perplexity" },
  { name: "Replit" },
  { name: "v0" },
  { name: "Lovable" },
  { name: "Vercel" },
  { name: "Supabase" },
  { name: "Notion AI" },
];
