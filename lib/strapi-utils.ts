/**
 * Utility functions for working with Strapi data
 */

import { sharedContent } from "./content/shared-content";
import {
  SocialPlatform,
  ComplianceBadge,
  ContactType,
} from "@/components/organisms/Footer/Footer";

// Types for Strapi media objects based on actual API response
interface StrapiImageFormat {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: string | null;
  width: number;
  height: number;
  size: number;
  sizeInBytes: number;
  url: string;
}

export interface StrapiMediaObject {
  id?: number;
  documentId?: string;
  name?: string;
  alternativeText?: string;
  caption?: string;
  width?: number;
  height?: number;
  formats?: {
    thumbnail?: StrapiImageFormat;
    small?: StrapiImageFormat;
    medium?: StrapiImageFormat;
    large?: StrapiImageFormat;
  };
  hash?: string;
  ext?: string;
  mime?: string;
  size?: number;
  url?: string;
  previewUrl?: string | null;
  provider?: string;
  provider_metadata?: unknown;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
}

// Types for Strapi header data
interface StrapiHeaderData {
  data?: {
    id: number;
    documentId: string;
    showCompliance: boolean;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    menu: Array<{
      id: number;
      label: string;
      url: string;
      subMenu?: Array<{
        label: string;
        url: string;
      }>;
    }>;
    logo: StrapiMediaObject;
    alert?: {
      type: "news" | "announcement" | "info";
      message: string;
      link?: string;
    } | null;
    showSearch?: boolean;
    contactUsLabel?: string;
    contactUsLink?: string;
  };
}

// Types for Strapi footer data
interface StrapiFooterData {
  data?: {
    id: number;
    documentId: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    logo?: StrapiMediaObject;
    brandDescription?: string;
    contactTitle?: string;
    contactDescription?: string;
    copyrightText?: string;
    menu?: Array<{
      id: number;
      label: string;
      url: string;
      subMenu?: Array<{
        id: number;
        label: string;
        url: string;
      }>;
    }>;
    socialLinks?: Array<{
      id: number;
      platform: "linkedin" | "twitter" | "facebook" | "youtube";
      url: string;
      ariaLabel: string;
      icon?: StrapiMediaObject;
    }>;
    complianceBadges?: Array<{
      id: number;
      badge: "fedramp" | "fisma" | "nist";
      label: string;
      icon?: StrapiMediaObject;
    }>;
    contactCards?: Array<{
      id: number;
      type: "sales" | "support";
      title: string;
      phone: string;
      email: string;
      icon?: StrapiMediaObject;
    }>;
    legalLinks?: Array<{
      id: number;
      label: string;
      url: string;
    }>;
  };
}

/**
 * Convert Strapi image URL to full URL
 * @param url - The image URL from Strapi (could be relative or full)
 * @returns Full URL to the image
 */
export function getStrapiImageUrl(
  url: string | null | undefined
): string | null {
  if (!url) return null;

  // If it's already a full URL, return as is
  if (url.startsWith("http")) {
    return url;
  }

  // If it's a relative URL, prepend the Strapi base URL
  const strapiUrl = process.env.STRAPI_API_URL || "http://localhost:1337";
  return `${strapiUrl}${url}`;
}

/**
 * Extract image URL from Strapi media object
 * @param mediaObject - Strapi media object with direct url property
 * @returns Full URL to the image
 */
export function getStrapiMediaUrl(
  mediaObject: StrapiMediaObject | null | undefined
): string | null {
  if (!mediaObject?.url) return null;

  return getStrapiImageUrl(mediaObject.url);
}

/**
 * Get image alt text from Strapi media object
 * @param mediaObject - Strapi media object
 * @returns Alt text for the image
 */
export function getStrapiMediaAlt(
  mediaObject: StrapiMediaObject | null | undefined
): string {
  return mediaObject?.alternativeText || mediaObject?.name || "Image";
}

/**
 * Get specific image format URL from Strapi media object
 * @param mediaObject - Strapi media object
 * @param format - Image format (thumbnail, small, medium, large)
 * @returns Full URL to the image in specified format
 */
export function getStrapiImageFormatUrl(
  mediaObject: StrapiMediaObject | null | undefined,
  format: "thumbnail" | "small" | "medium" | "large"
): string | null {
  if (!mediaObject?.formats?.[format]?.url) return null;

  return getStrapiImageUrl(mediaObject.formats[format].url);
}

/**
 * Get the best image size for a given use case
 * @param mediaObject - Strapi media object
 * @param useCase - The use case (hero, card, thumbnail, etc.)
 * @returns Full URL to the most appropriate image size
 */
export function getBestImageSize(
  mediaObject: StrapiMediaObject | null | undefined,
  useCase: "hero" | "card" | "thumbnail" | "gallery" = "card"
): string | null {
  if (!mediaObject) return null;

  // Define preferred sizes for different use cases
  const sizePreferences = {
    hero: ["large", "medium", "small"],
    card: ["medium", "small", "large"],
    thumbnail: ["thumbnail", "small"],
    gallery: ["medium", "large", "small"],
  } as const;

  // Try to get the preferred size
  const preferences = sizePreferences[useCase];

  for (const size of preferences) {
    const formatUrl = getStrapiImageFormatUrl(mediaObject, size);
    if (formatUrl) return formatUrl;
  }

  // Fallback to original image
  return getStrapiMediaUrl(mediaObject);
}

/**
 * Fetch data from Strapi with Next.js caching and revalidation
 * @param endpoint - The Strapi API endpoint (e.g., '/api/home')
 * @param options - Additional fetch options
 * @returns Promise with the fetched data
 */
export async function fetchFromStrapi<T = unknown>(
  endpoint: string,
  options: {
    tags?: string[];
    revalidate?: number;
    cache?: RequestCache;
    signal?: AbortSignal;
  } = {}
): Promise<T> {
  const {
    tags = ["strapi-content"],
    revalidate = 3600,
    cache,
    signal,
  } = options;

  const strapiUrl = process.env.STRAPI_API_URL || "http://localhost:1337";
  const url = `${strapiUrl}${endpoint}`;

  const response = await fetch(url, {
    next: {
      tags,
      revalidate,
    },
    cache,
    signal,
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(
      `Failed to fetch from Strapi: ${response.status} ${response.statusText}`
    );
  }

  return response.json();
}

/**
 * Fetch specific content type from Strapi
 * @param contentType - The content type (e.g., 'home', 'page', 'global')
 * @param options - Additional options
 * @returns Promise with the fetched data
 */
export async function fetchStrapiContent<T = unknown>(
  contentType: string,
  options: {
    populate?: boolean;
    tags?: string[];
    revalidate?: number;
  } = {}
): Promise<T> {
  const { populate = true, tags, revalidate = 3600 } = options;

  const endpoint = `/api/${contentType}${populate ? "?pLevel" : ""}`;
  const contentTags = tags || [`${contentType}-content`, "strapi-content"];

  return fetchFromStrapi<T>(endpoint, {
    tags: contentTags,
    revalidate,
  });
}

/**
 * Fetch multiple content types from Strapi
 * @param contentTypes - Array of content types to fetch
 * @param options - Additional options
 * @returns Promise with an object containing all fetched data
 */
export async function fetchMultipleStrapiContent<T = Record<string, unknown>>(
  contentTypes: string[],
  options: {
    populate?: boolean;
    revalidate?: number;
  } = {}
): Promise<T> {
  const { populate = true, revalidate = 3600 } = options;

  const promises = contentTypes.map(async (contentType) => {
    const data = await fetchStrapiContent(contentType, {
      populate,
      revalidate,
    });
    return { [contentType]: data };
  });

  const results = await Promise.all(promises);
  return results.reduce((acc, result) => ({ ...acc, ...result }), {}) as T;
}

// Type for header data structure
export interface HeaderData {
  logo:
    | {
        src?: string;
        alt?: string;
        width?: number;
        height?: number;
      }
    | StrapiMediaObject;
  menu: Array<{
    label: string;
    url: string;
    subItems?: Array<{
      label: string;
      url: string;
    }>;
  }>;
  alert?: {
    type: "news" | "announcement" | "info";
    message: string;
    link?: string;
  } | null;
  showCompliance?: boolean;
  showSearch?: boolean;
  contactUsLabel?: string;
  contactUsLink?: string;
}

export interface FooterData {
  logo?: StrapiMediaObject;
  brandDescription?: string;
  contactTitle?: string;
  contactDescription?: string;
  copyrightText?: string;
  menu?: Array<{
    id: number;
    label: string;
    url: string;
    subMenu?: Array<{
      id: number;
      label: string;
      url: string;
    }>;
  }>;
  socialLinks?: Array<{
    id: number;
    platform: SocialPlatform;
    url: string;
    ariaLabel: string;
    icon?: StrapiMediaObject;
  }>;
  complianceBadges?: Array<{
    id: number;
    badge: ComplianceBadge;
    label: string;
    icon?: StrapiMediaObject;
  }>;
  contactCards?: Array<{
    id: number;
    type: ContactType;
    title: string;
    phone: string;
    email: string;
    icon?: StrapiMediaObject;
  }>;
  legalLinks?: Array<{
    id: number;
    label: string;
    url: string;
  }>;
}

/**
 * Fetch header data from Strapi
 * @returns Promise with header data or fallback to static content
 */
export async function getHeaderData(): Promise<HeaderData> {
  try {
    const strapiData = await fetchStrapiContent<StrapiHeaderData>("header", {
      tags: ["global-content", "header-content"],
      revalidate: 3600, // Cache for 1 hour
    });

    const data = strapiData?.data;

    if (!data) {
      console.warn("No Strapi header data found, using fallback");
      return sharedContent.header;
    }

    // Transform Strapi data to match our interface
    const headerData = {
      logo: data.logo,
      menu: data.menu,
      alert: data.alert,
      showCompliance: data.showCompliance,
      showSearch: data.showSearch,
      contactUsLabel: data.contactUsLabel,
      contactUsLink: data.contactUsLink,
    };

    return headerData;
  } catch (error) {
    console.error("Error fetching header data from Strapi:", error);
    return sharedContent.header;
  }
}

/**
 * Fetch footer data from Strapi
 * @returns Promise with footer data or empty object as fallback
 */
export async function getFooterData(): Promise<FooterData> {
  try {
    const strapiData = await fetchStrapiContent<StrapiFooterData>("footer", {
      tags: ["global-content", "footer-content"],
      revalidate: 3600, // Cache for 1 hour
    });

    const data = strapiData?.data;

    if (!data) {
      console.warn("No Strapi footer data found, using empty fallback");
      return {};
    }

    // Transform Strapi data to match our interface
    const footerData: FooterData = {
      logo: data.logo,
      brandDescription: data.brandDescription,
      contactTitle: data.contactTitle,
      contactDescription: data.contactDescription,
      copyrightText: data.copyrightText,
    };

    // Transform menu sections
    if (data.menu) {
      footerData.menu = data.menu.map((section) => ({
        id: section.id,
        label: section.label,
        url: section.url,
        subMenu: section.subMenu?.map((item) => ({
          id: item.id,
          label: item.label,
          url: item.url,
        })),
      }));
    }

    // Transform social links
    if (data.socialLinks) {
      footerData.socialLinks = data.socialLinks.map((link) => ({
        id: link.id,
        platform: link.platform as SocialPlatform,
        url: link.url,
        ariaLabel: link.ariaLabel,
        icon: link.icon,
      }));
    }

    // Transform compliance badges
    if (data.complianceBadges) {
      footerData.complianceBadges = data.complianceBadges.map((badge) => ({
        id: badge.id,
        badge: badge.badge as ComplianceBadge,
        label: badge.label,
        icon: badge.icon,
      }));
    }

    // Transform contact cards
    if (data.contactCards) {
      footerData.contactCards = data.contactCards.map((card) => ({
        id: card.id,
        type: card.type as ContactType,
        title: card.title,
        phone: card.phone,
        email: card.email,
        icon: card.icon,
      }));
    }

    // Transform legal links
    if (data.legalLinks) {
      footerData.legalLinks = data.legalLinks.map((link) => ({
        id: link.id,
        label: link.label,
        url: link.url,
      }));
    }

    return footerData;
  } catch (error) {
    console.error("Error fetching footer data from Strapi:", error);
    return {};
  }
}
