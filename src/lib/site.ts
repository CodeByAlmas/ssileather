/**
 * Single source of truth for everything extracted from https://ssileather.com/
 * Update here and every page, schema, sitemap and llms.txt follows.
 */

export const SITE = {
  name: "SS International",
  legalName: "SS INTERNATIONAL",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://ssileather.com",
  tagline: "Leather belts and accessories for global buyers",
  description:
    "SS International is a leather belt manufacturer and exporter in Kanpur, India. We supply bulk and private-label leather belts, dog collars and dog leashes to importers, wholesalers and brands in the USA, Europe and the Middle East.",
  foundingYear: 2009,
  email: "info@ssileather.com",
  city: "Kanpur",
  region: "Uttar Pradesh",
  country: "IN",
  capacity: "50,000 belts per month",
  leadTime: "2 to 4 weeks for standard orders",
  socials: {
    facebook: "https://www.facebook.com/232076240558975",
    instagram: "https://www.instagram.com/ssileather",
    linkedin: "https://www.linkedin.com/company/ss-international-co/",
    pinterest: "https://www.pinterest.com/ssileather",
  },
  markets: ["USA", "Europe", "Middle East"],
} as const;

const WSIMG =
  "https://img1.wsimg.com/isteam/ip/d14c21d6-7bb0-4e88-8bb9-c6cdbe3a7efb";

export const IMAGES = {
  about: `${WSIMG}/ChatGPT%20Image%20Feb%2011%2C%202026%2C%2008_29_53%20PM.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1200,cg:true`,
  og: `${WSIMG}/ChatGPT%20Image%20Jul%2025%2C%202026%2C%2008_22_23%20PM.png`,
  reach: `${WSIMG}/blob-b9f68a7.png/:/cr=t:25%25,l:0%25,w:100%25,h:50%25/rs=w:900,h:450,cg:true`,
  delivery: `${WSIMG}/blob-d389d88.png/:/cr=t:25%25,l:0%25,w:100%25,h:50%25/rs=w:900,h:450,cg:true`,
  craft: `${WSIMG}/blob-db0798a.png/:/cr=t:25%25,l:0%25,w:100%25,h:50%25/rs=w:900,h:450,cg:true`,
  quality: `${WSIMG}/blob-b40872f.png/:/cr=t:25%25,l:0%25,w:100%25,h:50%25/rs=w:900,h:450,cg:true`,
  pricing: `${WSIMG}/blob-52b6efa.png/:/cr=t:25%25,l:0%25,w:100%25,h:50%25/rs=w:900,h:450,cg:true`,
  capacity: `${WSIMG}/blob-614c341.png/:/cr=t:25%25,l:0%25,w:100%25,h:50%25/rs=w:900,h:450,cg:true`,
  seasonal: `${WSIMG}/blob-b4435ef.png/:/cr=t:25%25,l:0%25,w:100%25,h:50%25/rs=w:900,h:450,cg:true`,
  moq: `${WSIMG}/blob-5a31b0c.png/:/cr=t:25%25,l:0%25,w:100%25,h:50%25/rs=w:900,h:450,cg:true`,
} as const;

export type Product = {
  slug: string;
  name: string;
  group: "belts" | "accessories";
  summary: string;
  body: string;
  tone: string; // leather swatch colour
  stitch: string; // stitch colour
};

export const PRODUCTS: Product[] = [
  {
    slug: "polo-belt",
    name: "Polo belts",
    group: "belts",
    summary: "Genuine leather with bold coloured thread, a global favourite.",
    body: "Polo belts are cut from genuine leather and finished with vibrant thread by skilled stitchers. They are durable, easy to style and sell well across markets. Available in custom colours and sizes for bulk buyers, wholesalers and retailers.",
    tone: "#6B3E26",
    stitch: "#D9B26A",
  },
  {
    slug: "one-side-belt",
    name: "One-side belts",
    group: "belts",
    summary: "Single-sided belts for everyday formal and casual wear.",
    body: "One-side belts are made for buyers who want a clean, single-faced belt at consistent quality. Leather grade, thickness, edge finish and buckle can be matched to your approved sample.",
    tone: "#3A2418",
    stitch: "#B98B52",
  },
  {
    slug: "ladies",
    name: "Ladies belts",
    group: "belts",
    summary: "Fashion and dress belts in ladies' widths and finishes.",
    body: "Our ladies' range covers slim dress belts and wider fashion styles. Colours, finishes, emboss patterns and buckle combinations are developed each season to support new product launches.",
    tone: "#8A4B3A",
    stitch: "#EBD9B8",
  },
  {
    slug: "reversible-belts",
    name: "Reversible belts",
    group: "belts",
    summary: "Two colours in one belt, with a rotating buckle.",
    body: "Reversible belts give your customers two looks from one product. We control thickness and edge finishing so both faces stay flat and clean through the buckle turn, batch after batch.",
    tone: "#2B1B12",
    stitch: "#C79A5B",
  },
  {
    slug: "formal-profile-belt",
    name: "Formal profile belts",
    group: "belts",
    summary: "Structured profile belts for office and dress wear.",
    body: "Formal profile belts use clean, structured profiles with precise stitching and secure hardware fitting. Nickel-free hardware is available where your market requires it.",
    tone: "#1E140E",
    stitch: "#8C6B43",
  },
  {
    slug: "printed-belt",
    name: "Printed belts",
    group: "belts",
    summary: "Printed and embossed surfaces for seasonal collections.",
    body: "Printed belts let you launch a pattern or a seasonal story without changing the build. Print, emboss and finish options are shown as samples before bulk production starts.",
    tone: "#7A5230",
    stitch: "#E6C98A",
  },
  {
    slug: "profile-belt",
    name: "Profile belts",
    group: "belts",
    summary: "Premium profile belts balancing strength and refined style.",
    body: "Profile belts are made from genuine leather with clean, structured profiles. They suit both formal and casual wear. Finishes, sizes and design options can be tailored for bulk buyers, wholesalers and retailers worldwide.",
    tone: "#4A2C1B",
    stitch: "#C9A56B",
  },
  {
    slug: "hand-finished",
    name: "Hand-finished belts",
    group: "belts",
    summary: "Edges, burnishing and detailing completed by hand.",
    body: "Hand-finished belts get extra attention at the edge and surface. This is where our craftsmanship shows most: clean edge finishing, even colour and a hand feel that repeats across production batches.",
    tone: "#5C3720",
    stitch: "#D2A862",
  },
  {
    slug: "designer-belt",
    name: "Designer belts",
    group: "belts",
    summary: "Fashion-led belts developed from your sketch.",
    body: "Our in-house development team turns hand-drawn concepts into production-ready samples. Designer belts cover custom buckles, emboss patterns and finishes for private-label and OEM brands.",
    tone: "#2F1E16",
    stitch: "#E2BE7C",
  },
  {
    slug: "western-belt",
    name: "Western belts",
    group: "belts",
    summary: "Heavier belts with western detailing and buckles.",
    body: "Western belts use heavier leather with decorative detailing and statement buckles. Buckle selection and finishes can be customised for your market.",
    tone: "#6A3B22",
    stitch: "#CFA05F",
  },
  {
    slug: "canvas-belt",
    name: "Canvas belts",
    group: "belts",
    summary: "Utility belts combining canvas with leather trim.",
    body: "Canvas belts combine woven canvas with leather ends and hardware for a lighter, everyday utility look. Colours and hardware are matched to your approved sample.",
    tone: "#6E6A52",
    stitch: "#2A241A",
  },
  {
    slug: "dog-collars",
    name: "Dog collars",
    group: "accessories",
    summary: "Strong, comfortable leather collars for retail and private label.",
    body: "Premium leather dog collars that combine everyday comfort with expert craftsmanship. We supply strong, stylish and durable collars for retail, private label and wholesale programmes.",
    tone: "#4D2C1A",
    stitch: "#D8B46F",
  },
  {
    slug: "dog-leaches-1",
    name: "Dog leashes",
    group: "accessories",
    summary: "Leather leashes that match our collar range.",
    body: "Leather dog leashes made with the same leather, stitching and hardware standards as our belts and collars. Sets can be built with matching collars for your brand.",
    tone: "#3B2216",
    stitch: "#C49A5A",
  },
];

export const BELT_STYLES = PRODUCTS.filter((p) => p.group === "belts");
export const ACCESSORIES = PRODUCTS.filter((p) => p.group === "accessories");

export const FEATURES = [
  {
    title: "REACH-compliant materials",
    body: "Leathers and components follow international chemical safety standards. We keep tight control over tanning, finishing and material sourcing, so your product meets REACH and global compliance requirements.",
    image: IMAGES.reach,
  },
  {
    title: "Consistent leather quality",
    body: "In-house tanning and finishing keep thickness, colour and hand feel uniform across batches. Repeat orders match the sample you approved.",
    image: IMAGES.quality,
  },
  {
    title: "Capacity for peak season",
    body: "Up to 50,000 belts per month, whether we are your main factory or your backup when volumes spike.",
    image: IMAGES.capacity,
  },
  {
    title: "Clear pricing, FOB or CIF",
    body: "Pricing is based on leather type, hardware and volume, with clear FOB and CIF options so you can plan costs without surprises.",
    image: IMAGES.pricing,
  },
] as const;

export const PROCESS = [
  { title: "Sketch", body: "Your drawing or reference goes to our in-house development team." },
  { title: "Sample", body: "We cut a production-ready sample in premium leather from our own facility. Samples are refundable on bulk order." },
  { title: "Make", body: "Cutting, stitching, finishing and hardware fitting, with defined quality checkpoints." },
  { title: "Inspect and ship", body: "Every belt is inspected before dispatch. We handle export documentation for FOB or CIF." },
] as const;

export const FAQS = [
  {
    q: "What types of leather do you use?",
    a: "We use full-grain, top-grain, genuine and bonded leather, sourced from trusted suppliers for quality and durability.",
  },
  {
    q: "Are your products customizable?",
    a: "Yes. We customise design, size, colour, embossing and hardware, including logo embossing or debossing for private-label orders.",
  },
  {
    q: "Do your products meet international quality standards?",
    a: "Yes. Our products meet or exceed industry quality standards and are inspected before shipping. Materials are REACH-compliant, and nickel-free hardware is available where required.",
  },
  {
    q: "Can I request samples before placing a bulk order?",
    a: "Yes. Samples are available for a nominal fee, which is refundable when you confirm a bulk order.",
  },
  {
    q: "How long does it take to process and deliver orders?",
    a: "Standard orders usually take 2 to 4 weeks, depending on order size and customisation. Custom orders may take longer.",
  },
  {
    q: "Do you follow sustainable manufacturing practices?",
    a: "Yes. We prioritise eco-friendly methods and source leather ethically to reduce environmental impact.",
  },
  {
    q: "What is your minimum order quantity?",
    a: "We offer flexible MOQs for trial orders, so you can test a new design or pilot programme before scaling up. Contact us with your style and we will confirm.",
  },
] as const;

export const NAV = {
  belts: BELT_STYLES,
  accessories: ACCESSORIES,
  links: [
    { href: "/about-us", label: "About" },
    { href: "/why-choose-us", label: "Why us" },
    { href: "/faqs", label: "FAQs" },
    { href: "/contact", label: "Contact" },
  ],
} as const;

export const GROUP = [
  {
    name: "SS International",
    body: "Premium leather belts and accessories, with in-house tanning and finishing.",
  },
  {
    name: "SS Chemicals",
    body: "Sodium sulphide manufacturer at Dahi Chauki, Unnao (UP), serving leather, textile, paper and mining.",
  },
  {
    name: "SS Indosolar",
    body: "Solar panel installation for residential, commercial and industrial use.",
    href: "http://ssindosolar.in",
  },
  {
    name: "SSAITI",
    body: "Institute teaching AI courses to students and professionals.",
    href: "http://ssaiti.com",
  },
] as const;

export function productBySlug(slug: string) {
  return PRODUCTS.find((p) => p.slug === slug);
}
