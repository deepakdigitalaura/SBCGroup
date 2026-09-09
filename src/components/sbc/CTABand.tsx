import { ArrowRight } from "lucide-react";
import { Reveal } from "./primitives";

export function CTABand() {
  return (
    <section id="book" aria-labelledby="cta-heading" className="section-y border-b border-ink-tint bg-gold-wash">
      <div className="shell">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2
            id="cta-heading"
            className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-ink md:text-[2.75rem]"
          >
            Start With a Free 45-Minute Business Audit
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-charcoal">
            No commitment. No jargon. Just clarity on where your business stands and what needs to
            change.
          </p>
          <a
            href="/book-free-audit"
            className="mt-7 inline-flex items-center gap-2 bg-gold px-8 py-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-paper transition-colors hover:bg-gold-tint"
          >
            Book Your Free Audit <ArrowRight className="size-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
