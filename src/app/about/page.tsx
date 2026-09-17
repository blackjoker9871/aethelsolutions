import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { AboutHero } from "@/components/about-page/AboutHero";
import { OurOriginSection } from "@/components/about-page/OurOriginSection";
import { AethelBeliefSection } from "@/components/about-page/AethelBeliefSection";
import { PhilosophyPrinciplesSection } from "@/components/about-page/PhilosophyPrinciplesSection";
import { AethelAISection } from "@/components/about-page/AethelAISection";
import { CapabilityMapSection } from "@/components/about-page/CapabilityMapSection";
import { LeadershipTeamSection } from "@/components/about-page/LeadershipTeamSection";
import { TeamModelSection } from "@/components/about-page/TeamModelSection";
import { FutureVisionSection } from "@/components/about-page/FutureVisionSection";
import { AethelStandardSection } from "@/components/about-page/AethelStandardSection";
import { BrandStatementSection } from "@/components/about-page/BrandStatementSection";
import { AboutCTA } from "@/components/about-page/AboutCTA";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { constructMetadata, getBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "About Aethel — Engineering the Next Order",
  description:
    "Learn why Aethel builds AI, software and automation systems around the way businesses operate.",
  path: "/about",
  keywords: [
    "about Aethel Solutions",
    "AETHELSOLUTIONS PRIVATE LIMITED",
    "AI engineering team",
    "custom software development philosophy",
    "business systems architecture",
  ],
});

export default function AboutPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
  ]);

  return (
    <main id="main-content" className="relative min-h-screen bg-[#F7F6F2] text-[#17152F] flex flex-col justify-between overflow-x-hidden">
      <JsonLd data={breadcrumbSchema} />
      <Navbar />
      <AboutHero />
      <OurOriginSection />
      <AethelBeliefSection />
      <PhilosophyPrinciplesSection />
      <AethelAISection />
      <CapabilityMapSection />
      <LeadershipTeamSection />
      <TeamModelSection />
      <FutureVisionSection />
      <AethelStandardSection />
      <BrandStatementSection />
      <AboutCTA />
      <Footer />
    </main>
  );
}
