import type { Metadata } from "next";
import ResponsibilityShowcase from "@/components/sections/ResponsibilityShowcase";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Responsibility, REACH Compliance & Social Awareness | SS International",
  description:
    "Discover SS International's commitment to EU REACH-compliant leather belt manufacturing, nickel-free hardware, ethical workplace practices, and children's education initiatives in Kanpur, India.",
  alternates: {
    canonical: "https://www.ssileather.com/responsibility",
  },
  openGraph: {
    title: "Responsibility & Social Awareness | SS International Kanpur",
    description:
      "Good practice built into the work: REACH chemical safety, in-house quality control, and community education initiatives in Kanpur.",
    url: "https://www.ssileather.com/responsibility",
    type: "website",
  },
};

export default function ResponsibilityPage() {
  const responsibilitySchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SS International",
    url: "https://www.ssileather.com",
    foundingDate: "2009",
    knowsAbout: [
      "EU REACH Compliant Leather Manufacturing",
      "Nickel-Free Belt Hardware",
      "Ethical Leather Goods Production",
      "Community Education Welfare Kanpur",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kanpur",
      addressRegion: "Uttar Pradesh",
      addressCountry: "IN",
    },
  };

  return (
    <main>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Responsibility", path: "/responsibility" },
        ])}
      />
      <JsonLd data={responsibilitySchema} />
      <ResponsibilityShowcase />
    </main>
  );
}