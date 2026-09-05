// Federal contracting credentials for DRKS Alignment LLC.
//
// COMPLIANCE — read before editing. Every value in this file is a [VERIFY]
// placeholder rendered in muted italic on the site. These fields tell a
// federal buyer how DRKS is registered, what set-asides it holds and what it
// can be awarded work under. Publishing an unverified value — or, worse, a
// value copied from another contractor's public site — misrepresents DRKS's
// eligibility. Populate each field only from DRKS's own SAM.gov registration,
// certification letters and award documents, confirmed by the team.
//
// See also the Compliance note in CLAUDE.md.

// SAM.gov registration identifiers.
export const governmentData = {
  uei: "[VERIFY — UEI from SAM.gov registration]",
  cage: "[VERIFY — CAGE code]",
  samRegistration: "[VERIFY — SAM.gov registration status and expiry]",
  dunsLegacy: "[VERIFY — legacy DUNS, if still referenced]",
};

// Organizational qualifications and quality designations.
export const qualifications = {
  designation: "[VERIFY — small business designation]",
  cmmiLevel: "[VERIFY — CMMI maturity level]",
  iso: [
    "[VERIFY — ISO 9001 Quality Management certification]",
    "[VERIFY — ISO/IEC 27001 Information Security certification]",
    "[VERIFY — ISO/IEC 20000-1 IT Service Management certification]",
  ],
};

// Socio-economic set-asides and certifications, each with the issuing body and
// the date it must be re-verified.
export const certifications = [
  { name: "[VERIFY — set-aside certification]", issuer: "[VERIFY — issuing body]", validThrough: "[VERIFY]" },
  { name: "[VERIFY — state or local certification]", issuer: "[VERIFY — issuing body]", validThrough: "[VERIFY]" },
];

// NAICS codes DRKS is registered under.
//
// Candidates worth checking against DRKS's actual SAM.gov registration, given
// the five service lines in src/data/services.js — do NOT publish any of them
// until the team confirms the registration carries them:
//   541511 / 541512 / 541519  custom programming, systems design, other IT
//   541611 / 541618           management and other management consulting
//   541613                    marketing consulting services
//   541810 / 541820           advertising agencies, public relations
//   541910                    marketing research and public opinion polling
//   541720                    research in the social sciences and humanities
//   611430                    professional and management development training
//   561320 / 561422           temporary help, telephone call centers
export const naicsCodes = [
  { code: "[VERIFY]", title: "[VERIFY — primary NAICS code and title]", primary: true },
  { code: "[VERIFY]", title: "[VERIFY — additional NAICS code and title]" },
  { code: "[VERIFY]", title: "[VERIFY — additional NAICS code and title]" },
];

// Contract vehicles, grouped the way a contracting officer scans them.
// Each vehicle: name, contract number, awarding agency, scope, period of
// performance. Publish a row only once the award document confirms it.
export const vehicleGroups = [
  {
    id: "prime",
    title: "Prime IDIQ vehicles",
    blurb:
      "Multiple-award and single-award IDIQs on which DRKS holds the prime position.",
    vehicles: [
      {
        id: "prime-one",
        name: "[VERIFY — vehicle name]",
        number: "[VERIFY — contract number]",
        agency: "[VERIFY — awarding agency]",
        scope: "[VERIFY — scope of the vehicle]",
        period: "[VERIFY — period of performance]",
      },
    ],
  },
  {
    id: "subcontract",
    title: "Subcontract vehicles",
    blurb:
      "Vehicles DRKS delivers under as a subcontractor or teaming partner.",
    vehicles: [
      {
        id: "sub-one",
        name: "[VERIFY — vehicle name]",
        number: "[VERIFY — contract number]",
        agency: "[VERIFY — prime contractor and end agency]",
        scope: "[VERIFY — scope of the work DRKS performs]",
        period: "[VERIFY — period of performance]",
      },
    ],
  },
  {
    id: "schedules",
    title: "GSA schedules",
    blurb:
      "Federal Supply Schedule contracts and the Special Item Numbers they cover.",
    vehicles: [
      {
        id: "schedule-one",
        name: "[VERIFY — schedule and SIN]",
        number: "[VERIFY — GSA contract number]",
        agency: "General Services Administration",
        scope: "[VERIFY — services covered by the SIN]",
        period: "[VERIFY — period of performance]",
      },
    ],
  },
];

// Past performance. Distinct from the narrative case studies in
// src/data/impact.js — this is the contract-level record a buyer checks.
export const pastPerformance = [
  {
    id: "past-one",
    contract: "[VERIFY — contract or task order name]",
    number: "[VERIFY — contract number]",
    agency: "[VERIFY — customer agency]",
    role: "[VERIFY — prime or subcontractor]",
    value: "[VERIFY — contract value]",
    period: "[VERIFY — period of performance]",
    scope: "[VERIFY — what DRKS delivered]",
  },
  {
    id: "past-two",
    contract: "[VERIFY — contract or task order name]",
    number: "[VERIFY — contract number]",
    agency: "[VERIFY — customer agency]",
    role: "[VERIFY — prime or subcontractor]",
    value: "[VERIFY — contract value]",
    period: "[VERIFY — period of performance]",
    scope: "[VERIFY — what DRKS delivered]",
  },
];

// Named clients. Shape: { name, sector, relationship, since }.
// A client is listed only where the relationship is verified AND the client
// has consented to be named — consent is separate from verification.
export const clients = [];

// Teaming partners, subcontractors and mentor-protégé relationships.
// Shape: { name, type, focus }. Same consent rule as clients.
export const partners = [];

export const getVehicleGroup = (id) =>
  vehicleGroups.find((group) => group.id === id);
