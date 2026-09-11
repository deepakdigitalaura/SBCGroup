import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/sbc/Header";
import { Footer } from "@/components/sbc/Footer";
import { CTABand } from "@/components/sbc/CTABand";
import { Reveal } from "@/components/sbc/primitives";
import { Breadcrumbs } from "@/components/sbc/Breadcrumbs";

const title = "SBC Knowledge | Resources & Downloads";
const description =
  "Curated research, sector analyses, and advisory perspectives from Sagar Burse Consulting. Free reports across MSME, policy and institution-building topics.";

const categoryNames = [
  "MSME Ecosystem & Growth Analysis",
  "Business Intelligence & Market Insights",
  "Policy Research & Governance Advisory",
  "Education Reform & Human Capital Development",
  "Perspectives & Thought Leadership",
];

type Report = {
  category: string;
  title: string;
  description: string;
  date: string;
  href: string;
};

const reports: Report[] = [
  {
    category: "MSME Ecosystem & Growth Analysis",
    title:
      "Operational Gaps in Gujarat MSMEs: A Sectoral Assessment of People, Process, Finance and Governance Deficiencies across Gujarat's Industrial Clusters",
    description:
      "A research-based assessment of six operational gap domains -- HR, finance, operations, sales, technology and governance -- across Gujarat's key MSME industrial clusters, based on 17 verified secondary sources.",
    date: "May 2026",
    href: "/uploads/reports/Operational-Gaps-in-Gujarat-MSMEs-SBC-Research.pdf",
  },
  {
    category: "Business Intelligence & Market Insights",
    title: "GCC India 2026: Opportunity, Readiness & the People Gap",
    description:
      "A strategic assessment of India's Global Capability Centre boom, the Gujarat and Ahmedabad Tier-2 opportunity, and the leadership and talent gaps constraining GCC readiness.",
    date: "June 2026",
    href: "/uploads/reports/GCC-India-2026-SBC-Report.pdf",
  },
];

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://sbcgroup.in/resources" }],
  }),
  component: Resources,
});

function Resources() {
  const [category, setCategory] = useState("All Categories");

  const filtered = useMemo(() => {
    return reports.filter((r) => category === "All Categories" || r.category === category);
  }, [category]);

  return (
    <div className="min-h-screen bg-paper">
      <Header />
      <Breadcrumbs trail={[{ label: "SBC Knowledge" }]} />
      <main>
        <section className="section-y border-b border-ink-tint bg-ink-wash">
          <div className="shell">
            <Reveal as="section" className="max-w-2xl">
              <h1 className="font-display text-4xl font-semibold tracking-tight text-ink md:text-[3rem]">
                Resources &amp; Downloads
              </h1>
              <p className="mt-4 text-[17px] leading-relaxed text-charcoal">
                Curated research, sector analyses, and advisory perspectives from SBC. All free
                reports are available for download.
              </p>
            </Reveal>

            <Reveal as="section" className="mt-10">
              <img
                src="/images/resources-cover.png"
                alt="SBC Knowledge Centre"
                className="h-auto w-full border border-ink-tint object-contain"
              />
            </Reveal>

            <Reveal as="section" className="mt-8">
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="border border-ink-tint bg-card px-3 py-2.5 text-[15px] text-ink focus:border-gold focus:outline-none sm:w-72"
              >
                <option>All Categories</option>
                {categoryNames.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </Reveal>

            <p className="mt-6 text-[14px] text-charcoal/70">
              {filtered.length} {filtered.length === 1 ? "report" : "reports"} found
            </p>

            <div className="mt-4 grid gap-5 lg:grid-cols-3">
              {filtered.map((r) => (
                <Reveal
                  key={r.href}
                  as="section"
                  className="flex h-full flex-col border-t-2 border-gold bg-card p-5"
                >
                  <span className="text-[12px] font-semibold text-gold-deep">{r.category}</span>
                  <h3 className="mt-2 font-display text-lg font-semibold leading-snug text-ink">
                    {r.title}
                  </h3>
                  <p className="mt-2 flex-1 text-[15px] leading-relaxed text-charcoal">
                    {r.description}
                  </p>
                  <p className="mt-3 text-[13px] text-charcoal/60">{r.date}</p>
                  <a
                    href={r.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center justify-center bg-ink px-4 py-2.5 text-[14px] font-semibold text-paper transition-colors hover:bg-gold-deep"
                  >
                    Download Report
                  </a>
                </Reveal>
              ))}
              {filtered.length === 0 && (
                <p className="text-[15px] text-charcoal/70">No reports match your search.</p>
              )}
            </div>
          </div>
        </section>

        <section className="section-y">
          <div className="shell">
            <Reveal
              as="section"
              className="border border-ink-tint bg-card p-6 text-center text-[15px] text-charcoal"
            >
              New free reports are added regularly across all practice areas. Reach out for
              specific research or a custom advisory report.
            </Reveal>
          </div>
        </section>
        <CTABand />
      </main>
      <Footer />
    </div>
  );
}
