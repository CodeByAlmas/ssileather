"use client";

import { TransitionLink } from "@/components/motion/TransitionProvider";

export default function Hero() {
  return (
    <section 
      className="relative min-h-[92svh] md:min-h-screen w-full flex flex-col justify-end pb-12 sm:pb-16 md:pb-20 px-6 sm:px-8 md:px-12 max-w-[1560px] mx-auto select-none z-10"
      aria-label="SS International Hero"
    >
      <div className="max-w-3xl">
        {/* Subtle Category Pill for AEO/GEO context */}
        <div className="mb-4 overflow-hidden">
          <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-white/75 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full inline-block">
            B2B Private Label &bull; Kanpur Export Unit
          </span>
        </div>

        {/* Banox Exact Proportional Heading in Pure White */}
        <h1 className="font-sans font-black text-4xl sm:text-6xl md:text-7xl lg:text-[4.75rem] tracking-[-0.035em] uppercase leading-[0.94] text-white">
          EXCELLENCE IN <br className="hidden sm:inline" />
          EVERY DETAIL.
        </h1>

        {/* Client Core Value Proposition */}
        <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-[16px] font-normal text-white/90 tracking-tight max-w-xl leading-relaxed">
          Leading leather goods manufacturer. In-house tanning, bespoke belts, and pet accessories from Kanpur, for global buyers.
        </p>

        {/* Action Link with Banox Arrow ↗ */}
        <div className="mt-6 sm:mt-8 flex items-center gap-6">
          <TransitionLink
            href="/#products"
            className="inline-flex items-center gap-2 text-xs sm:text-[13px] font-medium tracking-wide text-white border-b border-white/70 pb-1 hover:border-white hover:gap-3 transition-all"
            aria-label="Explore Belt and Accessory Catalog"
          >
            <span>Lookbook</span>
            <span className="text-sm leading-none" aria-hidden="true">↗</span>
          </TransitionLink>

          <TransitionLink
            href="/contact"
            className="sm:hidden inline-flex items-center gap-2 text-xs font-medium tracking-wide text-white/80 border-b border-white/30 pb-1"
          >
            <span>Inquire</span>
            <span className="text-sm leading-none" aria-hidden="true">↗</span>
          </TransitionLink>
        </div>
      </div>
    </section>
  );
}