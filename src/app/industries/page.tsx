import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { IndustriesHero } from "@/components/industries-page/IndustriesHero";
import { IndustryDiagnosticConsole } from "@/components/industries-page/IndustryDiagnosticConsole";
import { OneEngineeringApproach } from "@/components/industries-page/OneEngineeringApproach";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { constructMetadata, getBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Industries — Business Systems Engineered by Aethel",
  description:
    "Explore how Aethel designs AI, automation and software systems around real business workflows across industries.",
  path: "/industries",
  keywords: [
    "industry business systems",
    "healthcare AI systems",
    "automotive software engineering",
    "manufacturing automation",
    "legal process automation",
    "custom enterprise software",
  ],
});

export default function IndustriesPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Industries", url: "/industries" },
  ]);

  return (
    <main id="main-content" className="relative min-h-screen bg-[#F7F6F2] text-[#17152F] flex flex-col justify-between overflow-x-hidden">
      <JsonLd data={breadcrumbSchema} />
      <Navbar />
      <IndustriesHero />
      <IndustryDiagnosticConsole />
      <OneEngineeringApproach />
      <Footer />
    </main>
  );
}
