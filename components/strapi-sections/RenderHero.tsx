// components/strapi-sections/RenderHero.tsx
import { getBestImageSize, StrapiMediaObject } from "@/lib/strapi-utils";

// Hero Components
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

// ============================================================================
// TYPES & INTERFACES
// ============================================================================

interface StrapiSection {
  __component: string;
  id: number;
  title: string;
  subtitle?: string;
  buttonLabel?: string;
  buttonLink?: string;
  image?: StrapiMediaObject;
}

interface HeroProps {
  section: StrapiSection;
}

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Converts Strapi rich text content to plain string
 */
const convertToStringFeature = (
  content: string | object[] | unknown
): string => {
  try {
    if (content === null || content === undefined) return "";
    if (typeof content === "string") return content;
    if (typeof content === "number" || typeof content === "boolean")
      return String(content);

    if (Array.isArray(content)) {
      return content
        .map(
          (item: {
            type?: string;
            children?: { text?: string }[];
            text?: string;
          }) => {
            if (item && typeof item === "object") {
              if (item.type === "paragraph" && Array.isArray(item.children)) {
                return item.children
                  .map((child: { text?: string }) => child?.text || "")
                  .join("");
              }
              return item.text || "";
            }
            return String(item || "");
          }
        )
        .join(" ");
    }

    if (typeof content === "object") {
      if ("text" in content && typeof content.text === "string") {
        return content.text;
      }
      return JSON.stringify(content);
    }

    return String(content);
  } catch (error) {
    console.error("Error converting content to string:", error, content);
    return "";
  }
};

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export default function RenderHero({ section }: HeroProps) {
  const imageUrl = getBestImageSize(section.image, "hero");

  const commonProps = {
    title: convertToStringFeature(section.title) || "",
    subtitle: convertToStringFeature(section.subtitle) || "",
    buttonText: section.buttonLabel || "",
    buttonLink: section.buttonLink || "",
  };

  const imageProps = {
    ...commonProps,
    imageUrl: imageUrl || "",
    imageAlt: section.image?.alternativeText || "",
  };

  switch (section.__component) {
    case "hero.hero1":
      return <Hero1 {...imageProps} />;
    case "hero.hero2":
      return <Hero2 {...imageProps} />;
    case "hero.hero3":
      return <Hero3 {...imageProps} />;
    case "hero.hero4":
      return <Hero4 {...imageProps} />;
    case "hero.hero5":
      return <Hero5 {...imageProps} />;
    case "hero.hero6":
      return <Hero6 {...imageProps} />;
    case "hero.hero7":
      return <Hero7 {...commonProps} />;
    case "hero.hero8":
      return <Hero8 {...imageProps} />;
    case "hero.hero-medium":
      return (
        <HeroMedium title={commonProps.title} subtitle={commonProps.subtitle} />
      );
    case "hero.hero-small":
      return <HeroSmall title={commonProps.title} />;
    default:
      console.warn(`Unknown hero component: ${section.__component}`);
      return null;
  }
}
