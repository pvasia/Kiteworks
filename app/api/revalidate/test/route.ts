import { NextRequest, NextResponse } from "next/server";
import { revalidateTag, revalidatePath } from "next/cache";

// Test endpoint for debugging revalidation issues
export async function POST(request: NextRequest) {
  // Only allow in development or with proper auth
  const authHeader = request.headers.get("authorization");
  const secret = process.env.REVALIDATION_SECRET;

  if (
    process.env.NODE_ENV === "production" &&
    (!secret || authHeader !== `Bearer ${secret}`)
  ) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    console.log("=== REVALIDATION TEST STARTED ===");

    // Test revalidating page content
    console.log("Testing page content revalidation...");
    revalidateTag("page-content");
    console.log("✅ Revalidated page-content tag");

    // Test revalidating specific page
    revalidateTag("page-home");
    console.log("✅ Revalidated page-home tag");

    // Test revalidating paths
    revalidatePath("/");
    console.log("✅ Revalidated root path");

    revalidatePath("/test-page");
    console.log("✅ Revalidated /test-page path");

    console.log("=== REVALIDATION TEST COMPLETED ===");

    return NextResponse.json({
      success: true,
      message: "Test revalidation completed",
      timestamp: new Date().toISOString(),
      testedTags: ["page-content", "page-home"],
      testedPaths: ["/", "/test-page"],
    });
  } catch (error) {
    console.error("Test revalidation error:", error);
    return NextResponse.json(
      {
        error: "Test failed",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

// GET endpoint to simulate a webhook payload
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const secret = searchParams.get("secret");

  if (secret !== process.env.REVALIDATION_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Simulate different webhook payloads
  const testPayloads = {
    page: {
      event: "entry.update",
      model: "page",
      entry: {
        id: 1,
        slug: "test-page",
        title: "Test Page",
        parent: null,
      },
    },
    pageWithParent: {
      event: "entry.update",
      model: "page",
      entry: {
        id: 2,
        slug: "child-page",
        title: "Child Page",
        parent: {
          id: 3,
          slug: "parent-page",
        },
      },
    },
    pages: {
      event: "entry.publish",
      model: "pages", // Some Strapi setups use plural
      entry: {
        id: 1,
        slug: "home",
        title: "Home Page",
      },
    },
    homePage: {
      event: "entry.update",
      model: "page",
      entry: {
        id: 1,
        slug: "home",
        title: "Home Page",
      },
    },
  };

  return NextResponse.json({
    message: "Test webhook payloads",
    testEndpoint: "/api/revalidate",
    payloads: testPayloads,
    instructions:
      "POST any of these payloads to /api/revalidate with proper authorization header",
  });
}
