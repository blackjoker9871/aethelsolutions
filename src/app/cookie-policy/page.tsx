import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { COOKIE_POLICY_SECTIONS } from "@/components/legal/legalContent";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Cookie Policy | Aethel",
  description:
    "Information regarding the usage of cookies, storage tokens, and telemetry on the Aethel Solutions website.",
  path: "/cookie-policy",
});

export default function CookiePolicyPage() {
  return (
    <LegalPageLayout
      title="COOKIE POLICY"
      subtitle="Information regarding the usage of cookies, storage tokens, and telemetry on the Aethel Solutions website."
      lastUpdated="OCTOBER 2024"
      sections={COOKIE_POLICY_SECTIONS}
      currentPath="/cookie-policy"
    />
  );
}
