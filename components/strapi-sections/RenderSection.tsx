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
import { IconHeadingProps } from "@/components/molecules/IconHeading";
import { FeatureCardProps } from "@/components/molecules/FeatureCard";
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
import IconTwoTiles from "../tiles/icon-two-tiles";
import IconThreeTiles from "../tiles/icon-three-tiles";
import IconFourTiles from "../tiles/icon-four-tiles";
import FeatureThreeTiles from "../tiles/feature-three-tiles";
import FeatureTwoTiles from "../tiles/feature-two-tiles";
import ImageTextBlock from "../molecules/ImageTextBlock";

// Interface for Strapi items with icon field
interface StrapiIconItem {
  id: number;
  heading: string;
  bodyCopy: string | object[];
  buttonLabel?: string;
  buttonUrl?: string;
  icon?: StrapiMediaObject;
}

// Interface for Strapi feature items
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
}

interface SectionProps {
  section: StrapiSection;
}

// Shared utility functions
const convertToStringFeature = (
  content: string | object[] | unknown
): string => {
  // Ensure we always return a string
  try {
    if (content === null || content === undefined) {
      return "";
    }

    if (typeof content === "string") {
      return content;
    }

    if (typeof content === "number" || typeof content === "boolean") {
      return String(content);
    }

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

    // Handle other object types
    if (typeof content === "object") {
      // Try to extract text content from object
      if ("text" in content && typeof content.text === "string") {
        return content.text;
      }
      // Last resort: stringify the object
      return JSON.stringify(content);
    }

    return String(content);
  } catch (error) {
    console.error("Error converting content to string:", error, content);
    return "";
  }
};

const convertStrapiToFeatureItems = (
  items: StrapiFeatureItem[]
): FeatureCardProps[] => {
  return items.map((item: StrapiFeatureItem, index) => {
    // Debug logging
    console.log(`Feature item ${index}:`, item);

    const heading = convertToStringFeature(item.heading) || "";
    const bodyCopy = convertToStringFeature(item.bodyCopy) || "";

    // Map the correct fields from Strapi
    const featureCardProps: FeatureCardProps = {
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

    console.log(`Converted item ${index}:`, featureCardProps);
    return featureCardProps;
  });
};

export default function RenderSection({ section }: SectionProps) {
  // Get the best image size for hero components
  const imageUrl = getBestImageSize(section.image, "hero");

  // Debug logging
  // console.log("Section debug:", {
  //   component: section.__component,
  //   title: section.title,
  //   hasImage: !!section.image,
  //   imageUrl: section.image?.url,
  //   fullImageUrl: imageUrl,
  //   imageObject: section.image,
  // });

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
    case "sections.icon-two-tiles":
    case "sections.icon-three-tiles":
    case "sections.icon-four-tiles":
      const convertToString = (content: string | object[]): string => {
        if (typeof content === "string") return content;
        if (Array.isArray(content)) {
          return content
            .map(
              (item: {
                type?: string;
                children?: { text?: string }[];
                text?: string;
              }) => {
                if (item.type === "paragraph" && item.children) {
                  return item.children
                    .map((child: { text?: string }) => child.text || "")
                    .join("");
                }
                return item.text || "";
              }
            )
            .join("");
        }
        return "";
      };

      const iconItems: IconHeadingProps[] = (section.items || []).map(
        (item) => ({
          icon: getBestImageSize(item.icon, "thumbnail") || undefined,
          heading: item.heading,
          bodyCopy: convertToString(item.bodyCopy),
          buttonLabel: item.buttonLabel || undefined,
          buttonUrl: item.buttonUrl || undefined,
        })
      );

      // Return the appropriate component based on the section type
      if (section.__component === "sections.icon-two-tiles") {
        return (
          <IconTwoTiles
            title={section.title}
            subHeading={section.subHeading || ""}
            items={iconItems}
          />
        );
      } else if (section.__component === "sections.icon-three-tiles") {
        return (
          <IconThreeTiles
            title={section.title}
            subHeading={section.subHeading || ""}
            items={iconItems}
          />
        );
      } else {
        return (
          <IconFourTiles
            title={section.title}
            subHeading={section.subHeading || ""}
            items={iconItems}
          />
        );
      }
    case "sections.feature-three-tiles":
      const featureItems: FeatureCardProps[] = convertStrapiToFeatureItems(
        (section.items || []) as StrapiFeatureItem[]
      );

      return (
        <FeatureThreeTiles
          title={section.title}
          subHeading={section.subHeading || ""}
          items={featureItems}
        />
      );
    case "sections.feature-two-tiles":
      const featureTwoItems: FeatureCardProps[] = convertStrapiToFeatureItems(
        (section.items || []) as StrapiFeatureItem[]
      );

      return (
        <FeatureTwoTiles
          title={section.title}
          subHeading={section.subHeading || ""}
          items={featureTwoItems}
        />
      );

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
    default:
      return null;
  }
}
