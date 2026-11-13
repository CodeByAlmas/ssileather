"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TransitionLink } from "@/components/motion/TransitionProvider";

gsap.registerPlugin(ScrollTrigger);

interface BeltCard {
  id: string;
  title: string;
  code: string;
  spec: string;
  slug: string;
  image: string;
  slot: "left" | "mid" | "right";
}

interface BeltCategorySection {
  index: string;
  id: string;
  headingLines: string[];
  bgClass: "bg-white" | "bg-[#F8F7F4]";
  summary: string;
  thickness: string;
  moq: string;
  cards: BeltCard[];
}

const BELT_CATEGORIES: BeltCategorySection[] = [
  {
    index: "(01)",
    id: "polo-belts",
    headingLines: ["POLO", "BELTS."],
    bgClass: "bg-white",
    summary:
      "Hand-stitched Argentine polo thread patterns on vegetable-tanned full-grain hides—crafted in Kanpur for equestrian, resort, and heritage retail labels.",
    thickness: "3.5mm – 4.0mm Full-Grain",
    moq: "200 pcs / colourway",
    cards: [
      {
        id: "polo-1",
        title: "Pampa Classic Polo Belt",
        code: "SSI-PL-01",
        spec: "35mm • Waxed Cotton Thread • Solid Brass",
        slug: "polo-belts",
        image: "https://images.unsplash.com/photo-1624222247344-550fb60583dc?q=80&w=1000&auto=format&fit=crop",
        slot: "left",
      },
      {
        id: "polo-2",
        title: "Navy & Terracotta Weave",
        code: "SSI-PL-04",
        spec: "38mm • Hand-Loomed Diamond • Havana Hide",
        slug: "polo-belts",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1000&auto=format&fit=crop",
        slot: "mid",
      },
      {
        id: "polo-3",
        title: "Heritage Equestrian Polo",
        code: "SSI-PL-09",
        spec: "35mm • Custom Pantone Stitch • Antique Buckle",
        slug: "polo-belts",
        image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=1200&auto=format&fit=crop",
        slot: "right",
      },
    ],
  },
  {
    index: "(02)",
    id: "formal-profile",
    headingLines: ["PROFILE &", "FORMAL."],
    bgClass: "bg-[#F8F7F4]",
    summary:
      "Clean, structured dress belts with hand-burnished edges, feather-edge padding, and REACH-compliant nickel-free brushed or matte buckles.",
    thickness: "3.0mm – 3.6mm Calf & Buff",
    moq: "300 pcs / style",
    cards: [
      {
        id: "formal-1",
        title: "Milanese Padded Profile",
        code: "SSI-FM-02",
        spec: "32mm • Box Calf Finish • Brushed Satin Buckle",
        slug: "one-side-belts",
        image: "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?q=80&w=1000&auto=format&fit=crop",
        slot: "left",
      },
      {
        id: "formal-2",
        title: "Executive Edge-Burnished",
        code: "SSI-FM-06",
        spec: "35mm • Italian Edge Paint • Gunmetal Pin",
        slug: "one-side-belts",
        image: "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?q=80&w=1000&auto=format&fit=crop",
        slot: "mid",
      },
      {
        id: "formal-3",
        title: "Savile Row Dress Belt",
        code: "SSI-FM-11",
        spec: "30mm • Full-Grain Aniline • Nickel-Free Brass",
        slug: "one-side-belts",
        image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1200&auto=format&fit=crop",
        slot: "right",
      },
    ],
  },
  {
    index: "(03)",
    id: "reversible-ladies",
    headingLines: ["REVERSIBLE", "& LADIES."],
    bgClass: "bg-white",
    summary:
      "Precision twist-mechanism two-in-one reversible belts alongside slim, sculpted women's waist and hip silhouettes in custom seasonal palettes.",
    thickness: "3.0mm – 3.4mm Dual-Face",
    moq: "250 pcs / style",
    cards: [
      {
        id: "rev-1",
        title: "Twist-Lock Dual Tone",
        code: "SSI-RV-01",
        spec: "35mm • Black / Tan Reversible • Swivel Buckle",
        slug: "reversible-belts",
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1000&auto=format&fit=crop",
        slot: "left",
      },
      {
        id: "rev-2",
        title: "Slim Sculpted Waist Belt",
        code: "SSI-LD-05",
        spec: "20mm • Soft Nappa Grain • Gold-Tone Keeper",
        slug: "ladies-belts",
        image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1000&auto=format&fit=crop",
        slot: "mid",
      },
      {
        id: "rev-3",
        title: "Atelier Capsule Dress",
        code: "SSI-LD-08",
        spec: "25mm • Custom Debossed Loop • Export Grade",
        slug: "ladies-belts",
        image: "https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&w=1200&auto=format&fit=crop",
        slot: "right",
      },
    ],
  },
  {
    index: "(04)",
    id: "western-artisan",
    headingLines: ["WESTERN &", "ARTISAN."],
    bgClass: "bg-[#F8F7F4]",
    summary:
      "Heavyweight 4.2mm harness hides with western floral tooling, hand-rubbed antique finishes, printed textures, and rugged canvas-leather hybrids.",
    thickness: "3.8mm – 4.2mm Heavy Harness",
    moq: "200 pcs / style",
    cards: [
      {
        id: "west-1",
        title: "Ranchero Tooled Saddle",
        code: "SSI-WS-03",
        spec: "40mm • Deep Embossed Grain • Engraved Buckle",
        slug: "western-belts",
        image: "https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?q=80&w=1000&auto=format&fit=crop",
        slot: "left",
      },
      {
        id: "west-2",
        title: "Canvas & Bridle Hybrid",
        code: "SSI-CV-02",
        spec: "38mm • Heavy Cotton Webbing • Veg-Tan Tips",
        slug: "western-belts",
        image: "https://images.unsplash.com/photo-1590736969955-71cc94801759?q=80&w=1000&auto=format&fit=crop",
        slot: "mid",
      },
      {
        id: "west-3",
        title: "Hand-Finished Vintage",
        code: "SSI-HF-07",
        spec: "40mm • Hand-Burnished Patina • Solid Brass",
        slug: "western-belts",
        image: "https://images.unsplash.com/photo-1511556820780-d912e42b4980?q=80&w=1200&auto=format&fit=crop",
        slot: "right",
      },
    ],
  },
];

export default function ProductsLookbook() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const [cursorVisible, setCursorVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredSections = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return BELT_CATEGORIES.filter((sec) => {
      if (activeCategory !== "all" && sec.id !== activeCategory) return false;
      if (!q) return true;
      const inHeading = sec.headingLines.join(" ").toLowerCase().includes(q);
      const inSummary = sec.summary.toLowerCase().includes(q);
      const inCards = sec.cards.some(
        (c) =>
          c.title.toLowerCase().includes(q) ||
          c.spec.toLowerCase().includes(q) ||
          c.code.toLowerCase().includes(q)
      );
      return inHeading || inSummary || inCards;
    });
  }, [searchQuery, activeCategory]);

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
      className={`bg-white text-neutral-900 overflow-hidden relative select-none ${
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

      {/* Banox-Style Lookbook Search & Category Filter Bar */}
      <div className="pt-28 sm:pt-32 pb-6 border-b border-neutral-200 bg-white sticky top-0 z-30">
        <div className="max-w-[1560px] mx-auto px-6 sm:px-8 md:px-12 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          {/* Search Input */}
          <div className="relative flex-1 max-w-md">
            <span
              className="absolute left-0 top-1/2 -translate-y-1/2 text-neutral-400 text-sm pointer-events-none"
              aria-hidden="true"
            >
              ⌕
            </span>
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search polo, formal, reversible, western belts..."
              aria-label="Search leather belt categories and styles"
              className="w-full pl-6 pr-4 py-2 bg-transparent text-xs sm:text-sm font-sans text-neutral-900 placeholder:text-neutral-400 focus:outline-none border-b border-transparent focus:border-neutral-900 transition-colors"
            />
          </div>

          {/* Category Filter Pills + Direct Brief CTA */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => setActiveCategory("all")}
                className={`font-mono text-[11px] uppercase tracking-wider px-3 py-1.5 rounded-full transition-colors ${
                  activeCategory === "all"
                    ? "bg-neutral-950 text-white"
                    : "text-neutral-500 hover:text-neutral-950"
                }`}
              >
                All Categories (04)
              </button>
              {BELT_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`font-mono text-[11px] uppercase tracking-wider px-3 py-1.5 rounded-full transition-colors ${
                    activeCategory === cat.id
                      ? "bg-neutral-950 text-white"
                      : "text-neutral-500 hover:text-neutral-950"
                  }`}
                >
                  {cat.headingLines.join(" ").replace(".", "")}
                </button>
              ))}
            </div>

            <TransitionLink
              href="/contact"
              className="hidden sm:inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-neutral-900 border-b border-neutral-900 pb-0.5 hover:opacity-70 transition-opacity"
            >
              <span>Request Catalogue</span>
              <span>↗</span>
            </TransitionLink>
          </div>
        </div>
      </div>

      {/* Alternating White & Greyish Category Sections */}
      {filteredSections.length === 0 ? (
        <div className="max-w-[1560px] mx-auto px-6 sm:px-8 md:px-12 py-28 text-center">
          <p className="font-sans text-lg text-neutral-600">
            No belt styles matched &ldquo;{searchQuery}&rdquo;.
          </p>
          <button
            type="button"
            onClick={() => {
              setSearchQuery("");
              setActiveCategory("all");
            }}
            className="mt-4 font-mono text-xs uppercase tracking-wider underline text-neutral-950"
          >
            Reset lookbook filters
          </button>
        </div>
      ) : (
        filteredSections.map((category) => (
          <CategoryEditorialSection
            key={category.id}
            category={category}
            onHoverChange={setCursorVisible}
          />
        ))
      )}
    </div>
  );
}

/**
 * Individual Category Section with:
 * - Side-aligned index number (01), (02), (03), (04)
 * - 3 floating editorial belt images (Left, Center, Tall Right)
 * - Multi-box dynamic clip-path white text inversion across ALL overlapping images
 * - Cursor opposite float + ScrollTrigger parallax
 */
function CategoryEditorialSection({
  category,
  onHoverChange,
}: {
  category: BeltCategorySection;
  onHoverChange: (visible: boolean) => void;
}) {
  const stageRef = useRef<HTMLDivElement>(null);
  const leftCardRef = useRef<HTMLDivElement>(null);
  const midCardRef = useRef<HTMLDivElement>(null);
  const rightCardRef = useRef<HTMLDivElement>(null);
  const whiteTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stage = stageRef.current;
    const leftEl = leftCardRef.current;
    const midEl = midCardRef.current;
    const rightEl = rightCardRef.current;
    const whiteEl = whiteTextRef.current;

    if (!stage || !leftEl || !midEl || !rightEl || !whiteEl) return;

    // Multi-rectangle dynamic clip-path so ANY of the 3 floating images
    // overlapping the headline turns those exact letters pure white!
    function updateMultiClipMask() {
      if (!stage || !leftEl || !midEl || !rightEl || !whiteEl) return;
      const stageRect = stage.getBoundingClientRect();

      const getBox = (el: HTMLElement) => {
        const r = el.getBoundingClientRect();
        return {
          l: Math.max(0, r.left - stageRect.left),
          t: Math.max(0, r.top - stageRect.top),
          r: Math.min(stageRect.width, r.right - stageRect.left),
          b: Math.min(stageRect.height, r.bottom - stageRect.top),
        };
      };

      const b1 = getBox(leftEl);
      const b2 = getBox(midEl);
      const b3 = getBox(rightEl);

      // Construct a single evenodd-style continuous polygon tracing all 3 boxes
      // so overlapping text inside Left, Mid, or Right card turns crisp white
      const poly = [
        `${b1.l}px ${b1.t}px`,
        `${b1.r}px ${b1.t}px`,
        `${b1.r}px ${b1.b}px`,
        `${b1.l}px ${b1.b}px`,
        `${b1.l}px ${b1.t}px`,
        `0px 0px`,
        `${b2.l}px ${b2.t}px`,
        `${b2.r}px ${b2.t}px`,
        `${b2.r}px ${b2.b}px`,
        `${b2.l}px ${b2.b}px`,
        `${b2.l}px ${b2.t}px`,
        `0px 0px`,
        `${b3.l}px ${b3.t}px`,
        `${b3.r}px ${b3.t}px`,
        `${b3.r}px ${b3.b}px`,
        `${b3.l}px ${b3.b}px`,
        `${b3.l}px ${b3.t}px`,
        `0px 0px`,
      ].join(", ");

      whiteEl.style.clipPath = `polygon(${poly})`;
    }

    const ctx = gsap.context(() => {
      gsap.to(leftEl, {
        y: -26,
        ease: "none",
        scrollTrigger: {
          trigger: stage,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
          onUpdate: updateMultiClipMask,
        },
      });
      gsap.to(midEl, {
        y: -38,
        ease: "none",
        scrollTrigger: {
          trigger: stage,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.4,
          onUpdate: updateMultiClipMask,
        },
      });
      gsap.to(rightEl, {
        y: -55,
        ease: "none",
        scrollTrigger: {
          trigger: stage,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.7,
          onUpdate: updateMultiClipMask,
        },
      });
    }, stage);

    const xLeft = gsap.quickTo(leftEl, "x", { duration: 0.8, ease: "power2.out", onUpdate: updateMultiClipMask });
    const yLeft = gsap.quickTo(leftEl, "y", { duration: 0.8, ease: "power2.out", onUpdate: updateMultiClipMask });
    const xMid = gsap.quickTo(midEl, "x", { duration: 0.8, ease: "power2.out", onUpdate: updateMultiClipMask });
    const yMid = gsap.quickTo(midEl, "y", { duration: 0.8, ease: "power2.out", onUpdate: updateMultiClipMask });
    const xRight = gsap.quickTo(rightEl, "x", { duration: 0.8, ease: "power2.out", onUpdate: updateMultiClipMask });
    const yRight = gsap.quickTo(rightEl, "y", { duration: 0.8, ease: "power2.out", onUpdate: updateMultiClipMask });

    const onMouseMove = (e: MouseEvent) => {
      const rect = stage.getBoundingClientRect();
      const normX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const normY = ((e.clientY - rect.top) / rect.height) * 2 - 1;

      xLeft(normX * 32);
      yLeft(normY * 16);

      xMid(normX * 18);
      yMid(-normY * 22);

      xRight(-normX * 45);
      yRight(-normY * 20);
    };

    const onMouseLeave = () => {
      xLeft(0);
      yLeft(0);
      xMid(0);
      yMid(0);
      xRight(0);
      yRight(0);
      setTimeout(updateMultiClipMask, 800);
    };

    stage.addEventListener("mousemove", onMouseMove);
    stage.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("resize", updateMultiClipMask);

    const rafId = requestAnimationFrame(updateMultiClipMask);

    return () => {
      cancelAnimationFrame(rafId);
      ctx.revert();
      stage.removeEventListener("mousemove", onMouseMove);
      stage.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("resize", updateMultiClipMask);
    };
  }, []);

  const leftCard = category.cards[0];
  const midCard = category.cards[1];
  const rightCard = category.cards[2];

  const editorialHeadingClass =
    "font-sans font-bold text-4xl sm:text-6xl md:text-[6rem] lg:text-[7.75rem] xl:text-[8.25rem] tracking-[-0.04em] uppercase leading-[0.9]";

  const indexBadgeClass =
    "font-mono text-xs sm:text-sm tracking-widest font-medium pt-1.5 sm:pt-2.5 md:pt-3.5 shrink-0 select-none";

  return (
    <section
      id={category.id}
      className={`py-16 sm:py-24 md:py-28 border-t border-neutral-200 ${category.bgClass}`}
      aria-labelledby={`${category.id}-title`}
    >
      <div className="max-w-[1560px] mx-auto px-6 sm:px-8 md:px-12 relative">
        {/* Banox 3-Image Layered Editorial Stage */}
        <div
          ref={stageRef}
          className="relative min-h-[540px] sm:min-h-[680px] lg:min-h-[780px] mb-10 sm:mb-14"
        >
          {/* 1. Base Static Black Headline with Side Index Number */}
          <div className="absolute inset-x-0 top-0 z-10 pointer-events-none select-none flex items-start gap-3 sm:gap-5 md:gap-7">
            <span className={`${indexBadgeClass} text-neutral-400`}>{category.index}</span>
            <h2 id={`${category.id}-title`} className={`${editorialHeadingClass} text-neutral-950`}>
              {category.headingLines[0]} <br />
              {category.headingLines[1]}
            </h2>
          </div>

          {/* 2. LEFT CARD (Overlaps bottom-left of Line 2) */}
          <div
            ref={leftCardRef}
            onMouseEnter={() => onHoverChange(true)}
            onMouseLeave={() => onHoverChange(false)}
            className="absolute left-[4%] sm:left-[7%] top-[34%] sm:top-[32%] w-[44%] sm:w-[27%] md:w-[24%] z-20 cursor-none group transition-transform will-change-transform"
          >
            <TransitionLink href={`/${leftCard.slug}`} className="block">
              <div className="relative aspect-[3/3.6] rounded-md overflow-hidden bg-neutral-200 shadow-xl">
                <Image
                  src={leftCard.image}
                  alt={`${leftCard.title} — ${leftCard.spec}`}
                  fill
                  sizes="(max-width: 768px) 45vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <div className="mt-2.5">
                <p className="font-sans font-semibold text-xs sm:text-sm text-neutral-950">
                  {leftCard.title}
                </p>
                <p className="font-mono text-[10px] uppercase tracking-wider text-neutral-500 mt-0.5">
                  {leftCard.code} &bull; {leftCard.spec}
                </p>
              </div>
            </TransitionLink>
          </div>

          {/* 3. MIDDLE CARD (Overlaps bottom-center of Line 2) */}
          <div
            ref={midCardRef}
            onMouseEnter={() => onHoverChange(true)}
            onMouseLeave={() => onHoverChange(false)}
            className="hidden sm:block absolute left-[37%] md:left-[35%] bottom-0 w-[26%] md:w-[23%] z-20 cursor-none group transition-transform will-change-transform"
          >
            <TransitionLink href={`/${midCard.slug}`} className="block">
              <div className="relative aspect-[3/3.6] rounded-md overflow-hidden bg-neutral-200 shadow-xl">
                <Image
                  src={midCard.image}
                  alt={`${midCard.title} — ${midCard.spec}`}
                  fill
                  sizes="25vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <div className="mt-2.5">
                <p className="font-sans font-semibold text-xs sm:text-sm text-neutral-950">
                  {midCard.title}
                </p>
                <p className="font-mono text-[10px] uppercase tracking-wider text-neutral-500 mt-0.5">
                  {midCard.code} &bull; {midCard.spec}
                </p>
              </div>
            </TransitionLink>
          </div>

          {/* 4. RIGHT TALL CARD (Overlaps right end of Line 1 & Line 2) */}
          <div
            ref={rightCardRef}
            onMouseEnter={() => onHoverChange(true)}
            onMouseLeave={() => onHoverChange(false)}
            className="absolute right-0 top-0 w-[48%] sm:w-[34%] md:w-[36%] lg:w-[35%] z-20 cursor-none group transition-transform will-change-transform"
          >
            <TransitionLink href={`/${rightCard.slug}`} className="block">
              <div className="relative aspect-[3/4] rounded-md overflow-hidden bg-neutral-900 shadow-2xl">
                <Image
                  src={rightCard.image}
                  alt={`${rightCard.title} — ${rightCard.spec}`}
                  fill
                  sizes="(max-width: 768px) 50vw, 36vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <div className="mt-2.5 text-right">
                <p className="font-sans font-semibold text-xs sm:text-sm text-neutral-950">
                  {rightCard.title}
                </p>
                <p className="font-mono text-[10px] uppercase tracking-wider text-neutral-500 mt-0.5">
                  {rightCard.code} &bull; {rightCard.spec}
                </p>
              </div>
            </TransitionLink>
          </div>

          {/* 5. Dynamic Multi-Image Inverted White Text Layer */}
          <div
            ref={whiteTextRef}
            className="absolute inset-x-0 top-0 z-30 pointer-events-none select-none transition-[clip-path] duration-75 ease-out flex items-start gap-3 sm:gap-5 md:gap-7"
            style={{ clipPath: "polygon(0 0, 0 0, 0 0, 0 0)" }}
            aria-hidden="true"
          >
            <span className={`${indexBadgeClass} text-white/70`}>{category.index}</span>
            <h2 className={`${editorialHeadingClass} text-white`}>
              {category.headingLines[0]} <br />
              {category.headingLines[1]}
            </h2>
          </div>
        </div>

        {/* Category Spec & Wholesale Action Strip */}
        <div className="border-t border-neutral-200 pt-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <p className="text-neutral-600 text-sm sm:text-[15px] leading-relaxed max-w-2xl">
            {category.summary}
          </p>

          <div className="flex flex-wrap items-center gap-6 sm:gap-10 shrink-0">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 block">
                HIDE GAUGE
              </span>
              <span className="font-sans font-semibold text-xs sm:text-sm text-neutral-950">
                {category.thickness}
              </span>
            </div>

            <div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 block">
                STANDARD MOQ
              </span>
              <span className="font-sans font-semibold text-xs sm:text-sm text-neutral-950">
                {category.moq}
              </span>
            </div>

            <TransitionLink
              href={`/${category.cards[0].slug}`}
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-950 border-b border-neutral-950 pb-1 hover:gap-3 transition-all"
            >
              <span>Explore {category.headingLines.join(" ").replace(".", "")}</span>
              <span>↗</span>
            </TransitionLink>
          </div>
        </div>
      </div>
    </section>
  );
}