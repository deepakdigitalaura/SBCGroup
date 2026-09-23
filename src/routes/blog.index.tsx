import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ClipboardCheck, Newspaper, TrendingUp } from "lucide-react";
import { Header } from "@/components/sbc/Header";
import { Footer } from "@/components/sbc/Footer";
import { CTABand } from "@/components/sbc/CTABand";
import { Reveal } from "@/components/sbc/primitives";
import { Breadcrumbs } from "@/components/sbc/Breadcrumbs";
import { posts, type BlogPost } from "@/lib/blog-data";

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
      { property: "og:url", content: "https://sbcgroup.in/blog" },
      { property: "og:image", content: "https://sbcgroup.in/sbc-logo.png" },
      { property: "og:site_name", content: "Sagar Burse Consulting (SBC)" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: "https://sbcgroup.in/sbc-logo.png" },
    ],
    links: [{ rel: "canonical", href: "https://sbcgroup.in/blog" }],
  }),
  component: Blog,
});

// The hiring-checklist post lives outside blog-data.ts as its own standalone
// route, so it's listed here manually until blog-data.ts is extended to
// support posts that aren't rendered through the shared blog template.
type ListingPost = Pick<BlogPost, "title" | "excerpt" | "author" | "date" | "category"> & {
  slug: string;
  href?: string;
  readMinutes: number;
};

const externalPosts: ListingPost[] = [
  {
    slug: "management-consultant-hiring-checklist-ahmedabad",
    href: "/blog/management-consultant-hiring-checklist-ahmedabad",
    title: "Management Consultant Hiring Checklist: What to Check Before You Hire in Ahmedabad",
    excerpt:
      "A practical, hire-ready checklist — 10 points to check, the exact questions to ask, how to read case studies and the red flags that mean you should walk away.",
    author: "Dr. Sagar Burse",
    date: "2026-09-23",
    category: "Consulting Advice",
    readMinutes: 8,
  },
];

function wordsToMinutes(post: BlogPost) {
  const words = post.body
    .map((b) => ("text" in b ? b.text : "items" in b ? b.items.join(" ") : ""))
    .join(" ")
    .split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-IN", { year: "numeric", month: "long" });
}

const categoryIcons: Record<string, typeof Newspaper> = {
  "MSME Growth": TrendingUp,
  "Consulting Advice": ClipboardCheck,
};

function Blog() {
  const allPosts: ListingPost[] = useMemo(() => {
    const fromData: ListingPost[] = posts.map((p) => ({
      slug: p.slug,
      title: p.title,
      excerpt: p.excerpt,
      author: p.author,
      date: p.date,
      category: p.category,
      readMinutes: wordsToMinutes(p),
    }));
    return [...externalPosts, ...fromData].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
    );
  }, []);

  const categories = useMemo(
    () => ["All Articles", ...Array.from(new Set(allPosts.map((p) => p.category)))],
    [allPosts],
  );
  const [active, setActive] = useState<string>("All Articles");

  const visible = allPosts.filter((p) => active === "All Articles" || p.category === active);

  return (
    <div className="min-h-screen bg-paper">
      <Header />
      <Breadcrumbs trail={[{ label: "Blog" }]} dark />
      <main>
        <section className="border-b border-ink-tint bg-ink">
          <div className="shell pb-10 pt-8">
            <Reveal as="section" className="max-w-2xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[oklch(0.82_0.11_92.89)]">
                SBC Knowledge
              </p>
              <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-paper md:text-[3rem]">
                MSME Insights &amp; Business Advisory
              </h1>
              <p className="mt-4 text-[17px] leading-relaxed text-paper/80">
                Practical thinking on business systems, growth and institution building from Sagar
                Burse Consulting.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="border-b border-ink-tint bg-ink-wash">
          <div className="shell flex flex-wrap items-center gap-3 py-6">
            <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-soft">
              Browse
            </span>
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setActive(c)}
                className={
                  active === c
                    ? "bg-gold px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-paper"
                    : "border border-ink-tint px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-charcoal transition-colors hover:border-gold hover:text-gold-deep"
                }
              >
                {c}
              </button>
            ))}
          </div>
        </section>

        <section className="section-y">
          <div className="shell">
            {visible.length === 0 ? (
              <p className="text-[15px] text-ink-soft">No articles in this category yet.</p>
            ) : (
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {visible.map((post) => {
                  const Icon = categoryIcons[post.category] ?? Newspaper;
                  return (
                    <Reveal key={post.slug} as="section">
                      <Link
                        to={post.href ?? "/blog/$slug"}
                        params={post.href ? undefined : { slug: post.slug }}
                        className="group flex h-full flex-col overflow-hidden rounded-xl border border-ink-tint bg-card shadow-[0_1px_2px_rgba(20,20,20,0.06)] transition-shadow hover:shadow-[0_12px_28px_rgba(20,20,20,0.12)]"
                      >
                        <div className="relative flex h-44 shrink-0 items-center justify-center overflow-hidden bg-ink">
                          <div className="absolute inset-0 bg-gradient-to-br from-ink via-ink to-charcoal opacity-90" />
                          <Icon className="relative size-14 text-paper/20 transition-transform duration-300 group-hover:scale-110" />
                          <span className="absolute left-4 top-4 rounded-full bg-gold px-3 py-1 text-[10.5px] font-semibold uppercase tracking-[0.1em] text-paper shadow-sm">
                            {post.category}
                          </span>
                        </div>
                        <div className="flex flex-1 flex-col p-6">
                          <div className="flex items-center gap-2 text-[12px] text-ink-soft">
                            <span>{formatDate(post.date)}</span>
                            <span className="h-1 w-1 rounded-full bg-ink-tint" />
                            <span>{post.readMinutes} min read</span>
                          </div>
                          <h3 className="mt-3 font-display text-lg font-semibold leading-snug text-gold-deep transition-colors group-hover:text-gold">
                            {post.title}
                          </h3>
                          <p className="mt-2.5 flex-1 text-[14.5px] leading-relaxed text-charcoal">
                            {post.excerpt}
                          </p>
                          <span className="mt-5 inline-flex w-fit items-center gap-1.5 border-b border-gold-deep pb-0.5 text-[11.5px] font-semibold uppercase tracking-[0.12em] text-gold-deep transition-colors group-hover:border-gold group-hover:text-gold">
                            Read Article
                            <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                          </span>
                        </div>
                      </Link>
                    </Reveal>
                  );
                })}
              </div>
            )}
          </div>
        </section>
        <CTABand />
      </main>
      <Footer />
    </div>
  );
}
