# Strapi Header Setup

This document explains how to set up the Header component to work with Strapi CMS.

## Strapi Content Structure

Create a "Global" content type in Strapi with the following structure:

### Content Type: Global

```json
{
  "collectionName": "globals",
  "info": {
    "singularName": "global",
    "pluralName": "globals",
    "displayName": "Global"
  },
  "options": {
    "draftAndPublish": true
  },
  "attributes": {
    "logo": {
      "type": "media",
      "multiple": false,
      "required": false,
      "allowedTypes": ["images"]
    },
    "menu": {
      "type": "json",
      "required": false
    },
    "alert": {
      "type": "component",
      "repeatable": false,
      "component": "shared.alert"
    },
    "showCompliance": {
      "type": "boolean",
      "default": true
    }
  }
}
```

### Component: Alert

Create a shared component for alerts:

```json
{
  "collectionName": "components_shared_alerts",
  "info": {
    "displayName": "Alert",
    "description": "Header alert banner"
  },
  "options": {},
  "attributes": {
    "type": {
      "type": "enumeration",
      "enum": ["news", "announcement", "info"],
      "required": true
    },
    "message": {
      "type": "text",
      "required": true
    },
    "link": {
      "type": "string",
      "required": false
    }
  }
}
```

## Menu JSON Structure

The menu field should contain a JSON array with this structure:

```json
[
  {
    "label": "Solutions",
    "url": "/solutions",
    "subItems": [
      {
        "label": "Department of Defense",
        "url": "/solutions/defense"
      },
      {
        "label": "Department of Homeland Security",
        "url": "/solutions/homeland-security"
      }
    ]
  },
  {
    "label": "Use Cases",
    "url": "/use-cases",
    "subItems": [
      {
        "label": "CMMC Compliance",
        "url": "/use-cases/cmmc-compliance"
      }
    ]
  }
]
```

## Environment Variables

Add these environment variables to your `.env.local`:

```bash
STRAPI_API_URL=http://localhost:1337
# or your production Strapi URL
STRAPI_API_URL=https://your-strapi-instance.com
```

## API Endpoint

The Header component fetches data from:
```
GET /api/global?populate=deep
```

## Fallback Behavior

If Strapi is unavailable or returns no data, the Header component will fall back to the static content defined in `lib/content/shared-content.ts`.

## Caching

The header data is cached for 1 hour (3600 seconds) and can be revalidated via webhooks when content is updated in Strapi.

## Webhook Setup

To enable automatic revalidation when content changes, set up a webhook in Strapi:

1. Go to Settings > Global Settings > Webhooks
2. Create a new webhook with:
   - Name: "Next.js Revalidation"
   - URL: `https://your-nextjs-app.com/api/revalidate`
   - Events: Select "Entry publish" and "Entry unpublish"
   - Headers: Add any authentication headers if needed

The webhook will trigger revalidation of the header content when the Global content type is updated. 