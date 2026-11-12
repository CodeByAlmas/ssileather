# SS International website

Next.js 16 (App Router, Cache Components) + TypeScript + Tailwind v4 + GSAP + Lenis.

## Run

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
```

## What you must add

| Item | Where | Notes |
| --- | --- | --- |
| Hero video | `public/videos/hero.mp4` (and optional `hero.webm`) | 1920x1080, H.264, 8 to 15 s loop, no audio, under 8 MB. It plays fixed behind the whole site. |
| Real logo | `src/components/ui/Logo.tsx`, `src/app/icon.svg` | Current mark is a placeholder. |
| Product photos | `src/components/ui/LeatherSwatch.tsx` is used as a stand-in | Add an `image` field to `PRODUCTS` in `src/lib/site.ts` and render it where `LeatherSwatch` is used. |
| Enquiry delivery | env `INQUIRY_WEBHOOK_URL` | The form posts JSON to this URL (Zapier, Make, Slack, your mail relay). Without it, production returns a message asking buyers to email. |
| Domain | env `NEXT_PUBLIC_SITE_URL` | Defaults to `https://ssileather.com`. Used in canonical URLs, sitemap, schema, llms.txt. |

## Structure

```
src/
  app/                  routes: /, /about-us, /why-choose-us, /faqs, /contact, /products/[slug]
    api/inquiry/        validated, rate-limited enquiry endpoint
    robots.ts sitemap.ts manifest.ts llms.txt/
  components/
    layout/             Navbar (mega menu), Footer
    motion/             Preloader, TransitionProvider (page curtain), SmoothScroll, VideoStage
    sections/           Hero, FeatureStack, Heritage, Products, Process, FaqList, InquiryForm
    ui/                 Button (hover animation), Logo, LeatherSwatch, Marquee
    seo/                JsonLd
  lib/
    site.ts             all content in one place (edit here)
    schema.ts           JSON-LD builders
```

## SEO, AEO, GEO

- Per-page titles, descriptions, canonicals, Open Graph, Twitter cards.
- JSON-LD: Organization/Manufacturer, WebSite, ItemList, Product, FAQPage, BreadcrumbList, AboutPage, ContactPage.
- Answer-first copy blocks (home "Who we are", FAQs) so search and AI answers can quote them.
- `/llms.txt` briefing for AI assistants; `robots.txt` explicitly allows major AI crawlers.
- 308 redirects from the old GoDaddy URLs (`/polo-belt` to `/products/polo-belt`, `/contacts` to `/contact`, ...).
- Google Search Console verification token carried over from the old site.

## Security

- CSP, HSTS, X-Frame-Options, nosniff, Referrer-Policy, Permissions-Policy, COOP set in `next.config.ts`.
- Enquiry API: same-origin check, JSON-only, 8 KB body cap, zod validation, control-character stripping,
  honeypot, minimum-fill-time check, per-IP rate limit (in-memory; use Redis if you run several instances).
- JSON-LD output escapes `<`. `X-Powered-By` removed.
- CSP currently allows `'unsafe-inline'` scripts because Next.js hydration needs them. A nonce-based CSP via `proxy.ts` is the next hardening step.
