import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { PageTransition } from "@/components/navigation/PageTransition";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_CONFIG, getOrganizationSchema, getWebSiteSchema } from "@/lib/seo";
import { AnalyticsProvider } from "@/components/analytics/AnalyticsProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Aethel — AI Automation & Business Systems",
    template: "%s | Aethel",
  },
  description: SITE_CONFIG.defaultDescription,
  keywords: SITE_CONFIG.keywords,
  authors: [{ name: SITE_CONFIG.legalName, url: SITE_CONFIG.url }],
  creator: SITE_CONFIG.legalName,
  publisher: SITE_CONFIG.legalName,
  metadataBase: new URL(SITE_CONFIG.url),
  alternates: {
    canonical: SITE_CONFIG.url,
  },
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Aethel — AI Automation & Business Systems",
    description: SITE_CONFIG.defaultDescription,
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.legalName,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${SITE_CONFIG.url}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "Aethel — AI Automation & Business Systems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aethel — AI Automation & Business Systems",
    description: SITE_CONFIG.defaultDescription,
    images: [`${SITE_CONFIG.url}/twitter-image`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
  },
};

export const viewport: Viewport = {
  themeColor: "#F7F6F2",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const orgSchema = getOrganizationSchema();
  const webSiteSchema = getWebSiteSchema();

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}
    >
      <head>
        <JsonLd data={[orgSchema, webSiteSchema]} />
      </head>
      <body className="min-h-screen bg-[#F7F6F2] text-[#17152F] font-sans selection:bg-[#6D4AFF] selection:text-white overflow-x-hidden flex flex-col justify-between">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-5 focus:py-2.5 focus:bg-[#6D4AFF] focus:text-white focus:font-mono focus:font-bold focus:text-xs focus:rounded-xl focus:shadow-2xl focus:outline-none focus:ring-2 focus:ring-white"
        >
          Skip to main content
        </a>
        <AnalyticsProvider />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
