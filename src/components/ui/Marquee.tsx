import Image from "next/image";

export type MarqueeLogo = {
  name: string;
  src: string;
};

type MarqueeProps = {
  items?: readonly string[];
  logos?: readonly MarqueeLogo[];
  speed?: string;
};

export default function Marquee({ items, logos }: MarqueeProps) {
  if (logos && logos.length > 0) {
    const logoRow = (hidden: boolean) => (
      <ul className="flex shrink-0 items-center gap-16 md:gap-24 px-8" aria-hidden={hidden || undefined}>
        {logos.map((logo, idx) => (
          <li key={`${logo.name}-${idx}`} className="flex shrink-0 items-center justify-center">
            <div className="relative h-8 md:h-10 w-28 md:w-36 flex items-center justify-center">
              <Image
                src={logo.src}
                alt={logo.name}
                fill
                sizes="(max-width: 768px) 112px, 144px"
                className="object-contain brightness-0 invert opacity-60 hover:opacity-100 transition-opacity duration-300 mix-blend-screen"
              />
            </div>
          </li>
        ))}
      </ul>
    );

    return (
      <div className="marquee overflow-hidden py-2" role="region" aria-label="Client Trust Marquee">
        <div className="marquee-track flex">
          {logoRow(false)}
          {logoRow(true)}
          {logoRow(true)}
        </div>
      </div>
    );
  }

  // Fallback to text items if passed
  const row = (hidden: boolean) => (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {items?.map((t) => (
        <li key={t} className="flex items-center">
          <span className="display text-bone/90 px-10 text-[clamp(1.25rem,2.2vw,2rem)] whitespace-nowrap">
            {t}
          </span>
          <svg viewBox="0 0 12 12" className="text-brass h-2.5 w-2.5 shrink-0" aria-hidden="true">
            <path d="M6 0l1.6 4.4L12 6 7.6 7.6 6 12 4.4 7.6 0 6l4.4-1.6z" fill="currentColor" />
          </svg>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="marquee overflow-hidden" role="region" aria-label="Capabilities">
      <div className="marquee-track flex">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}