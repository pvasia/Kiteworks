/**
 * Utility functions for working with Strapi data
 */

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
