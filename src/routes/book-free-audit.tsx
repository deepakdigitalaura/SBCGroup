import { createFileRoute } from "@tanstack/react-router";
import { Video, MapPin, Clock, BadgeCheck } from "lucide-react";
import { Header } from "@/components/sbc/Header";
import { Footer } from "@/components/sbc/Footer";
import { Reveal } from "@/components/sbc/primitives";
import { StatBlock } from "@/components/sbc/StatBlock";
import { Breadcrumbs } from "@/components/sbc/Breadcrumbs";

const title = "Book Your Free 45-Minute Business Audit | SBC";
const description =
  "A free business systems audit — a focused 45-minute call with Dr. Sagar Burse to find where your business is losing money, time and momentum. No sales pitch.";

const labelClass = "font-medium text-[12px] uppercase tracking-[0.14em] text-ink-soft";
const inputClass =
  "mt-2 w-full border border-ink-tint bg-paper px-4 py-3 text-[16px] text-ink focus:border-gold focus:outline-none";

const steps = [
  {
    title: "Understanding Your Business",
    time: "10 min",
    description: "Listen and understand your business model, current situation, team structure, and goals.",
  },
  {
    title: "Identifying Critical Gaps",
    time: "20 min",
    description: "A structured diagnostic across key functions to identify your 2-3 most critical gaps.",
  },
  {
    title: "Honest Assessment & Direction",
    time: "15 min",
    description: "Share an assessment of where you stand, what needs to change, and a potential path forward.",
  },
  {
    title: "No Obligation Next Step",
    time: "",
    description: "Discuss engagement options if there's a fit — or leave with a clear picture of your business gaps.",
  },
];

const audience = [
  "MSME founders feeling stuck",
  "Businesses with people problems",
  "Manufacturers & traders",
  "Institutions being set up",
  "Businesses planning to scale",
  "Organizations needing research",
];

const testimonials = [
  {
    quote: "The free audit was the most valuable 45 minutes I have spent on my business.",
    author: "MSME Founder, Manufacturing",
  },
  {
    quote: "I left with a clear picture of exactly what was wrong and what to do about it.",
    author: "Business Owner, Trading",
  },
  {
    quote: "One audit call gave us more clarity than months of research.",
    author: "Director, Educational Institution",
  },
];

export const Route = createFileRoute("/book-free-audit")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://sbcgroup.in/book-free-audit" },
      { property: "og:image", content: "https://sbcgroup.in/sbc-logo.png" },
      { property: "og:site_name", content: "Sagar Burse Consulting (SBC)" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: "https://sbcgroup.in/sbc-logo.png" },
    ],
    links: [{ rel: "canonical", href: "https://sbcgroup.in/book-free-audit" }],
  }),
  component: BookFreeAudit,
});

function BookFreeAudit() {
  return (
    <div className="min-h-screen bg-paper">
      <Header />
      <Breadcrumbs trail={[{ label: "Book Free Audit" }]} dark />
      <main>
        <section className="section-y border-b border-ink-tint bg-ink">
          <div className="shell">
            <Reveal as="section" className="mx-auto max-w-2xl text-center">
              <h1 className="font-display text-4xl font-semibold tracking-tight text-paper md:text-[3rem]">
                Book Your Free Business Audit
              </h1>
              <p className="mt-4 text-[17px] leading-relaxed text-paper/80">
                A focused 45-minute conversation with Dr. Sagar Burse — identifying where your
                business or institution is losing money, time and momentum. No sales pitch. No
                commitment. Just clarity.
              </p>
            </Reveal>

            <div className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-6 border-y border-ink-tint py-8 sm:grid-cols-4">
              <StatBlock value="45 Min" label="Duration" dark />
              <StatBlock value="Free" label="Cost" dark />
              <StatBlock value="24 Hrs" label="Response Time" dark />
              <StatBlock value="Dr. Sagar Burse" label="Facilitator" dark />
            </div>
          </div>
        </section>

        <section className="section-y border-b border-ink-tint">
          <div className="shell grid gap-12 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
                What Happens in the 45 Minutes
              </h2>
              <div className="mt-6 space-y-5">
                {steps.map((step, i) => (
                  <Reveal key={step.title} as="section" className="flex gap-4">
                    <span className="text-lg font-semibold text-gold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="font-display text-[17px] font-semibold text-ink">
                        {step.title}
                        {step.time && (
                          <span className="ml-2 font-medium text-[12px] font-normal uppercase tracking-[0.12em] text-ink-soft">
                            {step.time}
                          </span>
                        )}
                      </p>
                      <p className="mt-1 text-[16px] leading-relaxed text-charcoal">
                        {step.description}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>

              <div className="mt-10">
                <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
                  Who Should Book
                </h2>
                <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {audience.map((a) => (
                    <li key={a} className="flex items-center gap-2 text-[16px] text-charcoal">
                      <BadgeCheck className="size-4 shrink-0 text-gold" strokeWidth={1.5} />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <div className="flex items-center gap-2 text-[15px] text-ink-soft">
                  <Video className="size-4 text-gold" strokeWidth={1.5} /> Video call or in-person
                </div>
                <div className="flex items-center gap-2 text-[15px] text-ink-soft">
                  <MapPin className="size-4 text-gold" strokeWidth={1.5} /> Ahmedabad, Gujarat
                </div>
                <div className="flex items-center gap-2 text-[15px] text-ink-soft">
                  <Clock className="size-4 text-gold" strokeWidth={1.5} /> Response within 24 hours
                </div>
              </div>
            </div>

            <Reveal as="section">
              <form
                method="post"
                action="/send-audit.php"
                className="border border-ink-tint bg-card p-6 md:p-8"
              >
                <h2 className="font-display text-xl font-semibold text-ink">Request Your Audit</h2>
                <div className="mt-5 grid gap-5">
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
                  <label className="block">
                    <span className={labelClass}>I Am Looking For Help With *</span>
                    <select name="help_with" required className={inputClass}>
                      <option>MSME Consulting</option>
                      <option>Institution Building &amp; Skill Development</option>
                      <option>Strategic Research &amp; Feasibility</option>
                      <option>Policy Advisory</option>
                      <option>General Enquiry</option>
                    </select>
                  </label>
                  <label className="block">
                    <span className={labelClass}>Tell Us About Your Business or Institution *</span>
                    <textarea name="message" required rows={4} className={inputClass} />
                  </label>
                  <label className="block">
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
                </div>
                <button
                  type="submit"
                  className="mt-6 w-full bg-gold px-8 py-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-paper transition-colors hover:bg-gold-tint"
                >
                  Book Your Free Audit
                </button>
              </form>
            </Reveal>
          </div>
        </section>

        <section className="section-y">
          <div className="shell">
            <h2 className="text-center font-display text-2xl font-semibold tracking-tight text-ink">
              What Founders Say
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {testimonials.map((t) => (
                <Reveal
                  key={t.author}
                  as="section"
                  className="border border-ink-tint bg-card p-6"
                >
                  <p className="text-[16px] italic leading-relaxed text-charcoal">“{t.quote}”</p>
                  <p className="mt-4 font-medium text-[12px] uppercase tracking-[0.14em] text-ink-soft">
                    {t.author}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
