import { Stethoscope, BarChart3, Pencil, Rocket, RefreshCw } from "lucide-react";
import { Reveal } from "./primitives";

const phases = [
  {
    n: "01",
    icon: Stethoscope,
    title: "Diagnose",
    copy: "45-min audit across all functions — identify critical gaps with \u20B9 impact",
  },
  {
    n: "02",
    icon: BarChart3,
    title: "Analyse",
    copy: "Root cause mapping — systems, process & accountability gaps",
  },
  {
    n: "03",
    icon: Pencil,
    title: "Design",
    copy: "SOPs, KRA/KPI frameworks, reporting structures, accountability systems",
  },
  {
    n: "04",
    icon: Rocket,
    title: "Implement",
    copy: "Hands-on execution alongside client teams — not just recommendations",
  },
  {
    n: "05",
    icon: RefreshCw,
    title: "Sustain",
    copy: "30-60-90 day plans, review cadences and management dashboards.",
  },
];

export function GAP360Preview() {
  return (
    <section id="gap360" aria-labelledby="gap-heading" className="section-y border-b border-ink-tint bg-card">
      <div className="shell">
        <Reveal className="max-w-3xl">
          <p className="mt-4 text-lg font-semibold text-ink">How we do it</p>
          <h2
            id="gap-heading"
            className="mt-1 font-display text-3xl font-semibold tracking-tight text-gold-deep md:whitespace-nowrap md:text-[2rem] lg:text-[2.4rem]"
          >
            GAP360&trade; — Growth Acceleration Pathway 360&deg;
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-charcoal">
            A structured diagnostic that maps your business across 5 phases — identifying gaps and
            delivering end-to-end implementation solutions.
          </p>
        </Reveal>

        <Reveal className="relative mt-9">
          <ol className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
            {phases.map(({ n, icon: Icon, title, copy }) => (
              <li key={n} className="min-w-0 lg:pr-3">
                <span className="flex items-center">
                  <Icon className="size-7 text-gold" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <h3 className="mt-3 text-[13px] font-semibold uppercase tracking-[0.14em] text-ink">
                  {title}
                </h3>
                <p className="mt-1.5 text-[15px] leading-relaxed text-charcoal">{copy}</p>
              </li>
            ))}
          </ol>
        </Reveal>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href="/gap360"
            className="border border-ink px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-ink transition-colors hover:bg-ink hover:text-paper"
          >
            Learn About GAP360&trade;
          </a>
          <a
            href="/book-free-audit"
            className="bg-gold px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-paper transition-colors hover:bg-gold-tint"
          >
            Book Free Audit
          </a>
        </div>
      </div>
    </section>
  );
}
