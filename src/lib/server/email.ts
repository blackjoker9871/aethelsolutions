import { ProjectIntakeRecord } from "./types";
import { serverLogger } from "./logger";
import { sanitizeHeaderValue, escapeHtml } from "./sanitizer";

export interface EmailSendResult {
  internalSent: boolean;
  userConfirmationSent: boolean;
  error?: string;
}

export interface IEmailService {
  sendProjectNotifications(record: ProjectIntakeRecord): Promise<EmailSendResult>;
}

class ConfiguredEmailService implements IEmailService {
  private provider: string;
  private apiKey?: string;
  private notificationEmail: string;

  constructor() {
    this.provider = process.env.EMAIL_PROVIDER || "console";
    this.apiKey = process.env.EMAIL_API_KEY;
    this.notificationEmail =
      process.env.AETHEL_NOTIFICATION_EMAIL || "aethel.officialdesk@gmail.com";
  }

  async sendProjectNotifications(record: ProjectIntakeRecord): Promise<EmailSendResult> {
    if (this.provider === "disabled") {
      serverLogger.info("EMAIL_SKIPPED", "Email notifications are disabled by configuration");
      return { internalSent: false, userConfirmationSent: false };
    }

    try {
      // 1. Send Internal Notification to Aethel Engineering Directors
      const internalSuccess = await this.sendInternalEmail(record);

      // 2. Send User Confirmation Email
      const userSuccess = await this.sendUserConfirmationEmail(record);

      return {
        internalSent: internalSuccess,
        userConfirmationSent: userSuccess,
      };
    } catch (error) {
      serverLogger.error("EMAIL_ERROR", "Failed to dispatch email notifications", error, {
        projectReference: record.project_reference,
      });
      return {
        internalSent: false,
        userConfirmationSent: false,
        error: error instanceof Error ? error.message : "EMAIL_DISPATCH_FAILED",
      };
    }
  }

  private async sendInternalEmail(record: ProjectIntakeRecord): Promise<boolean> {
    const rawSubject = `New Aethel Project Brief — ${record.project_reference}`;
    const subject = sanitizeHeaderValue(rawSubject);
    const textContent = `
=================================================================
AETHEL SOLUTIONS // INCOMING PROJECT BRIEF
Reference ID: ${record.project_reference}
Status: ${record.status}
Timestamp: ${record.created_at}
=================================================================

CLIENT & BUSINESS DETAILS:
- Full Name: ${record.name}
- Company: ${record.company}
- Website: ${record.website || "N/A"}
- Industry: ${record.industry}

CONTACT DETAILS:
- Work Email: ${record.email}
- Phone/WhatsApp: ${record.phone}

PROBLEM & WORKFLOW:
- Description:
${record.problem}
- Categories: ${record.problem_categories.join(", ") || "None"}

SYSTEM & SCOPE:
- Requested Modules: ${record.system_types.join(", ")}
- Project Stage: ${record.project_stage}
- Timeline: ${record.timeline}
- Budget Range: ${record.budget || "N/A"}

ADDITIONAL NOTES:
${record.additional_notes || "None provided"}

CONSENT:
- Privacy Policy Accepted: ${record.consent ? "Yes" : "No"} (${record.consent_timestamp})
=================================================================
`;

    // If Resend REST API is configured:
    if (this.apiKey && this.provider === "resend") {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${this.apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Aethel Project Intake <system@aethelsolution.in>",
          to: [sanitizeHeaderValue(this.notificationEmail)],
          subject,
          text: textContent,
        }),
      });
      return res.ok;
    }

    // Default console notification for dev/testing when provider is not external API
    serverLogger.info("EMAIL_INTERNAL_DISPATCHED", `Internal notification logged for ${record.project_reference}`, {
      to: this.notificationEmail,
      subject,
    });
    return true;
  }

  private async sendUserConfirmationEmail(record: ProjectIntakeRecord): Promise<boolean> {
    const rawSubject = `Aethel Project Brief Received — ${record.project_reference}`;
    const subject = sanitizeHeaderValue(rawSubject);
    const textContent = `
Hello ${record.name},

Thank you for contacting AETHELSOLUTIONS PRIVATE LIMITED.

We have received your project brief for ${record.company}.

Your Project Reference ID is: ${record.project_reference}

WHAT HAPPENS NEXT:
1. Our engineering directors will review your business challenge, requested modules, and operational scope.
2. We will reach out via email (${record.email}) or WhatsApp (${record.phone}) to coordinate an engineering discovery conversation.

If you have additional technical documents or workflow diagrams to share in the meantime, you can reply directly with your Project Reference ID in the subject line.

AETHELSOLUTIONS PRIVATE LIMITED
Website: aethelsolution.in
Support Desk: aethel.officialdesk@gmail.com
`;

    if (this.apiKey && this.provider === "resend") {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${this.apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Aethel Solutions <intake@aethelsolution.in>",
          to: [sanitizeHeaderValue(record.email)],
          subject,
          text: textContent,
        }),
      });
      return res.ok;
    }

    serverLogger.info("EMAIL_USER_CONFIRMATION_DISPATCHED", `Confirmation logged for ${record.email}`, {
      projectReference: record.project_reference,
    });
    return true;
  }
}

let emailServiceInstance: IEmailService | null = null;

export function getEmailService(): IEmailService {
  if (!emailServiceInstance) {
    emailServiceInstance = new ConfiguredEmailService();
  }
  return emailServiceInstance;
}
