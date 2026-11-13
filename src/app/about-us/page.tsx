import type { Metadata } from "next";
import AboutShowcase from "@/components/sections/AboutShowcase";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "About SS International | Leather Belt Manufacturer in Kanpur Since 2009",
  description:
    "Learn about SS International, established in 2009 in Kanpur, India. Led by Rashidullah Khan, Abdullah Khan, and Maaz Rashid—crafting REACH-compliant leather belts and accessories for global buyers.",
  alternates: {
    canonical: "https://www.ssileather.com/about-us",
  },
  openGraph: {
    title: "About SS International | Kanpur Leather Craftsmanship Since 2009",
    description:
      "Integrity, excellence, and heritage. Meet the leadership and Kanpur manufacturing team behind SS International.",
    url: "https://www.ssileather.com/about-us",
    type: "website",
  },
};

export default function AboutUsPage() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SS International",
    foundingDate: "2009",
    url: "https://www.ssileather.com",
    description:
      "SS International is a bulk leather belt and accessories manufacturer in Kanpur, India, blending traditional craftsmanship with modern REACH-compliant production.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kanpur",
      addressRegion: "Uttar Pradesh",
      addressCountry: "IN",
    },
    founder: {
      "@type": "Person",
      name: "Rashidullah Khan",
      jobTitle: "Founder & Visionary Chairman",
    },
    employee: [
      {
        "@type": "Person",
        name: "Abdullah Khan",
        jobTitle: "Director of Manufacturing & Leather Operations",
        telephone: "+91-98391-85596",
      },
      {
        "@type": "Person",
        name: "Maaz Rashid",
        jobTitle: "Director of Product Strategy & International Business",
        telephone: "+91-80813-24540",
      },
    ],
  };

  return (
    <main>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About SS International", path: "/about-us" },
        ])}
      />
      <JsonLd data={organizationSchema} />
      <AboutShowcase />
    </main>
  );
}