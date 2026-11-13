"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TransitionLink } from "@/components/motion/TransitionProvider";

gsap.registerPlugin(ScrollTrigger);

const EDITORIAL_IMAGES = {
  // Section 02 Images
  craft: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=1200&auto=format&fit=crop",
  model: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1400&auto=format&fit=crop",

  // Section 03 Images (3-Image Factory Layout)
  factoryFloor: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1600&auto=format&fit=crop",
  stitching: "https://images.unsplash.com/photo-1590736969955-71cc94801759?q=80&w=1000&auto=format&fit=crop",
  facade: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",

  // Section 04 Images (Solar Roof + Leather Hide Storage)
  solarRoof: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1600&auto=format&fit=crop",
  materials: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1200&auto=format&fit=crop",
};

export default function FeatureStack() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const [cursorVisible, setCursorVisible] = useState(false);

  // Section 02 Refs
  const stage02Ref = useRef<HTMLDivElement>(null);
  const s2LeftImgRef = useRef<HTMLDivElement>(null);
  const s2RightImgRef = useRef<HTMLDivElement>(null);
  const s2WhiteTextRef = useRef<HTMLDivElement>(null);

  // Section 03 Refs & Counters
  const stage03Ref = useRef<HTMLDivElement>(null);
  const s3TopRightImgRef = useRef<HTMLDivElement>(null);
  const s3BottomLeftImgRef = useRef<HTMLDivElement>(null);
  const s3BottomMidImgRef = useRef<HTMLDivElement>(null);
  const s3WhiteTextRef = useRef<HTMLDivElement>(null);
  const metricsRowRef = useRef<HTMLDivElement>(null);
  const capacityCountRef = useRef<HTMLSpanElement>(null);
  const qcCountRef = useRef<HTMLSpanElement>(null);

  // Section 04 Refs
  const stage04Ref = useRef<HTMLDivElement>(null);
  const s4LeftImgRef = useRef<HTMLDivElement>(null);
  const s4RightImgRef = useRef<HTMLDivElement>(null);
  const s4WhiteTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // SECTION 02 Clip Updater
    const s2Stage = stage02Ref.current;
    const s2Left = s2LeftImgRef.current;
    const s2Right = s2RightImgRef.current;
    const s2White = s2WhiteTextRef.current;

    function updateS2ClipMask() {
      if (!s2Right || !s2Stage || !s2White) return;
      const stageRect = s2Stage.getBoundingClientRect();
      const imgRect = s2Right.getBoundingClientRect();

      const top = Math.max(0, imgRect.top - stageRect.top);
      const right = Math.min(stageRect.width, imgRect.right - stageRect.left);
      const bottom = Math.min(stageRect.height, imgRect.bottom - stageRect.top);
      const left = Math.max(0, imgRect.left - stageRect.left);

      s2White.style.clipPath = `polygon(${left}px ${top}px, ${right}px ${top}px, ${right}px ${bottom}px, ${left}px ${bottom}px)`;
    }

    // SECTION 03 Clip Updater
    const s3Stage = stage03Ref.current;
    const s3TopRight = s3TopRightImgRef.current;
    const s3BottomLeft = s3BottomLeftImgRef.current;
    const s3BottomMid = s3BottomMidImgRef.current;
    const s3White = s3WhiteTextRef.current;

    function updateS3ClipMask() {
      if (!s3TopRight || !s3Stage || !s3White) return;
      const stageRect = s3Stage.getBoundingClientRect();
      const imgRect = s3TopRight.getBoundingClientRect();

      const top = Math.max(0, imgRect.top - stageRect.top);
      const right = Math.min(stageRect.width, imgRect.right - stageRect.left);
      const bottom = Math.min(stageRect.height, imgRect.bottom - stageRect.top);
      const left = Math.max(0, imgRect.left - stageRect.left);

      s3White.style.clipPath = `polygon(${left}px ${top}px, ${right}px ${top}px, ${right}px ${bottom}px, ${left}px ${bottom}px)`;
    }

    // SECTION 04 Clip Updater
    const s4Stage = stage04Ref.current;
    const s4Left = s4LeftImgRef.current;
    const s4Right = s4RightImgRef.current;
    const s4White = s4WhiteTextRef.current;

    function updateS4ClipMask() {
      if (!s4Right || !s4Stage || !s4White) return;
      const stageRect = s4Stage.getBoundingClientRect();
      const imgRect = s4Right.getBoundingClientRect();

      const top = Math.max(0, imgRect.top - stageRect.top);
      const right = Math.min(stageRect.width, imgRect.right - stageRect.left);
      const bottom = Math.min(stageRect.height, imgRect.bottom - stageRect.top);
      const left = Math.max(0, imgRect.left - stageRect.left);

      s4White.style.clipPath = `polygon(${left}px ${top}px, ${right}px ${top}px, ${right}px ${bottom}px, ${left}px ${bottom}px)`;
    }

    // Parallax & Count-Up ScrollTrigger Context
    const ctx = gsap.context(() => {
      if (s2Left && s2Right && s2Stage) {
        gsap.to(s2Left, {
          y: -28,
          ease: "none",
          scrollTrigger: { trigger: s2Stage, start: "top bottom", end: "bottom top", scrub: 1.2 },
        });
        gsap.to(s2Right, {
          y: -55,
          ease: "none",
          scrollTrigger: {
            trigger: s2Stage,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.6,
            onUpdate: updateS2ClipMask,
          },
        });
      }

      if (s3Stage && s3TopRight && s3BottomLeft && s3BottomMid) {
        gsap.to(s3TopRight, {
          y: -45,
          ease: "none",
          scrollTrigger: {
            trigger: s3Stage,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
            onUpdate: updateS3ClipMask,
          },
        });
        gsap.to(s3BottomLeft, {
          y: -28,
          ease: "none",
          scrollTrigger: { trigger: s3Stage, start: "top bottom", end: "bottom top", scrub: 1.2 },
        });
        gsap.to(s3BottomMid, {
          y: -18,
          ease: "none",
          scrollTrigger: { trigger: s3Stage, start: "top bottom", end: "bottom top", scrub: 1.4 },
        });
      }

      if (s4Left && s4Right && s4Stage) {
        gsap.to(s4Left, {
          y: -28,
          ease: "none",
          scrollTrigger: { trigger: s4Stage, start: "top bottom", end: "bottom top", scrub: 1.2 },
        });
        gsap.to(s4Right, {
          y: -55,
          ease: "none",
          scrollTrigger: {
            trigger: s4Stage,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.6,
            onUpdate: updateS4ClipMask,
          },
        });
      }

      // Metrics Count-Up from 0 on scroll into view
      if (metricsRowRef.current) {
        const capObj = { val: 0 };
        const qcObj = { val: 0 };

        gsap.to(capObj, {
          val: 50000,
          duration: 1.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: metricsRowRef.current,
            start: "top 85%",
            once: true,
          },
          onUpdate: () => {
            if (capacityCountRef.current) {
              capacityCountRef.current.textContent = `${Math.round(capObj.val).toLocaleString("en-US")}+`;
            }
          },
        });

        gsap.to(qcObj, {
          val: 100,
          duration: 1.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: metricsRowRef.current,
            start: "top 85%",
            once: true,
          },
          onUpdate: () => {
            if (qcCountRef.current) {
              qcCountRef.current.textContent = `${Math.round(qcObj.val)}%`;
            }
          },
        });
      }
    });

    // Cursor Float Tweens for S2
    const xQuickS2Left = s2Left ? gsap.quickTo(s2Left, "x", { duration: 0.8, ease: "power2.out" }) : null;
    const yQuickS2Left = s2Left ? gsap.quickTo(s2Left, "y", { duration: 0.8, ease: "power2.out" }) : null;
    const xQuickS2Right = s2Right ? gsap.quickTo(s2Right, "x", { duration: 0.8, ease: "power2.out", onUpdate: updateS2ClipMask }) : null;
    const yQuickS2Right = s2Right ? gsap.quickTo(s2Right, "y", { duration: 0.8, ease: "power2.out", onUpdate: updateS2ClipMask }) : null;

    // Cursor Float Tweens for S3
    const xQuickS3TopRight = s3TopRight ? gsap.quickTo(s3TopRight, "x", { duration: 0.8, ease: "power2.out", onUpdate: updateS3ClipMask }) : null;
    const yQuickS3TopRight = s3TopRight ? gsap.quickTo(s3TopRight, "y", { duration: 0.8, ease: "power2.out", onUpdate: updateS3ClipMask }) : null;
    const xQuickS3BottomLeft = s3BottomLeft ? gsap.quickTo(s3BottomLeft, "x", { duration: 0.8, ease: "power2.out" }) : null;
    const yQuickS3BottomLeft = s3BottomLeft ? gsap.quickTo(s3BottomLeft, "y", { duration: 0.8, ease: "power2.out" }) : null;
    const xQuickS3BottomMid = s3BottomMid ? gsap.quickTo(s3BottomMid, "x", { duration: 0.8, ease: "power2.out" }) : null;
    const yQuickS3BottomMid = s3BottomMid ? gsap.quickTo(s3BottomMid, "y", { duration: 0.8, ease: "power2.out" }) : null;

    // Cursor Float Tweens for S4
    const xQuickS4Left = s4Left ? gsap.quickTo(s4Left, "x", { duration: 0.8, ease: "power2.out" }) : null;
    const yQuickS4Left = s4Left ? gsap.quickTo(s4Left, "y", { duration: 0.8, ease: "power2.out" }) : null;
    const xQuickS4Right = s4Right ? gsap.quickTo(s4Right, "x", { duration: 0.8, ease: "power2.out", onUpdate: updateS4ClipMask }) : null;
    const yQuickS4Right = s4Right ? gsap.quickTo(s4Right, "y", { duration: 0.8, ease: "power2.out", onUpdate: updateS4ClipMask }) : null;

    const onS2MouseMove = (e: MouseEvent) => {
      if (!s2Stage) return;
      const rect = s2Stage.getBoundingClientRect();
      const normX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const normY = ((e.clientY - rect.top) / rect.height) * 2 - 1;

      xQuickS2Left?.(normX * 45);
      yQuickS2Left?.(normY * 20);
      xQuickS2Right?.(-normX * 55);
      yQuickS2Right?.(-normY * 25);
    };

    const onS2MouseLeave = () => {
      xQuickS2Left?.(0);
      yQuickS2Left?.(0);
      xQuickS2Right?.(0);
      yQuickS2Right?.(0);
      setTimeout(updateS2ClipMask, 800);
    };

    const onS3MouseMove = (e: MouseEvent) => {
      if (!s3Stage) return;
      const rect = s3Stage.getBoundingClientRect();
      const normX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const normY = ((e.clientY - rect.top) / rect.height) * 2 - 1;

      xQuickS3TopRight?.(-normX * 45);
      yQuickS3TopRight?.(-normY * 18);
      xQuickS3BottomLeft?.(normX * 32);
      yQuickS3BottomLeft?.(normY * 16);
      xQuickS3BottomMid?.(normX * 22);
      yQuickS3BottomMid?.(normY * 12);
    };

    const onS3MouseLeave = () => {
      xQuickS3TopRight?.(0);
      yQuickS3TopRight?.(0);
      xQuickS3BottomLeft?.(0);
      yQuickS3BottomLeft?.(0);
      xQuickS3BottomMid?.(0);
      yQuickS3BottomMid?.(0);
      setTimeout(updateS3ClipMask, 800);
    };

    const onS4MouseMove = (e: MouseEvent) => {
      if (!s4Stage) return;
      const rect = s4Stage.getBoundingClientRect();
      const normX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const normY = ((e.clientY - rect.top) / rect.height) * 2 - 1;

      xQuickS4Left?.(normX * 45);
      yQuickS4Left?.(normY * 20);
      xQuickS4Right?.(-normX * 55);
      yQuickS4Right?.(-normY * 25);
    };

    const onS4MouseLeave = () => {
      xQuickS4Left?.(0);
      yQuickS4Left?.(0);
      xQuickS4Right?.(0);
      yQuickS4Right?.(0);
      setTimeout(updateS4ClipMask, 800);
    };

    s2Stage?.addEventListener("mousemove", onS2MouseMove);
    s2Stage?.addEventListener("mouseleave", onS2MouseLeave);
    s3Stage?.addEventListener("mousemove", onS3MouseMove);
    s3Stage?.addEventListener("mouseleave", onS3MouseLeave);
    s4Stage?.addEventListener("mousemove", onS4MouseMove);
    s4Stage?.addEventListener("mouseleave", onS4MouseLeave);

    const onResize = () => {
      updateS2ClipMask();
      updateS3ClipMask();
      updateS4ClipMask();
    };
    window.addEventListener("resize", onResize);

    const rafId = requestAnimationFrame(() => {
      updateS2ClipMask();
      updateS3ClipMask();
      updateS4ClipMask();
    });

    return () => {
      cancelAnimationFrame(rafId);
      ctx.revert();
      window.removeEventListener("resize", onResize);
      s2Stage?.removeEventListener("mousemove", onS2MouseMove);
      s2Stage?.removeEventListener("mouseleave", onS2MouseLeave);
      s3Stage?.removeEventListener("mousemove", onS3MouseMove);
      s3Stage?.removeEventListener("mouseleave", onS3MouseLeave);
      s4Stage?.removeEventListener("mousemove", onS4MouseMove);
      s4Stage?.removeEventListener("mouseleave", onS4MouseLeave);
    };
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

  // Balanced editorial weight + exact width to intersect right images cleanly
  const editorialHeadingClass =
    "font-sans font-bold text-4xl sm:text-6xl md:text-[6rem] lg:text-[7.75rem] xl:text-[8.25rem] tracking-[-0.04em] uppercase leading-[0.9]";

  // Side-aligned section index badge matching Banox editorial layout
  const indexBadgeClass =
    "font-mono text-xs sm:text-sm tracking-widest font-medium pt-1.5 sm:pt-2.5 md:pt-3.5 shrink-0 select-none";

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMoveCursor}
      className={`bg-[#F8F7F4] text-neutral-900 overflow-hidden relative select-none ${
        cursorVisible ? "cursor-none" : ""
      }`}
    >
      {/* Enlarged Custom Magnetic "View ↗" Circle Badge */}
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
          { 02 } SKETCH TO STATEMENT (Greyish Off-White: bg-[#F8F7F4])
         ======================================================== */}
      <section
        className="py-16 sm:py-24 md:py-28 border-t border-neutral-200 bg-[#F8F7F4]"
        aria-labelledby="sketch-statement-title"
      >
        <div className="max-w-[1560px] mx-auto px-6 sm:px-8 md:px-12 relative">
          <div
            ref={stage02Ref}
            className="relative min-h-[460px] sm:min-h-[600px] lg:min-h-[690px] mb-10 sm:mb-14"
          >
            {/* Base Static Black Headline with Side Number (02) */}
            <div className="absolute inset-x-0 top-0 z-10 pointer-events-none select-none flex items-start gap-3 sm:gap-5 md:gap-7">
              <span className={`${indexBadgeClass} text-neutral-400`}>(02)</span>
              <h2 id="sketch-statement-title" className={`${editorialHeadingClass} text-neutral-950`}>
                SKETCH TO <br />
                STATEMENT.
              </h2>
            </div>

            {/* Left Lower Image */}
            <div
              ref={s2LeftImgRef}
              onMouseEnter={() => setCursorVisible(true)}
              onMouseLeave={() => setCursorVisible(false)}
              className="absolute left-0 top-[42%] sm:top-[40%] w-[64%] sm:w-[44%] md:w-[37%] z-20 cursor-none group transition-transform will-change-transform"
            >
              <div className="relative aspect-[4/3] rounded-md overflow-hidden bg-neutral-200 shadow-xl">
                <Image
                  src={EDITORIAL_IMAGES.craft}
                  alt="In-house belt pattern development at SS International Kanpur"
                  fill
                  sizes="(max-width: 768px) 65vw, 38vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <p className="mt-2.5 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-neutral-500 font-medium">
                IN-HOUSE DEVELOPMENT &bull; KANPUR, INDIA
              </p>
            </div>

            {/* Right Tall Image (Overlaps & Inverts Headline) */}
            <div
              ref={s2RightImgRef}
              onMouseEnter={() => setCursorVisible(true)}
              onMouseLeave={() => setCursorVisible(false)}
              className="absolute right-0 top-0 w-[56%] sm:w-[50%] md:w-[45%] lg:w-[44%] z-20 cursor-none group transition-transform will-change-transform"
            >
              <div className="relative aspect-[4/4.3] rounded-md overflow-hidden bg-neutral-900 shadow-2xl">
                <Image
                  src={EDITORIAL_IMAGES.model}
                  alt="Export-grade leather belts and accessories by SS International"
                  fill
                  priority
                  sizes="(max-width: 768px) 60vw, 45vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <p className="mt-2.5 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-neutral-400 text-right">
                Production-Ready Sampling // Global Export
              </p>
            </div>

            {/* Dynamic Inverted White Text Layer (Identical Side-Number Flex Alignment) */}
            <div
              ref={s2WhiteTextRef}
              className="absolute inset-x-0 top-0 z-30 pointer-events-none select-none transition-[clip-path] duration-75 ease-out flex items-start gap-3 sm:gap-5 md:gap-7"
              style={{ clipPath: "polygon(0 0, 0 0, 0 0, 0 0)" }}
              aria-hidden="true"
            >
              <span className={`${indexBadgeClass} text-white/70`}>(02)</span>
              <h2 className={`${editorialHeadingClass} text-white`}>
                SKETCH TO <br />
                STATEMENT.
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 border-t border-neutral-200 pt-10">
            <div className="space-y-2.5">
              <span className="font-mono text-xs text-neutral-400 block font-semibold">01</span>
              <h4 className="font-bold uppercase text-base sm:text-lg text-neutral-900 tracking-tight">
                Brief &amp; seasonal development.
              </h4>
              <p className="text-neutral-600 text-sm sm:text-[15px] leading-relaxed">
                Share your hand-drawn concepts, target price points, strap widths, and hardware specifications for private-label or wholesale runs.
              </p>
            </div>

            <div className="space-y-2.5">
              <span className="font-mono text-xs text-neutral-400 block font-semibold">02</span>
              <h4 className="font-bold uppercase text-base sm:text-lg text-neutral-900 tracking-tight">
                Bespoke silhouettes &amp; craft.
              </h4>
              <p className="text-neutral-600 text-sm sm:text-[15px] leading-relaxed">
                Hand-stitched Polo belts with vibrant threads, clean formal Profile belts, Reversible styles, Western stamped straps, and durable pet collars.
              </p>
            </div>

            <div className="space-y-2.5">
              <span className="font-mono text-xs text-neutral-400 block font-semibold">03</span>
              <h4 className="font-bold uppercase text-base sm:text-lg text-neutral-900 tracking-tight">
                Production-ready samples.
              </h4>
              <p className="text-neutral-600 text-sm sm:text-[15px] leading-relaxed">
                Our Kanpur team converts concepts into sample belts using hides from our own facilities, moving smoothly into bulk with clear FOB/CIF terms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          { 03 } CRAFTED WITH CARE (Pure White Background: bg-white)
         ======================================================== */}
      <section
        className="py-16 sm:py-24 md:py-28 border-t border-neutral-200 bg-white"
        aria-labelledby="crafted-precision-title"
      >
        <div className="max-w-[1560px] mx-auto px-6 sm:px-8 md:px-12 relative">
          {/* Spacious 3-Image Stage so Top-Right & Bottom-Mid images have clean separation */}
          <div
            ref={stage03Ref}
            className="relative min-h-[580px] sm:min-h-[720px] lg:min-h-[820px] mb-10 sm:mb-14"
          >
            {/* Base Static Black Headline with Side Number (03) */}
            <div className="absolute inset-x-0 top-0 z-10 pointer-events-none select-none flex items-start gap-3 sm:gap-5 md:gap-7">
              <span className={`${indexBadgeClass} text-neutral-400`}>(03)</span>
              <h2 id="crafted-precision-title" className={`${editorialHeadingClass} text-neutral-950`}>
                CRAFTED <br />
                WITH CARE.
              </h2>
            </div>

            {/* IMAGE 1: Top-Right Large Factory Floor */}
            <div
              ref={s3TopRightImgRef}
              onMouseEnter={() => setCursorVisible(true)}
              onMouseLeave={() => setCursorVisible(false)}
              className="absolute right-0 top-0 w-[60%] sm:w-[54%] md:w-[50%] lg:w-[48%] z-20 cursor-none group transition-transform will-change-transform"
            >
              <div className="relative aspect-[16/10] rounded-md overflow-hidden bg-neutral-900 shadow-2xl">
                <Image
                  src={EDITORIAL_IMAGES.factoryFloor}
                  alt="SS International leather belt production floor in Kanpur"
                  fill
                  priority
                  sizes="(max-width: 768px) 65vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <p className="mt-2.5 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-neutral-400 text-right">
                KANPUR, INDIA &bull; Our People. Our Process. Our Pride.
              </p>
            </div>

            {/* IMAGE 2: Bottom-Left Artisan Stitching */}
            <div
              ref={s3BottomLeftImgRef}
              onMouseEnter={() => setCursorVisible(true)}
              onMouseLeave={() => setCursorVisible(false)}
              className="absolute left-0 top-[44%] sm:top-[42%] w-[56%] sm:w-[43%] md:w-[37%] z-20 cursor-none group transition-transform will-change-transform"
            >
              <div className="relative aspect-[4/3] rounded-md overflow-hidden bg-neutral-200 shadow-xl">
                <Image
                  src={EDITORIAL_IMAGES.stitching}
                  alt="Precision belt cutting, stitching, finishing and polishing"
                  fill
                  sizes="(max-width: 768px) 60vw, 38vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <p className="mt-2.5 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-neutral-500 font-medium">
                CUTTING TO POLISHING &bull; Attention to every detail
              </p>
            </div>

            {/* IMAGE 3: Bottom-Center/Right Facility Facade (Clean gap below Top-Right image) */}
            <div
              ref={s3BottomMidImgRef}
              onMouseEnter={() => setCursorVisible(true)}
              onMouseLeave={() => setCursorVisible(false)}
              className="absolute left-[45%] sm:left-[47%] md:left-[50%] bottom-0 w-[52%] sm:w-[43%] md:w-[38%] z-20 cursor-none group transition-transform will-change-transform"
            >
              <div className="relative aspect-[16/10] rounded-md overflow-hidden bg-neutral-200 shadow-xl">
                <Image
                  src={EDITORIAL_IMAGES.facade}
                  alt="SS International manufacturing facility in Kanpur"
                  fill
                  sizes="(max-width: 768px) 55vw, 40vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <p className="mt-2.5 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-neutral-500 font-medium">
                HERITAGE MEETS SCALE &bull; Own raw processing &amp; assembly
              </p>
            </div>

            {/* Dynamic Inverted White Text Layer (Identical Side-Number Flex Alignment) */}
            <div
              ref={s3WhiteTextRef}
              className="absolute inset-x-0 top-0 z-30 pointer-events-none select-none transition-[clip-path] duration-75 ease-out flex items-start gap-3 sm:gap-5 md:gap-7"
              style={{ clipPath: "polygon(0 0, 0 0, 0 0, 0 0)" }}
              aria-hidden="true"
            >
              <span className={`${indexBadgeClass} text-white/70`}>(03)</span>
              <h2 className={`${editorialHeadingClass} text-white`}>
                CRAFTED <br />
                WITH CARE.
              </h2>
            </div>
          </div>

          {/* Count-Up Metrics Grid (Starts from 0 on scroll) */}
          <div
            ref={metricsRowRef}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 border-t border-neutral-200 pt-10 items-baseline"
          >
            <div>
              <span
                ref={capacityCountRef}
                className="font-sans font-bold text-4xl sm:text-5xl md:text-6xl text-neutral-950 block tracking-tight tabular-nums"
              >
                0+
              </span>
              <span className="font-mono text-[11px] uppercase tracking-wider text-neutral-500 mt-2 block font-medium">
                MONTHLY EXPORT-READY BELT CAPACITY
              </span>
            </div>

            <div>
              <span
                ref={qcCountRef}
                className="font-sans font-bold text-4xl sm:text-5xl md:text-6xl text-neutral-950 block tracking-tight tabular-nums"
              >
                0%
              </span>
              <span className="font-mono text-[11px] uppercase tracking-wider text-neutral-500 mt-2 block font-medium">
                IN-HOUSE LEATHER PROCESSING &amp; QC
              </span>
            </div>

            <div>
              <span className="font-sans font-bold text-4xl sm:text-5xl md:text-6xl text-neutral-950 block tracking-tight">
                FOB / CIF
              </span>
              <span className="font-mono text-[11px] uppercase tracking-wider text-neutral-500 mt-2 block font-medium">
                STABLE PRICING &amp; TIMELY GLOBAL DISPATCH
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          { 04 } BUILT ON INTEGRITY (Greyish Off-White: bg-[#F8F7F4])
         ======================================================== */}
      <section
        id="compliance"
        className="py-16 sm:py-24 md:py-28 border-t border-neutral-200 bg-[#F8F7F4]"
        aria-labelledby="built-integrity-title"
        itemScope
        itemType="https://schema.org/Organization"
      >
        <meta itemProp="name" content="SS International" />
        <meta itemProp="url" content="https://www.ssileather.com" />
        <div
          itemProp="address"
          itemScope
          itemType="https://schema.org/PostalAddress"
          className="hidden"
        >
          <meta itemProp="addressLocality" content="Kanpur" />
          <meta itemProp="addressRegion" content="Uttar Pradesh" />
          <meta itemProp="addressCountry" content="IN" />
        </div>

        <div className="max-w-[1560px] mx-auto px-6 sm:px-8 md:px-12 relative">
          <div
            ref={stage04Ref}
            className="relative min-h-[460px] sm:min-h-[600px] lg:min-h-[690px] mb-10 sm:mb-14"
          >
            {/* 1. Base Static Black Headline with Side Number (04) */}
            <div className="absolute inset-x-0 top-0 z-10 pointer-events-none select-none flex items-start gap-3 sm:gap-5 md:gap-7">
              <span className={`${indexBadgeClass} text-neutral-400`}>(04)</span>
              <h2 id="built-integrity-title" className={`${editorialHeadingClass} text-neutral-950`}>
                BUILT ON <br />
                INTEGRITY.
              </h2>
            </div>

            {/* 2. Left Lower Image */}
            <div
              ref={s4LeftImgRef}
              onMouseEnter={() => setCursorVisible(true)}
              onMouseLeave={() => setCursorVisible(false)}
              className="absolute left-0 top-[42%] sm:top-[40%] w-[64%] sm:w-[44%] md:w-[37%] z-20 cursor-none group transition-transform will-change-transform"
            >
              <div className="relative aspect-[4/3] rounded-md overflow-hidden bg-neutral-200 shadow-xl">
                <Image
                  src={EDITORIAL_IMAGES.materials}
                  alt="REACH-compliant genuine leather hides sorted at SS International"
                  fill
                  sizes="(max-width: 768px) 65vw, 38vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <p className="mt-2.5 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-neutral-500 font-medium">
                CONSISTENT LEATHER QUALITY &bull; REACH-compliant hides
              </p>
            </div>

            {/* 3. Right Image (Overlaps "INTEGRITY." & Inverts Overlapping Letters to White) */}
            <div
              ref={s4RightImgRef}
              onMouseEnter={() => setCursorVisible(true)}
              onMouseLeave={() => setCursorVisible(false)}
              className="absolute right-0 top-0 w-[56%] sm:w-[50%] md:w-[46%] lg:w-[45%] z-20 cursor-none group transition-transform will-change-transform"
            >
              <div className="relative aspect-[4/4.3] rounded-md overflow-hidden bg-neutral-900 shadow-2xl">
                <Image
                  src={EDITORIAL_IMAGES.solarRoof}
                  alt="Responsible manufacturing infrastructure at SS International Kanpur"
                  fill
                  sizes="(max-width: 768px) 60vw, 46vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <p className="mt-2.5 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-neutral-500 text-right font-medium">
                RESPONSIBLE PRODUCTION &bull; Global compliance standards
              </p>
            </div>

            {/* 4. Dynamic Inverted White Text Layer (Identical Side-Number Flex Alignment) */}
            <div
              ref={s4WhiteTextRef}
              className="absolute inset-x-0 top-0 z-30 pointer-events-none select-none transition-[clip-path] duration-75 ease-out flex items-start gap-3 sm:gap-5 md:gap-7"
              style={{ clipPath: "polygon(0 0, 0 0, 0 0, 0 0)" }}
              aria-hidden="true"
            >
              <span className={`${indexBadgeClass} text-white/70`}>(04)</span>
              <h2 className={`${editorialHeadingClass} text-white`}>
                BUILT ON <br />
                INTEGRITY.
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 border-t border-neutral-200 pt-10 mb-14">
            <div className="space-y-2.5">
              <span className="font-mono text-xs text-neutral-400 block font-semibold">01</span>
              <h4 className="font-bold text-lg sm:text-xl text-neutral-950 tracking-tight leading-snug">
                REACH-compliant <br /> materials &amp; testing.
              </h4>
              <p className="text-neutral-600 text-sm sm:text-[15px] leading-relaxed">
                Honest quality in every belt—crafted with EU REACH-compliant hides and nickel-free hardware to meet strict global buyer standards.
              </p>
            </div>

            <div className="space-y-2.5">
              <span className="font-mono text-xs text-neutral-400 block font-semibold">02</span>
              <h4 className="font-bold text-lg sm:text-xl text-neutral-950 tracking-tight leading-snug">
                Transparent export <br /> &amp; consistent quality.
              </h4>
              <p className="text-neutral-600 text-sm sm:text-[15px] leading-relaxed">
                End-to-end control from raw processing to finished goods ensures uniform leather grading, stable pricing, and reliable FOB/CIF delivery.
              </p>
            </div>

            <div className="space-y-2.5">
              <span className="font-mono text-xs text-neutral-400 block font-semibold">03</span>
              <h4 className="font-bold text-lg sm:text-xl text-neutral-950 tracking-tight leading-snug">
                Empowering lives <br /> beyond the workshop.
              </h4>
              <p className="text-neutral-600 text-sm sm:text-[15px] leading-relaxed">
                Committed to community welfare in Kanpur—supporting education for underprivileged children, equal learning, and artisan skill development.
              </p>
            </div>
          </div>

          {/* 4-Column Compliance & Export Assurance Strip */}
          <div className="border-y border-neutral-200 py-10 grid grid-cols-2 lg:grid-cols-4 gap-8 items-center justify-items-center text-center">
            <div className="flex flex-col items-center space-y-2.5">
              <div className="w-16 h-11 bg-[#0B5FA5] text-white font-sans font-bold text-sm tracking-tight flex items-center justify-center rounded-[2px] shadow-xs">
                REACH
              </div>
              <span className="text-xs font-sans text-neutral-700 font-medium">
                REACH-Compliant Leather &amp; Hardware
              </span>
            </div>

            <div className="flex flex-col items-center space-y-2.5">
              <div className="w-14 h-14 rounded-full border-2 border-[#B91C1C] text-[#B91C1C] flex flex-col items-center justify-center leading-none">
                <span className="text-[8px] font-mono uppercase tracking-wider font-bold">EXPORT</span>
                <span className="text-xs font-sans font-bold mt-0.5">FOB / CIF</span>
              </div>
              <span className="text-xs font-sans text-neutral-700 font-medium">
                Global Logistics &amp; Transparent Pricing
              </span>
            </div>

            <div className="flex flex-col items-center space-y-2.5">
              <div className="w-24 h-11 border border-neutral-400 rounded-full flex items-center justify-center px-3">
                <span className="font-serif italic text-xs text-neutral-800 font-semibold leading-tight">
                  Since 2009
                </span>
              </div>
              <span className="text-xs font-sans text-neutral-700 font-medium">
                Kanpur Heritage &mdash; Verified Batch QC
              </span>
            </div>

            <div className="flex items-center justify-center">
              <TransitionLink
                href="/why-choose-us"
                className="inline-flex items-center gap-1.5 text-xs font-sans font-medium text-neutral-900 hover:opacity-70 transition-opacity text-left leading-snug"
              >
                <span>
                  Certifications <br /> &amp; compliance ↗
                </span>
              </TransitionLink>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <TransitionLink
              href="/why-choose-us"
              className="inline-flex items-center gap-2 text-xs sm:text-[13px] font-sans font-medium text-neutral-900 border-b border-neutral-900 pb-1.5 hover:gap-3 transition-all"
            >
              <span>Why global buyers choose SS International</span>
              <span>↗</span>
            </TransitionLink>

            <TransitionLink
              href="/contact"
              className="inline-flex items-center gap-2 text-xs sm:text-[13px] font-sans font-medium text-neutral-900 border-b border-neutral-900 pb-1.5 hover:gap-3 transition-all"
            >
              <span>Request compliance &amp; sample brief</span>
              <span>↗</span>
            </TransitionLink>
          </div>
        </div>
      </section>
    </div>
  );
}