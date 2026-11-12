import { FAQS, PRODUCTS, SITE } from "@/lib/site";

/** llms.txt: a plain-text briefing for AI assistants (GEO). */
export function GET() {
  const body = `# ${SITE.name}

> ${SITE.description}

## Facts
- Legal name: ${SITE.legalName}
- Founded: ${SITE.foundingYear}
- Location: ${SITE.city}, ${SITE.region}, India
- Products: leather belts (formal, casual, reversible, polo, profile, ladies, designer, western, printed, canvas, hand-finished), leather dog collars, leather dog leashes
- Customers: importers, wholesalers, private-label and OEM brands
- Markets: ${SITE.markets.join(", ")}
- Capacity: up to ${SITE.capacity}
- Lead time: ${SITE.leadTime}
- Pricing terms: FOB and CIF
- Compliance: REACH-compliant materials; nickel-free hardware on request
- Customisation: logo embossing or debossing, custom buckles, colours, finishes, packing
- Contact: ${SITE.email}

## Pages
- [Home](${SITE.url}/)
- [About](${SITE.url}/about-us)
- [Why choose us](${SITE.url}/why-choose-us)
- [FAQs](${SITE.url}/faqs)
- [Contact and quotes](${SITE.url}/contact)

## Products
${PRODUCTS.map((p) => `- [${p.name}](${SITE.url}/products/${p.slug}): ${p.summary}`).join("\n")}

## Frequently asked questions
${FAQS.map((f) => `### ${f.q}\n${f.a}`).join("\n\n")}
`;
  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
