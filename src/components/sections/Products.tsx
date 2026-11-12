"use client";

import { TransitionLink } from "@/components/motion/TransitionProvider";
import LeatherSwatch from "@/components/ui/LeatherSwatch";
import { BELT_STYLES } from "@/lib/site";

const SEGMENTS = [
  {
    title: "ENTERPRISE IMPORTERS",
    desc: "Container-scale delivery across Atlantic and Mediterranean freight lines with certified SGS batch testing.",
    slug: "formal-profile-belt",
    tag: "High Volume",
  },
  {
    title: "PRIVATE LABEL & BRANDS",
    desc: "Custom brass buckle debossing, tailored packaging boxes, and bespoke leather color matches from approved pantones.",
    slug: "designer-belt",
    tag: "Custom OEM",
  },
  {
    title: "SPECIALTY RETAILERS",
    desc: "Low-run Argentine polo stitch patterns, hand-burnished edge paint, and western stamped saddles.",
    slug: "polo-belt",
    tag: "Bespoke Finishing",
  },
];

export default function Products() {
  return (
    <section id="products" className="bg-[#080808] text-white py-24 md:py-36 border-t border-white/10">
      <div className="max-w-[1520px] mx-auto px-6 md:px-12">
        
        {/* Avalanche Red Statement Cutout (Video 00:26 mark) */}
        <div className="relative w-full rounded-2xl bg-red-600 text-white p-8 md:p-20 overflow-hidden mb-28 shadow-2xl">
          <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-15 pointer-events-none select-none font-black text-[18rem] leading-none text-black flex items-center justify-end pr-10">
            SSI
          </div>
          <div className="relative z-10 max-w-3xl">
            <span className="font-mono text-xs uppercase tracking-widest text-black/80 font-bold block mb-4">
              CAPACITY STATEMENT // 50,000 PIECES MONTHLY
            </span>
            <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tight leading-[0.95]">
              BUILT FOR REAL WORLD SCALE.
            </h2>
            <p className="mt-6 text-white/90 text-base md:text-xl font-normal leading-relaxed max-w-xl">
              From Kanpur tanneries to logistics hubs in Rotterdam and New York, SS International provides reliable supply
              chains without material variance.
            </p>
          </div>
        </div>

        {/* 3-Column Segment Grid (Video 00:34 mark) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-28">
          {SEGMENTS.map((seg) => (
            <div
              key={seg.title}
              className="bg-[#111111] border border-white/10 p-8 rounded-lg flex flex-col justify-between hover:border-red-600/50 transition-colors"
            >
              <div>
                <span className="font-mono text-[10px] text-red-500 uppercase tracking-widest block mb-4">
                  {seg.tag}
                </span>
                <h3 className="text-2xl font-bold uppercase tracking-tight mb-4">{seg.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed mb-8">{seg.desc}</p>
              </div>
              <TransitionLink
                href={`/products/${seg.slug}`}
                className="bg-red-600 hover:bg-red-700 text-white font-mono text-xs uppercase tracking-widest px-5 py-3 w-fit flex items-center gap-2 rounded-sm transition-colors"
              >
                <span>Learn More</span>
                <span>→</span>
              </TransitionLink>
            </div>
          ))}
        </div>

        {/* Belt Styles Editorial Catalog */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-red-500 font-semibold block mb-2">
              CATALOGUE ARCHIVE // BELT STYLES
            </span>
            <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tight">
              ENGINEERED SILHOUETTES
            </h3>
          </div>
          <p className="text-neutral-400 text-sm max-w-sm">
            All styles can be produced in custom hide thickness (3.0mm to 4.2mm) with brushed, matte, or nickel-free hardware.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BELT_STYLES.map((belt) => (
            <TransitionLink
              key={belt.slug}
              href={`/products/${belt.slug}`}
              className="group bg-[#111111] border border-white/5 rounded-lg overflow-hidden flex flex-col justify-between hover:border-white/20 transition-all duration-300"
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-neutral-900 relative">
                <LeatherSwatch
                  slug={belt.slug}
                  tone={belt.tone}
                  stitch={belt.stitch}
                  variant="belt"
                  label={belt.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <h4 className="font-bold uppercase tracking-tight text-lg text-white group-hover:text-red-500 transition-colors">
                    {belt.name}
                  </h4>
                  <p className="mt-2 text-xs text-neutral-400 line-clamp-2 leading-relaxed">
                    {belt.summary}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between font-mono text-[11px] text-neutral-500">
                  <span>INQUIRE BATCH</span>
                  <span className="text-red-500 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </TransitionLink>
          ))}
        </div>
      </div>
    </section>
  );
}