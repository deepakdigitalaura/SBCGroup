import { Briefcase, School, TrendingUp, Landmark } from "lucide-react";
import { Reveal } from "./primitives";
import { PracticeAreaCard } from "./PracticeAreaCard";

const areas = [
  {
    icon: Briefcase,
    title: "MSME Consulting",
    description:
      "Powered by GAP360™ — our flagship methodology that identifies business gaps and drives end-to-end implementation.",
    href: "/msme-consulting",
  },
  {
    icon: School,
    title: "Institution Building",
    description:
      "End-to-end advisory for university setup, skill centres, AICTE/UGC compliance and curriculum design.",
    href: "/institution-building-skill-development",
  },
  {
    icon: TrendingUp,
    title: "Strategic Research",
    description:
      "Market research and feasibility studies that turn data into strategic advantage for informed decisions.",
    href: "/strategic-research-feasibility",
  },
  {
    icon: Landmark,
    title: "Policy Advisory",
    description:
      "Shaping policy through research-backed advisory for government bodies and institutions.",
    href: "/policy-advisory",
  },
];

export function PracticeAreas() {
  return (
    <section aria-labelledby="practice-heading" className="section-y border-b border-ink-tint">
      <div className="shell">
        <Reveal>
          <h2
            id="practice-heading"
            className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink md:text-[2.5rem]"
          >
            Our practice
          </h2>
        </Reveal>
        <Reveal className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {areas.map((a) => (
            <PracticeAreaCard key={a.title} {...a} />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
