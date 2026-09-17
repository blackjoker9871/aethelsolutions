import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { REFUND_POLICY_SECTIONS } from "@/components/legal/legalContent";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Refund & Cancellation Policy | Aethel",
  description:
    "Refund and cancellation framework governing custom software development, AI systems engineering, and consulting services by AETHELSOLUTIONS PRIVATE LIMITED.",
  path: "/refund-policy",
});

export default function RefundPolicyPage() {
  return (
    <LegalPageLayout
      title="REFUND & CANCELLATION POLICY"
      subtitle="Refund and cancellation framework governing custom software development, AI systems engineering, and consulting services by AETHELSOLUTIONS PRIVATE LIMITED."
      lastUpdated="OCTOBER 2024"
      sections={REFUND_POLICY_SECTIONS}
      currentPath="/refund-policy"
    />
  );
}
