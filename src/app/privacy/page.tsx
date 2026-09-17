import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { PRIVACY_POLICY_SECTIONS } from "@/components/legal/legalContent";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Privacy Policy | Aethel",
  description:
    "Privacy Policy for AETHELSOLUTIONS PRIVATE LIMITED. Learn how we collect, use, and protect your information under the DPDP Act framework.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <LegalPageLayout
      title="PRIVACY POLICY"
      subtitle="Your privacy matters to us. This Privacy Policy explains how AETHELSOLUTIONS PRIVATE LIMITED collects, uses, stores and protects information when you interact with our website and services."
      lastUpdated="OCTOBER 2024"
      sections={PRIVACY_POLICY_SECTIONS}
      currentPath="/privacy"
    />
  );
}
