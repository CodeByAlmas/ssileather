import type { Metadata } from "next";
import OurApproachShowcase from "@/components/sections/OurApproachShowcase";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Why Choose SS International | REACH-Compliant Leather Belt Supplier",
  description:
    "REACH-compliant materials, on-time delivery, consistent leather quality, FOB/CIF pricing, capacity of 50,000 belts a month and flexible MOQs for trial orders.",
  alternates: {
    canonical: "https://www.ssileather.com/why-choose-us",
  },
  openGraph: {
    title: "Our Approach & Why Buyers Choose SS International",
    description:
      "Eight practical reasons importers, wholesalers, and fashion brands place repeat leather belt orders with SS International in Kanpur, India.",
    url: "https://www.ssileather.com/why-choose-us",
    type: "website",
  },
};

export default function WhyPage() {
  const approachSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Private Label & Bulk Leather Belt Manufacturing",
    provider: {
      "@type": "Organization",
      name: "SS International",
      url: "https://www.ssileather.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Kanpur",
        addressRegion: "Uttar Pradesh",
        addressCountry: "IN",
      },
    },
    areaServed: "Worldwide",
    description:
      "REACH-compliant leather belt manufacturing in Kanpur, India with 50,000+ monthly unit capacity, flexible trial MOQs, and transparent FOB/CIF export terms.",
  };

  return (
    <main>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Why choose us", path: "/why-choose-us" },
        ])}
      />
      <JsonLd data={approachSchema} />
      <OurApproachShowcase />
    </main>
  );
}