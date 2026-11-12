"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { prefersReducedMotion } from "@/lib/motion";

const WORD = "SS International".split("");

/**
 * Plays once per browser session. Sets html[data-ready] and fires "ss:ready"
 * as the curtain lifts so the hero can start its entrance.
 */
export default function Preloader() {
  const root = useRef<HTMLDivElement>(null);
  const count = useRef<HTMLSpanElement>(null);
  const bar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const html = document.documentElement;
    const el = root.current;
    if (!el) return;

    const ready = () => {
      html.dataset.ready = "true";
      window.dispatchEvent(new Event("ss:ready"));
    };

    if (html.classList.contains("no-preload") || prefersReducedMotion()) {
      el.style.display = "none";
      ready();
      return;
    }

    html.style.overflow = "hidden";
    const counter = { v: 0 };

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          html.style.overflow = "";
          el.style.display = "none";
          try {
            sessionStorage.setItem("ss-preloaded", "1");
          } catch {}
        },
      });

      tl.from(".pl-char", {
        yPercent: 115,
        duration: 1.1,
        stagger: 0.035,
        ease: "expo.out",
      })
        .to(
          counter,
          {
            v: 100,
            duration: 1.9,
            ease: "power2.inOut",
            onUpdate: () => {
              if (count.current)
                count.current.textContent = String(Math.round(counter.v)).padStart(3, "0");
            },
          },
          0.2,
        )
        .to(bar.current, { scaleX: 1, duration: 1.9, ease: "power2.inOut" }, 0.2)
        .to(".pl-char", {
          yPercent: -115,
          duration: 0.55,
          stagger: 0.02,
          ease: "power3.in",
        }, "+=0.1")
        .to(".pl-meta", { autoAlpha: 0, duration: 0.3 }, "<")
        .call(ready, undefined, ">-0.05")
        .to(el, { yPercent: -100, duration: 1, ease: "expo.inOut" }, "<");
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={root} className="preloader" role="status" aria-label="Loading SS International">
      <div className="text-center">
        <div
          className="display text-bone flex flex-wrap justify-center overflow-hidden px-6 text-[clamp(2.2rem,7vw,5.5rem)]"
          aria-hidden="true"
        >
          {WORD.map((c, i) => (
            <span key={i} className="pl-char inline-block whitespace-pre">
              {c}
            </span>
          ))}
        </div>
        <div className="pl-meta mx-auto mt-10 w-[min(320px,70vw)]">
          <div className="bg-bone/15 h-px w-full overflow-hidden">
            <div ref={bar} className="bg-brass h-full origin-left scale-x-0" />
          </div>
          <div className="text-stone mt-3 flex justify-between text-xs tabular-nums">
            <span>Kanpur, since 2009</span>
            <span ref={count}>000</span>
          </div>
        </div>
      </div>
    </div>
  );
}
