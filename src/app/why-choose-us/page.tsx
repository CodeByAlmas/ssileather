import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/sections/PageHero";
import Button from "@/components/ui/Button";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { IMAGES } from "@/lib/site";

export const metadata: Metadata = {
  title: "Why Choose SS International | REACH-Compliant Leather Belt Supplier",
  description:
    "REACH-compliant materials, on-time delivery, consistent leather quality, FOB/CIF pricing, capacity of 50,000 belts a month and flexible MOQs for trial orders.",
  alternates: { canonical: "/why-choose-us" },
};

const REASONS = [
  { t: "REACH-compliant materials", b: "All leathers and components follow international chemical safety standards. We keep strict control over tanning, finishing and material sourcing so products meet REACH and global compliance requirements.", img: IMAGES.reach },
  { t: "On-time delivery", b: "Structured production planning and quality checkpoints keep schedules reliable. Clear communication and realistic lead times let you plan without surprises.", img: IMAGES.delivery },
  { t: "Best craftsmanship", b: "Precise cutting and stitching, clean edge finishing and secure hardware fitting. The result is consistent, durable and well finished.", img: IMAGES.craft },
  { t: "Consistent leather quality", b: "In-house tanning and finishing keep thickness, colour stability and hand feel uniform across batches, so repeat orders match approved samples.", img: IMAGES.quality },
  { t: "Stable pricing with FOB and CIF clarity", b: "Transparent pricing with clear FOB and CIF options, based on leather type, hardware and volume.", img: IMAGES.pricing },
  { t: "Reliable additional capacity", b: "We support regular programmes and extra peak-season volume, with capacity of up to 50,000 belts per month as a primary or backup partner.", img: IMAGES.capacity },
  { t: "Seasonal developments", b: "New styles each season, with updated finishes, emboss patterns and buckle combinations to support fresh launches.", img: IMAGES.seasonal },
  { t: "Flexible MOQs for trials", b: "Test a new design or pilot programme with a flexible minimum order before scaling up.", img: IMAGES.moq },
];

export default function WhyPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Why choose us", path: "/why-choose-us" },
        ])}
      />
      <PageHero
        title="Why buyers choose us."
        lede="Eight practical reasons importers, wholesalers and brands place repeat orders with SS International."
      />
      <section className="wrap pb-28">
        <ul className="grid gap-6 md:grid-cols-2">
          {REASONS.map((r) => (
            <li key={r.t} className="bg-hide border-bone/10 overflow-hidden rounded-2xl border">
              <div className="relative aspect-[2/1]">
                <Image src={r.img} alt="" fill sizes="(min-width:768px) 50vw, 100vw" className="object-cover" />
              </div>
              <div className="p-8 md:p-10">
                <h2 className="display text-bone text-3xl">{r.t}</h2>
                <p className="text-bone/75 mt-3 max-w-[56ch] leading-relaxed">{r.b}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-16">
          <Button href="/contact">Request a quote</Button>
        </div>
      </section>
    </>
  );
}
