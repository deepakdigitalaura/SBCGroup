import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Briefcase,
  Building,
  ChartColumn,
  ChevronDown,
  CircleCheckBig,
  ClipboardCheck,
  Clock,
  EyeOff,
  Factory,
  FileQuestionMark,
  GraduationCap,
  Landmark,
  Lightbulb,
  MapPinned,
  MessageCircle,
  Network,
  RefreshCw,
  Repeat,
  Rocket,
  Route as RouteIcon,
  Search,
  Shuffle,
  Store,
  User,
  UserPlus,
  Workflow,
} from "lucide-react";
import { Header } from "@/components/sbc/Header";
import { Footer } from "@/components/sbc/Footer";
import { Reveal } from "@/components/sbc/primitives";
import { StatBlock } from "@/components/sbc/StatBlock";
import { PracticeAreaCard } from "@/components/sbc/PracticeAreaCard";
import { Breadcrumbs } from "@/components/sbc/Breadcrumbs";
import { JsonLd } from "@/components/sbc/JsonLd";

const title = "Business Process Improvement Consultant: The Complete Guide | SBC";
const description =
  "See how SBC, a business process improvement consultant, maps workflows, fixes SOPs and cuts turnaround time for MSMEs across India. Book a free audit today.";
const robots = "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";
const url = "https://sbcgroup.in/business-process-improvement";

export const Route = createFileRoute("/business-process-improvement")({
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
  component: BusinessProcessImprovement,
});

const faqs: [string, string][] = [
  [
    "What does a business process improvement consultant do?",
    "A business process improvement consultant studies how work actually flows through a business — including handoffs, delays and rework — and redesigns it to cut turnaround time, reduce errors and remove dependence on any one person. The best consultants stay to implement the new process, not just document the old one.",
  ],
  [
    "How is business process improvement different from business process management?",
    "Business process management (BPM) is the ongoing discipline of monitoring and governing processes. Business process improvement is the project that gets a specific process — say, order fulfilment or hiring — to a better state. SBC combines both: a process improvement project that leaves you with a BPM system (SOPs, KPIs, dashboards) to sustain it.",
  ],
  [
    "How do I choose the right process improvement consulting firm?",
    "Compare consultants on six points: whether they map your current process before proposing changes, whether the SOPs they write are usable day to day, proof with measurable metrics, relevant sector experience, hands-on implementation support, and a low-risk first step such as a free audit.",
  ],
  [
    "What makes SBC different from other process improvement consulting firms?",
    "SBC is implementation-led: every process improvement engagement starts with a GAP360™ diagnostic, not a template, and we stay with your team through rollout and training until the new process is measurable. Sagar Burse, PhD is personally involved from the free audit onward.",
  ],
  [
    "Which industries does SBC’s process improvement consulting serve?",
    "SBC works with MSMEs in manufacturing, trading, distribution and services, as well as universities, skill-development institutions, industry associations and public sector undertakings. Published case studies include a rubber and plastics manufacturer, an industrial components manufacturer and a trading and distribution business.",
  ],
  [
    "How much do business process improvement consulting services cost?",
    "Cost depends on how many processes are in scope and how long implementation takes, so SBC does not publish a fixed price list. Every engagement begins with a free 45-minute business systems audit, and further work is scoped with defined milestones so you know exactly what you are paying for.",
  ],
  [
    "How long does a process improvement engagement take?",
    "It depends on the process. SBC’s published case studies range from a 60-day systems build to a 90-day delivery-improvement cycle and a six-month HR and process overhaul. A full GAP360™ process diagnostic typically takes 2–4 weeks.",
  ],
  [
    "What is the GAP360™ method used for process improvement?",
    "GAP360™ (Growth Acceleration Pathway 360°) is SBC’s structured framework for fixing broken processes. It examines the workflow, systems, people and data behind a process, and moves through six phases — Diagnose, Align, Analyse, Design, Implement and Sustain — with SBC working alongside your team until the process holds.",
  ],
  [
    "Can a small business or MSME benefit from process improvement consulting?",
    "Yes. SBC’s process improvement work is built for founder-led MSMEs, including businesses with 25–60 employees where processes still run on tribal knowledge. Typical outcomes include documented SOPs, defined KPIs, and measurable improvements in turnaround time, rework rate or on-time delivery.",
  ],
  [
    "Does SBC provide business process management consultant services outside Ahmedabad?",
    "Yes. SBC is headquartered in Ahmedabad, Gujarat, but serves MSMEs, institutions and government bodies across India. Process diagnostics and workflow design sessions can be run remotely, with implementation and training support scoped to your location.",
  ],
  [
    "How can I contact SBC or book a free consultation?",
    "Book the free business systems audit at sbcgroup.in/book-free-audit, call +91 8128310116 or email consulting@sbcgroup.in. SBC typically responds within 24 hours on business days.",
  ],
];

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://sbcgroup.in/business-process-improvement#webpage",
  url: "https://sbcgroup.in/business-process-improvement",
  name: "Business Process Improvement Consultant: The Complete Guide | SBC",
  description:
    "See how SBC, a business process improvement consultant, maps workflows, fixes SOPs and cuts turnaround time for MSMEs across India. Book a free audit today.",
  inLanguage: "en-IN",
  isPartOf: {
    "@type": "WebSite",
    name: "Sagar Burse Consulting (SBC)",
    url: "https://sbcgroup.in",
  },
  about: {
    "@type": "Thing",
    name: "Business process improvement",
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
    "Sagar Burse Consulting (SBC) is a business process improvement consultant headquartered in Ahmedabad, Gujarat, serving MSMEs and institutions across India with GAP360™ process diagnostics, SOP design and implementation.",
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
    "Business process improvement",
    "Business process management",
    "Process improvement consulting",
    "SOP design",
    "MSME consulting",
    "Business growth consulting",
    "GAP360 gap analysis",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Business process improvement services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Process Mapping & SOP Design",
          description:
            "We map how work actually flows today, remove non-value steps, and document SOPs your team will follow — not just file away.",
          url: "https://sbcgroup.in/msme-consulting",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "GAP360™ Process Diagnostics",
          description:
            "A structured audit that finds exactly where handoffs break down, rework happens, or turnaround time is being lost.",
          url: "https://sbcgroup.in/gap360",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Process Performance Research",
          description:
            "Benchmarking and feasibility studies that validate a process redesign or new workflow before you commit to rolling it out.",
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

function BusinessProcessImprovement() {
  return (
    <div className="min-h-screen bg-paper">
      <JsonLd data={webPageSchema} />
      <JsonLd data={businessSchema} />
      <JsonLd data={faqSchema} />
      <Header />
      <Breadcrumbs trail={[{ label: "Business Process Improvement" }]} dark />
      <main>
        <section className="section-y border-b border-ink-tint bg-ink">
          <div className="shell">
            <Reveal as="section" className="max-w-3xl">
              <h1 className="font-display text-4xl font-semibold tracking-tight text-paper md:text-[3rem]">
                Business Process Improvement Consultant
              </h1>
              <p className="mt-5 text-[17px] leading-relaxed text-paper/80">
                Sagar Burse Consulting (SBC) is an implementation-led business process improvement
                consultant that helps MSMEs and institutions fix broken workflows, cut turnaround
                time and build SOPs their teams actually follow — across Gujarat and India.
              </p>
              <p className="mt-4 text-[17px] leading-relaxed text-paper/80">
                This guide explains how business process improvement consulting works, how it
                differs from business process management, and how SBC turns a broken process into a
                documented, efficient one.
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
                  Business Process Improvement: The Short Answer
                </h2>
              </div>
              <div>
                <p className="mt-4 text-[17px] leading-relaxed text-charcoal">
                  A good process improvement consultant starts by mapping how work actually flows
                  today — not by handing you a template. The right process improvement consulting
                  firm finds exactly where time, quality or consistency is being lost, redesigns the
                  workflow, and writes SOPs your team will actually use. Start with a low-risk first
                  step, such as a free business systems audit, before committing to a long
                  engagement.
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
                        Signs you need process improvement
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
                        The consultant
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
                    Consultant
                  </dt>
                  <dd className="mt-2 text-[15px] leading-relaxed text-charcoal">
                    Sagar Burse, PhD — Founder &amp; Principal Consultant
                  </dd>
                </div>
                <div className="border border-ink-tint bg-card p-5">
                  <dt className="text-[12px] font-semibold uppercase tracking-[0.16em] text-gold">
                    Service Divisions
                  </dt>
                  <dd className="mt-2 text-[15px] leading-relaxed text-charcoal">
                    MSME Consulting, Strategic Research &amp; Feasibility, GAP360™ Process
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
                Signs Your Business Needs Process Improvement
              </h2>
              <p className="mt-4 text-[17px] leading-relaxed text-charcoal">
                Most owners bring in a process improvement consultant only after these signs have
                repeated for months. If two or more sound familiar, a structured process audit will
                show exactly where the breakdown is happening.
              </p>
            </Reveal>
            <Reveal as="section" className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              <article className="border border-ink-tint bg-card p-6">
                <Clock className="size-6 text-gold" />
                <h3 className="mt-4 font-display text-lg font-semibold leading-snug text-ink">
                  Turnaround time keeps slipping
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-charcoal">
                  Jobs that used to take a fixed number of days now regularly run late, and no one
                  can say exactly where the time is being lost.
                </p>
              </article>
              <article className="border border-ink-tint bg-card p-6">
                <Repeat className="size-6 text-gold" />
                <h3 className="mt-4 font-display text-lg font-semibold leading-snug text-ink">
                  The same errors keep repeating
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-charcoal">
                  Rework, corrections and quality complaints keep coming back for the same reasons,
                  no matter how many times the team is reminded.
                </p>
              </article>
              <article className="border border-ink-tint bg-card p-6">
                <Shuffle className="size-6 text-gold" />
                <h3 className="mt-4 font-display text-lg font-semibold leading-snug text-ink">
                  Output depends on who is doing the work
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-charcoal">
                  The same task takes a different amount of time and comes out differently depending
                  on which employee or shift handles it.
                </p>
              </article>
              <article className="border border-ink-tint bg-card p-6">
                <FileQuestionMark className="size-6 text-gold" />
                <h3 className="mt-4 font-display text-lg font-semibold leading-snug text-ink">
                  There are no written SOPs
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-charcoal">
                  Process knowledge lives in a few people’s heads. If they are on leave or leave the
                  company, the process breaks.
                </p>
              </article>
              <article className="border border-ink-tint bg-card p-6">
                <EyeOff className="size-6 text-gold" />
                <h3 className="mt-4 font-display text-lg font-semibold leading-snug text-ink">
                  No one can see where the process stands
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-charcoal">
                  You cannot tell, at a glance, whether an order or a task is on track, stuck, or
                  already late.
                </p>
              </article>
              <article className="border border-ink-tint bg-card p-6">
                <UserPlus className="size-6 text-gold" />
                <h3 className="mt-4 font-display text-lg font-semibold leading-snug text-ink">
                  New hires take too long to become productive
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-charcoal">
                  Every new employee has to be walked through the process personally because nothing
                  is documented step by step.
                </p>
              </article>
            </Reveal>
            <Reveal
              as="section"
              className="mt-10 flex flex-col gap-4 border border-gold bg-gold-wash p-6 sm:flex-row sm:items-center cta-row"
            >
              <p className="font-display text-lg font-semibold leading-snug text-ink">
                Recognise two or more? Find your process bottlenecks in a free 45-minute audit.
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
                  What Is Business Process Improvement Consulting?
                </h2>
              </div>
              <div>
                <p className="text-[17px] leading-relaxed text-charcoal">
                  In practice, it is advisory work focused on one outcome: making a specific
                  business process faster, more consistent and less dependent on any one person —
                  whether that process is order fulfilment, hiring, production or reporting. It
                  combines process mapping with the SOPs and training needed to make the new way of
                  working stick.
                </p>
                <p className="mt-4 text-[17px] leading-relaxed text-charcoal">
                  Business process improvement consulting services typically combine some of the
                  following:
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex gap-2 text-[15.5px] leading-relaxed text-charcoal">
                    <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-gold-deep" />
                    <span>
                      Current-state process mapping and gap analysis that show where time and
                      quality are actually being lost
                    </span>
                  </li>
                  <li className="flex gap-2 text-[15.5px] leading-relaxed text-charcoal">
                    <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-gold-deep" />
                    <span>Root-cause analysis of delays, rework and inconsistent output</span>
                  </li>
                  <li className="flex gap-2 text-[15.5px] leading-relaxed text-charcoal">
                    <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-gold-deep" />
                    <span>
                      Standard operating procedures (SOPs) written for how the team will really use
                      them
                    </span>
                  </li>
                  <li className="flex gap-2 text-[15.5px] leading-relaxed text-charcoal">
                    <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-gold-deep" />
                    <span>
                      KRA/KPI frameworks so process performance can be tracked, not just assumed
                    </span>
                  </li>
                  <li className="flex gap-2 text-[15.5px] leading-relaxed text-charcoal">
                    <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-gold-deep" />
                    <span>
                      Business process management systems and dashboards to sustain the fix
                    </span>
                  </li>
                  <li className="flex gap-2 text-[15.5px] leading-relaxed text-charcoal">
                    <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-gold-deep" />
                    <span>
                      Hands-on implementation and training until the new process is adopted
                    </span>
                  </li>
                </ul>
                <p className="mt-4 text-[17px] leading-relaxed text-charcoal">
                  {
                    "Business process improvement is closely related to business process management — BPM is the ongoing discipline of monitoring and governing a process, while improvement is the project that gets it to a better state in the first place. Our article on "
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
                  {" explains why process fixes without implementation rarely last."}
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
                How to Choose a Business Process Improvement Consultant
              </h2>
              <p className="mt-4 text-[17px] leading-relaxed text-charcoal">
                Process improvement consulting firms all promise efficiency. Use these six criteria
                to compare what they actually deliver — including SBC.
              </p>
            </Reveal>
            <Reveal as="section" className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              <article className="border border-ink-tint bg-card p-6 transition-colors hover:border-gold">
                <span className="grid size-9 shrink-0 place-items-center rounded-full border border-gold text-[12px] font-semibold text-gold">
                  01
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold leading-snug text-ink">
                  Process mapping before redesign
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-charcoal">
                  A good consultant maps how work actually flows today — including the workarounds —
                  before proposing any changes. Ask to see how they document a current-state
                  process.
                </p>
              </article>
              <article className="border border-ink-tint bg-card p-6 transition-colors hover:border-gold">
                <span className="grid size-9 shrink-0 place-items-center rounded-full border border-gold text-[12px] font-semibold text-gold">
                  02
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold leading-snug text-ink">
                  SOPs your team will actually use
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-charcoal">
                  Ask for a sample SOP. It should cover decisions and exceptions, not just a
                  flowchart no one opens after week one.
                </p>
              </article>
              <article className="border border-ink-tint bg-card p-6 transition-colors hover:border-gold">
                <span className="grid size-9 shrink-0 place-items-center rounded-full border border-gold text-[12px] font-semibold text-gold">
                  03
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold leading-snug text-ink">
                  Proof with process metrics
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-charcoal">
                  Ask for before-and-after numbers — turnaround time, rework rate, on-time delivery,
                  error rate — not just general testimonials.
                </p>
              </article>
              <article className="border border-ink-tint bg-card p-6 transition-colors hover:border-gold">
                <span className="grid size-9 shrink-0 place-items-center rounded-full border border-gold text-[12px] font-semibold text-gold">
                  04
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold leading-snug text-ink">
                  Hands-on implementation support
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-charcoal">
                  Find out who trains your team on the new process, and for how long after go-live,
                  before the consultant moves on.
                </p>
              </article>
              <article className="border border-ink-tint bg-card p-6 transition-colors hover:border-gold">
                <span className="grid size-9 shrink-0 place-items-center rounded-full border border-gold text-[12px] font-semibold text-gold">
                  05
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold leading-snug text-ink">
                  Sector-relevant experience
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-charcoal">
                  A process bottleneck in a factory looks different from one in a trading office.
                  Check the firm has fixed processes like yours before.
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
                  Prefer a firm that lets you test the fit with a free audit or scoped diagnostic
                  before you commit to a long engagement.
                </p>
              </article>
            </Reveal>
            <p className="mt-8 max-w-3xl text-[15px] leading-relaxed text-charcoal">
              {
                "Hold every business process management consultant you shortlist to the same six criteria, including us. If you want to see how SBC answers each one, "
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
                  Why SBC for Process Improvement
                </h2>
              </div>
              <div>
                <p className="text-[17px] leading-relaxed text-charcoal">
                  SBC was founded in Ahmedabad, Gujarat by Sagar Burse, PhD for businesses that need
                  more than an SOP document. Too many MSMEs receive a process manual that never
                  changes how work actually gets done. We work differently: we redesign the workflow
                  first, then write the SOP, then stay until the team is actually following it.
                </p>
                <p className="mt-4 text-[17px] leading-relaxed text-charcoal">
                  {
                    "Today SBC’s process improvement work draws on all four practice divisions — MSME consulting, institution building, strategic research and policy advisory — serving founders and institutional leaders across Gujarat and India. Read more about "
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
                  icon={Search}
                  title="Diagnostic-Led, Not Template-Led"
                  description="Every engagement starts with a structured GAP360™ process audit of how work actually flows — not a generic SOP template."
                />
              </Reveal>
              <Reveal as="section">
                <PracticeAreaCard
                  icon={Workflow}
                  title="We Redesign the Workflow First"
                  description="SOPs are written only after the underlying workflow has been fixed — not to describe a broken process more neatly."
                />
              </Reveal>
              <Reveal as="section">
                <PracticeAreaCard
                  icon={ClipboardCheck}
                  title="SOPs Your Team Will Actually Follow"
                  description="Every SOP covers real decisions and exceptions, built with the people who will use it day to day."
                />
              </Reveal>
              <Reveal as="section">
                <PracticeAreaCard
                  icon={RefreshCw}
                  title="We Stay Until It Sticks"
                  description="We do not hand over a document and leave. We stay through rollout, training and the first review cycle."
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
                Process Improvement Services We Offer
              </h2>
              <p className="mt-4 text-[17px] leading-relaxed text-charcoal">
                Three of SBC’s practice divisions cover the most common reasons a business hires a
                process improvement consultant.
              </p>
            </Reveal>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              <Reveal as="section" className="h-full">
                <PracticeAreaCard
                  icon={RouteIcon}
                  title="Process Mapping & SOP Design"
                  description="We map how work actually flows today, remove non-value steps, and document SOPs your team will follow — not just file away."
                  href="/msme-consulting"
                />
              </Reveal>
              <Reveal as="section" className="h-full">
                <PracticeAreaCard
                  icon={Search}
                  title="GAP360™ Process Diagnostics"
                  description="A structured audit that finds exactly where handoffs break down, rework happens, or turnaround time is being lost."
                  href="/gap360"
                />
              </Reveal>
              <Reveal as="section" className="h-full">
                <PracticeAreaCard
                  icon={ChartColumn}
                  title="Process Performance Research"
                  description="Benchmarking and feasibility studies that validate a process redesign or new workflow before you commit to rolling it out."
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
                The GAP360™ Process Improvement Method
              </h2>
              <p className="mt-4 text-[17px] leading-relaxed text-charcoal">
                GAP360™ (Growth Acceleration Pathway 360°) is SBC’s structured framework for fixing
                broken processes, developed by Sagar Burse, PhD through on-ground work with Indian
                MSMEs. It examines the workflow, systems, people and data behind a process, and
                moves every engagement through the same six phases.
              </p>
            </Reveal>
            <Reveal as="section" className="mt-8">
              <img
                src="/images/gap360-business-process-improvement-method-sbc.webp"
                alt="GAP360 six-phase business process improvement method: Diagnose, Align, Analyse, Design, Implement, Sustain"
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
                    A structured audit of the process end to end — every handoff, delay and rework
                    loop — to find exactly where time and quality are being lost.
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
                    Findings are reviewed with leadership and the people who run the process, so
                    everyone agrees on what to fix first.
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
                    Root-cause mapping of every bottleneck, ranked by how much turnaround time or
                    rework it is actually costing.
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
                    A redesigned workflow, SOPs and KRA/KPI checkpoints built for adoption by your
                    team, not a document that sits unread.
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
                    Hands-on rollout and training alongside your team — managing resistance and
                    adjusting the process in real time.
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
                    Process audits and dashboards on a 30-60-90 day cycle so the new process holds
                    after the engagement ends.
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
                Results From Process Improvement Engagements
              </h2>
              <p className="mt-4 text-[17px] leading-relaxed text-charcoal">
                Numbers matter more than adjectives. These process outcomes come from SBC
                engagements and are published in full in our case studies.
              </p>
            </Reveal>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <Reveal as="section" className="flex flex-col border border-ink-tint bg-card p-6">
                <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-gold">
                  Manufacturing · Process improvement
                </p>
                <h3 className="mt-2 font-display text-lg font-semibold leading-snug text-ink">
                  Rubber &amp; Plastics Manufacturer
                </h3>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-charcoal">
                  A structured process audit found exactly where the delivery workflow was breaking
                  down. On-time delivery rose from 61% to 84%, and annual costs fell by more than
                  ₹15 lakh once the redesigned process was documented and adopted.
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
                  Industrial · Reporting process redesign
                </p>
                <h3 className="mt-2 font-display text-lg font-semibold leading-snug text-ink">
                  Industrial Components Manufacturer
                </h3>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-charcoal">
                  Replacing ad-hoc status updates with a 3-tier reporting process and defined KRAs
                  and KPIs freed 12 hours a week that used to go into chasing information by hand.
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
                  Trading &amp; Distribution · HR process fix
                </p>
                <h3 className="mt-2 font-display text-lg font-semibold leading-snug text-ink">
                  Trading &amp; Distribution Business
                </h3>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-charcoal">
                  A redesigned hiring and onboarding process cut the hiring cycle from 45 to 22 days
                  and brought attrition down from 34% to 18%, removing a bottleneck that was slowing
                  every other process.
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
                  Feasibility · Data before redesign
                </p>
                <h3 className="mt-2 font-display text-lg font-semibold leading-snug text-ink">
                  Finance &amp; Operations Services Venture
                </h3>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-charcoal">
                  Before any process was touched, a 40-day independent study sized the Gujarat
                  market at about 5.6 lakh enterprises — evidence that SBC’s process discipline
                  starts with data, not assumptions.
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
                Want a process this reliable in your business? Start with a free audit.
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
                    Businesses Fixing Broken Processes
                  </h3>
                </div>
                <ul className="mt-5 divide-y divide-ink-tint border-t border-ink-tint">
                  <li className="flex items-start gap-3 py-3 text-[15.5px] leading-relaxed text-charcoal">
                    <Factory className="mt-1 size-4 shrink-0 text-gold" />
                    <span>Manufacturing and industrial businesses missing delivery deadlines</span>
                  </li>
                  <li className="flex items-start gap-3 py-3 text-[15.5px] leading-relaxed text-charcoal">
                    <Store className="mt-1 size-4 shrink-0 text-gold" />
                    <span>Trading and distribution companies with inconsistent fulfilment</span>
                  </li>
                  <li className="flex items-start gap-3 py-3 text-[15.5px] leading-relaxed text-charcoal">
                    <Briefcase className="mt-1 size-4 shrink-0 text-gold" />
                    <span>Service businesses with unclear handoffs between teams</span>
                  </li>
                  <li className="flex items-start gap-3 py-3 text-[15.5px] leading-relaxed text-charcoal">
                    <User className="mt-1 size-4 shrink-0 text-gold" />
                    <span>
                      Founder-led businesses where process knowledge lives in one person’s head
                    </span>
                  </li>
                  <li className="flex items-start gap-3 py-3 text-[15.5px] leading-relaxed text-charcoal">
                    <CircleCheckBig className="mt-1 size-4 shrink-0 text-gold" />
                    <span>Businesses preparing for ISO or quality certification</span>
                  </li>
                  <li className="flex items-start gap-3 py-3 text-[15.5px] leading-relaxed text-charcoal">
                    <Rocket className="mt-1 size-4 shrink-0 text-gold" />
                    <span>MSMEs scaling operations without documented SOPs</span>
                  </li>
                </ul>
              </div>
              <div className="border border-ink-tint bg-card p-6">
                <div className="flex items-center gap-3">
                  <Landmark className="size-6 shrink-0 text-gold" />
                  <h3 className="font-display text-xl font-semibold text-ink">
                    Institutions Standardising Operations
                  </h3>
                </div>
                <ul className="mt-5 divide-y divide-ink-tint border-t border-ink-tint">
                  <li className="flex items-start gap-3 py-3 text-[15.5px] leading-relaxed text-charcoal">
                    <GraduationCap className="mt-1 size-4 shrink-0 text-gold" />
                    <span>
                      Universities and skill-development institutions standardising processes
                    </span>
                  </li>
                  <li className="flex items-start gap-3 py-3 text-[15.5px] leading-relaxed text-charcoal">
                    <Network className="mt-1 size-4 shrink-0 text-gold" />
                    <span>Industry associations and public sector undertakings</span>
                  </li>
                  <li className="flex items-start gap-3 py-3 text-[15.5px] leading-relaxed text-charcoal">
                    <MapPinned className="mt-1 size-4 shrink-0 text-gold" />
                    <span>Organisations rolling out a process across multiple locations</span>
                  </li>
                  <li className="flex items-start gap-3 py-3 text-[15.5px] leading-relaxed text-charcoal">
                    <Lightbulb className="mt-1 size-4 shrink-0 text-gold" />
                    <span>Promoters designing operating processes for a new venture</span>
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
                    alt="Sagar Burse, PhD, Founder and Principal Consultant of Sagar Burse Consulting (SBC), a business process improvement consultant based in Ahmedabad"
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
                  Meet Your Process Improvement Consultant: Sagar Burse, PhD
                </h2>
                <p className="mt-2 font-display text-lg italic text-ink-soft">
                  Founder &amp; Principal Consultant, Sagar Burse Consulting (SBC)
                </p>
                <p className="mt-4 text-[17px] leading-relaxed text-charcoal">
                  Sagar Burse, PhD leads every process improvement engagement at SBC personally,
                  starting from the free business systems audit. With 8+ years of experience across
                  business consulting, institutional setup, skill development and regulatory
                  compliance, he brings rare multi-domain depth to process design.
                </p>
                <p className="mt-4 text-[17px] leading-relaxed text-charcoal">
                  His MSME process engagements include a rubber and plastics manufacturer, an
                  industrial components manufacturer and a trading and distribution business,
                  alongside institutional process work such as a skill-focused public university in
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
                  “We don’t leave after the SOP is written. We stay until the process actually
                  holds.”
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
                    Talk to the consultant directly. The first 45 minutes are free.
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
                  Frequently Asked Questions About Business Process Improvement
                </h2>
                <p className="mt-4 text-[17px] leading-relaxed text-charcoal">
                  Tap a question to see the answer.
                </p>
              </Reveal>
              <div className="space-y-4">
                <details name="faq" className="faq-item border border-ink-tint bg-card">
                  <summary className="flex cursor-pointer items-center justify-between gap-4 p-5">
                    <h3 className="font-display text-lg font-semibold leading-snug text-ink">
                      What does a business process improvement consultant do?
                    </h3>
                    <ChevronDown className="faq-chev size-4 shrink-0 text-gold" />
                  </summary>
                  <div className="border-t border-ink-tint p-5">
                    <p className="text-[15.5px] leading-relaxed text-charcoal">
                      A business process improvement consultant studies how work actually flows
                      through a business — including handoffs, delays and rework — and redesigns it
                      to cut turnaround time, reduce errors and remove dependence on any one person.
                      The best consultants stay to implement the new process, not just document the
                      old one.
                    </p>
                  </div>
                </details>
                <details name="faq" className="faq-item border border-ink-tint bg-card">
                  <summary className="flex cursor-pointer items-center justify-between gap-4 p-5">
                    <h3 className="font-display text-lg font-semibold leading-snug text-ink">
                      How is business process improvement different from business process
                      management?
                    </h3>
                    <ChevronDown className="faq-chev size-4 shrink-0 text-gold" />
                  </summary>
                  <div className="border-t border-ink-tint p-5">
                    <p className="text-[15.5px] leading-relaxed text-charcoal">
                      Business process management (BPM) is the ongoing discipline of monitoring and
                      governing processes. Business process improvement is the project that gets a
                      specific process — say, order fulfilment or hiring — to a better state. SBC
                      combines both: a process improvement project that leaves you with a BPM system
                      (SOPs, KPIs, dashboards) to sustain it.
                    </p>
                  </div>
                </details>
                <details name="faq" className="faq-item border border-ink-tint bg-card">
                  <summary className="flex cursor-pointer items-center justify-between gap-4 p-5">
                    <h3 className="font-display text-lg font-semibold leading-snug text-ink">
                      How do I choose the right process improvement consulting firm?
                    </h3>
                    <ChevronDown className="faq-chev size-4 shrink-0 text-gold" />
                  </summary>
                  <div className="border-t border-ink-tint p-5">
                    <p className="text-[15.5px] leading-relaxed text-charcoal">
                      Compare consultants on six points: whether they map your current process
                      before proposing changes, whether the SOPs they write are usable day to day,
                      proof with measurable metrics, relevant sector experience, hands-on
                      implementation support, and a low-risk first step such as a free audit.
                    </p>
                  </div>
                </details>
                <details name="faq" className="faq-item border border-ink-tint bg-card">
                  <summary className="flex cursor-pointer items-center justify-between gap-4 p-5">
                    <h3 className="font-display text-lg font-semibold leading-snug text-ink">
                      What makes SBC different from other process improvement consulting firms?
                    </h3>
                    <ChevronDown className="faq-chev size-4 shrink-0 text-gold" />
                  </summary>
                  <div className="border-t border-ink-tint p-5">
                    <p className="text-[15.5px] leading-relaxed text-charcoal">
                      SBC is implementation-led: every process improvement engagement starts with a
                      GAP360™ diagnostic, not a template, and we stay with your team through rollout
                      and training until the new process is measurable. Sagar Burse, PhD is
                      personally involved from the free audit onward.
                    </p>
                  </div>
                </details>
                <details name="faq" className="faq-item border border-ink-tint bg-card">
                  <summary className="flex cursor-pointer items-center justify-between gap-4 p-5">
                    <h3 className="font-display text-lg font-semibold leading-snug text-ink">
                      Which industries does SBC’s process improvement consulting serve?
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
                      How much do business process improvement consulting services cost?
                    </h3>
                    <ChevronDown className="faq-chev size-4 shrink-0 text-gold" />
                  </summary>
                  <div className="border-t border-ink-tint p-5">
                    <p className="text-[15.5px] leading-relaxed text-charcoal">
                      Cost depends on how many processes are in scope and how long implementation
                      takes, so SBC does not publish a fixed price list. Every engagement begins
                      with a free 45-minute business systems audit, and further work is scoped with
                      defined milestones so you know exactly what you are paying for.
                    </p>
                  </div>
                </details>
                <details name="faq" className="faq-item border border-ink-tint bg-card">
                  <summary className="flex cursor-pointer items-center justify-between gap-4 p-5">
                    <h3 className="font-display text-lg font-semibold leading-snug text-ink">
                      How long does a process improvement engagement take?
                    </h3>
                    <ChevronDown className="faq-chev size-4 shrink-0 text-gold" />
                  </summary>
                  <div className="border-t border-ink-tint p-5">
                    <p className="text-[15.5px] leading-relaxed text-charcoal">
                      It depends on the process. SBC’s published case studies range from a 60-day
                      systems build to a 90-day delivery-improvement cycle and a six-month HR and
                      process overhaul. A full GAP360™ process diagnostic typically takes 2–4 weeks.
                    </p>
                  </div>
                </details>
                <details name="faq" className="faq-item border border-ink-tint bg-card">
                  <summary className="flex cursor-pointer items-center justify-between gap-4 p-5">
                    <h3 className="font-display text-lg font-semibold leading-snug text-ink">
                      What is the GAP360™ method used for process improvement?
                    </h3>
                    <ChevronDown className="faq-chev size-4 shrink-0 text-gold" />
                  </summary>
                  <div className="border-t border-ink-tint p-5">
                    <p className="text-[15.5px] leading-relaxed text-charcoal">
                      GAP360™ (Growth Acceleration Pathway 360°) is SBC’s structured framework for
                      fixing broken processes. It examines the workflow, systems, people and data
                      behind a process, and moves through six phases — Diagnose, Align, Analyse,
                      Design, Implement and Sustain — with SBC working alongside your team until the
                      process holds.
                    </p>
                  </div>
                </details>
                <details name="faq" className="faq-item border border-ink-tint bg-card">
                  <summary className="flex cursor-pointer items-center justify-between gap-4 p-5">
                    <h3 className="font-display text-lg font-semibold leading-snug text-ink">
                      Can a small business or MSME benefit from process improvement consulting?
                    </h3>
                    <ChevronDown className="faq-chev size-4 shrink-0 text-gold" />
                  </summary>
                  <div className="border-t border-ink-tint p-5">
                    <p className="text-[15.5px] leading-relaxed text-charcoal">
                      Yes. SBC’s process improvement work is built for founder-led MSMEs, including
                      businesses with 25–60 employees where processes still run on tribal knowledge.
                      Typical outcomes include documented SOPs, defined KPIs, and measurable
                      improvements in turnaround time, rework rate or on-time delivery.
                    </p>
                  </div>
                </details>
                <details name="faq" className="faq-item border border-ink-tint bg-card">
                  <summary className="flex cursor-pointer items-center justify-between gap-4 p-5">
                    <h3 className="font-display text-lg font-semibold leading-snug text-ink">
                      Does SBC provide business process management consultant services outside
                      Ahmedabad?
                    </h3>
                    <ChevronDown className="faq-chev size-4 shrink-0 text-gold" />
                  </summary>
                  <div className="border-t border-ink-tint p-5">
                    <p className="text-[15.5px] leading-relaxed text-charcoal">
                      Yes. SBC is headquartered in Ahmedabad, Gujarat, but serves MSMEs,
                      institutions and government bodies across India. Process diagnostics and
                      workflow design sessions can be run remotely, with implementation and training
                      support scoped to your location.
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
                    We listen to understand your process
                  </p>
                </li>
                <li className="border border-ink-tint bg-paper p-4">
                  <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-gold">
                    Next 20 minutes
                  </p>
                  <p className="mt-1 text-[14px] leading-snug text-charcoal">
                    We identify your two or three biggest process bottlenecks
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
