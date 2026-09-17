export const ALLOWED_INDUSTRIES = new Set([
  "HEALTHCARE",
  "MANUFACTURING",
  "AUTOMOTIVE",
  "RETAIL",
  "EDUCATION",
  "LEGAL",
  "FINANCE",
  "LOGISTICS",
  "REAL ESTATE",
  "PROFESSIONAL SERVICES",
  "OTHER",
]);

export const ALLOWED_PROBLEM_CATEGORIES = new Set([
  "REPETITIVE WORK",
  "CUSTOMER COMMUNICATION",
  "SALES FOLLOW-UP",
  "DATA MANAGEMENT",
  "INTERNAL WORKFLOW",
  "APPOINTMENTS",
  "REPORTING",
  "MANUAL OPERATIONS",
  "CUSTOM SOFTWARE",
  "OTHER",
]);

export const ALLOWED_SYSTEM_TYPES = new Set([
  "AI SYSTEM",
  "AI AUTOMATION",
  "WORKFLOW AUTOMATION",
  "CUSTOM SOFTWARE",
  "AI AGENT",
  "VOICE AI",
  "WHATSAPP SYSTEM",
  "COMPUTER VISION",
  "BUSINESS DASHBOARD",
  "NOT SURE YET",
]);

export const ALLOWED_PROJECT_STAGES = new Set([
  "JUST AN IDEA",
  "I KNOW THE PROBLEM",
  "I HAVE A CLEAR REQUIREMENT",
  "WE NEED TO REPLACE AN EXISTING SYSTEM",
  "WE NEED TO SCALE AN EXISTING SYSTEM",
]);

export const ALLOWED_TIMELINES = new Set([
  "AS SOON AS POSSIBLE",
  "WITHIN 1 MONTH",
  "1–3 MONTHS",
  "3+ MONTHS",
  "NO FIXED TIMELINE",
]);

export const ALLOWED_BUDGET_RANGES = new Set([
  "UNDER ₹50K",
  "₹50K–₹2L",
  "₹2L–₹5L",
  "₹5L–₹10L",
  "₹10L+",
  "NOT SURE YET",
]);

/**
 * Strips HTML tags, null bytes, and trims strings to prevent XSS and code injection.
 */
export function sanitizeString(input: unknown, maxLength = 2000): string {
  if (typeof input !== "string") return "";
  
  // Trim and remove null bytes / control characters
  let clean = input.replace(/\0/g, "").trim();
  
  // Strip HTML tags
  clean = clean.replace(/<[^>]*>?/gm, "");
  
  // Enforce max length
  if (clean.length > maxLength) {
    clean = clean.substring(0, maxLength);
  }
  
  return clean;
}

/**
 * Sanitizes header strings to prevent CRLF email/HTTP header injection.
 */
export function sanitizeHeaderValue(input: string): string {
  if (!input) return "";
  return input.replace(/[\r\n\0]/g, " ").trim();
}

/**
 * Escapes characters for safe HTML inclusion
 */
export function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export function isValidEmail(email: string): boolean {
  if (!email || email.length > 254) return false;
  // RFC 5322 standard compliant email regex
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
  return emailRegex.test(email);
}

export function isValidPhone(phone: string): boolean {
  if (!phone || phone.length < 7 || phone.length > 25) return false;
  // Allows optional plus, digits, spaces, hyphens, parentheses
  const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]{6,20}$/;
  return phoneRegex.test(phone.trim());
}
