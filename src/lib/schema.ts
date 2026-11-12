import { FAQS, IMAGES, PRODUCTS, SITE, type Product } from "./site";

const abs = (path = "") => `${SITE.url}${path}`;

export const ORG_ID = `${SITE.url}/#organization`;
export const SITE_ID = `${SITE.url}/#website`;

/** Organization + local manufacturer entity. Core of SEO/AEO/GEO identity. */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "Manufacturer"],
    "@id": ORG_ID,
    name: SITE.legalName,
    alternateName: SITE.name,
    url: abs("/"),
    logo: abs("/icon.svg"),
    image: IMAGES.og,
    description: SITE.description,
    foundingDate: String(SITE.foundingYear),
    email: SITE.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE.city,
      addressRegion: SITE.region,
      addressCountry: SITE.country,
    },
    areaServed: SITE.markets.map((name) => ({ "@type": "Place", name })),
    knowsAbout: [
      "Leather belt manufacturing",
      "Private label leather belts",
      "Bulk leather belts supply",
      "Leather dog collars and leashes",
      "REACH-compliant leather",
    ],
    sameAs: Object.values(SITE.socials),
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: SITE.email,
      availableLanguage: ["English", "Hindi"],
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": SITE_ID,
    url: abs("/"),
    name: SITE.name,
    inLanguage: "en-IN",
    publisher: { "@id": ORG_ID },
  };
}

/** FAQPage: the main answer-engine (AEO) surface. */
export function faqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function productSchema(p: Product) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: p.name,
    description: p.body,
    category: p.group === "belts" ? "Leather belts" : "Pet accessories",
    brand: { "@type": "Brand", name: SITE.name },
    manufacturer: { "@id": ORG_ID },
    url: abs(`/products/${p.slug}`),
    material: "Leather",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      businessFunction: "https://purl.org/goodrelations/v1#Sell",
      eligibleCustomerType: "https://purl.org/goodrelations/v1#Business",
      seller: { "@id": ORG_ID },
      url: abs("/contact"),
    },
  };
}

export function productListSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "SS International leather belts and accessories",
    itemListElement: PRODUCTS.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: p.name,
      url: abs(`/products/${p.slug}`),
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: abs(it.path),
    })),
  };
}

export function aboutSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    url: abs("/about-us"),
    name: `About ${SITE.name}`,
    about: { "@id": ORG_ID },
  };
}

export function contactSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    url: abs("/contact"),
    name: `Contact ${SITE.name}`,
    about: { "@id": ORG_ID },
  };
}
