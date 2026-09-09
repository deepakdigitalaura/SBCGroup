import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

const dropdowns = [
  {
    label: "About Us",
    items: [
      { text: "About SBC", href: "/about-sbc" },
      { text: "Founder", href: "/founder" },
      { text: "Our Approach", href: "/our-approach" },
    ],
  },
  {
    label: "Our Expertise",
    items: [
      { text: "MSME Consulting", href: "/msme-consulting" },
      { text: "Institution Building & Skill Development", href: "/institution-building-skill-development" },
      { text: "Strategic Research & Feasibility", href: "/strategic-research-feasibility" },
      { text: "Policy Advisory", href: "/policy-advisory" },
      { text: "GAP360\u2122", href: "/gap360" },
    ],
  },
];

const flatLinks = [
  { text: "Blog", href: "/blog" },
  { text: "Case Studies", href: "/case-studies" },
  { text: "SBC Knowledge", href: "/resources" },
  { text: "Contact", href: "/contact" },
];

export function Header() {
  const [open, setOpen] = useState<string | null>(null);
  const [mobile, setMobile] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink-tint bg-paper/95 backdrop-blur">
      <div className="shell flex h-20 items-center justify-between gap-6 lg:h-28">
        <a href="/" className="flex min-w-0 shrink-0 items-center">
          <img
            src="/sbc-logo.png"
            alt="Sagar Burse Consulting SBC logo"
            width={96}
            height={96}
            className="size-14 shrink-0 rounded-full sm:size-16 lg:size-24"
          />
        </a>

        <nav aria-label="Main" className="hidden items-center gap-2 lg:flex">
          {dropdowns.map((d) => (
            <div
              key={d.label}
              className="relative"
              onMouseEnter={() => setOpen(d.label)}
              onMouseLeave={() => setOpen(null)}
            >
              <button
                type="button"
                aria-expanded={open === d.label}
                onClick={() => setOpen(open === d.label ? null : d.label)}
                className="flex items-center gap-1 rounded px-3 py-2 text-[16px] font-bold text-ink transition-colors hover:text-gold"
              >
                {d.label}
                <ChevronDown className="size-4" />
              </button>
              {open === d.label && (
                <div className="absolute left-0 top-full w-64 border border-ink-tint bg-card py-1">
                  {d.items.map((item) => (
                    <a
                      key={item.text}
                      href={item.href}
                      className="block px-4 py-2 text-[14px] text-charcoal transition-colors hover:bg-ink-wash hover:text-ink"
                    >
                      {item.text}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          {flatLinks.map((l) => (
            <a
              key={l.text}
              href={l.href}
              className="rounded px-3 py-2 text-[16px] font-bold text-ink transition-colors hover:text-gold"
            >
              {l.text}
            </a>
          ))}
          <a
            href="/book-free-audit"
            className="ml-2 bg-gold px-4 py-2.5 text-[12px] font-semibold uppercase tracking-[0.14em] text-paper transition-colors hover:bg-gold-tint"
          >
            Book Free Audit
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setMobile(!mobile)}
          aria-expanded={mobile}
          aria-label="Toggle navigation"
          className="rounded p-2 text-ink lg:hidden"
        >
          {mobile ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {mobile && (
        <nav aria-label="Mobile" className="border-t border-ink-tint bg-paper lg:hidden">
          <div className="shell flex flex-col py-3">
            {dropdowns.map((d) => (
              <div key={d.label} className="py-2">
                <p className="text-[17px] font-bold text-ink">
                  {d.label}
                </p>
                <div className="mt-1 flex flex-col">
                  {d.items.map((i) => (
                    <a key={i.text} href={i.href} className="py-1.5 text-[14px] text-charcoal">
                      {i.text}
                    </a>
                  ))}
                </div>
              </div>
            ))}
            <div className="flex flex-col border-t border-ink-tint pt-2">
              {flatLinks.map((l) => (
                <a key={l.text} href={l.href} className="py-1.5 text-[15px] font-medium text-ink">
                  {l.text}
                </a>
              ))}
            </div>
            <a
              href="/book-free-audit"
              className="mt-3 bg-gold px-4 py-3 text-center text-[12px] font-semibold uppercase tracking-[0.14em] text-paper"
            >
              Book Free Audit
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
