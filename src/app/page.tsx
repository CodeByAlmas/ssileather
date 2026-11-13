import Hero from "@/components/sections/Hero";
import BrandsWall from "@/components/sections/BrandsWall";
import FeatureStack from "@/components/sections/FeatureStack";
import FaqList from "@/components/sections/FaqList";
import { TransitionLink } from "@/components/motion/TransitionProvider";
import JsonLd from "@/components/seo/JsonLd";
import { productListSchema } from "@/lib/schema";
import { FAQS } from "@/lib/site";

export default function Home() {
  return (
    <>
      <JsonLd data={productListSchema()} />

      {/* 01. Hero */}
      <Hero />

      {/* 02. Client Trust Wall (Banox "IN GOOD COMPANY.") */}
      <BrandsWall />

      {/* 03. Design, Craft & Compliance Depth (Banox {02}, {03} & {04}) */}
      <FeatureStack />

      {/* 04. Buyer Compliance & Standards Q&A */}
      <section
        className="bg-white py-20 sm:py-24 md:py-36 border-t border-neutral-200"
        aria-labelledby="faq-title"
        itemScope
        itemType="https://schema.org/FAQPage"
      >
        <div className="max-w-[1560px] mx-auto px-6 sm:px-8 md:px-12 grid gap-12 lg:gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <span className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.2em] text-neutral-400 block mb-3 font-medium">
              STANDARDS &amp; PROTOCOLS
            </span>
            <h2
              id="faq-title"
              className="font-sans font-black text-4xl sm:text-5xl md:text-6xl uppercase tracking-[-0.03em] text-neutral-950 leading-[0.95]"
            >
              Buyer questions.
            </h2>
            <p className="mt-4 text-neutral-600 text-sm sm:text-base leading-relaxed">
              Standard commercial, REACH testing, and sampling queries importers ask us first.
            </p>
            <div className="mt-8">
              <TransitionLink
                href="/faqs"
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-900 border-b border-neutral-900 pb-1 hover:gap-3 transition-all"
              >
                <span>View all questions</span>
                <span aria-hidden="true">↗</span>
              </TransitionLink>
            </div>
          </div>

          <div className="lg:col-span-8">
            <FaqList items={FAQS.slice(0, 4)} />
          </div>
        </div>
      </section>
    </>
  );
}