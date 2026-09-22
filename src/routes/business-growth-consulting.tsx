import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Briefcase,
  Building,
  ChartColumn,
  ChartLine,
  ChevronDown,
  Compass,
  Factory,
  Gauge,
  GraduationCap,
  Handshake,
  Landmark,
  Layers,
  Lightbulb,
  Map,
  MapPinned,
  MessageCircle,
  Network,
  Rocket,
  Search,
  ShieldCheck,
  Store,
  Target,
  TrendingDown,
  User,
  Users,
  Wallet,
} from "lucide-react";
import { Header } from "@/components/sbc/Header";
import { Footer } from "@/components/sbc/Footer";
import { Reveal } from "@/components/sbc/primitives";
import { StatBlock } from "@/components/sbc/StatBlock";
import { PracticeAreaCard } from "@/components/sbc/PracticeAreaCard";
import { Breadcrumbs } from "@/components/sbc/Breadcrumbs";
import { JsonLd } from "@/components/sbc/JsonLd";

const title = "Business Growth Consulting Services: The Complete Guide | SBC";
const description =
  "Comparing business growth consulting firms? See how SBC turns strategy into measurable growth for MSMEs across India. Book a free business systems audit today.";
const robots = "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";
const url = "https://sbcgroup.in/business-growth-consulting";

export const Route = createFileRoute("/business-growth-consulting")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: robots },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: url },
      { property: "og:image", content: "https://sbcgroup.in/sbc-logo.png" },
      { property: "og:site_name", content: "Sagar Burse Consulting (SBC)" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: "https://sbcgroup.in/sbc-logo.png" },
    ],
    links: [{ rel: "canonical", href: url }],
  }),
  component: BusinessGrowthConsulting,
});

const faqs: [string, string][] = [
  [
    "What does a business growth consulting firm do?",
    "A business growth consulting firm studies where a business is losing growth — through weak systems, unclear roles, cash flow strain or missing data — and builds a plan to fix it. The best firms combine strategic planning with hands-on implementation, so the growth plan actually gets executed rather than sitting in a report.",
  ],
  [
    "How is business growth consulting different from general strategy consulting?",
    "General strategy consulting often ends with a strategy document. Business growth consulting, as SBC practices it, starts with a structured diagnostic (GAP360™), sets measurable growth metrics, and stays engaged through implementation until those metrics move — revenue, on-time delivery, attrition, hiring speed or cost.",
  ],
  [
    "How do I choose the right growth consulting firm?",
    "Compare firms on six points: whether they implement or only advise, whether they run a growth diagnostic before proposing a plan, proof with measurable metrics, relevant sector experience, senior involvement in your engagement, and a low-risk first step such as a free audit.",
  ],
  [
    "What makes SBC different from other business growth consulting firms?",
    "SBC is implementation-led: every growth engagement starts with a GAP360™ diagnostic, not a template, and we stay with your team through execution until growth is measurable. The founder, Sagar Burse, PhD, is personally involved from the free audit onward.",
  ],
  [
    "Which industries does SBC’s growth consulting serve?",
    "SBC works with MSMEs in manufacturing, trading, distribution and services, as well as universities, skill-development institutions, industry associations and public sector undertakings. Published case studies include a rubber and plastics manufacturer, an industrial components manufacturer and a trading and distribution business.",
  ],
  [
    "How much do business growth consulting services cost?",
    "Cost depends on the scope, duration and team required, so SBC does not publish a fixed price list. Every engagement begins with a free 45-minute business systems audit, and any further work is scoped with defined growth milestones so you know exactly what you are paying for.",
  ],
  [
    "How long does a growth consulting engagement take?",
    "It depends on the constraint. SBC’s published case studies range from a 40-day feasibility study and a 60-day systems build to a 90-day full delivery-improvement cycle and a six-month HR and growth-systems overhaul. A full GAP360™ diagnostic typically takes 2–4 weeks.",
  ],
  [
    "What is the GAP360™ growth method?",
    "GAP360™ (Growth Acceleration Pathway 360°) is SBC’s flagship growth framework. It examines operations, systems, people, process and strategy, and moves through six phases — Diagnose, Align, Analyse, Design, Implement and Sustain — with SBC working alongside your team until growth is delivered.",
  ],
  [
    "Can a small business or MSME benefit from growth consulting?",
    "Yes. SBC’s growth consulting is built for founder-led MSMEs, including businesses with 25–60 employees where the owner is still involved in every decision. Typical outcomes include documented SOPs, clear KPIs, freed-up founder time and measurable improvements in delivery, attrition or margin.",
  ],
  [
    "Does SBC serve businesses outside Ahmedabad?",
    "Yes. SBC is headquartered in Ahmedabad, Gujarat, but serves MSMEs, institutions and government bodies across India, including engagements with a national scope such as a skill-development institute. Growth diagnostics and strategy sessions can be run remotely, with implementation support scoped to your location.",
  ],
  [
    "How can I contact SBC or book a free consultation?",
    "Book the free business systems audit at sbcgroup.in/book-free-audit, call +91 8128310116 or email consulting@sbcgroup.in. SBC typically responds within 24 hours on business days.",
  ],
];

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://sbcgroup.in/business-growth-consulting#webpage",
  url: "https://sbcgroup.in/business-growth-consulting",
  name: "Business Growth Consulting Services: The Complete Guide | SBC",
  description:
    "Comparing business growth consulting firms? See how SBC turns strategy into measurable growth for MSMEs across India. Book a free business systems audit today.",
  inLanguage: "en-IN",
  isPartOf: {
    "@type": "WebSite",
    name: "Sagar Burse Consulting (SBC)",
    url: "https://sbcgroup.in",
  },
  about: {
    "@type": "Thing",
    name: "Business growth consulting",
  },
  primaryImageOfPage: {
    "@type": "ImageObject",
    url: "https://sbcgroup.in/images/founder/sagar-burse-founder-sbc-ahmedabad.webp",
  },
  datePublished: "2026-09-22",
  dateModified: "2026-09-22",
  author: {
    "@type": "Person",
    name: "Sagar Burse",
    honorificSuffix: "PhD",
    jobTitle: "Founder & Principal Consultant",
    url: "https://sbcgroup.in/founder",
    image: "https://sbcgroup.in/images/founder/sagar-burse-author.webp",
    sameAs: ["https://www.linkedin.com/in/drsagarburse/"],
  },
  publisher: {
    "@type": "Organization",
    name: "Sagar Burse Consulting",
    logo: {
      "@type": "ImageObject",
      url: "https://sbcgroup.in/sbc-logo.png",
    },
  },
};

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://sbcgroup.in/#professional-service",
  name: "Sagar Burse Consulting (SBC)",
  alternateName: "SBC",
  url: "https://sbcgroup.in",
  logo: "https://sbcgroup.in/sbc-logo.png",
  image: "https://sbcgroup.in/images/founder/sagar-burse-founder-sbc-ahmedabad.webp",
  description:
    "Sagar Burse Consulting (SBC) is a business growth consulting firm headquartered in Ahmedabad, Gujarat, serving MSMEs and institutions across India with GAP360™ diagnostics, strategic planning and implementation.",
  email: "consulting@sbcgroup.in",
  telephone: "+91-8128310116",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ahmedabad",
    addressRegion: "Gujarat",
    addressCountry: "IN",
  },
  areaServed: [
    {
      "@type": "State",
      name: "Gujarat",
    },
    {
      "@type": "Country",
      name: "India",
    },
  ],
  founder: {
    "@type": "Person",
    name: "Sagar Burse",
    honorificSuffix: "PhD",
    jobTitle: "Founder & Principal Consultant",
    url: "https://sbcgroup.in/founder",
    image: "https://sbcgroup.in/images/founder/sagar-burse-author.webp",
    sameAs: ["https://www.linkedin.com/in/drsagarburse/"],
  },
  knowsAbout: [
    "Business growth consulting",
    "Growth strategy consulting",
    "Strategic planning consulting",
    "MSME consulting",
    "Business process improvement",
    "GAP360 gap analysis",
    "Feasibility studies",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Business growth consulting services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "MSME Consulting for Growth",
          description:
            "Systems, SOPs, accountability frameworks and organisation design that let a business scale without the founder doing everything.",
          url: "https://sbcgroup.in/msme-consulting",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "GAP360™ Growth Diagnostics",
          description:
            "A structured audit across operations, finance, HR, sales and production that identifies exactly what is capping your growth.",
          url: "https://sbcgroup.in/gap360",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Strategic Research & Feasibility",
          description:
            "Market research and feasibility studies that validate a growth move — a new location, product or market — before capital is committed.",
          url: "https://sbcgroup.in/strategic-research-feasibility",
        },
      },
    ],
  },
  sameAs: [
    "https://www.linkedin.com/company/sbcglobal/",
    "https://www.facebook.com/sbcgroup.in",
    "https://www.instagram.com/sbcgroup.in",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(([q, a]) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

function BusinessGrowthConsulting() {
  return (
    <div className="min-h-screen bg-paper">
      <JsonLd data={webPageSchema} />
      <JsonLd data={businessSchema} />
      <JsonLd data={faqSchema} />
      <Header />
      <Breadcrumbs trail={[{ label: "Business Growth Consulting" }]} dark />
      <main>
        <section className="section-y border-b border-ink-tint bg-ink">
          <div className="shell">
            <Reveal as="section" className="max-w-3xl">
              <h1 className="font-display text-4xl font-semibold tracking-tight text-paper md:text-[3rem]">
                Business Growth Consulting Services
              </h1>
              <p className="mt-5 text-[17px] leading-relaxed text-paper/80">
                Sagar Burse Consulting (SBC) is an implementation-led business growth consulting
                firm that helps MSMEs and institutions diagnose what is capping their growth, build
                a roadmap and stay until results are measurable — across Gujarat and India.
              </p>
              <p className="mt-4 text-[17px] leading-relaxed text-paper/80">
                This guide explains how growth consulting works, how it differs from business
                strategy consulting services or strategic planning consulting services, and how SBC
                turns a growth plan into measurable results.
              </p>
              <p className="mt-5 text-[14px] leading-relaxed text-paper/70">
                {"Written by "}
                <a
                  href="/founder"
                  rel="author"
                  className="font-semibold text-paper transition-colors hover:text-gold"
                >
                  Sagar Burse, PhD
                </a>
                {", Founder & Principal Consultant · Last updated "}
                <time dateTime="2026-09-22">22 September 2026</time>
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="/book-free-audit"
                  className="inline-flex items-center gap-2 bg-gold px-6 py-3 text-[13px] font-semibold uppercase tracking-[0.18em] text-paper transition-colors hover:bg-gold-tint"
                >
                  Book Your Free Business Systems Audit
                  <ArrowRight className="size-4" />
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 border border-ink-tint px-6 py-3 text-[13px] font-semibold uppercase tracking-[0.18em] text-paper transition-colors hover:border-gold hover:text-gold"
                >
                  Talk to SBC
                </a>
              </div>
            </Reveal>
          </div>
        </section>
        <section className="section-y border-b border-ink-tint bg-ink-wash">
          <div className="shell">
            <Reveal
              as="section"
              className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] lg:items-start"
            >
              <div className="sticky-col">
                <h2 className="font-display text-3xl font-semibold tracking-tight text-ink md:text-[2.5rem]">
                  Business Growth Consulting: The Short Answer
                </h2>
              </div>
              <div>
                <p className="mt-4 text-[17px] leading-relaxed text-charcoal">
                  Effective growth strategy consulting starts with a diagnostic, not a strategy
                  deck. The right growth strategy consulting firm finds exactly what is capping your
                  growth — systems, people, cash flow or data — builds a plan around it, and stays
                  to implement that plan until the numbers move. Start with a low-risk first step,
                  such as a free business systems audit, before committing to a long engagement.
                </p>
                <nav aria-label="On this page" className="mt-6">
                  <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-ink-soft">
                    In this guide
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-4">
                    <li>
                      <a
                        href="#signs"
                        className="inline-flex py-1 text-[14px] font-semibold text-gold-deep transition-colors hover:text-gold"
                      >
                        Signs you need growth consulting
                      </a>
                    </li>
                    <li>
                      <a
                        href="#what-is"
                        className="inline-flex py-1 text-[14px] font-semibold text-gold-deep transition-colors hover:text-gold"
                      >
                        What it is
                      </a>
                    </li>
                    <li>
                      <a
                        href="#how-to-choose"
                        className="inline-flex py-1 text-[14px] font-semibold text-gold-deep transition-colors hover:text-gold"
                      >
                        How to choose
                      </a>
                    </li>
                    <li>
                      <a
                        href="#why-sbc"
                        className="inline-flex py-1 text-[14px] font-semibold text-gold-deep transition-colors hover:text-gold"
                      >
                        Why SBC
                      </a>
                    </li>
                    <li>
                      <a
                        href="#services"
                        className="inline-flex py-1 text-[14px] font-semibold text-gold-deep transition-colors hover:text-gold"
                      >
                        Services
                      </a>
                    </li>
                    <li>
                      <a
                        href="#method"
                        className="inline-flex py-1 text-[14px] font-semibold text-gold-deep transition-colors hover:text-gold"
                      >
                        GAP360 method
                      </a>
                    </li>
                    <li>
                      <a
                        href="#results"
                        className="inline-flex py-1 text-[14px] font-semibold text-gold-deep transition-colors hover:text-gold"
                      >
                        Results
                      </a>
                    </li>
                    <li>
                      <a
                        href="#who-we-work-with"
                        className="inline-flex py-1 text-[14px] font-semibold text-gold-deep transition-colors hover:text-gold"
                      >
                        Who we work with
                      </a>
                    </li>
                    <li>
                      <a
                        href="#founder"
                        className="inline-flex py-1 text-[14px] font-semibold text-gold-deep transition-colors hover:text-gold"
                      >
                        The founder
                      </a>
                    </li>
                    <li>
                      <a
                        href="#faq"
                        className="inline-flex py-1 text-[14px] font-semibold text-gold-deep transition-colors hover:text-gold"
                      >
                        FAQ
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </Reveal>
            <Reveal as="section" className="mt-10">
              <h3 className="text-[12px] font-semibold uppercase tracking-[0.16em] text-ink-soft">
                SBC at a Glance
              </h3>
              <dl className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                <div className="border border-ink-tint bg-card p-5">
                  <dt className="text-[12px] font-semibold uppercase tracking-[0.16em] text-gold">
                    Firm
                  </dt>
                  <dd className="mt-2 text-[15px] leading-relaxed text-charcoal">
                    Sagar Burse Consulting (SBC)
                  </dd>
                </div>
                <div className="border border-ink-tint bg-card p-5">
                  <dt className="text-[12px] font-semibold uppercase tracking-[0.16em] text-gold">
                    Headquarters
                  </dt>
                  <dd className="mt-2 text-[15px] leading-relaxed text-charcoal">
                    Ahmedabad, Gujarat — serving clients across India
                  </dd>
                </div>
                <div className="border border-ink-tint bg-card p-5">
                  <dt className="text-[12px] font-semibold uppercase tracking-[0.16em] text-gold">
                    Founder
                  </dt>
                  <dd className="mt-2 text-[15px] leading-relaxed text-charcoal">
                    Sagar Burse, PhD — Founder &amp; Principal Consultant
                  </dd>
                </div>
                <div className="border border-ink-tint bg-card p-5">
                  <dt className="text-[12px] font-semibold uppercase tracking-[0.16em] text-gold">
                    Growth Divisions
                  </dt>
                  <dd className="mt-2 text-[15px] leading-relaxed text-charcoal">
                    MSME Consulting, Strategic Research &amp; Feasibility, GAP360™ Growth
                    Diagnostics
                  </dd>
                </div>
                <div className="border border-ink-tint bg-card p-5">
                  <dt className="text-[12px] font-semibold uppercase tracking-[0.16em] text-gold">
                    Signature Method
                  </dt>
                  <dd className="mt-2 text-[15px] leading-relaxed text-charcoal">
                    GAP360™ — Diagnose, Align, Analyse, Design, Implement, Sustain
                  </dd>
                </div>
                <div className="border border-ink-tint bg-card p-5">
                  <dt className="text-[12px] font-semibold uppercase tracking-[0.16em] text-gold">
                    First Step
                  </dt>
                  <dd className="mt-2 text-[15px] leading-relaxed text-charcoal">
                    Free 45-minute business systems audit — no commitment
                  </dd>
                </div>
              </dl>
            </Reveal>
            <Reveal
              as="section"
              className="mt-10 grid grid-cols-2 gap-8 border-t border-ink-tint pt-8 md:grid-cols-4"
            >
              <StatBlock value="8+" label="Years Of Experience" />
              <StatBlock value="10+" label="Consulting Engagements" />
              <StatBlock value="5+" label="Institutional Projects" />
              <StatBlock value="4" label="Practice Divisions" />
            </Reveal>
          </div>
        </section>
        <section className="section-y border-b border-ink-tint">
          <div className="shell">
            <Reveal as="section" className="max-w-3xl">
              <h2
                id="signs"
                className="font-display text-3xl font-semibold tracking-tight text-ink md:text-[2.5rem] scroll-mt-24"
              >
                Signs Your Business Needs Growth Consulting
              </h2>
              <p className="mt-4 text-[17px] leading-relaxed text-charcoal">
                Most owners bring in a growth consultant only after these signs have repeated for a
                year or more. If two or more sound familiar, a structured growth diagnostic will
                show which one is costing you the most.
              </p>
            </Reveal>
            <Reveal as="section" className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              <article className="border border-ink-tint bg-card p-6">
                <Gauge className="size-6 text-gold" />
                <h3 className="mt-4 font-display text-lg font-semibold leading-snug text-ink">
                  Growth has plateaued
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-charcoal">
                  Demand and enquiries are steady, but revenue and headcount have stopped moving
                  despite the effort going in.
                </p>
              </article>
              <article className="border border-ink-tint bg-card p-6">
                <TrendingDown className="size-6 text-gold" />
                <h3 className="mt-4 font-display text-lg font-semibold leading-snug text-ink">
                  Revenue is up, margins are shrinking
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-charcoal">
                  Sales look healthy on paper, but rising costs and inefficiency are quietly eating
                  the profit behind them.
                </p>
              </article>
              <article className="border border-ink-tint bg-card p-6">
                <Layers className="size-6 text-gold" />
                <h3 className="mt-4 font-display text-lg font-semibold leading-snug text-ink">
                  Headcount is scaling, systems are not
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-charcoal">
                  You keep hiring to keep up, but without SOPs or KPIs, more people just means more
                  chaos to manage.
                </p>
              </article>
              <article className="border border-ink-tint bg-card p-6">
                <Map className="size-6 text-gold" />
                <h3 className="mt-4 font-display text-lg font-semibold leading-snug text-ink">
                  Expansion plans without data
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-charcoal">
                  You are considering a new location, product line or market, but the decision is
                  based on instinct, not numbers.
                </p>
              </article>
              <article className="border border-ink-tint bg-card p-6">
                <User className="size-6 text-gold" />
                <h3 className="mt-4 font-display text-lg font-semibold leading-snug text-ink">
                  The founder is still the strategy
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-charcoal">
                  Every growth decision — pricing, hiring, expansion — still has to pass through you
                  personally.
                </p>
              </article>
              <article className="border border-ink-tint bg-card p-6">
                <Wallet className="size-6 text-gold" />
                <h3 className="mt-4 font-display text-lg font-semibold leading-snug text-ink">
                  Cash flow is tight despite sales
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-charcoal">
                  Revenue is coming in, but working capital is always stretched thin between orders
                  and payables.
                </p>
              </article>
            </Reveal>
            <Reveal
              as="section"
              className="mt-10 flex flex-col gap-4 border border-gold bg-gold-wash p-6 sm:flex-row sm:items-center cta-row"
            >
              <p className="font-display text-lg font-semibold leading-snug text-ink">
                Recognise two or more? Find your growth constraints in a free 45-minute audit.
              </p>
              <a
                href="/book-free-audit"
                className="inline-flex items-center gap-2 bg-gold px-6 py-3 text-[13px] font-semibold uppercase tracking-[0.18em] text-paper transition-colors hover:bg-gold-tint shrink-0 justify-center"
              >
                Book Your Free Audit
                <ArrowRight className="size-4" />
              </a>
            </Reveal>
          </div>
        </section>
        <section className="section-y border-b border-ink-tint bg-ink-wash">
          <div className="shell">
            <Reveal
              as="section"
              className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] lg:items-start"
            >
              <div className="sticky-col">
                <h2
                  id="what-is"
                  className="font-display text-3xl font-semibold tracking-tight text-ink md:text-[2.5rem] scroll-mt-24"
                >
                  What Is Business Growth Consulting?
                </h2>
              </div>
              <div>
                <p className="text-[17px] leading-relaxed text-charcoal">
                  In practice, it is advisory work focused on one outcome: removing whatever is
                  capping a business’s growth, whether that is weak systems, unclear accountability,
                  cash flow strain, missing data or a founder who is still the bottleneck for every
                  decision. It combines strategic planning with the systems and implementation
                  needed to act on it.
                </p>
                <p className="mt-4 text-[17px] leading-relaxed text-charcoal">
                  These growth consulting services typically combine some of the following:
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex gap-2 text-[15.5px] leading-relaxed text-charcoal">
                    <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-gold-deep" />
                    <span>
                      Growth diagnostics and gap analysis that find the real constraint, not just
                      symptoms
                    </span>
                  </li>
                  <li className="flex gap-2 text-[15.5px] leading-relaxed text-charcoal">
                    <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-gold-deep" />
                    <span>Strategic planning and growth roadmaps with defined milestones</span>
                  </li>
                  <li className="flex gap-2 text-[15.5px] leading-relaxed text-charcoal">
                    <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-gold-deep" />
                    <span>Systems, SOPs and business process improvement</span>
                  </li>
                  <li className="flex gap-2 text-[15.5px] leading-relaxed text-charcoal">
                    <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-gold-deep" />
                    <span>Organisation design, KRA/KPI frameworks and hiring plans</span>
                  </li>
                  <li className="flex gap-2 text-[15.5px] leading-relaxed text-charcoal">
                    <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-gold-deep" />
                    <span>Market research and feasibility studies before capital is committed</span>
                  </li>
                  <li className="flex gap-2 text-[15.5px] leading-relaxed text-charcoal">
                    <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-gold-deep" />
                    <span>Implementation support until growth targets are measurable</span>
                  </li>
                </ul>
                <p className="mt-4 text-[17px] leading-relaxed text-charcoal">
                  {
                    "Business growth consulting overlaps with business strategy consulting services and strategic planning consulting services, but the difference is what happens after the plan is written. Some firms deliver a deck and move to the next client. Others, like SBC, stay to implement it. Our article on "
                  }
                  <a
                    href="/blog/5-business-systems-msme-scaling"
                    className="font-semibold text-gold-deep transition-colors hover:text-gold"
                  >
                    the five business systems every MSME must build before scaling
                  </a>
                  {" explains the systems side of this in more depth, and "}
                  <a
                    href="/blog/why-msmes-stay-stuck-systems-gap"
                    className="font-semibold text-gold-deep transition-colors hover:text-gold"
                  >
                    why most MSMEs stay stuck
                  </a>
                  {" explains why growth plans without implementation rarely work."}
                </p>
              </div>
            </Reveal>
          </div>
        </section>
        <section className="section-y border-b border-ink-tint">
          <div className="shell">
            <Reveal as="section" className="max-w-3xl">
              <h2
                id="how-to-choose"
                className="font-display text-3xl font-semibold tracking-tight text-ink md:text-[2.5rem] scroll-mt-24"
              >
                How to Choose a Business Growth Consulting Firm
              </h2>
              <p className="mt-4 text-[17px] leading-relaxed text-charcoal">
                Growth consulting firms all promise results. Use these six criteria to compare what
                they actually deliver — including SBC.
              </p>
            </Reveal>
            <Reveal as="section" className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              <article className="border border-ink-tint bg-card p-6 transition-colors hover:border-gold">
                <span className="grid size-9 shrink-0 place-items-center rounded-full border border-gold text-[12px] font-semibold text-gold">
                  01
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold leading-snug text-ink">
                  Execution, not just a strategy deck
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-charcoal">
                  A growth plan is only useful if someone stays to implement it. Ask who works
                  alongside your team after the strategy is agreed, and for how long.
                </p>
              </article>
              <article className="border border-ink-tint bg-card p-6 transition-colors hover:border-gold">
                <span className="grid size-9 shrink-0 place-items-center rounded-full border border-gold text-[12px] font-semibold text-gold">
                  02
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold leading-snug text-ink">
                  A growth diagnostic before a plan
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-charcoal">
                  Look for a firm that studies your business first. SBC starts every growth
                  engagement with a structured GAP360™ diagnostic, not a template.
                </p>
              </article>
              <article className="border border-ink-tint bg-card p-6 transition-colors hover:border-gold">
                <span className="grid size-9 shrink-0 place-items-center rounded-full border border-gold text-[12px] font-semibold text-gold">
                  03
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold leading-snug text-ink">
                  Proof with growth metrics
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-charcoal">
                  Ask for engagements with measurable before-and-after numbers — revenue, on-time
                  delivery, attrition, hiring speed — not just testimonials.
                </p>
              </article>
              <article className="border border-ink-tint bg-card p-6 transition-colors hover:border-gold">
                <span className="grid size-9 shrink-0 place-items-center rounded-full border border-gold text-[12px] font-semibold text-gold">
                  04
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold leading-snug text-ink">
                  Sector-relevant benchmarks
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-charcoal">
                  Growth looks different for a manufacturer, a trading business and a service firm.
                  Check the firm has handled your sector before.
                </p>
              </article>
              <article className="border border-ink-tint bg-card p-6 transition-colors hover:border-gold">
                <span className="grid size-9 shrink-0 place-items-center rounded-full border border-gold text-[12px] font-semibold text-gold">
                  05
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold leading-snug text-ink">
                  Senior involvement
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-charcoal">
                  Find out whether a principal consultant works directly on your growth plan, or
                  whether it is delegated after the first meeting.
                </p>
              </article>
              <article className="border border-ink-tint bg-card p-6 transition-colors hover:border-gold">
                <span className="grid size-9 shrink-0 place-items-center rounded-full border border-gold text-[12px] font-semibold text-gold">
                  06
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold leading-snug text-ink">
                  A low-risk first step
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-charcoal">
                  Prefer firms that let you test the fit first — a free audit or scoped diagnostic —
                  before you commit to a long retainer.
                </p>
              </article>
            </Reveal>
            <p className="mt-8 max-w-3xl text-[15px] leading-relaxed text-charcoal">
              {
                "Hold every growth strategy consulting firm you shortlist to the same six criteria, including us. If you want to see how SBC answers each one, "
              }
              <a
                href="/book-free-audit"
                className="font-semibold text-gold-deep transition-colors hover:text-gold"
              >
                book a free audit
              </a>
              {" and ask."}
            </p>
          </div>
        </section>
        <section className="section-y border-b border-ink-tint bg-ink-wash">
          <div className="shell">
            <Reveal
              as="section"
              className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] lg:items-start"
            >
              <div className="sticky-col">
                <h2
                  id="why-sbc"
                  className="font-display text-3xl font-semibold tracking-tight text-ink md:text-[2.5rem] scroll-mt-24"
                >
                  Why SBC for Growth Consulting
                </h2>
              </div>
              <div>
                <p className="text-[17px] leading-relaxed text-charcoal">
                  SBC was founded in Ahmedabad, Gujarat by Sagar Burse, PhD for businesses that need
                  more than a growth strategy document. Too many MSMEs receive a growth plan that
                  never gets implemented. We work differently: we diagnose the real constraint on
                  growth, design the fix, and stay engaged until it delivers measurable results.
                </p>
                <p className="mt-4 text-[17px] leading-relaxed text-charcoal">
                  {
                    "Today SBC’s growth consulting draws on all four practice divisions — MSME consulting, institution building, strategic research and policy advisory — serving founders and institutional leaders across Gujarat and India. Read more about "
                  }
                  <a
                    href="/about-sbc"
                    className="font-semibold text-gold-deep transition-colors hover:text-gold"
                  >
                    who we are
                  </a>
                  {" and "}
                  <a
                    href="/our-approach"
                    className="font-semibold text-gold-deep transition-colors hover:text-gold"
                  >
                    our approach
                  </a>
                  .
                </p>
              </div>
            </Reveal>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <Reveal as="section">
                <PracticeAreaCard
                  icon={Compass}
                  title="Diagnostic-Led Strategy"
                  description="Every growth roadmap is built on a structured GAP360™ audit of your business — not assumptions or templates."
                />
              </Reveal>
              <Reveal as="section">
                <PracticeAreaCard
                  icon={ShieldCheck}
                  title="Implementation-Led"
                  description="We do not hand over a strategy deck and leave. We stay engaged until growth is implemented and measurable."
                />
              </Reveal>
              <Reveal as="section">
                <PracticeAreaCard
                  icon={ChartLine}
                  title="Measurable Growth"
                  description="Every engagement is tracked against defined metrics — revenue, delivery, attrition, hiring speed and cost."
                />
              </Reveal>
              <Reveal as="section">
                <PracticeAreaCard
                  icon={Handshake}
                  title="Long-Term Partnership"
                  description="We build lasting relationships, not one-time engagements. Your growth is our long-term commitment."
                />
              </Reveal>
            </div>
          </div>
        </section>
        <section className="section-y border-b border-ink-tint">
          <div className="shell">
            <Reveal as="section" className="max-w-3xl">
              <h2
                id="services"
                className="font-display text-3xl font-semibold tracking-tight text-ink md:text-[2.5rem] scroll-mt-24"
              >
                Growth Consulting Services We Offer
              </h2>
              <p className="mt-4 text-[17px] leading-relaxed text-charcoal">
                Three of SBC’s practice divisions cover the most common reasons a business hires a
                growth consultant.
              </p>
            </Reveal>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              <Reveal as="section" className="h-full">
                <PracticeAreaCard
                  icon={Target}
                  title="MSME Consulting for Growth"
                  description="Systems, SOPs, accountability frameworks and organisation design that let a business scale without the founder doing everything."
                  href="/msme-consulting"
                />
              </Reveal>
              <Reveal as="section" className="h-full">
                <PracticeAreaCard
                  icon={Search}
                  title="GAP360™ Growth Diagnostics"
                  description="A structured audit across operations, finance, HR, sales and production that identifies exactly what is capping your growth."
                  href="/gap360"
                />
              </Reveal>
              <Reveal as="section" className="h-full">
                <PracticeAreaCard
                  icon={ChartColumn}
                  title="Strategic Research & Feasibility"
                  description="Market research and feasibility studies that validate a growth move — a new location, product or market — before capital is committed."
                  href="/strategic-research-feasibility"
                />
              </Reveal>
            </div>
          </div>
        </section>
        <section className="section-y border-b border-ink-tint bg-ink-wash">
          <div className="shell">
            <Reveal as="section" className="max-w-3xl">
              <h2
                id="method"
                className="font-display text-3xl font-semibold tracking-tight text-ink md:text-[2.5rem] scroll-mt-24"
              >
                The GAP360™ Growth Method
              </h2>
              <p className="mt-4 text-[17px] leading-relaxed text-charcoal">
                GAP360™ (Growth Acceleration Pathway 360°) is SBC’s flagship growth strategy
                consulting framework, developed by Sagar Burse, PhD through on-ground work with
                Indian MSMEs. It looks across operations, systems, people, process and strategy, and
                moves every growth engagement through the same six phases.
              </p>
            </Reveal>
            <Reveal as="section" className="mt-8">
              <img
                src="/images/gap360-business-growth-consulting-method-sbc.webp"
                alt="GAP360 six-phase business growth consulting method: Diagnose, Align, Analyse, Design, Implement, Sustain"
                width={1600}
                height={500}
                loading="lazy"
                decoding="async"
                className="h-auto w-full border border-ink-tint"
              />
            </Reveal>
            <Reveal as="section" className="mt-10">
              <ol className="divide-y divide-ink-tint border-t border-ink-tint">
                <li className="flex flex-col gap-3 py-6 sm:flex-row sm:items-start sm:gap-6">
                  <div className="flex shrink-0 items-center gap-3 sm:w-56">
                    <span className="grid size-9 shrink-0 place-items-center rounded-full border border-gold text-[12px] font-semibold text-gold">
                      01
                    </span>
                    <h3 className="font-display text-base font-semibold text-ink">Diagnose</h3>
                  </div>
                  <p className="text-[15px] leading-relaxed text-charcoal sm:flex-1">
                    A structured audit across operations, finance, HR, sales, production and
                    management to find what is capping growth and estimate its rupee impact.
                  </p>
                </li>
                <li className="flex flex-col gap-3 py-6 sm:flex-row sm:items-start sm:gap-6">
                  <div className="flex shrink-0 items-center gap-3 sm:w-56">
                    <span className="grid size-9 shrink-0 place-items-center rounded-full border border-gold text-[12px] font-semibold text-gold">
                      02
                    </span>
                    <h3 className="font-display text-base font-semibold text-ink">Align</h3>
                  </div>
                  <p className="text-[15px] leading-relaxed text-charcoal sm:flex-1">
                    Findings are reviewed with leadership so everyone agrees on growth priorities
                    before any plan is designed.
                  </p>
                </li>
                <li className="flex flex-col gap-3 py-6 sm:flex-row sm:items-start sm:gap-6">
                  <div className="flex shrink-0 items-center gap-3 sm:w-56">
                    <span className="grid size-9 shrink-0 place-items-center rounded-full border border-gold text-[12px] font-semibold text-gold">
                      03
                    </span>
                    <h3 className="font-display text-base font-semibold text-ink">Analyse</h3>
                  </div>
                  <p className="text-[15px] leading-relaxed text-charcoal sm:flex-1">
                    Root-cause mapping of every growth constraint, producing a prioritised list
                    ranked by impact.
                  </p>
                </li>
                <li className="flex flex-col gap-3 py-6 sm:flex-row sm:items-start sm:gap-6">
                  <div className="flex shrink-0 items-center gap-3 sm:w-56">
                    <span className="grid size-9 shrink-0 place-items-center rounded-full border border-gold text-[12px] font-semibold text-gold">
                      04
                    </span>
                    <h3 className="font-display text-base font-semibold text-ink">Design</h3>
                  </div>
                  <p className="text-[15px] leading-relaxed text-charcoal sm:flex-1">
                    A growth roadmap, SOPs and KRA/KPI frameworks built for adoption by your team,
                    not just a slide deck.
                  </p>
                </li>
                <li className="flex flex-col gap-3 py-6 sm:flex-row sm:items-start sm:gap-6">
                  <div className="flex shrink-0 items-center gap-3 sm:w-56">
                    <span className="grid size-9 shrink-0 place-items-center rounded-full border border-gold text-[12px] font-semibold text-gold">
                      05
                    </span>
                    <h3 className="font-display text-base font-semibold text-ink">Implement</h3>
                  </div>
                  <p className="text-[15px] leading-relaxed text-charcoal sm:flex-1">
                    Hands-on execution alongside your team — managing resistance and
                    course-correcting in real time.
                  </p>
                </li>
                <li className="flex flex-col gap-3 py-6 sm:flex-row sm:items-start sm:gap-6">
                  <div className="flex shrink-0 items-center gap-3 sm:w-56">
                    <span className="grid size-9 shrink-0 place-items-center rounded-full border border-gold text-[12px] font-semibold text-gold">
                      06
                    </span>
                    <h3 className="font-display text-base font-semibold text-ink">Sustain</h3>
                  </div>
                  <p className="text-[15px] leading-relaxed text-charcoal sm:flex-1">
                    30-60-90 day reviews and dashboards so growth continues after the engagement
                    ends.
                  </p>
                </li>
              </ol>
            </Reveal>
            <p className="mt-6 text-[15px] leading-relaxed text-charcoal">
              <a
                href="/gap360"
                className="inline-flex items-center gap-1.5 py-1 text-[12px] font-semibold uppercase tracking-[0.16em] text-gold-deep transition-colors hover:text-gold"
              >
                Explore the full GAP360™ methodology →
              </a>
            </p>
          </div>
        </section>
        <section className="section-y border-b border-ink-tint">
          <div className="shell">
            <Reveal as="section" className="max-w-3xl">
              <h2
                id="results"
                className="font-display text-3xl font-semibold tracking-tight text-ink md:text-[2.5rem] scroll-mt-24"
              >
                Results From Growth Consulting Engagements
              </h2>
              <p className="mt-4 text-[17px] leading-relaxed text-charcoal">
                Numbers matter more than adjectives. These growth outcomes come from SBC engagements
                and are published in full in our case studies.
              </p>
            </Reveal>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <Reveal as="section" className="flex flex-col border border-ink-tint bg-card p-6">
                <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-gold">
                  Manufacturing · Growth via delivery
                </p>
                <h3 className="mt-2 font-display text-lg font-semibold leading-snug text-ink">
                  Rubber &amp; Plastics Manufacturer
                </h3>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-charcoal">
                  On-time delivery improved from 61% to 84% and annual cost savings crossed ₹15 lakh
                  in 90 days — capacity that was previously lost to inefficiency was freed up for
                  growth.
                </p>
                <div className="mt-4">
                  <a
                    href="/case-studies/rubber-plastics-manufacturer"
                    className="inline-flex items-center gap-1.5 py-1 text-[12px] font-semibold uppercase tracking-[0.16em] text-gold-deep transition-colors hover:text-gold"
                  >
                    Read the case study →
                  </a>
                </div>
              </Reveal>
              <Reveal as="section" className="flex flex-col border border-ink-tint bg-card p-6">
                <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-gold">
                  Industrial · Growth via founder time
                </p>
                <h3 className="mt-2 font-display text-lg font-semibold leading-snug text-ink">
                  Industrial Components Manufacturer
                </h3>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-charcoal">
                  A 3-tier reporting structure with defined KRAs and KPIs freed 12 hours a week of
                  the founder’s time — time redirected from firefighting into growth decisions.
                </p>
                <div className="mt-4">
                  <a
                    href="/case-studies/industrial-components-manufacturer"
                    className="inline-flex items-center gap-1.5 py-1 text-[12px] font-semibold uppercase tracking-[0.16em] text-gold-deep transition-colors hover:text-gold"
                  >
                    Read the case study →
                  </a>
                </div>
              </Reveal>
              <Reveal as="section" className="flex flex-col border border-ink-tint bg-card p-6">
                <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-gold">
                  Trading &amp; Distribution · Growth via HR
                </p>
                <h3 className="mt-2 font-display text-lg font-semibold leading-snug text-ink">
                  Trading &amp; Distribution Business
                </h3>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-charcoal">
                  Attrition fell from 34% to 18% and the hiring cycle from 45 to 22 days, removing
                  the people bottleneck that was capping expansion.
                </p>
                <div className="mt-4">
                  <a
                    href="/case-studies/trading-distribution-business"
                    className="inline-flex items-center gap-1.5 py-1 text-[12px] font-semibold uppercase tracking-[0.16em] text-gold-deep transition-colors hover:text-gold"
                  >
                    Read the case study →
                  </a>
                </div>
              </Reveal>
              <Reveal as="section" className="flex flex-col border border-ink-tint bg-card p-6">
                <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-gold">
                  Feasibility · Market sizing for growth
                </p>
                <h3 className="mt-2 font-display text-lg font-semibold leading-snug text-ink">
                  Finance &amp; Operations Services Venture
                </h3>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-charcoal">
                  A 40-day independent feasibility study sized the Gujarat target market at about
                  5.6 lakh enterprises and returned a “Feasible” verdict before a rupee of growth
                  capital was committed.
                </p>
                <div className="mt-4">
                  <a
                    href="/case-studies/finance-operations-services-venture"
                    className="inline-flex items-center gap-1.5 py-1 text-[12px] font-semibold uppercase tracking-[0.16em] text-gold-deep transition-colors hover:text-gold"
                  >
                    Read the case study →
                  </a>
                </div>
              </Reveal>
            </div>
            <p className="mt-8 max-w-3xl text-[15px] leading-relaxed text-charcoal">
              {
                "SBC has also taken an industry-led institute from concept to a credentialed institution — see the "
              }
              <a
                href="/case-studies/winntus-institute-formwork-technology"
                className="font-semibold text-gold-deep transition-colors hover:text-gold"
              >
                Winntus Institute of Formwork Technology case study
              </a>
              {", or browse "}
              <a
                href="/case-studies"
                className="font-semibold text-gold-deep transition-colors hover:text-gold"
              >
                all SBC case studies
              </a>
              .
            </p>
            <Reveal as="section" className="mt-12">
              <h3 className="font-display text-xl font-semibold text-ink">What Clients Say</h3>
              <div className="mt-5 grid gap-5 md:grid-cols-3">
                <figure className="flex flex-col border border-ink-tint bg-card p-6">
                  <blockquote className="flex-1 font-display text-[17px] italic leading-relaxed text-ink">
                    “SBC didn’t just give us a report — they stayed with us through implementation.
                    Our operations improved dramatically within 3 months.”
                  </blockquote>
                  <figcaption className="mt-4 text-[12px] font-semibold uppercase tracking-[0.16em] text-gold">
                    MSME Founder, Ahmedabad
                  </figcaption>
                </figure>
                <figure className="flex flex-col border border-ink-tint bg-card p-6">
                  <blockquote className="flex-1 font-display text-[17px] italic leading-relaxed text-ink">
                    “Dr. Sagar’s guidance on institution setup saved us months of confusion. His
                    knowledge of AICTE compliance is unmatched.”
                  </blockquote>
                  <figcaption className="mt-4 text-[12px] font-semibold uppercase tracking-[0.16em] text-gold">
                    Director, Private University, Gujarat
                  </figcaption>
                </figure>
                <figure className="flex flex-col border border-ink-tint bg-card p-6">
                  <blockquote className="flex-1 font-display text-[17px] italic leading-relaxed text-ink">
                    “The feasibility study SBC delivered was thorough, data-driven and actionable.
                    It gave our board the confidence to proceed.”
                  </blockquote>
                  <figcaption className="mt-4 text-[12px] font-semibold uppercase tracking-[0.16em] text-gold">
                    CEO, Industry Body, India
                  </figcaption>
                </figure>
              </div>
            </Reveal>
            <Reveal
              as="section"
              className="mt-10 flex flex-col gap-4 border border-gold bg-gold-wash p-6 sm:flex-row sm:items-center cta-row"
            >
              <p className="font-display text-lg font-semibold leading-snug text-ink">
                Want growth like this in your business? Start with a free audit.
              </p>
              <a
                href="/book-free-audit"
                className="inline-flex items-center gap-2 bg-gold px-6 py-3 text-[13px] font-semibold uppercase tracking-[0.18em] text-paper transition-colors hover:bg-gold-tint shrink-0 justify-center"
              >
                Book Your Free Audit
                <ArrowRight className="size-4" />
              </a>
            </Reveal>
          </div>
        </section>
        <section className="section-y border-b border-ink-tint bg-ink-wash">
          <div className="shell">
            <Reveal as="section" className="max-w-3xl">
              <h2
                id="who-we-work-with"
                className="font-display text-3xl font-semibold tracking-tight text-ink md:text-[2.5rem] scroll-mt-24"
              >
                Who We Work With
              </h2>
              <p className="mt-4 text-[17px] leading-relaxed text-charcoal">
                SBC is based in Ahmedabad, Gujarat, and works with clients across Gujarat and India.
              </p>
            </Reveal>
            <Reveal as="section" className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="border border-ink-tint bg-card p-6">
                <div className="flex items-center gap-3">
                  <Building className="size-6 shrink-0 text-gold" />
                  <h3 className="font-display text-xl font-semibold text-ink">
                    Businesses Ready to Scale
                  </h3>
                </div>
                <ul className="mt-5 divide-y divide-ink-tint border-t border-ink-tint">
                  <li className="flex items-start gap-3 py-3 text-[15.5px] leading-relaxed text-charcoal">
                    <Factory className="mt-1 size-4 shrink-0 text-gold" />
                    <span>Manufacturing and industrial businesses ready to scale</span>
                  </li>
                  <li className="flex items-start gap-3 py-3 text-[15.5px] leading-relaxed text-charcoal">
                    <Store className="mt-1 size-4 shrink-0 text-gold" />
                    <span>Trading and distribution companies entering new markets</span>
                  </li>
                  <li className="flex items-start gap-3 py-3 text-[15.5px] leading-relaxed text-charcoal">
                    <Briefcase className="mt-1 size-4 shrink-0 text-gold" />
                    <span>Service businesses hitting a growth ceiling</span>
                  </li>
                  <li className="flex items-start gap-3 py-3 text-[15.5px] leading-relaxed text-charcoal">
                    <User className="mt-1 size-4 shrink-0 text-gold" />
                    <span>Founder-led businesses where growth still depends on one person</span>
                  </li>
                  <li className="flex items-start gap-3 py-3 text-[15.5px] leading-relaxed text-charcoal">
                    <Users className="mt-1 size-4 shrink-0 text-gold" />
                    <span>Businesses with hiring and accountability gaps</span>
                  </li>
                  <li className="flex items-start gap-3 py-3 text-[15.5px] leading-relaxed text-charcoal">
                    <Rocket className="mt-1 size-4 shrink-0 text-gold" />
                    <span>MSMEs planning expansion, new locations or new ventures</span>
                  </li>
                </ul>
              </div>
              <div className="border border-ink-tint bg-card p-6">
                <div className="flex items-center gap-3">
                  <Landmark className="size-6 shrink-0 text-gold" />
                  <h3 className="font-display text-xl font-semibold text-ink">
                    Institutions Planning Expansion
                  </h3>
                </div>
                <ul className="mt-5 divide-y divide-ink-tint border-t border-ink-tint">
                  <li className="flex items-start gap-3 py-3 text-[15.5px] leading-relaxed text-charcoal">
                    <GraduationCap className="mt-1 size-4 shrink-0 text-gold" />
                    <span>Universities and skill-development institutions scaling capacity</span>
                  </li>
                  <li className="flex items-start gap-3 py-3 text-[15.5px] leading-relaxed text-charcoal">
                    <Network className="mt-1 size-4 shrink-0 text-gold" />
                    <span>Industry associations and public sector undertakings</span>
                  </li>
                  <li className="flex items-start gap-3 py-3 text-[15.5px] leading-relaxed text-charcoal">
                    <MapPinned className="mt-1 size-4 shrink-0 text-gold" />
                    <span>Organisations evaluating a new market or location</span>
                  </li>
                  <li className="flex items-start gap-3 py-3 text-[15.5px] leading-relaxed text-charcoal">
                    <Lightbulb className="mt-1 size-4 shrink-0 text-gold" />
                    <span>Promoters evaluating a new venture before investing</span>
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>
        </section>
        <section className="section-y border-b border-ink-tint">
          <div className="shell">
            <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] md:items-center">
              <Reveal as="section" className="order-1">
                <div className="max-w-sm border-2 border-gold p-3 shadow-[12px_12px_0_0_var(--ink)]">
                  <img
                    src="/images/founder/sagar-burse-founder-sbc-ahmedabad.webp"
                    alt="Sagar Burse, PhD, Founder and Principal Consultant of Sagar Burse Consulting (SBC), a business growth consulting firm based in Ahmedabad"
                    width={768}
                    height={768}
                    loading="lazy"
                    decoding="async"
                    className="aspect-[4/5] w-full object-cover"
                  />
                </div>
              </Reveal>
              <Reveal as="section" className="order-2">
                <h2
                  id="founder"
                  className="font-display text-3xl font-semibold tracking-tight text-ink md:text-[2.5rem] scroll-mt-24"
                >
                  About the Founder: Sagar Burse, PhD
                </h2>
                <p className="mt-2 font-display text-lg italic text-ink-soft">
                  Founder &amp; Principal Consultant, Sagar Burse Consulting (SBC)
                </p>
                <p className="mt-4 text-[17px] leading-relaxed text-charcoal">
                  Sagar Burse, PhD leads every growth engagement at SBC personally, starting from
                  the free business systems audit. With 8+ years of experience across business
                  consulting, institutional setup, skill development and regulatory compliance, he
                  brings rare multi-domain depth to growth planning.
                </p>
                <p className="mt-4 text-[17px] leading-relaxed text-charcoal">
                  His MSME growth engagements include a rubber and plastics manufacturer, an
                  industrial components manufacturer and a trading and distribution business,
                  alongside institutional growth work such as a skill-focused public university in
                  Gujarat and a Centre of Excellence in Mining for a Gujarat PSU.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex gap-2 text-[15.5px] leading-relaxed text-charcoal">
                    <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-gold-deep" />
                    <span>PhD in Management — GLS University, Ahmedabad</span>
                  </li>
                  <li className="flex gap-2 text-[15.5px] leading-relaxed text-charcoal">
                    <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-gold-deep" />
                    <span>MBA in Marketing — Gujarat University</span>
                  </li>
                  <li className="flex gap-2 text-[15.5px] leading-relaxed text-charcoal">
                    <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-gold-deep" />
                    <span>UGC-NET and GSET (Management) — qualified 2019</span>
                  </li>
                  <li className="flex gap-2 text-[15.5px] leading-relaxed text-charcoal">
                    <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-gold-deep" />
                    <span>7+ published research papers, with SEM/AMOS expertise</span>
                  </li>
                </ul>
                <p className="mt-5 font-display text-lg italic leading-snug text-ink">
                  “We don’t leave after the strategy deck. We stay until growth is measurable.”
                </p>
                <div className="mt-6 flex flex-wrap gap-4">
                  <a
                    href="/founder"
                    className="inline-flex items-center gap-1.5 py-1 text-[12px] font-semibold uppercase tracking-[0.16em] text-gold-deep transition-colors hover:text-gold"
                  >
                    View Full Profile →
                  </a>
                  <a
                    href="https://www.linkedin.com/in/drsagarburse/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 py-1 text-[12px] font-semibold uppercase tracking-[0.16em] text-gold-deep transition-colors hover:text-gold"
                  >
                    LinkedIn →
                  </a>
                </div>
                <Reveal
                  as="section"
                  className="mt-10 flex flex-col gap-4 border border-gold bg-gold-wash p-6 sm:flex-row sm:items-center cta-row"
                >
                  <p className="font-display text-lg font-semibold leading-snug text-ink">
                    Talk to the founder directly. The first 45 minutes are free.
                  </p>
                  <a
                    href="/book-free-audit"
                    className="inline-flex items-center gap-2 bg-gold px-6 py-3 text-[13px] font-semibold uppercase tracking-[0.18em] text-paper transition-colors hover:bg-gold-tint shrink-0 justify-center"
                  >
                    Book Your Free Audit
                    <ArrowRight className="size-4" />
                  </a>
                </Reveal>
              </Reveal>
            </div>
          </div>
        </section>
        <section className="section-y border-b border-ink-tint bg-ink-wash">
          <div className="shell">
            <style>
              .faq-item summary&#123;list-style:none&#125;.faq-item
              summary::-webkit-details-marker&#123;display:none&#125;.faq-item
              .faq-chev&#123;transition:transform .2s&#125;.faq-item[open]
              .faq-chev&#123;transform:rotate(180deg)&#125;.faq-item
              summary:focus-visible&#123;outline:2px solid
              currentColor;outline-offset:-2px&#125;main
              h2[id]&#123;scroll-margin-top:8rem&#125;@media
              (min-width:640px)&#123;.cta-row&#123;justify-content:space-between&#125;&#125;@media
              (min-width:1024px)&#123;.sticky-col&#123;position:sticky;top:8rem&#125;&#125;
            </style>
            <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] lg:items-start">
              <Reveal as="section" className="sticky-col">
                <h2
                  id="faq"
                  className="font-display text-3xl font-semibold tracking-tight text-ink md:text-[2.5rem] scroll-mt-24"
                >
                  Frequently Asked Questions About Business Growth Consulting
                </h2>
                <p className="mt-4 text-[17px] leading-relaxed text-charcoal">
                  Tap a question to see the answer.
                </p>
              </Reveal>
              <div className="space-y-4">
                <details name="faq" className="faq-item border border-ink-tint bg-card">
                  <summary className="flex cursor-pointer items-center justify-between gap-4 p-5">
                    <h3 className="font-display text-lg font-semibold leading-snug text-ink">
                      What does a business growth consulting firm do?
                    </h3>
                    <ChevronDown className="faq-chev size-4 shrink-0 text-gold" />
                  </summary>
                  <div className="border-t border-ink-tint p-5">
                    <p className="text-[15.5px] leading-relaxed text-charcoal">
                      A business growth consulting firm studies where a business is losing growth —
                      through weak systems, unclear roles, cash flow strain or missing data — and
                      builds a plan to fix it. The best firms combine strategic planning with
                      hands-on implementation, so the growth plan actually gets executed rather than
                      sitting in a report.
                    </p>
                  </div>
                </details>
                <details name="faq" className="faq-item border border-ink-tint bg-card">
                  <summary className="flex cursor-pointer items-center justify-between gap-4 p-5">
                    <h3 className="font-display text-lg font-semibold leading-snug text-ink">
                      How is business growth consulting different from general strategy consulting?
                    </h3>
                    <ChevronDown className="faq-chev size-4 shrink-0 text-gold" />
                  </summary>
                  <div className="border-t border-ink-tint p-5">
                    <p className="text-[15.5px] leading-relaxed text-charcoal">
                      General strategy consulting often ends with a strategy document. Business
                      growth consulting, as SBC practices it, starts with a structured diagnostic
                      (GAP360™), sets measurable growth metrics, and stays engaged through
                      implementation until those metrics move — revenue, on-time delivery,
                      attrition, hiring speed or cost.
                    </p>
                  </div>
                </details>
                <details name="faq" className="faq-item border border-ink-tint bg-card">
                  <summary className="flex cursor-pointer items-center justify-between gap-4 p-5">
                    <h3 className="font-display text-lg font-semibold leading-snug text-ink">
                      How do I choose the right growth consulting firm?
                    </h3>
                    <ChevronDown className="faq-chev size-4 shrink-0 text-gold" />
                  </summary>
                  <div className="border-t border-ink-tint p-5">
                    <p className="text-[15.5px] leading-relaxed text-charcoal">
                      Compare firms on six points: whether they implement or only advise, whether
                      they run a growth diagnostic before proposing a plan, proof with measurable
                      metrics, relevant sector experience, senior involvement in your engagement,
                      and a low-risk first step such as a free audit.
                    </p>
                  </div>
                </details>
                <details name="faq" className="faq-item border border-ink-tint bg-card">
                  <summary className="flex cursor-pointer items-center justify-between gap-4 p-5">
                    <h3 className="font-display text-lg font-semibold leading-snug text-ink">
                      What makes SBC different from other business growth consulting firms?
                    </h3>
                    <ChevronDown className="faq-chev size-4 shrink-0 text-gold" />
                  </summary>
                  <div className="border-t border-ink-tint p-5">
                    <p className="text-[15.5px] leading-relaxed text-charcoal">
                      SBC is implementation-led: every growth engagement starts with a GAP360™
                      diagnostic, not a template, and we stay with your team through execution until
                      growth is measurable. The founder, Sagar Burse, PhD, is personally involved
                      from the free audit onward.
                    </p>
                  </div>
                </details>
                <details name="faq" className="faq-item border border-ink-tint bg-card">
                  <summary className="flex cursor-pointer items-center justify-between gap-4 p-5">
                    <h3 className="font-display text-lg font-semibold leading-snug text-ink">
                      Which industries does SBC’s growth consulting serve?
                    </h3>
                    <ChevronDown className="faq-chev size-4 shrink-0 text-gold" />
                  </summary>
                  <div className="border-t border-ink-tint p-5">
                    <p className="text-[15.5px] leading-relaxed text-charcoal">
                      SBC works with MSMEs in manufacturing, trading, distribution and services, as
                      well as universities, skill-development institutions, industry associations
                      and public sector undertakings. Published case studies include a rubber and
                      plastics manufacturer, an industrial components manufacturer and a trading and
                      distribution business.
                    </p>
                  </div>
                </details>
                <details name="faq" className="faq-item border border-ink-tint bg-card">
                  <summary className="flex cursor-pointer items-center justify-between gap-4 p-5">
                    <h3 className="font-display text-lg font-semibold leading-snug text-ink">
                      How much do business growth consulting services cost?
                    </h3>
                    <ChevronDown className="faq-chev size-4 shrink-0 text-gold" />
                  </summary>
                  <div className="border-t border-ink-tint p-5">
                    <p className="text-[15.5px] leading-relaxed text-charcoal">
                      Cost depends on the scope, duration and team required, so SBC does not publish
                      a fixed price list. Every engagement begins with a free 45-minute business
                      systems audit, and any further work is scoped with defined growth milestones
                      so you know exactly what you are paying for.
                    </p>
                  </div>
                </details>
                <details name="faq" className="faq-item border border-ink-tint bg-card">
                  <summary className="flex cursor-pointer items-center justify-between gap-4 p-5">
                    <h3 className="font-display text-lg font-semibold leading-snug text-ink">
                      How long does a growth consulting engagement take?
                    </h3>
                    <ChevronDown className="faq-chev size-4 shrink-0 text-gold" />
                  </summary>
                  <div className="border-t border-ink-tint p-5">
                    <p className="text-[15.5px] leading-relaxed text-charcoal">
                      It depends on the constraint. SBC’s published case studies range from a 40-day
                      feasibility study and a 60-day systems build to a 90-day full
                      delivery-improvement cycle and a six-month HR and growth-systems overhaul. A
                      full GAP360™ diagnostic typically takes 2–4 weeks.
                    </p>
                  </div>
                </details>
                <details name="faq" className="faq-item border border-ink-tint bg-card">
                  <summary className="flex cursor-pointer items-center justify-between gap-4 p-5">
                    <h3 className="font-display text-lg font-semibold leading-snug text-ink">
                      What is the GAP360™ growth method?
                    </h3>
                    <ChevronDown className="faq-chev size-4 shrink-0 text-gold" />
                  </summary>
                  <div className="border-t border-ink-tint p-5">
                    <p className="text-[15.5px] leading-relaxed text-charcoal">
                      GAP360™ (Growth Acceleration Pathway 360°) is SBC’s flagship growth framework.
                      It examines operations, systems, people, process and strategy, and moves
                      through six phases — Diagnose, Align, Analyse, Design, Implement and Sustain —
                      with SBC working alongside your team until growth is delivered.
                    </p>
                  </div>
                </details>
                <details name="faq" className="faq-item border border-ink-tint bg-card">
                  <summary className="flex cursor-pointer items-center justify-between gap-4 p-5">
                    <h3 className="font-display text-lg font-semibold leading-snug text-ink">
                      Can a small business or MSME benefit from growth consulting?
                    </h3>
                    <ChevronDown className="faq-chev size-4 shrink-0 text-gold" />
                  </summary>
                  <div className="border-t border-ink-tint p-5">
                    <p className="text-[15.5px] leading-relaxed text-charcoal">
                      Yes. SBC’s growth consulting is built for founder-led MSMEs, including
                      businesses with 25–60 employees where the owner is still involved in every
                      decision. Typical outcomes include documented SOPs, clear KPIs, freed-up
                      founder time and measurable improvements in delivery, attrition or margin.
                    </p>
                  </div>
                </details>
                <details name="faq" className="faq-item border border-ink-tint bg-card">
                  <summary className="flex cursor-pointer items-center justify-between gap-4 p-5">
                    <h3 className="font-display text-lg font-semibold leading-snug text-ink">
                      Does SBC serve businesses outside Ahmedabad?
                    </h3>
                    <ChevronDown className="faq-chev size-4 shrink-0 text-gold" />
                  </summary>
                  <div className="border-t border-ink-tint p-5">
                    <p className="text-[15.5px] leading-relaxed text-charcoal">
                      Yes. SBC is headquartered in Ahmedabad, Gujarat, but serves MSMEs,
                      institutions and government bodies across India, including engagements with a
                      national scope such as a skill-development institute. Growth diagnostics and
                      strategy sessions can be run remotely, with implementation support scoped to
                      your location.
                    </p>
                  </div>
                </details>
                <details name="faq" className="faq-item border border-ink-tint bg-card">
                  <summary className="flex cursor-pointer items-center justify-between gap-4 p-5">
                    <h3 className="font-display text-lg font-semibold leading-snug text-ink">
                      How can I contact SBC or book a free consultation?
                    </h3>
                    <ChevronDown className="faq-chev size-4 shrink-0 text-gold" />
                  </summary>
                  <div className="border-t border-ink-tint p-5">
                    <p className="text-[15.5px] leading-relaxed text-charcoal">
                      Book the free business systems audit at sbcgroup.in/book-free-audit, call +91
                      8128310116 or email consulting@sbcgroup.in. SBC typically responds within 24
                      hours on business days.
                    </p>
                  </div>
                </details>
              </div>
            </div>
          </div>
        </section>
        <section
          id="book"
          aria-labelledby="cta-heading"
          className="section-y border-b border-ink-tint bg-gold-wash"
        >
          <div className="shell">
            <Reveal className="mx-auto max-w-3xl text-center">
              <h2
                id="cta-heading"
                className="font-display text-3xl font-semibold leading-tight tracking-tight text-ink md:text-4xl"
              >
                Book Your Free Business Systems Audit
              </h2>
              <p className="mt-4 text-[17px] leading-relaxed text-charcoal">
                A free 45-minute conversation with Sagar Burse, PhD. No commitment. No sales pitch.
              </p>
              <ol className="mt-6 grid gap-3 text-left sm:grid-cols-3">
                <li className="border border-ink-tint bg-paper p-4">
                  <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-gold">
                    First 10 minutes
                  </p>
                  <p className="mt-1 text-[14px] leading-snug text-charcoal">
                    We listen to understand your business
                  </p>
                </li>
                <li className="border border-ink-tint bg-paper p-4">
                  <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-gold">
                    Next 20 minutes
                  </p>
                  <p className="mt-1 text-[14px] leading-snug text-charcoal">
                    We identify your two or three biggest growth constraints
                  </p>
                </li>
                <li className="border border-ink-tint bg-paper p-4">
                  <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-gold">
                    Final 15 minutes
                  </p>
                  <p className="mt-1 text-[14px] leading-snug text-charcoal">
                    You get an honest assessment and a path forward
                  </p>
                </li>
              </ol>
              <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
                <a
                  href="/book-free-audit"
                  className="inline-flex items-center gap-2 bg-gold px-8 py-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-paper transition-colors hover:bg-gold-tint"
                >
                  Book Your Free Audit
                  <ArrowRight className="size-4" />
                </a>
                <a
                  href="https://wa.me/918128310116"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 border border-ink-tint px-8 py-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-ink transition-colors hover:border-gold hover:text-gold"
                >
                  <MessageCircle className="size-4" />
                  Chat on WhatsApp
                </a>
              </div>
              <p className="mt-5 text-[14px] leading-relaxed text-charcoal">
                {"Prefer to talk first? Call "}
                <a
                  href="tel:+918128310116"
                  className="font-semibold text-gold-deep transition-colors hover:text-gold"
                >
                  +91 8128310116
                </a>
                {" or email "}
                <a
                  href="mailto:consulting@sbcgroup.in"
                  className="font-semibold text-gold-deep transition-colors hover:text-gold"
                >
                  consulting@sbcgroup.in
                </a>
                .
              </p>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
