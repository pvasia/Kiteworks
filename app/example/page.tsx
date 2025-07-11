// app/example/page.tsx

import RenderSection from "@/components/strapi-sections/RenderSection";

async function getData() {
  // Try deep population first
  const res = await fetch(
    `${process.env.STRAPI_API_URL}/api/home?populate[sections][populate]=*`
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch data: ${res.status}`);
  }

  return res.json();
}

export default async function ExamplePage() {
  const data = await getData();
  console.log("Full API response:", JSON.stringify(data, null, 2));
  console.log("Sections:", data.data.sections);

  // Debug: Check if images are present
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data.data.sections.forEach((section: any, index: number) => {
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
      {data.data.sections.map((section: any) => (
        <RenderSection key={section.id} section={section} />
      ))}
    </main>
  );
}
