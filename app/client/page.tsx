// app/page.tsx

import RenderSection from "@/components/strapi-sections/RenderSection";
import { fetchStrapiContent } from "@/lib/strapi-utils";

// Use any for section type to avoid conflicts with RenderSection's internal types
interface StrapiSection {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

interface StrapiHomeResponse {
  data?: {
    sections?: StrapiSection[];
    [key: string]: unknown;
  };
}

async function getData(): Promise<StrapiHomeResponse> {
  try {
    return await fetchStrapiContent<StrapiHomeResponse>("home", {
      populate: true,
      tags: ["home-content", "strapi-content"],
      revalidate: 3600,
    });
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return { data: { sections: [] } };
  }
}

export default async function ExamplePage() {
  const data = await getData();

  // Add null safety checks
  if (!data?.data?.sections) {
    return (
      <main>
        <div>No content available</div>
      </main>
    );
  }

  // Debug: Check if images are present
  data.data.sections.forEach((section: StrapiSection, index: number) => {
    console.log(`Section ${index} (${section?.__component}):`, {
      id: section?.id,
      title: section?.title,
      image: section?.image,
      hasImage: !!section?.image,
    });
  });

  return (
    <main>
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      {data.data.sections.map((section: any, index: number) => {
        // Add null safety check for section
        if (!section) return null;

        return (
          <RenderSection
            key={`${section.__component || "unknown"}-${
              section.id || index
            }-${index}`}
            section={section}
          />
        );
      })}
    </main>
  );
}
