interface RateLimitRecord {
  count: number;
  resetTime: number;
}

// In-memory store for rate limiting
const ipSubmissionMap = new Map<string, RateLimitRecord>();

const MAX_SUBMISSIONS_PER_WINDOW = 5;
const WINDOW_DURATION_MS = 15 * 60 * 1000; // 15 minutes

// Clean expired records lazily and with unref timer
function cleanupExpired() {
  const now = Date.now();
  for (const [ip, record] of ipSubmissionMap.entries()) {
    if (now > record.resetTime) {
      ipSubmissionMap.delete(ip);
    }
  }
}

const cleanupTimer = setInterval(cleanupExpired, 5 * 60 * 1000);
if (typeof cleanupTimer === "object" && "unref" in cleanupTimer) {
  cleanupTimer.unref();
}

export function checkRateLimit(ip: string): { allowed: boolean; remaining: number; resetInMinutes: number } {
  cleanupExpired();
  const now = Date.now();
  const clientRecord = ipSubmissionMap.get(ip);

  if (!clientRecord || now > clientRecord.resetTime) {
    ipSubmissionMap.set(ip, {
      count: 1,
      resetTime: now + WINDOW_DURATION_MS,
    });
    return {
      allowed: true,
      remaining: MAX_SUBMISSIONS_PER_WINDOW - 1,
      resetInMinutes: 15,
    };
  }

  if (clientRecord.count >= MAX_SUBMISSIONS_PER_WINDOW) {
    const minutesLeft = Math.ceil((clientRecord.resetTime - now) / 60000);
    return {
      allowed: false,
      remaining: 0,
      resetInMinutes: minutesLeft,
    };
  }

  clientRecord.count += 1;
  return {
    allowed: true,
    remaining: MAX_SUBMISSIONS_PER_WINDOW - clientRecord.count,
    resetInMinutes: Math.ceil((clientRecord.resetTime - now) / 60000),
  };
}
