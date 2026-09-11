import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/sbc/Header";
import { Footer } from "@/components/sbc/Footer";
import { Breadcrumbs } from "@/components/sbc/Breadcrumbs";
import { Reveal } from "@/components/sbc/primitives";

const title = "Privacy Policy | Sagar Burse Consulting";
const description = "How Sagar Burse Consulting (SBC) collects, uses and protects your information.";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://sbcgroup.in/privacy-policy" }],
  }),
  component: PrivacyPolicy,
});

function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-paper">
      <Header />
      <Breadcrumbs trail={[{ label: "Privacy Policy" }]} />
      <main>
        <section className="section-y">
          <div className="shell">
            <Reveal as="section" className="max-w-2xl">
              <h1 className="font-display text-4xl font-semibold tracking-tight text-ink md:text-[3rem]">
                Privacy Policy
              </h1>
              <p className="mt-4 text-[17px] leading-relaxed text-charcoal">
                Sagar Burse Consulting ("SBC", "we", "us") respects your privacy. This page
                summarises how we handle information you share with us.
              </p>
            </Reveal>

            <Reveal as="section" className="mt-10 max-w-2xl space-y-6">
              <div>
                <h2 className="font-display text-xl font-semibold text-ink">Information We Collect</h2>
                <p className="mt-2 text-[16px] leading-relaxed text-charcoal">
                  We collect information you provide directly — such as your name, email, phone
                  number and message — when you fill out a contact or audit-booking form on this
                  site.
                </p>
              </div>
              <div>
                <h2 className="font-display text-xl font-semibold text-ink">How We Use It</h2>
                <p className="mt-2 text-[16px] leading-relaxed text-charcoal">
                  We use this information solely to respond to your enquiry, schedule
                  consultations, and — if you opt in — send occasional updates. We do not sell
                  your data to third parties.
                </p>
              </div>
              <div>
                <h2 className="font-display text-xl font-semibold text-ink">Contact Us</h2>
                <p className="mt-2 text-[16px] leading-relaxed text-charcoal">
                  For any privacy-related questions, reach us at{" "}
                  <a href="mailto:consulting@sbcgroup.in" className="text-gold-deep hover:text-gold">
                    consulting@sbcgroup.in
                  </a>
                  .
                </p>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
