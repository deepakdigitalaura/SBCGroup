import { Reveal } from "./primitives";
import { TestimonialCard } from "./TestimonialCard";

const testimonials = [
  {
    quote:
      "SBC didn't just give us a report — they stayed with us through implementation. Our operations improved dramatically within 3 months.",
    author: "MSME Founder, Ahmedabad",
  },
  {
    quote:
      "Dr. Sagar's guidance on institution setup saved us months of confusion. His knowledge of AICTE compliance is unmatched.",
    author: "Director, Private University, Gujarat",
  },
  {
    quote:
      "The feasibility study SBC delivered was thorough, data-driven and actionable. It gave our board the confidence to proceed.",
    author: "CEO, Industry Body, India",
  },
];

export function Testimonials() {
  return (
    <section aria-labelledby="testimonials-heading" className="section-y border-b border-ink-tint">
      <div className="shell">
        <Reveal>
          <h2
            id="testimonials-heading"
            className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink md:text-[2.5rem]"
          >
            Trusted by Founders &amp; Institutions
          </h2>
        </Reveal>
        <Reveal className="mt-8 grid gap-4 lg:grid-cols-3">
          {testimonials.map((t) => (
            <TestimonialCard key={t.author} {...t} />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
