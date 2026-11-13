import type { Metadata } from "next";
import ProductsLookbook from "@/components/sections/ProductsLookbook";
import JsonLd from "@/components/seo/JsonLd";
import { productListSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Leather Belts Lookbook & Bulk Catalogue | SS International Kanpur",
  description:
    "Explore SS International's export-grade leather belt catalogue: Polo belts, Formal Profile belts, Reversible belts, Ladies belts, and Western artisan belts manufactured in Kanpur, India.",
  alternates: {
    canonical: "https://www.ssileather.com/products",
  },
  openGraph: {
    title: "Leather Belts Lookbook & Bulk Catalogue | SS International",
    description:
      "Bespoke leather belt manufacturing in Kanpur, India. REACH-compliant hides, solid brass hardware, and FOB/CIF global export.",
    url: "https://www.ssileather.com/products",
    type: "website",
  },
};

export default function ProductsPage() {
  return (
    <main>
      <JsonLd data={productListSchema()} />
      <ProductsLookbook />
    </main>
  );
}