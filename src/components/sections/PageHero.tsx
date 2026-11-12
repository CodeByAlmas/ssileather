import type { ReactNode } from "react";
import BoldTail from "@/components/ui/BoldTail";

export default function PageHero({
  title,
  lede,
  children,
}: {
  title: string;
  lede?: string;
  children?: ReactNode;
}) {
  return (
    <header className="wrap pt-44 pb-16 md:pt-56 md:pb-24">
      <h1 className="display h-xl text-bone max-w-[14ch]"><BoldTail text={title} /></h1>
      {lede && <p className="lede mt-8">{lede}</p>}
      {children}
    </header>
  );
}
