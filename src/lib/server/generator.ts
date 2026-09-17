import crypto from "crypto";

const SAFE_ALPHANUMERIC = "23456789ABCDEFGHJKLMNPQRSTUVWXYZ"; // Excludes easily confused chars (0, O, 1, I)

export function generateProjectReference(): string {
  // Generate a 4-character secure alphanumeric token e.g. 7K42
  const bytes = crypto.randomBytes(4);
  let code = "";
  for (let i = 0; i < 4; i++) {
    const index = bytes[i] % SAFE_ALPHANUMERIC.length;
    code += SAFE_ALPHANUMERIC[index];
  }
  return `AETHEL-${code}`;
}

export function generateSubmissionId(): string {
  return crypto.randomUUID();
}
