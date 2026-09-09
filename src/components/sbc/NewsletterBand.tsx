import { Linkedin } from "lucide-react";
import { Reveal } from "./primitives";

export function NewsletterBand() {
  return (
    <section aria-labelledby="newsletter-heading" className="border-b border-ink-tint bg-ink py-12">
      <div className="shell grid items-center gap-6 lg:grid-cols-[minmax(0,1.4fr)_auto] lg:gap-12">
        <Reveal>
          <h2
            id="newsletter-heading"
            className="mt-4 font-display text-2xl font-semibold tracking-tight text-paper md:text-[2rem]"
          >
            Growth Republic on LinkedIn
          </h2>
          <p className="mt-3 max-w-2xl text-[15.5px] leading-relaxed text-paper/80">
            Weekly briefing on enterprise, intelligence and policy — for decision makers who need
            clarity, not noise. Every Wednesday — by Dr. Sagar Burse. Join founders, institutional
            leaders and Policy makers who read The SBC Brief every week.
          </p>
        </Reveal>
        <div>
          <a
            href="https://www.linkedin.com/company/sbcgroup-in/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-gold px-6 py-3.5 text-[12px] font-semibold uppercase tracking-[0.16em] text-paper transition-colors hover:bg-gold-tint"
          >
            <Linkedin className="size-4" strokeWidth={1.75} aria-hidden="true" />
            Subscribe on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
