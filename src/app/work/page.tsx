import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { WorkPageContent } from "@/components/work-page/WorkPageContent";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { constructMetadata, getBreadcrumbSchema, getCaseStudiesSchema } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Work — Systems We've Engineered | Aethel",
  description:
    "Explore Aethel case studies across healthcare, automotive and AI-powered computer vision.",
  path: "/work",
  keywords: [
    "AI engineering case studies",
    "healthcare patient stream system",
    "automotive parts inventory engine",
    "industrial computer vision pipeline",
    "custom software development case studies",
  ],
});

export default function WorkPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Work", url: "/work" },
  ]);
  const caseStudiesSchema = getCaseStudiesSchema();

  return (
    <main id="main-content" className="relative min-h-screen bg-[#F7F6F2] text-[#17152F] flex flex-col justify-between overflow-x-hidden">
      <JsonLd data={[breadcrumbSchema, caseStudiesSchema]} />
      <Navbar />
      <WorkPageContent />
      <Footer />
    </main>
  );
}
