type LogLevel = "INFO" | "WARN" | "ERROR";

interface LogPayload {
  level: LogLevel;
  event: string;
  projectReference?: string;
  message: string;
  metadata?: Record<string, unknown>;
  timestamp: string;
}

export const serverLogger = {
  info: (event: string, message: string, metadata?: Record<string, unknown>) => {
    logMessage("INFO", event, message, metadata);
  },
  warn: (event: string, message: string, metadata?: Record<string, unknown>) => {
    logMessage("WARN", event, message, metadata);
  },
  error: (event: string, message: string, error?: unknown, metadata?: Record<string, unknown>) => {
    const errorMeta = error instanceof Error ? { errorName: error.name, errorMessage: error.message } : { error };
    logMessage("ERROR", event, message, { ...metadata, ...errorMeta });
  },
};

function logMessage(
  level: LogLevel,
  event: string,
  message: string,
  metadata?: Record<string, unknown>
) {
  // Sanitize metadata to never log keys like 'password', 'token', 'secret', 'apiKey'
  const sanitizedMeta: Record<string, unknown> = {};
  if (metadata) {
    for (const [k, v] of Object.entries(metadata)) {
      if (/password|token|secret|api_?key|auth/i.test(k)) {
        sanitizedMeta[k] = "[REDACTED]";
      } else {
        sanitizedMeta[k] = v;
      }
    }
  }

  const payload: LogPayload = {
    level,
    event,
    message,
    metadata: Object.keys(sanitizedMeta).length > 0 ? sanitizedMeta : undefined,
    timestamp: new Date().toISOString(),
  };

  const output = `[${payload.timestamp}] [${level}] [${event}] ${message}`;
  if (level === "ERROR") {
    console.error(output, payload.metadata || "");
  } else if (level === "WARN") {
    console.warn(output, payload.metadata || "");
  } else {
    console.log(output, payload.metadata || "");
  }
}
