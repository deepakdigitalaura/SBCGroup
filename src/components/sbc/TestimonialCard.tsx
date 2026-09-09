export function TestimonialCard({ quote, author }: { quote: string; author: string }) {
  return (
    <figure className="flex flex-col border border-ink-tint bg-card p-5">
      <span aria-hidden="true" className="font-display text-4xl leading-none text-gold">
        &ldquo;
      </span>
      <blockquote className="mt-2 flex-1 text-[16px] leading-relaxed text-charcoal">
        {quote}
      </blockquote>
      <figcaption className="mt-4 border-t border-ink-tint pt-3 font-medium text-[11.5px] uppercase tracking-[0.16em] text-ink-soft">
        {author}
      </figcaption>
    </figure>
  );
}
