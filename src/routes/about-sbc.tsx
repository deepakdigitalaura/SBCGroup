import { createFileRoute } from "@tanstack/react-router";
import {
  ShieldCheck,
  Target,
  TrendingUp,
  Handshake,
  Eye,
  Scale,
  ClipboardCheck,
  Rocket,
  Hammer,
  LineChart,
} from "lucide-react";
import { Header } from "@/components/sbc/Header";
import { Footer } from "@/components/sbc/Footer";
import { CTABand } from "@/components/sbc/CTABand";
import { Reveal } from "@/components/sbc/primitives";
import { StatBlock } from "@/components/sbc/StatBlock";
import { PracticeAreaCard } from "@/components/sbc/PracticeAreaCard";
import { Breadcrumbs } from "@/components/sbc/Breadcrumbs";

const title = "About SBC | Sagar Burse Consulting, Ahmedabad";
const description =
  "SBC is a multi-division advisory firm built on one principle — real implementation, not just advice. Learn our story, mission, vision and values.";

export const Route = createFileRoute("/about-sbc")({
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
  component: AboutSBC,
});

const stats = [
  { value: "8+", label: "Years Of Experience" },
  { value: "10+", label: "Consulting Engagements" },
  { value: "5+", label: "Institutional Projects" },
  { value: "4", label: "Practice Divisions" },
];

const values = [
  { icon: Scale, label: "Integrity & Honesty" },
  { icon: ClipboardCheck, label: "Accountability" },
  { icon: LineChart, label: "Outcome Driven" },
  { icon: Hammer, label: "Implementation First" },
  { icon: Rocket, label: "Continuous Growth" },
];

const whyUs = [
  {
    icon: ShieldCheck,
    title: "Implementation Focused",
    description:
      "We don't leave after the report. We stay until results are delivered and measurable outcomes are achieved.",
  },
  {
    icon: Target,
    title: "Structured Approach",
    description:
      "Every engagement follows a proven methodology — GAP360™ for business, structured frameworks for institutions.",
  },
  {
    icon: TrendingUp,
    title: "Domain Expertise",
    description:
      "8+ years across MSME, institution building, strategic research and policy advisory — deep, not broad.",
  },
  {
    icon: Handshake,
    title: "Long Term Partnership",
    description:
      "We build lasting relationships — not one-time engagements. Your success is our long-term commitment.",
  },
];

function AboutSBC() {
  return (
    <div className="min-h-screen bg-paper">
      <Header />
      <Breadcrumbs trail={[{ label: "About Us" }, { label: "About SBC" }]} dark />
      <main>
        <section className="section-y border-b border-ink-tint bg-ink">
          <div className="shell">
            <Reveal as="section" className="max-w-3xl">
              <h1 className="font-display text-4xl font-semibold tracking-tight text-paper md:text-[3rem]">
                Who We Are &amp; What We Stand For
              </h1>
              <p className="mt-4 text-[17px] leading-relaxed text-paper/80">
                A multi-division advisory firm built on one principle — real implementation, not
                just advice.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="section-y border-b border-ink-tint bg-ink-wash">
          <div className="shell">
            <Reveal as="section" className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] lg:items-start">
              <h2 className="font-display text-4xl font-semibold tracking-tight text-ink md:text-[3rem]">
                Built to Bridge the Gap
              </h2>
              <div>
                <p className="text-[17px] leading-relaxed text-charcoal">
                  SBC was founded with a clear purpose — to serve organisations that needed more
                  than a consultant's report. Too many MSMEs, institutions and government bodies
                  were receiving recommendations that never got implemented.
                </p>
                <p className="mt-4 text-[17px] leading-relaxed text-charcoal">
                  Dr. Sagar Burse established SBC in Ahmedabad, Gujarat with a commitment to stay
                  engaged until results are delivered — not just until the report is submitted.
                </p>
                <p className="mt-4 text-[17px] leading-relaxed text-charcoal">
                  Today SBC operates across four divisions — Business, Institution Building,
                  Strategic Research and Policy — serving MSME founders, institutional leaders and
                  government bodies across India.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="section-y border-b border-ink-tint">
          <div className="shell">
            <Reveal as="section">
              <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
                SBC at a Glance
              </h2>
              <div className="mt-6 grid grid-cols-2 gap-8 border-t border-ink-tint pt-6 md:grid-cols-4">
                {stats.map((s) => (
                  <StatBlock key={s.label} value={s.value} label={s.label} />
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section className="section-y border-b border-ink-tint bg-ink-wash">
          <div className="shell grid gap-10 md:grid-cols-2">
            <Reveal as="section" className="border-l-2 border-gold pl-6">
              <div className="flex items-center gap-3">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center text-gold">
                  <Target className="h-[3.375rem] w-[3.375rem]" strokeWidth={1.5} />
                </div>
                <h2 className="font-display text-lg font-semibold text-ink">Our Mission</h2>
              </div>
              <p className="mt-3 font-display text-xl italic leading-relaxed text-ink">
                "To empower businesses to thrive through systems-driven growth, build institutions
                that create lasting impact, and shape policy through evidence-based advisory —
                delivering outcomes, not just reports."
              </p>
            </Reveal>
            <Reveal as="section" className="border-l-2 border-ink-tint pl-6">
              <div className="flex items-center gap-3">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center text-ink">
                  <Eye className="h-[3.375rem] w-[3.375rem]" strokeWidth={1.5} />
                </div>
                <h2 className="font-display text-lg font-semibold text-ink">Our Vision</h2>
              </div>
              <p className="mt-3 font-display text-xl italic leading-relaxed text-ink">
                "To be India's most trusted and respected consulting firm — known for integrity,
                honesty and measurable results. A firm that stands for implementation over advice
                and outcomes over optics."
              </p>
            </Reveal>
          </div>
        </section>

        <section className="section-y border-b border-ink-tint">
          <div className="shell">
            <Reveal as="section">
              <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">Our Values</h2>
              <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
                {values.map((v) => (
                  <li
                    key={v.label}
                    className="flex flex-col items-center gap-4 border border-ink-tint bg-card p-6 text-center transition-colors hover:border-gold"
                  >
                    <v.icon className="h-10 w-10 text-gold" strokeWidth={1.5} />
                    <span className="text-[15px] font-semibold text-ink">{v.label}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        <section className="section-y border-b border-ink-tint bg-ink-wash">
          <div className="shell">
            <Reveal as="section" className="max-w-2xl">
              <h2 className="font-display text-4xl font-semibold tracking-tight text-ink md:text-[3rem]">
                What Makes SBC Different
              </h2>
            </Reveal>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {whyUs.map((item) => (
                <Reveal as="section" key={item.title}>
                  <PracticeAreaCard {...item} />
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
