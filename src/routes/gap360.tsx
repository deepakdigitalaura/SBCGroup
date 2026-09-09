import { createFileRoute } from "@tanstack/react-router";
import {
  Stethoscope,
  Handshake,
  BarChart3,
  Pencil,
  Rocket,
  RefreshCw,
  FileCog,
  ListChecks,
  LayoutDashboard,
  Users,
  Target,
  Infinity as InfinityIcon,
} from "lucide-react";
import { Header } from "@/components/sbc/Header";
import { Footer } from "@/components/sbc/Footer";
import { CTABand } from "@/components/sbc/CTABand";
import { StatBlock } from "@/components/sbc/StatBlock";
import { PracticeAreaCard } from "@/components/sbc/PracticeAreaCard";
import { Reveal } from "@/components/sbc/primitives";
import { Breadcrumbs } from "@/components/sbc/Breadcrumbs";

const title = "GAP360™ — Growth Acceleration Pathway 360° | SBC";
const description =
  "GAP360™ is SBC's flagship diagnostic and implementation framework — mapping businesses across Operations, Systems, People, Process and Strategy to deliver measurable results.";

export const Route = createFileRoute("/gap360")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Gap360,
});

const glance = [
  { label: "Coverage", value: "360° across Operations, Systems, People, Process & Strategy" },
  { label: "Entry Point", value: "Free 45-minute complimentary audit — no commitment required" },
  { label: "Full Diagnostic", value: "2–4 weeks · Detailed gap analysis · Implementation roadmap" },
  { label: "Implementation", value: "Hands-on execution alongside your team until results are achieved" },
  { label: "Best For", value: "MSMEs — Manufacturing, Trading, Distribution, Services" },
];

const phases = [
  {
    n: "01",
    icon: Stethoscope,
    title: "Diagnose",
    copy: "A comprehensive 45-minute to multi-session audit across all business functions — operations, finance, HR, sales, production and management. We identify critical gaps, quantify their ₹ impact and establish the baseline from which transformation begins.",
  },
  {
    n: "02",
    icon: Handshake,
    title: "Align",
    copy: "Diagnostic findings are presented to the management team in a structured alignment session. Every gap, its root cause and its estimated business impact is reviewed together — ensuring leadership is not just informed, but fully aligned on priorities before any solution is designed.",
  },
  {
    n: "03",
    icon: BarChart3,
    title: "Analyse",
    copy: "Root cause mapping of every identified gap — going beyond symptoms to understand the underlying systems, process failures and accountability breakdowns that are driving the problem. This phase produces a prioritised gap register with impact assessment.",
  },
  {
    n: "04",
    icon: Pencil,
    title: "Design",
    copy: "Solution design tailored to your business context — SOPs, KRA/KPI frameworks, reporting structures, accountability systems, org redesign and process workflows. Every solution is built for adoption, not just elegance.",
  },
  {
    n: "05",
    icon: Rocket,
    title: "Implement",
    copy: "Hands-on execution alongside your team — not remote advisory, not email recommendations. SBC is present through the implementation, managing resistance, driving adoption and course-correcting in real time.",
  },
  {
    n: "06",
    icon: RefreshCw,
    title: "Sustain",
    copy: "30-60-90 day review plans, management dashboards, performance cadences and course corrections to ensure results are sustained beyond the engagement. The goal is a business that runs on systems — not on the founder's constant presence.",
  },
];

const outcomes = [
  {
    icon: FileCog,
    title: "Systems & SOPs",
    description:
      "Documented processes, standard operating procedures and workflows that allow your business to run without you.",
  },
  {
    icon: ListChecks,
    title: "KRA/KPI Framework",
    description:
      "Clear roles, responsibilities and performance metrics for every person in the organisation — accountability built in.",
  },
  {
    icon: LayoutDashboard,
    title: "Reporting Structure",
    description:
      "3-tier reporting hierarchy, review cadences and management dashboards that give you real-time visibility.",
  },
  {
    icon: Users,
    title: "Change Management",
    description:
      "Managed transition — people adoption, culture shift and resistance management handled alongside your team.",
  },
  {
    icon: Target,
    title: "Measurable Results",
    description:
      "Every GAP360™ engagement has defined outcome milestones — OTD improvement, attrition reduction, founder time freed.",
  },
  {
    icon: InfinityIcon,
    title: "Autopilot Business",
    description:
      "The ultimate outcome — a business that runs on systems and people, freeing the founder to focus on growth.",
  },
];

const results = [
  {
    tag: "Manufacturing",
    name: "Rubber & Plastics Manufacturer",
    stats: [
      { value: "61% → 84%", label: "On-Time Delivery" },
      { value: "18%", label: "Wastage Reduced" },
      { value: "90 Days", label: "Timeline" },
    ],
  },
  {
    tag: "Industrial",
    name: "Industrial Components Manufacturer",
    stats: [
      { value: "12 Hrs/Wk", label: "Founder Time Freed" },
      { value: "60 Days", label: "Accountability Built" },
      { value: "3-Tier", label: "Reporting Structure" },
    ],
  },
  {
    tag: "Trading & Distribution",
    name: "Trading & Distribution Business",
    stats: [
      { value: "34% → 18%", label: "Attrition Rate" },
      { value: "45 → 22", label: "Hiring Cycle (Days)" },
      { value: "6 Months", label: "Timeline" },
    ],
  },
];

function Gap360() {
  return (
    <div className="min-h-screen bg-paper">
      <Header />
      <Breadcrumbs trail={[{ label: "Our Expertise" }, { label: "GAP360™" }]} dark />
      <main>
        <section className="section-y border-b border-ink-tint bg-ink">
          <div className="shell">
            <Reveal className="max-w-3xl" as="section">
              <h1 className="font-display text-4xl font-semibold tracking-tight text-paper md:whitespace-nowrap md:text-[2.4rem] lg:text-[2.75rem]">
                GAP360&trade; — Growth Acceleration Pathway 360&deg;
              </h1>
              <p className="mt-5 text-[17px] leading-relaxed text-paper/80">
                A structured diagnostic and implementation framework that maps your business
                across 6 dimensions — identifying gaps, aligning leadership, designing solutions
                and delivering measurable results.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="section-y border-b border-ink-tint bg-ink-wash">
          <div className="shell">
            <Reveal as="section">
              <h2 className="font-display text-3xl font-semibold tracking-tight text-ink md:text-[2.5rem]">
                A Framework Built for Implementation
              </h2>
              <p className="mt-4 text-[17px] leading-relaxed text-charcoal lg:columns-2 lg:gap-10">
                Most diagnostic frameworks stop at recommendations. GAP360&trade; goes further —
                it is designed from the ground up for implementation, not just diagnosis. The
                methodology was developed by Dr. Sagar Burse through years of on-ground consulting
                with Indian MSMEs. It maps businesses across six critical dimensions —
                Operations, Systems, People, Process and Strategy — identifying exact gaps that
                cost money, time and growth. The output is not a report that sits in a drawer. It
                is a prioritised implementation roadmap — with SBC staying alongside your team
                until every gap is closed and every result is achieved.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="section-y border-b border-ink-tint">
          <div className="shell">
            <Reveal as="section">
              <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
                GAP360&trade; at a Glance
              </h2>
            </Reveal>
            <Reveal className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-5" as="section">
              {glance.map((g) => (
                <div key={g.label} className="border border-ink-tint bg-card p-5">
                  <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-gold">
                    {g.label}
                  </p>
                  <p className="mt-2 text-[15px] leading-relaxed text-charcoal">{g.value}</p>
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        <section className="section-y border-b border-ink-tint bg-ink-wash">
          <div className="shell">
            <Reveal className="max-w-2xl" as="section">
              <h2 className="font-display text-3xl font-semibold tracking-tight text-ink md:text-[2.5rem]">
                Six Phases. One Outcome.
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-charcoal">
                Our proprietary framework — every engagement moves through the same disciplined
                sequence, node by node, from diagnosis to sustained results.
              </p>
            </Reveal>
            <Reveal className="mt-10" as="section">
              <ol className="divide-y divide-ink-tint border-t border-ink-tint">
                {phases.map(({ n, title, copy }) => (
                  <li key={n} className="flex flex-col gap-3 py-6 sm:flex-row sm:items-start sm:gap-6">
                    <div className="flex shrink-0 items-center gap-3 sm:w-56">
                      <span className="grid size-9 shrink-0 place-items-center rounded-full border border-gold text-[12px] font-semibold text-gold">
                        {n}
                      </span>
                      <h3 className="font-display text-base font-semibold text-ink">{title}</h3>
                    </div>
                    <p className="text-[15px] leading-relaxed text-charcoal sm:flex-1">{copy}</p>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </section>

        <section className="section-y border-b border-ink-tint">
          <div className="shell">
            <Reveal as="section">
              <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
                What You Get
              </h2>
            </Reveal>
            <Reveal className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" as="section">
              {outcomes.map((o) => (
                <PracticeAreaCard key={o.title} icon={o.icon} title={o.title} description={o.description} />
              ))}
            </Reveal>
          </div>
        </section>

        <section className="section-y border-b border-ink-tint bg-ink-wash">
          <div className="shell">
            <Reveal as="section">
              <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
                Proven Results
              </h2>
            </Reveal>
            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              {results.map((r) => (
                <Reveal key={r.name} as="section" className="border border-ink-tint bg-paper p-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gold">
                    {r.tag}
                  </p>
                  <h3 className="mt-2 font-display text-lg font-semibold text-ink">{r.name}</h3>
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

        <CTABand />
      </main>
      <Footer />
    </div>
  );
}
