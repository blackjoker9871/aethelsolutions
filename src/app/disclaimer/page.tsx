import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { DISCLAIMER_SECTIONS } from "@/components/legal/legalContent";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Disclaimer | Aethel",
  description:
    "Operational disclaimers regarding website content, current capabilities vs. conceptual research, and artificial intelligence systems.",
  path: "/disclaimer",
});

export default function DisclaimerPage() {
  return (
    <LegalPageLayout
      title="DISCLAIMER"
      subtitle="Important operational disclaimers regarding website content, current capabilities vs. conceptual research, and artificial intelligence systems."
      lastUpdated="OCTOBER 2024"
      sections={DISCLAIMER_SECTIONS}
      currentPath="/disclaimer"
    />
  );
}
