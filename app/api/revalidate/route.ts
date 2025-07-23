import { NextRequest, NextResponse } from "next/server";
import { revalidateTag, revalidatePath } from "next/cache";

export async function POST(request: NextRequest) {
  const authHeader = request.headers.get("authorization");
  const secret = process.env.REVALIDATION_SECRET;

  // Check for authorization
  if (!secret || authHeader !== `Bearer ${secret}`) {
    console.error("Unauthorized revalidation attempt");
    console.error("Expected:", `Bearer ${secret}`);
    console.error("Received:", authHeader);
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    console.log("=== REVALIDATION WEBHOOK RECEIVED ===");
    console.log("Full webhook payload:", JSON.stringify(body, null, 2));
    console.log("========================================");

    const { model, entry, event } = body;

    if (!model) {
      console.error("No model specified in revalidation webhook");
      return NextResponse.json({ error: "Model is required" }, { status: 400 });
    }

    console.log(
      `Processing revalidation for model: ${model}, event: ${
        event || "unknown"
      }`
    );

    // Handle different content types
    switch (model) {
      case "header":
        console.log("Revalidating header content...");
        revalidateTag("header-content");
        revalidateTag("global-content");
        break;

      case "footer":
        console.log("Revalidating footer content...");
        revalidateTag("footer-content");
        revalidateTag("global-content");
        break;

      case "page":
        console.log("Revalidating page content...");
        console.log("Entry data:", JSON.stringify(entry, null, 2));

        // Always revalidate general page content
        revalidateTag("page-content");

        // If we have entry data with slug, also revalidate the specific page path
        if (entry?.slug) {
          console.log(`Revalidating specific page: /${entry.slug}`);
          revalidateTag(`page-${entry.slug}`);

          // If this is the home page, revalidate the root path
          if (entry.slug === "home") {
            console.log("Revalidating homepage at root path");
            revalidatePath("/");
          } else {
            // Revalidate the direct slug path
            revalidatePath(`/${entry.slug}`);
            console.log(`Revalidated path: /${entry.slug}`);

            // If the page has a parent, also revalidate the hierarchical path
            if (entry.parent?.slug) {
              const hierarchicalPath = `/${entry.parent.slug}/${entry.slug}`;
              console.log(
                `Revalidating hierarchical page: ${hierarchicalPath}`
              );
              revalidatePath(hierarchicalPath);
            }
          }
        } else {
          console.warn(
            "No slug found in entry data, only revalidating general page-content tag"
          );
        }

        // Also revalidate root path for any potential page changes
        revalidatePath("/");
        console.log("Revalidated root path for general page changes");
        break;

      case "home":
        console.log("Revalidating home content...");
        revalidateTag("home-content");
        revalidatePath("/");
        break;

      // Handle Strapi collection type names that might be different
      case "pages":
        console.log("Revalidating pages collection (treating as page)...");
        revalidateTag("page-content");

        if (entry?.slug) {
          revalidateTag(`page-${entry.slug}`);
          if (entry.slug === "home") {
            revalidatePath("/");
          } else {
            revalidatePath(`/${entry.slug}`);
            if (entry.parent?.slug) {
              revalidatePath(`/${entry.parent.slug}/${entry.slug}`);
            }
          }
        }
        revalidatePath("/");
        break;

      default:
        console.log(`Revalidating generic content for model: ${model}`);
        revalidateTag("strapi-content");
        revalidateTag(`${model}-content`);

        // If it's likely a page-related model, also revalidate page content
        if (model.includes("page") || entry?.slug) {
          console.log(
            "Detected page-like content, also revalidating page tags"
          );
          revalidateTag("page-content");
          if (entry?.slug) {
            revalidateTag(`page-${entry.slug}`);
            revalidatePath(`/${entry.slug}`);
          }
        }
        break;
    }

    const responseData = {
      success: true,
      message: `Content revalidated for ${model}`,
      timestamp: new Date().toISOString(),
      processedModel: model,
      processedEvent: event || "unknown",
      entrySlug: entry?.slug || "none",
      hasParent: !!entry?.parent,
    };

    console.log(`Successfully revalidated content:`, responseData);

    return NextResponse.json(responseData);
  } catch (error) {
    console.error("Error during revalidation:", error);
    return NextResponse.json(
      {
        error: "Revalidation failed",
        details: error instanceof Error ? error.message : "Unknown error",
      },
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
