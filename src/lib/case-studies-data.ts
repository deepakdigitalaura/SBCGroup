export type CaseStudy = {
  slug: string;
  name: string;
  sector: string;
  location: string;
  methodology: string;
  challenge: string;
  challengeFull: string;
  approach: string;
  approachFull: string;
  stats: { value: string; label: string }[];
  bullets?: string[];
  badge: string;
  facts?: { label: string; value: string }[];
  quote?: string;
  quoteAttribution?: string;
};

export type CaseStudyGroup = {
  key: "msme" | "institution" | "feasibility";
  heading: string;
  label: string;
  headingLine1: string;
  headingLine2: string;
  sectorShort: string;
  sidebarLabel: string;
  studies: CaseStudy[];
};

export const groups: CaseStudyGroup[] = [
  {
    key: "msme",
    heading: "MSME Consulting",
    label: "MSME Consulting",
    headingLine1: "Business",
    headingLine2: "Transformations",
    sectorShort: "Manufacturing",
    sidebarLabel: "Results",
    studies: [
      {
        slug: "rubber-plastics-manufacturer",
        name: "Rubber & Plastics Manufacturer",
        sector: "Rubber & Plastics Manufacturing",
        location: "Gujarat",
        methodology: "GAP360™ Full Cycle · 90 Days",
        challenge:
          "A recurring pattern of material wastage had been silently compounding for months, alongside delivery delays frequent enough to put customer relationships at risk.",
        challengeFull:
          "A recurring pattern of material wastage had been silently compounding for months. Simultaneously, delivery delays were becoming frequent enough to put customer relationships at risk. The breaking point came when the founder recognised that despite a capable team, no one was taking ownership of either problem. Floor-level accountability was functionally absent — every escalation landed back on the founder.",
        approach:
          "SBC deployed the GAP360™ framework across the full operational cycle, mapping root causes and building floor-level accountability over 90 days.",
        approachFull:
          "SBC deployed the GAP360™ framework across the full operational cycle — diagnosing gaps in people, process, systems, and accountability structures as part of our MSME Consulting practice. Root causes behind both the delivery failures and wastage were mapped and addressed through a floor-level accountability system, daily reporting structures, production SOPs, and shift-wise KPIs. Implementation was hands-on over 90 days.",
        stats: [
          { value: "61%→84%", label: "On-Time Delivery" },
          { value: "18%↓", label: "Material Wastage" },
          { value: "₹15L+", label: "Annual Cost Saving" },
          { value: "90 Days", label: "Full Implementation" },
        ],
        facts: [
          { label: "Sector", value: "Rubber & Plastics Manufacturing" },
          { label: "Scale", value: "50–60 Employees · ₹40 Cr Turnover" },
          { label: "Location", value: "Gujarat" },
          { label: "Engagement", value: "GAP360™ Full Cycle · 90 Days" },
        ],
        quote:
          "We had the team. We just did not have the structure. Once accountability was clear at every shift level, the numbers moved on their own.",
        quoteAttribution: "Founder, Rubber & Plastics Manufacturer, Gujarat",
        badge: "GAP360™ Full Cycle · 90 Days",
      },
      {
        slug: "industrial-components-manufacturer",
        name: "Industrial Components Manufacturer",
        sector: "Industrial Components Manufacturing",
        location: "Gujarat",
        methodology: "GAP360™ Systems & Accountability · 60 Days",
        challenge:
          "The founder was the de facto decision-maker for every operational matter, with no reporting structure or inter-departmental accountability.",
        challengeFull:
          "The founder was the de facto decision-maker for every operational matter — vendor calls, approvals, escalations, even minor hiring decisions. Walk-ins to his office had become a daily drain. There was no reporting structure, no inter-departmental accountability, and no layer between the founder and the shop floor. He had not taken an uninterrupted day off in years.",
        approach:
          "SBC designed a 3-tier reporting structure with defined KRAs/KPIs and weekly review cadences over 60 days.",
        approachFull:
          "SBC designed a 3-tier reporting structure, defined KRAs and KPIs for every role, built departmental accountability frameworks, and implemented weekly review cadences. The founder was systematically removed from day-to-day decisions over 60 days — not by removing authority from the team, but by giving the team the structure to carry it.",
        stats: [
          { value: "12 hrs/wk", label: "Founder Time Freed" },
          { value: "3-Tier", label: "Reporting Structure Built" },
          { value: "60 Days", label: "Accountability System Live" },
        ],
        facts: [
          { label: "Sector", value: "Industrial Components Manufacturing" },
          { label: "Scale", value: "40 Employees · ₹20 Cr Turnover" },
          { label: "Location", value: "Gujarat" },
          { label: "Engagement", value: "GAP360™ Systems & Accountability · 60 Days" },
        ],
        quote:
          "My peace of mind is getting restored. For the first time in years, I can focus on growth instead of being stuck inside the business every single day.",
        quoteAttribution: "Founder, Industrial Components Manufacturer, Gujarat",
        badge: "GAP360™ Systems & Accountability · 60 Days",
      },
      {
        slug: "trading-distribution-business",
        name: "Trading & Distribution Business",
        sector: "Trading & Distribution",
        location: "Gujarat",
        methodology: "GAP360™ HR & Organisation Design · 6 Months",
        challenge:
          "A 34% attrition rate was quietly bleeding the business, with unclear roles, inconsistent compensation, and a 45-day hiring cycle.",
        challengeFull:
          "A 34% attrition rate was quietly bleeding the business. Replacing one employee was costing the equivalent of 1–2 months' salary — approximately ₹40,000 per exit — with a 45-day hiring cycle that left gaps in a team already running lean. Job roles were unclear, compensation structures were inconsistent, and all people decisions were made ad hoc by the founder. There was no HR function to speak of.",
        approach:
          "SBC designed the complete HR architecture from the ground up — job descriptions, compensation bands, structured hiring, and onboarding.",
        approachFull:
          "SBC designed the complete HR architecture from the ground up — job descriptions, compensation bands, a structured hiring process, and an onboarding framework. KRAs were defined for every role and a performance review cycle was implemented across the organisation. The foundation was built to scale as the business grew, not just to patch the immediate attrition problem.",
        stats: [
          { value: "34%→18%", label: "Attrition Reduced" },
          { value: "45→22", label: "Days Hiring Cycle" },
          { value: "₹2L+/yr", label: "Attrition Cost Saved" },
          { value: "6 Months", label: "HR Architecture Built" },
        ],
        facts: [
          { label: "Sector", value: "Trading & Distribution" },
          { label: "Scale", value: "25–30 Employees · Growing Business" },
          { label: "Location", value: "Gujarat" },
          { label: "Engagement", value: "GAP360™ HR & Organisation Design · 6 Months" },
        ],
        quote:
          "The team is finally getting built the right way. People know what their job is, what they are accountable for, and what good performance looks like.",
        quoteAttribution: "Founder, Trading & Distribution Business, Gujarat",
        badge: "GAP360™ HR & Organisation Design · 6 Months",
      },
    ],
  },
  {
    key: "institution",
    heading: "Institution Building",
    label: "Institution Building",
    headingLine1: "Institutional",
    headingLine2: "Engagements",
    sectorShort: "Institutional Development",
    sidebarLabel: "Scope of Work",
    studies: [
      {
        slug: "winntus-institute-formwork-technology",
        name: "Winntus Institute of Formwork Technology (WIFT)",
        sector: "Skill Development / Construction Industry",
        location: "Haryana / National",
        methodology: "Institutional Development — Full Lifecycle",
        challenge:
          "Converting 25 years of expertise into India's first formwork-dedicated institution without governance structure or regulatory standing.",
        challengeFull:
          "Winntus Formwork Private Limited — a manufacturer and supplier of formwork systems with 25 years of deployment experience — wanted to convert that field expertise into a formal skill development institution. The objective: establish the Winntus Institute of Formwork Technology (WIFT) as India's first institution dedicated exclusively to formwork training. The challenge was total — no governance structure, no curriculum framework, no regulatory standing, and no prior experience navigating India's skill development compliance architecture.",
        approach:
          "Full institutional build across governance, CSDCI/NSQF curriculum, and regulatory credentialing (SIDH, NSDC, CSDCI).",
        approachFull:
          "SBC led the full institutional build across three workstreams simultaneously. Workstream 1 designed the governance framework, business model, batch planning SOPs, college partnership architecture, and launch readiness systems. Workstream 2 built the complete academic framework — QP/NOS mapping aligned to CSDCI standards, NSQF level mapping, curriculum framework, assessment and certification design, and a Training of Trainers pathway for Winntus's own engineering teams. Workstream 3 led the full regulatory credentialing track: SIDH Training Provider registration, NSDC Market Led Program application, and CSDCI affiliation — representing Winntus directly before regulators throughout.",
        stats: [
          { value: "15–20 Wks", label: "Engagement" },
          { value: "₹6,00,000", label: "Engagement Value" },
        ],
        bullets: [
          "WS1 – Institutional Foundation: Governance framework, business model, batch planning, SOPs, college partnership MoU template, launch readiness checklist, WIFT brand brief",
          "WS2 – Curriculum & Academic Framework: CSDCI QP/NOS mapping, NSQF level matrix, program-wise curriculum framework, practical training framework, ToT pathway, assessment & certification design",
          "WS3 – Regulatory Credentialing: SIDH Training Provider registration, NSDC MLP application & grant facilitation, CSDCI affiliation (application, inspection readiness, physical inspection management), NSDC Partnership Certificate",
        ],
        facts: [
          { label: "Client", value: "Winntus Formwork Private Limited" },
          { label: "Sector", value: "Skill Development / Construction Industry" },
          { label: "Engagement Value", value: "₹6,00,000" },
          { label: "Scope", value: "Concept to Credentialed Institution — End to End" },
        ],
        badge: "Full Lifecycle — Concept to Credentialed Institution · 15–20 Weeks · ₹6,00,000",
      },
    ],
  },
  {
    key: "feasibility",
    heading: "Feasibility Studies",
    label: "Feasibility Studies",
    headingLine1: "Strategic",
    headingLine2: "Research",
    sectorShort: "Feasibility",
    sidebarLabel: "Key Findings",
    studies: [
      {
        slug: "finance-operations-services-venture",
        name: "Finance & Operations Services Venture",
        sector: "Finance & Accounting Outsourcing (Proposed Venture)",
        location: "Ahmedabad, Gujarat",
        methodology: "Independent Feasibility Study — Full Scope",
        challenge:
          "Need market validation before capital commitment for subscription-based SMB finance outsourcing.",
        challengeFull:
          "A promoter group from Ahmedabad — with backgrounds in senior finance leadership in the pharma sector — wanted to establish a subscription-based finance and operations outsourcing firm for SMBs. Before committing capital, they wanted ten specific questions answered: filtered market size, willingness to switch, current spend, willingness to pay, talent availability, regulatory constraints, competitive threats, and the conditions under which the venture should not proceed. The brief explicitly requested an uncomfortable finding delivered plainly over a comfortable one delivered gently. SBC accepted that standard.",
        approach:
          "Three-phase feasibility: market validation, pressure test, and go-forward pricing design.",
        approachFull:
          "SBC conducted a structured three-phase feasibility study. Phase 1 validated the market — sizing the opportunity bottom-up from GSTN taxpayer data (not survey extrapolation), mapping competitors, and conducting 46 structured SMB interviews across Ahmedabad. Phase 2 pressure-tested the venture — regulatory scope review under the Chartered Accountants Act, competitive threat modelling over 24–36 months, operational and capital stress tests, and a written deal-breaker register. Phase 3 refined the go-forward design — three-tier pricing architecture anchored against real alternatives, customer priority sequencing, and a phased implementation roadmap.",
        stats: [
          { value: "~5.6L", label: "Target Enterprises (SAM)" },
          { value: "80%", label: "SMB Switching Openness" },
          { value: "Feasible", label: "Verdict" },
        ],
        bullets: [
          "Market Size — Gujarat SAM: ~5.6 lakh target-band enterprises. Year-3 SOM: 150–300 clients (capacity-constrained, not market-constrained).",
          "Primary Research — 80% of surveyed SMBs expressed openness to switching. Top barrier: trust, not price. 71.7% prefer monthly retainer model.",
          "Competitive Landscape — No organised domestic FAO competitor targets Ahmedabad SMBs at the proposed price points. Structural white space confirmed.",
          "Regulatory Scope — Entire service portfolio — bookkeeping, GST/TDS, payroll, MIS — sits outside CA-reserved activities. Legally clear and workable.",
          "Pricing Architecture — Three tiers validated against real alternatives: Starter ₹4,999/mo, Growth ₹9,999/mo, Scale ₹21,999/mo. Growth tier beats average current SMB spend of ₹11,402/mo.",
        ],
        facts: [
          { label: "Client", value: "Promoter Group — Pharma Sector (Ahmedabad)" },
          { label: "Study Duration", value: "40 Days" },
          { label: "Methodology", value: "Three-Phase: Validation → Pressure Test → Refinement" },
        ],
        badge: "Feasible — Conditional on Pre-Launch Actions",
      },
      {
        slug: "specialty-cafe-green-coffee-venture",
        name: "Specialty Café & Green Coffee Venture",
        sector: "F&B — Specialty Coffee / Café Venture (Proposed)",
        location: "Gujarat (Vapi)",
        methodology: "Strategic Feasibility — Sourcing & Economics",
        challenge: "Determine sourcing economics (domestic vs. imported) before capital investment.",
        challengeFull:
          "A Vapi-based industrialist with a manufacturing background in corrugated packaging wanted to evaluate entry into the specialty coffee and café space. Before committing capital, they needed clarity on sourcing economics, the landed cost reality of imported versus domestic green coffee, a viable business model, and an honest go/no-go recommendation.",
        approach:
          "Global FOB pricing analysis, import duty mapping, landed-cost modeling, and competitive benchmarking.",
        approachFull:
          "SBC conducted a strategic feasibility assessment covering the full green coffee sourcing landscape. Primary and secondary research mapped global FOB prices across origins (Ethiopia, Kenya, Colombia, Tanzania, Brazil), Indian import duty structure under HS Code 0901.11, and domestic farmgate pricing across Karnataka, Kerala, Tamil Nadu, and Andhra Pradesh. Landed cost scenarios were modelled across sea FCL, sea LCL, and air freight. The study benchmarked Indian D2C coffee brands (Blue Tokai, Subko, CoffeeVerse) and global luxury models (Bacha Coffee, %Arabica, Nespresso) to identify viable positioning.",
        stats: [
          { value: "~210–220%", label: "Import Duty (CIF)" },
          { value: "50–65%", label: "Domestic Cost Advantage" },
          { value: "80–90%", label: "Recommended Domestic Sourcing" },
        ],
        bullets: [
          "Import Reality — India's effective import duty burden is ~210–220% of CIF value. Best-case landed cost for imported green coffee: ₹880–1,200/kg — 3x domestic Arabica.",
          "Domestic Advantage — Indian Arabica: ₹250–340/kg farmgate. Domestic sourcing delivers a 50–65% structural cost advantage before roasting.",
          "Recommended Sourcing — 80–90% domestic (blends & core SKUs) + 10–20% imported (premium single-origin, limited edition only).",
          "Import Viability Rule — Proceed with imports only if landed cost exceeds ₹1,000/kg AND the product can sell at ₹400–500/kg roasted wholesale or above.",
        ],
        facts: [
          { label: "Client", value: "Industrialist Promoter — Corrugated Packaging Sector, Vapi" },
          { label: "Scope", value: "Green Coffee Sourcing Economics, Market Positioning, Go/No-Go" },
          { label: "Geography", value: "India — Gujarat (Primary Market)" },
        ],
        badge: "Domestic-First Sourcing Strategy",
      },
    ],
  },
];

export const allStudies: (CaseStudy & { groupHeading: string })[] = groups.flatMap((g) =>
  g.studies.map((s) => ({ ...s, groupHeading: g.heading })),
);

export function getStudyBySlug(slug: string) {
  for (const g of groups) {
    const study = g.studies.find((s) => s.slug === slug);
    if (study) return { study, group: g };
  }
  return null;
}
