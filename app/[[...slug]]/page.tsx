import { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getPageByPath,
  generatePageMetadata,
  getAllPagePaths,
} from "@/lib/strapi-utils";
import RenderSection from "@/components/strapi-sections/RenderSection";

// Define the section interface to match what RenderSection expects
interface ContentSection {
  __component: string;
  id: number;
  title: string;
  [key: string]: unknown;
}

interface PageProps {
  params: Promise<{ slug?: string[] }>;
}

/**
 * Generate static params for all pages (for static generation)
 * This function runs at build time to pre-generate all pages
 */
export async function generateStaticParams() {
  try {
    const paths = await getAllPagePaths();
    const params = [
      // Root path (homepage) - empty slug array
      {},
      // Ensure "home" page is always included
      { slug: ["home"] },
      // All other paths (both single-level and hierarchical)
      ...paths.map((path) => ({
        slug: path,
      })),
    ];

    console.log("Generated static params:", params);
    return params;
  } catch (error) {
    console.error("Error generating static params:", error);
    // Fallback: ensure at least homepage and home slug are available
    return [
      {}, // Root path
      { slug: ["home"] }, // Home page with slug
    ];
  }
}

/**
 * Generate metadata for the page
 */
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug: slugArray } = await params;

  // Convert slugArray to path, use ["home"] for homepage
  const slugPath = slugArray && slugArray.length > 0 ? slugArray : ["home"];

  try {
    const pageData = await getPageByPath(slugPath);

    if (!pageData) {
      return {
        title: "Page Not Found",
        description: "The requested page could not be found.",
      };
    }

    return generatePageMetadata(pageData);
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "Page Not Found",
      description: "The requested page could not be found.",
    };
  }
}

/**
 * Dynamic page component that handles homepage, single pages, and hierarchical pages
 */
export default async function DynamicPage({ params }: PageProps) {
  const { slug: slugArray } = await params;

  // Convert slugArray to path, use ["home"] for homepage
  const slugPath = slugArray && slugArray.length > 0 ? slugArray : ["home"];

  try {
    console.log(
      "Loading page data for path:",
      slugPath,
      slugArray ? `(from array: ${slugArray.join("/")})` : "(homepage)"
    );

    const pageData = await getPageByPath(slugPath);

    if (!pageData) {
      console.warn(`Page not found for path: ${slugPath.join("/")}`);
      notFound();
    }

    console.log("Page data loaded successfully:", {
      path: slugPath.join("/"),
      title: pageData.title,
      slug: pageData.slug,
      parent: pageData.parent?.slug || "none",
      contentSections: pageData.content?.length || 0,
      hasSEO: !!pageData.seo,
      isHomepage:
        slugPath.length === 1 &&
        slugPath[0] === "home" &&
        (!slugArray || slugArray.length === 0),
    });

    return (
      <main>
        {pageData.content?.map((section) => (
          <RenderSection
            key={`${section.__component}-${section.id}`}
            section={section as ContentSection}
          />
        ))}
      </main>
    );
  } catch (error) {
    console.error(
      `Error rendering page with path ${slugPath.join("/")}:`,
      error
    );
    notFound();
  }
}
