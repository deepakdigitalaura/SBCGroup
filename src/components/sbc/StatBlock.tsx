import { useEffect, useRef, useState } from "react";

const NUMBER_RE = /\d[\d,]*/;

function useCountUp(value: string, active: boolean) {
  const match = value.match(NUMBER_RE);
  const [display, setDisplay] = useState(match ? value.replace(NUMBER_RE, "0") : value);

  useEffect(() => {
    if (!active || !match) return;
    const target = parseInt(match[0].replace(/,/g, ""), 10);
    const duration = 900;
    const start = performance.now();

    let raf: number;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const current = Math.round(target * (1 - Math.pow(1 - progress, 3)));
      setDisplay(value.replace(NUMBER_RE, current.toLocaleString()));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, value]);

  return display;
}

export function StatBlock({ value, label, dark }: { value: string; label: string; dark?: boolean }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(true);
            io.disconnect();
          }
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const display = useCountUp(value, active);

  return (
    <div ref={ref} className="min-w-0">
      <p
        className={`text-2xl font-semibold tracking-tight md:text-3xl ${dark ? "text-paper" : "text-ink"}`}
      >
        {display}
      </p>
      <p
        className={`mt-2 font-medium text-[11px] uppercase leading-relaxed tracking-[0.16em] ${dark ? "text-paper/75" : "text-ink-soft"}`}
      >
        {label}
      </p>
    </div>
  );
}

/** Bordered/shadowed card variant — for stat sections with longer descriptive labels. */
export function StatCard({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(true);
            io.disconnect();
          }
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const display = useCountUp(value, active);

  return (
    <div
      ref={ref}
      className="min-w-0 border border-ink-tint bg-card p-6 shadow-sm transition-colors hover:border-gold/60"
    >
      <p className="text-3xl font-bold tracking-tight text-gold-deep md:text-4xl">
        {display}
      </p>
      <p className="mt-3 text-[14.5px] leading-relaxed text-charcoal">{label}</p>
    </div>
  );
}
