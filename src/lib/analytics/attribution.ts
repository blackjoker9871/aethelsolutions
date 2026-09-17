import { UtmAttribution } from "./types";

const STORAGE_KEY_FIRST_TOUCH = "aethel_first_touch";
const STORAGE_KEY_LAST_TOUCH = "aethel_last_touch";

/**
 * Normalizes document.referrer into high-level categories (google, linkedin, meta, direct, etc.)
 */
export function normalizeReferrer(referrerUrl?: string): string {
  if (!referrerUrl || referrerUrl.trim().length === 0) return "direct";

  try {
    const url = new URL(referrerUrl);
    const host = url.hostname.toLowerCase();

    if (host.includes("google.")) return "google";
    if (host.includes("linkedin.")) return "linkedin";
    if (host.includes("instagram.")) return "instagram";
    if (host.includes("facebook.") || host.includes("fb.me")) return "meta";
    if (host.includes("twitter.") || host.includes("x.com")) return "x_twitter";
    if (host.includes("youtube.")) return "youtube";
    if (host.includes("github.")) return "github";
    if (host.includes("aethelsolution.in") || host.includes("localhost")) return "internal";

    return host.replace(/^www\./, "");
  } catch {
    return "other";
  }
}

/**
 * Extracts and persists UTM parameters and referrer from browser window safely.
 */
export function captureAttribution(): UtmAttribution {
  if (typeof window === "undefined") return {};

  try {
    const searchParams = new URLSearchParams(window.location.search);
    const utmSource = searchParams.get("utm_source") || undefined;
    const utmMedium = searchParams.get("utm_medium") || undefined;
    const utmCampaign = searchParams.get("utm_campaign") || undefined;
    const utmTerm = searchParams.get("utm_term") || undefined;
    const utmContent = searchParams.get("utm_content") || undefined;
    const referrerSource = normalizeReferrer(document.referrer);

    const now = new Date().toISOString();

    const currentTouch: UtmAttribution = {
      utm_source: utmSource,
      utm_medium: utmMedium,
      utm_campaign: utmCampaign,
      utm_term: utmTerm,
      utm_content: utmContent,
      referrer_source: referrerSource,
    };

    const hasUtm = Boolean(utmSource || utmMedium || utmCampaign);

    // Read or set first-touch
    let firstTouch: UtmAttribution | null = null;
    const existingFirst = sessionStorage.getItem(STORAGE_KEY_FIRST_TOUCH);
    if (existingFirst) {
      firstTouch = JSON.parse(existingFirst);
    } else {
      firstTouch = {
        ...currentTouch,
        first_touch_timestamp: now,
      };
      sessionStorage.setItem(STORAGE_KEY_FIRST_TOUCH, JSON.stringify(firstTouch));
    }

    // Update last-touch if UTMs are present or first visit
    if (hasUtm || !sessionStorage.getItem(STORAGE_KEY_LAST_TOUCH)) {
      const lastTouch: UtmAttribution = {
        ...currentTouch,
        last_touch_timestamp: now,
      };
      sessionStorage.setItem(STORAGE_KEY_LAST_TOUCH, JSON.stringify(lastTouch));
    }

    return firstTouch || currentTouch;
  } catch {
    // Graceful fallback if storage is blocked by privacy mode
    return {};
  }
}

export function getStoredAttribution(): { firstTouch?: UtmAttribution; lastTouch?: UtmAttribution } {
  if (typeof window === "undefined") return {};
  try {
    const firstStr = sessionStorage.getItem(STORAGE_KEY_FIRST_TOUCH);
    const lastStr = sessionStorage.getItem(STORAGE_KEY_LAST_TOUCH);
    return {
      firstTouch: firstStr ? JSON.parse(firstStr) : undefined,
      lastTouch: lastStr ? JSON.parse(lastStr) : undefined,
    };
  } catch {
    return {};
  }
}
