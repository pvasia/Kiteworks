"use client";

import Hero5 from "@/components/hero/Hero5";
import IconHeading from "@/components/molecules/IconHeading";
import SectionFormCenter from "@/components/page-sections/SectionFormCenter";
import ThreeTiles from "@/components/tiles/three-tiles";
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
      <ThreeTiles
        title={defenseContent.threeTiles.title}
        subHeading={defenseContent.threeTiles.subHeading}
      >
        {defenseContent.threeTiles.map((item, key) => (
          <IconHeading key={key} {...item} />
        ))}
      </ThreeTiles>
      <SectionFormCenter
        title={defenseContent.sectionFormCenter.title}
        subtitle={defenseContent.sectionFormCenter.subtitle}
      />
    </div>
  );
}
