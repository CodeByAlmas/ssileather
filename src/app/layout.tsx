import type { Metadata, Viewport } from "next";
import "@fontsource-variable/hanken-grotesk";
import "./globals.css";

import JsonLd from "@/components/seo/JsonLd";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Preloader from "@/components/motion/Preloader";
import SmoothScroll from "@/components/motion/SmoothScroll";
import VideoStage from "@/components/motion/VideoStage";
import { TransitionProvider } from "@/components/motion/TransitionProvider";
import { organizationSchema, websiteSchema } from "@/lib/schema";
import { IMAGES, SITE } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "SS International | Leather Belt Manufacturer & Bulk Supplier, Kanpur India",
    template: "%s | SS International",
  },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: SITE.legalName, url: SITE.url }],
  creator: SITE.legalName,
  publisher: SITE.legalName,
  keywords: [
    "leather belt manufacturer",
    "bulk leather belts supplier",
    "private label leather belts",
    "leather belt exporter India",
    "Kanpur leather belts",
    "OEM leather belts",
    "leather dog collars wholesale",
    "REACH compliant leather belts",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: SITE.name,
    url: SITE.url,
    title: "SS International | Leather Belt Manufacturer & Bulk Supplier",
    description: SITE.description,
    images: [{ url: IMAGES.og, width: 1200, height: 630, alt: "SS International leather belts" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SS International | Leather Belt Manufacturer",
    description: SITE.description,
    images: [IMAGES.og],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  // Carried over from the existing site so Search Console ownership keeps working.
  verification: { google: "vpIAhq3xqXH5ys43otGBjkC9Pd0BWeY5zSSqIt0tSdA" },
  formatDetection: { telephone: false, email: false, address: false },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

// Runs before paint: skip the preloader on repeat visits in the same session.
const preloadGate = `try{if(sessionStorage.getItem('ss-preloaded'))document.documentElement.classList.add('no-preload')}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: preloadGate }} />
        <noscript>
          <style>{`.preloader{display:none!important}[data-intro]{visibility:visible!important}`}</style>
        </noscript>
      </head>
      <body>
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        <a
          href="#main"
          className="bg-bone text-ink focus:left-4 focus:top-4 fixed -left-[999px] z-[200] rounded px-4 py-2"
        >
          Skip to content
        </a>
        <VideoStage />
        <TransitionProvider>
          <SmoothScroll />
          <Preloader />
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
        </TransitionProvider>
      </body>
    </html>
  );
}
