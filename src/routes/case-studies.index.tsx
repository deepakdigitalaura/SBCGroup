import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/sbc/Header";
import { Footer } from "@/components/sbc/Footer";
import { CTABand } from "@/components/sbc/CTABand";
import { StatBlock } from "@/components/sbc/StatBlock";
import { Reveal } from "@/components/sbc/primitives";
import { Breadcrumbs } from "@/components/sbc/Breadcrumbs";
import { groups, type CaseStudy, type CaseStudyGroup } from "@/lib/case-studies-data";

const title = "Case Studies | Sagar Burse Consulting";
const description =
  "Real clients, real results — case studies across MSME consulting, institution building and strategic feasibility from Sagar Burse Consulting.";

export const Route = createFileRoute("/case-studies/")({
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
  component: CaseStudies,
});

const filters = ["All Cases", "MSME Consulting", "Institution Building", "Feasibility Studies"] as const;

function CaseStudies() {
  const [active, setActive] = useState<(typeof filters)[number]>("All Cases");
  const visibleGroups = groups.filter((g) => active === "All Cases" || g.heading === active);

  return (
    <div className="min-h-screen bg-paper">
      <Header />
      <main>
        <section className="border-b border-ink-tint bg-ink">
          <Breadcrumbs trail={[{ label: "Case Studies" }]} dark />
          <div className="shell pb-14 pt-8">
            <Reveal as="section" className="max-w-2xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[oklch(0.82_0.11_92.89)]">
                Proven Results
              </p>
              <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-paper md:text-[3rem]">
                Case Studies
              </h1>
              <p className="mt-3 font-display text-xl font-medium text-paper/70">
                Real Clients. Real Results.
              </p>
              <p className="mt-4 text-[17px] leading-relaxed text-paper/70">
                A selection of engagements across MSME consulting, institution building and
                strategic feasibility — outcomes delivered, not just advised.
              </p>
            </Reveal>

            <div className="mt-9 flex flex-wrap gap-3">
              {filters.map((f) => (
                <button
                  key={f}
                  type="button"
                  onClick={() => setActive(f)}
                  className={
                    active === f
                      ? "bg-gold px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.14em] text-paper"
                      : "border border-paper/30 px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.14em] text-paper/80 transition-colors hover:border-gold hover:text-gold-tint"
                  }
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="section-y">
          <div className="shell space-y-20">
            {visibleGroups.map((group) => (
              <CategorySection key={group.key} group={group} />
            ))}
          </div>
        </section>

        <CTABand />
      </main>
      <Footer />
    </div>
  );
}

function CategorySection({ group }: { group: CaseStudyGroup }) {
  return (
    <div>
      <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-gold-deep">
        {group.label}
      </p>
      <h2 className="mt-2 font-display text-3xl font-semibold leading-tight tracking-tight text-ink md:text-4xl">
        {group.headingLine1}
        <br />
        <span className="text-charcoal/70">{group.headingLine2}</span>
      </h2>
      <div className="mt-2 h-1 w-10 bg-gold" />

      <div className="mt-8 space-y-6">
        {group.studies.map((study, i) => (
          <Reveal key={study.slug}>
            <SplitCard study={study} group={group} index={i + 1} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}

function SplitCard({
  study,
  group,
  index,
}: {
  study: CaseStudy;
  group: CaseStudyGroup;
  index: number;
}) {
  return (
    <article className="grid border border-ink-tint md:grid-cols-3">
      <div className="bg-card p-7 md:col-span-2 md:p-9">
        <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-gold-deep">
          Case Study {String(index).padStart(2, "0")} · {study.sector}
        </p>
        <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.14em] text-ink-soft">
          {study.location} · {study.methodology}
        </p>
        <h3 className="mt-3 font-display text-xl font-semibold leading-snug text-ink">
          {study.name}
        </h3>

        <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-soft">
          The Challenge
        </p>
        <p className="mt-2 text-[15px] leading-relaxed text-charcoal">{study.challenge}</p>

        <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-soft">
          What SBC Did
        </p>
        <p className="mt-2 text-[15px] leading-relaxed text-charcoal">{study.approach}</p>

        <div className="mt-6 flex justify-end">
          <Link
            to="/case-studies/$slug"
            params={{ slug: study.slug }}
            className="inline-flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-[0.12em] text-gold-deep transition-colors hover:text-gold"
          >
            Read Full Case Study <ArrowRight className="size-3.5" />
          </Link>
        </div>
      </div>

      <div className="flex flex-col justify-between bg-ink-wash p-7 md:p-9">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-soft">
            {group.sidebarLabel}
          </p>

          {group.key === "institution" || group.key === "feasibility" ? (
            <ul className="mt-4 space-y-2.5">
              {(study.bullets ?? study.stats.map((s) => `${s.value} ${s.label}`)).map((b) => (
                <li key={b} className="flex gap-2 text-[14px] leading-snug text-charcoal">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold-deep" />
                  {b}
                </li>
              ))}
            </ul>
          ) : (
            <div className="mt-5 space-y-5">
              {study.stats.map((s) => (
                <StatBlock key={s.label} value={s.value} label={s.label} />
              ))}
            </div>
          )}
        </div>

        <div className="mt-6 inline-flex w-fit items-center bg-ink px-3 py-2 text-[11px] font-medium leading-snug text-paper">
          {study.badge}
        </div>
      </div>
    </article>
  );
}
