import type { Metadata } from "next";

export const SITE_CONFIG = {
  name: "Aethel",
  legalName: "AETHELSOLUTIONS PRIVATE LIMITED",
  url: "https://aethelsolution.in",
  email: "aethel.officialdesk@gmail.com",
  defaultTitle: "Aethel — AI Automation & Business Systems",
  defaultDescription:
    "Aethel engineers custom AI, software and automation systems around the way businesses actually work.",
  keywords: [
    "AI automation",
    "AI systems",
    "business automation",
    "custom software",
    "workflow automation",
    "AI agents",
    "AI engineering",
    "software engineering",
    "process automation",
    "enterprise AI",
  ],
  locale: "en_IN",
};

interface MetadataOptions {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  noIndex?: boolean;
}

export function constructMetadata({
  title,
  description,
  path = "",
  keywords,
  noIndex = false,
}: MetadataOptions): Metadata {
  const cleanPath = path ? (path.startsWith("/") ? path : `/${path}`) : "";
  const canonicalUrl = `${SITE_CONFIG.url}${cleanPath}`;

  return {
    title,
    description,
    keywords: keywords || SITE_CONFIG.keywords,
    authors: [{ name: SITE_CONFIG.legalName, url: SITE_CONFIG.url }],
    creator: SITE_CONFIG.legalName,
    publisher: SITE_CONFIG.legalName,
    metadataBase: new URL(SITE_CONFIG.url),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: SITE_CONFIG.legalName,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: `${SITE_CONFIG.url}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: `${SITE_CONFIG.name} — AI Engineering & Business Systems`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${SITE_CONFIG.url}/twitter-image`],
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

/* =========================================================================
   SCHEMA.ORG STRUCTURED DATA GENERATORS
========================================================================= */

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_CONFIG.legalName,
    alternateName: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/icon.png`,
    email: SITE_CONFIG.email,
    description: SITE_CONFIG.defaultDescription,
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
    knowsAbout: [
      "Artificial Intelligence Engineering",
      "Custom Software Development",
      "Workflow Automation",
      "Process Architecture",
      "Computer Vision",
    ],
  };
}

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_CONFIG.name,
    alternateName: SITE_CONFIG.legalName,
    url: SITE_CONFIG.url,
    description: SITE_CONFIG.defaultDescription,
    publisher: {
      "@type": "Organization",
      name: SITE_CONFIG.legalName,
    },
  };
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${SITE_CONFIG.url}${item.url}`,
    })),
  };
}

export function getCaseStudiesSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Aethel Systems Engineering Case Studies",
    description: "Verified engineering implementations by AETHELSOLUTIONS PRIVATE LIMITED",
    itemListElement: [
      {
        "@type": "SoftwareApplication",
        position: 1,
        name: "ML Hospital Patient Stream System",
        applicationCategory: "HealthApplication",
        operatingSystem: "Web / Cloud",
        description:
          "Intelligent digital front door, WhatsApp patient intake, and autonomous scheduling system for multi-specialty healthcare.",
        provider: {
          "@type": "Organization",
          name: SITE_CONFIG.legalName,
        },
      },
      {
        "@type": "SoftwareApplication",
        position: 2,
        name: "Radio Warehouse Real-Time Inventory & Configurator Engine",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web / Cloud",
        description:
          "Live stock synchronization and custom fitment intelligence architecture for high-turnover automotive parts distribution.",
        provider: {
          "@type": "Organization",
          name: SITE_CONFIG.legalName,
        },
      },
      {
        "@type": "SoftwareApplication",
        position: 3,
        name: "Plantaris Industrial Edge Computer Vision System",
        applicationCategory: "EngineeringApplication",
        operatingSystem: "Edge / Embedded Linux",
        description:
          "Sub-15ms industrial edge vision pipeline detecting micro-defects with deterministic verification in automated manufacturing lines.",
        provider: {
          "@type": "Organization",
          name: SITE_CONFIG.legalName,
        },
      },
    ],
  };
}
