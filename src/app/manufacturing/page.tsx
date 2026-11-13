import type { Metadata } from "next";
import ManufacturingShowcase from "@/components/sections/ManufacturingShowcase";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Leather Belt Manufacturing Facility in Kanpur, India | SS International",
  description:
    "Explore SS International's leather belt manufacturing facility in Kanpur, India: in-house tanning, strap cutting, hand-stitched polo lines, REACH quality checks, and 50,000+ monthly belt capacity.",
  alternates: {
    canonical: "https://www.ssileather.com/manufacturing",
  },
  openGraph: {
    title: "Manufacturing & Facility | SS International Kanpur",
    description:
      "The people, the precision, and the capacity behind SS International's export-grade leather belts and accessories.",
    url: "https://www.ssileather.com/manufacturing",
    type: "website",
  },
};

export default function ManufacturingPage() {
  const facilitySchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SS International",
    foundingDate: "2009",
    url: "https://www.ssileather.com",
    description:
      "Leather belt and accessories manufacturer in Kanpur, India with in-house hide processing, 12 production lines, and 50,000+ monthly belt capacity.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kanpur",
      addressRegion: "Uttar Pradesh",
      addressCountry: "IN",
    },
    founder: {
      "@type": "Person",
      name: "Rashidullah Khan",
    },
  };

  return (
    <main>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Manufacturing", path: "/manufacturing" },
        ])}
      />
      <JsonLd data={facilitySchema} />
      <ManufacturingShowcase />
    </main>
  );
}