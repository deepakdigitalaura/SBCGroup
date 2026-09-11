import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { Header } from "@/components/sbc/Header";
import { Footer } from "@/components/sbc/Footer";
import { Reveal } from "@/components/sbc/primitives";
import { Breadcrumbs } from "@/components/sbc/Breadcrumbs";

const title = "Contact | Sagar Burse Consulting";
const description =
  "Contact Sagar Burse Consulting, a business consultant in Ahmedabad — for MSME consulting, institution building and policy advisory across Gujarat.";

const labelClass = "font-medium text-[12px] uppercase tracking-[0.14em] text-ink-soft";
const inputClass =
  "mt-2 w-full border border-ink-tint bg-paper px-4 py-3 text-[16px] text-ink focus:border-gold focus:outline-none";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://sbcgroup.in/contact" },
      { property: "og:image", content: "https://sbcgroup.in/sbc-logo.png" },
      { property: "og:site_name", content: "Sagar Burse Consulting (SBC)" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: "https://sbcgroup.in/sbc-logo.png" },
    ],
    links: [{ rel: "canonical", href: "https://sbcgroup.in/contact" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <div className="min-h-screen bg-paper">
      <Header />
      <Breadcrumbs trail={[{ label: "Contact" }]} dark />
      <main>
        <section className="bg-ink py-14">
          <div className="shell">
            <Reveal as="section" className="max-w-2xl">
              <h1 className="font-display text-4xl font-semibold tracking-tight text-paper md:text-[3rem]">
                We would love to hear from you.
              </h1>
              <p className="mt-4 text-[17px] leading-relaxed text-paper/80">
                Reach out for a consultation, a query or just to explore how SBC can help.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="section-y">
          <div className="shell">
            <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
              <Reveal as="section" className="space-y-6">
                <div className="flex gap-4 border border-ink-tint bg-card p-5">
                  <MapPin className="size-5 shrink-0 text-gold" strokeWidth={1.5} />
                  <div>
                    <p className={labelClass}>Office</p>
                    <p className="mt-1 text-[16px] text-charcoal">Ahmedabad, Gujarat, India</p>
                  </div>
                </div>
                <div className="flex gap-4 border border-ink-tint bg-card p-5">
                  <Phone className="size-5 shrink-0 text-gold" strokeWidth={1.5} />
                  <div>
                    <p className={labelClass}>Phone</p>
                    <p className="mt-1 text-[16px] text-charcoal">+91 8128310116</p>
                  </div>
                </div>
                <div className="flex gap-4 border border-ink-tint bg-card p-5">
                  <Mail className="size-5 shrink-0 text-gold" strokeWidth={1.5} />
                  <div>
                    <p className={labelClass}>Email</p>
                    <p className="mt-1 text-[16px] text-charcoal">consulting@sbcgroup.in</p>
                  </div>
                </div>
                <div className="flex gap-4 border border-ink-tint bg-card p-5">
                  <Clock className="size-5 shrink-0 text-gold" strokeWidth={1.5} />
                  <div>
                    <p className={labelClass}>Response Time</p>
                    <p className="mt-1 text-[16px] text-charcoal">
                      We typically respond within 24 hours on business days. For urgent queries
                      please call directly.
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal as="section">
                <form
                  method="post"
                  action="/send-contact.php"
                  className="border border-ink-tint bg-card p-6 md:p-8"
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="block">
                      <span className={labelClass}>First Name *</span>
                      <input name="first_name" required type="text" className={inputClass} />
                    </label>
                    <label className="block">
                      <span className={labelClass}>Last Name</span>
                      <input name="last_name" type="text" className={inputClass} />
                    </label>
                    <label className="block">
                      <span className={labelClass}>Email Address *</span>
                      <input name="email" required type="email" className={inputClass} />
                    </label>
                    <label className="block">
                      <span className={labelClass}>Mobile Number *</span>
                      <input name="mobile" required type="tel" className={inputClass} />
                    </label>
                    <label className="block sm:col-span-2">
                      <span className={labelClass}>I Am Enquiring About *</span>
                      <select name="help_with" required className={inputClass}>
                        <option>MSME Consulting</option>
                        <option>Institution Building &amp; Skill Development</option>
                        <option>Strategic Research &amp; Feasibility</option>
                        <option>Policy Advisory</option>
                        <option>General Enquiry</option>
                      </select>
                    </label>
                    <label className="block sm:col-span-2">
                      <span className={labelClass}>How Did You Hear About Us</span>
                      <select name="source" className={inputClass}>
                        <option>LinkedIn</option>
                        <option>LinkedIn Newsletter</option>
                        <option>Google Search</option>
                        <option>Referral</option>
                        <option>Industry Association</option>
                        <option>Conference/Event</option>
                        <option>Social Media</option>
                        <option>YouTube</option>
                        <option>Other</option>
                      </select>
                    </label>
                    <label className="block sm:col-span-2">
                      <span className={labelClass}>Message *</span>
                      <textarea name="message" required rows={5} className={inputClass} />
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="mt-6 inline-flex items-center gap-2 bg-gold px-8 py-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-paper transition-colors hover:bg-gold-tint"
                  >
                    Send Message
                  </button>
                </form>
              </Reveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
