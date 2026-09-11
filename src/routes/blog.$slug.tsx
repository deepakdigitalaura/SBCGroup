import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { Header } from "@/components/sbc/Header";
import { Footer } from "@/components/sbc/Footer";
import { CTABand } from "@/components/sbc/CTABand";
import { StatCard } from "@/components/sbc/StatBlock";
import { Reveal } from "@/components/sbc/primitives";
import { Breadcrumbs } from "@/components/sbc/Breadcrumbs";
import { JsonLd } from "@/components/sbc/JsonLd";
import { getPostBySlug } from "@/lib/blog-data";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPostBySlug(params.slug);
    if (!post) throw notFound();
    return post;
  },
  head: ({ loaderData }) => {
    const title = loaderData
      ? `${loaderData.title} | Sagar Burse Consulting`
      : "Blog | Sagar Burse Consulting";
    const description = loaderData?.metaDescription ?? "";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
        { property: "og:url", content: `https://sbcgroup.in/blog/${loaderData?.slug ?? ""}` },
        { property: "og:image", content: "https://sbcgroup.in/sbc-logo.png" },
        { property: "og:site_name", content: "Sagar Burse Consulting (SBC)" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
        { name: "twitter:image", content: "https://sbcgroup.in/sbc-logo.png" },
      ],
      links: loaderData
        ? [{ rel: "canonical", href: `https://sbcgroup.in/blog/${loaderData.slug}` }]
        : [],
    };
  },
  component: BlogPostDetail,
});

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function BlogPostDetail() {
  const post = Route.useLoaderData();
  const toc = post.body
    .filter((b): b is Extract<typeof b, { type: "h2" | "h3" }> => b.type === "h2" || b.type === "h3")
    .map((b) => ({ text: b.text, id: slugify(b.text), level: b.type }));

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    author: {
      "@type": "Person",
      name: "Sagar Burse",
      url: "https://sbcgroup.in/founder",
    },
    publisher: {
      "@type": "Organization",
      name: "Sagar Burse Consulting",
      logo: { "@type": "ImageObject", url: "https://sbcgroup.in/sbc-logo.png" },
    },
    datePublished: post.date,
    dateModified: post.date,
    description: post.metaDescription,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://sbcgroup.in/blog/${post.slug}`,
    },
  };

  return (
    <div className="min-h-screen bg-paper">
      <JsonLd data={articleSchema} />
      <Header />
      <Breadcrumbs trail={[{ label: "Blog", href: "/blog" }, { label: post.title }]} dark />
      <main>
        <section className="bg-ink py-14">
          <div className="shell">
            <Reveal className="max-w-3xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[oklch(0.82_0.11_92.89)]">
                {post.category}
              </p>
              <h1 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight text-paper md:text-[2.5rem]">
                {post.title}
              </h1>
              <p className="mt-3 text-[12px] font-medium uppercase tracking-[0.12em] text-paper/70">
                {post.author} ·{" "}
                {new Date(post.date).toLocaleDateString("en-IN", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </Reveal>
          </div>
        </section>

        <section className="section-y border-b border-ink-tint">
          <div className="shell">
            <div className="grid gap-10 md:grid-cols-3">
              <div className="space-y-5 md:col-span-2">
                {post.body.map((block, i) => {
                  if (block.type === "h2") {
                    return (
                      <Reveal key={i}>
                        <h2
                          id={slugify(block.text)}
                          className="scroll-mt-24 pt-3 font-display text-2xl font-semibold text-ink"
                        >
                          {block.text}
                        </h2>
                      </Reveal>
                    );
                  }
                  if (block.type === "h3") {
                    return (
                      <Reveal key={i}>
                        <h3
                          id={slugify(block.text)}
                          className="scroll-mt-24 pt-2 font-display text-lg font-semibold text-ink"
                        >
                          {block.text}
                        </h3>
                      </Reveal>
                    );
                  }
                  if (block.type === "ul") {
                    return (
                      <Reveal key={i}>
                        <ul className="space-y-2">
                          {block.items.map((item) => (
                            <li
                              key={item}
                              className="flex gap-2 text-[15.5px] leading-relaxed text-charcoal"
                            >
                              <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-gold-deep" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </Reveal>
                    );
                  }
                  if (block.type === "stats") {
                    return (
                      <Reveal key={i} className="grid gap-4 py-2 sm:grid-cols-3">
                        {block.items.map((s) => (
                          <StatCard key={s.label} value={s.value} label={s.label} />
                        ))}
                      </Reveal>
                    );
                  }
                  if (block.type === "cta") {
                    return (
                      <Reveal key={i}>
                        <a
                          href="/book-free-audit"
                          className="inline-flex items-center text-[12px] font-semibold uppercase tracking-[0.12em] text-gold-deep transition-colors hover:text-gold"
                        >
                          {block.text} →
                        </a>
                      </Reveal>
                    );
                  }
                  return (
                    <Reveal key={i}>
                      <p className="text-[15.5px] leading-relaxed text-charcoal">{block.text}</p>
                    </Reveal>
                  );
                })}

                <div className="!mt-12 border-t border-ink-tint pt-6">
                  <p className="text-[14px] leading-relaxed text-ink-soft">
                    <strong className="text-ink">About the Author:</strong> {post.author} is the
                    Founder &amp; Principal Consultant at Sagar Burse Consulting (SBC), Ahmedabad. He
                    works with MSME founders across India to build systems, strategy, and sustainable
                    growth.
                  </p>
                </div>

                <div className="!mt-10">
                  <Link
                    to="/blog"
                    className="text-[12px] font-semibold uppercase tracking-[0.12em] text-gold-deep transition-colors hover:text-gold"
                  >
                    ← All Articles
                  </Link>
                </div>
              </div>

              <Reveal className="h-fit bg-ink-wash p-6 md:sticky md:top-24">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-soft">
                  In This Article
                </p>
                <ul className="mt-4 space-y-2.5">
                  {toc.map((t) => (
                    <li key={t.id} className={t.level === "h3" ? "pl-3" : undefined}>
                      <a
                        href={`#${t.id}`}
                        className="flex gap-2 text-[14px] leading-snug text-charcoal transition-colors hover:text-gold-deep"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold-deep" />
                        {t.text}
                      </a>
                    </li>
                  ))}
                </ul>
                <a
                  href="/book-free-audit"
                  className="mt-6 inline-flex w-full items-center justify-center bg-ink px-3 py-2.5 text-[11px] font-medium uppercase tracking-[0.1em] text-paper transition-colors hover:bg-charcoal"
                >
                  Book Free Audit
                </a>
              </Reveal>
            </div>
          </div>
        </section>
        <CTABand />
      </main>
      <Footer />
    </div>
  );
}
