import { createFileRoute } from "@tanstack/react-router";
import {
  Wrench,
  Gauge,
  Rocket,
  LineChart,
  Stethoscope,
  Users,
  RefreshCw,
  ClipboardList,
  Map,
  UserCog,
  Network,
  Cog,
  TrendingDown,
} from "lucide-react";
import { Header } from "@/components/sbc/Header";
import { Footer } from "@/components/sbc/Footer";
import { CTABand } from "@/components/sbc/CTABand";
import { StatBlock } from "@/components/sbc/StatBlock";
import { PracticeAreaCard } from "@/components/sbc/PracticeAreaCard";
import { Reveal } from "@/components/sbc/primitives";
import { Breadcrumbs } from "@/components/sbc/Breadcrumbs";
import { JsonLd } from "@/components/sbc/JsonLd";

const title = "MSME Consulting & Business Advisory | SBC, Ahmedabad";
const description =
  "SBC's MSME consulting helps Indian businesses build systems, create accountability and grow on autopilot through GAP360™ diagnosis and implementation.";

export const Route = createFileRoute("/msme-consulting")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://sbcgroup.in/msme-consulting" }],
  }),
  component: MsmeConsulting,
});

const problems = [
  { icon: UserCog, text: "Founder involved in every decision — no time to grow" },
  { icon: Network, text: "No reporting structure — accountability gaps at every level" },
  { icon: Cog, text: "Systems missing — operations run on people not processes" },
  { icon: TrendingDown, text: "Growth stalled — no clarity on where the real gaps are" },
];

const solutions = [
  {
    icon: Wrench,
    title: "Systems that run without you",
    description:
      "SOPs, processes and accountability frameworks that let your business grow on autopilot.",
  },
  {
    icon: Gauge,
    title: "Transformation through GAP360™",
    description:
      "A structured 360° diagnostic that identifies exactly where your business is losing money and momentum.",
  },
  {
    icon: Rocket,
    title: "Implementation not just advice",
    description: "We stay with you through execution — not just until the report is delivered.",
  },
  {
    icon: LineChart,
    title: "Measurable outcomes",
    description: "Every engagement has defined milestones and measurable results.",
  },
];

const services = [
  {
    icon: Stethoscope,
    title: "GAP360™ Methodology",
    description:
      "Our flagship 6-phase framework — Diagnose, Align, Analyse, Design, Implement and Sustain — that drives end-to-end business transformation.",
  },
  {
    icon: Wrench,
    title: "Systems & Process Design",
    description:
      "As your business process improvement consultant, SBC builds SOPs, workflows and accountability systems that make your business run without you.",
  },
  {
    icon: Users,
    title: "HR & Organisation Design",
    description:
      "KRA/KPI frameworks, org structure, job descriptions, compensation design and performance systems.",
  },
  {
    icon: RefreshCw,
    title: "Change Management",
    description:
      "Managing business transformation — from people adoption to process change to culture shift.",
  },
  {
    icon: ClipboardList,
    title: "Feasibility Studies & DPRs",
    description:
      "Data-driven feasibility studies and detailed project reports for expansion, new ventures and funding.",
  },
  {
    icon: Map,
    title: "Strategic Roadmap",
    description:
      "Short, medium and long-term strategic planning with clear milestones, priorities and accountability.",
  },
];

const results = [
  {
    tag: "Manufacturing",
    name: "Rubber & Plastics Manufacturer",
    problem:
      "Declining on-time delivery, rising material wastage, zero floor accountability.",
    stats: [
      { value: "61% → 84%", label: "On-Time Delivery" },
      { value: "18%", label: "Wastage Decrease" },
      { value: "90 Days", label: "Timeline" },
    ],
  },
  {
    tag: "Industrial",
    name: "Industrial Components Manufacturer",
    problem:
      "Founder involved in every decision, no reporting structure, inter-department accountability gaps.",
    stats: [
      { value: "12 Hrs", label: "Founder Time Freed / Week" },
      { value: "60 Days", label: "Accountability Built" },
    ],
  },
  {
    tag: "Trading & Distribution",
    name: "Trading & Distribution Business",
    problem: "No HR structure, unclear roles, high attrition of 34%, inconsistent compensation.",
    stats: [
      { value: "34% → 18%", label: "Attrition" },
      { value: "45 → 22", label: "Hiring Cycle Days" },
      { value: "6 Months", label: "Timeline" },
    ],
  },
];

const audience = [
  "Manufacturing & industrial businesses",
  "Trading & distribution companies",
  "Service businesses looking to scale",
  "Founders trapped in daily operations",
  "Businesses with HR & accountability gaps",
  "MSMEs planning expansion or new ventures",
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "MSME Consulting",
  provider: { "@type": "Organization", name: "Sagar Burse Consulting" },
  areaServed: { "@type": "Country", name: "India" },
  description,
};

function MsmeConsulting() {
  return (
    <div className="min-h-screen bg-paper">
      <JsonLd data={serviceSchema} />
      <Header />
      <Breadcrumbs trail={[{ label: "Our Expertise" }, { label: "MSME Consulting" }]} dark />
      <main>
        <section className="section-y border-b border-ink-tint bg-ink">
          <div className="shell">
            <Reveal className="max-w-3xl" as="section">
              <h1 className="font-display text-4xl font-semibold tracking-tight text-paper md:text-[3rem]">
                MSME Consulting — Powered by GAP360™
              </h1>
              <p className="mt-5 text-[17px] leading-relaxed text-paper/80">
                Helping Indian MSMEs build systems, create accountability and grow on autopilot —
                through structured diagnosis, design and implementation.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="section-y border-b border-ink-tint bg-ink-wash">
          <div className="shell grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
            <Reveal as="section">
              <h2 className="font-display text-3xl font-semibold tracking-tight text-ink md:text-[2.5rem]">
                Why Most MSMEs Stay Stuck
              </h2>
              <p className="mt-4 text-[17px] leading-relaxed text-charcoal">
                Most MSME founders are trapped in their own business — handling everything
                themselves, with no systems, no accountability structure and no time to grow. They
                get reports from consultants that sit in drawers. The real problem is not
                strategy — it is implementation.
              </p>
            </Reveal>
            <Reveal as="section" className="flex flex-col justify-center gap-3">
              {problems.map((p) => (
                <div
                  key={p.text}
                  className="flex items-center gap-4 rounded-lg border border-ink-tint bg-paper px-5 py-4 text-[15px] leading-relaxed text-charcoal shadow-sm transition hover:border-gold/60 hover:shadow-md"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
                    <p.icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  {p.text}
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        <section className="section-y border-b border-ink-tint">
          <div className="shell">
            <Reveal className="max-w-2xl" as="section">
              <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
                The SBC Solution
              </h2>
            </Reveal>
            <Reveal className="mt-6 grid gap-5 sm:grid-cols-2" as="section">
              {solutions.map((s) => (
                <PracticeAreaCard key={s.title} icon={s.icon} title={s.title} description={s.description} />
              ))}
            </Reveal>
          </div>
        </section>

        <section className="section-y border-b border-ink-tint bg-ink-wash">
          <div className="shell">
            <Reveal as="section">
              <h2 className="font-display text-3xl font-semibold tracking-tight text-ink md:text-[2.5rem]">
                MSME Consulting Services
              </h2>
            </Reveal>
            <Reveal className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" as="section">
              {services.map((s) => (
                <PracticeAreaCard key={s.title} icon={s.icon} title={s.title} description={s.description} />
              ))}
            </Reveal>
          </div>
        </section>

        <section className="section-y border-b border-ink-tint">
          <div className="shell">
            <Reveal as="section">
              <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
                Results We Have Delivered
              </h2>
            </Reveal>
            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              {results.map((r) => (
                <Reveal key={r.name} as="section" className="border border-ink-tint bg-card p-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gold">
                    {r.tag}
                  </p>
                  <h3 className="mt-2 font-display text-lg font-semibold text-ink">{r.name}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-charcoal">{r.problem}</p>
                  <div className="mt-5 flex flex-wrap gap-6 border-t border-ink-tint pt-5">
                    {r.stats.map((s) => (
                      <StatBlock key={s.label} value={s.value} label={s.label} />
                    ))}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section-y border-b border-ink-tint bg-ink-wash">
          <div className="shell">
            <Reveal className="max-w-2xl" as="section">
              <h2 className="font-display text-3xl font-semibold tracking-tight text-ink md:text-[2.5rem]">
                Who SBC MSME Consulting Is For
              </h2>
            </Reveal>
            <Reveal className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3" as="section">
              {audience.map((a) => (
                <div
                  key={a}
                  className="border border-ink-tint bg-paper px-4 py-3 text-[15px] leading-relaxed text-charcoal"
                >
                  {a}
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        <CTABand />
      </main>
      <Footer />
    </div>
  );
}
