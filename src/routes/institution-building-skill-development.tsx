import { createFileRoute } from "@tanstack/react-router";
import {
  Compass,
  ScrollText,
  Landmark,
  BookOpen,
  Globe2,
  Rocket,
  Map,
  Handshake,
  ClipboardCheck,
  GraduationCap,
} from "lucide-react";
import { Header } from "@/components/sbc/Header";
import { Footer } from "@/components/sbc/Footer";
import { CTABand } from "@/components/sbc/CTABand";
import { StatCard } from "@/components/sbc/StatBlock";
import { PracticeAreaCard } from "@/components/sbc/PracticeAreaCard";
import { Reveal } from "@/components/sbc/primitives";
import { Breadcrumbs } from "@/components/sbc/Breadcrumbs";
import { JsonLd } from "@/components/sbc/JsonLd";

const title = "Institution Building & Skill Development | SBC, Ahmedabad";
const description =
  "End-to-end advisory for universities and skill centres — from vision to launch, navigating AICTE, UGC, NSDC, SSC and state regulatory bodies.";

export const Route = createFileRoute("/institution-building-skill-development")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://sbcgroup.in/institution-building-skill-development",
      },
    ],
  }),
  component: InstitutionBuilding,
});

const servedBy = [
  "Corporates wanting to set up universities or skill centres",
  "Industry associations establishing educational institutions",
  "PSUs and government bodies building centres of excellence",
  "Existing institutions needing compliance or restructuring support",
];

const universitySetup = [
  {
    icon: Compass,
    title: "Vision & Strategic Roadmap",
    description:
      "Vision, mission, institutional positioning and short/medium/long-term growth roadmap.",
  },
  {
    icon: ScrollText,
    title: "AICTE, UGC & Govt Compliance",
    description:
      "End-to-end regulatory navigation — application to approval with all statutory requirements handled.",
  },
  {
    icon: Landmark,
    title: "Governance & Statutory Design",
    description:
      "Board structure, governance framework, statutory body design and leadership recruitment.",
  },
  {
    icon: BookOpen,
    title: "Curriculum & Academic Design",
    description:
      "NEP 2020 aligned curriculum, academic framework, assessment design and faculty standards.",
  },
  {
    icon: Globe2,
    title: "Internationalization & MoUs",
    description:
      "Global partnership strategy, international MoU frameworks and cross-border collaboration.",
  },
  {
    icon: Rocket,
    title: "Implementation & Launch",
    description:
      "Infrastructure planning, first batch launch support, post-approval compliance and operations.",
  },
];

const skillPhases = [
  {
    n: "01",
    icon: Map,
    title: "Strategy & Roadmap",
    copy: "Vision, mission, institutional positioning, short/medium/long-term growth roadmap and feasibility assessment for skill development initiatives.",
  },
  {
    n: "02",
    icon: Handshake,
    title: "Government Liaison & Regulatory Navigation",
    copy: "End-to-end coordination with NSDC, SSCs, AICTE, UGC, State Education Departments and industry bodies — from application to approval.",
  },
  {
    n: "03",
    icon: ClipboardCheck,
    title: "Sector Skill Council & SIDH Affiliation",
    copy: "Identification of appropriate SSC, SIDH TP profile setup, QP alignment, documentation package, inspection readiness and MoU signing.",
  },
  {
    n: "04",
    icon: BookOpen,
    title: "Curriculum & Academic Framework",
    copy: "NSQF-aligned curriculum design, QP/NOS mapping, assessment framework, trainer qualification standards — across any industry domain.",
  },
  {
    n: "05",
    icon: GraduationCap,
    title: "Implementation & Launch Support",
    copy: "Infrastructure framework, college/industry MoU templates, batch planning, first cohort launch and post-affiliation compliance.",
  },
];

const engagements = [
  {
    tag: "Public Sector",
    name: "Skill-Focused Public University",
    description:
      "Vision, strategic roadmap, AICTE/UGC compliance, curriculum design, governance & internationalization — Gujarat Public Sector. Full lifecycle contribution from concept to launch.",
  },
  {
    tag: "PSU Advisory",
    name: "Centre of Excellence in Mining",
    description:
      "Institutional positioning, curriculum design for mining sector, industry & international partnerships, governance & compliance framework — Gujarat PSU.",
  },
  {
    tag: "Private Sector",
    name: "Industry Association University",
    description:
      "Vision & strategic framework, AICTE/UGC affiliation support, NEP 2020 curriculum design, governance & leadership recruitment — Private sector institution.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Institution Building & Skill Development",
  provider: { "@type": "Organization", name: "Sagar Burse Consulting" },
  areaServed: { "@type": "Country", name: "India" },
  description,
};

function InstitutionBuilding() {
  return (
    <div className="min-h-screen bg-paper">
      <JsonLd data={serviceSchema} />
      <Header />
      <Breadcrumbs trail={[{ label: "Our Expertise" }, { label: "Institution Building & Skill Development" }]} dark />
      <main>
        <section className="section-y border-b border-ink-tint bg-ink">
          <div className="shell">
            <Reveal className="max-w-3xl" as="section">
              <h1 className="font-display text-4xl font-semibold tracking-tight text-paper md:text-[3rem]">
                Institution Building &amp; Skill Development
              </h1>
              <p className="mt-5 text-[17px] leading-relaxed text-paper/80">
                End-to-end advisory for universities, skill centres and educational institutions —
                from vision to launch and beyond.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="section-y border-b border-ink-tint bg-ink-wash">
          <div className="shell grid gap-10 lg:grid-cols-2">
            <Reveal as="section">
              <h2 className="font-display text-3xl font-semibold tracking-tight text-ink md:text-[2.5rem]">
                Building Institutions That Create Lasting Impact
              </h2>
              <p className="mt-4 text-[17px] leading-relaxed text-charcoal">
                Setting up a university, skill centre or educational institution involves complex
                processes including regulatory approvals, governance design, curriculum
                development, compliance management and leadership recruitment. SBC offers
                comprehensive advisory spanning concept through launch, navigating AICTE, UGC,
                NSDC, SSC and state regulatory bodies.
              </p>
            </Reveal>
            <Reveal as="section" className="flex flex-col justify-center gap-3">
              {servedBy.map((s) => (
                <div
                  key={s}
                  className="border border-ink-tint bg-paper px-4 py-3 text-[15px] leading-relaxed text-charcoal"
                >
                  {s}
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        <section className="section-y border-b border-ink-tint">
          <div className="shell">
            <Reveal as="section">
              <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
                Track Record
              </h2>
            </Reveal>
            <Reveal className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3" as="section">
              <StatCard value="3+" label="University & Institutional Projects — Full Lifecycle" />
              <StatCard value="5+" label="Regulatory Bodies Navigated — AICTE, UGC, NSDC, SSC & State" />
              <StatCard value="8+" label="Years of Institutional Setup & Skill Development Experience" />
            </Reveal>
          </div>
        </section>

        <section className="section-y border-b border-ink-tint bg-ink-wash">
          <div className="shell">
            <Reveal as="section">
              <h2 className="font-display text-3xl font-semibold tracking-tight text-ink md:text-[2.5rem]">
                University &amp; Institution Setup
              </h2>
            </Reveal>
            <Reveal className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" as="section">
              {universitySetup.map((s) => (
                <PracticeAreaCard key={s.title} icon={s.icon} title={s.title} description={s.description} />
              ))}
            </Reveal>
          </div>
        </section>

        <section className="section-y border-b border-ink-tint">
          <div className="shell">
            <Reveal className="max-w-3xl" as="section">
              <h2 className="font-display text-3xl font-semibold tracking-tight text-ink md:text-[2.5rem]">
                Skill Centre Setup — End-to-End Capability
              </h2>
            </Reveal>
            <Reveal className="mt-9" as="section">
              <ol className="divide-y divide-ink-tint border-t border-ink-tint">
                {skillPhases.map(({ n, title, copy }) => (
                  <li key={n} className="flex flex-col gap-4 py-6 sm:flex-row sm:items-start sm:gap-6">
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

        <section className="section-y border-b border-ink-tint bg-ink-wash">
          <div className="shell">
            <Reveal as="section">
              <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
                Key Institutional Engagements
              </h2>
            </Reveal>
            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              {engagements.map((e) => (
                <Reveal key={e.name} as="section" className="border border-ink-tint bg-paper p-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gold">
                    {e.tag}
                  </p>
                  <h3 className="mt-2 font-display text-lg font-semibold text-ink">{e.name}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-charcoal">{e.description}</p>
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
