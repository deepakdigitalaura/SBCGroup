import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Briefcase,
  School,
  GraduationCap,
  Landmark,
  Quote,
  Building2,
  Target,
  Award,
  BookOpen,
} from "lucide-react";
import { Header } from "@/components/sbc/Header";
import { Footer } from "@/components/sbc/Footer";
import { CTABand } from "@/components/sbc/CTABand";
import { Reveal } from "@/components/sbc/primitives";
import { StatBlock } from "@/components/sbc/StatBlock";
import { PracticeAreaCard } from "@/components/sbc/PracticeAreaCard";
import { Breadcrumbs } from "@/components/sbc/Breadcrumbs";
import { JsonLd } from "@/components/sbc/JsonLd";

const title = "Founder | Sagar Burse, PhD — Sagar Burse Consulting";
const description =
  "Sagar Burse, PhD — Founder of SBC and a strategic business consultant with 8+ years across MSME consulting, institution building and policy advisory.";

export const Route = createFileRoute("/founder")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://sbcgroup.in/founder" }],
  }),
  component: Founder,
});

const stats = [
  { value: "8+", label: "Years Of Experience" },
  { value: "10+", label: "Consulting Engagements" },
  { value: "5+", label: "Institutional Projects" },
  { value: "7+", label: "Published Research Papers" },
];

const qualifications = [
  { icon: GraduationCap, degree: "PhD — Management", note: "GLS University, Ahmedabad" },
  { icon: School, degree: "MBA — Marketing", note: "Gujarat University" },
  { icon: Award, degree: "UGC-NET — Management", note: "Qualified 2019" },
  { icon: Award, degree: "GSET — Management", note: "Qualified 2019" },
  { icon: BookOpen, degree: "7+ Published Research Papers", note: "SEM/AMOS Expertise" },
];

const expertise = [
  {
    icon: Briefcase,
    title: "Business Consulting",
    description:
      "GAP360™ · Systems & Process · Operations & HR · Change Management · Feasibility Studies · Strategic Roadmap",
  },
  {
    icon: School,
    title: "Institution Building",
    description:
      "University Setup · AICTE/UGC Compliance · Governance Design · Curriculum · Leadership Recruitment · Global MoUs",
  },
  {
    icon: GraduationCap,
    title: "Skill Development",
    description:
      "Skill Centre Setup · NSDC/SSC Affiliation · NSQF Curriculum · Govt Liaison · Inspection Readiness · Launch Support",
  },
  {
    icon: Landmark,
    title: "Policy Advisory",
    description:
      "Policy Research · Government Advisory · Regulatory Framework · Industry-Govt Liaison · Evidence-Based Policy",
  },
];

const engagements = [
  {
    tag: "Business Consulting",
    title: "MSME Business Transformations",
    points: [
      "Rubber & Plastics — OTD 61%→84%, wastage -18% in 90 days",
      "Industrial Components — Founder freed 12 hrs/week in 60 days",
      "Trading & Distribution — Attrition 34%→18%, hiring 45→22 days",
    ],
  },
  {
    tag: "Public Sector",
    title: "Skill-Focused Public University",
    points: [
      "Vision, strategic roadmap, AICTE/UGC compliance, curriculum design, governance & internationalization — Gujarat Public Sector. Full lifecycle contribution.",
    ],
  },
  {
    tag: "PSU Advisory",
    title: "Centre of Excellence in Mining",
    points: [
      "Institutional positioning, curriculum design for mining sector, industry & international partnerships, governance & compliance — Gujarat PSU.",
    ],
  },
  {
    tag: "Private Sector",
    title: "Industry Association University",
    points: [
      "Vision & strategic framework, AICTE/UGC affiliation, NEP 2020 curriculum design, governance & leadership recruitment.",
    ],
  },
];

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sagar Burse",
  honorificSuffix: "PhD",
  jobTitle: "Founder & Principal Consultant",
  worksFor: { "@type": "Organization", name: "Sagar Burse Consulting" },
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "GLS University" },
    { "@type": "CollegeOrUniversity", name: "Gujarat University" },
  ],
  url: "https://sbcgroup.in/founder",
  sameAs: ["https://www.linkedin.com/in/drsagarburse/"],
};

function Founder() {
  return (
    <div className="min-h-screen bg-paper">
      <JsonLd data={personSchema} />
      <Header />
      <Breadcrumbs trail={[{ label: "About Us" }, { label: "Founder" }]} dark />
      <main>
        <section className="section-y border-b border-ink-tint bg-ink">
          <div className="shell grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] md:items-center">
            <Reveal as="section" className="order-1">
              <div className="max-w-sm border-2 border-gold p-3 shadow-[12px_12px_0_0_var(--ink)]">
                <img
                  src="/images/founder/sagar-burse-photo.png"
                  alt="Sagar Burse, PhD"
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
            </Reveal>
            <Reveal as="section" className="order-2">
              <h1 className="font-display text-4xl font-semibold tracking-tight text-paper md:text-[3rem]">
                Sagar Burse, PhD
              </h1>
              <p className="mt-2 font-display text-lg italic text-paper/70">
                Founder &amp; Principal Consultant
              </p>
              <p className="mt-3 text-[17px] leading-relaxed text-paper/80">
                Business Consulting · Institutional Setup · Skill Development · Policy Advisory
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="/book-free-audit"
                  className="inline-flex items-center gap-2 bg-gold px-6 py-3 text-[13px] font-semibold uppercase tracking-[0.18em] text-paper transition-colors hover:bg-gold-tint"
                >
                  Book Free Audit <ArrowRight className="size-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/drsagarburse/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 border border-ink-tint px-6 py-3 text-[13px] font-semibold uppercase tracking-[0.18em] text-paper transition-colors hover:border-gold hover:text-gold"
                >
                  LinkedIn Profile
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="section-y border-b border-ink-tint bg-ink-wash">
          <div className="shell">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {stats.map((s) => (
                <StatBlock key={s.label} value={s.value} label={s.label} />
              ))}
            </div>
          </div>
        </section>

        <section className="section-y border-b border-ink-tint bg-ink-wash">
          <div className="shell grid gap-12 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
            <Reveal as="section">
              <h2 className="font-display text-4xl font-semibold tracking-tight text-ink md:text-[3rem]">
                A Practitioner Who Stays Until the Job is Done
              </h2>
              <p className="mt-4 text-[17px] leading-relaxed text-charcoal">
                Sagar Burse, PhD is the Founder and Principal Consultant of Sagar Burse Consulting
                (SBC), headquartered in Ahmedabad, Gujarat. With 8+ years of experience across
                business consulting, institutional setup, skill development, and regulatory
                compliance — he brings rare multi-domain depth to every engagement.
              </p>
              <p className="mt-4 text-[17px] leading-relaxed text-charcoal">
                He has contributed to the setup of a skill-focused public university in Gujarat, a
                Centre of Excellence in Mining for a Gujarat PSU, and a private university
                established by an industry association.
              </p>
              <p className="mt-4 text-[17px] leading-relaxed text-charcoal">
                Through SBC, he advises businesses using the GAP360™ methodology — staying with
                clients from diagnosis to implementation until measurable results are achieved.
              </p>
            </Reveal>
            <Reveal as="section" className="border border-ink-tint bg-card p-8">
              <Quote className="h-8 w-8 text-gold" strokeWidth={1.5} />
              <p className="mt-4 font-display text-xl italic leading-relaxed text-ink">
                We don't leave after the report. We stay until results are delivered.
              </p>
              <p className="mt-3 text-[14px] font-semibold text-ink-soft">— Sagar Burse, PhD</p>
              <div className="mt-8 space-y-4 border-t border-ink-tint pt-6">
                <div className="flex items-start gap-3">
                  <GraduationCap className="mt-0.5 h-5 w-5 shrink-0 text-gold" strokeWidth={1.75} />
                  <span className="text-[15px] text-charcoal">
                    Contributed to 3 institutional setups across Gujarat
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Building2 className="mt-0.5 h-5 w-5 shrink-0 text-gold" strokeWidth={1.75} />
                  <span className="text-[15px] text-charcoal">
                    Headquartered in Ahmedabad, serving clients across India
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Target className="mt-0.5 h-5 w-5 shrink-0 text-gold" strokeWidth={1.75} />
                  <span className="text-[15px] text-charcoal">
                    GAP360™ methodology — diagnosis through implementation
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="section-y border-b border-ink-tint bg-ink-wash">
          <div className="shell">
            <Reveal as="section">
              <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
                Qualifications
              </h2>
              <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
                {qualifications.map((q) => (
                  <div
                    key={q.degree}
                    className="border border-ink-tint bg-paper p-5 transition-colors hover:border-gold"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gold/10 text-gold">
                      <q.icon className="h-5 w-5" strokeWidth={1.75} />
                    </div>
                    <p className="mt-4 font-display text-[16px] font-semibold text-ink">
                      {q.degree}
                    </p>
                    <p className="mt-1 text-[14px] text-ink-soft">{q.note}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section className="section-y border-b border-ink-tint">
          <div className="shell">
            <Reveal as="section" className="max-w-2xl">
              <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
                Expertise Areas
              </h2>
            </Reveal>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {expertise.map((item) => (
                <Reveal as="section" key={item.title} className="h-full">
                  <PracticeAreaCard {...item} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section-y border-b border-ink-tint bg-ink-wash">
          <div className="shell">
            <Reveal as="section" className="max-w-2xl">
              <h2 className="font-display text-3xl font-semibold tracking-tight text-ink md:text-[2.5rem]">
                Key Engagements
              </h2>
            </Reveal>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {engagements.map((e) => (
                <Reveal
                  as="section"
                  key={e.title}
                  className="border border-ink-tint bg-paper p-5 transition-colors hover:border-gold"
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gold">
                    {e.tag}
                  </p>
                  <h3 className="mt-2 font-display text-lg font-semibold leading-snug text-ink">
                    {e.title}
                  </h3>
                  <ul className="mt-3 space-y-1.5">
                    {e.points.map((p) => (
                      <li key={p} className="text-[15px] leading-relaxed text-charcoal">
                        {p}
                      </li>
                    ))}
                  </ul>
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
