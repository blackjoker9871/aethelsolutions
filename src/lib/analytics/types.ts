/**
 * Aethel Solutions — Analytics & Conversion Tracking Type System
 * Privacy-first: strictly non-PII, snake_case event nomenclature
 */

export type AnalyticsEventName =
  | "page_view"
  | "cta_clicked"
  | "navigation_clicked"
  | "industry_viewed"
  | "system_viewed"
  | "case_study_opened"
  | "project_intake_started"
  | "project_intake_step_viewed"
  | "project_intake_step_completed"
  | "project_brief_submitted"
  | "contact_method_clicked"
  | "outbound_link_clicked"
  | "application_error";

export type PageType =
  | "home"
  | "industries"
  | "systems"
  | "work"
  | "about"
  | "contact"
  | "legal"
  | "error";

export interface PageViewProperties {
  page_path: string;
  page_title: string;
  page_type: PageType;
  referrer_category?: string;
}

export interface CtaProperties {
  cta_name: string;
  cta_location: string;
  destination: string;
}

export interface NavigationProperties {
  destination: string;
  location: "navbar" | "footer" | "mobile_menu" | "inline";
}

export interface IndustryProperties {
  industry: string;
}

export interface SystemProperties {
  system: string;
}

export interface CaseStudyProperties {
  project: string;
  industry?: string;
}

export interface ContactFunnelProperties {
  step: "business" | "problem" | "system" | "scope" | "contact";
  step_number: number;
}

export interface ProjectBriefSubmittedProperties {
  industry: string;
  system_types: string[];
  project_stage: string;
  timeline: string;
  budget_range?: string;
}

export interface ContactMethodProperties {
  method: "email" | "phone" | "whatsapp" | "website";
  location: string;
}

export interface OutboundLinkProperties {
  destination_domain: string;
  link_context: string;
}

export interface ApplicationErrorProperties {
  error_type: string;
  page: string;
  component?: string;
}

export type AnalyticsProperties =
  | PageViewProperties
  | CtaProperties
  | NavigationProperties
  | IndustryProperties
  | SystemProperties
  | CaseStudyProperties
  | ContactFunnelProperties
  | ProjectBriefSubmittedProperties
  | ContactMethodProperties
  | OutboundLinkProperties
  | ApplicationErrorProperties
  | Record<string, string | number | boolean | string[] | undefined>;

export interface UtmAttribution {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  referrer_source?: string;
  first_touch_timestamp?: string;
  last_touch_timestamp?: string;
}
