import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/sbc/Header";
import { Hero } from "@/components/sbc/Hero";
import { PracticeAreas } from "@/components/sbc/PracticeAreas";
import { AboutBridge } from "@/components/sbc/AboutBridge";
import { CoreDivisionsStrip } from "@/components/sbc/CoreDivisionsStrip";
import { GAP360Preview } from "@/components/sbc/GAP360Preview";
import { Testimonials } from "@/components/sbc/Testimonials";
import { NewsletterBand } from "@/components/sbc/NewsletterBand";
import { CTABand } from "@/components/sbc/CTABand";
import { Footer } from "@/components/sbc/Footer";

const title = "SBC | MSME Consulting & Business Advisory, Ahmedabad";
const description =
  "Sagar Burse Consulting (SBC) delivers MSME consulting, institution building, strategic research and policy advisory — with implementation, not just reports.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-paper">
      <Header />
      <main>
        <Hero />
        <PracticeAreas />
        <AboutBridge />
        <CoreDivisionsStrip />
        <GAP360Preview />
        <Testimonials />
        <NewsletterBand />
        <CTABand />
      </main>
      <Footer />
    </div>
  );
}
