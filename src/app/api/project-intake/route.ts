import { NextRequest, NextResponse } from "next/server";
import {
  sanitizeString,
  isValidEmail,
  isValidPhone,
  ALLOWED_INDUSTRIES,
  ALLOWED_PROBLEM_CATEGORIES,
  ALLOWED_SYSTEM_TYPES,
  ALLOWED_PROJECT_STAGES,
  ALLOWED_TIMELINES,
  ALLOWED_BUDGET_RANGES,
} from "@/lib/server/sanitizer";
import { checkRateLimit } from "@/lib/server/rateLimiter";
import { generateProjectReference, generateSubmissionId } from "@/lib/server/generator";
import { getProjectIntakeRepository } from "@/lib/server/repository";
import { dispatchAllNotifications } from "@/lib/server/notifications";
import { serverLogger } from "@/lib/server/logger";
import { ProjectIntakePayload, ProjectIntakeRecord, ApiResponse } from "@/lib/server/types";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  const clientIp =
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
    req.headers.get("x-real-ip") ||
    "127.0.0.1";

  // 1. Content-Type Verification
  const contentType = req.headers.get("content-type") || "";
  if (!contentType.includes("application/json")) {
    return NextResponse.json<ApiResponse>(
      {
        success: false,
        error: "INVALID_CONTENT_TYPE",
        message: "Requests must use application/json content type.",
      },
      { status: 415 }
    );
  }

  // 2. Rate Limiting
  const rateCheck = checkRateLimit(clientIp);
  if (!rateCheck.allowed) {
    serverLogger.warn("RATE_LIMIT_EXCEEDED", `Rate limit hit from IP ${clientIp}`);
    return NextResponse.json<ApiResponse>(
      {
        success: false,
        error: "RATE_LIMIT_EXCEEDED",
        message: `Too many submissions from your connection. Please wait ${rateCheck.resetInMinutes} minutes before trying again.`,
      },
      {
        status: 429,
        headers: {
          "Retry-After": String(rateCheck.resetInMinutes * 60),
        },
      }
    );
  }

  // 3. Request Parsing & Size Verification (Hard 50KB limit)
  let body: Partial<ProjectIntakePayload>;
  try {
    const rawText = await req.text();
    if (rawText.length > 50000) {
      return NextResponse.json<ApiResponse>(
        {
          success: false,
          error: "PAYLOAD_TOO_LARGE",
          message: "The submission payload exceeds the allowed size limit.",
        },
        { status: 413 }
      );
    }
    body = JSON.parse(rawText);
  } catch (err) {
    return NextResponse.json<ApiResponse>(
      {
        success: false,
        error: "MALFORMED_JSON",
        message: "Unable to parse submission data. Please verify your input.",
      },
      { status: 400 }
    );
  }

  // 4. Anti-Spam Honeypot Verification
  if (body.website_hp && body.website_hp.trim().length > 0) {
    serverLogger.warn("SPAM_HONEYPOT_TRIGGERED", `Honeypot filled from IP ${clientIp}`);
    // Return a generic error to bot without disclosing honeypot mechanics
    return NextResponse.json<ApiResponse>(
      {
        success: false,
        error: "INVALID_SUBMISSION",
        message: "Submission could not be processed.",
      },
      { status: 400 }
    );
  }

  // 5. Server-Side Field Validation & Sanitization (Mass-Assignment immune)
  const fieldErrors: Record<string, string> = {};

  const name = sanitizeString(body.name, 100);
  if (!name || name.length < 2) {
    fieldErrors.name = "Please provide your full name (minimum 2 characters).";
  }

  const companyName = sanitizeString(body.companyName, 150);
  if (!companyName || companyName.length < 2) {
    fieldErrors.companyName = "Please provide your business or company name.";
  }

  const website = body.website ? sanitizeString(body.website, 200) : undefined;

  const industry = sanitizeString(body.industry, 50).toUpperCase();
  if (!industry || !ALLOWED_INDUSTRIES.has(industry)) {
    fieldErrors.industry = "Please select a valid industry from the provided list.";
  }

  const problemDescription = sanitizeString(body.problemDescription, 3000);
  if (!problemDescription || problemDescription.length < 10) {
    fieldErrors.problemDescription =
      "Please describe your operational problem or goal (minimum 10 characters).";
  }

  // Categories validation
  const problemCategories: string[] = [];
  if (Array.isArray(body.problemCategories)) {
    for (const cat of body.problemCategories) {
      const cleanCat = sanitizeString(cat, 50).toUpperCase();
      if (ALLOWED_PROBLEM_CATEGORIES.has(cleanCat)) {
        problemCategories.push(cleanCat);
      }
    }
  }

  const currentWorkflow = body.currentWorkflow
    ? sanitizeString(body.currentWorkflow, 2000)
    : undefined;

  // System Types validation (Must have at least 1)
  const systemTypes: string[] = [];
  if (Array.isArray(body.systemTypes)) {
    for (const sys of body.systemTypes) {
      const cleanSys = sanitizeString(sys, 50).toUpperCase();
      if (ALLOWED_SYSTEM_TYPES.has(cleanSys)) {
        systemTypes.push(cleanSys);
      }
    }
  }
  if (systemTypes.length === 0) {
    fieldErrors.systemTypes = "Please select at least one system module.";
  }

  const projectStage = sanitizeString(body.projectStage, 50).toUpperCase();
  if (!projectStage || !ALLOWED_PROJECT_STAGES.has(projectStage)) {
    fieldErrors.projectStage = "Please select a valid project stage.";
  }

  const timeline = sanitizeString(body.timeline, 50).toUpperCase();
  if (!timeline || !ALLOWED_TIMELINES.has(timeline)) {
    fieldErrors.timeline = "Please select an expected timeline.";
  }

  const rawBudget = body.budget ? sanitizeString(body.budget, 50).toUpperCase() : "";
  const budget = rawBudget && ALLOWED_BUDGET_RANGES.has(rawBudget) ? rawBudget : undefined;

  const email = sanitizeString(body.email, 254).toLowerCase();
  if (!email || !isValidEmail(email)) {
    fieldErrors.email = "Please enter a valid work email address.";
  }

  const phone = sanitizeString(body.phone, 30);
  if (!phone || !isValidPhone(phone)) {
    fieldErrors.phone = "Please enter a valid phone or WhatsApp number (minimum 7 digits).";
  }

  const additionalNotes = body.additionalNotes
    ? sanitizeString(body.additionalNotes, 2000)
    : undefined;

  const consent = body.consent === true;
  if (!consent) {
    fieldErrors.consent = "Please acknowledge that you agree to our Privacy Policy.";
  }

  if (Object.keys(fieldErrors).length > 0) {
    serverLogger.warn("VALIDATION_FAILED", "Project intake validation rejected", {
      fieldErrors,
      company: companyName,
    });
    return NextResponse.json<ApiResponse>(
      {
        success: false,
        error: "VALIDATION_ERROR",
        message: "Please check the highlighted fields and try again.",
        fieldErrors,
      },
      { status: 400 }
    );
  }

  // 6. Generate Secure Project Reference & Server-Controlled Record
  const projectReference = generateProjectReference();
  const submissionId = generateSubmissionId();
  const timestamp = new Date().toISOString();

  // Explicit field whitelist assignment (prevents mass-assignment vulnerabilities)
  const record: ProjectIntakeRecord = {
    id: submissionId,
    project_reference: projectReference,
    name,
    company: companyName,
    website: website || null,
    industry,
    problem: problemDescription,
    problem_categories: problemCategories,
    current_workflow: currentWorkflow || null,
    system_types: systemTypes,
    project_stage: projectStage,
    timeline,
    budget: budget || null,
    email,
    phone,
    additional_notes: additionalNotes || null,
    consent: true,
    consent_timestamp: timestamp,
    status: "RECEIVED",
    created_at: timestamp,
    updated_at: timestamp,
  };

  // 7. Database Persistence
  const repository = getProjectIntakeRepository();
  try {
    await repository.createSubmission(record);
  } catch (error) {
    serverLogger.error("PERSISTENCE_FAILED", `Could not save intake ${projectReference}`, error);
    return NextResponse.json<ApiResponse>(
      {
        success: false,
        error: "SUBMISSION_FAILED",
        message: "We couldn't submit your project brief right now. Please try again or contact us directly.",
      },
      { status: 500 }
    );
  }

  // 8. Notification Pipeline Dispatch (Email, CRM)
  try {
    await dispatchAllNotifications(record);
  } catch (notificationErr) {
    // Non-blocking: record is safely persisted in database even if email provider experiences latency
    serverLogger.warn("NOTIFICATION_WARNING", `Notification dispatch incomplete for ${projectReference}`, {
      error: notificationErr instanceof Error ? notificationErr.message : "Unknown",
    });
  }

  serverLogger.info("SUBMISSION_SUCCESS", `Successfully registered project brief ${projectReference}`, {
    projectReference,
    company: companyName,
  });

  return NextResponse.json<ApiResponse>(
    {
      success: true,
      projectReference,
    },
    { status: 200 }
  );
}

export async function GET() {
  return NextResponse.json<ApiResponse>(
    {
      success: false,
      error: "METHOD_NOT_ALLOWED",
      message: "The requested method is not supported on this route.",
    },
    {
      status: 405,
      headers: {
        Allow: "POST",
      },
    }
  );
}
