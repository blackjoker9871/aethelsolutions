import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { SystemsHero } from "@/components/systems-page/SystemsHero";
import { SystemArchitectureSection } from "@/components/systems-page/SystemArchitectureSection";
import { ExampleSystemsSection } from "@/components/systems-page/ExampleSystemsSection";
import { UnderTheSurfaceSection } from "@/components/systems-page/UnderTheSurfaceSection";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { constructMetadata, getBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Systems — AI, Automation & Software Engineering | Aethel",
  description:
    "Explore the technology and engineering architecture behind Aethel's AI, automation and custom software systems.",
  path: "/systems",
  keywords: [
    "AI systems architecture",
    "AI agents engineering",
    "voice AI systems",
    "WhatsApp AI automation",
    "workflow automation engine",
    "computer vision engineering",
    "business intelligence systems",
  ],
});

export default function SystemsPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Systems", url: "/systems" },
  ]);

  return (
    <main id="main-content" className="relative min-h-screen bg-[#F7F6F2] text-[#17152F] flex flex-col justify-between overflow-x-hidden">
      <JsonLd data={breadcrumbSchema} />
      <Navbar />
      <SystemsHero />
      <SystemArchitectureSection />
      <ExampleSystemsSection />
      <UnderTheSurfaceSection />
      <Footer />
    </main>
  );
}
