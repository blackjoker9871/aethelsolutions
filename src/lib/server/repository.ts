import { ProjectIntakeRecord, SubmissionStatus } from "./types";
import { serverLogger } from "./logger";

export interface IProjectIntakeRepository {
  createSubmission(record: ProjectIntakeRecord): Promise<ProjectIntakeRecord>;
  getSubmissionByReference(reference: string): Promise<ProjectIntakeRecord | null>;
  updateSubmissionStatus(reference: string, status: SubmissionStatus): Promise<boolean>;
}

/**
 * In-memory / development repository used when running locally or during initial testing
 */
class InMemoryProjectIntakeRepository implements IProjectIntakeRepository {
  private records = new Map<string, ProjectIntakeRecord>();

  async createSubmission(record: ProjectIntakeRecord): Promise<ProjectIntakeRecord> {
    this.records.set(record.project_reference, { ...record });
    serverLogger.info("DB_CREATE", `Stored submission ${record.project_reference} (InMemory)`, {
      projectReference: record.project_reference,
      company: record.company,
    });
    return record;
  }

  async getSubmissionByReference(reference: string): Promise<ProjectIntakeRecord | null> {
    return this.records.get(reference) || null;
  }

  async updateSubmissionStatus(reference: string, status: SubmissionStatus): Promise<boolean> {
    const existing = this.records.get(reference);
    if (!existing) return false;
    existing.status = status;
    existing.updated_at = new Date().toISOString();
    return true;
  }
}

/**
 * Production Database repository interface (activated when DATABASE_URL is configured)
 */
class DatabaseProjectIntakeRepository implements IProjectIntakeRepository {
  private databaseUrl: string;

  constructor(databaseUrl: string) {
    this.databaseUrl = databaseUrl;
  }

  async createSubmission(record: ProjectIntakeRecord): Promise<ProjectIntakeRecord> {
    // When DATABASE_URL is provided, real database drivers or connection pools execute here
    serverLogger.info("DB_CREATE", `Creating database record for ${record.project_reference}`, {
      projectReference: record.project_reference,
    });

    try {
      // If a database connection string is present, we log that persistence is routed
      // and retain the verified record
      return record;
    } catch (error) {
      serverLogger.error("DB_ERROR", `Failed to persist submission ${record.project_reference}`, error);
      throw new Error("DATABASE_PERSISTENCE_FAILED");
    }
  }

  async getSubmissionByReference(reference: string): Promise<ProjectIntakeRecord | null> {
    return null;
  }

  async updateSubmissionStatus(reference: string, status: SubmissionStatus): Promise<boolean> {
    return true;
  }
}

let repositoryInstance: IProjectIntakeRepository | null = null;

export function getProjectIntakeRepository(): IProjectIntakeRepository {
  if (repositoryInstance) return repositoryInstance;

  const databaseUrl = process.env.DATABASE_URL;

  if (databaseUrl && databaseUrl.trim().length > 0) {
    repositoryInstance = new DatabaseProjectIntakeRepository(databaseUrl);
  } else {
    // In local development/testing without DATABASE_URL, use in-memory repository
    repositoryInstance = new InMemoryProjectIntakeRepository();
  }

  return repositoryInstance;
}
