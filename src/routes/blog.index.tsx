import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Header } from "@/components/sbc/Header";
import { Footer } from "@/components/sbc/Footer";
import { CTABand } from "@/components/sbc/CTABand";
import { Reveal } from "@/components/sbc/primitives";
import { Breadcrumbs } from "@/components/sbc/Breadcrumbs";
import { posts } from "@/lib/blog-data";

const title = "Blog | SBC MSME Insights & Business Advisory";
const description =
  "MSME Insights & Business Advisory Blog by Sagar Burse Consulting — practical thinking on business systems, growth and institution building.";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://sbcgroup.in/blog" }],
  }),
  component: Blog,
});

function Blog() {
  return (
    <div className="min-h-screen bg-paper">
      <Header />
      <Breadcrumbs trail={[{ label: "Blog" }]} dark />
      <main>
        <section className="section-y border-b border-ink-tint bg-ink">
          <div className="shell">
            <Reveal as="section" className="max-w-2xl">
              <h1 className="font-display text-4xl font-semibold tracking-tight text-paper md:text-[3rem]">
                MSME Insights &amp; Business Advisory
              </h1>
              <p className="mt-4 text-[17px] leading-relaxed text-paper/80">
                Practical thinking on business systems, growth and institution building from Sagar
                Burse Consulting.
              </p>
            </Reveal>

            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {posts.map((post) => (
                <Reveal key={post.slug} as="section">
                  <Link
                    to="/blog/$slug"
                    params={{ slug: post.slug }}
                    className="flex h-full flex-col border border-ink-tint bg-card p-6 transition-colors hover:border-gold/60"
                  >
                    <h2 className="font-display text-xl font-semibold leading-snug text-ink">
                      {post.title}
                    </h2>
                    <p className="mt-3 flex-1 text-[15px] leading-relaxed text-charcoal">
                      {post.excerpt}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-[12px] font-medium uppercase tracking-[0.16em] text-gold">
                      Read Article <ArrowUpRight className="size-3.5" />
                    </span>
                  </Link>
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
