export const SBC_ENTITY_ID = "https://sbcgroup.in/#professional-service";

export const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": SBC_ENTITY_ID,
  name: "Sagar Burse Consulting (SBC)",
  alternateName: "SBC",
  url: "https://sbcgroup.in",
  logo: "https://sbcgroup.in/sbc-logo.png",
  image: "https://sbcgroup.in/images/founder/sagar-burse-founder-sbc-ahmedabad.webp",
  description:
    "Sagar Burse Consulting (SBC) is a management and business consulting firm headquartered in Ahmedabad, Gujarat, serving MSMEs, institutions and government bodies across India with GAP360™ diagnostics, business growth and process improvement consulting, institution building, strategic research and policy advisory.",
  email: "consulting@sbcgroup.in",
  telephone: "+91-8128310116",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ahmedabad",
    addressRegion: "Gujarat",
    addressCountry: "IN",
  },
  areaServed: [
    { "@type": "City", name: "Ahmedabad" },
    { "@type": "State", name: "Gujarat" },
    { "@type": "Country", name: "India" },
  ],
  founder: {
    "@type": "Person",
    name: "Sagar Burse",
    honorificSuffix: "PhD",
    jobTitle: "Founder & Principal Consultant",
    url: "https://sbcgroup.in/founder",
    image: "https://sbcgroup.in/images/founder/sagar-burse-author.webp",
    sameAs: ["https://www.linkedin.com/in/drsagarburse/"],
  },
  knowsAbout: [
    "Management consulting",
    "Business growth consulting",
    "Growth strategy consulting",
    "Strategic planning consulting",
    "MSME consulting",
    "Business process improvement",
    "Business process management",
    "SOP design",
    "GAP360 gap analysis",
    "Institution building",
    "Feasibility studies",
    "Policy advisory",
  ],
  sameAs: [
    "https://www.linkedin.com/company/sbcglobal/",
    "https://www.facebook.com/sbcgroup.in",
    "https://www.instagram.com/sbcgroup.in",
  ],
};

type ServiceInput = {
  url: string;
  name: string;
  serviceType: string;
  description: string;
  areaServed: Array<{ "@type": string; name: string }>;
  hasOfferCatalog: Record<string, unknown>;
};

export function buildServiceSchema(i: ServiceInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": i.url + "#service",
    name: i.name,
    serviceType: i.serviceType,
    description: i.description,
    url: i.url,
    provider: { "@id": SBC_ENTITY_ID },
    areaServed: i.areaServed,
    hasOfferCatalog: i.hasOfferCatalog,
  };
}
