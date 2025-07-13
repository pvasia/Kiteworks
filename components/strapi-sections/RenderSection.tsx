// components/strapi-sections/RenderSection.tsx
import Hero1 from "@hero/Hero1";
import Hero2 from "@hero/Hero2";
import Hero3 from "@hero/Hero3";
import Hero4 from "@hero/Hero4";
import Hero5 from "@hero/Hero5";
import Hero6 from "@hero/Hero6";
import Hero7 from "@hero/Hero7";
import Hero8 from "@hero/Hero8";
import HeroMedium from "@hero/HeroMedium";
import HeroSmall from "@hero/HeroSmall";
import { getBestImageSize, StrapiMediaObject } from "@/lib/strapi-utils";
import PageSection1 from "../page-sections/PageSection1/PageSection1";
import PageSection2 from "../page-sections/PageSection2/PageSection2";
import PageSection3 from "../page-sections/PageSection3/PageSection3";
import PageSection4 from "../page-sections/PageSection4/PageSection4";
import PageSection5 from "../page-sections/PageSection5/PageSection5";
import PageSection6 from "../page-sections/PageSection6";
import PageSection7 from "../page-sections/PageSection7/PageSection7";
import PageSection8 from "../page-sections/PageSection8/PageSection8";
import SectionFormCenter from "../page-sections/SectionFormCenter";
import SectionFormRight from "../page-sections/SectionFormRight";

interface StrapiSection {
  __component: string;
  id: number;
  title: string;
  subtitle?: string;
  buttonLabel?: string;
  buttonLink?: string;
  image?: StrapiMediaObject;
  heading?: string;
  bodyCopy?: string;
  copy?: string;
}

interface SectionProps {
  section: StrapiSection;
}

export default function RenderSection({ section }: SectionProps) {
  // Get the best image size for hero components
  const imageUrl = getBestImageSize(section.image, "hero");

  // Debug logging
  console.log("Section debug:", {
    component: section.__component,
    title: section.title,
    hasImage: !!section.image,
    imageUrl: section.image?.url,
    fullImageUrl: imageUrl,
    imageObject: section.image,
  });

  switch (section.__component) {
    case "sections.hero1":
      return (
        <Hero1
          imageUrl={imageUrl || ""}
          title={section.title}
          subtitle={section.subtitle || ""}
          buttonText={section.buttonLabel || ""}
          buttonLink={section.buttonLink || ""}
        />
      );
    case "sections.hero2":
      return (
        <Hero2
          imageUrl={imageUrl || ""}
          title={section.title}
          subtitle={section.subtitle || ""}
          buttonText={section.buttonLabel || ""}
          buttonLink={section.buttonLink || ""}
        />
      );
    case "sections.hero3":
      return (
        <Hero3
          imageUrl={imageUrl || ""}
          imageAlt={section.image?.alternativeText || ""}
          title={section.title}
          subtitle={section.subtitle || ""}
          buttonText={section.buttonLabel || ""}
          buttonLink={section.buttonLink || ""}
        />
      );
    case "sections.hero4":
      return (
        <Hero4
          imageUrl={imageUrl || ""}
          imageAlt={section.image?.alternativeText || ""}
          title={section.title}
          subtitle={section.subtitle || ""}
          buttonText={section.buttonLabel || ""}
          buttonLink={section.buttonLink || ""}
        />
      );
    case "sections.hero5":
      return (
        <Hero5
          imageUrl={imageUrl || ""}
          imageAlt={section.image?.alternativeText || ""}
          title={section.title}
          subtitle={section.subtitle || ""}
          buttonText={section.buttonLabel || ""}
          buttonLink={section.buttonLink || ""}
        />
      );
    case "sections.hero6":
      return (
        <Hero6
          imageUrl={imageUrl || ""}
          imageAlt={section.image?.alternativeText || ""}
          title={section.title}
          subtitle={section.subtitle || ""}
          buttonText={section.buttonLabel || ""}
          buttonLink={section.buttonLink || ""}
        />
      );
    case "sections.hero7":
      return (
        <Hero7
          title={section.title}
          subtitle={section.subtitle || ""}
          buttonText={section.buttonLabel || ""}
          buttonLink={section.buttonLink || ""}
        />
      );
    case "sections.hero8":
      return (
        <Hero8
          imageUrl={imageUrl || ""}
          title={section.title}
          subtitle={section.subtitle || ""}
          buttonText={section.buttonLabel || ""}
          buttonLink={section.buttonLink || ""}
        />
      );
    case "sections.hero-medium":
      return (
        <HeroMedium title={section.title} subtitle={section.subtitle || ""} />
      );
    case "sections.hero-small":
      return <HeroSmall title={section.title} />;
    case "sections.page-section1":
      return (
        <PageSection1
          heading={section.heading}
          bodyCopy={section.bodyCopy || ""}
          imageUrl={imageUrl || ""}
        />
      );
    case "sections.page-section2":
      return (
        <PageSection2
          heading={section.heading}
          bodyCopy={section.bodyCopy || ""}
          imageUrl={imageUrl || ""}
        />
      );
    case "sections.page-section3":
      return (
        <PageSection3
          heading={section.heading}
          bodyCopy={section.bodyCopy || ""}
          imageUrl={imageUrl || ""}
        />
      );
    case "sections.page-section4":
      return (
        <PageSection4
          heading={section.heading}
          bodyCopy={section.bodyCopy || ""}
          imageUrl={imageUrl || ""}
        />
      );
    case "sections.page-section5":
      return (
        <PageSection5
          heading={section.heading}
          bodyCopy={section.bodyCopy || ""}
          imageUrl={imageUrl || ""}
        />
      );
    case "sections.page-section6":
      return (
        <PageSection6
          heading={section.heading}
          bodyCopy={section.bodyCopy || ""}
          imageUrl={imageUrl || ""}
        />
      );
    case "sections.page-section7":
      return (
        <PageSection7
          heading={section.heading}
          bodyCopy={section.bodyCopy || ""}
          imageUrl={imageUrl || ""}
        />
      );
    case "sections.page-section8":
      return (
        <PageSection8
          heading={section.heading}
          bodyCopy={section.bodyCopy || ""}
        />
      );
    case "sections.section-form-center":
      return (
        <SectionFormCenter
          title={section.title}
          subtitle={section.subtitle || ""}
        />
      );
    case "sections.section-form-right":
      return (
        <SectionFormRight
          title={section.title}
          subtitle={section.subtitle || ""}
          copy={section.copy || ""}
        />
      );
    default:
      return null;
  }
}
