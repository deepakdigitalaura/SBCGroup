import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";
import { Header } from "@/components/sbc/Header";
import { Footer } from "@/components/sbc/Footer";
import { CTABand } from "@/components/sbc/CTABand";
import { Reveal } from "@/components/sbc/primitives";
import { Breadcrumbs } from "@/components/sbc/Breadcrumbs";
import { JsonLd } from "@/components/sbc/JsonLd";

const title = "Business Growth Systems: A Systems-First Approach | SBC";
const description =
  "Build business growth systems that scale: a systems-first framework, the growth bottlenecks to fix first and real MSME results. Book a free audit.";
const url = "https://sbcgroup.in/blog/business-growth-systems-first-approach";
const image = "https://sbcgroup.in/images/gap360-six-phase-method-sbc-ahmedabad.webp";
const h1 = "Business Growth Consulting: A Systems-First Approach to Business Growth Systems";

export const Route = createFileRoute("/blog/business-growth-systems-first-approach")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: url },
      { property: "og:image", content: "https://sbcgroup.in/sbc-logo.png" },
      { property: "og:site_name", content: "Sagar Burse Consulting (SBC)" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: "https://sbcgroup.in/sbc-logo.png" },
    ],
    links: [{ rel: "canonical", href: url }],
  }),
  component: BlogPage,
});

const lk = "font-semibold text-gold-deep transition-colors hover:text-gold";
const p = "text-[15.5px] leading-relaxed text-charcoal";
const h2c = "scroll-mt-24 pt-3 font-display text-2xl font-semibold text-ink";

type Faq = { q: string; a: string; link?: { label: string; href: string } };

const faqs: Faq[] = [
  {
    q: "What are business growth systems?",
    a: "Business growth systems are the documented processes, named owners, measurable KPIs and regular review routines that make growth repeatable. They let a business take on more orders, people and locations without depending on the founder to hold everything together.",
    link: { label: "Read: the 5 business systems every MSME must build before scaling", href: "/blog/5-business-systems-msme-scaling" },
  },
  {
    q: "What is a systems-first approach to business growth?",
    a: "A systems-first approach starts by finding what is actually limiting growth today, then builds the processes, KPIs and review routines to remove that constraint before, or alongside, a growth strategy. The strategy then has a reliable engine to run on instead of depending on the founder's effort.",
    link: { label: "Read: why most MSMEs stay stuck — the systems gap", href: "/blog/why-msmes-stay-stuck-systems-gap" },
  },
  {
    q: "What is the difference between a business growth strategy and a business growth framework?",
    a: "A business growth strategy decides where to grow: which markets, customers and products to pursue. A business growth framework is the structured sequence of steps used to turn that strategy into action, from diagnosis and prioritisation to design, implementation and review. SBC's framework is GAP360™.",
    link: { label: "Explore the GAP360™ methodology", href: "/gap360" },
  },
  {
    q: "What are the most common growth bottlenecks in a business?",
    a: "The most common growth bottlenecks in MSMEs are founder dependency, undocumented processes, no reliable weekly numbers, hiring and attrition problems, inconsistent delivery, cash flow strain despite sales, and enquiries that are never tracked through to a closed order. The one that repeats every month is usually your real constraint.",
  },
  {
    q: "How do I start business growth planning for my MSME?",
    a: "Pick the single bottleneck that slowed you most last quarter, write down how that process works today, assign one owner and two or three KPIs, and hold a 30-minute weekly review. Repeat with the next bottleneck. A structured diagnostic helps once the list outgrows what you can manage internally.",
    link: { label: "Book a free 45-minute business systems audit", href: "/book-free-audit" },
  },
  {
    q: "How do I scale business operations without losing control?",
    a: "Before adding headcount, locations or product lines, make sure core processes are written down and followed by more than one person, every function has a named owner and KPIs, you can see cash and margin weekly, and the business can run for a week without you. Scaling a weak system multiplies its problems.",
    link: { label: "Explore feasibility studies before you expand", href: "/strategic-research-feasibility" },
  },
  {
    q: "What is the difference between scalable and sustainable business growth?",
    a: "Scalable business growth means revenue can rise faster than the effort, cost and complexity needed to serve it. Sustainable business growth means those gains hold after a project ends or the founder's attention moves elsewhere. Business scalability comes down to whether documented systems and regular reviews can carry the extra load.",
  },
  {
    q: "How long does it take to build business growth systems?",
    a: "It depends on the constraint. A full GAP360™ diagnostic typically takes 2 to 4 weeks. SBC's published case studies range from a 60-day systems build to a 90-day delivery-improvement cycle and a six-month HR and growth-systems overhaul.",
    link: { label: "See SBC case studies with real numbers", href: "/case-studies" },
  },
  {
    q: "Do I need a business growth consultant to build these systems?",
    a: "Not to start: an owner can begin with one bottleneck and a weekly review. A consultant helps when several bottlenecks compete, when the founder is too close to the work to see them, or when you need someone to stay through implementation so the systems are actually adopted.",
    link: { label: "Read: business growth consulting, the complete guide", href: "/business-growth-consulting" },
  },
  {
    q: "Does SBC build business growth systems for MSMEs outside Ahmedabad?",
    a: "Yes. SBC is headquartered in Ahmedabad, Gujarat, and works with MSMEs, institutions and government bodies across India. Diagnostics and strategy sessions can run remotely, with implementation support scoped to your location. The first step is a free 45-minute business systems audit.",
    link: { label: "Book your free audit", href: "/book-free-audit" },
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: h1,
  alternativeHeadline: "Business Growth Systems: A Systems-First Approach",
  author: {
    "@type": "Person",
    name: "Sagar Burse",
    honorificSuffix: "PhD",
    jobTitle: "Founder & Principal Consultant",
    url: "https://sbcgroup.in/founder",
    image: "https://sbcgroup.in/images/founder/sagar-burse-author.webp",
    sameAs: ["https://www.linkedin.com/in/drsagarburse/"],
  },
  publisher: {
    "@type": "Organization",
    name: "Sagar Burse Consulting",
    logo: { "@type": "ImageObject", url: "https://sbcgroup.in/sbc-logo.png" },
  },
  image,
  datePublished: "2026-09-28",
  dateModified: "2026-09-28",
  description,
  inLanguage: "en-IN",
  articleSection: "MSME Growth",
  keywords:
    "business growth systems, business growth framework, business growth strategy, sustainable business growth, scalable business growth, business growth process, business growth planning, business growth model, growth bottlenecks, business scalability, scaling business operations",
  about: { "@type": "Thing", name: "Business growth systems" },
  mainEntityOfPage: { "@type": "WebPage", "@id": url },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

const toc = [
  { id: "what-are", text: "What are business growth systems?" },
  { id: "systems-first", text: "Systems-first vs strategy-first" },
  { id: "strategy-vs-framework", text: "Strategy, framework and model" },
  { id: "bottlenecks", text: "7 growth bottlenecks" },
  { id: "process", text: "The business growth process" },
  { id: "planning", text: "Business growth planning" },
  { id: "scaling", text: "Scaling business operations" },
  { id: "results", text: "Results in practice" },
  { id: "sbc", text: "How SBC builds growth systems" },
  { id: "faq", text: "FAQ" },
];

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-2 text-[15.5px] leading-relaxed text-charcoal">
      <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-gold-deep" />
      <span>{children}</span>
    </li>
  );
}

function BlogPage() {
  return (
    <div className="min-h-screen bg-paper">
      <JsonLd data={articleSchema} />
      <JsonLd data={faqSchema} />
      <Header />
      <Breadcrumbs
        trail={[{ label: "Blog", href: "/blog" }, { label: "Business Growth Systems" }]}
        dark
      />
      <main>
        <section className="bg-ink py-14">
          <div className="shell">
            <Reveal className="max-w-3xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[oklch(0.82_0.11_92.89)]">
                MSME Growth
              </p>
              <h1 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight text-paper md:text-[2.5rem]">
                {h1}
              </h1>
              <p className="mt-3 text-[12px] font-medium uppercase tracking-[0.12em] text-paper/70">
                Dr. Sagar Burse · 28 September 2026
              </p>
            </Reveal>
          </div>
        </section>

        <section className="section-y border-b border-ink-tint">
          <div className="shell">
            <div className="grid gap-10 md:grid-cols-3">
              <div className="min-w-0 space-y-5 md:col-span-2">
                <Reveal>
                  <p className={p}>
                    Most owners who want to grow start with a strategy: a new market, a new product,
                    a bigger sales team. Yet many of those plans stall within a year, and not because
                    the strategy was wrong. The business simply had no reliable way to execute it.
                    Orders slip, good people leave, and every decision still lands on the
                    founder&apos;s desk.
                  </p>
                </Reveal>
                <Reveal>
                  <p className={p}>
                    That is where <strong>business growth systems</strong> come in. A growth system
                    is the set of processes, roles, KPIs and review routines that lets a company grow
                    without the founder holding everything together. This guide explains what
                    business growth systems are, how they differ from a growth strategy, the growth
                    bottlenecks that stop most MSMEs from scaling, and the systems-first approach we
                    use at SBC.
                  </p>
                </Reveal>
                <Reveal>
                  <p className={p}>
                    It is the practical companion to our guide to{" "}
                    <Link to="/business-growth-consulting" className={lk}>
                      business growth consulting
                    </Link>
                    : read that to understand what a growth consulting firm should do for you, and
                    read this to see how growth actually gets built.
                  </p>
                </Reveal>

                <Reveal>
                  <div className="border border-gold bg-gold-wash p-6">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-gold-deep">
                      The Short Answer
                    </p>
                    <p className="mt-2 text-[15.5px] leading-relaxed text-ink">
                      Business growth systems are the documented processes, clear ownership,
                      measurable KPIs and regular reviews that make growth repeatable. A systems-first
                      approach builds them before, or alongside, a growth strategy so the business can
                      absorb more orders, people and locations without breaking. Start by finding the
                      one bottleneck limiting growth, fix it with a documented system, then measure and
                      repeat.
                    </p>
                  </div>
                </Reveal>

                <Reveal>
                  <h2 id="what-are" className={h2c}>
                    What Are Business Growth Systems?
                  </h2>
                </Reveal>
                <Reveal>
                  <p className={p}>
                    Business growth systems are the repeatable ways a business gets work done,
                    measures itself and improves: written down, owned by named people and reviewed on
                    a schedule. They are what turn one good year into a growth trend. The difference
                    is easy to feel. In one business, growth happens because the founder works harder.
                    In the other, it happens because the machine works better.
                  </p>
                </Reveal>
                <Reveal>
                  <p className={p}>Five core systems sit behind almost every MSME that scales well:</p>
                </Reveal>
                <Reveal>
                  <ul className="space-y-2">
                    <Bullet>
                      <span className="font-semibold text-ink">Sales and lead management:</span> how
                      an enquiry becomes a quote and then an order, tracked in one place.
                    </Bullet>
                    <Bullet>
                      <span className="font-semibold text-ink">SOPs (standard operating procedures):</span>{" "}
                      how core work is done, documented so quality does not depend on one person.
                    </Bullet>
                    <Bullet>
                      <span className="font-semibold text-ink">Financial visibility:</span> weekly
                      numbers on cash, margin and receivables, not a surprise at month-end.
                    </Bullet>
                    <Bullet>
                      <span className="font-semibold text-ink">People and accountability:</span> roles,
                      KRAs and KPIs, so everyone knows what they own.
                    </Bullet>
                    <Bullet>
                      <span className="font-semibold text-ink">Customer retention:</span> how repeat
                      business is earned and measured.
                    </Bullet>
                  </ul>
                </Reveal>
                <Reveal>
                  <p className={p}>
                    A review cadence ties these together: a weekly check on KPIs and a 30-60-90 day
                    look at what changed. We cover the five in detail in{" "}
                    <a href="/blog/5-business-systems-msme-scaling" className={lk}>
                      the five business systems every MSME must build before scaling
                    </a>
                    .
                  </p>
                </Reveal>

                <Reveal>
                  <h2 id="systems-first" className={h2c}>
                    Why a Systems-First Approach Beats Strategy-First Business Growth
                  </h2>
                </Reveal>
                <Reveal>
                  <p className={p}>
                    A business growth strategy answers &ldquo;where do we want to go?&rdquo; Systems
                    answer a harder question: &ldquo;can we get there repeatedly, without
                    heroics?&rdquo; When strategy comes first and systems come never, execution
                    depends on the founder&apos;s energy and a few key people. When systems come
                    first, the strategy has something reliable to run on.
                  </p>
                </Reveal>
                <Reveal>
                  <div className="overflow-x-auto">
                    <table className="w-full border border-ink-tint text-left text-[13px] sm:text-[14.5px]">
                      <caption className="sr-only">
                        Strategy-first versus systems-first approach to business growth
                      </caption>
                      <thead className="bg-ink-wash">
                        <tr>
                          <th scope="col" className="border-b border-ink-tint p-2 sm:p-3 font-semibold text-ink" />
                          <th scope="col" className="border-b border-ink-tint p-2 sm:p-3 font-semibold text-ink">
                            Strategy-first
                          </th>
                          <th scope="col" className="border-b border-ink-tint p-2 sm:p-3 font-semibold text-gold-deep">
                            Systems-first
                          </th>
                        </tr>
                      </thead>
                      <tbody className="text-charcoal">
                        {[
                          [
                            "Starts with",
                            "A target: a new market, product or revenue goal",
                            "A diagnostic: what is actually limiting growth today",
                          ],
                          [
                            "Typical output",
                            "A strategy document or deck",
                            "Documented processes, KPIs and a review routine",
                          ],
                          [
                            "Who carries execution",
                            "The founder and a few key people",
                            "Named owners, backed by written SOPs",
                          ],
                          [
                            "When volume doubles",
                            "Errors, delays and firefighting rise",
                            "The same processes absorb the extra load",
                          ],
                          [
                            "Progress is measured by",
                            "Revenue, checked occasionally",
                            "Leading KPIs (delivery, attrition, cycle time) reviewed on a schedule",
                          ],
                        ].map(([a, b, c]) => (
                          <tr key={a} className="align-top">
                            <th scope="row" className="border-b border-ink-tint p-2 sm:p-3 font-semibold text-ink">
                              {a}
                            </th>
                            <td className="border-b border-ink-tint p-2 sm:p-3">{b}</td>
                            <td className="border-b border-ink-tint p-2 sm:p-3">{c}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </Reveal>
                <Reveal>
                  <p className={p}>
                    This is the pattern we describe in{" "}
                    <a href="/blog/why-msmes-stay-stuck-systems-gap" className={lk}>
                      why most MSMEs stay stuck: the systems gap
                    </a>
                    . The intervention that works is rarely another strategy. It is building the
                    systems that let the existing strategy execute without the founder in every
                    decision.
                  </p>
                </Reveal>

                <Reveal>
                  <h2 id="strategy-vs-framework" className={h2c}>
                    Business Growth Strategy, Framework and Model: What&apos;s the Difference?
                  </h2>
                </Reveal>
                <Reveal>
                  <p className={p}>
                    These terms are used interchangeably, but each answers a different question. Being
                    clear about them stops a business growth strategy framework from turning into a
                    slide deck.
                  </p>
                </Reveal>
                <Reveal>
                  <dl className="space-y-3">
                    {[
                      [
                        "Business growth strategy",
                        "The what and where. Which markets, customers, products and pricing you will pursue to grow.",
                      ],
                      [
                        "Business growth model",
                        "How you make money as you grow. The logic linking customers, revenue, cost and capacity, such as what adding one more customer does to margin and workload.",
                      ],
                      [
                        "Business growth framework",
                        "How you decide and act. A structured sequence of steps (diagnose, prioritise, design, implement, review) used to turn strategy into action consistently.",
                      ],
                      [
                        "Business growth planning",
                        "The when and who. Milestones, owners, budgets and dates for the next 90 days to 12 months.",
                      ],
                      [
                        "Business growth systems",
                        "The engine. The processes and routines that make everything above executable.",
                      ],
                    ].map(([term, def]) => (
                      <div key={term} className="border border-ink-tint bg-card p-4">
                        <dt className="font-display text-base font-semibold text-ink">{term}</dt>
                        <dd className="mt-1 text-[15px] leading-relaxed text-charcoal">{def}</dd>
                      </div>
                    ))}
                  </dl>
                </Reveal>
                <Reveal>
                  <p className={p}>
                    A business needs all five: a business growth model that works on paper still needs
                    systems to deliver it. In most MSMEs we work with, the missing piece is the last
                    one.
                  </p>
                </Reveal>

                <Reveal>
                  <h2 id="bottlenecks" className={h2c}>
                    7 Growth Bottlenecks That Stall Scalable Business Growth
                  </h2>
                </Reveal>
                <Reveal>
                  <p className={p}>
                    Growth bottlenecks are the constraints that cap how fast a business can grow, no
                    matter how good the strategy. If you are asking why your business is not growing
                    despite steady demand, one of these is usually the answer. Each comes with the
                    system that fixes it.
                  </p>
                </Reveal>
                <Reveal>
                  <ol className="space-y-3">
                    {[
                      [
                        "Founder dependency.",
                        "Every quote, approval and decision routes through the owner. Fix: clear decision rights, a delegation matrix and KRAs for each role.",
                      ],
                      [
                        "Undocumented processes.",
                        "Each person does the same task differently, and training a new hire takes months. Fix: SOPs for the five to ten processes that matter most.",
                      ],
                      [
                        "No reliable numbers.",
                        "Revenue is known monthly, but margin by product and receivables are not. Fix: a simple weekly dashboard of cash, margin and receivables.",
                      ],
                      [
                        "Hiring and attrition.",
                        "People leave faster than they can be replaced and hiring takes too long. Fix: role clarity, a defined hiring process and structured onboarding.",
                      ],
                      [
                        "Inconsistent delivery.",
                        "Late orders, rework and wastage eat capacity that should be growth. Fix: order planning and quality checkpoints with a delivery KPI.",
                      ],
                      [
                        "Cash flow strain despite sales.",
                        "Working capital is locked in stock and receivables. Fix: receivables and payables routines and a short cash forecast.",
                      ],
                      [
                        "Enquiries with no tracking.",
                        "Leads arrive by referral, but nobody tracks follow-up or why deals are lost. Fix: one sales pipeline with owners and stages.",
                      ],
                    ].map(([label, body], i) => (
                      <li key={label} className={`flex gap-3 ${p}`}>
                        <span className="mt-0.5 shrink-0 font-display font-semibold text-gold-deep">
                          {i + 1}.
                        </span>
                        <span>
                          <span className="font-semibold text-ink">{label}</span> {body}
                        </span>
                      </li>
                    ))}
                  </ol>
                </Reveal>
                <Reveal>
                  <p className={p}>
                    To find yours, ask which of these repeats every month. The one that repeats is
                    your constraint, and fixing it first gives the fastest return. For the process side
                    of the fix, see our guide to{" "}
                    <Link to="/business-process-improvement" className={lk}>
                      business process improvement
                    </Link>
                    .
                  </p>
                </Reveal>

                <Reveal>
                  <h2 id="process" className={h2c}>
                    The Business Growth Process: A Systems-First Framework in Six Stages
                  </h2>
                </Reveal>
                <Reveal>
                  <p className={p}>
                    SBC uses GAP360™ (Growth Acceleration Pathway 360°) as its business growth
                    framework. It looks across operations, systems, people, process and strategy, and
                    moves every engagement through the same six stages of the business growth process:
                  </p>
                </Reveal>
                <Reveal>
                  <img
                    src="/images/gap360-six-phase-method-sbc-ahmedabad.webp"
                    alt="GAP360 six-stage business growth process: Diagnose, Align, Analyse, Design, Implement, Sustain"
                    width={1600}
                    height={500}
                    loading="lazy"
                    decoding="async"
                    className="h-auto w-full border border-ink-tint"
                  />
                </Reveal>
                <Reveal>
                  <ol className="space-y-3">
                    {[
                      [
                        "Diagnose.",
                        "Audit operations, finance, HR, sales and production to find what is capping growth and estimate its rupee impact.",
                      ],
                      [
                        "Align.",
                        "Review findings with leadership so everyone agrees the priorities before anything is designed.",
                      ],
                      [
                        "Analyse.",
                        "Map the root cause of each constraint and rank them by impact.",
                      ],
                      [
                        "Design.",
                        "Build the growth roadmap, SOPs and KRA/KPI frameworks so your team can adopt them.",
                      ],
                      [
                        "Implement.",
                        "Work alongside your team, managing resistance and correcting course in real time.",
                      ],
                      [
                        "Sustain.",
                        "Run 30-60-90 day reviews and dashboards so growth continues after the engagement ends.",
                      ],
                    ].map(([label, body], i) => (
                      <li key={label} className={`flex gap-3 ${p}`}>
                        <span className="mt-0.5 shrink-0 font-display font-semibold text-gold-deep">
                          {i + 1}.
                        </span>
                        <span>
                          <span className="font-semibold text-ink">{label}</span> {body}
                        </span>
                      </li>
                    ))}
                  </ol>
                </Reveal>
                <Reveal>
                  <p className={p}>
                    The full method is set out on our{" "}
                    <Link to="/gap360" className={lk}>
                      GAP360™ methodology page
                    </Link>
                    .
                  </p>
                </Reveal>

                <Reveal>
                  <h2 id="planning" className={h2c}>
                    Business Growth Planning: Where to Start in the Next 30 Days
                  </h2>
                </Reveal>
                <Reveal>
                  <p className={p}>
                    You do not need a consultant to begin. Business growth planning for an MSME can
                    start small and still work, if it is built around one bottleneck at a time:
                  </p>
                </Reveal>
                <Reveal>
                  <ol className="space-y-3">
                    {[
                      [
                        "Week 1: Pick one bottleneck.",
                        "List what slowed growth most last quarter (missed deliveries, lost hires, a cash crunch) and choose the single biggest one.",
                      ],
                      [
                        "Week 2: Write the process down.",
                        "On one page, capture who does what, in what order, and where hand-offs happen today.",
                      ],
                      [
                        "Week 3: Assign an owner and KPIs.",
                        "Name one owner and two or three KPIs, such as on-time delivery percentage, lead-to-quote time or attrition.",
                      ],
                      [
                        "Week 4: Start the weekly review.",
                        "Hold a 30-minute weekly check on those KPIs and fix the biggest gap first.",
                      ],
                    ].map(([label, body]) => (
                      <li key={label} className={`flex gap-3 ${p}`}>
                        <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-gold-deep" />
                        <span>
                          <span className="font-semibold text-ink">{label}</span> {body}
                        </span>
                      </li>
                    ))}
                  </ol>
                </Reveal>
                <Reveal>
                  <p className={p}>
                    Then repeat with the next bottleneck. When the list outgrows what you can manage
                    yourself, a structured diagnostic saves months. That is what our{" "}
                    <Link to="/book-free-audit" className={lk}>
                      free 45-minute business systems audit
                    </Link>{" "}
                    is for.
                  </p>
                </Reveal>

                <Reveal>
                  <h2 id="scaling" className={h2c}>
                    Scaling Business Operations Without Losing Control
                  </h2>
                </Reveal>
                <Reveal>
                  <p className={p}>
                    <strong>Scalable business growth</strong> means revenue can rise faster than the
                    effort, cost and complexity needed to serve it.{" "}
                    <strong>Sustainable business growth</strong> means those gains hold after a
                    project ends or the founder&apos;s attention moves elsewhere. Business scalability
                    is therefore mostly an operations question: can the same processes handle twice the
                    orders?
                  </p>
                </Reveal>
                <Reveal>
                  <p className={p}>
                    Before scaling business operations, whether by adding headcount, a location or a
                    product line, check that:
                  </p>
                </Reveal>
                <Reveal>
                  <ul className="space-y-2">
                    <Bullet>Core processes are written down and followed by more than one person.</Bullet>
                    <Bullet>Every function has a named owner and two or three KPIs.</Bullet>
                    <Bullet>You can see cash, margin and receivables every week.</Bullet>
                    <Bullet>
                      New hires can become productive from documentation, not only by shadowing.
                    </Bullet>
                    <Bullet>
                      The business runs for a week without you and nothing critical stalls.
                    </Bullet>
                    <Bullet>You know which single constraint you will hit next.</Bullet>
                  </ul>
                </Reveal>
                <Reveal>
                  <p className={p}>
                    If you can tick fewer than four, fix systems before adding scale, because scale
                    multiplies whatever is already there, including the weaknesses. If the next step is
                    a new location or market, a{" "}
                    <Link to="/strategic-research-feasibility" className={lk}>
                      feasibility study
                    </Link>{" "}
                    before capital is committed is worth the few weeks it takes.
                  </p>
                </Reveal>

                <Reveal>
                  <h2 id="results" className={h2c}>
                    What Systems-First Growth Looks Like in Practice
                  </h2>
                </Reveal>
                <Reveal>
                  <p className={p}>
                    These are systems outcomes, not strategy documents. Each is published in full in
                    our case studies:
                  </p>
                </Reveal>
                <Reveal>
                  <ul className="space-y-2">
                    <Bullet>
                      <a href="/case-studies/rubber-plastics-manufacturer" className={lk}>
                        Rubber and plastics manufacturer
                      </a>
                      : on-time delivery improved from 61% to 84%, with annual cost savings above ₹15
                      lakh in 90 days.
                    </Bullet>
                    <Bullet>
                      <a href="/case-studies/industrial-components-manufacturer" className={lk}>
                        Industrial components manufacturer
                      </a>
                      : a 3-tier reporting structure with defined KRAs and KPIs freed 12 hours a week
                      of the founder&apos;s time.
                    </Bullet>
                    <Bullet>
                      <a href="/case-studies/trading-distribution-business" className={lk}>
                        Trading and distribution business
                      </a>
                      : attrition fell from 34% to 18% and the hiring cycle from 45 to 22 days.
                    </Bullet>
                  </ul>
                </Reveal>
                <Reveal>
                  <p className={p}>
                    Browse{" "}
                    <Link to="/case-studies" className={lk}>
                      all SBC case studies
                    </Link>{" "}
                    to see the starting problem, the systems built and the numbers for each.
                  </p>
                </Reveal>

                <Reveal>
                  <h2 id="sbc" className={h2c}>
                    How SBC Builds Business Growth Systems for MSMEs
                  </h2>
                </Reveal>
                <Reveal>
                  <p className={p}>
                    SBC is an Ahmedabad-based consulting firm led by Sagar Burse, PhD. We work with
                    founder-led MSMEs in manufacturing, trading, distribution and services, and with
                    institutions and public bodies, across Gujarat and the rest of India. Every
                    engagement starts with a GAP360™ diagnostic rather than a template, and we stay
                    through implementation until the numbers move. Our{" "}
                    <Link to="/business-growth-consulting" className={lk}>
                      business growth consulting services
                    </Link>{" "}
                    and{" "}
                    <Link to="/msme-consulting" className={lk}>
                      MSME consulting
                    </Link>{" "}
                    are built around this systems-first approach.
                  </p>
                </Reveal>
                <Reveal>
                  <p className={p}>
                    If you are still comparing advisers, our{" "}
                    <Link to="/blog/management-consultant-hiring-checklist-ahmedabad" className={lk}>
                      management consultant hiring checklist
                    </Link>{" "}
                    sets out what to check before you hire.
                  </p>
                </Reveal>
                <Reveal>
                  <Link
                    to="/book-free-audit"
                    className="inline-flex items-center text-[12px] font-semibold uppercase tracking-[0.12em] text-gold-deep transition-colors hover:text-gold"
                  >
                    Book your free business systems audit →
                  </Link>
                </Reveal>

                <aside
                  aria-labelledby="author-bio-heading"
                  className="!mt-12 border-t border-ink-tint pt-8"
                >
                  <h2
                    id="author-bio-heading"
                    className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-soft"
                  >
                    About the Author
                  </h2>
                  <div className="mt-5 flex flex-col gap-5 border border-ink-tint bg-ink-wash p-6 sm:flex-row sm:items-start">
                    <img
                      src="/images/founder/sagar-burse-author.webp"
                      alt="Sagar Burse, PhD, Founder and Principal Consultant of Sagar Burse Consulting"
                      width={112}
                      height={112}
                      loading="lazy"
                      decoding="async"
                      className="aspect-square shrink-0 rounded-full border-2 border-gold object-cover"
                    />
                    <div className="min-w-0">
                      <p className="font-display text-xl font-semibold text-ink">Sagar Burse, PhD</p>
                      <p className="mt-1 font-display text-[15px] italic text-ink-soft">
                        Founder &amp; Principal Consultant, Sagar Burse Consulting (SBC)
                      </p>
                      <p className="mt-3 text-[14px] leading-relaxed text-charcoal">
                        Sagar Burse, PhD is the Founder and Principal Consultant of Sagar Burse
                        Consulting (SBC), headquartered in Ahmedabad, Gujarat. With 8+ years of
                        experience across business consulting, institutional setup, skill development,
                        and regulatory compliance, he brings rare multi-domain depth to every engagement.
                      </p>
                      <p className="mt-3 text-[14px] leading-relaxed text-charcoal">
                        Through SBC, he advises businesses using the GAP360™ methodology — staying with
                        clients from diagnosis to implementation until measurable results are achieved.
                      </p>
                      <p className="mt-3 text-[13px] leading-relaxed text-ink-soft">
                        PhD (Management), GLS University · MBA (Marketing), Gujarat University ·
                        UGC-NET and GSET qualified
                      </p>
                      <div className="mt-4 flex flex-wrap gap-4">
                        <Link
                          to="/founder"
                          rel="author"
                          className="text-[12px] font-semibold uppercase tracking-[0.12em] text-gold-deep transition-colors hover:text-gold"
                        >
                          View Full Profile →
                        </Link>
                        <a
                          href="https://www.linkedin.com/in/drsagarburse/"
                          target="_blank"
                          rel="noreferrer"
                          className="text-[12px] font-semibold uppercase tracking-[0.12em] text-gold-deep transition-colors hover:text-gold"
                        >
                          LinkedIn →
                        </a>
                      </div>
                    </div>
                  </div>
                </aside>

                <div className="!mt-10">
                  <Link
                    to="/blog"
                    className="text-[12px] font-semibold uppercase tracking-[0.12em] text-gold-deep transition-colors hover:text-gold"
                  >
                    ← All Articles
                  </Link>
                </div>
              </div>

              <Reveal className="h-fit bg-ink-wash p-6 md:sticky md:top-24">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-soft">
                  In This Article
                </p>
                <ul className="mt-4 space-y-2.5">
                  {toc.map((t) => (
                    <li key={t.id}>
                      <a
                        href={`#${t.id}`}
                        className="flex gap-2 text-[14px] leading-snug text-charcoal transition-colors hover:text-gold-deep"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold-deep" />
                        {t.text}
                      </a>
                    </li>
                  ))}
                </ul>
                <a
                  href="/book-free-audit"
                  className="mt-6 inline-flex w-full items-center justify-center bg-ink px-3 py-2.5 text-[11px] font-medium uppercase tracking-[0.1em] text-paper transition-colors hover:bg-charcoal"
                >
                  Book Free Audit
                </a>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="section-y border-b border-ink-tint bg-ink-wash">
          <div className="shell">
            <style>
              {
                ".faq-item summary{list-style:none}.faq-item summary::-webkit-details-marker{display:none}.faq-item .faq-chev{transition:transform .2s}.faq-item[open] .faq-chev{transform:rotate(180deg)}"
              }
            </style>
            <Reveal className="max-w-3xl">
              <h2
                id="faq"
                className="scroll-mt-24 font-display text-3xl font-semibold tracking-tight text-ink md:text-[2.5rem]"
              >
                Frequently Asked Questions
              </h2>
              <p className="mt-4 text-[17px] leading-relaxed text-charcoal">
                Tap a question to see the answer.
              </p>
            </Reveal>
            <div className="mt-8 space-y-4">
              {faqs.map(({ q, a, link }) => (
                <details key={q} name="faq" className="faq-item border border-ink-tint bg-card">
                  <summary className="flex cursor-pointer items-center justify-between gap-4 p-5">
                    <h3 className="font-display text-lg font-semibold leading-snug text-ink">{q}</h3>
                    <ChevronDown className="faq-chev size-4 shrink-0 text-gold" />
                  </summary>
                  <div className="border-t border-ink-tint p-5">
                    <p className={p}>{a}</p>
                    {link && (
                      <p className="mt-3">
                        <a
                          href={link.href}
                          className="text-[12px] font-semibold uppercase tracking-[0.12em] text-gold-deep transition-colors hover:text-gold"
                        >
                          {link.label} →
                        </a>
                      </p>
                    )}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <CTABand />
      </main>
      <Footer />
    </div>
  );
}
