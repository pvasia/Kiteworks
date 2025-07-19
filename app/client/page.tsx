// app/page.tsx

import RenderSection from "@/components/strapi-sections/RenderSection";
import { fetchStrapiContent } from "@/lib/strapi-utils";

// Use any for section type to avoid conflicts with RenderSection's internal types
interface StrapiSection {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

interface StrapiHomeResponse {
  data: {
    sections: StrapiSection[];
    [key: string]: unknown;
  };
}

async function getData(): Promise<StrapiHomeResponse> {
  return await fetchStrapiContent<StrapiHomeResponse>("home", {
    populate: true,
    tags: ["home-content", "strapi-content"],
    revalidate: 3600,
  });
}

export default async function ExamplePage() {
  const data = await getData();

  // Debug: Check if images are present
  data.data.sections.forEach((section: StrapiSection, index: number) => {
    console.log(`Section ${index} (${section.__component}):`, {
      id: section.id,
      title: section.title,
      image: section.image,
      hasImage: !!section.image,
    });
  });

  return (
    <main>
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      {data.data.sections.map((section: any, index: number) => {
        return (
          <RenderSection
            key={`${section.__component}-${section.id}-${index}`}
            section={section}
          />
        );
      })}
    </main>
  );
}
