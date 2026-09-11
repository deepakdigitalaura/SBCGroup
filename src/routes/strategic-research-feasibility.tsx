import { createFileRoute } from "@tanstack/react-router";
import {
  LineChart,
  ClipboardList,
  FileText,
  BarChart3,
  GraduationCap,
  Compass,
  FileSearch,
  Database,
  Microscope,
  FileOutput,
  Presentation,
} from "lucide-react";
import { Header } from "@/components/sbc/Header";
import { Footer } from "@/components/sbc/Footer";
import { CTABand } from "@/components/sbc/CTABand";
import { StatCard } from "@/components/sbc/StatBlock";
import { PracticeAreaCard } from "@/components/sbc/PracticeAreaCard";
import { Reveal } from "@/components/sbc/primitives";
import { Breadcrumbs } from "@/components/sbc/Breadcrumbs";
import { JsonLd } from "@/components/sbc/JsonLd";

const title = "Strategic Research & Feasibility Studies | SBC, Ahmedabad";
const description =
  "Data-driven market research, feasibility studies and DPRs that turn information into strategic advantage — for MSMEs, institutions and industry bodies.";

export const Route = createFileRoute("/strategic-research-feasibility")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://sbcgroup.in/strategic-research-feasibility" },
      { property: "og:image", content: "https://sbcgroup.in/sbc-logo.png" },
      { property: "og:site_name", content: "Sagar Burse Consulting (SBC)" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: "https://sbcgroup.in/sbc-logo.png" },
    ],
    links: [
      { rel: "canonical", href: "https://sbcgroup.in/strategic-research-feasibility" },
    ],
  }),
  component: StrategicResearch,
});

const audience = [
  "MSMEs planning expansion or new ventures",
  "Institutions requiring market studies before setup",
  "Industry bodies needing sector analysis & data",
  "Government bodies requiring evidence-based research",
  "Organisations seeking DPRs for funding or approvals",
];

const services = [
  {
    icon: LineChart,
    title: "Market Research",
    description:
      "Comprehensive market analysis — market size, demand assessment, competitor landscape, customer segmentation and growth potential.",
  },
  {
    icon: ClipboardList,
    title: "Feasibility Studies",
    description:
      "Technical, financial and operational feasibility assessment for new ventures, expansions, product launches and institutional setups.",
  },
  {
    icon: FileText,
    title: "DPR Preparation",
    description:
      "Detailed Project Reports for funding applications, government approvals, bank loans and investor presentations — research-backed and audit-ready.",
  },
  {
    icon: BarChart3,
    title: "Sector & Industry Studies",
    description:
      "In-depth sector analysis for industry associations, government bodies and corporates — trends, challenges, opportunities and strategic recommendations.",
  },
  {
    icon: GraduationCap,
    title: "Academic & Applied Research",
    description:
      "Primary and secondary research using rigorous methodology — SEM/AMOS, quantitative and qualitative frameworks for data-driven decision making.",
  },
  {
    icon: Compass,
    title: "Strategic Advisory",
    description:
      "Translating research findings into actionable strategy — market entry, expansion planning, diversification and investment decision support.",
  },
];

const process = [
  {
    n: "01",
    icon: FileSearch,
    title: "Brief & Scope Definition",
    copy: "Understanding your decision context, research objectives, timelines and deliverable format — defining a clear scope before work begins.",
  },
  {
    n: "02",
    icon: Database,
    title: "Primary & Secondary Research",
    copy: "Data collection through field surveys, stakeholder interviews, government databases, industry reports and published research — rigorous and multi-source.",
  },
  {
    n: "03",
    icon: Microscope,
    title: "Analysis & Interpretation",
    copy: "Quantitative and qualitative analysis using proven frameworks — SEM/AMOS, financial modelling, competitive benchmarking and scenario planning.",
  },
  {
    n: "04",
    icon: FileOutput,
    title: "Report & Recommendations",
    copy: "Clear, structured reports with executive summary, findings, insights and actionable recommendations — designed for decision-makers, not academics.",
  },
  {
    n: "05",
    icon: Presentation,
    title: "Presentation & Advisory",
    copy: "Board or leadership presentation of findings — walking decision-makers through insights, answering questions and supporting strategic decisions.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Strategic Research & Feasibility",
  provider: { "@type": "Organization", name: "Sagar Burse Consulting" },
  areaServed: { "@type": "Country", name: "India" },
  description,
};

function StrategicResearch() {
  return (
    <div className="min-h-screen bg-paper">
      <JsonLd data={serviceSchema} />
      <Header />
      <Breadcrumbs trail={[{ label: "Our Expertise" }, { label: "Strategic Research & Feasibility" }]} dark />
      <main>
        <section className="section-y border-b border-ink-tint bg-ink">
          <div className="shell">
            <Reveal className="max-w-3xl" as="section">
              <h1 className="font-display text-4xl font-semibold tracking-tight text-paper md:text-[3rem]">
                Strategic Research &amp; Feasibility
              </h1>
              <p className="mt-5 text-[17px] leading-relaxed text-paper/80">
                Data-driven market research and feasibility studies that turn information into
                strategic advantage — for MSMEs, institutions and industry bodies making critical
                decisions.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="section-y border-b border-ink-tint bg-ink-wash">
          <div className="shell grid gap-10 lg:grid-cols-2">
            <Reveal as="section">
              <h2 className="font-display text-3xl font-semibold tracking-tight text-ink md:text-[2.5rem]">
                Decisions Without Data Are Just Opinions
              </h2>
              <p className="mt-4 text-[17px] leading-relaxed text-charcoal">
                Most organisations make critical decisions — entering new markets, launching new
                products, setting up new facilities — based on assumptions rather than evidence.
                The result is wasted capital, missed opportunities and failed ventures. SBC's
                Strategic Research &amp; Feasibility division provides rigorous, data-driven
                research that gives decision-makers the confidence to act — or the clarity to
                pivot before it's too late.
              </p>
            </Reveal>
            <Reveal as="section" className="flex flex-col justify-center gap-3">
              {audience.map((a) => (
                <div
                  key={a}
                  className="border border-ink-tint bg-paper px-4 py-3 text-[15px] leading-relaxed text-charcoal"
                >
                  {a}
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        <section className="section-y border-b border-ink-tint">
          <div className="shell">
            <Reveal as="section">
              <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
                Our Research Edge
              </h2>
            </Reveal>
            <Reveal className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3" as="section">
              <StatCard value="7+" label="Published Research Papers — SEM/AMOS Expertise" />
              <StatCard value="PhD" label="Research-Grade Rigour in Every Study & Report" />
              <StatCard value="8+" label="Years of Applied Research Across Sectors & Domains" />
            </Reveal>
          </div>
        </section>

        <section className="section-y border-b border-ink-tint bg-ink-wash">
          <div className="shell">
            <Reveal as="section">
              <h2 className="font-display text-3xl font-semibold tracking-tight text-ink md:text-[2.5rem]">
                Research &amp; Feasibility Services
              </h2>
            </Reveal>
            <Reveal className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" as="section">
              {services.map((s) => (
                <PracticeAreaCard key={s.title} icon={s.icon} title={s.title} description={s.description} />
              ))}
            </Reveal>
          </div>
        </section>

        <section className="section-y border-b border-ink-tint">
          <div className="shell">
            <Reveal className="max-w-3xl" as="section">
              <h2 className="font-display text-3xl font-semibold tracking-tight text-ink md:text-[2.5rem]">
                Our Research Process
              </h2>
            </Reveal>
            <Reveal className="mt-9" as="section">
              <ol className="divide-y divide-ink-tint border-t border-ink-tint">
                {process.map(({ n, title, copy }) => (
                  <li key={n} className="flex flex-col gap-3 py-6 sm:flex-row sm:items-start sm:gap-6">
                    <div className="flex shrink-0 items-center gap-3 sm:w-64">
                      <span className="grid size-9 shrink-0 place-items-center rounded-full border border-gold text-[12px] font-semibold text-gold">
                        {n}
                      </span>
                      <h3 className="text-[13px] font-semibold uppercase tracking-[0.12em] text-ink">
                        {title}
                      </h3>
                    </div>
                    <p className="text-[15px] leading-relaxed text-charcoal sm:flex-1">{copy}</p>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </section>

        <section className="section-y border-b border-ink-tint bg-ink text-paper">
          <div className="shell">
            <Reveal className="mx-auto max-w-2xl text-center" as="section">
              <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-paper md:text-[2.5rem]">
                Need Research You Can Actually Act On?
              </h2>
              <p className="mt-4 text-[17px] leading-relaxed text-paper/80">
                Let's discuss your research needs. Book a consultation and find out how SBC can
                help you make better decisions.
              </p>
            </Reveal>
          </div>
        </section>

        <CTABand />
      </main>
      <Footer />
    </div>
  );
}
