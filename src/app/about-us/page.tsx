import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/sections/PageHero";
import Button from "@/components/ui/Button";
import JsonLd from "@/components/seo/JsonLd";
import { aboutSchema, breadcrumbSchema } from "@/lib/schema";
import { GROUP, IMAGES, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "About SS International | Leather Belt Manufacturer in Kanpur",
  description:
    "SS International is a Kanpur-based leather belt manufacturer and exporter, founded in 2009. In-house tanning, cutting, stitching and finishing for bulk and private-label buyers.",
  alternates: { canonical: "/about-us" },
};

const blocks = [
  {
    title: "What we make",
    body: "We focus on leather belts, which lets us keep precision and consistency across bulk orders.",
    list: [
      "Formal leather belts",
      "Casual and fashion belts",
      "Reversible and profile belts",
      "Ladies' leather belts",
      "Designer, printed and western belts",
      "Utility and canvas-combined belts",
    ],
  },
  {
    title: "How we make it",
    body: "Production is built for volume with steady output. Each belt is inspected before it ships.",
    list: [
      "In-house cutting, stitching, finishing and packing",
      "Skilled workforce with hands-on belt experience",
      "Defined quality checkpoints in the workflow",
      "Capacity for regular bulk and repeat orders",
    ],
  },
  {
    title: "Quality and compliance",
    body: "Our aim is bulk orders that match the approved sample, not only samples that impress.",
    list: [
      "Careful selection of leather grades and finishes",
      "Attention to thickness, edge finishing, stitching and hardware fit",
      "Compliance-ready materials, including nickel-free hardware where required",
      "Final inspection for consistency across shipments",
    ],
  },
  {
    title: "Export and private label",
    body: "We work with importers, distributors, wholesale buyers, private-label and OEM brands, and handle export documentation and production timelines.",
    list: [
      "Logo embossing or debossing",
      "Custom buckle selection and finishes",
      "Colour and leather finish customisation",
      "Packing tailored to each market",
    ],
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={[
          aboutSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "About", path: "/about-us" },
          ]),
        ]}
      />
      <PageHero
        title="Our story."
        lede={`${SITE.legalName} is an India-based manufacturer and exporter of premium leather belts and accessories. We work from Kanpur, India's historic leather hub, and supply buyers across the USA, Europe and the Middle East.`}
      />

      <section className="wrap pb-24">
        <div className="glass overflow-hidden rounded-3xl">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 md:p-16">
              <h2 className="display h-md text-bone">Since 2009.</h2>
              <div className="prose-ss text-bone/80 mt-8 text-lg leading-relaxed">
                <p>
                  We began by sourcing and finishing quality leather. With growing demand and deeper experience, we
                  moved into dedicated belt manufacturing, which gave us full control over quality, timelines and
                  customisation.
                </p>
                <p>
                  Today we are an export-oriented supplier serving importers, wholesalers and private-label brands.
                  Our values are simple: focused specialisation, long-term partnerships, transparent communication and
                  reliable delivery.
                </p>
              </div>
            </div>
            <div className="relative min-h-80">
              <Image src={IMAGES.about} alt="SS International craftsmanship" fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink py-24 md:py-32">
        <div className="wrap grid gap-x-12 gap-y-20 md:grid-cols-2">
          {blocks.map((b) => (
            <div key={b.title}>
              <h2 className="display h-md text-bone">{b.title}</h2>
              <p className="text-bone/75 mt-4 max-w-[52ch] text-lg">{b.body}</p>
              <ul className="border-bone/15 mt-8 border-t">
                {b.list.map((li) => (
                  <li key={li} className="border-bone/15 text-bone/85 border-b py-3">
                    {li}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 md:py-32" aria-labelledby="group-title">
        <div className="wrap">
          <div className="glass rounded-3xl p-8 md:p-16">
            <h2 id="group-title" className="display h-md text-bone">
              The SS Group.
            </h2>
            <ul className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
              {GROUP.map((g) => (
                <li key={g.name} className="border-bone/15 border-t pt-5">
                  <h3 className="text-bone text-xl font-medium">{g.name}</h3>
                  <p className="text-bone/70 mt-2 leading-relaxed">{g.body}</p>
                  {"href" in g && (
                    <a href={g.href} target="_blank" rel="noopener noreferrer" className="link-draw text-brass mt-4 inline-block">
                      Visit site
                    </a>
                  )}
                </li>
              ))}
            </ul>
            <div className="mt-14">
              <Button href="/contact">Request samples or a quote</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
