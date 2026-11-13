import Image from "next/image";

// Naye brands add karne ke liye bas yahan array me object add karte jao.
// Conveyor belt marquee automatically seamless loop me adjust kar lega.
const CLIENTS = [
  { name: "Cotnis", src: "/clients/cotnis.png", width: 220, height: 80 },
  { name: "Valentino", src: "/clients/valentino.png", width: 230, height: 84 },
  { name: "Alvaro Castagnino", src: "/clients/alvaro.png", width: 250, height: 88 },
  { name: "St. Valentine", src: "/clients/st-valentine.png", width: 225, height: 80 },
  { name: "Hunt India", src: "/clients/hunt.png", width: 240, height: 84 },
] as const;

export default function BrandsWall() {
  // Seamless infinite conveyor loop ke liye list ko duplicate kiya gaya hai
  const MARQUEE_ITEMS = [...CLIENTS, ...CLIENTS];

  return (
    <section
      className="bg-white py-20 sm:py-24 md:py-32 overflow-hidden"
      aria-labelledby="brands-title"
      itemScope
      itemType="https://schema.org/Organization"
    >
      <meta itemProp="name" content="SS International" />
      <div className="max-w-[1560px] mx-auto px-6 sm:px-8 md:px-12">
        
        {/* Section Header (Banox Font & Layout Proportions with Original SSI Copy) */}
        <div className="pb-12 sm:pb-16 border-b border-neutral-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-7">
              <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-neutral-400 block mb-3 font-medium">
                GLOBAL RETAIL &amp; PRIVATE LABEL PARTNERS
              </span>
              <h2
                id="brands-title"
                className="font-sans font-black text-4xl sm:text-6xl md:text-7xl lg:text-[5rem] uppercase tracking-[-0.03em] text-neutral-950 leading-[0.92]"
              >
                TRUSTED BY <br className="hidden sm:inline" />
                LEADING LABELS.
              </h2>
            </div>

            <div className="lg:col-span-5 space-y-3 font-sans text-neutral-600 text-sm sm:text-[15px] leading-relaxed max-w-lg lg:pb-1">
              <p>
                From European fashion houses to heritage retail labels, we craft export-grade leather belts and accessories at scale.
              </p>
              <p>
                Every production run is tailored to your brand&apos;s exact hide specifications, hardware finishes, and compliance standards.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Full-Width Conveyor Belt Logo Marquee (Enlarged & Full Color) */}
      <div className="relative pt-14 sm:pt-18 pb-10">
        {/* Left & Right Soft Edge Fade Masks */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-24 md:w-36 bg-gradient-to-r from-white to-transparent z-10"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-24 md:w-36 bg-gradient-to-l from-white to-transparent z-10"
          aria-hidden="true"
        />

        <div
          className="marquee w-full overflow-hidden"
          role="region"
          aria-label="Partner and client brand logos conveyor"
        >
          <div className="marquee-track flex items-center gap-14 sm:gap-20 md:gap-28 pr-14 sm:pr-20 md:pr-28">
            {MARQUEE_ITEMS.map((client, idx) => {
              const isDuplicate = idx >= CLIENTS.length;
              return (
                <div
                  key={`${client.name}-${idx}`}
                  {...(!isDuplicate && {
                    itemProp: "sponsor",
                    itemScope: true,
                    itemType: "https://schema.org/Brand",
                  })}
                  aria-hidden={isDuplicate}
                  className="shrink-0 flex items-center justify-center px-2 py-2 transition-transform duration-300 ease-out hover:scale-105"
                >
                  {!isDuplicate && <meta itemProp="name" content={client.name} />}
                  <div className="relative h-14 sm:h-16 md:h-20 w-[160px] sm:w-[200px] md:w-[230px] flex items-center justify-center">
                    <Image
                      src={client.src}
                      alt={isDuplicate ? "" : `${client.name} — SS International client brand`}
                      width={client.width}
                      height={client.height}
                      sizes="(max-width: 640px) 160px, (max-width: 1024px) 200px, 230px"
                      loading="lazy"
                      className="h-12 sm:h-14 md:h-16 w-auto max-w-[220px] object-contain opacity-100 select-none"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom Rule Aligned with Container */}
      <div className="max-w-[1560px] mx-auto px-6 sm:px-8 md:px-12">
        <div className="border-b border-neutral-200 mt-4" />
      </div>
    </section>
  );
}