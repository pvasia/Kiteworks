// app/page.tsx

import RenderSection from "@/components/strapi-sections/RenderSection";
import { fetchStrapiContent } from "@/lib/strapi-utils";

// Use any for section type to avoid conflicts with RenderSection's internal types
interface ClientStrapiSection {
  __component: string;
  id: number;
  title?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

interface StrapiHomeResponse {
  data?: {
    sections?: ClientStrapiSection[];
    [key: string]: unknown;
  };
}

async function getData(): Promise<StrapiHomeResponse> {
  try {
    // Check if STRAPI_API_URL is available (important for build time)
    if (!process.env.STRAPI_API_URL) {
      console.warn("STRAPI_API_URL not set, returning empty data");
      return { data: { sections: [] } };
    }

    const result = await fetchStrapiContent<StrapiHomeResponse>("home", {
      populate: true,
      tags: ["home-content", "strapi-content"],
      revalidate: 3600,
    });

    // Ensure we have a valid response structure
    if (!result || typeof result !== "object") {
      console.warn("Invalid response from Strapi, returning empty data");
      return { data: { sections: [] } };
    }

    // Ensure data exists and is properly structured
    if (!result.data || !Array.isArray(result.data.sections)) {
      console.warn("Missing or invalid sections in Strapi response");
      return { data: { sections: [] } };
    }

    return result;
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return { data: { sections: [] } };
  }
}

export default async function ExamplePage() {
  const data = await getData();

  // Add null safety checks with better fallbacks
  if (
    !data ||
    !data.data ||
    !data.data.sections ||
    !Array.isArray(data.data.sections)
  ) {
    return (
      <main>
        <div style={{ padding: "2rem", textAlign: "center" }}>
          <h1>Content Loading</h1>
          <p>Content is currently being prepared. Please check back shortly.</p>
          {process.env.NODE_ENV === "development" && (
            <details
              style={{
                marginTop: "1rem",
                textAlign: "left",
                background: "#f5f5f5",
                padding: "1rem",
              }}
            >
              <summary>Debug Info (Development Only)</summary>
              <pre>
                {JSON.stringify(
                  {
                    hasData: !!data,
                    hasDataProp: !!data?.data,
                    hasSections: !!data?.data?.sections,
                    sectionsType: Array.isArray(data?.data?.sections)
                      ? "array"
                      : typeof data?.data?.sections,
                    sectionsLength: data?.data?.sections?.length || 0,
                    strapiUrl: process.env.STRAPI_API_URL || "not set",
                  },
                  null,
                  2
                )}
              </pre>
            </details>
          )}
        </div>
      </main>
    );
  }

  // Filter out any null/undefined sections before processing
  const validSections = data.data.sections.filter(
    (section: ClientStrapiSection) =>
      section && typeof section === "object" && section.__component
  );

  if (validSections.length === 0) {
    return (
      <main>
        <div style={{ padding: "2rem", textAlign: "center" }}>
          <h1>No Content Available</h1>
          <p>No valid sections found to display.</p>
        </div>
      </main>
    );
  }

  // Debug: Check if images are present (only in development)
  if (process.env.NODE_ENV === "development") {
    validSections.forEach((section: ClientStrapiSection, index: number) => {
      console.log(`Section ${index} (${section?.__component}):`, {
        id: section?.id,
        title: section?.title,
        image: section?.image,
        hasImage: !!section?.image,
      });
    });
  }

  return (
    <main>
      {validSections.map((section: ClientStrapiSection, index: number) => {
        // Additional safety check with error boundary
        try {
          return (
            <RenderSection
              key={`${section.__component || "unknown"}-${
                section.id || index
              }-${index}`}
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              section={section as any}
            />
          );
        } catch (error) {
          console.error(`Error rendering section ${index}:`, error, section);
          if (process.env.NODE_ENV === "development") {
            return (
              <div
                key={`error-${index}`}
                style={{
                  padding: "1rem",
                  margin: "1rem",
                  background: "#fee",
                  border: "1px solid #fcc",
                }}
              >
                <strong>Section Render Error:</strong> {String(error)}
                <pre>{JSON.stringify(section, null, 2)}</pre>
              </div>
            );
          }
          return null;
        }
      })}
    </main>
  );
}
