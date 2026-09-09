import type { LucideIcon } from "lucide-react";
import { GoldLink } from "./primitives";

export function PracticeAreaCard({
  icon: Icon,
  title,
  description,
  href,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
}) {
  return (
    <article className="flex h-full flex-col border border-ink-tint bg-card p-5 transition-colors hover:border-gold/60">
      <Icon className="size-6 text-gold" strokeWidth={1.5} aria-hidden="true" />
      <h3 className="mt-4 font-display text-lg font-semibold leading-snug text-ink">{title}</h3>
      <p className="mt-2 flex-1 text-[16px] leading-relaxed text-charcoal">{description}</p>
      {href ? (
        <div className="mt-4">
          <GoldLink href={href}>Learn more &rarr;</GoldLink>
        </div>
      ) : null}
    </article>
  );
}
