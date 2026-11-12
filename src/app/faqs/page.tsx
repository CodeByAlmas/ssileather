import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import FaqList from "@/components/sections/FaqList";
import Button from "@/components/ui/Button";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { FAQS, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Leather Belt Sourcing FAQs | Samples, MOQ, Lead Time",
  description:
    "Answers on leather types, customisation, quality standards, samples, lead times, MOQs and sustainability from SS International, a leather belt manufacturer in Kanpur, India.",
  alternates: { canonical: "/faqs" },
};

export default function FaqPage() {
  return (
    <>
      <JsonLd
        data={[
          faqSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "FAQs", path: "/faqs" },
          ]),
        ]}
      />
      <PageHero
        title="Questions, answered."
        lede={`Cannot find what you need? Email ${SITE.email} and the export team will reply.`}
      />
      <section className="wrap pb-28">
        <div className="bg-ink rounded-3xl p-6 md:p-14">
          <FaqList items={FAQS} />
          <div className="mt-14">
            <Button href="/contact">Ask us directly</Button>
          </div>
        </div>
      </section>
    </>
  );
}
