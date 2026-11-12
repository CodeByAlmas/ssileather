import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import InquiryForm from "@/components/sections/InquiryForm";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema, contactSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact SS International | Request a Leather Belt Quote",
  description:
    "Request a quote or samples for bulk and private-label leather belts, dog collars and leashes. SS International, Kanpur, India. Email info@ssileather.com.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={[
          contactSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
        ]}
      />
      <PageHero
        title="Request a quote."
        lede="Tell us the style, quantity and market. We reply with pricing terms and a sample plan."
      />
      <section className="wrap pb-28">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="bg-ink rounded-3xl p-8 md:p-12 lg:col-span-8">
            <InquiryForm />
          </div>
          <aside className="glass rounded-3xl p-8 md:p-10 lg:col-span-4 lg:self-start" aria-label="Contact details">
            <h2 className="display text-bone text-3xl">Direct</h2>
            <dl className="mt-8 space-y-6">
              <div>
                <dt className="text-stone text-sm">Email</dt>
                <dd>
                  <a href={`mailto:${SITE.email}`} className="link-draw text-bone text-lg">
                    {SITE.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-stone text-sm">Based in</dt>
                <dd className="text-bone text-lg">
                  {SITE.city}, {SITE.region}, India
                </dd>
              </div>
              <div>
                <dt className="text-stone text-sm">Typical lead time</dt>
                <dd className="text-bone text-lg">2 to 4 weeks</dd>
              </div>
              <div>
                <dt className="text-stone text-sm">Social</dt>
                <dd className="mt-1 flex flex-wrap gap-x-5 gap-y-1">
                  {Object.entries(SITE.socials).map(([k, v]) => (
                    <a key={k} href={v} target="_blank" rel="noopener noreferrer" className="link-draw text-bone capitalize">
                      {k}
                    </a>
                  ))}
                </dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>
    </>
  );
}
