import { createHmac, timingSafeEqual } from "crypto";

/**
 * Verify webhook signature from Strapi
 * @param payload - The raw webhook payload
 * @param signature - The signature from the webhook header
 * @param secret - The webhook secret
 * @returns boolean indicating if the signature is valid
 */
export function verifyWebhookSignature(
  payload: string,
  signature: string,
  secret: string
): boolean {
  if (!payload || !signature || !secret) {
    return false;
  }

  try {
    // Create the expected signature
    const expectedSignature = createHmac("sha256", secret)
      .update(payload)
      .digest("hex");

    // Compare signatures using timing-safe comparison
    const expectedBuffer = Buffer.from(expectedSignature, "hex");
    const actualBuffer = Buffer.from(signature.replace("sha256=", ""), "hex");

    return (
      expectedBuffer.length === actualBuffer.length &&
      timingSafeEqual(expectedBuffer, actualBuffer)
    );
  } catch (error) {
    console.error("Error verifying webhook signature:", error);
    return false;
  }
}

interface WebhookPayload {
  event?: string;
  model?: string;
  entry?: {
    id?: number;
  };
  createdAt?: string;
}

/**
 * Extract webhook event information from Strapi webhook payload
 * @param payload - The webhook payload from Strapi
 * @returns Parsed webhook event information
 */
export function parseWebhookEvent(payload: WebhookPayload): {
  event: string;
  model: string;
  entityId?: number;
  timestamp: string;
} {
  return {
    event: payload.event || "unknown",
    model: payload.model || "unknown",
    entityId: payload.entry?.id,
    timestamp: payload.createdAt || new Date().toISOString(),
  };
}

/**
 * Determine which paths need revalidation based on the webhook event
 * @param event - The webhook event type
 * @param model - The content model that changed
 * @returns Array of paths that should be revalidated
 */
export function getRevalidationPaths(event: string, model: string): string[] {
  const paths: string[] = [];

  switch (model) {
    case "home":
      paths.push("/", "/example");
      break;
    case "global":
      paths.push("/"); // Global changes affect all pages
      break;
    case "page":
      paths.push("/"); // Add specific page paths as needed
      break;
    default:
      // For unknown models, revalidate common paths
      paths.push("/", "/example");
      break;
  }

  return paths;
}

/**
 * Determine which cache tags need revalidation based on the webhook event
 * @param event - The webhook event type
 * @param model - The content model that changed
 * @returns Array of cache tags that should be revalidated
 */
export function getRevalidationTags(event: string, model: string): string[] {
  const tags: string[] = ["strapi-content"]; // Always revalidate this general tag

  switch (model) {
    case "home":
      tags.push("home-content");
      break;
    case "global":
      tags.push("global-content");
      break;
    case "page":
      tags.push("page-content");
      break;
    default:
      // For unknown models, add a generic tag
      tags.push(`${model}-content`);
      break;
  }

  return tags;
}

/**
 * Rate limiting for webhook requests
 */
const requestCounts = new Map<string, { count: number; resetTime: number }>();

export function isRateLimited(
  ip: string,
  maxRequests: number = 10,
  windowMs: number = 60000
): boolean {
  const now = Date.now();
  const windowStart = now - windowMs;

  const current = requestCounts.get(ip);

  if (!current || current.resetTime <= windowStart) {
    requestCounts.set(ip, { count: 1, resetTime: now + windowMs });
    return false;
  }

  if (current.count >= maxRequests) {
    return true;
  }

  current.count++;
  return false;
}

/**
 * Clean up expired rate limiting entries
 */
export function cleanupRateLimitCache(): void {
  const now = Date.now();
  for (const [ip, data] of requestCounts) {
    if (data.resetTime <= now) {
      requestCounts.delete(ip);
    }
  }
}

// Clean up rate limit cache every 5 minutes
setInterval(cleanupRateLimitCache, 5 * 60 * 1000);
