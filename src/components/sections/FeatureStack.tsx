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

  // Section 04 Images (Exact Banox Match: Solar Roof + Leather Hide Storage)
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

  // Section 03 Refs
  const stage03Ref = useRef<HTMLDivElement>(null);
  const s3TopRightImgRef = useRef<HTMLDivElement>(null);
  const s3BottomLeftImgRef = useRef<HTMLDivElement>(null);
  const s3BottomMidImgRef = useRef<HTMLDivElement>(null);
  const s3WhiteTextRef = useRef<HTMLDivElement>(null);

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

    // Parallax ScrollTrigger Context
    const ctx = gsap.context(() => {
      if (s2Left && s2Right && s2Stage) {
        gsap.to(s2Left, {
          y: -35,
          ease: "none",
          scrollTrigger: { trigger: s2Stage, start: "top bottom", end: "bottom top", scrub: 1.2 },
        });
        gsap.to(s2Right, {
          y: -75,
          ease: "none",
          scrollTrigger: {
            trigger: s2Stage,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.8,
            onUpdate: updateS2ClipMask,
          },
        });
      }

      if (s3Stage && s3TopRight && s3BottomLeft && s3BottomMid) {
        gsap.to(s3TopRight, {
          y: -60,
          ease: "none",
          scrollTrigger: {
            trigger: s3Stage,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.6,
            onUpdate: updateS3ClipMask,
          },
        });
        gsap.to(s3BottomLeft, {
          y: -40,
          ease: "none",
          scrollTrigger: { trigger: s3Stage, start: "top bottom", end: "bottom top", scrub: 1.2 },
        });
        gsap.to(s3BottomMid, {
          y: -25,
          ease: "none",
          scrollTrigger: { trigger: s3Stage, start: "top bottom", end: "bottom top", scrub: 1.4 },
        });
      }

      if (s4Left && s4Right && s4Stage) {
        gsap.to(s4Left, {
          y: -35,
          ease: "none",
          scrollTrigger: { trigger: s4Stage, start: "top bottom", end: "bottom top", scrub: 1.2 },
        });
        gsap.to(s4Right, {
          y: -75,
          ease: "none",
          scrollTrigger: {
            trigger: s4Stage,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.8,
            onUpdate: updateS4ClipMask,
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

      xQuickS3TopRight?.(-normX * 50);
      yQuickS3TopRight?.(-normY * 25);
      xQuickS3BottomLeft?.(normX * 35);
      yQuickS3BottomLeft?.(normY * 18);
      xQuickS3BottomMid?.(normX * 25);
      yQuickS3BottomMid?.(normY * 15);
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

    updateS2ClipMask();
    updateS3ClipMask();
    updateS4ClipMask();

    return () => {
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

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMoveCursor}
      className={`bg-[#F8F7F4] text-neutral-900 overflow-hidden relative select-none ${
        cursorVisible ? "cursor-none" : ""
      }`}
    >
      {/* Banox Enlarged Custom Magnetic "View ↗" Circle Badge */}
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
          { 02 } DESIGN TOGETHER (Greyish Off-White: bg-[#F8F7F4])
         ======================================================== */}
      <section className="py-20 sm:py-28 md:py-36 border-t border-neutral-200 bg-[#F8F7F4]">
        <div className="max-w-[1560px] mx-auto px-6 sm:px-8 md:px-12 relative">
          <div className="mb-4">
            <span className="font-mono text-sm tracking-widest text-neutral-400 block font-medium">
              (02)
            </span>
          </div>

          <div
            ref={stage02Ref}
            className="relative min-h-[580px] sm:min-h-[720px] lg:min-h-[820px] mb-20 sm:mb-28"
          >
            <div className="absolute inset-x-0 top-0 z-10 pointer-events-none select-none">
              <h2 className="font-sans font-black text-6xl sm:text-8xl md:text-9xl lg:text-[10.5rem] tracking-[-0.045em] uppercase leading-[0.88] text-neutral-950">
                DESIGN <br />
                TOGETHER.
              </h2>
            </div>

            <div
              ref={s2LeftImgRef}
              onMouseEnter={() => setCursorVisible(true)}
              onMouseLeave={() => setCursorVisible(false)}
              className="absolute left-0 top-[44%] sm:top-[40%] w-[68%] sm:w-[46%] md:w-[38%] z-20 cursor-none group transition-transform will-change-transform"
            >
              <div className="relative aspect-[4/3] rounded-md overflow-hidden bg-neutral-200 shadow-xl">
                <Image
                  src={EDITORIAL_IMAGES.craft}
                  alt="Artisan pattern cutting at SS International"
                  fill
                  sizes="(max-width: 768px) 70vw, 40vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <p className="mt-3 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-neutral-500 font-semibold">
                FROM IDEA TO PATTERN &bull; KANPUR STUDIO
              </p>
            </div>

            <div
              ref={s2RightImgRef}
              onMouseEnter={() => setCursorVisible(true)}
              onMouseLeave={() => setCursorVisible(false)}
              className="absolute right-0 top-0 w-[55%] sm:w-[50%] md:w-[44%] lg:w-[42%] z-20 cursor-none group transition-transform will-change-transform"
            >
              <div className="relative aspect-[3/4] rounded-md overflow-hidden bg-neutral-900 shadow-2xl">
                <Image
                  src={EDITORIAL_IMAGES.model}
                  alt="Luxury leather goods craftsmanship"
                  fill
                  priority
                  sizes="(max-width: 768px) 60vw, 45vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <p className="mt-3 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-neutral-400 text-right">
                Bespoke Prototype Batch // Export Grade
              </p>
            </div>

            <div
              ref={s2WhiteTextRef}
              className="absolute inset-x-0 top-0 z-30 pointer-events-none select-none transition-[clip-path] duration-75 ease-out"
              style={{ clipPath: "polygon(0 0, 0 0, 0 0, 0 0)" }}
              aria-hidden="true"
            >
              <h2 className="font-sans font-black text-6xl sm:text-8xl md:text-9xl lg:text-[10.5rem] tracking-[-0.045em] uppercase leading-[0.88] text-white">
                DESIGN <br />
                TOGETHER.
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12 border-t border-neutral-200 pt-14">
            <div className="space-y-3">
              <span className="font-mono text-xs text-neutral-400 block font-semibold">01</span>
              <h4 className="font-bold uppercase text-lg sm:text-xl text-neutral-900 tracking-tight">
                Understand your brand.
              </h4>
              <p className="text-neutral-600 text-sm sm:text-[15px] leading-relaxed">
                Your target market, hardware finishes, leather thickness (3.0mm–4.2mm), and compliance brief.
              </p>
            </div>

            <div className="space-y-3">
              <span className="font-mono text-xs text-neutral-400 block font-semibold">02</span>
              <h4 className="font-bold uppercase text-lg sm:text-xl text-neutral-900 tracking-tight">
                Explore the possibilities.
              </h4>
              <p className="text-neutral-600 text-sm sm:text-[15px] leading-relaxed">
                Vegetable-tanned hides, Argentine polo stitch embroidery, reversible mechanisms, and solid brass buckles.
              </p>
            </div>

            <div className="space-y-3">
              <span className="font-mono text-xs text-neutral-400 block font-semibold">03</span>
              <h4 className="font-bold uppercase text-lg sm:text-xl text-neutral-900 tracking-tight">
                Refine it together.
              </h4>
              <p className="text-neutral-600 text-sm sm:text-[15px] leading-relaxed">
                Production-grade sample cut in Kanpur, refundable sample review, lab testing, then straight into bulk.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          { 03 } MADE WITH CARE (Pure White Background: bg-white)
         ======================================================== */}
      <section className="py-20 sm:py-28 md:py-36 border-t border-neutral-200 bg-white">
        <div className="max-w-[1560px] mx-auto px-6 sm:px-8 md:px-12 relative">
          <div className="mb-4">
            <span className="font-mono text-sm tracking-widest text-neutral-400 block font-medium">
              (03)
            </span>
          </div>

          <div
            ref={stage03Ref}
            className="relative min-h-[640px] sm:min-h-[760px] lg:min-h-[880px] mb-20 sm:mb-28"
          >
            <div className="absolute inset-x-0 top-0 z-10 pointer-events-none select-none">
              <h2 className="font-sans font-black text-6xl sm:text-8xl md:text-9xl lg:text-[10.5rem] tracking-[-0.045em] uppercase leading-[0.88] text-neutral-950">
                MADE <br />
                WITH CARE.
              </h2>
            </div>

            <div
              ref={s3TopRightImgRef}
              onMouseEnter={() => setCursorVisible(true)}
              onMouseLeave={() => setCursorVisible(false)}
              className="absolute right-0 top-0 w-[60%] sm:w-[55%] md:w-[52%] lg:w-[48%] z-20 cursor-none group transition-transform will-change-transform"
            >
              <div className="relative aspect-[16/11] rounded-md overflow-hidden bg-neutral-900 shadow-2xl">
                <Image
                  src={EDITORIAL_IMAGES.factoryFloor}
                  alt="Industrial leather assembly line"
                  fill
                  priority
                  sizes="(max-width: 768px) 70vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <p className="mt-3 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-neutral-400 text-right">
                KANPUR, INDIA &bull; Our people, working together
              </p>
            </div>

            <div
              ref={s3BottomLeftImgRef}
              onMouseEnter={() => setCursorVisible(true)}
              onMouseLeave={() => setCursorVisible(false)}
              className="absolute left-0 top-[48%] sm:top-[44%] w-[60%] sm:w-[45%] md:w-[38%] z-20 cursor-none group transition-transform will-change-transform"
            >
              <div className="relative aspect-[4/3] rounded-md overflow-hidden bg-neutral-200 shadow-xl">
                <Image
                  src={EDITORIAL_IMAGES.stitching}
                  alt="Leather edge finishing and stitching"
                  fill
                  sizes="(max-width: 768px) 70vw, 40vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <p className="mt-3 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-neutral-500 font-semibold">
                PRECISION & CRAFT &bull; Edge finishing & attention to detail
              </p>
            </div>

            <div
              ref={s3BottomMidImgRef}
              onMouseEnter={() => setCursorVisible(true)}
              onMouseLeave={() => setCursorVisible(false)}
              className="absolute left-[42%] sm:left-[45%] md:left-[48%] bottom-0 w-[55%] sm:w-[46%] md:w-[40%] z-20 cursor-none group transition-transform will-change-transform"
            >
              <div className="relative aspect-[16/10] rounded-md overflow-hidden bg-neutral-200 shadow-xl">
                <Image
                  src={EDITORIAL_IMAGES.facade}
                  alt="SS International Kanpur facility exterior"
                  fill
                  sizes="(max-width: 768px) 60vw, 40vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <p className="mt-3 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-neutral-500 font-semibold">
                OUR MANUFACTURING HOME &bull; In-house Tannery & Assembly
              </p>
            </div>

            <div
              ref={s3WhiteTextRef}
              className="absolute inset-x-0 top-0 z-30 pointer-events-none select-none transition-[clip-path] duration-75 ease-out"
              style={{ clipPath: "polygon(0 0, 0 0, 0 0, 0 0)" }}
              aria-hidden="true"
            >
              <h2 className="font-sans font-black text-6xl sm:text-8xl md:text-9xl lg:text-[10.5rem] tracking-[-0.045em] uppercase leading-[0.88] text-white">
                MADE <br />
                WITH CARE.
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 border-t border-neutral-200 pt-14 items-baseline">
            <div>
              <span className="font-sans font-black text-5xl sm:text-6xl md:text-7xl text-neutral-950 block tracking-tight">
                50,000
              </span>
              <span className="font-mono text-[11px] uppercase tracking-wider text-neutral-500 mt-2 block font-medium">
                MONTHLY BELT CAPACITY (UNITS)
              </span>
            </div>

            <div>
              <span className="font-sans font-black text-5xl sm:text-6xl md:text-7xl text-neutral-950 block tracking-tight">
                100%
              </span>
              <span className="font-mono text-[11px] uppercase tracking-wider text-neutral-500 mt-2 block font-medium">
                IN-HOUSE TANNING & QUALITY INSPECTION
              </span>
            </div>

            <div>
              <span className="font-sans font-black text-5xl sm:text-6xl md:text-7xl text-neutral-950 block tracking-tight">
                2–4
              </span>
              <span className="font-mono text-[11px] uppercase tracking-wider text-neutral-500 mt-2 block font-medium">
                WEEKS STANDARD EXPORT LEAD TIME
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          { 04 } GOOD PRACTICE (Greyish Off-White: bg-[#F8F7F4])
         ======================================================== */}
      <section
        id="compliance"
        className="py-20 sm:py-28 md:py-36 border-t border-neutral-200 bg-[#F8F7F4]"
        aria-labelledby="good-practice-title"
        itemScope
        itemType="https://schema.org/Organization"
      >
        <meta itemProp="name" content="SS International" />
        <div className="max-w-[1560px] mx-auto px-6 sm:px-8 md:px-12 relative">
          <div className="mb-4">
            <span className="font-mono text-sm tracking-widest text-neutral-400 block font-medium">
              (04)
            </span>
          </div>

          {/* Top Layered Stage (Exact Banox Capture01_8 Proportion) */}
          <div
            ref={stage04Ref}
            className="relative min-h-[580px] sm:min-h-[720px] lg:min-h-[820px] mb-20 sm:mb-28"
          >
            {/* 1. Base Static Black Headline */}
            <div className="absolute inset-x-0 top-0 z-10 pointer-events-none select-none">
              <h2
                id="good-practice-title"
                className="font-sans font-black text-6xl sm:text-8xl md:text-9xl lg:text-[10.5rem] tracking-[-0.045em] uppercase leading-[0.88] text-neutral-950"
              >
                GOOD <br />
                PRACTICE.
              </h2>
            </div>

            {/* 2. Left Lower Image (Considered Materials / Hide Storage) */}
            <div
              ref={s4LeftImgRef}
              onMouseEnter={() => setCursorVisible(true)}
              onMouseLeave={() => setCursorVisible(false)}
              className="absolute left-0 top-[44%] sm:top-[40%] w-[68%] sm:w-[46%] md:w-[38%] z-20 cursor-none group transition-transform will-change-transform"
            >
              <div className="relative aspect-[4/3] rounded-md overflow-hidden bg-neutral-200 shadow-xl">
                <Image
                  src={EDITORIAL_IMAGES.materials}
                  alt="Considered vegetable-tanned leather hides storage at SS International"
                  fill
                  sizes="(max-width: 768px) 70vw, 40vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <p className="mt-3 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-neutral-500 font-semibold">
                CONSIDERED MATERIALS &bull; Sourcing, storage and material care
              </p>
            </div>

            {/* 3. Right Tall Image (Solar Infrastructure — Overlaps "CE." of PRACTICE.) */}
            <div
              ref={s4RightImgRef}
              onMouseEnter={() => setCursorVisible(true)}
              onMouseLeave={() => setCursorVisible(false)}
              className="absolute right-0 top-0 w-[55%] sm:w-[50%] md:w-[46%] lg:w-[45%] z-20 cursor-none group transition-transform will-change-transform"
            >
              <div className="relative aspect-[4/4.3] rounded-md overflow-hidden bg-neutral-900 shadow-2xl">
                <Image
                  src={EDITORIAL_IMAGES.solarRoof}
                  alt="Solar power and sustainable infrastructure for leather manufacturing"
                  fill
                  sizes="(max-width: 768px) 60vw, 46vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <p className="mt-3 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-neutral-500 text-right font-semibold">
                CLEAN ENERGY &bull; Practical environmental investment
              </p>
            </div>

            {/* 4. Dynamic Inverted White Text Layer for 04 */}
            <div
              ref={s4WhiteTextRef}
              className="absolute inset-x-0 top-0 z-30 pointer-events-none select-none transition-[clip-path] duration-75 ease-out"
              style={{ clipPath: "polygon(0 0, 0 0, 0 0, 0 0)" }}
              aria-hidden="true"
            >
              <h2 className="font-sans font-black text-6xl sm:text-8xl md:text-9xl lg:text-[10.5rem] tracking-[-0.045em] uppercase leading-[0.88] text-white">
                GOOD <br />
                PRACTICE.
              </h2>
            </div>
          </div>

          {/* 3-Column Banox Responsibility Pillars (Capture02_3 Top Half) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12 border-t border-neutral-200 pt-14 mb-16">
            <div className="space-y-3">
              <span className="font-mono text-xs text-neutral-400 block font-semibold">01</span>
              <h4 className="font-bold text-xl sm:text-2xl text-neutral-950 tracking-tight leading-snug">
                Standards, backed <br /> by documentation.
              </h4>
              <p className="text-neutral-600 text-sm sm:text-[15px] leading-relaxed">
                Materials comply with EU REACH chemical limits and nickel-free hardware norms, with batch test records ready for buyer vendor assessment.
              </p>
            </div>

            <div className="space-y-3">
              <span className="font-mono text-xs text-neutral-400 block font-semibold">02</span>
              <h4 className="font-bold text-xl sm:text-2xl text-neutral-950 tracking-tight leading-snug">
                Environmental care. <br /> Practical action.
              </h4>
              <p className="text-neutral-600 text-sm sm:text-[15px] leading-relaxed">
                Solar-assisted facility operations, monitored effluent treatment in Kanpur, and structured leather offcut reuse across small accessories.
              </p>
            </div>

            <div className="space-y-3">
              <span className="font-mono text-xs text-neutral-400 block font-semibold">03</span>
              <h4 className="font-bold text-xl sm:text-2xl text-neutral-950 tracking-tight leading-snug">
                Respect for <br /> the people who make.
              </h4>
              <p className="text-neutral-600 text-sm sm:text-[15px] leading-relaxed">
                Safe floor workstations, fair wages, zero child labour policy, and continuous skill training for master belt stitchers.
              </p>
            </div>
          </div>

          {/* Banox 4-Column Open Certification Row (Capture02_3 Middle Strip) */}
          <div className="border-y border-neutral-200 py-12 grid grid-cols-2 lg:grid-cols-4 gap-8 items-center justify-items-center text-center">
            {/* Badge 1: EU REACH */}
            <div className="flex flex-col items-center space-y-3">
              <div className="w-16 h-12 bg-[#0B5FA5] text-white font-sans font-black text-sm tracking-tight flex items-center justify-center rounded-[2px] shadow-xs">
                REACH
              </div>
              <span className="text-xs font-sans text-neutral-700 font-medium">
                EU REACH &amp; Azo-Free Compliant
              </span>
            </div>

            {/* Badge 2: ISO 9001 */}
            <div className="flex flex-col items-center space-y-3">
              <div className="w-14 h-14 rounded-full border-2 border-[#B91C1C] text-[#B91C1C] flex flex-col items-center justify-center leading-none">
                <span className="text-[8px] font-mono uppercase tracking-wider font-bold">CERTIFIED</span>
                <span className="text-xs font-sans font-black mt-0.5">ISO 9001</span>
              </div>
              <span className="text-xs font-sans text-neutral-700 font-medium">
                Quality Management System
              </span>
            </div>

            {/* Badge 3: Sustainable Tannery */}
            <div className="flex flex-col items-center space-y-3">
              <div className="w-24 h-12 border border-neutral-400 rounded-full flex items-center justify-center px-3">
                <span className="font-serif italic text-xs text-neutral-800 font-semibold leading-tight">
                  Eco-Tan Standard
                </span>
              </div>
              <span className="text-xs font-sans text-neutral-700 font-medium">
                Vegetable-Tanned &mdash; verified batch
              </span>
            </div>

            {/* 4th Column Action Link */}
            <div className="flex items-center justify-center">
              <TransitionLink
                href="/why-choose-us"
                className="inline-flex items-center gap-1.5 text-xs font-sans font-medium text-neutral-900 hover:opacity-70 transition-opacity text-left leading-snug"
              >
                <span>
                  All standards <br /> &amp; approvals ↗
                </span>
              </TransitionLink>
            </div>
          </div>

          {/* Bottom Extreme Left & Right Underlined Links (Capture02_3 Bottom) */}
          <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <TransitionLink
              href="/why-choose-us"
              className="inline-flex items-center gap-2 text-xs sm:text-[13px] font-sans font-medium text-neutral-900 border-b border-neutral-900 pb-1.5 hover:gap-3 transition-all"
            >
              <span>Our practices &amp; commitments</span>
              <span>↗</span>
            </TransitionLink>

            <TransitionLink
              href="/contact"
              className="inline-flex items-center gap-2 text-xs sm:text-[13px] font-sans font-medium text-neutral-900 border-b border-neutral-900 pb-1.5 hover:gap-3 transition-all"
            >
              <span>Request our compliance documents</span>
              <span>↗</span>
            </TransitionLink>
          </div>
        </div>
      </section>
    </div>
  );
}