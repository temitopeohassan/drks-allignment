export const company = {
  legalName: "DRKS Alignment LLC",
  tagline: "Strategy. Alignment. Results.",
  coreIdea: "Knowledge improves lives.",
  founded: "[YEAR]",
  headquarters: "[CITY, STATE]",
  serviceArea: "[SERVICE AREA]",
  address: "[ADDRESS]",
  email: "info@drks-allignment-llc.com",
  phone: "[PHONE NUMBER]",
  positioning:
    "A health-focused communications, technology, research, training and technical-assistance partner that turns evidence-based information into clear, engaging, accessible experiences.",
  mission:
    "Make it easier for people to find, understand and use information that leads to better health.",
  vision:
    "Deliver impactful solutions that promote quality of life by making evidence-based information clear, engaging and useful for everyone.",
};

export const brandPrinciples = [
  "Evidence-based",
  "Human-centered",
  "Accessible",
  "Empathetic",
  "Technology-enabled",
  "Outcome-focused",
  "Community-minded",
];

export const socialLinks = [
  { label: "Facebook", url: "[FACEBOOK URL]", icon: "facebook" },
  { label: "LinkedIn", url: "[LINKEDIN URL]", icon: "linkedin" },
];

// Federal contracting credentials — registration identifiers, qualifications,
// certifications, NAICS codes, contract vehicles, past performance, clients and
// partners — live in src/data/credentials.js, which carries the compliance
// rules that govern them.

export const navigation = [
  { label: "Home", path: "/" },
  {
    label: "What We Do",
    path: "/what-we-do",
    children: [
      { label: "Strategic Communications", path: "/what-we-do/strategic-communications" },
      { label: "Digital Technology", path: "/what-we-do/digital-technology" },
      { label: "Technical Assistance", path: "/what-we-do/technical-assistance" },
      { label: "Training", path: "/what-we-do/training" },
      { label: "Research and Evaluation", path: "/what-we-do/research-and-evaluation" },
    ],
  },
  {
    label: "Who We Are",
    path: "/who-we-are",
    children: [
      { label: "Leadership", path: "/who-we-are/leadership" },
      { label: "Clients & Partners", path: "/who-we-are/clients-and-partners" },
      { label: "Contract Vehicles", path: "/who-we-are/contract-vehicles" },
      { label: "Community", path: "/who-we-are/community" },
    ],
  },
  { label: "Our Impact", path: "/our-impact" },
  { label: "Join Our Team", path: "/join-our-team" },
];

export const quickLinks = [
  { label: "Home", path: "/" },
  { label: "What We Do", path: "/what-we-do" },
  { label: "Who We Are", path: "/who-we-are" },
  { label: "Our Impact", path: "/our-impact" },
  { label: "Join Our Team", path: "/join-our-team" },
  { label: "Contact", path: "/contact" },
];

export const additionalLinks = [
  { label: "Leadership", path: "/who-we-are/leadership" },
  { label: "Clients & Partners", path: "/who-we-are/clients-and-partners" },
  { label: "Contract Vehicles", path: "/who-we-are/contract-vehicles" },
  { label: "Community", path: "/who-we-are/community" },
  { label: "Strategic Communications", path: "/what-we-do/strategic-communications" },
  { label: "Digital Technology", path: "/what-we-do/digital-technology" },
  { label: "Terms of Service", path: "/terms-service" },
];

// Primary audiences this site is written for, and what each one needs from us.
export const audiences = [
  {
    id: "federal_health_agencies",
    name: "Federal Health Agencies",
    needs: [
      "Public health communications",
      "Digital transformation",
      "Information dissemination",
      "Technical assistance",
      "Research and evaluation",
    ],
    cta: "Discuss a Requirement",
    ctaPath: "/contact",
  },
  {
    id: "government_program_leaders",
    name: "Government Program Leaders",
    needs: [
      "Mission delivery",
      "Stakeholder engagement",
      "Technology modernization",
      "Measurable outcomes",
      "Compliance",
    ],
    cta: "Explore What We Do",
    ctaPath: "/what-we-do",
  },
  {
    id: "healthcare_public_health",
    name: "Healthcare & Public Health Organizations",
    needs: [
      "Health education",
      "Behavior change",
      "Audience engagement",
      "Digital content",
      "Multilingual outreach",
    ],
    cta: "Explore What We Do",
    ctaPath: "/what-we-do",
  },
  {
    id: "nonprofits_foundations",
    name: "Nonprofits & Foundations",
    needs: [
      "Campaign strategy",
      "Community engagement",
      "Capacity building",
      "Research",
      "Digital experiences",
    ],
    cta: "See Our Impact",
    ctaPath: "/our-impact",
  },
  {
    id: "science_research",
    name: "Science & Research Organizations",
    needs: [
      "Science communications",
      "Information centers",
      "Knowledge translation",
      "Audience research",
      "Digital dissemination",
    ],
    cta: "Explore What We Do",
    ctaPath: "/what-we-do",
  },
  {
    id: "job_candidates",
    name: "Job Candidates",
    needs: [
      "Mission-driven work",
      "Career growth",
      "Flexible work",
      "Well-being",
      "Collaborative culture",
    ],
    cta: "Join Our Team",
    ctaPath: "/join-our-team",
  },
];

// Homepage statistics. Placeholder until DRKS's own figures are verified —
// do not populate with another organization's numbers.
export const homepageStats = [
  { value: "[STAT]", label: "Average years with company" },
  { value: "[STAT]", label: "Health challenges completed" },
];

export const culture = {
  positioning:
    "Mission-driven, collaborative, innovative, flexible and focused on improving lives.",
  workModel: [
    "Flexible scheduling",
    "Virtual and in-person collaboration",
    "A national network of experts",
  ],
  wellbeing: [
    "Health challenges",
    "Virtual yoga and meditation",
    "Community charitable activities",
  ],
};

// Community giving. Specific partner organizations are named only once
// verified and confirmed by DRKS — see the Compliance note in CLAUDE.md.
export const community = {
  description:
    "DRKS integrates employee health challenges with charitable activities to create positive impact for team members and the communities we serve.",
  organizations: [], // ["VERIFY — named nonprofit partner"]
};

// Community initiatives. The title and description describe how a programme
// works and can be published as written; `detail` holds the specifics —
// partner names, totals, dates — that must be verified first.
export const communityInitiatives = [
  {
    title: "Health challenges",
    description:
      "Team-wide challenges that pair a personal health goal with a contribution to a community organization.",
    detail: "[VERIFY — challenges run to date and what they supported]",
  },
  {
    title: "Charitable giving",
    description:
      "Company and employee giving directed to organizations working on the health issues our projects touch.",
    detail: "[VERIFY — recipient organizations and giving totals]",
  },
  {
    title: "Volunteering",
    description:
      "Staff time contributed to local and national organizations, including pro bono communications support.",
    detail: "[VERIFY — volunteer hours and participating organizations]",
  },
];

export const contentVoice = {
  tone: [
    "Authoritative",
    "Human",
    "Empathetic",
    "Evidence-based",
    "Clear",
    "Optimistic",
    "Mission-driven",
  ],
  writingRules: [
    "Prefer plain language over jargon.",
    "Connect technology and research to human outcomes.",
    "Lead with audience needs and measurable impact.",
    "Use credible, evidence-based language.",
    "Emphasize accessibility and inclusivity.",
    "Use concise, benefit-oriented headlines.",
    "Support claims with concrete metrics only once verified.",
  ],
};
