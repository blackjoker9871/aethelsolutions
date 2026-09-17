import { ProjectIntakeRecord } from "./types";
import { getEmailService } from "./email";
import { getCRMService } from "./crm";
import { serverLogger } from "./logger";

export async function dispatchAllNotifications(record: ProjectIntakeRecord): Promise<void> {
  const emailService = getEmailService();
  const crmService = getCRMService();

  // Run notification dispatches concurrently without blocking each other
  const results = await Promise.allSettled([
    emailService.sendProjectNotifications(record),
    crmService.syncLead(record),
  ]);

  serverLogger.info("NOTIFICATIONS_COMPLETE", `Notification pipeline finished for ${record.project_reference}`, {
    emailResult: results[0].status,
    crmResult: results[1].status,
  });
}
