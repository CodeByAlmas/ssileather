import type { MetadataRoute } from "next";
import { PRODUCTS, SITE } from "@/lib/site";

// Fixed date on purpose: wall-clock reads are not allowed in prerendered code.
// Bump this when content changes.
const LAST_MODIFIED = new Date("2026-11-11");

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: { path: string; priority: number }[] = [
    { path: "/", priority: 1 },
    { path: "/about-us", priority: 0.8 },
    { path: "/why-choose-us", priority: 0.8 },
    { path: "/faqs", priority: 0.7 },
    { path: "/contact", priority: 0.9 },
  ];
  return [
    ...pages.map((p) => ({
      url: `${SITE.url}${p.path}`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly" as const,
      priority: p.priority,
    })),
    ...PRODUCTS.map((p) => ({
      url: `${SITE.url}/products/${p.slug}`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
