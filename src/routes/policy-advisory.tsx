import { createFileRoute } from "@tanstack/react-router";
import {
  FileSearch,
  Landmark,
  Scale,
  Handshake,
  BarChart3,
  ClipboardCheck,
  Building2,
  Users2,
  GraduationCap,
  Microscope,
} from "lucide-react";
import { Header } from "@/components/sbc/Header";
import { Footer } from "@/components/sbc/Footer";
import { CTABand } from "@/components/sbc/CTABand";
import { PracticeAreaCard } from "@/components/sbc/PracticeAreaCard";
import { Reveal } from "@/components/sbc/primitives";
import { Breadcrumbs } from "@/components/sbc/Breadcrumbs";
import { JsonLd } from "@/components/sbc/JsonLd";

const title = "Policy Advisory for Government Bodies | SBC, Ahmedabad";
const description =
  "Research-backed, evidence-driven policy advisory for government bodies, industry associations and public institutions across India.";

export const Route = createFileRoute("/policy-advisory")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://sbcgroup.in/policy-advisory" },
      { property: "og:image", content: "https://sbcgroup.in/sbc-logo.png" },
      { property: "og:site_name", content: "Sagar Burse Consulting (SBC)" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: "https://sbcgroup.in/sbc-logo.png" },
    ],
    links: [{ rel: "canonical", href: "https://sbcgroup.in/policy-advisory" }],
  }),
  component: PolicyAdvisory,
});

const services = [
  { icon: FileSearch, title: "Policy Research & Analysis" },
  { icon: Landmark, title: "Government Body Advisory" },
  { icon: Scale, title: "Regulatory Framework Design" },
  { icon: Handshake, title: "Industry-Government Liaison" },
  { icon: BarChart3, title: "Evidence-Based Policy Making" },
  { icon: ClipboardCheck, title: "Strategic Policy Implementation" },
];

const gapSteps = [
  {
    title: "The Problem",
    description:
      "Policy decisions made without adequate research, ground reality or stakeholder input — resulting in frameworks that fail in practice.",
  },
  {
    title: "The SBC Approach",
    description:
      "Evidence-based advisory grounded in research, stakeholder consultation and real-world implementation experience across business and institutional sectors.",
  },
  {
    title: "The Outcome",
    description:
      "Policy frameworks that are practical, implementable and backed by data — designed to achieve real outcomes for the people and organisations they serve.",
  },
];

const clients = [
  {
    icon: Building2,
    title: "Government Bodies",
    description:
      "State and central government departments seeking evidence-based research and policy framework design for MSME and institutional development.",
  },
  {
    icon: Users2,
    title: "Industry Associations",
    description:
      "Industry bodies and trade associations requiring policy advocacy support, sector analysis and government liaison for their member businesses.",
  },
  {
    icon: GraduationCap,
    title: "Public Institutions",
    description:
      "PSUs, universities and public sector bodies needing regulatory framework design, compliance advisory and institutional policy support.",
  },
  {
    icon: Microscope,
    title: "Research Organisations",
    description:
      "Think tanks and research bodies requiring primary research, sector studies and evidence-based policy recommendations for publication or submission.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Policy Advisory",
  provider: { "@type": "Organization", name: "Sagar Burse Consulting" },
  areaServed: { "@type": "Country", name: "India" },
  description,
};

function PolicyAdvisory() {
  return (
    <div className="min-h-screen bg-paper">
      <JsonLd data={serviceSchema} />
      <Header />
      <Breadcrumbs trail={[{ label: "Our Expertise" }, { label: "Policy Advisory" }]} dark />
      <main>
        <section className="section-y border-b border-ink-tint bg-ink">
          <div className="shell">
            <Reveal className="max-w-3xl" as="section">
              <h1 className="font-display text-4xl font-semibold tracking-tight text-paper md:text-[3rem]">
                Policy Advisory — Research-Backed. Evidence-Driven.
              </h1>
              <p className="mt-5 text-[17px] leading-relaxed text-paper/80">
                SBC provides policy advisory services for government bodies, industry associations
                and public institutions — grounded in research, data and real-world implementation
                experience.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="section-y border-b border-ink-tint bg-ink-wash">
          <div className="shell">
            <Reveal as="section">
              <h2 className="font-display text-3xl font-semibold tracking-tight text-ink md:text-[2.5rem]">
                Shaping Policy Through Research &amp; Evidence
              </h2>
              <p className="mt-4 text-[17px] leading-relaxed text-charcoal lg:columns-2 lg:gap-10">
                Good policy requires good research. Too many policy decisions are made without
                adequate data, ground reality assessment or stakeholder consultation — resulting
                in frameworks that do not work in practice. SBC's Policy Advisory division brings
                the same rigour and implementation focus to policy work that we bring to business
                consulting and institutional setup — evidence-based, outcome-oriented and grounded
                in real-world understanding. We work with government bodies, industry associations
                and public institutions to develop frameworks that are practical, implementable
                and backed by data — designed to achieve real outcomes for the people and
                organisations they serve.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="section-y border-b border-ink-tint">
          <div className="shell">
            <Reveal as="section">
              <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
                Our Services
              </h2>
            </Reveal>
            <Reveal className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" as="section">
              {services.map((s, i) => (
                <div
                  key={s.title}
                  className="group flex items-start gap-4 border border-ink-tint bg-paper p-6 transition-colors hover:border-gold"
                >
                  <s.icon className="mt-1 h-6 w-6 shrink-0 text-gold" strokeWidth={1.5} />
                  <div>
                    <span className="text-[13px] font-semibold text-ink-soft">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-1 font-display text-base font-semibold leading-snug text-ink">
                      {s.title}
                    </h3>
                  </div>
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        <section className="section-y border-b border-ink-tint bg-ink-wash">
          <div className="shell">
            <Reveal className="max-w-2xl" as="section">
              <h2 className="font-display text-3xl font-semibold tracking-tight text-ink md:text-[2.5rem]">
                The Gap in Policy Making
              </h2>
            </Reveal>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {gapSteps.map((g) => (
                <Reveal key={g.title} as="section" className="border border-ink-tint bg-paper p-6">
                  <h3 className="text-[13px] font-semibold uppercase tracking-[0.14em] text-gold">
                    {g.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-charcoal">{g.description}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section-y border-b border-ink-tint">
          <div className="shell">
            <Reveal as="section">
              <h2 className="font-display text-3xl font-semibold tracking-tight text-ink md:text-[2.5rem]">
                Our Policy Advisory Clients
              </h2>
            </Reveal>
            <Reveal className="mt-8 grid gap-5 sm:grid-cols-2" as="section">
              {clients.map((c) => (
                <PracticeAreaCard key={c.title} icon={c.icon} title={c.title} description={c.description} />
              ))}
            </Reveal>
          </div>
        </section>

        <section className="section-y border-b border-ink-tint bg-ink text-paper">
          <div className="shell">
            <Reveal className="mx-auto max-w-2xl text-center" as="section">
              <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-paper md:text-[2.5rem]">
                Interested in Policy Advisory?
              </h2>
              <p className="mt-4 text-[17px] leading-relaxed text-paper/80">
                Contact SBC to discuss your policy advisory requirements. We work with select
                government bodies, industry associations and public institutions across India.
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
