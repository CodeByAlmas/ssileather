"use client";

import { useState, useEffect } from "react";
import { TransitionLink } from "@/components/motion/TransitionProvider";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black/60 backdrop-blur-md border-b border-white/10 py-4"
            : "bg-gradient-to-b from-black/50 via-black/20 to-transparent py-6"
        }`}
      >
        <div className="max-w-[1560px] mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Logo with Banox Editorial Subtext in White */}
          <TransitionLink href="/" className="flex flex-col group">
            <span className="font-serif tracking-tight text-xl md:text-2xl font-bold uppercase text-white leading-none">
              SS INTERNATIONAL
            </span>
            <span className="text-[8px] md:text-[9px] font-sans tracking-[0.22em] uppercase text-white/70 mt-1">
              LEADING LEATHER GOODS MANUFACTURER
            </span>
          </TransitionLink>

          {/* Banox Nav Links (White with hover glow) */}
          <nav className="hidden lg:flex items-center space-x-8 text-[13px] font-medium tracking-wide text-white/85">
            <TransitionLink href="/products" className="hover:text-white transition-colors">
              Lookbook
            </TransitionLink>
            <TransitionLink href="/why-choose-us" className="hover:text-white transition-colors">
              Our approach
            </TransitionLink>
            <TransitionLink href="/manufacturing" className="hover:text-white transition-colors">
              Manufacturing
            </TransitionLink>
            <TransitionLink href="/responsibility" className="hover:text-white transition-colors">
              Responsibility
            </TransitionLink>
            <TransitionLink href="/about-us" className="hover:text-white transition-colors">
              About SSI
            </TransitionLink>
          </nav>

          {/* Banox Right Pill Action Buttons */}
          <div className="hidden sm:flex items-center space-x-3">
            <TransitionLink
              href="/#products"
              className="px-5 py-2.5 rounded-full border border-white/30 text-white text-xs font-medium tracking-wide backdrop-blur-sm hover:border-white transition-colors"
            >
              My brief (0)
            </TransitionLink>
            <TransitionLink
              href="/contact"
              className="px-6 py-2.5 rounded-full bg-white/20 hover:bg-white/30 text-white text-xs font-medium tracking-wide backdrop-blur-sm border border-white/30 transition-all flex items-center gap-1.5"
            >
              <span>Contact us</span>
              <span className="text-xs leading-none">↗</span>
            </TransitionLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Toggle Navigation"
          >
            <div className="w-6 h-4 flex flex-col justify-between">
              <span className={`h-0.5 bg-white transition-transform ${mobileOpen ? "rotate-45 translate-y-1.5" : ""}`} />
              <span className={`h-0.5 bg-white transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`h-0.5 bg-white transition-transform ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 bg-[#0e0e0e] pt-28 px-8 pb-10 flex flex-col justify-between transition-transform duration-500 lg:hidden ${
          mobileOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="space-y-6 font-serif text-2xl text-white">
          <TransitionLink href="/products" onClick={() => setMobileOpen(false)} className="block py-2">
            Lookbook
          </TransitionLink>
          <TransitionLink href="/why-choose-us" onClick={() => setMobileOpen(false)} className="block py-2">
            Our approach
          </TransitionLink>
          <TransitionLink href="/manufacturing" onClick={() => setMobileOpen(false)} className="block py-2">
            Manufacturing
          </TransitionLink>
          <TransitionLink href="/faqs" onClick={() => setMobileOpen(false)} className="block py-2">
            Responsibility & FAQs
          </TransitionLink>
        </div>
        <TransitionLink
          href="/contact"
          onClick={() => setMobileOpen(false)}
          className="w-full py-4 text-center rounded-full bg-white text-black text-sm font-semibold tracking-wide"
        >
          Contact us ↗
        </TransitionLink>
      </div>
    </>
  );
}