import Image from "next/image";

// Naye brands add karne ke liye bas yahan array me object add karte jao.
// 6-column Banox grid automatically adjust karega.
const CLIENTS = [
  // Row 1
  { name: "Cotnis", src: "/clients/cotnis.png", width: 130, height: 42 },
  { name: "Valentino", src: "/clients/valentino.png", width: 140, height: 44 },
  { name: "Alvaro Castagnino", src: "/clients/alvaro.png", width: 150, height: 46 },
  { name: "St. Valentine", src: "/clients/st-valentine.png", width: 135, height: 42 },
  { name: "Hunt India", src: "/clients/hunt.png", width: 145, height: 44 },
  // Placeholder slot for future brand (Banox 6-grid balance)
  // { name: "Brand Name", src: "/clients/brand.png", width: 140, height: 44 },
] as const;

export default function BrandsWall() {
  return (
    <section
      className="bg-white py-20 sm:py-24 md:py-32"
      aria-labelledby="brands-title"
      itemScope
      itemType="https://schema.org/Organization"
    >
      <meta itemProp="name" content="SS International" />
      <div className="max-w-[1560px] mx-auto px-6 sm:px-8 md:px-12">
        
        {/* Section Header (Banox Exact Alignment & Typography) */}
        <div className="pb-12 sm:pb-16 border-b border-neutral-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-7">
              <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-neutral-400 block mb-3 font-medium">
                THE COMPANY WE KEEP
              </span>
              <h2
                id="brands-title"
                className="font-sans font-black text-4xl sm:text-6xl md:text-7xl lg:text-[5rem] uppercase tracking-[-0.03em] text-neutral-950 leading-[0.92]"
              >
                IN GOOD <br className="hidden sm:inline" />
                COMPANY.
              </h2>
            </div>

            <div className="lg:col-span-5 space-y-3 font-sans text-neutral-600 text-sm sm:text-[15px] leading-relaxed max-w-lg lg:pb-1">
              <p>
                We manufacture for established fashion brands around the world.
              </p>
              <p>
                Each partnership starts with understanding what makes your brand different.
              </p>
            </div>
          </div>
        </div>

        {/* Clean Editorial Logo Grid (Banox 6-Column Format with Auto-Wrap) */}
        <div className="pt-12 sm:pt-16 pb-8">
          <div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-x-10 sm:gap-x-14 md:gap-x-16 gap-y-14 sm:gap-y-16 items-center justify-items-center"
            role="list"
            aria-label="Partner and client brands"
          >
            {CLIENTS.map((client) => (
              <div
                key={client.name}
                role="listitem"
                itemProp="sponsor"
                itemScope
                itemType="https://schema.org/Brand"
                className="group w-full flex items-center justify-center p-2"
              >
                <meta itemProp="name" content={client.name} />
                <div className="relative h-10 sm:h-12 w-full max-w-[160px] flex items-center justify-center">
                  <Image
                    src={client.src}
                    alt={`${client.name} official brand logo`}
                    width={client.width}
                    height={client.height}
                    sizes="(max-width: 640px) 130px, (max-width: 1024px) 150px, 160px"
                    loading="lazy"
                    className="h-8 sm:h-9 md:h-10 w-auto max-w-[150px] object-contain grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 ease-out select-none"
                  />
                </div>
              </div>
            ))}

            {/* Optional subtle placeholder slot for future incoming clients */}
            {CLIENTS.length % 6 !== 0 && (
              <div className="hidden xl:flex items-center justify-center w-full h-12 opacity-0 pointer-events-none select-none">
                <span className="font-mono text-[10px] text-neutral-300 tracking-widest uppercase">
                  Future Client Slot
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Bottom subtle border matching Banox row break */}
        <div className="border-b border-neutral-100 mt-8" />
      </div>
    </section>
  );
}