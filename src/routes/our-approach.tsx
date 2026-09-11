import { createFileRoute } from "@tanstack/react-router";
import { Handshake, MapPin, BookOpen, ShieldCheck } from "lucide-react";
import { Header } from "@/components/sbc/Header";
import { Footer } from "@/components/sbc/Footer";
import { CTABand } from "@/components/sbc/CTABand";
import { Reveal, GoldLink } from "@/components/sbc/primitives";
import { PracticeAreaCard } from "@/components/sbc/PracticeAreaCard";
import { Breadcrumbs } from "@/components/sbc/Breadcrumbs";

const title = "Our Approach | Sagar Burse Consulting";
const description =
  "How SBC delivers business consulting services: not just advice, real implementation. Our philosophy, engagement models and what sets us apart.";

export const Route = createFileRoute("/our-approach")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://sbcgroup.in/our-approach" }],
  }),
  component: OurApproach,
});

const engagementModels = [
  {
    step: "01",
    title: "Complimentary Business Audit",
    description:
      "45-minute focused conversation identifying business gaps and leverage points. No commitment required.",
  },
  {
    step: "02",
    title: "Detailed Diagnostic",
    description:
      "2–4 week comprehensive assessment using GAP360™ methodology across operations, systems, people, process and strategy.",
  },
  {
    step: "03",
    title: "Project Engagement",
    description:
      "Fixed scope work with defined timelines for feasibility studies, DPRs, institutional setup, market research or strategic roadmaps.",
  },
  {
    step: "04",
    title: "Implementation Partnership",
    description: "Embedded hands-on engagement lasting until measurable results are achieved.",
  },
];

const differentiators = [
  {
    icon: Handshake,
    title: "Partnership Not Project",
    description:
      "We embed ourselves in your business or institution and stay until measurable outcomes are achieved.",
  },
  {
    icon: MapPin,
    title: "On-Ground Presence",
    description: "Hands-on, in-person engagement — not remote reports without accountability.",
  },
  {
    icon: BookOpen,
    title: "Research-Backed Decisions",
    description: "Every recommendation is grounded in evidence, data and structured methodology.",
  },
  {
    icon: ShieldCheck,
    title: "Accountability at Every Step",
    description: "We stand behind our recommendations through to implementation and results.",
  },
];

function OurApproach() {
  return (
    <div className="min-h-screen bg-paper">
      <Header />
      <Breadcrumbs trail={[{ label: "About Us" }, { label: "Our Approach" }]} dark />
      <main>
        <section className="section-y border-b border-ink-tint bg-ink">
          <div className="shell">
            <Reveal as="section" className="max-w-3xl">
              <h1 className="font-display text-4xl font-semibold tracking-tight text-paper md:text-[3rem]">
                Our Approach to Consulting
              </h1>
              <p className="mt-4 text-[17px] leading-relaxed text-paper/80">
                We don't believe in advice without accountability. Every SBC engagement is built
                around one commitment — we stay until the job is done.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="section-y border-b border-ink-tint bg-ink-wash">
          <div className="shell">
            <Reveal as="section" className="max-w-3xl">
              <h2 className="font-display text-3xl font-semibold tracking-tight text-ink md:text-[2.5rem]">
                Not Just Advice. Real Implementation.
              </h2>
              <p className="mt-4 text-[17px] leading-relaxed text-charcoal">
                Most consulting firms deliver a report and move on. The client is left with
                recommendations but no implementation support, no accountability and no results.
              </p>
              <p className="mt-4 text-[17px] leading-relaxed text-charcoal">
                SBC operates differently. We embed ourselves in your business or institution —
                diagnosing the real problems, designing practical solutions, and implementing them
                alongside your team until measurable outcomes are achieved. This is not
                project-based consulting. This is a partnership built on accountability, integrity
                and outcomes.
              </p>
            </Reveal>
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              <Reveal as="section" className="border border-ink-tint bg-paper p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-soft">
                  What Others Do
                </p>
                <p className="mt-3 text-[15px] leading-relaxed text-charcoal">
                  Deliver a report, present recommendations, and move on — leaving implementation
                  and results to the client.
                </p>
              </Reveal>
              <Reveal as="section" className="border border-gold/60 bg-paper p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gold">
                  What SBC Does
                </p>
                <p className="mt-3 text-[15px] leading-relaxed text-charcoal">
                  Stay embedded until measurable outcomes are achieved — accountable from
                  diagnosis through implementation.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="section-y border-b border-ink-tint">
          <div className="shell">
            <Reveal as="section" className="max-w-2xl">
              <h2 className="font-display text-3xl font-semibold tracking-tight text-ink md:text-[2.5rem]">
                Four Ways to Engage With SBC
              </h2>
            </Reveal>
            <Reveal className="mt-9" as="section">
              <ol className="divide-y divide-ink-tint border-t border-ink-tint">
                {engagementModels.map((m) => (
                  <li key={m.title} className="flex flex-col gap-3 py-6 sm:flex-row sm:items-start sm:gap-6">
                    <div className="flex shrink-0 items-center gap-3 sm:w-56">
                      <span className="grid size-9 shrink-0 place-items-center rounded-full border border-gold text-[12px] font-semibold text-gold">
                        {m.step}
                      </span>
                      <h3 className="font-display text-lg font-semibold leading-snug text-ink">
                        {m.title}
                      </h3>
                    </div>
                    <p className="text-[15px] leading-relaxed text-charcoal sm:flex-1">
                      {m.description}
                    </p>
                  </li>
                ))}
              </ol>
            </Reveal>

            <Reveal
              as="section"
              className="mt-8 flex flex-col justify-between gap-4 border border-ink-tint bg-card p-6 sm:flex-row sm:items-center"
            >
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gold">
                  Ongoing Advisory
                </p>
                <h3 className="mt-2 font-display text-lg font-semibold leading-snug text-ink">
                  Retainership
                </h3>
                <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-charcoal">
                  Monthly advisory support with review cadences, dashboards and strategic
                  guidance.
                </p>
              </div>
              <GoldLink href="/book-free-audit">Book Free Audit &rarr;</GoldLink>
            </Reveal>
          </div>
        </section>

        <section className="section-y border-b border-ink-tint bg-ink-wash">
          <div className="shell">
            <Reveal as="section" className="max-w-2xl">
              <h2 className="font-display text-3xl font-semibold tracking-tight text-ink md:text-[2.5rem]">
                The SBC Differentiators
              </h2>
            </Reveal>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {differentiators.map((d) => (
                <Reveal as="section" key={d.title}>
                  <PracticeAreaCard {...d} />
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
