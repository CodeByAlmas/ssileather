"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { prefersReducedMotion } from "@/lib/motion";

export default function Preloader() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const html = document.documentElement;
    const el = root.current;
    if (!el) return;

    // Trigger on every page refresh
    html.classList.remove("no-preload");
    delete html.dataset.ready;

    const ready = () => {
      html.dataset.ready = "true";
      window.dispatchEvent(new Event("ss:ready"));
    };

    if (prefersReducedMotion()) {
      el.style.display = "none";
      ready();
      return;
    }

    html.style.overflow = "hidden";

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          html.style.overflow = "";
          el.style.display = "none";
        },
      });

      const isMobile = window.innerWidth < 640;
      const spreadX = isMobile
        ? Math.min(window.innerWidth * 0.36, 135)
        : Math.min(window.innerWidth * 0.34, 460);

      // Tight horizontal spacing when merged ("SSI")
      const joinedGap = isMobile ? 42 : 76;

      // Initial state
      gsap.set(".pl-left", { x: -spreadX, y: 0, rotation: 0 });
      gsap.set(".pl-mid", { x: 0, y: 0, rotation: 0 });
      gsap.set(".pl-right", { x: spreadX, y: 0, rotation: 0 });
      gsap.set(".pl-stage", { scale: 1, transformOrigin: "50% 50%" });
      gsap.set(".pl-fill", { clipPath: "inset(100% 0% 0% 0%)" });

      // 1. Faded vector letters appear on pure black screen
      tl.from(".pl-letter-wrap", {
        autoAlpha: 0,
        duration: 0.35,
        ease: "power2.out",
      })

        // 2. Smooth bottom-to-top pure white fill inside stationary letters
        .to(
          ".pl-fill",
          {
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1.3,
            ease: "power1.inOut",
          },
          "+=0.08"
        )

        // 3. Left S and Right I converge inward to form tight "SSI"
        .to(
          ".pl-left",
          {
            x: -joinedGap,
            duration: 0.5,
            ease: "expo.inOut",
          },
          "+=0.2"
        )
        .to(
          ".pl-right",
          {
            x: joinedGap,
            duration: 0.5,
            ease: "expo.inOut",
          },
          "<"
        )

        // 4A. Position Arc Shift Starts (Right I moves up-left, Left S moves down-right)
        .to(
          ".pl-right",
          {
            x: isMobile ? 12 : 22,
            y: isMobile ? -40 : -72,
            duration: 0.5,
            ease: "power2.in",
          },
          "+=0.1"
        )
        .to(
          ".pl-left",
          {
            x: isMobile ? -12 : -22,
            y: isMobile ? 40 : 72,
            duration: 0.5,
            ease: "power2.in",
          },
          "<"
        )

        // 4B. Outer letters start rotating slightly delayed, only reaching half-way (~ -28deg)
        .to(
          ".pl-right",
          {
            rotation: -28,
            duration: 0.4,
            ease: "power2.in",
          },
          "<+=0.1"
        )
        .to(
          ".pl-left",
          {
            rotation: -26,
            duration: 0.4,
            ease: "power2.in",
          },
          "<"
        )

        // 5. HALF-WAY INTERCEPT: Before outer letters finish rotating,
        // Middle S starts rotating AND fast razor-sharp vector zoom-in overtakes the screen!
        .to(
          ".pl-mid",
          {
            rotation: -75,
            duration: 0.42,
            ease: "power3.in",
          },
          "<+=0.12"
        )
        .to(
          ".pl-stage",
          {
            scale: 120,
            duration: 0.44,
            ease: "expo.in",
          },
          "<"
        )
        .call(ready, undefined, "-=0.2")
        .to(
          el,
          {
            autoAlpha: 0,
            duration: 0.22,
            ease: "power2.out",
          },
          "-=0.15"
        );
    }, el);

    return () => {
      html.style.overflow = "";
      ctx.revert();
    };
  }, []);

  return (
    <div
      ref={root}
      className="preloader fixed inset-0 z-[110] flex items-center justify-center bg-[#050505] overflow-hidden"
      role="status"
      aria-live="polite"
      aria-label="Loading SS International"
    >
      <span className="sr-only">SS International — Leading Leather Goods Manufacturer</span>

      {/* Outer Vector Zoom Stage (No will-change-transform on parent so SVG re-rasterizes sharply) */}
      <div
        className="pl-stage relative flex items-center justify-center w-full h-full"
        aria-hidden="true"
      >
        <div className="relative flex items-center justify-center">
          
          {/* LEFT VECTOR LETTER: S */}
          <div className="pl-letter-wrap pl-left absolute flex items-center justify-center">
            <VectorLetter char="S" />
          </div>

          {/* MIDDLE VECTOR LETTER: S */}
          <div className="pl-letter-wrap pl-mid absolute flex items-center justify-center">
            <VectorLetter char="S" />
          </div>

          {/* RIGHT VECTOR LETTER: I */}
          <div className="pl-letter-wrap pl-right absolute flex items-center justify-center">
            <VectorLetter char="I" />
          </div>

        </div>
      </div>
    </div>
  );
}

/**
 * Pure SVG Vector Glyph with dual-layer bottom-to-top white fill.
 * Prevents browser bitmap scaling pixelation even at 120x zoom.
 */
function VectorLetter({ char }: { char: string }) {
  return (
    <div className="relative w-[84px] h-[110px] sm:w-[116px] sm:h-[150px] flex items-center justify-center select-none">
      {/* Base Low-Opacity Vector */}
      <svg
        viewBox="0 0 100 130"
        className="w-full h-full overflow-visible"
        shapeRendering="geometricPrecision"
        textRendering="geometricPrecision"
      >
        <text
          x="50"
          y="106"
          textAnchor="middle"
          fill="rgba(255, 255, 255, 0.2)"
          className="font-sans font-black"
          style={{
            fontSize: "118px",
            fontWeight: 900,
            letterSpacing: "-0.05em",
          }}
        >
          {char}
        </text>
      </svg>

      {/* Pure White Liquid Fill Vector */}
      <svg
        viewBox="0 0 100 130"
        className="pl-fill w-full h-full overflow-visible absolute inset-0"
        shapeRendering="geometricPrecision"
        textRendering="geometricPrecision"
      >
        <text
          x="50"
          y="106"
          textAnchor="middle"
          fill="#FFFFFF"
          className="font-sans font-black"
          style={{
            fontSize: "118px",
            fontWeight: 900,
            letterSpacing: "-0.05em",
          }}
        >
          {char}
        </text>
      </svg>
    </div>
  );
}