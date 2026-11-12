"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  type ComponentProps,
  type MouseEvent,
  type ReactNode,
} from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import gsap from "gsap";
import { getLenis } from "@/lib/lenis";
import { prefersReducedMotion } from "@/lib/motion";

type Ctx = { navigate: (href: string) => void };
const TransitionCtx = createContext<Ctx>({ navigate: () => {} });

export const usePageTransition = () => useContext(TransitionCtx);

/**
 * Page transition: a leather-coloured curtain wipes up over the page,
 * the route changes underneath, then the curtain exits off the top.
 */
export function TransitionProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const curtain = useRef<HTMLDivElement>(null);
  const mark = useRef<HTMLDivElement>(null);
  const lastPath = useRef(pathname);
  const state = useRef<{ busy: boolean; timer?: number }>({ busy: false });

  const reveal = useCallback(() => {
    const el = curtain.current;
    if (!el) return;
    window.clearTimeout(state.current.timer);
    window.scrollTo(0, 0);
    getLenis()?.scrollTo(0, { immediate: true, force: true });
    gsap.to(mark.current, { autoAlpha: 0, duration: 0.25 });
    gsap.to(el, {
      yPercent: -200,
      duration: 0.85,
      delay: 0.12,
      ease: "expo.inOut",
      onComplete: () => {
        gsap.set(el, { yPercent: 0 });
        state.current.busy = false;
      },
    });
  }, []);

  // Route actually changed: lift the curtain.
  useEffect(() => {
    if (pathname === lastPath.current) return;
    lastPath.current = pathname;
    if (state.current.busy) reveal();
  }, [pathname, reveal]);

  const navigate = useCallback(
    (href: string) => {
      const s = state.current;
      if (s.busy) return;
      const url = new URL(href, window.location.href);
      const samePage = url.pathname === window.location.pathname;

      if (samePage) {
        const target = url.hash ? document.querySelector(url.hash) : null;
        const lenis = getLenis();
        if (target instanceof HTMLElement) {
          if (lenis) lenis.scrollTo(target, { offset: -72 });
          else target.scrollIntoView({ behavior: "smooth" });
          history.replaceState(null, "", url.hash);
        } else if (lenis) lenis.scrollTo(0);
        else window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      if (prefersReducedMotion()) {
        router.push(href);
        return;
      }

      s.busy = true;
      gsap.to(mark.current, { autoAlpha: 1, duration: 0.4, delay: 0.3 });
      gsap.to(curtain.current, {
        yPercent: -100,
        duration: 0.75,
        ease: "expo.inOut",
        onComplete: () => {
          router.push(href);
          // Safety net: never leave the curtain stuck if navigation stalls.
          s.timer = window.setTimeout(reveal, 3500);
        },
      });
    },
    [router, reveal],
  );

  return (
    <TransitionCtx.Provider value={{ navigate }}>
      {children}
      <div ref={curtain} className="curtain" aria-hidden="true">
        <div
          ref={mark}
          className="invisible absolute inset-0 grid place-items-center opacity-0"
        >
          <span className="display text-bone/90 text-5xl">SS</span>
        </div>
      </div>
    </TransitionCtx.Provider>
  );
}

type LinkProps = ComponentProps<typeof Link>;

export function TransitionLink({ href, onClick, children, ...rest }: LinkProps) {
  const { navigate } = usePageTransition();

  const handle = (e: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);
    if (
      e.defaultPrevented ||
      e.button !== 0 ||
      e.metaKey ||
      e.ctrlKey ||
      e.shiftKey ||
      e.altKey ||
      rest.target === "_blank"
    )
      return;
    e.preventDefault();
    navigate(typeof href === "string" ? href : (href.pathname ?? "/"));
  };

  return (
    <Link href={href} onClick={handle} {...rest}>
      {children}
    </Link>
  );
}
