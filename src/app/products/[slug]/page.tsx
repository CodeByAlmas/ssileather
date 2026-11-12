import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LeatherSwatch from "@/components/ui/LeatherSwatch";
import Button from "@/components/ui/Button";
import JsonLd from "@/components/seo/JsonLd";
import { TransitionLink } from "@/components/motion/TransitionProvider";
import { breadcrumbSchema, productSchema } from "@/lib/schema";
import { PRODUCTS, SITE, productBySlug } from "@/lib/site";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const p = productBySlug(slug);
  if (!p) return {};
  const title =
    p.group === "belts"
      ? `${p.name} Manufacturer & Bulk Supplier | SS International`
      : `${p.name} Manufacturer & Wholesale | SS International`;
  return {
    title,
    description: `${p.summary} Bulk and private-label supply from Kanpur, India. ${p.body.split(". ")[0]}.`.slice(0, 300),
    alternates: { canonical: `/products/${p.slug}` },
  };
}

const OPTIONS = [
  "Leather type and finish",
  "Colour and thread",
  "Buckle and hardware",
  "Logo embossing or debossing",
  "Size range",
  "Packing for your market",
];

export default async function ProductPage({ params }: { params: Params }) {
  const { slug } = await params;
  const p = productBySlug(slug);
  if (!p) notFound();

  const related = PRODUCTS.filter((x) => x.group === p.group && x.slug !== p.slug).slice(0, 3);

  return (
    <>
      <JsonLd
        data={[
          productSchema(p),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: p.group === "belts" ? "Belts" : "Accessories", path: "/#products" },
            { name: p.name, path: `/products/${p.slug}` },
          ]),
        ]}
      />
      <div className="wrap pt-40 pb-24 md:pt-48">
        <nav aria-label="Breadcrumb" className="text-stone mb-10 text-sm">
          <TransitionLink href="/" className="link-draw">Home</TransitionLink>
          <span className="mx-2">/</span>
          <TransitionLink href="/#products" className="link-draw">Products</TransitionLink>
          <span className="mx-2">/</span>
          <span className="text-bone" aria-current="page">{p.name}</span>
        </nav>

        <div className="grid items-start gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <h1 className="display h-xl text-bone">{p.name}</h1>
            <p className="lede mt-8">{p.body}</p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button href="/contact">Request a quote</Button>
              <Button href={`mailto:${SITE.email}?subject=${encodeURIComponent(p.name + " enquiry")}`} variant="ghost" icon={false}>
                Email us
              </Button>
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl">
              <LeatherSwatch
                slug={`pdp-${p.slug}`}
                tone={p.tone}
                stitch={p.stitch}
                variant={p.group === "belts" ? "belt" : "collar"}
                label={`${p.name} illustration`}
                className="h-full w-full"
              />
            </div>
          </div>
        </div>

        <section className="bg-ink mt-24 rounded-3xl p-8 md:p-14" aria-labelledby="opts-title">
          <h2 id="opts-title" className="display h-md text-bone">Made to your sample.</h2>
          <ul className="mt-10 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
            {OPTIONS.map((o) => (
              <li key={o} className="border-bone/15 text-bone/85 border-t py-4">{o}</li>
            ))}
          </ul>
          <p className="text-stone mt-8 max-w-[60ch]">
            Standard lead time is 2 to 4 weeks. Samples are available for a nominal fee, refundable on bulk order.
          </p>
        </section>

        <section className="mt-24" aria-labelledby="rel-title">
          <h2 id="rel-title" className="display h-md text-bone">More from this range.</h2>
          <ul className="mt-10 grid gap-6 md:grid-cols-3">
            {related.map((r) => (
              <li key={r.slug}>
                <TransitionLink href={`/products/${r.slug}`} className="group block">
                  <div className="aspect-[4/3] overflow-hidden rounded-xl">
                    <LeatherSwatch
                      slug={`rel-${r.slug}`}
                      tone={r.tone}
                      stitch={r.stitch}
                      variant={r.group === "belts" ? "belt" : "collar"}
                      label={`${r.name} illustration`}
                      className="h-full w-full transition-transform duration-1000 ease-[var(--ease-out-expo)] group-hover:scale-[1.07]"
                    />
                  </div>
                  <p className="text-bone group-hover:text-brass mt-4 text-lg font-medium transition-colors">{r.name}</p>
                  <p className="text-stone mt-1 text-sm">{r.summary}</p>
                </TransitionLink>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}
