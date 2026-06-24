// Structured data (JSON-LD) for rich search results. Rendered once in the root
// layout. Describes the business as a LocalBusiness so Google can surface
// hours, area served, contact, and brands in the knowledge panel / rich results.

const SITE_URL = "https://intelligentai.systems";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ElectronicsStore"],
  "@id": `${SITE_URL}/#business`,
  name: "AI Intelligent Services",
  url: SITE_URL,
  image: `${SITE_URL}/opengraph-image`,
  description:
    "Premium smart home automation and corporate AV integration. Crestron, RTI, Q-SYS, Lutron, JBL CONCEAL and Sonance specialists serving the Greater Toronto Area and Canada-wide.",
  email: "admin@intelligentai.systems",
  telephone: "+1-647-272-3150",
  priceRange: "$$$$",
  areaServed: [
    { "@type": "City", name: "Toronto" },
    { "@type": "AdministrativeArea", name: "Greater Toronto Area" },
    { "@type": "Country", name: "Canada" },
  ],
  address: {
    "@type": "PostalAddress",
    addressRegion: "ON",
    addressCountry: "CA",
  },
  knowsAbout: [
    "Smart Home Automation",
    "Crestron Programming",
    "Corporate AV Integration",
    "Home Theater Design",
    "Invisible Audio",
    "Lighting Control",
    "Access Control",
    "Microsoft Teams Rooms",
    "Corporate Conferencing",
  ],
  brand: [
    "Crestron",
    "RTI",
    "Q-SYS",
    "AMX",
    "Microsoft Teams",
    "Lutron",
    "JBL",
    "Sonance",
    "Bose Professional",
    "Shure",
  ],
  makesOffer: {
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: "Complimentary Consultation",
      description:
        "Every engagement begins with a complimentary smart home or corporate AV consultation.",
    },
  },
};

export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
