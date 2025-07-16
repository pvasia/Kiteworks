// components/strapi-sections/RenderSection.tsx
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

// Page Section Components
import PageSection1 from "../page-sections/PageSection1/PageSection1";
import PageSection2 from "../page-sections/PageSection2/PageSection2";
import PageSection3 from "../page-sections/PageSection3/PageSection3";
import PageSection4 from "../page-sections/PageSection4/PageSection4";
import PageSection5 from "../page-sections/PageSection5/PageSection5";
import PageSection6 from "../page-sections/PageSection6";
import PageSection7 from "../page-sections/PageSection7/PageSection7";
import PageSection8 from "../page-sections/PageSection8/PageSection8";

// Form Section Components
import SectionFormCenter from "../page-sections/SectionFormCenter";
import SectionFormRight from "../page-sections/SectionFormRight";

// Tile Components
import IconTwoTiles from "../tiles/icon-two-tiles";
import IconThreeTiles from "../tiles/icon-three-tiles";
import IconFourTiles from "../tiles/icon-four-tiles";
import FeatureThreeTiles from "../tiles/feature-three-tiles";
import FeatureTwoTiles from "../tiles/feature-two-tiles";

// Molecule Components
import ImageTextBlock from "../molecules/ImageTextBlock";
import AgencySelector from "../molecules/AgencySelector";

// Type Imports
import { IconHeadingProps } from "@/components/molecules/IconHeading";
import { FeatureCardProps } from "@/components/molecules/FeatureCard";
import { AgencyCardProps } from "../atoms/AgencyCard/AgencyCard";
import LogoBlocks from "../organisms/LogoBlocks/LogoBlocks";

// ============================================================================
// TYPES & INTERFACES
// ============================================================================

interface StrapiIconItem {
  id: number;
  heading: string;
  bodyCopy: string | object[];
  buttonLabel?: string;
  buttonUrl?: string;
  icon?: StrapiMediaObject;
}

interface StrapiFeatureItem {
  id: number;
  variant: "default" | "illustration" | "icon" | "special";
  badge?: string;
  heading: string | object[];
  bodyCopy: string | object[];
  buttonLabel?: string;
  buttonUrl?: string;
  date?: string;
  tag?: string;
  location?: string;
  image?: StrapiMediaObject;
  icon?: StrapiMediaObject;
}

interface StrapiAgencyItem {
  id: number;
  name: string | object[];
  description: string | object[];
  url: string;
  icon: string;
}

interface StrapiSection {
  __component: string;
  id: number;
  title: string;
  subtitle?: string;
  subHeading?: string;
  buttonLabel?: string;
  buttonLink?: string;
  buttonUrl?: string;
  variant?: string;
  image?: StrapiMediaObject;
  heading?: string;
  bodyCopy?: string;
  copy?: string;
  items?: StrapiIconItem[];
  imageRight?: boolean;
  logos?: StrapiMediaObject[];
}

interface SectionProps {
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

/**
 * Converts Strapi feature items to FeatureCardProps
 */
const convertStrapiToFeatureItems = (
  items: StrapiFeatureItem[]
): FeatureCardProps[] => {
  return items.map((item: StrapiFeatureItem) => {
    const heading = convertToStringFeature(item.heading) || "";
    const bodyCopy = convertToStringFeature(item.bodyCopy) || "";

    return {
      variant: item.variant || "default",
      badge: item.badge || undefined,
      imageUrl: getBestImageSize(item.image, "card") || undefined,
      heading,
      bodyCopy,
      buttonLabel: item.buttonLabel || undefined,
      buttonUrl: item.buttonUrl || undefined,
      iconUrl: getBestImageSize(item.icon, "thumbnail") || undefined,
      date: item.date || undefined,
      tag: item.tag || undefined,
      location: item.location || undefined,
    };
  });
};

/**
 * Converts Strapi icon items to IconHeadingProps
 */
const convertStrapiToIconItems = (
  items: StrapiIconItem[]
): IconHeadingProps[] => {
  return items.map((item) => ({
    icon: getBestImageSize(item.icon, "thumbnail") || undefined,
    heading: item.heading,
    bodyCopy: convertToStringFeature(item.bodyCopy),
    buttonLabel: item.buttonLabel || undefined,
    buttonUrl: item.buttonUrl || undefined,
  }));
};

/**
 * Converts Strapi agency items to AgencyCardProps
 */
const convertStrapiToAgencyItems = (
  items: StrapiAgencyItem[]
): AgencyCardProps[] => {
  return items.map((item: StrapiAgencyItem) => ({
    name: convertToStringFeature(item.name) || "",
    description: convertToStringFeature(item.description) || "",
    url: item.url || "",
    icon: item.icon || "",
  }));
};

// ============================================================================
// SECTION RENDERERS
// ============================================================================

/**
 * Renders hero sections
 */
const renderHeroSection = (section: StrapiSection, imageUrl: string | null) => {
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
    case "sections.hero1":
      return <Hero1 {...imageProps} />;
    case "sections.hero2":
      return <Hero2 {...imageProps} />;
    case "sections.hero3":
      return <Hero3 {...imageProps} />;
    case "sections.hero4":
      return <Hero4 {...imageProps} />;
    case "sections.hero5":
      return <Hero5 {...imageProps} />;
    case "sections.hero6":
      return <Hero6 {...imageProps} />;
    case "sections.hero7":
      return <Hero7 {...commonProps} />;
    case "sections.hero8":
      return <Hero8 {...imageProps} />;
    case "sections.hero-medium":
      return (
        <HeroMedium title={commonProps.title} subtitle={commonProps.subtitle} />
      );
    case "sections.hero-small":
      return <HeroSmall title={commonProps.title} />;
    default:
      return null;
  }
};

/**
 * Renders page sections
 */
const renderPageSection = (section: StrapiSection, imageUrl: string | null) => {
  const commonProps = {
    heading: convertToStringFeature(section.heading) || "",
    bodyCopy: convertToStringFeature(section.bodyCopy) || "",
    imageUrl: imageUrl || "",
  };

  switch (section.__component) {
    case "sections.page-section1":
      return <PageSection1 {...commonProps} />;
    case "sections.page-section2":
      return <PageSection2 {...commonProps} />;
    case "sections.page-section3":
      return <PageSection3 {...commonProps} />;
    case "sections.page-section4":
      return <PageSection4 {...commonProps} />;
    case "sections.page-section5":
      return <PageSection5 {...commonProps} />;
    case "sections.page-section6":
      return <PageSection6 {...commonProps} />;
    case "sections.page-section7":
      return <PageSection7 {...commonProps} />;
    case "sections.page-section8":
      return (
        <PageSection8
          heading={commonProps.heading}
          bodyCopy={commonProps.bodyCopy}
        />
      );
    default:
      return null;
  }
};

/**
 * Renders form sections
 */
const renderFormSection = (section: StrapiSection) => {
  const commonProps = {
    title: convertToStringFeature(section.title) || "",
    subtitle: convertToStringFeature(section.subtitle) || "",
  };

  switch (section.__component) {
    case "sections.section-form-center":
      return <SectionFormCenter {...commonProps} />;
    case "sections.section-form-right":
      return (
        <SectionFormRight
          {...commonProps}
          copy={convertToStringFeature(section.copy) || ""}
        />
      );
    default:
      return null;
  }
};

/**
 * Renders icon tile sections
 */
const renderIconTileSection = (section: StrapiSection) => {
  const iconItems = convertStrapiToIconItems(section.items || []);
  const commonProps = {
    title: convertToStringFeature(section.title) || "",
    subHeading: convertToStringFeature(section.subHeading) || "",
    items: iconItems,
  };

  switch (section.__component) {
    case "sections.icon-two-tiles":
      return <IconTwoTiles {...commonProps} />;
    case "sections.icon-three-tiles":
      return <IconThreeTiles {...commonProps} />;
    case "sections.icon-four-tiles":
      return <IconFourTiles {...commonProps} />;
    default:
      return null;
  }
};

/**
 * Renders feature tile sections
 */
const renderFeatureTileSection = (section: StrapiSection) => {
  const featureItems = convertStrapiToFeatureItems(
    (section.items || []) as StrapiFeatureItem[]
  );
  const commonProps = {
    title: convertToStringFeature(section.title) || "",
    subHeading: convertToStringFeature(section.subHeading) || "",
    items: featureItems,
  };

  switch (section.__component) {
    case "sections.feature-three-tiles":
      return <FeatureThreeTiles {...commonProps} />;
    case "sections.feature-two-tiles":
      return <FeatureTwoTiles {...commonProps} />;
    default:
      return null;
  }
};

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export default function RenderSection({ section }: SectionProps) {
  const imageUrl = getBestImageSize(section.image, "hero");

  // Hero sections
  if (section.__component.startsWith("sections.hero")) {
    return renderHeroSection(section, imageUrl);
  }

  // Page sections
  if (section.__component.startsWith("sections.page-section")) {
    return renderPageSection(section, imageUrl);
  }

  // Form sections
  if (section.__component.startsWith("sections.section-form")) {
    return renderFormSection(section);
  }

  // Icon tile sections
  if (
    section.__component.startsWith("sections.icon-") &&
    section.__component.includes("-tiles")
  ) {
    return renderIconTileSection(section);
  }

  // Feature tile sections
  if (
    section.__component.startsWith("sections.feature-") &&
    section.__component.includes("-tiles")
  ) {
    return renderFeatureTileSection(section);
  }

  // Individual section cases
  switch (section.__component) {
    case "sections.image-text-block":
      return (
        <ImageTextBlock
          variant={section.variant as "border" | "borderless"}
          image={getBestImageSize(section.image, "card") || ""}
          heading={convertToStringFeature(section.heading) || ""}
          bodyCopy={convertToStringFeature(section.bodyCopy) || ""}
          buttonLabel={section.buttonLabel || ""}
          buttonUrl={section.buttonUrl || ""}
          imageRight={section.imageRight}
        />
      );

    case "sections.agency-selector":
      const agencyItems = convertStrapiToAgencyItems(
        (section.items as unknown as StrapiAgencyItem[]) || []
      );
      return (
        <AgencySelector
          title={convertToStringFeature(section.title) || ""}
          subtitle={convertToStringFeature(section.subtitle) || ""}
          items={agencyItems}
        />
      );

    case "sections.logo-blocks":
      const logoItems = (section.logos || []).map((logo) => ({
        image: getBestImageSize(logo, "thumbnail") || "",
        alt: logo.alternativeText || "",
      }));

      return (
        <LogoBlocks
          subtitle={convertToStringFeature(section.subtitle) || ""}
          variant={
            section.variant as "heading" | "grid-primary" | "grid-secondary"
          }
          logos={logoItems}
        />
      );

    default:
      console.warn(`Unknown section component: ${section.__component}`);
      return null;
  }
}
