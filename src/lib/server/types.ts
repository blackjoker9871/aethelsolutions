export type SubmissionStatus =
  | "RECEIVED"
  | "REVIEWING"
  | "CONTACTED"
  | "PROPOSAL"
  | "IN_PROGRESS"
  | "COMPLETED"
  | "ARCHIVED";

export interface ProjectIntakePayload {
  // Step 1: Business
  name: string;
  companyName: string;
  website?: string;
  industry: string;

  // Step 2: Problem
  problemDescription: string;
  problemCategories?: string[];
  currentWorkflow?: string;

  // Step 3: System
  systemTypes: string[];

  // Step 4: Scope
  projectStage: string;
  timeline: string;
  budget?: string;

  // Step 5: Contact & Consent
  email: string;
  phone: string;
  additionalNotes?: string;
  consent: boolean;

  // Anti-spam honeypot
  website_hp?: string;
}

export interface ProjectIntakeRecord {
  id: string;
  project_reference: string;
  name: string;
  company: string;
  website: string | null;
  industry: string;
  problem: string;
  problem_categories: string[];
  current_workflow: string | null;
  system_types: string[];
  project_stage: string;
  timeline: string;
  budget: string | null;
  email: string;
  phone: string;
  additional_notes: string | null;
  consent: boolean;
  consent_timestamp: string;
  status: SubmissionStatus;
  created_at: string;
  updated_at: string;
}

export type ApiResponse<T = unknown> =
  | {
      success: true;
      projectReference: string;
      data?: T;
    }
  | {
      success: false;
      error: string;
      message: string;
      fieldErrors?: Record<string, string>;
    };
