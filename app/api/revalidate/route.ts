import { NextRequest, NextResponse } from "next/server";
import { revalidateTag, revalidatePath } from "next/cache";

export async function POST(request: NextRequest) {
  const authHeader = request.headers.get("authorization");
  const secret = process.env.REVALIDATION_SECRET;

  // Check for authorization
  if (!secret || authHeader !== `Bearer ${secret}`) {
    console.error("Unauthorized revalidation attempt");
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    console.log("Revalidation webhook payload:", body);

    const { model, entry } = body;

    if (!model) {
      console.error("No model specified in revalidation webhook");
      return NextResponse.json({ error: "Model is required" }, { status: 400 });
    }

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

            // If the page has a parent, also revalidate the hierarchical path
            if (entry.parent?.slug) {
              const hierarchicalPath = `/${entry.parent.slug}/${entry.slug}`;
              console.log(
                `Revalidating hierarchical page: ${hierarchicalPath}`
              );
              revalidatePath(hierarchicalPath);
            }
          }
        }

        // Also revalidate root path for any potential page changes
        revalidatePath("/");
        break;

      case "home":
        console.log("Revalidating home content...");
        revalidateTag("home-content");
        revalidatePath("/");
        break;

      default:
        console.log(`Revalidating generic content for model: ${model}`);
        revalidateTag("strapi-content");
        revalidateTag(`${model}-content`);
        break;
    }

    console.log(`Successfully revalidated content for model: ${model}`);

    return NextResponse.json({
      success: true,
      message: `Content revalidated for ${model}`,
      timestamp: new Date().toISOString(),
    });
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
