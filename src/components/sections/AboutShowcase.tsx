"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TransitionLink } from "@/components/motion/TransitionProvider";

gsap.registerPlugin(ScrollTrigger);

// Placeholder images — replace with actual Kanpur leather craft & leadership portraits anytime
const ABOUT_IMAGES = {
  valuesCraft: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=1400&auto=format&fit=crop",
  leaderFounder: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=900&auto=format&fit=crop",
  leaderManufacturing: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=900&auto=format&fit=crop",
  leaderStrategy: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=900&auto=format&fit=crop",
};

interface LeaderProfile {
  role: string;
  name: string;
  qualification: string;
  bio: string;
  contactLabel: string;
  contactHref: string;
  image: string;
}

const LEADERSHIP_TEAM: LeaderProfile[] = [
  {
    role: "FOUNDER & VISIONARY CHAIRMAN",
    name: "Rashidullah Khan",
    qualification: "Heritage & Strategic Vision",
    bio: "The foundation of SS International. His vision drives traditional leather craftsmanship, ethical business integrity, and global excellence across every international partnership.",
    contactLabel: "Connect with leadership",
    contactHref: "/contact",
    image: ABOUT_IMAGES.leaderFounder,
  },
  {
    role: "DIRECTOR OF MANUFACTURING & LEATHER OPERATIONS",
    name: "Abdullah Khan",
    qualification: "B.Tech in Mechanical Engineering",
    bio: "Leads leather production with engineering precision and operational efficiency—ensuring uniform hide processing, gauge calibration, and REACH-compliant quality from raw material to finished belts.",
    contactLabel: "+91 98391 85596",
    contactHref: "tel:+919839185596",
    image: ABOUT_IMAGES.leaderManufacturing,
  },
  {
    role: "DIRECTOR OF PRODUCT STRATEGY & INTERNATIONAL BUSINESS",
    name: "Maaz Rashid",
    qualification: "MBA in International Business",
    bio: "Drives seasonal product innovation, private-label development, and global expansion—managing international buyer relationships and FOB/CIF export programmes.",
    contactLabel: "+91 80813 24540",
    contactHref: "tel:+918081324540",
    image: ABOUT_IMAGES.leaderStrategy,
  },
];

export default function AboutShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const [cursorVisible, setCursorVisible] = useState(false);

  const metricsRowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-hero-reveal", {
        y: 24,
        opacity: 0,
        duration: 0.85,
        stagger: 0.1,
        ease: "power3.out",
        clearProps: "transform",
      });

      if (metricsRowRef.current) {
        const targets = metricsRowRef.current.querySelectorAll<HTMLElement>("[data-count-target]");
        targets.forEach((el) => {
          const endVal = Number(el.dataset.countTarget || "0");
          const suffix = el.dataset.countSuffix || "";
          const useCommas = el.dataset.countFormat !== "plain";
          const obj = { val: 0 };

          gsap.to(obj, {
            val: endVal,
            duration: 1.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: metricsRowRef.current,
              start: "top 85%",
              once: true,
            },
            onUpdate: () => {
              const rounded = Math.round(obj.val);
              const formatted = useCommas ? rounded.toLocaleString("en-US") : String(rounded);
              el.textContent = `${formatted}${suffix}`;
            },
          });
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
          1. HERO SECTION (Capture01_5 Match)
         ======================================================== */}
      <section
        className="pt-32 sm:pt-40 md:pt-44 pb-20 sm:pb-28 bg-[#F8F7F4]"
        aria-labelledby="about-hero-title"
      >
        <div className="max-w-[1560px] mx-auto px-6 sm:px-8 md:px-12">
          <span className="about-hero-reveal font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-neutral-500 block mb-5 font-medium">
            THE COMPANY / SINCE 2009
          </span>

          <h1
            id="about-hero-title"
            className="about-hero-reveal font-sans font-bold text-4xl sm:text-6xl md:text-7xl lg:text-[6.25rem] xl:text-[6.75rem] uppercase tracking-[-0.04em] text-neutral-950 leading-[0.92] max-w-6xl"
          >
            A RELATIONSHIP <br />
            WORTH BUILDING.
          </h1>

          <p className="about-hero-reveal mt-8 sm:mt-10 font-sans text-neutral-700 text-base sm:text-lg leading-relaxed max-w-xl">
            Get to know the leadership, Kanpur craftsmanship, and enduring values behind SS International.
          </p>
        </div>
      </section>

      {/* ========================================================
          2. OUR STORY & YOUR TEAM IN KANPUR (Capture02_4 & 03)
         ======================================================== */}
      <section
        className="py-20 sm:py-28 md:py-32 border-t border-neutral-200 bg-white"
        aria-labelledby="our-story-title"
      >
        <div className="max-w-[1560px] mx-auto px-6 sm:px-8 md:px-12">
          {/* 2-Column Editorial Split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16 items-start pb-16 sm:pb-20 border-b border-neutral-200">
            {/* Left Column: (01) Our Story */}
            <div className="lg:col-span-5">
              <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-neutral-500 block mb-4 font-medium">
                ( 01 ) OUR STORY / SINCE 2009
              </span>
              <h2
                id="our-story-title"
                className="font-sans font-bold text-3xl sm:text-5xl uppercase tracking-[-0.03em] text-neutral-950 leading-[0.98]"
              >
                A COMPANY BUILT <br />
                ON <br />
                RELATIONSHIPS.
              </h2>

              {/* Timeline Entries */}
              <div className="mt-10 border-t border-neutral-200 divide-y divide-neutral-200">
                <div className="py-6 grid grid-cols-12 gap-4 items-baseline">
                  <span className="col-span-4 font-sans font-bold text-xl sm:text-2xl text-neutral-950">
                    2009
                  </span>
                  <p className="col-span-8 font-sans text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    SS International begins its journey in Kanpur, Uttar Pradesh, with Chairman Rashidullah Khan&apos;s vision for a manufacturer grounded in honest leather craftsmanship, precision, and long-term buyer trust.
                  </p>
                </div>

                <div className="py-6 grid grid-cols-12 gap-4 items-baseline">
                  <span className="col-span-4 font-sans font-bold text-xl sm:text-2xl text-neutral-950">
                    Today
                  </span>
                  <p className="col-span-8 font-sans text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    A trusted bulk leather belt and accessories manufacturing partner to global importers, wholesalers, and fashion labels—uniting in-house leather processing, sampling, and REACH-compliant export production in Kanpur.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Your Team in India */}
            <div className="lg:col-span-7 lg:pl-6">
              <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-neutral-500 block mb-4 font-medium">
                YOUR TEAM IN KANPUR, INDIA
              </span>
              <h3 className="font-sans font-bold text-3xl sm:text-5xl uppercase tracking-[-0.03em] text-neutral-950 leading-[0.98]">
                MANY SKILLED <br />
                HANDS. <br />
                ONE SHARED <br />
                PURPOSE.
              </h3>

              <p className="mt-7 font-sans font-medium text-lg sm:text-xl text-neutral-900 leading-snug max-w-2xl">
                We help global fashion brands and wholesalers bring their collections into the world—bridging traditional Indian leather craft with modern production scale.
              </p>

              <div className="mt-6 space-y-4 font-sans text-sm sm:text-[15px] text-neutral-600 leading-relaxed max-w-2xl">
                <p>
                  Our buyers work directly with our pattern engineers, leather technicians, and export merchandising team. From hand-drawn concepts and custom buckle finishes to REACH-compliant hide selection, we turn your brief into production-ready samples before scaling into bulk.
                </p>
                <p>
                  Hand-stitched Polo belts, structured Formal Profile belts, Reversible styles, Ladies silhouettes, Western stamped straps, and leather pet collars are our everyday craft—shipped on clear FOB and CIF terms worldwide.
                </p>
              </div>

              {/* 2x2 Divided Capability Grid (Capture03 Top Right) */}
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-10 border-t border-neutral-200 max-w-2xl">
                <div className="py-4 border-b border-neutral-200 font-sans text-xs sm:text-sm text-neutral-800 font-medium">
                  Concept &amp; seasonal belt development
                </div>
                <div className="py-4 border-b border-neutral-200 font-sans text-xs sm:text-sm text-neutral-800 font-medium">
                  In-house tanning &amp; REACH hide sourcing
                </div>
                <div className="py-4 border-b border-neutral-200 font-sans text-xs sm:text-sm text-neutral-800 font-medium">
                  Red-seal sampling &amp; bulk manufacturing
                </div>
                <div className="py-4 border-b border-neutral-200 font-sans text-xs sm:text-sm text-neutral-800 font-medium">
                  100% QC &amp; FOB / CIF global export
                </div>
              </div>
            </div>
          </div>

          {/* Get to Know SSI Strip (Capture03 Middle) */}
          <div className="py-10 border-b border-neutral-200 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-3">
              <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-neutral-500 font-semibold">
                GET TO KNOW SSI
              </span>
            </div>

            <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
              <TransitionLink
                href="/manufacturing"
                className="flex items-center justify-between text-xs sm:text-sm font-sans font-medium text-neutral-950 border-b border-neutral-950 pb-2 hover:opacity-70 transition-opacity"
              >
                <span>Explore our Kanpur facility</span>
                <span>↗</span>
              </TransitionLink>

              <TransitionLink
                href="/why-choose-us"
                className="flex items-center justify-between text-xs sm:text-sm font-sans font-medium text-neutral-950 border-b border-neutral-950 pb-2 hover:opacity-70 transition-opacity"
              >
                <span>Follow a brief through production</span>
                <span>↗</span>
              </TransitionLink>

              <TransitionLink
                href="/responsibility"
                className="flex items-center justify-between text-xs sm:text-sm font-sans font-medium text-neutral-950 border-b border-neutral-950 pb-2 hover:opacity-70 transition-opacity"
              >
                <span>See our social &amp; REACH standards</span>
                <span>↗</span>
              </TransitionLink>
            </div>
          </div>

          {/* 4-Column Animated Company Metrics (Capture03 Bottom — Starts at 0) */}
          <div
            ref={metricsRowRef}
            className="pt-14 grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10"
          >
            <div>
              <span
                data-count-target="2009"
                data-count-format="plain"
                className="font-sans font-semibold text-4xl sm:text-5xl md:text-[3.5rem] text-neutral-950 block tracking-tight tabular-nums"
              >
                0
              </span>
              <span className="font-sans text-xs sm:text-sm text-neutral-500 mt-2 block">
                The beginning of the SS International story
              </span>
            </div>

            <div>
              <span
                data-count-target="50000"
                data-count-suffix="+"
                className="font-sans font-semibold text-4xl sm:text-5xl md:text-[3.5rem] text-neutral-950 block tracking-tight tabular-nums"
              >
                0+
              </span>
              <span className="font-sans text-xs sm:text-sm text-neutral-500 mt-2 block">
                Monthly belt manufacturing capacity
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
                Dedicated belt lines &amp; craft cells
              </span>
            </div>

            <div>
              <span
                data-count-target="350"
                data-count-suffix="+"
                className="font-sans font-semibold text-4xl sm:text-5xl md:text-[3.5rem] text-neutral-950 block tracking-tight tabular-nums"
              >
                0+
              </span>
              <span className="font-sans text-xs sm:text-sm text-neutral-500 mt-2 block">
                Skilled leather artisans &amp; staff
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          3. OUR VISION & VALUES (Capture04_4 & 05_3 — Real SSI Pillars)
         ======================================================== */}
      <section
        className="py-20 sm:py-28 md:py-32 border-t border-neutral-200 bg-[#F8F7F4]"
        aria-labelledby="vision-values-title"
      >
        <div className="max-w-[1560px] mx-auto px-6 sm:px-8 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center pb-16 sm:pb-20">
            {/* Left Column: Real ssileather.com Core Values */}
            <div className="lg:col-span-6">
              <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-neutral-500 block mb-4 font-medium">
                OUR VISION &amp; CORE VALUES
              </span>
              <h2
                id="vision-values-title"
                className="font-sans font-bold text-4xl sm:text-6xl uppercase tracking-[-0.035em] text-neutral-950 leading-[0.95]"
              >
                INTEGRITY. <br />
                EXCELLENCE. <br />
                HERITAGE.
              </h2>

              <blockquote className="mt-7 font-sans font-medium text-lg sm:text-xl text-neutral-900 leading-snug max-w-md">
                &ldquo;Honest quality in every belt, precision in every detail, and craftsmanship built with experience.&rdquo;
              </blockquote>

              <p className="mt-5 font-sans text-sm sm:text-[15px] text-neutral-600 leading-relaxed max-w-md">
                Our ambition is to build on Kanpur&apos;s storied leather legacy and remain a trusted global manufacturer of export-ready belts and accessories—growing with care for our buyers, artisans, and community.
              </p>
            </div>

            {/* Right Column: Editorial Leather Craft Image */}
            <div className="lg:col-span-6">
              <div
                onMouseEnter={() => setCursorVisible(true)}
                onMouseLeave={() => setCursorVisible(false)}
                className="relative aspect-[4/3.6] rounded-md overflow-hidden bg-neutral-200 shadow-lg cursor-none group"
              >
                <Image
                  src={ABOUT_IMAGES.valuesCraft}
                  alt="Handcrafted leather belt detailing at SS International Kanpur"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <p className="mt-3 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-neutral-500 font-medium">
                THE DETAIL MATTERS / HANDCRAFTED IN KANPUR, INDIA
              </p>
            </div>
          </div>

          {/* 3-Column Values Breakdown (Capture05_3 Bottom) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12">
            <div className="border-t border-neutral-300 pt-6">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-400 block font-medium">
                01 / INTEGRITY
              </span>
              <h3 className="mt-3 font-sans font-bold text-xl sm:text-2xl text-neutral-950 tracking-tight">
                Honest quality in every belt.
              </h3>
              <p className="mt-2.5 font-sans text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Transparent hide grading, verified REACH chemical compliance, and clear FOB/CIF pricing with zero hidden compromises.
              </p>
            </div>

            <div className="border-t border-neutral-300 pt-6">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-400 block font-medium">
                02 / EXCELLENCE
              </span>
              <h3 className="mt-3 font-sans font-bold text-xl sm:text-2xl text-neutral-950 tracking-tight">
                Precision in every detail.
              </h3>
              <p className="mt-2.5 font-sans text-xs sm:text-sm text-neutral-600 leading-relaxed">
                From calibrated leather thickness and neat edge burnishing to secure hardware fitting, every piece meets agreed export benchmarks.
              </p>
            </div>

            <div className="border-t border-neutral-300 pt-6">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-400 block font-medium">
                03 / HERITAGE
              </span>
              <h3 className="mt-3 font-sans font-bold text-xl sm:text-2xl text-neutral-950 tracking-tight">
                Craftsmanship built with experience.
              </h3>
              <p className="mt-2.5 font-sans text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Combining time-tested Kanpur leather-working traditions with modern production discipline to deliver enduring style that ages gracefully.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          4. (03) THE PEOPLE — LEADERSHIP TEAM (Capture06_2 & 07_2)
         ======================================================== */}
      <section
        className="py-20 sm:py-28 md:py-32 border-t border-neutral-200 bg-white"
        aria-labelledby="leadership-title"
      >
        <div className="max-w-[1560px] mx-auto px-6 sm:px-8 md:px-12">
          {/* Header Row */}
          <div className="pb-14 sm:pb-16 border-b border-neutral-200 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-7">
              <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-neutral-400 block mb-3 font-medium">
                ( 03 ) LEADERSHIP
              </span>
              <h2
                id="leadership-title"
                className="font-sans font-bold text-3xl sm:text-5xl md:text-[3.5rem] uppercase tracking-[-0.03em] text-neutral-950 leading-[0.96]"
              >
                KNOW THE FACES. <br />
                BUILD THE <br />
                RELATIONSHIP.
              </h2>
            </div>

            <div className="lg:col-span-5 font-sans text-neutral-600 text-sm sm:text-[15px] leading-relaxed max-w-md lg:pb-1">
              <p>
                Manufacturing is a direct partnership. Meet the leadership team guiding vision, leather engineering, and international client strategy at SS International.
              </p>
            </div>
          </div>

          {/* 3-Column Leadership Cards (Real ssileather.com Leadership Data) */}
          <div className="pt-14 grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
            {LEADERSHIP_TEAM.map((person) => (
              <article
                key={person.name}
                className="flex flex-col justify-between"
                itemScope
                itemType="https://schema.org/Person"
              >
                <div>
                  <div
                    onMouseEnter={() => setCursorVisible(true)}
                    onMouseLeave={() => setCursorVisible(false)}
                    className="relative aspect-[4/4.4] rounded-md overflow-hidden bg-neutral-200 shadow-sm cursor-none group"
                  >
                    <Image
                      src={person.image}
                      alt={`${person.name} — ${person.role} at SS International`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>

                  <span
                    itemProp="jobTitle"
                    className="mt-6 font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-500 block font-semibold"
                  >
                    {person.role}
                  </span>

                  <h3
                    itemProp="name"
                    className="mt-2 font-sans font-bold text-2xl sm:text-[1.75rem] text-neutral-950 tracking-tight"
                  >
                    {person.name}
                  </h3>

                  <p className="mt-1 font-sans font-semibold text-xs text-neutral-800">
                    {person.qualification}
                  </p>

                  <p className="mt-3.5 font-sans text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {person.bio}
                  </p>
                </div>

                <div className="mt-8 pt-4">
                  {person.contactHref.startsWith("tel:") ? (
                    <a
                      href={person.contactHref}
                      className="flex items-center justify-between text-xs sm:text-sm font-sans font-medium text-neutral-950 border-b border-neutral-950 pb-2 hover:opacity-70 transition-opacity"
                    >
                      <span>{person.contactLabel}</span>
                      <span>↗</span>
                    </a>
                  ) : (
                    <TransitionLink
                      href={person.contactHref}
                      className="flex items-center justify-between text-xs sm:text-sm font-sans font-medium text-neutral-950 border-b border-neutral-950 pb-2 hover:opacity-70 transition-opacity"
                    >
                      <span>{person.contactLabel}</span>
                      <span>↗</span>
                    </TransitionLink>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}