import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV !== "production";

// Content-Security-Policy. Next.js needs inline scripts for hydration unless
// you move to nonce-based CSP via proxy.ts; this is the strict static baseline.
const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://img1.wsimg.com https://images.unsplash.com",
  "media-src 'self' blob: https://img1.wsimg.com",
  "font-src 'self' data:",
  `connect-src 'self'${isDev ? " ws: wss:" : ""}`,
  "frame-src 'none'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  ...(isDev ? [] : ["upgrade-insecure-requests"]),
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()",
  },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
];

const nextConfig: NextConfig = {
  cacheComponents: true,
  poweredByHeader: false,
  reactStrictMode: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "img1.wsimg.com", pathname: "/isteam/**" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
  // Keep link equity from the old GoDaddy site when the domain is switched over.
  async redirects() {
    const products = [
      "polo-belt", "one-side-belt", "ladies", "reversible-belts", "formal-profile-belt",
      "printed-belt", "profile-belt", "hand-finished", "designer-belt", "western-belt",
      "canvas-belt", "dog-collars", "dog-leaches-1",
    ];
    return [
      ...products.map((s) => ({ source: `/${s}`, destination: `/products/${s}`, permanent: true })),
      { source: "/contacts", destination: "/contact", permanent: true },
      { source: "/catalogue", destination: "/contact", permanent: true },
      { source: "/infrastructure", destination: "/about-us", permanent: true },
      { source: "/social-awareness", destination: "/about-us", permanent: true },
      { source: "/showcase", destination: "/#products", permanent: true },
      { source: "/blogs", destination: "/", permanent: true },
      { source: "/complaince/certifications", destination: "/why-choose-us", permanent: true },
      { source: "/complaince%2Fcertifications", destination: "/why-choose-us", permanent: true },
    ];
  },
  async headers() {
    return [
      { source: "/:path*", headers: securityHeaders },
      {
        source: "/videos/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
    ];
  },
};

export default nextConfig;