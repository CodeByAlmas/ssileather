"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function VideoStage() {
  const pathname = usePathname();
  const dim = useRef<HTMLDivElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const isHome = pathname === "/";

  useEffect(() => {
    const el = dim.current;
    if (!el) return;
    if (!isHome) {
      el.style.opacity = "0.78";
      return;
    }
    let raf = 0;
    const update = () => {
      const p = Math.min(window.scrollY / (window.innerHeight * 1.1), 1);
      el.style.opacity = String(0.15 + p * 0.45);
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [isHome]);

  // Guaranteed Seamless Continuous Loop Handling
  useEffect(() => {
    const v = video.current;
    if (!v) return;

    const playVideo = () => {
      v.play().catch(() => {
        // Autoplay policy fallback: mute and replay
        v.muted = true;
        v.play().catch(() => {});
      });
    };

    // Ensure loop triggers even if browser misses the native HTML5 loop attribute
    const handleEnded = () => {
      v.currentTime = 0;
      playVideo();
    };

    const onVis = () => {
      if (document.hidden) {
        v.pause();
      } else {
        playVideo();
      }
    };

    v.addEventListener("ended", handleEnded);
    document.addEventListener("visibilitychange", onVis);

    // Initial play trigger
    playVideo();

    return () => {
      v.removeEventListener("ended", handleEnded);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  return (
    <div className="stage fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
      <video
        ref={video}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        disablePictureInPicture
        tabIndex={-1}
        className="w-full h-full object-cover"
      >
        <source src="/videos/hero.webm" type="video/webm" />
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>
      <div
        ref={dim}
        className="stage-dim absolute inset-0 bg-black transition-opacity duration-300"
      />
    </div>
  );
}