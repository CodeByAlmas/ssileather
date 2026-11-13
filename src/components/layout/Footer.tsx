import { TransitionLink } from "@/components/motion/TransitionProvider";
import Year from "@/components/ui/Year";

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white pt-24 pb-12 overflow-hidden">
      <div className="max-w-[1560px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-24 border-b border-white/10">
          
          <div className="md:col-span-6">
            <h3 className="font-serif text-3xl md:text-4xl leading-snug max-w-md">
              Your next collection starts here.
            </h3>
            <p className="mt-4 text-neutral-400 text-sm max-w-sm leading-relaxed">
              Share a brief, explore an idea, or meet the people who will bring it to life.
            </p>
            <div className="mt-8 space-y-2 font-mono text-sm text-neutral-300">
              <p>info@ssileather.com</p>
              <p>Kanpur, Uttar Pradesh, India</p>
            </div>
          </div>

          <div className="md:col-span-3 space-y-3 text-sm text-neutral-400">
            <p className="font-mono text-xs uppercase tracking-widest text-white mb-4">Navigation</p>
            <TransitionLink href="/products" className="block hover:text-white transition-colors">Lookbook</TransitionLink>
            <TransitionLink href="/why-choose-us" className="block hover:text-white transition-colors">Our approach</TransitionLink>
            <TransitionLink href="/manufacturing" className="block hover:text-white transition-colors">Manufacturing</TransitionLink>
            <TransitionLink href="/responsibility" className="block hover:text-white transition-colors">Responsibility</TransitionLink>
          </div>

          <div className="md:col-span-3 space-y-3 text-sm text-neutral-400">
            <p className="font-mono text-xs uppercase tracking-widest text-white mb-4">Direct Contact</p>
            <TransitionLink href="/contact" className="block hover:text-white transition-colors">Your development brief</TransitionLink>
            <TransitionLink href="/contact" className="block hover:text-white transition-colors">Contact us</TransitionLink>
            <TransitionLink href="/why-choose-us" className="block hover:text-white transition-colors">Visit our factory</TransitionLink>
            <TransitionLink href="/faqs" className="block hover:text-white transition-colors">Compliance & Standards</TransitionLink>
          </div>
        </div>

        {/* Banox Ultra Large Screen-Width Nameplate */}
        <div className="pt-12 select-none overflow-hidden text-center">
          <div className="font-sans font-black text-[13vw] tracking-tighter uppercase text-white leading-none">
            SS INTERNATIONAL
          </div>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 font-mono">
            <span>From Kanpur, for the world.</span>
            <span>&copy; <Year /> SS INTERNATIONAL. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}