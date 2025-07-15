import { NextRequest, NextResponse } from "next/server";
import { revalidateTag, revalidatePath } from "next/cache";
import {
  verifyWebhookSignature,
  parseWebhookEvent,
  getRevalidationPaths,
  getRevalidationTags,
  isRateLimited,
} from "@/lib/webhook-utils";

// Types for the webhook payload
interface RevalidationRequest {
  event: string;
  model: string;
  path?: string;
  tag?: string;
  secret?: string;
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const clientIp =
      request.headers.get("x-forwarded-for") ||
      request.headers.get("x-real-ip") ||
      "unknown";

    // Rate limiting
    if (isRateLimited(clientIp)) {
      return NextResponse.json(
        { error: "Rate limit exceeded" },
        { status: 429 }
      );
    }

    const body: RevalidationRequest = await request.json();

    // Enhanced webhook verification
    const webhookSecret = process.env.WEBHOOK_SECRET;
    const revalidationSecret = process.env.REVALIDATION_SECRET;

    if (!webhookSecret || !revalidationSecret) {
      console.error("Missing webhook or revalidation secrets");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    // Verify webhook signature if provided
    const signature = request.headers.get("x-webhook-signature");
    if (signature) {
      const rawBody = JSON.stringify(body);
      if (!verifyWebhookSignature(rawBody, signature, webhookSecret)) {
        return NextResponse.json(
          { error: "Invalid webhook signature" },
          { status: 401 }
        );
      }
    }

    // Verify the revalidation secret for additional security
    const secret = body.secret || request.headers.get("x-webhook-secret");
    if (secret !== revalidationSecret) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Parse webhook event
    const webhookEvent = parseWebhookEvent(body);

    // Log the revalidation request
    console.log("Revalidation request received:", {
      event: webhookEvent.event,
      model: webhookEvent.model,
      entityId: webhookEvent.entityId,
      timestamp: webhookEvent.timestamp,
      ip: clientIp,
    });

    // Get paths and tags to revalidate
    const pathsToRevalidate = getRevalidationPaths(
      webhookEvent.event,
      webhookEvent.model
    );
    const tagsToRevalidate = getRevalidationTags(
      webhookEvent.event,
      webhookEvent.model
    );

    // Revalidate paths
    for (const path of pathsToRevalidate) {
      await revalidatePath(path);
      console.log(`Revalidated path: ${path}`);
    }

    // Revalidate tags
    for (const tag of tagsToRevalidate) {
      await revalidateTag(tag);
      console.log(`Revalidated tag: ${tag}`);
    }

    // Custom path/tag revalidation if provided
    if (body.path) {
      await revalidatePath(body.path);
      console.log(`Custom path revalidated: ${body.path}`);
    }

    if (body.tag) {
      await revalidateTag(body.tag);
      console.log(`Custom tag revalidated: ${body.tag}`);
    }

    return NextResponse.json({
      revalidated: true,
      now: Date.now(),
      event: webhookEvent.event,
      model: webhookEvent.model,
      entityId: webhookEvent.entityId,
      revalidatedPaths: pathsToRevalidate,
      revalidatedTags: tagsToRevalidate,
    });
  } catch (error) {
    console.error("Revalidation error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// Optional: Handle GET requests for manual revalidation during development
export async function GET(request: NextRequest) {
  // Only allow in development
  if (process.env.NODE_ENV !== "development") {
    return NextResponse.json(
      { error: "Not allowed in production" },
      { status: 403 }
    );
  }

  const searchParams = request.nextUrl.searchParams;
  const path = searchParams.get("path");
  const tag = searchParams.get("tag");
  const secret = searchParams.get("secret");

  // Verify secret even in development
  if (secret !== process.env.REVALIDATION_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    if (path) {
      await revalidatePath(path);
    }
    if (tag) {
      await revalidateTag(tag);
    }
    if (!path && !tag) {
      // Default revalidation
      await revalidateTag("strapi-content");
      await revalidatePath("/");
    }

    return NextResponse.json({
      revalidated: true,
      now: Date.now(),
      path,
      tag,
    });
  } catch (error) {
    console.error("Manual revalidation error:", error);
    return NextResponse.json({ error: "Revalidation failed" }, { status: 500 });
  }
}
