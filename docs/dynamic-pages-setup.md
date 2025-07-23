# Dynamic Pages Setup

This setup enables dynamic page routing from Strapi's "Page" collection type using Next.js App Router.

## What's Included

### 1. Enhanced Strapi Utilities (`lib/strapi-utils.ts`)
- **`getAllPagePaths()`**: Fetches all page paths including hierarchical ones for static generation
- **`getPageByPath(slugPath)`**: Fetches a specific page by hierarchical path (e.g., ['solutions', 'defense'])
- **`getPageBySlug(slug)`**: Fetches a specific page by slug (single-level only)
- **`getAllPageSlugs()`**: Fetches all page slugs (legacy function)
- **`generatePageMetadata(pageData)`**: Generates Next.js metadata from Strapi SEO data
- **TypeScript interfaces**: `PageData`, `StrapiPageData`, `StrapiSEO`

### 2. Dynamic Page Component (`app/[[...slug]]/page.tsx`)
- **Optional Catch-All Routing**: Handles homepage (`/`), single pages (`/slug`), and hierarchical pages (`/parent/child`)
- **Homepage Logic**: When no slug is provided, automatically uses "home" as the slug
- **Hierarchical Support**: Automatically resolves parent-child relationships using the `parent` field
- **Static Generation**: Uses `generateStaticParams()` to pre-generate all pages at build time
- **SEO Support**: Automatically generates metadata from Strapi SEO component
- **Content Rendering**: Uses existing `RenderSection` component to render all page sections
- **Error Handling**: Proper 404 handling for non-existent pages

### 3. Custom 404 Page (`app/[[...slug]]/not-found.tsx`)
- Clean not-found page for dynamic routes
- Styled using existing CSS modules

### 4. Webhook Revalidation (`app/api/revalidate/route.ts`)
- Updated to handle page content revalidation
- Supports both general and specific page cache invalidation
- Automatically revalidates both single-level and hierarchical paths

## How It Works

1. **Page Creation in Strapi**: Create pages in the "Page" collection type with:
   - Title (required)
   - Slug (required, used for URL)
   - SEO component (optional, for metadata)
   - Content (dynamic zone with hero and section components)
   - Parent (optional, for hierarchical pages)

2. **Automatic URL Generation**: 
   - Homepage: Create a page with slug "home" → accessible at `yourdomain.com/`
   - Top-level pages: Any page without a parent → accessible at `yourdomain.com/[slug]`
   - Child pages: Pages with a parent → accessible at `yourdomain.com/[parent-slug]/[child-slug]`

3. **Static Generation**: At build time, Next.js generates static pages for all Strapi pages, including the homepage

4. **Dynamic Content**: Each page renders its content sections using your existing components

## Parent-Child Relationships

The system supports hierarchical page structures using the `parent` field in Strapi:

### Setting Up Parent-Child Pages

1. **Create Parent Page**: Create a page with slug "solutions" (no parent set)
2. **Create Child Page**: Create a page with slug "defense" and set the parent to the "solutions" page
3. **Result**: The child page will be accessible at `/solutions/defense`

### URL Resolution Logic

- **Single-level**: `/solutions` → Finds page with slug "solutions" (no parent)
- **Hierarchical**: `/solutions/defense` → Finds page with slug "defense" that has parent "solutions"
- **Homepage**: `/` → Automatically uses page with slug "home"

### Examples

| Page Setup | URL | Description |
|------------|-----|-------------|
| slug: "home" | `/` | Homepage |
| slug: "solutions" | `/solutions` | Top-level solutions page |
| slug: "defense", parent: "solutions" | `/solutions/defense` | Defense page under solutions |
| slug: "enterprise", parent: "solutions" | `/solutions/enterprise` | Enterprise page under solutions |

## Environment Variables Required

```env
STRAPI_API_URL=http://localhost:1337  # Your Strapi URL
REVALIDATION_SECRET=your_secret_here  # For webhook revalidation
NEXT_PUBLIC_SITE_URL=https://yourdomain.com  # For SEO metadata
```

## Strapi Webhook Setup (Optional)

To automatically update pages when content changes in Strapi:

1. In Strapi Admin → Settings → Webhooks
2. Create a new webhook:
   - **URL**: `https://yourdomain.com/api/revalidate`
   - **Events**: Select page events (create, update, delete)
   - **Headers**: Add `Authorization: Bearer your_revalidation_secret`

## Supported Content Components

The system automatically renders all existing components from your dynamic zone:

### Hero Components
- hero.hero1 through hero.hero8
- hero.hero-small
- hero.hero-medium

### Section Components
- sections.page-section1 through sections.page-section8
- sections.section-form-center
- sections.section-form-right
- sections.testimonial-slider
- sections.timeline
- sections.image-text-block
- sections.logo-blocks
- sections.icon-two-tiles, icon-three-tiles, icon-four-tiles
- sections.feature-two-tiles, feature-three-tiles
- sections.agency-selector
- sections.news-ticker

## Usage Examples

### Creating a Top-Level Page
```json
{
  "title": "About Us",
  "slug": "about-us",
  "parent": null,
  "SEO": {
    "metaTitle": "About Our Company",
    "metaDescription": "Learn more about our company and mission",
    "shareImage": "image-upload"
  },
  "content": [
    {
      "__component": "hero.hero1",
      "title": "About Our Company",
      "subtitle": "We're building the future"
    }
  ]
}
```
**URL**: `https://yourdomain.com/about-us`

### Creating a Child Page
```json
{
  "title": "Department of Defense",
  "slug": "defense",
  "parent": {
    "slug": "solutions",
    "title": "Solutions"
  },
  "SEO": {
    "metaTitle": "Defense Solutions",
    "metaDescription": "Secure solutions for defense organizations"
  },
  "content": [
    {
      "__component": "hero.hero2",
      "title": "Department of Defense",
      "subtitle": "Secure communications for defense"
    }
  ]
}
```
**URL**: `https://yourdomain.com/solutions/defense`

### Creating the Homepage
```json
{
  "title": "Welcome",
  "slug": "home",
  "parent": null,
  "content": [...]
}
```
**URL**: `https://yourdomain.com/` (root)

## Notes

- Pages are statically generated at build time for optimal performance
- **Homepage**: Create a page with slug "home" to set up your homepage at the root URL (`/`)
- **Clean URLs**: The homepage doesn't show `/home` in the URL, it's just `/`
- **Hierarchical Structure**: Use the `parent` field to create nested URLs like `/solutions/defense`
- **Flexible Routing**: Supports both single-level (`/about`) and multi-level (`/solutions/defense`) URLs
- SEO metadata is automatically handled
- All existing styling and components work seamlessly
- The system supports unlimited nesting of content components
- Webhook revalidation keeps content fresh without rebuilds 