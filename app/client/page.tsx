"use client";
import { homeContent } from "@/lib/content/home-content";
import Hero1 from "@/components/hero/Hero1";
import AgencySelector from "@/components/molecules/AgencySelector";
import PageSection3 from "@/components/page-sections/PageSection3";
import PageSection4 from "@/components/page-sections/PageSection4";
import SectionFormCenter from "@/components/page-sections/SectionFormCenter";
import TestimonialSlider from "@/components/organisms/TestimonialSlider";

// import Hero8 from "@/components/hero/Hero8";

export default function ClientPage() {
  return (
    <div>
      <Hero1
        imageUrl={homeContent.hero1.imageUrl}
        title={homeContent.hero1.title}
        subtitle={homeContent.hero1.subtitle}
        buttonText={homeContent.hero1.buttonText}
        buttonLink={homeContent.hero1.buttonLink}
      />
      <AgencySelector />
      <PageSection3
        heading={homeContent.pageSection3.heading}
        bodyCopy={homeContent.pageSection3.bodyCopy}
        imageUrl={homeContent.pageSection3.imageUrl}
      />
      <PageSection4
        heading={homeContent.pageSection4.heading}
        bodyCopy={homeContent.pageSection4.bodyCopy}
        imageUrl={homeContent.pageSection4.imageUrl}
      />

      {/* <Hero8
        imageUrl={homeContent.hero.imageUrl}
        title={homeContent.hero.title}
        subtitle={homeContent.hero.subtitle}
        buttonText={homeContent.hero.buttonText}
        buttonLink={homeContent.hero.buttonLink}
        height={homeContent.hero.height}
        isParallax={homeContent.hero.isParallax}
      /> */}

      <TestimonialSlider
        testimonials={homeContent.testimonials}
        autoAdvance={true}
        autoAdvanceInterval={5000}
        variant="secondary"
      />

      <SectionFormCenter
        title={homeContent.sectionFormCenter.title}
        subtitle={homeContent.sectionFormCenter.subtitle}
      />
    </div>
  );
}
