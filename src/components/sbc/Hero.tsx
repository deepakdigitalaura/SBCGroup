import { useEffect, useRef, useState } from "react";
import { ArrowRight, Briefcase, Landmark, School, TrendingUp } from "lucide-react";
import { Reveal, usePrefersReducedMotion } from "./primitives";
import { StatBlock } from "./StatBlock";

const stats = [
  { value: "8+", label: "Years of Experience" },
  { value: "10+", label: "Consulting Engagements" },
  { value: "₹375Cr+", label: "Projects Contributed To" },
  { value: "5+", label: "Regulatory Bodies Navigated" },
];

const orbitIcons = [
  { Icon: Briefcase, label: "MSME Consulting", className: "left-1/2 top-0 -translate-x-1/2" },
  { Icon: School, label: "Institution Building", className: "right-0 top-1/2 -translate-y-1/2" },
  { Icon: TrendingUp, label: "Strategic Research", className: "bottom-0 left-1/2 -translate-x-1/2" },
  { Icon: Landmark, label: "Policy Advisory", className: "left-0 top-1/2 -translate-y-1/2" },
];

function HeroGraphic() {
  const reduceMotion = usePrefersReducedMotion();
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            io.disconnect();
          }
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (reduceMotion) return;
    const id = setInterval(() => setActive((a) => (a + 1) % orbitIcons.length), 2600);
    return () => clearInterval(id);
  }, [reduceMotion]);

  const activeIndex = reduceMotion ? -1 : active;

  return (
    <div
      ref={ref}
      data-visible={visible ? "true" : "false"}
      aria-hidden="true"
      className="hero-graphic-in relative mx-auto hidden aspect-square w-full max-w-sm items-center justify-center lg:flex"
    >
      {/* Outer orbit — very slow, barely-there */}
      <div className="g-ring-outer absolute inset-0">
        <div className="absolute inset-0 rounded-full border border-ink-tint/60" />
      </div>

      {/* Inner dashed orbit — opposite direction */}
      <div className="g-ring-mid absolute inset-8">
        <div className="absolute inset-0 orbit-rotate-rev rounded-full border border-dashed border-gold/40" />
      </div>

      {/* Orbiting practice-area icons, upright via counter-rotation */}
      <div className="g-icon-layer absolute inset-6 orbit-rotate-icons">
        {orbitIcons.map(({ Icon, label, className }, i) => (
          <span
            key={label}
            className={`g-icon-${i} absolute orbit-rotate-icons-rev ${className}`}
          >
            <span className="relative flex flex-col items-center">
              <span
                className={`orbit-icon grid size-11 place-items-center rounded-full border border-gold/50 bg-card shadow-sm ${
                  activeIndex === i ? "is-active" : ""
                }`}
              >
                <span className="animate-icon-bob flex">
                  <Icon className="size-5 text-gold" strokeWidth={1.75} />
                </span>
              </span>
              <span
                className={`orbit-label absolute top-full mt-1.5 whitespace-nowrap text-[10px] font-medium uppercase tracking-[0.12em] text-ink-soft ${
                  activeIndex === i ? "is-active" : ""
                }`}
              >
                {label}
              </span>
            </span>
          </span>
        ))}
      </div>

      {/* Central SBC logo — the connecting core */}
      <div className="g-center relative">
        <div
          key={activeIndex}
          className="animate-ring-burst pointer-events-none absolute inset-0 rounded-full border border-gold"
        />
        <div className="absolute inset-[-14px] rounded-full bg-gold/10 blur-xl" aria-hidden="true" />
        <div className="animate-breathe grid size-32 place-items-center rounded-full bg-ink text-paper shadow-lg">
          <img src="/sbc-logo.png" alt="" width={72} height={72} className="size-[72px] rounded-full" />
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="border-b border-ink-tint bg-ink-wash">
      <div className="shell grid gap-10 pb-8 pt-12 md:pb-10 md:pt-16 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center">
        <div>
          <Reveal className="max-w-3xl">
            <h1
              id="hero-heading"
              className="mt-5 font-display text-[2.35rem] font-semibold leading-[1.05] tracking-tight text-ink sm:text-5xl md:text-[3.75rem]"
            >
              Not Just Advice.
              <span className="block text-gold">Real Implementation.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-[17px] leading-relaxed text-charcoal md:text-lg">
              Most consultants give you a report and leave. SBC stays until the job is done — whether
              you are an MSME founder, an institution being built, or an organisation needing
              strategic research.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href="/book-free-audit"
                className="inline-flex items-center gap-2 bg-gold px-6 py-3.5 text-[12px] font-semibold uppercase tracking-[0.16em] text-paper transition-colors hover:bg-gold-tint"
              >
                Book Your Free Audit <ArrowRight className="size-3.5" />
              </a>
              <a
                href="/gap360"
                className="inline-flex items-center gap-2 border border-ink px-6 py-3.5 text-[12px] font-semibold uppercase tracking-[0.16em] text-ink transition-colors hover:bg-ink hover:text-paper"
              >
                See How We Work
              </a>
            </div>
          </Reveal>

          <Reveal className="mt-9 grid grid-cols-2 gap-x-6 gap-y-7 border-t border-ink-tint pt-7 md:grid-cols-4">
            {stats.map((s) => (
              <StatBlock key={s.label} value={s.value} label={s.label} />
            ))}
          </Reveal>
        </div>

        <HeroGraphic />
      </div>
    </section>
  );
}
