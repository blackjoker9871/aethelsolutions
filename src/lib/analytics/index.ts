import {
  AnalyticsEventName,
  AnalyticsProperties,
  PageViewProperties,
  CtaProperties,
  NavigationProperties,
  IndustryProperties,
  SystemProperties,
  CaseStudyProperties,
  ContactFunnelProperties,
  ProjectBriefSubmittedProperties,
  ContactMethodProperties,
  OutboundLinkProperties,
  ApplicationErrorProperties,
  PageType,
} from "./types";
import { captureAttribution, getStoredAttribution, normalizeReferrer } from "./attribution";

declare global {
  interface Window {
    gtag?: (
      command: "config" | "event" | "js" | "set",
      targetId: string | Date,
      config?: Record<string, unknown>
    ) => void;
    dataLayer?: unknown[];
    fbq?: (
      command: "track" | "trackCustom" | "init",
      eventName: string,
      params?: Record<string, unknown>
    ) => void;
  }
}

class AnalyticsService {
  private gaMeasurementId?: string;
  private metaPixelId?: string;
  private isDebug: boolean;

  constructor() {
    this.gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
    this.metaPixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;
    this.isDebug = process.env.NEXT_PUBLIC_ANALYTICS_DEBUG === "true";
  }

  /**
   * Initializes attribution capture on client load
   */
  public init() {
    if (typeof window === "undefined") return;
    captureAttribution();
  }

  /**
   * Universal Event Tracker
   */
  public trackEvent(eventName: AnalyticsEventName, properties?: AnalyticsProperties) {
    if (typeof window === "undefined") return;

    const payload = properties || {};

    // 1. Debug logging (only when explicit debug flag is active)
    if (this.isDebug) {
      console.log(`[Aethel Analytics] Event: ${eventName}`, payload);
    }

    // 2. Google Analytics 4 Dispatch
    if (this.gaMeasurementId && typeof window.gtag === "function") {
      try {
        window.gtag("event", eventName, payload as Record<string, unknown>);
      } catch (err) {
        if (this.isDebug) console.warn("[Analytics GA4 Error]", err);
      }
    }

    // 3. Meta Pixel Dispatch
    if (this.metaPixelId && typeof window.fbq === "function") {
      try {
        if (eventName === "project_brief_submitted") {
          window.fbq("track", "Lead", payload as Record<string, unknown>);
        } else if (eventName === "project_intake_started") {
          window.fbq("track", "InitiateCheckout", payload as Record<string, unknown>);
        } else {
          window.fbq("trackCustom", eventName, payload as Record<string, unknown>);
        }
      } catch (err) {
        if (this.isDebug) console.warn("[Analytics Meta Error]", err);
      }
    }
  }

  /**
   * Track Page View (SPA-safe)
   */
  public pageView(path: string, title?: string, pageType?: PageType) {
    const inferredType: PageType =
      pageType ||
      (path === "/"
        ? "home"
        : path.startsWith("/industries")
        ? "industries"
        : path.startsWith("/systems")
        ? "systems"
        : path.startsWith("/work")
        ? "work"
        : path.startsWith("/about")
        ? "about"
        : path.startsWith("/contact")
        ? "contact"
        : path.startsWith("/privacy") ||
          path.startsWith("/terms") ||
          path.startsWith("/refund-policy") ||
          path.startsWith("/disclaimer") ||
          path.startsWith("/cookie-policy") ||
          path.startsWith("/grievance")
        ? "legal"
        : "home");

    const pageProperties: PageViewProperties = {
      page_path: path,
      page_title: title || (typeof document !== "undefined" ? document.title : "Aethel"),
      page_type: inferredType,
      referrer_category: typeof document !== "undefined" ? normalizeReferrer(document.referrer) : "direct",
    };

    this.trackEvent("page_view", pageProperties);
  }

  /**
   * Call to Action Tracking
   */
  public trackCTA(cta_name: string, cta_location: string, destination: string) {
    const props: CtaProperties = {
      cta_name,
      cta_location,
      destination,
    };
    this.trackEvent("cta_clicked", props);
  }

  /**
   * Navigation Bar & Footer Link Tracking
   */
  public trackNavigation(destination: string, location: "navbar" | "footer" | "mobile_menu" | "inline") {
    const props: NavigationProperties = {
      destination,
      location,
    };
    this.trackEvent("navigation_clicked", props);
  }

  /**
   * Industry Interest Tracking
   */
  public trackIndustry(industry: string) {
    const props: IndustryProperties = { industry };
    this.trackEvent("industry_viewed", props);
  }

  /**
   * System Interest Tracking
   */
  public trackSystem(system: string) {
    const props: SystemProperties = { system };
    this.trackEvent("system_viewed", props);
  }

  /**
   * Case Study Exploration Tracking
   */
  public trackCaseStudy(project: string, industry?: string) {
    const props: CaseStudyProperties = { project, industry };
    this.trackEvent("case_study_opened", props);
  }

  /**
   * Project Intake Funnel Progress Tracking
   */
  public trackFunnelStep(
    step: "business" | "problem" | "system" | "scope" | "contact",
    step_number: number,
    action: "viewed" | "completed"
  ) {
    const eventName: AnalyticsEventName =
      action === "viewed" ? "project_intake_step_viewed" : "project_intake_step_completed";

    const props: ContactFunnelProperties = {
      step,
      step_number,
    };
    this.trackEvent(eventName, props);
  }

  /**
   * Primary Conversion: Project Brief Submitted
   * (Fires ONLY after verified backend success)
   */
  public trackProjectBriefSubmitted(props: ProjectBriefSubmittedProperties) {
    const { firstTouch, lastTouch } = getStoredAttribution();

    const conversionPayload = {
      ...props,
      attribution_first_source: firstTouch?.utm_source || firstTouch?.referrer_source || "direct",
      attribution_last_source: lastTouch?.utm_source || lastTouch?.referrer_source || "direct",
    };

    this.trackEvent("project_brief_submitted", conversionPayload);
  }

  /**
   * Direct Contact Action Tracking (Email, Phone, WhatsApp)
   */
  public trackContactMethod(method: "email" | "phone" | "whatsapp" | "website", location: string) {
    const props: ContactMethodProperties = {
      method,
      location,
    };
    this.trackEvent("contact_method_clicked", props);
  }

  /**
   * Outbound Link Tracking
   */
  public trackOutboundLink(destination_domain: string, link_context: string) {
    const props: OutboundLinkProperties = {
      destination_domain,
      link_context,
    };
    this.trackEvent("outbound_link_clicked", props);
  }

  /**
   * Safe Application Error Event
   */
  public trackError(error_type: string, page: string, component?: string) {
    const props: ApplicationErrorProperties = {
      error_type,
      page,
      component,
    };
    this.trackEvent("application_error", props);
  }
}

export const analytics = new AnalyticsService();
export * from "./types";
export * from "./attribution";
