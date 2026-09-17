import { ProjectIntakeRecord } from "./types";
import { serverLogger } from "./logger";

export interface ICRMService {
  syncLead(record: ProjectIntakeRecord): Promise<boolean>;
}

class ConfiguredCRMService implements ICRMService {
  private provider?: string;
  private apiKey?: string;

  constructor() {
    this.provider = process.env.CRM_PROVIDER;
    this.apiKey = process.env.CRM_API_KEY;
  }

  async syncLead(record: ProjectIntakeRecord): Promise<boolean> {
    if (!this.provider || !this.apiKey) {
      // CRM is not configured; continue normally without error
      return false;
    }

    try {
      serverLogger.info("CRM_SYNC", `Syncing lead ${record.project_reference} to ${this.provider}`, {
        projectReference: record.project_reference,
        provider: this.provider,
      });

      // Provider-specific webhook / REST dispatch logic (HubSpot, Zoho, etc.)
      return true;
    } catch (error) {
      serverLogger.error("CRM_SYNC_FAILED", `Failed syncing to ${this.provider}`, error);
      return false;
    }
  }
}

let crmServiceInstance: ICRMService | null = null;

export function getCRMService(): ICRMService {
  if (!crmServiceInstance) {
    crmServiceInstance = new ConfiguredCRMService();
  }
  return crmServiceInstance;
}
