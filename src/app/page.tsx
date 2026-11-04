import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/hero/HeroSection";
import { WhatWeBuildSection } from "@/components/what-we-build/WhatWeBuildSection";
import { WorkSection } from "@/components/work/WorkSection";
import { Footer } from "@/components/Footer";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Aethel — AI Automation & Business Systems",
  description:
    "Aethel engineers custom AI, software and automation systems around the way businesses actually work.",
  path: "/",
  keywords: [
    "AI automation",
    "AI systems",
    "business automation",
    "custom software",
    "workflow automation",
    "AI agents",
    "AI engineering",
    "software engineering",
  ],
});

export default function Home() {
  return (
    <main id="main-content" className="relative min-h-screen bg-[#F7F6F2] text-[#17152F] flex flex-col justify-between">
      <Navbar />
      <HeroSection />
      <WhatWeBuildSection />
      <WorkSection />
      <Footer />
    </main>
  );
}
