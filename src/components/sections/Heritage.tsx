import Image from "next/image";
import Button from "@/components/ui/Button";
import { IMAGES, SITE } from "@/lib/site";

const FACTS = [
  { k: "Founded", v: String(SITE.foundingYear) },
  { k: "Capacity", v: "50,000 belts a month" },
  { k: "Standard lead time", v: "2 to 4 weeks" },
  { k: "Ships to", v: "USA, Europe, Middle East" },
] as const;

/** Answer-first block: the first paragraph is written to be quoted by search and AI answers. */
export default function Heritage() {
  return (
    <section className="relative py-12 md:py-24" aria-labelledby="who-title">
      <div className="wrap">
        <div className="glass overflow-hidden rounded-3xl">
          <div className="grid lg:grid-cols-12">
            <div className="p-8 md:p-16 lg:col-span-7">
              <h2 id="who-title" className="display h-lg text-bone max-w-[16ch]">
                A belt factory <b>with its own tannery.</b>
              </h2>
              <div className="prose-ss text-bone/80 mt-10 text-lg leading-relaxed">
                <p>
                  <strong className="text-bone font-medium">SS International is a leather belt manufacturer and exporter in Kanpur, India.</strong>{" "}
                  We supply bulk and private-label belts, dog collars and dog leashes to importers, wholesalers and
                  brands in the USA, Europe and the Middle East.
                </p>
                <p>
                  We started in 2009 trading and finishing leather in Kanpur, India&apos;s historic leather hub. As
                  demand grew we moved into dedicated belt making, so we could own quality, timelines and customisation
                  from raw hide to packed carton.
                </p>
              </div>
              <div className="mt-10">
                <Button href="/about-us" variant="ghost">
                  Our story
                </Button>
              </div>
            </div>

            <div className="relative min-h-80 lg:col-span-5">
              <Image
                src={IMAGES.about}
                alt="Leather craftsmanship at SS International"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          <dl className="border-bone/10 grid border-t sm:grid-cols-2 lg:grid-cols-4">
            {FACTS.map((f) => (
              <div key={f.k} className="border-bone/10 p-8 not-last:border-b sm:odd:border-r lg:border-b-0 lg:border-r lg:last:border-r-0">
                <dt className="text-stone text-sm">{f.k}</dt>
                <dd className="display mt-2 text-2xl text-bone">{f.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
