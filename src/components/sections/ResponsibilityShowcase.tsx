"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TransitionLink } from "@/components/motion/TransitionProvider";
import { IMAGES } from "@/lib/site";

gsap.registerPlugin(ScrollTrigger);

// Placeholder editorial images — replace paths anytime with your own Kanpur facility & community photos
const RESPONSIBILITY_IMAGES = {
  materialSourcing: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1200&auto=format&fit=crop",
  tanningProcessLeft: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
  tanningProcessRight: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=800&auto=format&fit=crop",
  resourceCutting: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=1200&auto=format&fit=crop",
  workplace: "https://images.unsplash.com/photo-1590736969955-71cc94801759?q=80&w=1400&auto=format&fit=crop",
  safetySupport: IMAGES.craft,
  skillDevelopment: IMAGES.quality,
};

interface StandardRecord {
  id: string;
  category: string;
  title: string;
  badgeText: string;
  badgeAccent: string;
  scopeNote: string;
  testingProtocol: string;
  recordedStatus: string;
  buyerDocumentation: string;
}

const STANDARDS_REGISTER: StandardRecord[] = [
  {
    id: "eu-reach",
    category: "CHEMICAL & MATERIAL SAFETY",
    title: "EU REACH Compliance",
    badgeText: "REACH",
    badgeAccent: "bg-[#0B5FA5] text-white",
    scopeNote: "All export leathers, dyes, finishes & adhesives",
    testingProtocol: "Restricted substance screening (Chromium VI, Azo dyes, Formaldehyde)",
    recordedStatus: "Active standard across export programmes",
    buyerDocumentation: "Batch compliance declarations & accredited third-party lab reports available on request.",
  },
  {
    id: "nickel-free",
    category: "HARDWARE METALLURGY",
    title: "Nickel-Free & Lead-Safe Fittings",
    badgeText: "Ni-FREE",
    badgeAccent: "border-2 border-neutral-900 text-neutral-950",
    scopeNote: "Solid brass, zinc-alloy buckles, rivets & loops",
    testingProtocol: "EN 1811 nickel-release & surface plating durability checks",
    recordedStatus: "Standard specification for European & UK buyers",
    buyerDocumentation: "Hardware finish specs and test verification shared during pre-production sampling.",
  },
  {
    id: "inhouse-qc",
    category: "PRODUCTION QUALITY ASSURANCE",
    title: "In-House Tanning & Batch QC",
    badgeText: "100% QC",
    badgeAccent: "border-2 border-[#B91C1C] text-[#B91C1C]",
    scopeNote: "Kanpur raw hide processing, cutting, stitching & finishing",
    testingProtocol: "Thickness gauge (3.0mm–4.2mm), colour-fastness & stitch-tension audits",
    recordedStatus: "Enforced against buyer-approved red-seal reference",
    buyerDocumentation: "Pre-shipment inspection checklists and measurement records provided per order.",
  },
  {
    id: "ethical-sourcing",
    category: "WORKPLACE & SOCIAL ACCOUNTABILITY",
    title: "Ethical Manufacturing Code",
    badgeText: "ETHICAL",
    badgeAccent: "border border-neutral-500 text-neutral-900",
    scopeNote: "SS International facility, Kanpur, Uttar Pradesh, India",
    testingProtocol: "Zero child labour, fair wages, safe workstations & equal opportunity",
    recordedStatus: "Ongoing internal governance & buyer vendor review",
    buyerDocumentation: "Facility profile, safety records & on-site audit coordination for buyer teams.",
  },
];

export default function ResponsibilityShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const [cursorVisible, setCursorVisible] = useState(false);

  // Count-up refs (Start at 0)
  const impactStripRef = useRef<HTMLDivElement>(null);
  const reachPercentRef = useRef<HTMLSpanElement>(null);
  const estYearRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".resp-hero-reveal", {
        y: 24,
        opacity: 0,
        duration: 0.85,
        stagger: 0.1,
        ease: "power3.out",
        clearProps: "transform",
      });

      if (impactStripRef.current) {
        const pctObj = { val: 0 };
        gsap.to(pctObj, {
          val: 100,
          duration: 1.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: impactStripRef.current,
            start: "top 85%",
            once: true,
          },
          onUpdate: () => {
            if (reachPercentRef.current) {
              reachPercentRef.current.textContent = `${Math.round(pctObj.val)}`;
            }
          },
        });
      }

      if (estYearRef.current) {
        const yrObj = { val: 0 };
        gsap.to(yrObj, {
          val: 2009,
          duration: 1.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: estYearRef.current,
            start: "top 90%",
            once: true,
          },
          onUpdate: () => {
            if (estYearRef.current) {
              estYearRef.current.textContent = `${Math.round(yrObj.val)}`;
            }
          },
        });
      }
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
          1. HERO SECTION (Capture01_4 Match)
         ======================================================== */}
      <section
        className="pt-32 sm:pt-40 md:pt-44 pb-20 sm:pb-28 bg-[#F8F7F4]"
        aria-labelledby="resp-hero-title"
      >
        <div className="max-w-[1560px] mx-auto px-6 sm:px-8 md:px-12">
          <span className="resp-hero-reveal font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-neutral-500 block mb-5 font-medium">
            RESPONSIBILITY &amp; SOCIAL AWARENESS
          </span>

          <h1
            id="resp-hero-title"
            className="resp-hero-reveal font-sans font-bold text-4xl sm:text-6xl md:text-7xl lg:text-[6.25rem] xl:text-[6.75rem] uppercase tracking-[-0.04em] text-neutral-950 leading-[0.92] max-w-6xl"
          >
            GOOD PRACTICE. <br />
            BUILT INTO THE WORK.
          </h1>

          <p className="resp-hero-reveal mt-8 sm:mt-10 font-sans text-neutral-700 text-base sm:text-lg leading-relaxed max-w-xl">
            REACH-compliant leather processing, honest quality in every belt, and community education initiatives in Kanpur are part of how we operate. Explore the standards behind our commitments.
          </p>
        </div>
      </section>

      {/* ========================================================
          2. BETTER CHOICES: 3 PILLARS GRID (Capture02_3 to 04_2)
         ======================================================== */}
      <section
        id="environmental-commitments"
        className="py-20 sm:py-28 md:py-32 border-t border-neutral-200 bg-white"
        aria-labelledby="better-choices-title"
      >
        <div className="max-w-[1560px] mx-auto px-6 sm:px-8 md:px-12">
          {/* Header Row */}
          <div className="pb-14 sm:pb-16 border-b border-neutral-200 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-7">
              <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-neutral-400 block mb-3 font-medium">
                (04) RESPONSIBILITY
              </span>
              <h2
                id="better-choices-title"
                className="font-sans font-bold text-3xl sm:text-5xl md:text-[3.5rem] uppercase tracking-[-0.03em] text-neutral-950 leading-[0.96]"
              >
                BETTER CHOICES. <br />
                BUILT INTO THE WORK.
              </h2>
            </div>

            <div className="lg:col-span-5 font-sans text-neutral-600 text-sm sm:text-[15px] leading-relaxed max-w-md lg:pb-1">
              <p>
                Considered materials. Controlled tanning. Less offcut waste. Practical decisions from the first hide selection to the final export carton.
              </p>
            </div>
          </div>

          {/* 3-Column Visual + Structured Spec Table */}
          <div className="pt-14 grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10 items-start">
            {/* COLUMN 01: Materials */}
            <div>
              <div
                onMouseEnter={() => setCursorVisible(true)}
                onMouseLeave={() => setCursorVisible(false)}
                className="relative aspect-[16/10] rounded-md overflow-hidden bg-neutral-100 shadow-sm cursor-none group"
              >
                <Image
                  src={RESPONSIBILITY_IMAGES.materialSourcing}
                  alt="REACH-compliant leather hide sourcing at SS International Kanpur"
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <p className="mt-2.5 font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-500 font-medium">
                MATERIAL SOURCING / SS INTERNATIONAL
              </p>

              <div className="mt-8">
                <span className="font-mono text-xs text-neutral-400 block font-medium">
                  ( 01 )
                </span>
                <h3 className="mt-2 font-sans font-bold text-2xl text-neutral-950 tracking-tight leading-snug">
                  Start with the right <br /> materials.
                </h3>

                <div className="mt-6 border-t border-neutral-200 divide-y divide-neutral-200">
                  <div className="py-4 grid grid-cols-12 gap-3 items-baseline">
                    <span className="col-span-4 font-sans font-bold text-xs text-neutral-950">
                      Leather
                    </span>
                    <span className="col-span-8 font-sans text-xs text-neutral-600 leading-relaxed">
                      In-house processed full-grain, vegetable-tanned, and buff hides meeting international chemical safety standards
                    </span>
                  </div>

                  <div className="py-4 grid grid-cols-12 gap-3 items-baseline">
                    <span className="col-span-4 font-sans font-bold text-xs text-neutral-950">
                      Components
                    </span>
                    <span className="col-span-8 font-sans text-xs text-neutral-600 leading-relaxed">
                      Azo-free dyes, low-VOC edge finishes, and nickel-free brass or zinc-alloy buckles
                    </span>
                  </div>

                  <div className="py-4 grid grid-cols-12 gap-3 items-baseline">
                    <span className="col-span-4 font-sans font-bold text-xs text-neutral-950">
                      For your brief
                    </span>
                    <span className="col-span-8 font-sans text-xs text-neutral-600 leading-relaxed">
                      Agree material specifications and REACH testing requirements before sampling
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* COLUMN 02: Controlled Processing & Compliance (Dual Side-by-Side Thumbnails like Capture03_5) */}
            <div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <div
                    onMouseEnter={() => setCursorVisible(true)}
                    onMouseLeave={() => setCursorVisible(false)}
                    className="relative aspect-[4/4.3] rounded-md overflow-hidden bg-neutral-100 shadow-sm cursor-none group"
                  >
                    <Image
                      src={RESPONSIBILITY_IMAGES.tanningProcessLeft}
                      alt="In-house leather processing floor in Kanpur"
                      fill
                      sizes="(max-width: 1024px) 50vw, 17vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                  <p className="mt-2.5 font-mono text-[9px] uppercase tracking-[0.15em] text-neutral-500 font-medium">
                    IN-HOUSE TANNING CONTROL
                  </p>
                </div>

                <div>
                  <div
                    onMouseEnter={() => setCursorVisible(true)}
                    onMouseLeave={() => setCursorVisible(false)}
                    className="relative aspect-[4/4.3] rounded-md overflow-hidden bg-neutral-100 shadow-sm cursor-none group"
                  >
                    <Image
                      src={RESPONSIBILITY_IMAGES.tanningProcessRight}
                      alt="Responsible facility operations at SS International"
                      fill
                      sizes="(max-width: 1024px) 50vw, 17vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                  <p className="mt-2.5 font-mono text-[9px] uppercase tracking-[0.15em] text-neutral-500 font-medium">
                    CLEAN FACILITY OPERATIONS
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <span className="font-mono text-xs text-neutral-400 block font-medium">
                  ( 02 )
                </span>
                <h3 className="mt-2 font-sans font-bold text-2xl text-neutral-950 tracking-tight leading-snug">
                  Controlled tanning. <br /> Clean process.
                </h3>

                <div className="mt-6 border-t border-neutral-200 divide-y divide-neutral-200">
                  <div className="py-4 grid grid-cols-12 gap-3 items-baseline">
                    <span className="col-span-4 font-sans font-bold text-xs text-neutral-950">
                      Chemical safety
                    </span>
                    <span className="col-span-8 font-sans text-xs text-neutral-600 leading-relaxed">
                      Strict control over tanning &amp; finishing formulations to eliminate restricted substances
                    </span>
                  </div>

                  <div className="py-4 grid grid-cols-12 gap-3 items-baseline">
                    <span className="col-span-4 font-sans font-bold text-xs text-neutral-950">
                      Effluent care
                    </span>
                    <span className="col-span-8 font-sans text-xs text-neutral-600 leading-relaxed">
                      Responsible water treatment &amp; discharge compliance in our Kanpur leather processing
                    </span>
                  </div>

                  <div className="py-4 grid grid-cols-12 gap-3 items-baseline">
                    <span className="col-span-4 font-sans font-bold text-xs text-neutral-950">
                      Batch traceability
                    </span>
                    <span className="col-span-8 font-sans text-xs text-neutral-600 leading-relaxed">
                      Lot-by-lot tracking from raw hide drum-dyeing through final belt assembly
                    </span>
                  </div>

                  <div className="py-4 grid grid-cols-12 gap-3 items-baseline">
                    <span className="col-span-4 font-sans font-bold text-xs text-neutral-950">
                      Energy efficiency
                    </span>
                    <span className="col-span-8 font-sans text-xs text-neutral-600 leading-relaxed">
                      Modernized stitching &amp; skiving lines calibrated for lower power draw per unit
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* COLUMN 03: Keep Resources in Use */}
            <div>
              <div
                onMouseEnter={() => setCursorVisible(true)}
                onMouseLeave={() => setCursorVisible(false)}
                className="relative aspect-[16/10] rounded-md overflow-hidden bg-neutral-100 shadow-sm cursor-none group"
              >
                <Image
                  src={RESPONSIBILITY_IMAGES.resourceCutting}
                  alt="Precision strap cutting to minimize leather waste"
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <p className="mt-2.5 font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-500 font-medium">
                PRECISION CUTTING / SS INTERNATIONAL
              </p>

              <div className="mt-8">
                <span className="font-mono text-xs text-neutral-400 block font-medium">
                  ( 03 )
                </span>
                <h3 className="mt-2 font-sans font-bold text-2xl text-neutral-950 tracking-tight leading-snug">
                  Keep resources <br /> in use.
                </h3>

                <div className="mt-6 border-t border-neutral-200 divide-y divide-neutral-200">
                  <div className="py-4 grid grid-cols-12 gap-3 items-baseline">
                    <span className="col-span-4 font-sans font-bold text-xs text-neutral-950">
                      Leather offcuts
                    </span>
                    <span className="col-span-8 font-sans text-xs text-neutral-600 leading-relaxed">
                      Reused beyond the primary strap cut for belt loops, keepers, and small accessories
                    </span>
                  </div>

                  <div className="py-4 grid grid-cols-12 gap-3 items-baseline">
                    <span className="col-span-4 font-sans font-bold text-xs text-neutral-950">
                      Nested cutting
                    </span>
                    <span className="col-span-8 font-sans text-xs text-neutral-600 leading-relaxed">
                      Optimized strap-cutting layouts to maximize usable yield from every hide
                    </span>
                  </div>

                  <div className="py-4 grid grid-cols-12 gap-3 items-baseline">
                    <span className="col-span-4 font-sans font-bold text-xs text-neutral-950">
                      Packaging
                    </span>
                    <span className="col-span-8 font-sans text-xs text-neutral-600 leading-relaxed">
                      Recyclable kraft inner boxes and export-grade corrugated master cartons
                    </span>
                  </div>

                  <div className="py-4 grid grid-cols-12 gap-3 items-baseline">
                    <span className="col-span-4 font-sans font-bold text-xs text-neutral-950">
                      Buyer support
                    </span>
                    <span className="col-span-8 font-sans text-xs text-neutral-600 leading-relaxed">
                      Dedicated compliance documentation support for your merchandising &amp; QA team
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Animated Metric Strip (Capture05_2 Top — Starts at 0) */}
          <div
            ref={impactStripRef}
            className="mt-20 sm:mt-28 pt-14 border-t border-neutral-900 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            <div className="lg:col-span-4 flex items-baseline">
              <span
                ref={reachPercentRef}
                className="font-sans font-semibold text-6xl sm:text-7xl md:text-[5.5rem] text-neutral-950 tracking-tight leading-none tabular-nums"
              >
                0
              </span>
              <span className="font-sans font-semibold text-3xl sm:text-4xl text-neutral-950 ml-1">
                %
              </span>
            </div>

            <div className="lg:col-span-5">
              <h3 className="font-sans font-bold text-xl sm:text-2xl text-neutral-950 tracking-tight">
                REACH-compliant material screening.
              </h3>
              <p className="mt-1.5 font-sans text-xs sm:text-sm text-neutral-600">
                Enforced across all export leather belt and accessory programmes.
              </p>
              <p className="mt-1 font-sans text-[11px] text-neutral-400">
                Verified through accredited third-party lab testing on buyer request.
              </p>
            </div>

            <div className="lg:col-span-3 lg:flex lg:justify-end">
              <a
                href="#standards-register"
                className="inline-flex items-center justify-between gap-8 w-full sm:w-auto text-xs sm:text-sm font-sans font-medium text-neutral-950 border-b border-neutral-950 pb-2 hover:opacity-70 transition-opacity"
              >
                <span>Our compliance register</span>
                <span>↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          3. STANDARDS REGISTER (Capture05_2 Bottom to 08)
         ======================================================== */}
      <section
        id="standards-register"
        className="py-20 sm:py-28 md:py-32 border-t border-neutral-200 bg-[#F8F7F4]"
        aria-labelledby="standards-register-title"
      >
        <div className="max-w-[1560px] mx-auto px-6 sm:px-8 md:px-12">
          {/* Top Header */}
          <div className="pb-14 sm:pb-16 border-b border-neutral-200 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-7">
              <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-neutral-500 block mb-3 font-medium">
                STANDARDS &amp; COMPLIANCE REGISTER / SS INTERNATIONAL
              </span>
              <h2
                id="standards-register-title"
                className="font-sans font-bold text-3xl sm:text-5xl md:text-[3.5rem] uppercase tracking-[-0.03em] text-neutral-950 leading-[0.96]"
              >
                KNOW THE STANDARD. <br />
                CHECK THE SCOPE.
              </h2>
            </div>

            <div className="lg:col-span-5 font-sans text-neutral-600 text-sm sm:text-[15px] leading-relaxed max-w-md lg:pb-1">
              <p>
                Our compliance framework records the material safety, hardware metallurgy, and quality benchmarks followed at our Kanpur facility. Ask our team for current lab test reports for your vendor review.
              </p>
            </div>
          </div>

          {/* 2x2 Register Grid (Capture06 & 07 Layout) */}
          <div className="pt-14 grid grid-cols-1 lg:grid-cols-2 gap-x-14 gap-y-14">
            {STANDARDS_REGISTER.map((rec) => (
              <div key={rec.id} className="border-t border-neutral-300 pt-8">
                <div className="flex items-center gap-4">
                  <div
                    className={`w-20 h-12 rounded-[2px] flex items-center justify-center font-sans font-bold text-xs tracking-wider shrink-0 ${rec.badgeAccent}`}
                  >
                    {rec.badgeText}
                  </div>
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-500 block font-medium">
                      {rec.category}
                    </span>
                    <h3 className="font-sans font-bold text-xl sm:text-2xl text-neutral-950 tracking-tight mt-0.5">
                      {rec.title}
                    </h3>
                  </div>
                </div>

                <div className="mt-7 divide-y divide-neutral-200 border-b border-neutral-200">
                  <div className="py-3.5 grid grid-cols-12 gap-4 items-baseline">
                    <span className="col-span-4 font-sans text-xs text-neutral-500">
                      Covered scope
                    </span>
                    <span className="col-span-8 font-sans text-xs sm:text-sm text-neutral-900 font-medium">
                      {rec.scopeNote}
                    </span>
                  </div>

                  <div className="py-3.5 grid grid-cols-12 gap-4 items-baseline">
                    <span className="col-span-4 font-sans text-xs text-neutral-500">
                      Testing protocol
                    </span>
                    <span className="col-span-8 font-sans text-xs sm:text-sm text-neutral-900">
                      {rec.testingProtocol}
                    </span>
                  </div>

                  <div className="py-3.5 grid grid-cols-12 gap-4 items-baseline">
                    <span className="col-span-4 font-sans text-xs text-neutral-500">
                      Current status
                    </span>
                    <span className="col-span-8 font-sans text-xs sm:text-sm text-neutral-900">
                      {rec.recordedStatus}
                    </span>
                  </div>

                  <div className="py-3.5 grid grid-cols-12 gap-4 items-baseline">
                    <span className="col-span-4 font-sans text-xs text-neutral-500">
                      Vendor evidence
                    </span>
                    <span className="col-span-8 font-sans text-xs sm:text-sm text-neutral-700 leading-relaxed">
                      {rec.buyerDocumentation}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 3-Item Verification Footer (Capture08 Match) */}
          <div className="mt-16 pt-14 border-t border-neutral-300 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
            <div>
              <h3 className="font-sans font-bold text-xl sm:text-2xl text-neutral-950 tracking-tight">
                Global buyer compliance.
              </h3>
              <p className="mt-3 font-sans text-xs sm:text-sm text-neutral-600 leading-relaxed max-w-md">
                We supply export-ready leather belts to established fashion labels, wholesalers, and private-label importers across Europe, the UK, and North America, aligning with each buyer&apos;s chemical and packaging standards.
              </p>
            </div>

            <div>
              <h3 className="font-sans font-bold text-xl sm:text-2xl text-neutral-950 tracking-tight">
                Sourcing &amp; batch evidence.
              </h3>
              <p className="mt-3 font-sans text-xs sm:text-sm text-neutral-600 leading-relaxed max-w-md">
                Because we control raw leather processing and finishing in Kanpur, material origin, hide thickness, and batch test certificates are documented directly for your selected order route.
              </p>
            </div>

            <div>
              <h3 className="font-sans font-bold text-xl sm:text-2xl text-neutral-950 tracking-tight">
                Evidence for your vendor review.
              </h3>
              <p className="mt-3 font-sans text-xs sm:text-sm text-neutral-600 leading-relaxed max-w-md">
                Tell us the chemical standard, destination market, and belt specifications your QA team needs to assess. We coordinate batch lab tests and compliance declarations directly.
              </p>

              <div className="mt-7 max-w-xs">
                <TransitionLink
                  href="/contact"
                  className="flex items-center justify-between text-xs sm:text-sm font-sans font-medium text-neutral-950 border-b border-neutral-950 pb-2 hover:opacity-70 transition-opacity"
                >
                  <span>Request compliance documentation</span>
                  <span>↗</span>
                </TransitionLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          4. (05) OUR INITIATIVES & SOCIAL AWARENESS (Capture09_2 to 11_2)
         ======================================================== */}
      <section
        className="py-20 sm:py-28 md:py-32 border-t border-neutral-200 bg-white"
        aria-labelledby="initiatives-title"
      >
        <div className="max-w-[1560px] mx-auto px-6 sm:px-8 md:px-12">
          {/* Header Row */}
          <div className="pb-14 sm:pb-16 border-b border-neutral-200 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-7">
              <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-neutral-400 block mb-3 font-medium">
                ( 05 ) OUR INITIATIVES &amp; SOCIAL AWARENESS
              </span>
              <h2
                id="initiatives-title"
                className="font-sans font-bold text-3xl sm:text-5xl md:text-[3.5rem] uppercase tracking-[-0.03em] text-neutral-950 leading-[0.96]"
              >
                CARE THAT REACHES <br />
                BEYOND THE FACTORY.
              </h2>
            </div>

            <div className="lg:col-span-5 font-sans text-neutral-600 text-sm sm:text-[15px] leading-relaxed max-w-md lg:pb-1">
              <p>
                SS International is both a manufacturing workshop and a community partner in Kanpur—supporting our artisans in their working lives and empowering underprivileged children through education and opportunity.
              </p>
            </div>
          </div>

          {/* Row 1: 01 / A Fair & Respectful Workplace (Capture09_2) */}
          <div className="py-16 sm:py-20 border-b border-neutral-200 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-6">
              <div
                onMouseEnter={() => setCursorVisible(true)}
                onMouseLeave={() => setCursorVisible(false)}
                className="relative aspect-[16/10] rounded-md overflow-hidden bg-neutral-100 shadow-md cursor-none group"
              >
                <Image
                  src={RESPONSIBILITY_IMAGES.workplace}
                  alt="Artisans and team members at SS International Kanpur"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
            </div>

            <div className="lg:col-span-6">
              <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-neutral-400 block mb-3 font-medium">
                01 / A FAIR &amp; RESPECTFUL WORKPLACE
              </span>
              <h3 className="font-sans font-bold text-3xl sm:text-4xl text-neutral-950 tracking-tight leading-[1.08]">
                Room to work. <br />
                Room to grow.
              </h3>
              <p className="mt-4 font-sans text-neutral-600 text-sm sm:text-[15px] leading-relaxed max-w-lg">
                Established in{" "}
                <span ref={estYearRef} className="font-semibold text-neutral-950 tabular-nums">
                  0
                </span>
                , SS International fosters a safe, transparent, and respectful workshop environment in Kanpur—built on integrity, fair remuneration, and long-term artisan retention.
              </p>

              <div className="mt-8 border-t border-neutral-200 divide-y divide-neutral-200 max-w-lg">
                <div className="py-3.5 grid grid-cols-12 gap-3 items-baseline">
                  <span className="col-span-5 font-sans font-bold text-xs text-neutral-950">
                    Direct employment
                  </span>
                  <span className="col-span-7 font-sans text-xs text-neutral-600">
                    Fair, transparent hiring with zero recruitment fees charged to workers
                  </span>
                </div>

                <div className="py-3.5 grid grid-cols-12 gap-3 items-baseline">
                  <span className="col-span-5 font-sans font-bold text-xs text-neutral-950">
                    Zero child labour
                  </span>
                  <span className="col-span-7 font-sans text-xs text-neutral-600">
                    Strict age verification and ethical workplace compliance across all departments
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2: 3-Column Community & Education Split (Capture10_2 & 11_2) */}
          <div className="pt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            {/* Column 02: Workplace Safety & Everyday Support */}
            <div className="lg:col-span-4 flex flex-col justify-between">
              <div>
                <div
                  onMouseEnter={() => setCursorVisible(true)}
                  onMouseLeave={() => setCursorVisible(false)}
                  className="relative aspect-[4/3] rounded-md overflow-hidden bg-neutral-100 shadow-sm cursor-none group"
                >
                  <Image
                    src={RESPONSIBILITY_IMAGES.safetySupport}
                    alt="Safe workstations and protective gear at SS International"
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <span className="mt-5 font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-400 block font-medium">
                  02 / WORKPLACE HEALTH &amp; SAFETY
                </span>
                <h3 className="mt-2 font-sans font-bold text-2xl text-neutral-950 tracking-tight">
                  Care in the working day.
                </h3>
                <p className="mt-3 font-sans text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  Well-ventilated floor layouts, ergonomic stitching stations, machine safety guards, and clean drinking water ensure a healthy daily environment for every craftsperson.
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-neutral-200">
                <span className="font-sans font-bold text-xs text-neutral-950 block">
                  Safe floor standards
                </span>
                <p className="mt-1 font-sans text-xs text-neutral-500 leading-relaxed">
                  Dedicated first-aid readiness and protective equipment across cutting, skiving, and finishing lines.
                </p>
              </div>
            </div>

            {/* Column 03: Artisan Skill Development */}
            <div className="lg:col-span-4 flex flex-col justify-between">
              <div>
                <div
                  onMouseEnter={() => setCursorVisible(true)}
                  onMouseLeave={() => setCursorVisible(false)}
                  className="relative aspect-[4/3] rounded-md overflow-hidden bg-neutral-100 shadow-sm cursor-none group"
                >
                  <Image
                    src={RESPONSIBILITY_IMAGES.skillDevelopment}
                    alt="Artisan skill training in belt craftsmanship"
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <span className="mt-5 font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-400 block font-medium">
                  03 / SKILL DEVELOPMENT &amp; GROWTH
                </span>
                <h3 className="mt-2 font-sans font-bold text-2xl text-neutral-950 tracking-tight">
                  Growth through craft.
                </h3>
                <p className="mt-3 font-sans text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  Encouraging skill development and career progression—training junior operators under senior master artisans in hand-loomed polo stitching, pattern cutting, and edge burnishing.
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-neutral-200">
                <span className="font-sans font-bold text-xs text-neutral-950 block">
                  Artisan mentorship
                </span>
                <p className="mt-1 font-sans text-xs text-neutral-500 leading-relaxed">
                  Hands-on vocational training that builds lasting craftsmanship and financial stability.
                </p>
              </div>
            </div>

            {/* Column 04: Shaded Education & Community Welfare Card (Real ssileather.com Social Awareness Data) */}
            <div className="lg:col-span-4 bg-[#F4F2ED] border border-neutral-200/80 rounded-md p-8 flex flex-col justify-between">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-500 block font-medium">
                  04 / EDUCATION &amp; COMMUNITY WELFARE
                </span>
                <h3 className="mt-3 font-sans font-bold text-2xl sm:text-[1.65rem] text-neutral-950 tracking-tight leading-snug">
                  Investing in the next generation.
                </h3>
                <p className="mt-3 font-serif italic text-sm text-neutral-800">
                  &ldquo;Empowering lives through education and opportunity.&rdquo;
                </p>

                <div className="mt-6 space-y-6 divide-y divide-neutral-300/70">
                  <div className="pt-1">
                    <h4 className="font-sans font-bold text-xs sm:text-sm text-neutral-950">
                      Supporting education for underprivileged children
                    </h4>
                    <p className="mt-1.5 font-sans text-xs text-neutral-600 leading-relaxed">
                      SS International actively supports educational access for underprivileged children in Kanpur, helping remove financial barriers to schooling and foundational learning.
                    </p>
                  </div>

                  <div className="pt-5">
                    <h4 className="font-sans font-bold text-xs sm:text-sm text-neutral-950">
                      Equal learning opportunities
                    </h4>
                    <p className="mt-1.5 font-sans text-xs text-neutral-600 leading-relaxed">
                      Promoting equal learning environments and essential study resources so young students can build self-reliant futures.
                    </p>
                  </div>

                  <div className="pt-5">
                    <h4 className="font-sans font-bold text-xs sm:text-sm text-neutral-950">
                      Community welfare &amp; progress
                    </h4>
                    <p className="mt-1.5 font-sans text-xs text-neutral-600 leading-relaxed">
                      Contributing directly to local community welfare and inclusive social progress alongside our manufacturing operations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Summary Bar (Capture11_2 Bottom) */}
          <div className="mt-20 pt-10 border-t border-neutral-200 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5">
              <h3 className="font-sans font-bold text-2xl sm:text-3xl text-neutral-950 tracking-tight">
                People. Materials. Progress.
              </h3>
              <p className="mt-1.5 font-sans text-xs sm:text-sm text-neutral-500">
                Our responsibility is part of how we craft every belt.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10">
              <a
                href="#standards-register"
                className="flex items-center justify-between text-xs sm:text-sm font-sans font-medium text-neutral-950 border-b border-neutral-950 pb-2.5 hover:opacity-70 transition-opacity"
              >
                <span>Explore standards &amp; compliance</span>
                <span>↗</span>
              </a>

              <TransitionLink
                href="/manufacturing"
                className="flex items-center justify-between text-xs sm:text-sm font-sans font-medium text-neutral-950 border-b border-neutral-950 pb-2.5 hover:opacity-70 transition-opacity"
              >
                <span>Inside our Kanpur facility</span>
                <span>↗</span>
              </TransitionLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}