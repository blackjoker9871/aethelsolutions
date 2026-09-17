import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { GRIEVANCE_SECTIONS } from "@/components/legal/legalContent";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Grievance & Customer Support | Aethel",
  description:
    "Customer support procedures, dispute resolution framework, and grievance escalation mechanism for AETHELSOLUTIONS PRIVATE LIMITED.",
  path: "/grievance",
});

export default function GrievancePage() {
  return (
    <LegalPageLayout
      title="GRIEVANCE & CUSTOMER SUPPORT"
      subtitle="Customer support procedures, dispute resolution framework, and grievance escalation mechanism for AETHELSOLUTIONS PRIVATE LIMITED."
      lastUpdated="OCTOBER 2024"
      sections={GRIEVANCE_SECTIONS}
      currentPath="/grievance"
    />
  );
}
