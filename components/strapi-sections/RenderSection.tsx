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

interface StrapiSection {
  __component: string;
  id: number;
  title: string;
  subtitle?: string;
  buttonLabel?: string;
  buttonLink?: string;
  image?: StrapiMediaObject;
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
    case "sections.heroMedium":
      return (
        <HeroMedium title={section.title} subtitle={section.subtitle || ""} />
      );
    case "sections.heroSmall":
      return <HeroSmall title={section.title} />;
    default:
      return null;
  }
}
