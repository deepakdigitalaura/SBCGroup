import { Briefcase, School, TrendingUp, Landmark } from "lucide-react";
import { Reveal } from "./primitives";

const divisions = [
  { icon: Briefcase, label: "Business", copy: "MSME Consulting powered by GAP360\u2122" },
  { icon: School, label: "Institution Building", copy: "University & skill development advisory" },
  { icon: TrendingUp, label: "Strategic Research", copy: "Market research & feasibility studies" },
  { icon: Landmark, label: "Policy", copy: "Research-backed government advisory." },
];

export function CoreDivisionsStrip() {
  return (
    <section aria-labelledby="divisions-heading" className="border-b border-ink-tint bg-ink-wash py-10">
      <div className="shell">
        <Reveal>
          <h2 id="divisions-heading" className="sr-only">
            Our core divisions
          </h2>
          <ul className="mt-5 grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-4">
            {divisions.map(({ icon: Icon, label, copy }) => (
              <li key={label} className="flex min-w-0 items-start gap-3">
                <Icon className="mt-0.5 size-8 shrink-0 text-gold" strokeWidth={1.5} aria-hidden="true" />
                <span className="min-w-0">
                  <span className="block text-[24px] font-semibold uppercase tracking-[0.1em] text-ink">
                    {label}
                  </span>
                  <span className="mt-1 block text-[15px] leading-relaxed text-charcoal">
                    {copy}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
