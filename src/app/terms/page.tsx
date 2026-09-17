import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { TERMS_SECTIONS } from "@/components/legal/legalContent";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Terms & Conditions | Aethel",
  description:
    "These Terms govern your use of the Aethel website and the provision of services by AETHELSOLUTIONS PRIVATE LIMITED.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <LegalPageLayout
      title="TERMS & CONDITIONS"
      subtitle="These Terms govern your use of the Aethel website and the provision of services by AETHELSOLUTIONS PRIVATE LIMITED."
      lastUpdated="OCTOBER 2024"
      sections={TERMS_SECTIONS}
      currentPath="/terms"
    />
  );
}
