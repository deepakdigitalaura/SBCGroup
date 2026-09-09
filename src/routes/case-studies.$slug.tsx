import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { Header } from "@/components/sbc/Header";
import { Footer } from "@/components/sbc/Footer";
import { CTABand } from "@/components/sbc/CTABand";
import { StatCard } from "@/components/sbc/StatBlock";
import { Reveal } from "@/components/sbc/primitives";
import { Breadcrumbs } from "@/components/sbc/Breadcrumbs";
import { getStudyBySlug } from "@/lib/case-studies-data";

export const Route = createFileRoute("/case-studies/$slug")({
  loader: ({ params }) => {
    const found = getStudyBySlug(params.slug);
    if (!found) throw notFound();
    return found;
  },
  head: ({ loaderData }) => {
    const title = loaderData
      ? `${loaderData.study.name} | Case Study | Sagar Burse Consulting`
      : "Case Study | Sagar Burse Consulting";
    const description = loaderData?.study.challenge ?? "";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: CaseStudyDetail,
});

function CaseStudyDetail() {
  const { study, group } = Route.useLoaderData();

  return (
    <div className="min-h-screen bg-paper">
      <Header />
      <Breadcrumbs
        trail={[{ label: "Case Studies", href: "/case-studies" }, { label: study.name }]}
        dark
      />
      <main>
        <section className="bg-ink py-14">
          <div className="shell">
            <Reveal className="max-w-3xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[oklch(0.82_0.11_92.89)]">
                {group.label}
              </p>
              <h1 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight text-paper md:text-[2.5rem]">
                {study.name}
              </h1>
              <p className="mt-3 text-[12px] font-medium uppercase tracking-[0.12em] text-paper/70">
                {study.sector} · {study.location} · {study.methodology}
              </p>
            </Reveal>

            {study.facts ? (
              <Reveal className="mt-8 grid gap-5 border-t border-paper/15 pt-8 sm:grid-cols-2 lg:grid-cols-4">
                {study.facts.map((f) => (
                  <div key={f.label}>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-paper/70">
                      {f.label}
                    </p>
                    <p className="mt-1.5 text-[14px] leading-snug text-paper/80">{f.value}</p>
                  </div>
                ))}
              </Reveal>
            ) : null}
          </div>
        </section>

        <section className="section-y border-b border-ink-tint">
          <div className="shell">
            <div className="grid gap-10 md:grid-cols-3">
              <div className="space-y-10 md:col-span-2">
                <Reveal>
                  <h2 className="font-display text-xl font-semibold text-ink">The Challenge</h2>
                  <p className="mt-3 text-[15.5px] leading-relaxed text-charcoal">
                    {study.challengeFull}
                  </p>
                </Reveal>
                <Reveal>
                  <h2 className="font-display text-xl font-semibold text-ink">
                    What SBC Did
                  </h2>
                  <p className="mt-3 text-[15.5px] leading-relaxed text-charcoal">
                    {study.approachFull}
                  </p>
                </Reveal>
                {study.quote ? (
                  <Reveal>
                    <blockquote className="border-l-2 border-gold-deep pl-5">
                      <p className="font-display text-lg leading-snug text-ink">
                        "{study.quote}"
                      </p>
                      <cite className="mt-3 block text-[12px] not-italic uppercase tracking-[0.1em] text-ink-soft">
                        {study.quoteAttribution}
                      </cite>
                    </blockquote>
                  </Reveal>
                ) : null}
              </div>

              <Reveal className="bg-ink-wash p-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-soft">
                  {group.sidebarLabel}
                </p>
                {study.bullets ? (
                  <ul className="mt-4 space-y-2.5">
                    {study.bullets.map((b) => (
                      <li key={b} className="flex gap-2 text-[14px] leading-snug text-charcoal">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold-deep" />
                        {b}
                      </li>
                    ))}
                  </ul>
                ) : null}
                <div className="mt-6 inline-flex w-fit items-center bg-ink px-3 py-2 text-[11px] font-medium leading-snug text-paper">
                  {study.badge}
                </div>
              </Reveal>
            </div>

            <div className="mt-14">
              <h2 className="font-display text-xl font-semibold text-ink">
                {group.sidebarLabel}
              </h2>
              <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {study.stats.map((s) => (
                  <StatCard key={s.label} value={s.value} label={s.label} />
                ))}
              </div>
            </div>

            <div className="mt-14">
              <Link
                to="/case-studies"
                className="text-[12px] font-semibold uppercase tracking-[0.12em] text-gold-deep transition-colors hover:text-gold"
              >
                ← All Case Studies
              </Link>
            </div>
          </div>
        </section>
        <CTABand />
      </main>
      <Footer />
    </div>
  );
}
