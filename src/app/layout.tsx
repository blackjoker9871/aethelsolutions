import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Aethel Solutions | Premium Digital Agency & Business Automation",
    template: "%s | Aethel Solutions"
  },
  description: "Aethel Solutions engineers high-performance websites, custom software, and AI-driven automation systems. We specialize in digital transformation for high-growth brands globally.",
  keywords: [
    "Digital Service Agency",
    "High-Performance Website Development",
    "Business Automation Solutions",
    "Custom Software Development",
    "Digital Transformation Specialist",
    "Next.js Development Agency",
    "AI Business Automation",
    "Enterprise Web Applications"
  ],
  authors: [{ name: "Aethel Solutions" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aethel.solutions",
    siteName: "Aethel Solutions",
    title: "Aethel Solutions | Precision Digital Engineering",
    description: "Transform your business with high-performance digital ecosystems and intelligent automation.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Aethel Solutions | Digital Transformation",
    description: "Engineering the future of digital experiences through high-performance web systems.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <head>
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-24G3Q51XR4`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-24G3Q51XR4');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Aethel Solutions",
              "image": "https://aethel.solutions/logo.png",
              "url": "https://aethel.solutions",
              "telephone": "+919342557458",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "IN"
              },
              "serviceType": [
                "Web Development",
                "Business Automation",
                "Custom Software",
                "Digital Strategy"
              ],
              "description": "Premium digital agency specializing in high-performance web ecosystems and AI-driven business automation."
            })
          }}
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
