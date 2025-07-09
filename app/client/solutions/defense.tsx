"use client";

import Hero5 from "@/components/hero/Hero5";
import IconHeading from "@/components/molecules/IconHeading";
import SectionFormCenter from "@/components/page-sections/SectionFormCenter";
import ThreeTiles from "@/components/tiles/three-tiles";
import { defenseContent } from "@/lib/content/solutions/defense-content";
import { useState } from "react";

export default function ClientSolutionsDefense() {
  const [fullname, setFullname] = useState("");
  const [company, setCompany] = useState("");
  const [businessEmail, setBusinessEmail] = useState("");

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
        fullname={fullname}
        company={company}
        businessEmail={businessEmail}
        onSubmit={() => {}}
        onChangeFullname={(e) => setFullname(e.target.value)}
        onChangeCompany={(e) => setCompany(e.target.value)}
        onChangeBusinessEmail={(e) => setBusinessEmail(e.target.value)}
      />
    </div>
  );
}
