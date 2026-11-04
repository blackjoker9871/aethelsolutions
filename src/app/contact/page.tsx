import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { ContactHero } from "@/components/contact-page/ContactHero";
import { ProjectIntakeForm } from "@/components/contact-page/ProjectIntakeForm";
import { DirectContactSidebar } from "@/components/contact-page/DirectContactSidebar";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { constructMetadata, getBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Start a Project — Aethel",
  description:
    "Tell Aethel about your business problem, workflow or system idea and start an engineering conversation.",
  path: "/contact",
  keywords: [
    "start a project",
    "hire AI engineers",
    "custom software development inquiry",
    "automation consulting",
    "Aethel contact",
  ],
});

export default function ContactPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Start a Project", url: "/contact" },
  ]);

  return (
    <main id="main-content" className="relative min-h-screen bg-[#F7F6F2] text-[#17152F] flex flex-col justify-between overflow-x-hidden">
      <JsonLd data={breadcrumbSchema} />
      <Navbar />
      <ContactHero />
      <ProjectIntakeForm />
      <DirectContactSidebar />
      <Footer />
    </main>
  );
}
