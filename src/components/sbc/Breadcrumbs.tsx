import { ChevronRight } from "lucide-react";

export type Crumb = { label: string; href?: string };

export function Breadcrumbs({ trail, dark = false }: { trail: Crumb[]; dark?: boolean }) {
  const items: Crumb[] = [{ label: "Home", href: "/" }, ...trail];

  return (
    <div className={dark ? "bg-ink" : undefined}>
      <nav
        aria-label="Breadcrumb"
        className={`shell py-3 ${dark ? "text-paper/70" : "text-ink-soft"} flex flex-wrap items-center gap-1.5 text-[13px]`}
      >
        <ol className="flex flex-wrap items-center gap-1.5">
          {items.map((item, i) => {
            const isLast = i === items.length - 1;
            return (
              <li key={item.label} className="flex items-center gap-1.5">
                {i > 0 && (
                  <ChevronRight
                    className={`size-3.5 shrink-0 ${dark ? "text-paper/40" : "text-ink-tint"}`}
                    aria-hidden="true"
                  />
                )}
                {item.href && !isLast ? (
                  <a href={item.href} className="transition-colors hover:text-gold">
                    {item.label}
                  </a>
                ) : (
                  <span
                    className={isLast ? `font-medium ${dark ? "text-paper" : "text-ink"}` : ""}
                    aria-current={isLast ? "page" : undefined}
                  >
                    {item.label}
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </div>
  );
}
