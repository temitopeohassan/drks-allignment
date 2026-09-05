// Case studies. Client names, quantitative results and metrics are published
// only once verified and, where required, cleared by the client — see the
// Compliance note in CLAUDE.md. Do not populate this file with another
// organization's past performance.
export const caseStudies = [
  {
    slug: "case-study-one",
    title: "[CASE STUDY TITLE]",
    client: "[CLIENT NAME — VERIFY]",
    serviceSlug: "strategic-communications",
    challenge: "[VERIFY — the problem the client brought to us]",
    solution: "[VERIFY — what DRKS designed and delivered]",
    impact: "[VERIFY — the outcome, once confirmed]",
    metrics: [{ label: "[METRIC]", value: "[VERIFY]" }],
  },
  {
    slug: "case-study-two",
    title: "[CASE STUDY TITLE]",
    client: "[CLIENT NAME — VERIFY]",
    serviceSlug: "digital-technology",
    challenge: "[VERIFY — the problem the client brought to us]",
    solution: "[VERIFY — what DRKS designed and delivered]",
    impact: "[VERIFY — the outcome, once confirmed]",
    metrics: [{ label: "[METRIC]", value: "[VERIFY]" }],
  },
  {
    slug: "case-study-three",
    title: "[CASE STUDY TITLE]",
    client: "[CLIENT NAME — VERIFY]",
    serviceSlug: "research-and-evaluation",
    challenge: "[VERIFY — the problem the client brought to us]",
    solution: "[VERIFY — what DRKS designed and delivered]",
    impact: "[VERIFY — the outcome, once confirmed]",
    metrics: [{ label: "[METRIC]", value: "[VERIFY]" }],
  },
];

export const getCaseStudy = (slug) =>
  caseStudies.find((item) => item.slug === slug);
