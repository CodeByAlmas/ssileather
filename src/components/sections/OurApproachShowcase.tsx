"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TransitionLink } from "@/components/motion/TransitionProvider";
import { IMAGES } from "@/lib/site";

gsap.registerPlugin(ScrollTrigger);

interface ApproachStep {
  num: string;
  title: string;
  body: string;
  highlight: string;
  caption: string;
  image: string;
}

const APPROACH_PILLARS: ApproachStep[] = [
  {
    num: "01",
    title: "REACH-compliant materials",
    body: "All leathers, dyes, and hardware components follow international chemical safety standards. We maintain strict control over tanning, finishing, and sourcing in Kanpur so every shipment meets EU REACH and global buyer compliance requirements.",
    highlight: "Compliance: Batch-tested hides & nickel-free hardware ready for vendor audits.",
    caption: "01 / REACH-COMPLIANT HIDE SELECTION AT SS INTERNATIONAL",
    image: IMAGES.reach,
  },
  {
    num: "02",
    title: "On-time delivery",
    body: "Structured production planning and defined quality checkpoints keep schedules reliable from raw hide cutting to final packing. Clear communication and realistic lead times let your merchandising team plan launches without surprises.",
    highlight: "Lead time: Typically 2–4 weeks standard export dispatch after sample sign-off.",
    caption: "02 / SCHEDULED PRODUCTION & EXPORT DISPATCH FLOOR",
    image: IMAGES.delivery,
  },
  {
    num: "03",
    title: "Best craftsmanship",
    body: "Precise strap cutting, high-density stitching, hand-burnished edge finishing, and secure buckle fitting by master leather artisans. Every belt is inspected piece-by-piece for consistent tension and clean presentation.",
    highlight: "Finishing: Multi-coat Italian edge paint & reinforced keeper loops.",
    caption: "03 / EDGE BURNISHING & ARTISAN STITCHING LINE",
    image: IMAGES.craft,
  },
  {
    num: "04",
    title: "Consistent leather quality",
    body: "In-house tanning and finishing keep hide thickness (3.0mm–4.2mm), colour stability, and supple hand-feel uniform across production runs—ensuring repeat seasonal orders match your approved reference sample.",
    highlight: "Uniformity: Controlled drum-dyeing & gauge calibration across every lot.",
    caption: "04 / IN-HOUSE TANNING & COLOUR CALIBRATION",
    image: IMAGES.quality,
  },
  {
    num: "05",
    title: "Stable pricing with FOB and CIF clarity",
    body: "Transparent commercial quotes with clear FOB (Nhava Sheva / Mundra) and CIF destination options, itemized honestly by leather grade, strap width, buckle metallurgy, and order volume.",
    highlight: "Commercials: Zero hidden surcharges with locked-in batch rate sheets.",
    caption: "05 / TRANSPARENT EXPORT COSTING & DOCUMENTATION",
    image: IMAGES.pricing,
  },
  {
    num: "06",
    title: "Reliable additional capacity",
    body: "We support both year-round core programmes and peak-season volume spikes, offering dedicated capacity of up to 50,000 belts per month as your primary or strategic backup manufacturing partner.",
    highlight: "Scale: 50,000+ belts monthly capacity across formal, casual & polo lines.",
    caption: "06 / HIGH-VOLUME BELT ASSEMBLY CAPACITY IN KANPUR",
    image: IMAGES.capacity,
  },
  {
    num: "07",
    title: "Seasonal developments",
    body: "New silhouettes, textures, and hardware combinations developed every season—from vibrant hand-stitched Argentine polo patterns to embossed western straps and custom-debossed brand loops.",
    highlight: "R&D Studio: Rapid prototyping from your sketch or physical reference.",
    caption: "07 / SEASONAL BUCKLE & TEXTURE DEVELOPMENT",
    image: IMAGES.seasonal,
  },
  {
    num: "08",
    title: "Flexible MOQs for trials",
    body: "Test a new capsule collection, market colourway, or pilot retail programme with a practical minimum order quantity before scaling into full container or bulk production.",
    highlight: "Trial runs: Refundable sample development & low-barrier pilot batches.",
    caption: "08 / PILOT BATCH & FLEXIBLE TRIAL PROGRAMME",
    image: IMAGES.moq,
  },
];

export default function OurApproachShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const [cursorVisible, setCursorVisible] = useState(false);
  const [activeIdx, setActiveIdx] = useState<number>(0);

  const activeItem = APPROACH_PILLARS[activeIdx] ?? APPROACH_PILLARS[0];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".oa-reveal", {
        y: 26,
        opacity: 0,
        duration: 0.85,
        stagger: 0.1,
        ease: "power3.out",
        clearProps: "transform",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleMouseMoveCursor = (e: React.MouseEvent) => {
    if (!cursorRef.current) return;
    gsap.to(cursorRef.current, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.1,
      ease: "power2.out",
    });
  };

  const toggleAccordion = (idx: number) => {
    setActiveIdx((prev) => (prev === idx ? prev : idx));
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMoveCursor}
      className={`bg-[#F8F7F4] text-neutral-900 overflow-hidden relative select-none ${
        cursorVisible ? "cursor-none" : ""
      }`}
    >
      {/* Enlarged Magnetic "View ↗" Circle Cursor */}
      <div
        ref={cursorRef}
        className={`fixed top-0 left-0 pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full bg-white text-black font-sans text-xs font-bold shadow-2xl flex items-center justify-center transition-all duration-200 ease-out ${
          cursorVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
        }`}
        aria-hidden="true"
      >
        <span className="flex items-center gap-1.5">
          <span>View</span>
          <span className="text-base font-normal">↗</span>
        </span>
      </div>

      {/* ========================================================
          SECTION 1: EDITORIAL HERO (Capture01_3 Match)
         ======================================================== */}
      <section
        className="pt-32 sm:pt-40 md:pt-44 pb-20 sm:pb-28 bg-[#F8F7F4]"
        aria-labelledby="approach-hero-title"
      >
        <div className="max-w-[1560px] mx-auto px-6 sm:px-8 md:px-12">
          <span className="oa-reveal font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-neutral-500 block mb-5 font-medium">
            OUR APPROACH &amp; BUYER ADVANTAGE
          </span>

          <h1
            id="approach-hero-title"
            className="oa-reveal font-sans font-bold text-4xl sm:text-6xl md:text-7xl lg:text-[6.5rem] xl:text-[7.25rem] uppercase tracking-[-0.04em] text-neutral-950 leading-[0.92] max-w-6xl"
          >
            YOUR POINT OF VIEW. <br />
            OUR SHARED <br />
            CRAFT.
          </h1>

          <p className="oa-reveal mt-8 sm:mt-10 font-sans text-neutral-700 text-base sm:text-lg leading-relaxed max-w-xl">
            Eight practical reasons global importers, wholesalers, and private-label brands place repeat leather belt orders with SS International in Kanpur.
          </p>
        </div>
      </section>

      {/* ========================================================
          SECTION 2: CLEAR PROCESS & 8 REASONS ACCORDION (Capture02 & 03)
         ======================================================== */}
      <section
        className="py-20 sm:py-28 md:py-32 border-t border-neutral-200 bg-white"
        aria-labelledby="process-pillars-title"
      >
        <div className="max-w-[1560px] mx-auto px-6 sm:px-8 md:px-12">
          {/* Top Asymmetrical Header Row */}
          <div className="pb-14 sm:pb-18 border-b border-neutral-200 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-7">
              <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-neutral-400 block mb-3 font-medium">
                FROM YOUR BRIEF TO BULK
              </span>
              <h2
                id="process-pillars-title"
                className="font-sans font-bold text-3xl sm:text-5xl md:text-[3.5rem] uppercase tracking-[-0.03em] text-neutral-950 leading-[0.96]"
              >
                A CLEAR PROCESS. <br />
                AT EVERY STAGE.
              </h2>
            </div>

            <div className="lg:col-span-5 font-sans text-neutral-600 text-sm sm:text-[15px] leading-relaxed max-w-lg lg:pb-1">
              <p>
                Your belt collection develops through a connected chain of craftsmen and quality checkpoints. Our Kanpur teams stay involved from initial hide selection and sample refinement through bulk production, REACH testing, and FOB/CIF delivery.
              </p>
            </div>
          </div>

          {/* 2-Column Interactive Split: Sticky Visual Left + Expandable 8 Pillars Right */}
          <div className="pt-14 sm:pt-18 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Active Pillar Visual Stage */}
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <div
                onMouseEnter={() => setCursorVisible(true)}
                onMouseLeave={() => setCursorVisible(false)}
                className="relative aspect-[4/3] rounded-md overflow-hidden bg-neutral-100 shadow-lg cursor-none group"
              >
                {APPROACH_PILLARS.map((item, idx) => (
                  <div
                    key={item.num}
                    className={`absolute inset-0 transition-opacity duration-500 ease-out ${
                      idx === activeIdx ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                    }`}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 42vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                ))}
              </div>
              <p className="mt-3.5 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-neutral-500 font-medium">
                {activeItem.caption}
              </p>
            </div>

            {/* Right Column: Banox Interactive Numbered Accordion */}
            <div className="lg:col-span-7 divide-y divide-neutral-200 border-b border-neutral-200">
              {APPROACH_PILLARS.map((item, idx) => {
                const isOpen = idx === activeIdx;
                return (
                  <div key={item.num} className="py-6 sm:py-7">
                    <button
                      type="button"
                      onClick={() => toggleAccordion(idx)}
                      aria-expanded={isOpen}
                      className="w-full flex items-center justify-between gap-6 text-left group"
                    >
                      <div className="flex items-baseline gap-5 sm:gap-8">
                        <span className="font-mono text-xs text-neutral-400 font-medium">
                          {item.num}
                        </span>
                        <h3 className="font-sans font-semibold text-xl sm:text-2xl md:text-[1.65rem] text-neutral-950 tracking-tight group-hover:opacity-75 transition-opacity">
                          {item.title}
                        </h3>
                      </div>

                      <span
                        className="font-mono text-lg text-neutral-500 shrink-0 w-6 text-center transition-transform duration-200"
                        aria-hidden="true"
                      >
                        {isOpen ? "×" : "+"}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="pl-9 sm:pl-14 pr-4 pt-4 space-y-4">
                        <p className="font-sans text-neutral-600 text-sm sm:text-[15px] leading-relaxed max-w-2xl">
                          {item.body}
                        </p>
                        <div className="border-l-2 border-neutral-900 pl-4 py-0.5">
                          <p className="font-sans text-xs sm:text-[13px] text-neutral-500 leading-relaxed">
                            {item.highlight}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 3: DEVELOPMENT WITH DEPTH (Capture04 Match)
         ======================================================== */}
      <section
        className="py-20 sm:py-28 border-t border-neutral-200 bg-[#F8F7F4]"
        aria-labelledby="dev-depth-title"
      >
        <div className="max-w-[1560px] mx-auto px-6 sm:px-8 md:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pt-2">
            {/* Column 1: Editorial Intro */}
            <div className="space-y-3">
              <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-neutral-400 block font-medium">
                DEVELOPMENT, WITH DEPTH
              </span>
              <h2
                id="dev-depth-title"
                className="font-sans font-bold text-2xl sm:text-[1.75rem] text-neutral-950 tracking-tight leading-[1.12]"
              >
                Ideas into <br />
                something tangible.
              </h2>
              <p className="font-sans text-neutral-600 text-sm leading-relaxed pt-1">
                From a first sketch or physical reference to a production-ready belt sample, our Kanpur team helps you lock the right hide, buckle, and finish.
              </p>
            </div>

            {/* Column 2: Monthly Capacity */}
            <div className="space-y-2.5">
              <span className="font-sans font-bold text-3xl sm:text-4xl text-neutral-950 block tracking-tight">
                50,000+
              </span>
              <h3 className="font-sans font-semibold text-sm text-neutral-900">
                Monthly belt capacity
              </h3>
              <p className="font-sans text-neutral-600 text-sm leading-relaxed pt-1">
                Scalable production lines supporting regular wholesale programmes as well as peak-season overflow without quality drift.
              </p>
            </div>

            {/* Column 3: In-house Tanning & Testing */}
            <div className="space-y-2.5">
              <span className="font-sans font-bold text-3xl sm:text-4xl text-neutral-950 block tracking-tight">
                REACH
              </span>
              <h3 className="font-sans font-semibold text-sm text-neutral-900">
                In-house tanning &amp; lab QC
              </h3>
              <p className="font-sans text-neutral-600 text-sm leading-relaxed pt-1">
                Controlled hide processing, colour-fastness verification, and nickel-free hardware compliance across every batch.
              </p>
            </div>

            {/* Column 4: One Reference Sample */}
            <div className="space-y-2.5">
              <span className="font-sans font-bold text-3xl sm:text-4xl text-neutral-950 block tracking-tight">
                One reference
              </span>
              <h3 className="font-sans font-semibold text-sm text-neutral-900">
                Approved before bulk
              </h3>
              <p className="font-sans text-neutral-600 text-sm leading-relaxed pt-1">
                The buyer-approved pre-production sample anchors every thickness, stitch-per-inch, and edge-paint requirement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 4: PRACTICAL STARTING POINT CTA (Capture05 Match)
         ======================================================== */}
      <section
        className="py-20 sm:py-28 md:py-32 border-t border-neutral-200 bg-white"
        aria-labelledby="starting-point-title"
      >
        <div className="max-w-[1560px] mx-auto px-6 sm:px-8 md:px-12">
          <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-neutral-500 block mb-4 font-medium">
            READY FOR THE PRACTICAL DETAILS?
          </span>

          <h2
            id="starting-point-title"
            className="font-sans font-bold text-3xl sm:text-5xl md:text-6xl uppercase tracking-[-0.03em] text-neutral-950 leading-[0.96] max-w-4xl"
          >
            MINIMUMS. TIMING. <br />
            YOUR STARTING POINT.
          </h2>

          <div className="mt-10 sm:mt-12 flex flex-wrap items-center gap-8 sm:gap-12">
            <TransitionLink
              href="/products"
              className="inline-flex items-center justify-between gap-8 text-xs sm:text-sm font-sans font-medium text-neutral-950 border-b border-neutral-950 pb-2 hover:opacity-70 transition-opacity"
            >
              <span>Explore our belt lookbook</span>
              <span>↗</span>
            </TransitionLink>

            <TransitionLink
              href="/contact"
              className="inline-flex items-center justify-between gap-8 text-xs sm:text-sm font-sans font-medium text-neutral-950 border-b border-neutral-950 pb-2 hover:opacity-70 transition-opacity"
            >
              <span>Request a quote &amp; sample brief</span>
              <span>↗</span>
            </TransitionLink>
          </div>
        </div>
      </section>
    </div>
  );
}