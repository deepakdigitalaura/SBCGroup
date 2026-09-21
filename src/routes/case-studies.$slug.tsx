import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { Header } from "@/components/sbc/Header";
import { Footer } from "@/components/sbc/Footer";
import { CTABand } from "@/components/sbc/CTABand";
import { StatCard } from "@/components/sbc/StatBlock";
import { Reveal } from "@/components/sbc/primitives";
import { Breadcrumbs } from "@/components/sbc/Breadcrumbs";
import { getStudyBySlug } from "@/lib/case-studies-data";
import { JsonLd } from "@/components/sbc/JsonLd";

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
        {
          property: "og:url",
          content: `https://sbcgroup.in/case-studies/${loaderData?.study.slug ?? ""}`,
        },
        { property: "og:image", content: "https://sbcgroup.in/sbc-logo.png" },
        { property: "og:site_name", content: "Sagar Burse Consulting (SBC)" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
        { name: "twitter:image", content: "https://sbcgroup.in/sbc-logo.png" },
      ],
      links: loaderData
        ? [
            {
              rel: "canonical",
              href: `https://sbcgroup.in/case-studies/${loaderData.study.slug}`,
            },
          ]
        : [],
    };
  },
  component: CaseStudyDetail,
});

function CaseStudyDetail() {
  const { study, group } = Route.useLoaderData();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${study.name} | Case Study`,
    author: {
      "@type": "Person",
      name: "Sagar Burse",
      jobTitle: "Founder & Principal Consultant",
      url: "https://sbcgroup.in/founder",
      image: "https://sbcgroup.in/images/founder/sagar-burse-author.webp",
      sameAs: ["https://www.linkedin.com/in/drsagarburse/"],
    },
    publisher: {
      "@type": "Organization",
      name: "Sagar Burse Consulting",
      logo: { "@type": "ImageObject", url: "https://sbcgroup.in/sbc-logo.png" },
    },
    description: study.challenge,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://sbcgroup.in/case-studies/${study.slug}`,
    },
  };

  return (
    <div className="min-h-screen bg-paper">
      <JsonLd data={articleSchema} />
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

            <aside
              aria-labelledby="author-bio-heading"
              className="mt-14 max-w-3xl border-t border-ink-tint pt-8"
            >
              <h2
                id="author-bio-heading"
                className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-soft"
              >
                About the Author
              </h2>
              <div className="mt-5 flex flex-col gap-5 border border-ink-tint bg-ink-wash p-6 sm:flex-row sm:items-start">
                <img
                  src="/images/founder/sagar-burse-author.webp"
                  alt="Sagar Burse, PhD, Founder and Principal Consultant of Sagar Burse Consulting"
                  width={112}
                  height={112}
                  loading="lazy"
                  decoding="async"
                  className="aspect-square shrink-0 rounded-full border-2 border-gold object-cover"
                />
                <div className="min-w-0">
                  <p className="font-display text-xl font-semibold text-ink">Sagar Burse, PhD</p>
                  <p className="mt-1 font-display text-[15px] italic text-ink-soft">
                    Founder &amp; Principal Consultant, Sagar Burse Consulting (SBC)
                  </p>
                  <p className="mt-3 text-[14px] leading-relaxed text-charcoal">
                    Sagar Burse, PhD is the Founder and Principal Consultant of Sagar Burse
                    Consulting (SBC), headquartered in Ahmedabad, Gujarat. With 8+ years of
                    experience across business consulting, institutional setup, skill development,
                    and regulatory compliance, he brings rare multi-domain depth to every
                    engagement.
                  </p>
                  <p className="mt-3 text-[14px] leading-relaxed text-charcoal">
                    Through SBC, he advises businesses using the GAP360™ methodology — staying with
                    clients from diagnosis to implementation until measurable results are
                    achieved.
                  </p>
                  <p className="mt-3 text-[13px] leading-relaxed text-ink-soft">
                    PhD (Management), GLS University · MBA (Marketing), Gujarat University ·
                    UGC-NET and GSET qualified
                  </p>
                  <div className="mt-4 flex flex-wrap gap-4">
                    <a
                      href="/founder"
                      rel="author"
                      className="text-[12px] font-semibold uppercase tracking-[0.12em] text-gold-deep transition-colors hover:text-gold"
                    >
                      View Full Profile →
                    </a>
                    <a
                      href="https://www.linkedin.com/in/drsagarburse/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-[12px] font-semibold uppercase tracking-[0.12em] text-gold-deep transition-colors hover:text-gold"
                    >
                      LinkedIn →
                    </a>
                  </div>
                </div>
              </div>
            </aside>

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
