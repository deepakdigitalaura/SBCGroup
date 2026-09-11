import { createFileRoute } from "@tanstack/react-router";
import { JsonLd } from "@/components/sbc/JsonLd";
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
  "Sagar Burse Consulting (SBC) is a business consultant in Ahmedabad offering MSME consulting, institution building, strategic research and policy advisory.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://sbcgroup.in/" },
      { property: "og:image", content: "https://sbcgroup.in/sbc-logo.png" },
      { property: "og:site_name", content: "Sagar Burse Consulting (SBC)" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: "https://sbcgroup.in/sbc-logo.png" },
    ],
    links: [{ rel: "canonical", href: "https://sbcgroup.in/" }],
  }),
  component: Index,
});

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Sagar Burse Consulting",
  alternateName: "SBC",
  url: "https://sbcgroup.in",
  logo: "https://sbcgroup.in/sbc-logo.png",
  email: "consulting@sbcgroup.in",
  telephone: "+91-8128310116",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ahmedabad",
    addressRegion: "Gujarat",
    addressCountry: "IN",
  },
  sameAs: ["https://www.linkedin.com/company/sbcgroup-in/"],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: "https://sbcgroup.in",
  name: "Sagar Burse Consulting",
};

function Index() {
  return (
    <div className="min-h-screen bg-paper">
      <JsonLd data={organizationSchema} />
      <JsonLd data={websiteSchema} />
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
