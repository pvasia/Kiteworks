"use client";

import Hero5 from "@/components/hero/Hero5";
import SectionFormCenter from "@/components/page-sections/SectionFormCenter";
import IconThreeTiles from "@/components/tiles/icon-three-tiles";
import { defenseContent } from "@/lib/content/solutions/defense-content";

export default function ClientSolutionsDefense() {
  return (
    <div>
      <Hero5
        imageUrl={defenseContent.hero.imageUrl}
        title={defenseContent.hero.title}
        subtitle={defenseContent.hero.subtitle}
        buttonText={defenseContent.hero.buttonText}
        buttonLink={defenseContent.hero.buttonLink}
      />
      <IconThreeTiles
        title={defenseContent.threeTiles.title}
        subHeading={defenseContent.threeTiles.subHeading}
        items={defenseContent.threeTiles}
      />
      <SectionFormCenter
        title={defenseContent.sectionFormCenter.title}
        subtitle={defenseContent.sectionFormCenter.subtitle}
      />
    </div>
  );
}
