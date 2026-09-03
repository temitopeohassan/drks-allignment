export const capabilities = [
  {
    slug: "strategic-consulting",
    name: "Strategic Consulting",
    headline: "Turn Complexity Into Strategic Clarity.",
    description:
      "Help leaders define priorities, evaluate challenges and create practical strategies that can be translated into action.",
    services: [
      "Strategic planning",
      "Organizational assessments",
      "Business and operational strategy",
      "Strategic roadmaps",
      "Performance planning",
    ],
    detail:
      "Most organizations do not lack ideas. They lack an agreed answer to what matters most, in what order and at what cost. We work with leadership teams to assess the current position, weigh trade-offs honestly and set a direction that the organization can actually carry out.",
    approach: [
      "Understand the operating environment, constraints and leadership intent.",
      "Assess where current activity supports the direction and where it does not.",
      "Set priorities, sequencing and the measures that define progress.",
      "Document a roadmap the organization can hand to the people delivering it.",
    ],
  },
  {
    slug: "organizational-alignment",
    name: "Organizational Alignment",
    headline: "Bring People, Priorities and Processes Into Alignment.",
    description:
      "Connect leadership priorities with people, processes, resources and execution.",
    services: [
      "Organizational alignment",
      "Change-management support",
      "Workflow alignment",
      "Performance frameworks",
      "Cross-functional coordination",
    ],
    detail:
      "Strategy stalls in the space between the leadership team and the people delivering the work. We find those disconnects, name them plainly and rebuild the links between priorities, roles, workflows and measures.",
    approach: [
      "Map how priorities travel from leadership through to daily work.",
      "Identify where ownership, handoffs or incentives break down.",
      "Rebuild workflows and performance measures around the agreed direction.",
      "Support teams through the change so new ways of working hold.",
    ],
  },
  {
    slug: "professional-administrative-support",
    name: "Professional & Administrative Support",
    headline: "Extend Organizational Capacity.",
    description:
      "Provide structured professional and administrative support that improves organizational capacity.",
    services: [
      "Administrative support",
      "Business operations support",
      "Documentation",
      "Research and analysis",
      "Process coordination",
    ],
    detail:
      "Capable teams are often held back by work that has no owner: documentation, coordination, research, follow-through. We provide structured support that absorbs that load so internal staff can stay on the work only they can do.",
    approach: [
      "Define the scope, service standards and reporting cadence.",
      "Stand up the documentation and coordination the work depends on.",
      "Deliver against agreed timelines with clear points of contact.",
      "Hand back clean records and repeatable processes.",
    ],
  },
  {
    slug: "program-project-management",
    name: "Program & Project Management",
    headline: "Move Initiatives From Plan to Execution.",
    description:
      "Support planning, coordination, implementation, monitoring and reporting.",
    services: [
      "Program coordination",
      "Project planning",
      "Implementation support",
      "Progress monitoring",
      "Reporting",
    ],
    detail:
      "An initiative needs someone accountable for the schedule, the dependencies and the reporting. We provide that discipline, whether the work is a single project or a portfolio of related efforts.",
    approach: [
      "Build the plan: scope, milestones, dependencies and risks.",
      "Coordinate the teams, vendors and stakeholders involved.",
      "Track progress against milestones and surface issues early.",
      "Report in a form leadership and oversight bodies can use.",
    ],
  },
  {
    slug: "operations-improvement",
    name: "Operations Improvement",
    headline: "Make the Organization Work Better.",
    description:
      "Identify operational friction, strengthen processes and improve execution.",
    services: [
      "Process assessment",
      "Workflow improvement",
      "Operational efficiency",
      "Performance measurement",
      "Continuous improvement",
    ],
    detail:
      "Friction accumulates quietly: duplicated approvals, unclear handoffs, manual work that outlived its reason. We assess how work actually moves, then rebuild the steps that cost the most time and cause the most rework.",
    approach: [
      "Document the process as it runs today, not as it is written down.",
      "Quantify where time, cost and rework concentrate.",
      "Redesign the workflow and agree the measures that prove it improved.",
      "Establish a review rhythm so gains hold after we leave.",
    ],
  },
  {
    slug: "training-development",
    name: "Professional Development & Training",
    headline: "Build Capability That Lasts.",
    description:
      "Strengthen workforce capabilities through practical training, professional development and knowledge transfer.",
    services: [
      "Leadership development",
      "Professional training",
      "Workforce development",
      "Team effectiveness",
      "Knowledge transfer",
    ],
    detail:
      "Capability that depends on outside help is not capability. We build training around the organization's real work so teams can carry the practices forward without us.",
    approach: [
      "Identify the capability gaps that limit delivery today.",
      "Design training around the organization's own scenarios and tools.",
      "Deliver sessions to teams and leaders at the right level.",
      "Transfer materials, guides and facilitation notes to internal owners.",
    ],
  },
];

export const getCapability = (slug) =>
  capabilities.find((item) => item.slug === slug);
