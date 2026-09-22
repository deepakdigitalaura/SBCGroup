
import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram } from "lucide-react";

const columns = [
  {
    label: "Quick Links",
    links: [
      { text: "Home", href: "/" },
      { text: "About SBC", href: "/about-sbc" },
      { text: "GAP360™", href: "/gap360" },
      { text: "Case Studies", href: "/case-studies" },
      { text: "Blog", href: "/blog" },
      { text: "Contact", href: "/contact" },
      { text: "Book Free Audit →", href: "/book-free-audit" },
    ],
  },
  {
    label: "Our Expertise",
    links: [
      { text: "MSME Consulting", href: "/msme-consulting" },
      { text: "Institution Building", href: "/institution-building-skill-development" },
      { text: "Strategic Research", href: "/strategic-research-feasibility" },
      { text: "Policy Advisory", href: "/policy-advisory" },
    ],
  },
  {
    label: "Explore",
    links: [
      { text: "Consulting Firms in Ahmedabad", href: "/consulting-firms-in-ahmedabad" },
      { text: "Business Growth Consulting", href: "/business-growth-consulting" },
      { text: "Business Process Improvement", href: "/business-process-improvement" },
    ],
  },
];

const contactInfo = [
  { icon: Mail, text: "consulting@sbcgroup.in", href: "mailto:consulting@sbcgroup.in" },
  { icon: Phone, text: "+91 8128310116", href: "tel:+918128310116" },
  { icon: MapPin, text: "Ahmedabad, Gujarat", href: undefined },
];

const headingClass = "font-display text-[17px] font-bold text-paper";

export function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="shell grid gap-10 py-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,2.5fr)] lg:gap-10">
        <div>
          <div className="flex min-w-0 items-center gap-3">
            <img
              src="/sbc-logo.png"
              alt="Sagar Burse Consulting SBC logo"
              width={96}
              height={96}
              className="size-[96px] shrink-0 rounded-full"
            />
            <span className="truncate font-display text-[17px] font-semibold">
              Sagar Burse Consulting
            </span>
          </div>
          <p className="mt-4 max-w-sm text-[16px] leading-relaxed text-paper/90">
            A multi-division advisory firm contributing to India's MSME ecosystem from Ahmedabad,
            Gujarat.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-3 lg:gap-x-6">
          {columns.map((col) => (
            <nav key={col.label} aria-label={col.label} className="min-w-0">
              <p className={headingClass}>{col.label}</p>
              <ul className="mt-3 space-y-2">
                {col.links.map((l) => (
                  <li key={l.text} className="text-[14px] leading-relaxed break-words">
                    <a href={l.href} className="text-paper/85 transition-colors hover:text-gold">
                      {l.text}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <nav aria-label="Contact" className="min-w-0">
            <p className={headingClass}>Contact</p>
            <ul className="mt-3 space-y-2.5">
              {contactInfo.map((c) => (
                <li key={c.text} className="flex items-start gap-2 text-[14px] leading-relaxed break-words">
                  <c.icon className="mt-0.5 size-4 shrink-0 text-paper" strokeWidth={1.75} aria-hidden="true" />
                  {c.href ? (
                    <a href={c.href} className="text-paper/85 transition-colors hover:text-gold">
                      {c.text}
                    </a>
                  ) : (
                    <span className="text-paper/85">{c.text}</span>
                  )}
                </li>
              ))}
              <li className="flex items-start gap-2 text-[14px] leading-relaxed break-words">
                <Linkedin className="mt-0.5 size-4 shrink-0 text-paper" strokeWidth={1.75} aria-hidden="true" />
                <a
                  href="https://www.linkedin.com/company/sbcglobal/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-paper/85 transition-colors hover:text-gold"
                >
                  LinkedIn
                </a>
              </li>
              <li className="flex items-start gap-2 text-[14px] leading-relaxed break-words">
                <Facebook className="mt-0.5 size-4 shrink-0 text-paper" strokeWidth={1.75} aria-hidden="true" />
                <a
                  href="https://www.facebook.com/sbcgroup.in"
                  target="_blank"
                  rel="noreferrer"
                  className="text-paper/85 transition-colors hover:text-gold"
                >
                  Facebook
                </a>
              </li>
              <li className="flex items-start gap-2 text-[14px] leading-relaxed break-words">
                <Instagram className="mt-0.5 size-4 shrink-0 text-paper" strokeWidth={1.75} aria-hidden="true" />
                <a
                  href="https://www.instagram.com/sbcgroup.in"
                  target="_blank"
                  rel="noreferrer"
                  className="text-paper/85 transition-colors hover:text-gold"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="border-t border-paper/15">
        <div className="shell flex flex-wrap items-center justify-between gap-2 py-4 font-medium text-[11.5px] uppercase tracking-[0.14em] text-paper/80">
          <p>&copy; 2026 Sagar Burse Consulting (SBC). All rights reserved.</p>
          <a href="/privacy-policy" className="transition-colors hover:text-gold">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
