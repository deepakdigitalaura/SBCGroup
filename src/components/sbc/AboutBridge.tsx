import { GoldLink, Reveal } from "./primitives";

const problems = [
  "MSMEs in India lack implementation support — they get reports, not results.",
  "Institutions lack expert guidance — they struggle with compliance, setup and curriculum.",
  "Organisations lack strategic research — decisions are made without data or feasibility.",
  "Policy lacks research backing — decisions are made without ground reality.",
];

export function AboutBridge() {
  return (
    <section aria-labelledby="about-heading" className="section-y border-b border-ink-tint bg-ink-wash">
      <div className="shell grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-14">
        <Reveal>
          <h2
            id="about-heading"
            className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-ink md:text-[2.5rem]"
          >
            Bridging the Gap Between Strategy and Execution
          </h2>
          <p className="mt-5 text-[17px] leading-relaxed text-charcoal">
            SBC is built on one belief — consulting should not end with a report. We partner with
            MSME founders, institutions, and industry bodies to identify gaps and implement
            solutions until the job is done.
          </p>
        </Reveal>

        <Reveal className="lg:pt-2">
          <ul className="divide-y divide-ink-tint border-y border-ink-tint">
            {problems.map((p) => (
              <li key={p} className="flex gap-3 py-3.5">
                <span
                  aria-hidden="true"
                  className="mt-2 block size-[6px] shrink-0 rotate-45 bg-gold"
                />
                <span className="text-[16px] leading-relaxed text-charcoal">{p}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 font-display text-2xl font-semibold text-gold md:text-3xl">
            SBC bridges all four.
          </p>
          <div className="mt-4">
            <GoldLink href="/about-sbc">About SBC &rarr;</GoldLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
