"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TransitionLink } from "@/components/motion/TransitionProvider";
import { IMAGES } from "@/lib/site";

gsap.registerPlugin(ScrollTrigger);

const FACILITY_IMAGES = {
  heroFloor: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1600&auto=format&fit=crop",
  materials: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1400&auto=format&fit=crop",
  preparation: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=1400&auto=format&fit=crop",
  construction: "https://images.unsplash.com/photo-1590736969955-71cc94801759?q=80&w=1400&auto=format&fit=crop",
  finishing: "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?q=80&w=1400&auto=format&fit=crop",
  skivingMachine: "https://images.unsplash.com/photo-1565688534245-05d6b5be184a?q=80&w=1000&auto=format&fit=crop",
  dieCutting: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1000&auto=format&fit=crop",
  finalQc: IMAGES.quality,
};

interface DepartmentBlock {
  num: string;
  tag: string;
  title: string;
  description: string;
  bullets: string[];
  image: string;
  caption: string;
  imageSide: "left" | "right";
}

const DEPARTMENTS: DepartmentBlock[] = [
  {
    num: "01",
    tag: "01 / MATERIALS",
    title: "A considered start.",
    description:
      "Our Kanpur hide and hardware store connects raw leather processing directly with the assembly floor. Material selections, thickness gauges, and REACH chemical checks are locked around your brief.",
    bullets: [
      "Incoming hide inspection & grain grading",
      "Full-grain, vegetable-tanned, buff & split leather options",
      "Nickel-free brass & zinc-alloy buckle specifications agreed upfront",
    ],
    image: FACILITY_IMAGES.materials,
    caption: "LEATHER & HARDWARE STORE / KANPUR",
    imageSide: "left",
  },
  {
    num: "02",
    tag: "02 / PREPARATION",
    title: "Precision before the stitch.",
    description:
      "Pattern makers and cutting technicians translate your approved reference sample into calibrated leather straps, linings, and keeper loops ready for assembly.",
    bullets: [
      "Strap cutting, splitting & feather-edge skiving (3.0mm–4.2mm)",
      "Precision pattern engineering & die calibration",
      "Preparation for padded, flat, reversible & polo constructions",
    ],
    image: FACILITY_IMAGES.preparation,
    caption: "STRAP CUTTING & SKIVING / KANPUR",
    imageSide: "right",
  },
  {
    num: "03",
    tag: "03 / CONSTRUCTION",
    title: "Skill in every seam.",
    description:
      "Specialist stitching lines and hand-weaving artisans work through the structural assembly and decorative detailing of every belt collection.",
    bullets: [
      "High-density lockstitching & reinforced stress-point assembly",
      "Hand-woven Argentine polo thread embroidery",
      "Solid brass hardware, swivel mechanisms & keeper fitting",
    ],
    image: FACILITY_IMAGES.construction,
    caption: "STITCHING & HAND-LOOM POLO LINE / KANPUR",
    imageSide: "left",
  },
  {
    num: "04",
    tag: "04 / FINISHING",
    title: "The details that define it.",
    description:
      "Surface patina, multi-coat edge burnishing, and brand debossing are executed against your red-seal reference sample and carried through to export packing.",
    bullets: [
      "Multi-coat edge painting, sanding & heat burnishing",
      "Custom brand logo embossing, foil stamping & tip shaping",
      "Individual poly-bagging, barcode tagging & export carton packing",
    ],
    image: FACILITY_IMAGES.finishing,
    caption: "EDGE FINISHING & PRESENTATION / KANPUR",
    imageSide: "right",
  },
];

const SEQUENCE_STEPS = [
  {
    num: "01",
    title: "Prototype",
    body: "Patterns, strap proportions, leather finishes, and buckle options developed around your design brief.",
    timing: "7–10 days, indicative",
    note: "The start date is confirmed after reviewing your tech pack or physical reference.",
  },
  {
    num: "02",
    title: "Sample & refine",
    body: "Typically 1–2 refinement iterations per style, with measurement sheets and high-res photos shared at each stage.",
    timing: "Review together",
    note: "Sample charges are refundable against confirmed bulk production orders.",
  },
  {
    num: "03",
    title: "Pre-production sample",
    body: "Buyer approval establishes the sealed reference sample used across cutting, stitching, and QC.",
    timing: "1 week before bulk start",
    note: "Indicative PPS sign-off. Lab testing & REACH documentation locked at this milestone.",
  },
  {
    num: "04",
    title: "Bulk production",
    body: "In-house leather processing, cutting, stitching, edge finishing, and packing follow the approved specification.",
    timing: "2–4 weeks, indicative",
    note: "We lock the dispatch schedule once material readiness and line allocation are confirmed.",
  },
  {
    num: "05",
    title: "Repeat orders",
    body: "We archive your approved dies, leather colour formulas, and buckle moulds for fast seasonal re-orders.",
    timing: "2–3 weeks, indicative",
    note: "Streamlined lead times for repeat programmes subject to production slot availability.",
  },
];

const COMMERCIAL_TERMS = [
  {
    label: "Minimum order",
    value: "200–300 pieces per style, colour and leather grade (flexible trial MOQs available).",
  },
  {
    label: "Development charges",
    value: "Sample fees are credited back upon bulk order confirmation. Arrangement confirmed before sampling.",
  },
  {
    label: "Hardware & moulds",
    value: "Custom buckle or logo-debossing die charges apply only when new tooling is opened.",
  },
  {
    label: "Quotation & Incoterms",
    value: "Transparent FOB (Indian Port) and CIF destination quotes valid for 30 days.",
  },
  {
    label: "Capacity & delivery",
    value: "Up to 50,000 belts/month confirmed against product mix, approvals, and production schedule.",
  },
];

export default function ManufacturingShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const [cursorVisible, setCursorVisible] = useState(false);

  // Count-up refs (Start from 0)
  const heroMetricsRef = useRef<HTMLDivElement>(null);
  const devRoomCountRef = useRef<HTMLSpanElement>(null);
  const outputTableRef = useRef<HTMLDivElement>(null);
  const practicalMetricsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero subtle entrance
      gsap.from(".mfg-hero-reveal", {
        y: 24,
        opacity: 0,
        duration: 0.85,
        stagger: 0.1,
        ease: "power3.out",
        clearProps: "transform",
      });

      // Generic count-up helper for all [data-count-target] elements
      const animateCountersInScope = (scopeEl: HTMLElement | null) => {
        if (!scopeEl) return;
        const targets = scopeEl.querySelectorAll<HTMLElement>("[data-count-target]");
        targets.forEach((el) => {
          const endVal = Number(el.dataset.countTarget || "0");
          const suffix = el.dataset.countSuffix || "";
          const prefix = el.dataset.countPrefix || "";
          const obj = { val: 0 };

          gsap.to(obj, {
            val: endVal,
            duration: 1.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: scopeEl,
              start: "top 85%",
              once: true,
            },
            onUpdate: () => {
              el.textContent = `${prefix}${Math.round(obj.val).toLocaleString("en-US")}${suffix}`;
            },
          });
        });
      };

      animateCountersInScope(heroMetricsRef.current);
      animateCountersInScope(outputTableRef.current);
      animateCountersInScope(practicalMetricsRef.current);

      if (devRoomCountRef.current) {
        const devObj = { val: 0 };
        gsap.to(devObj, {
          val: 25,
          duration: 1.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: devRoomCountRef.current,
            start: "top 88%",
            once: true,
          },
          onUpdate: () => {
            if (devRoomCountRef.current) {
              devRoomCountRef.current.textContent = `${Math.round(devObj.val)}`;
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
          1. HERO SPLIT + 4 FACILITY METRICS (Capture01 & 02)
         ======================================================== */}
      <section
        className="pt-32 sm:pt-40 md:pt-44 pb-16 sm:pb-24 bg-[#F8F7F4]"
        aria-labelledby="mfg-hero-title"
      >
        <div className="max-w-[1560px] mx-auto px-6 sm:px-8 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start">
            {/* Left Column: Title, Intro & Anchor */}
            <div className="lg:col-span-6 flex flex-col justify-between lg:min-h-[460px]">
              <div>
                <span className="mfg-hero-reveal font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-neutral-500 block mb-5 font-medium">
                  MANUFACTURING / KANPUR, INDIA
                </span>

                <h1
                  id="mfg-hero-title"
                  className="mfg-hero-reveal font-sans font-bold text-4xl sm:text-6xl md:text-[4.25rem] lg:text-[4.75rem] tracking-[-0.035em] text-neutral-950 leading-[0.98]"
                >
                  The people. <br />
                  The precision. <br />
                  The capacity.
                </h1>

                <p className="mfg-hero-reveal mt-6 sm:mt-8 font-sans text-neutral-600 text-base sm:text-[17px] leading-relaxed max-w-md">
                  Leather belt and accessory manufacturing, from raw hide processing to the finished piece. Explore the skills, equipment, and teams behind your collection.
                </p>
              </div>

              <div className="mfg-hero-reveal mt-10 lg:mt-16 max-w-xs">
                <a
                  href="#inside-facility"
                  className="flex items-center justify-between text-xs sm:text-sm font-sans font-medium text-neutral-950 border-b border-neutral-950 pb-2.5 hover:opacity-70 transition-opacity"
                >
                  <span>Inside our facility</span>
                  <span>↓</span>
                </a>
              </div>
            </div>

            {/* Right Column: Large Facility Floor Photo */}
            <div className="lg:col-span-6">
              <div
                onMouseEnter={() => setCursorVisible(true)}
                onMouseLeave={() => setCursorVisible(false)}
                className="relative aspect-[4/3.1] rounded-md overflow-hidden bg-neutral-200 shadow-xl cursor-none group"
              >
                <Image
                  src={FACILITY_IMAGES.heroFloor}
                  alt="SS International leather belt assembly floor in Kanpur, India"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <p className="mt-3 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-neutral-500 font-medium">
                OUR MANUFACTURING FLOOR / KANPUR
              </p>
            </div>
          </div>

          {/* 4-Column Animated Facility Metrics (Start at 0) */}
          <div
            ref={heroMetricsRef}
            className="mt-16 sm:mt-24 pt-12 border-t border-neutral-200 grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10"
          >
            <div>
              <span
                data-count-target="350"
                data-count-suffix="+"
                className="font-sans font-semibold text-4xl sm:text-5xl md:text-[3.5rem] text-neutral-950 block tracking-tight tabular-nums"
              >
                0+
              </span>
              <span className="font-sans text-xs sm:text-sm text-neutral-500 mt-2 block">
                Artisans &amp; production staff
              </span>
            </div>

            <div>
              <span
                data-count-target="12"
                className="font-sans font-semibold text-4xl sm:text-5xl md:text-[3.5rem] text-neutral-950 block tracking-tight tabular-nums"
              >
                0
              </span>
              <span className="font-sans text-xs sm:text-sm text-neutral-500 mt-2 block">
                Dedicated belt lines &amp; cells
              </span>
            </div>

            <div>
              <span
                data-count-target="25"
                className="font-sans font-semibold text-4xl sm:text-5xl md:text-[3.5rem] text-neutral-950 block tracking-tight tabular-nums"
              >
                0
              </span>
              <span className="font-sans text-xs sm:text-sm text-neutral-500 mt-2 block">
                Sample &amp; pattern makers
              </span>
            </div>

            <div>
              <div className="flex items-baseline gap-1.5">
                <span
                  data-count-target="45000"
                  className="font-sans font-semibold text-4xl sm:text-5xl md:text-[3.5rem] text-neutral-950 tracking-tight tabular-nums"
                >
                  0
                </span>
                <span className="font-sans text-xs sm:text-sm font-semibold text-neutral-800">
                  sq.ft
                </span>
              </div>
              <span className="font-sans text-xs sm:text-sm text-neutral-500 mt-2 block">
                In-house tanning &amp; assembly site
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. INSIDE THE FACILITY: 4 DEPARTMENTS (Capture03 to 08)
         ======================================================== */}
      <section
        id="inside-facility"
        className="py-20 sm:py-28 md:py-32 border-t border-neutral-200 bg-white"
        aria-labelledby="inside-facility-title"
      >
        <div className="max-w-[1560px] mx-auto px-6 sm:px-8 md:px-12">
          {/* Section Header */}
          <div className="pb-16 sm:pb-20 border-b border-neutral-200 max-w-2xl">
            <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-neutral-400 block mb-3 font-medium">
              INSIDE THE FACILITY
            </span>
            <h2
              id="inside-facility-title"
              className="font-sans font-bold text-3xl sm:text-5xl md:text-[3.5rem] tracking-[-0.03em] text-neutral-950 leading-[1.02]"
            >
              Every department. <br />
              A part of the whole.
            </h2>
            <p className="mt-4 font-sans text-neutral-600 text-sm sm:text-base leading-relaxed">
              From raw hide preparation to the finished belt, explore the people and processes behind every export shipment.
            </p>
          </div>

          {/* Alternating Department Rows with Divider Lines */}
          <div className="divide-y divide-neutral-200">
            {DEPARTMENTS.map((dept) => {
              const isImageLeft = dept.imageSide === "left";
              return (
                <div
                  key={dept.num}
                  className="py-16 sm:py-24 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
                >
                  {/* Image Column */}
                  <div
                    className={`lg:col-span-6 ${
                      isImageLeft ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <div
                      onMouseEnter={() => setCursorVisible(true)}
                      onMouseLeave={() => setCursorVisible(false)}
                      className="relative aspect-[4/3] rounded-md overflow-hidden bg-neutral-100 shadow-lg cursor-none group"
                    >
                      <Image
                        src={dept.image}
                        alt={dept.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    </div>
                    <p className="mt-3 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-neutral-500 font-medium">
                      {dept.caption}
                    </p>
                  </div>

                  {/* Content + Divided Spec Lines Column */}
                  <div
                    className={`lg:col-span-6 ${
                      isImageLeft ? "lg:order-2 lg:pl-6" : "lg:order-1 lg:pr-6"
                    }`}
                  >
                    <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-neutral-400 block mb-3 font-medium">
                      {dept.tag}
                    </span>
                    <h3 className="font-sans font-bold text-3xl sm:text-4xl md:text-[2.75rem] tracking-[-0.025em] text-neutral-950 leading-[1.08]">
                      {dept.title}
                    </h3>
                    <p className="mt-4 font-sans text-neutral-600 text-sm sm:text-[15px] leading-relaxed max-w-lg">
                      {dept.description}
                    </p>

                    <ul className="mt-8 border-t border-neutral-200 divide-y divide-neutral-200 max-w-lg">
                      {dept.bullets.map((line) => (
                        <li
                          key={line}
                          className="py-3.5 font-sans text-xs sm:text-sm text-neutral-800 font-medium"
                        >
                          {line}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================
          3. EQUIPMENT & DEVELOPMENT ROOM (Capture08, 09 & 11)
         ======================================================== */}
      <section
        className="py-20 sm:py-28 md:py-32 border-t border-neutral-200 bg-[#F8F7F4]"
        aria-labelledby="equipment-dev-title"
      >
        <div className="max-w-[1560px] mx-auto px-6 sm:px-8 md:px-12">
          <div className="max-w-2xl mb-14 sm:mb-16">
            <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-neutral-400 block mb-3 font-medium">
              EQUIPMENT &amp; DEVELOPMENT
            </span>
            <h2
              id="equipment-dev-title"
              className="font-sans font-bold text-3xl sm:text-5xl md:text-[3.5rem] tracking-[-0.03em] text-neutral-950 leading-[1.02]"
            >
              Tools for the detail. <br />
              People with the skill.
            </h2>
            <p className="mt-4 font-sans text-neutral-600 text-sm sm:text-base leading-relaxed">
              Calibrated splitting, hydraulic die-cutting, and edge-finishing machinery support the precision of our Kanpur development and production teams.
            </p>
          </div>

          {/* 3-Column Grid: 2 Machine Cards + 1 Shaded Development Room Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Machine Card 1 */}
            <div className="lg:col-span-4 flex flex-col">
              <div
                onMouseEnter={() => setCursorVisible(true)}
                onMouseLeave={() => setCursorVisible(false)}
                className="relative aspect-[4/4.2] rounded-md overflow-hidden bg-neutral-200 shadow-md cursor-none group"
              >
                <Image
                  src={FACILITY_IMAGES.skivingMachine}
                  alt="Leather splitting and edge skiving machinery"
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <h3 className="mt-5 font-sans font-bold text-xl text-neutral-950 tracking-tight">
                Splitting &amp; skiving
              </h3>
              <p className="mt-2 font-sans text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Calibrating hide thickness (3.0mm–4.2mm) and tapering fold-over edges for clean buckle turns and padded profiles.
              </p>
            </div>

            {/* Machine Card 2 */}
            <div className="lg:col-span-4 flex flex-col">
              <div
                onMouseEnter={() => setCursorVisible(true)}
                onMouseLeave={() => setCursorVisible(false)}
                className="relative aspect-[4/4.2] rounded-md overflow-hidden bg-neutral-200 shadow-md cursor-none group"
              >
                <Image
                  src={FACILITY_IMAGES.dieCutting}
                  alt="Hydraulic leather strap and tip die cutting"
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <h3 className="mt-5 font-sans font-bold text-xl text-neutral-950 tracking-tight">
                Leather strap &amp; die cutting
              </h3>
              <p className="mt-2 font-sans text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Cutting belt straps, English/western tips, and keeper loops with precision steel dies for uniform batch sizing.
              </p>
            </div>

            {/* Shaded Development Room Card (Capture09 & 11) */}
            <div className="lg:col-span-4 bg-[#EFEDE8] border border-neutral-200/80 rounded-md p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-neutral-500 block font-medium">
                  THE DEVELOPMENT ROOM
                </span>
                <span
                  ref={devRoomCountRef}
                  className="mt-4 font-sans font-bold text-5xl sm:text-6xl text-neutral-950 block tracking-tight tabular-nums"
                >
                  0
                </span>
                <h3 className="mt-2 font-sans font-bold text-xl text-neutral-950">
                  Sample makers
                </h3>
                <p className="mt-3 font-sans text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  Dedicated pattern and sample artisans convert hand-drawn sketches or physical references into production-ready belts.
                </p>

                <ul className="mt-6 space-y-2 font-sans text-xs sm:text-sm text-neutral-800">
                  <li>&bull; Pattern &amp; strap proportion development</li>
                  <li>&bull; Hide grain, colour &amp; buckle review</li>
                  <li>&bull; Rapid sample iterations with your team</li>
                </ul>
              </div>

              <div className="mt-10 space-y-4 pt-6 border-t border-neutral-300/70">
                <TransitionLink
                  href="/why-choose-us"
                  className="flex items-center justify-between text-xs sm:text-sm font-sans font-medium text-neutral-950 border-b border-neutral-950 pb-2 hover:opacity-70 transition-opacity"
                >
                  <span>Our approach</span>
                  <span>↗</span>
                </TransitionLink>
                <TransitionLink
                  href="/faqs"
                  className="flex items-center justify-between text-xs sm:text-sm font-sans font-medium text-neutral-950 border-b border-neutral-950 pb-2 hover:opacity-70 transition-opacity"
                >
                  <span>Standards &amp; approvals</span>
                  <span>↗</span>
                </TransitionLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          4. QUALITY CHECKPOINTS (Capture10)
         ======================================================== */}
      <section
        className="py-20 sm:py-28 md:py-32 border-t border-neutral-200 bg-white"
        aria-labelledby="quality-checks-title"
      >
        <div className="max-w-[1560px] mx-auto px-6 sm:px-8 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5">
            <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-neutral-400 block mb-3 font-medium">
              QUALITY / THROUGHOUT PRODUCTION
            </span>
            <h2
              id="quality-checks-title"
              className="font-sans font-bold text-3xl sm:text-5xl tracking-[-0.03em] text-neutral-950 leading-[1.04]"
            >
              Checks along the way. <br />
              Care at the finish.
            </h2>
            <p className="mt-4 font-sans text-neutral-600 text-sm sm:text-[15px] leading-relaxed">
              Incoming, in-process, and final inspections enforce your agreed specification. Your buyer-approved pre-production sample serves as the benchmark for bulk.
            </p>

            <div className="mt-10 border-t border-neutral-200 divide-y divide-neutral-200">
              <div className="py-5 flex items-baseline gap-6">
                <span className="font-mono text-xs text-neutral-400 font-medium">01</span>
                <div>
                  <h3 className="font-sans font-bold text-base text-neutral-950">
                    Materials in
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-neutral-600 mt-1">
                    Hide thickness, tensile strength, colour fastness &amp; REACH compliance check before cutting.
                  </p>
                </div>
              </div>

              <div className="py-5 flex items-baseline gap-6">
                <span className="font-mono text-xs text-neutral-400 font-medium">02</span>
                <div>
                  <h3 className="font-sans font-bold text-base text-neutral-950">
                    Work in progress
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-neutral-600 mt-1">
                    Stitch-per-inch consistency, edge paint adhesion, and hardware torque checks on the line.
                  </p>
                </div>
              </div>

              <div className="py-5 flex items-baseline gap-6">
                <span className="font-mono text-xs text-neutral-400 font-medium">03</span>
                <div>
                  <h3 className="font-sans font-bold text-base text-neutral-950">
                    Finished pieces
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-neutral-600 mt-1">
                    100% piece-by-piece sizing, buckle polish, and export carton audit prior to dispatch.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div
              onMouseEnter={() => setCursorVisible(true)}
              onMouseLeave={() => setCursorVisible(false)}
              className="relative aspect-[4/3] rounded-md overflow-hidden bg-neutral-100 shadow-xl cursor-none group"
            >
              <Image
                src={FACILITY_IMAGES.finalQc}
                alt="Final quality inspection table at SS International Kanpur"
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
            <p className="mt-3 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-neutral-500 font-medium">
              FINISHED-PRODUCT INSPECTION / SS INTERNATIONAL KANPUR
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================
          5. ROOM FOR YOUR NEXT COLLECTION + CATEGORY OUTPUT (Capture11 & 12)
         ======================================================== */}
      <section
        className="py-20 sm:py-28 md:py-32 border-t border-neutral-200 bg-[#F8F7F4]"
        aria-labelledby="room-collection-title"
      >
        <div className="max-w-[1560px] mx-auto px-6 sm:px-8 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pb-16 sm:pb-20 border-b border-neutral-200">
            <div className="lg:col-span-6">
              <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-neutral-400 block mb-4 font-medium">
                KANPUR / OUR MANUFACTURING HOME
              </span>
              <h2
                id="room-collection-title"
                className="font-sans font-bold text-4xl sm:text-6xl uppercase tracking-[-0.035em] text-neutral-950 leading-[0.95]"
              >
                ROOM FOR <br />
                YOUR NEXT <br />
                COLLECTION.
              </h2>
              <p className="mt-6 font-sans text-neutral-600 text-sm sm:text-base leading-relaxed max-w-md">
                We confirm monthly production slots around your belt mix, hide specifications, quantities, and target shipment dates.
              </p>
            </div>

            {/* Right Table: Animated Monthly Output by Category */}
            <div ref={outputTableRef} className="lg:col-span-6 lg:pt-4">
              <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-neutral-500 block pb-4 border-b border-neutral-200 font-medium">
                MONTHLY PRODUCTION CAPACITY / BY CATEGORY
              </span>

              <div className="divide-y divide-neutral-200 border-b border-neutral-200">
                <div className="py-5 flex items-center justify-between gap-4">
                  <span className="font-sans font-semibold text-sm sm:text-base text-neutral-950">
                    Leather belts (Formal, Casual &amp; Reversible)
                  </span>
                  <span
                    data-count-target="50000"
                    data-count-suffix=" pieces"
                    className="font-sans text-base sm:text-lg text-neutral-900 tabular-nums font-medium"
                  >
                    0 pieces
                  </span>
                </div>

                <div className="py-5 flex items-center justify-between gap-4">
                  <span className="font-sans font-semibold text-sm sm:text-base text-neutral-950">
                    Hand-stitched Polo &amp; Western belts
                  </span>
                  <span
                    data-count-target="18000"
                    data-count-suffix=" pieces"
                    className="font-sans text-base sm:text-lg text-neutral-900 tabular-nums font-medium"
                  >
                    0 pieces
                  </span>
                </div>

                <div className="py-5 flex items-center justify-between gap-4">
                  <span className="font-sans font-semibold text-sm sm:text-base text-neutral-950">
                    Leather dog collars, leashes &amp; accessories
                  </span>
                  <span
                    data-count-target="15000"
                    data-count-suffix=" pieces"
                    className="font-sans text-base sm:text-lg text-neutral-900 tabular-nums font-medium"
                  >
                    0 pieces
                  </span>
                </div>
              </div>

              <p className="mt-4 font-sans text-xs text-neutral-500 leading-relaxed">
                Category figures reflect dedicated line capacities in Kanpur. Current slot availability is confirmed against each buyer brief.
              </p>
            </div>
          </div>

          {/* 3-Column Overview Strip (Capture12 Bottom) */}
          <div className="pt-14 grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12">
            <div>
              <h3 className="font-sans font-bold text-xl sm:text-2xl text-neutral-950 tracking-tight">
                What we make.
              </h3>
              <p className="mt-3 font-sans text-sm text-neutral-600 leading-relaxed">
                Genuine leather Polo belts, one-side formal profile belts, ladies waist belts, reversible rotating-buckle belts, printed &amp; hand-finished designer belts, western stamped straps, canvas hybrids, and leather pet collars &amp; leashes.
              </p>
            </div>

            <div className="flex flex-col justify-between">
              <div>
                <h3 className="font-sans font-bold text-xl sm:text-2xl text-neutral-950 tracking-tight">
                  Your team in Kanpur.
                </h3>
                <p className="mt-3 font-sans text-sm text-neutral-600 leading-relaxed">
                  Manufacturing and exporting since 2009. Product development, mechanical production engineering, REACH quality control, and export logistics operate under one roof.
                </p>
              </div>
              <div className="mt-6 max-w-xs">
                <TransitionLink
                  href="/why-choose-us"
                  className="flex items-center justify-between text-xs sm:text-sm font-sans font-medium text-neutral-950 border-b border-neutral-950 pb-2 hover:opacity-70 transition-opacity"
                >
                  <span>Why buyers choose us</span>
                  <span>↗</span>
                </TransitionLink>
              </div>
            </div>

            <div className="flex flex-col justify-between">
              <div>
                <h3 className="font-sans font-bold text-xl sm:text-2xl text-neutral-950 tracking-tight">
                  Standards &amp; approvals.
                </h3>
                <p className="mt-3 font-sans text-sm text-neutral-600 leading-relaxed">
                  Materials comply with EU REACH chemical limits and nickel-free hardware norms, backed by batch test reports for buyer vendor assessment.
                </p>
              </div>
              <div className="mt-6 max-w-xs">
                <TransitionLink
                  href="/faqs"
                  className="flex items-center justify-between text-xs sm:text-sm font-sans font-medium text-neutral-950 border-b border-neutral-950 pb-2 hover:opacity-70 transition-opacity"
                >
                  <span>Review compliance FAQs</span>
                  <span>↗</span>
                </TransitionLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          6. WORKING WITH SSI + PRACTICAL DETAILS (Capture13)
         ======================================================== */}
      <section
        className="py-20 sm:py-28 md:py-32 border-t border-neutral-200 bg-white"
        aria-labelledby="practical-details-title"
      >
        <div className="max-w-[1560px] mx-auto px-6 sm:px-8 md:px-12">
          <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-neutral-500 block mb-4 font-medium">
            WORKING WITH SS INTERNATIONAL
          </span>
          <h2
            id="practical-details-title"
            className="font-sans font-bold text-4xl sm:text-6xl uppercase tracking-[-0.035em] text-neutral-950 leading-[0.96] max-w-4xl"
          >
            YOUR NEXT COLLECTION. <br />
            THE PRACTICAL DETAILS.
          </h2>
          <p className="mt-5 font-sans text-neutral-600 text-sm sm:text-base">
            What to share, what to expect, and how we move from your first reference to export dispatch.
          </p>

          {/* 3 Practical Numbers (Start from 0) */}
          <div
            ref={practicalMetricsRef}
            className="mt-14 pt-12 border-t border-neutral-200 grid grid-cols-1 sm:grid-cols-3 gap-10"
          >
            <div>
              <span
                data-count-target="200"
                className="font-sans font-semibold text-5xl sm:text-6xl text-neutral-950 block tracking-tight tabular-nums"
              >
                0
              </span>
              <span className="font-sans text-xs sm:text-sm text-neutral-600 mt-2 block max-w-[220px]">
                Minimum pieces per style / colourway for trial &amp; capsule orders
              </span>
            </div>

            <div>
              <div className="flex items-baseline gap-2">
                <span
                  data-count-target="2"
                  data-count-suffix="–3"
                  className="font-sans font-semibold text-5xl sm:text-6xl text-neutral-950 tracking-tight tabular-nums"
                >
                  0
                </span>
                <span className="font-sans font-semibold text-lg sm:text-xl text-neutral-950">
                  weeks
                </span>
              </div>
              <span className="font-sans text-xs sm:text-sm text-neutral-600 mt-2 block">
                Indicative prototype &amp; sample development
              </span>
            </div>

            <div>
              <div className="flex items-baseline gap-2">
                <span
                  data-count-target="2"
                  data-count-suffix="–4"
                  className="font-sans font-semibold text-5xl sm:text-6xl text-neutral-950 tracking-tight tabular-nums"
                >
                  0
                </span>
                <span className="font-sans font-semibold text-lg sm:text-xl text-neutral-950">
                  weeks
                </span>
              </div>
              <span className="font-sans text-xs sm:text-sm text-neutral-600 mt-2 block">
                Indicative standard bulk export production
              </span>
            </div>
          </div>

          <p className="mt-10 font-sans text-xs text-neutral-500 max-w-2xl leading-relaxed">
            Timing depends on your brief, hardware tooling approvals, leather finish readiness, and line allocation. Exact start dates and FOB/CIF shipping windows are confirmed for each order.
          </p>
        </div>
      </section>

      {/* ========================================================
          7. 01 / YOUR STARTING POINT (Capture14)
         ======================================================== */}
      <section
        className="py-20 sm:py-28 md:py-32 border-t border-neutral-200 bg-[#F8F7F4]"
        aria-labelledby="starting-brief-title"
      >
        <div className="max-w-[1560px] mx-auto px-6 sm:px-8 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-6">
            <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-neutral-500 block mb-4 font-medium">
              01 / YOUR STARTING POINT
            </span>
            <h2
              id="starting-brief-title"
              className="font-sans font-bold text-4xl sm:text-6xl uppercase tracking-[-0.035em] text-neutral-950 leading-[0.95]"
            >
              BRING THE IDEA. <br />
              WE&apos;LL WORK <br />
              THROUGH IT.
            </h2>
          </div>

          <div className="lg:col-span-6">
            <h3 className="font-sans font-bold text-2xl sm:text-3xl text-neutral-950 tracking-tight">
              What to share.
            </h3>

            <ul className="mt-6 border-t border-neutral-200 divide-y divide-neutral-200">
              <li className="py-4 font-sans text-sm text-neutral-800">
                Your brand positioning, target market, and price tier.
              </li>
              <li className="py-4 font-sans text-sm text-neutral-800">
                Your design brief, tech pack, or physical belt reference you are entitled to produce.
              </li>
              <li className="py-4 font-sans text-sm text-neutral-800">
                Strap width (20mm–45mm), leather thickness (3.0mm–4.2mm), and edge finish preferences.
              </li>
              <li className="py-4 font-sans text-sm text-neutral-800">
                Buckle finish, REACH chemical compliance, and packaging requirements.
              </li>
              <li className="py-4 font-sans text-sm text-neutral-800">
                Indicative order quantity by style and colourway, plus target delivery window.
              </li>
            </ul>

            <p className="mt-6 font-sans text-xs sm:text-sm text-neutral-600 leading-relaxed">
              Don&apos;t have every specification finalized yet? Share what is fixed and what you want to develop with our Kanpur studio. Confidential client designs are strictly protected under NDA.
            </p>

            <div className="mt-8 max-w-xs">
              <TransitionLink
                href="/products"
                className="flex items-center justify-between text-xs sm:text-sm font-sans font-medium text-neutral-950 border-b border-neutral-950 pb-2 hover:opacity-70 transition-opacity"
              >
                <span>Browse belt lookbook</span>
                <span>↗</span>
              </TransitionLink>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          8. 02 / DEVELOPMENT TO DELIVERY (Capture15 & 16)
         ======================================================== */}
      <section
        className="py-20 sm:py-28 md:py-32 border-t border-neutral-200 bg-white"
        aria-labelledby="sequence-title"
      >
        <div className="max-w-[1560px] mx-auto px-6 sm:px-8 md:px-12">
          <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-neutral-500 block mb-4 font-medium">
            02 / DEVELOPMENT TO DELIVERY
          </span>
          <h2
            id="sequence-title"
            className="font-sans font-bold text-4xl sm:text-6xl uppercase tracking-[-0.035em] text-neutral-950 leading-[0.96] max-w-4xl"
          >
            A CLEAR SEQUENCE. <br />
            A CONSIDERED COMMITMENT.
          </h2>

          <div className="mt-14 border-t border-neutral-200 divide-y divide-neutral-200">
            {SEQUENCE_STEPS.map((step) => (
              <div
                key={step.num}
                className="py-8 sm:py-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start"
              >
                <div className="lg:col-span-6 flex items-baseline gap-6 sm:gap-10">
                  <span className="font-mono text-xs text-neutral-400 font-medium shrink-0">
                    {step.num}
                  </span>
                  <div>
                    <h3 className="font-sans font-bold text-xl sm:text-2xl text-neutral-950 tracking-tight">
                      {step.title}
                    </h3>
                    <p className="mt-2 font-sans text-xs sm:text-sm text-neutral-600 leading-relaxed max-w-md">
                      {step.body}
                    </p>
                  </div>
                </div>

                <div className="lg:col-span-6 pl-9 sm:pl-14 lg:pl-0">
                  <p className="font-sans font-bold text-sm sm:text-base text-neutral-950">
                    {step.timing}
                  </p>
                  <p className="mt-1.5 font-sans text-xs sm:text-sm text-neutral-500 leading-relaxed max-w-md">
                    {step.note}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          9. 03 / COMMERCIAL FIT + FINAL CTA (Capture17 & 18)
         ======================================================== */}
      <section
        className="py-20 sm:py-28 md:py-32 border-t border-neutral-200 bg-[#F8F7F4]"
        aria-labelledby="commercial-fit-title"
      >
        <div className="max-w-[1560px] mx-auto px-6 sm:px-8 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pb-16 border-b border-neutral-200">
            <div className="lg:col-span-5">
              <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-neutral-500 block mb-4 font-medium">
                03 / COMMERCIAL FIT
              </span>
              <h2
                id="commercial-fit-title"
                className="font-sans font-bold text-4xl sm:text-6xl uppercase tracking-[-0.035em] text-neutral-950 leading-[0.95]"
              >
                CLEAR BEFORE <br />
                WE BEGIN.
              </h2>
            </div>

            <div className="lg:col-span-7 border-t border-neutral-200 divide-y divide-neutral-200">
              {COMMERCIAL_TERMS.map((term) => (
                <div
                  key={term.label}
                  className="py-5 grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-6 items-baseline"
                >
                  <span className="sm:col-span-4 font-sans font-bold text-xs sm:text-sm text-neutral-950">
                    {term.label}
                  </span>
                  <span className="sm:col-span-8 font-sans text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {term.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-6 font-sans text-xs text-neutral-500 leading-relaxed">
            SS International — Established 2009, Kanpur, Uttar Pradesh, India. Indicative commercial terms are confirmed in writing for each project.
          </p>

          {/* Final Next Step CTA (Capture18 Bottom) */}
          <div className="mt-20 sm:mt-24 pt-16 border-t border-neutral-200">
            <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-neutral-500 block mb-4 font-medium">
              THE NEXT STEP
            </span>
            <h2 className="font-sans font-bold text-4xl sm:text-6xl uppercase tracking-[-0.035em] text-neutral-950 leading-[0.95] max-w-3xl">
              LET&apos;S DEVELOP <br />
              SOMETHING NEW.
            </h2>
            <p className="mt-5 font-sans text-neutral-600 text-sm sm:text-base max-w-md">
              Bring your style shortlist, leather specifications, and target quantities into one focused brief.
            </p>

            <div className="mt-8 max-w-xs">
              <TransitionLink
                href="/contact"
                className="flex items-center justify-between text-xs sm:text-sm font-sans font-medium text-neutral-950 border-b border-neutral-950 pb-2.5 hover:opacity-70 transition-opacity"
              >
                <span>Build your development brief</span>
                <span>↗</span>
              </TransitionLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}