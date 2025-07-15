# Kiteworks Strapi Next.js Project

A modern full-stack application combining Strapi CMS with Next.js frontend, built with TypeScript, React 19, and Sass. This project includes Storybook for component development and uses Turbopack for fast development builds

## Tech Stack

### Frontend
- **Next.js 15.3.3** - React framework with App Router
- **React 19** - Latest React version
- **TypeScript 5** - Type-safe JavaScript
- **Sass** - CSS preprocessor for styling
- **Classnames** - Utility for conditional CSS classes

### Backend/CMS
- **Strapi** - Headless CMS for content management

### Development Tools
- **PNPM** - Fast, disk space efficient package manager
- **Storybook** - Component development environment
- **ESLint** - Code linting and formatting
- **Husky** - Git hooks for code quality
- **Turbopack** - Fast bundler for development

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:
- **Node.js** (version 18 or higher)
- **PNPM** (version 8 or higher) - This project is locked to use PNPM only

#### Installing PNPM

If you don't have PNPM installed, you can install it globally:

```bash
npm install -g pnpm
# or using corepack (recommended)
corepack enable
corepack prepare pnpm@latest --activate
```

### Installation

1. Clone the repository
2. Install dependencies:

```bash
pnpm install
```

3. Set up environment variables:

Create a `.env.local` file in the root directory and add the following variables:

```env
# Strapi Configuration
STRAPI_API_URL=http://localhost:1337
# For production, use your Strapi URL:
# STRAPI_API_URL=https://your-strapi-domain.com

# Webhook Security
# Generate a strong, random secret for webhook verification
# You can use: openssl rand -hex 32
WEBHOOK_SECRET=your-webhook-secret-here

# Revalidation Security
# Generate a strong, random secret for revalidation endpoint
# You can use: openssl rand -hex 32
REVALIDATION_SECRET=your-revalidation-secret-here

# Next.js Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
# For production:
# NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

### Development

Run the development server with Turbopack for faster builds:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Available Scripts

- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Build the application for production
- `pnpm start` - Start the production server
- `pnpm lint` - Run ESLint for code linting
- `pnpm storybook` - Start Storybook development server on port 6006
- `pnpm build-storybook` - Build Storybook for production

## Component Development

This project uses Storybook for isolated component development. To start developing components:

```bash
pnpm storybook
```

Visit [http://localhost:6006](http://localhost:6006) to view your component library.

## Project Structure

### Frontend (Next.js)
- `/components` - Reusable React components
- `/app` - Next.js App Router pages and layouts
- `/styles` - Global styles and SCSS modules
- `/fonts` - Custom font files
- `/stories` - Storybook stories for components

### Integration
This project is designed to work with a Strapi backend for content management. The frontend fetches content from Strapi API endpoints to display dynamic content.

## Strapi Integration & Revalidation

This project includes a comprehensive revalidation system that automatically updates your Next.js application when content changes in Strapi.

### How It Works

1. **Webhook Endpoint**: The application provides a secure webhook endpoint at `/api/revalidate` that Strapi can call when content changes
2. **Automatic Revalidation**: When content is updated in Strapi, the webhook triggers Next.js to revalidate the affected pages and clear cached data
3. **Security**: The system includes webhook signature verification, rate limiting, and secret-based authentication

### Setting up Strapi Webhooks

1. **In your Strapi admin panel**, go to `Settings > Webhooks`
2. **Create a new webhook** with the following settings:
   - **Name**: Next.js Revalidation
   - **URL**: `https://your-nextjs-domain.com/api/revalidate`
   - **Events**: Select the events you want to trigger revalidation (e.g., `entry.create`, `entry.update`, `entry.delete`)
   - **Headers**: Add `X-Webhook-Secret` with your `REVALIDATION_SECRET` value

3. **For enhanced security**, you can also set up webhook signatures:
   - In Strapi, add a webhook signature using your `WEBHOOK_SECRET`
   - The Next.js endpoint will verify the signature automatically

### Webhook Payload

The webhook should send a JSON payload like this:

```json
{
  "event": "entry.update",
  "model": "home",
  "entry": {
    "id": 1
  },
  "secret": "your-revalidation-secret"
}
```

### Manual Revalidation

For development, you can manually trigger revalidation:

```bash
# Revalidate all content
curl -X GET "http://localhost:3000/api/revalidate?secret=your-secret"

# Revalidate specific path
curl -X GET "http://localhost:3000/api/revalidate?path=/example&secret=your-secret"

# Revalidate specific tag
curl -X GET "http://localhost:3000/api/revalidate?tag=home-content&secret=your-secret"
```

### Caching Strategy

The application uses Next.js 15's enhanced caching with:
- **Cache Tags**: Content is tagged for selective revalidation
- **Time-based Revalidation**: Fallback revalidation every hour
- **On-demand Revalidation**: Immediate updates via webhooks

### Content Types & Revalidation

- **home**: Revalidates `/` and `/example` pages
- **page**: Revalidates specific page paths
- **global**: Revalidates all pages (headers, footers, etc.)
- **Custom**: Add your own content types in `lib/webhook-utils.ts`

## Package Manager

This project is configured to use **PNPM only**. The repository includes:

- `.npmrc` file with `package-manager-strict=true` to enforce PNPM usage
- `package.json` with `engines` field specifying minimum PNPM version
- `packageManager` field for consistent version management

### Why PNPM?

- **Fast**: Up to 2x faster than npm/yarn
- **Efficient**: Uses hard links to save disk space
- **Strict**: Better dependency resolution and hoisting
- **Reliable**: Consistent installations across environments

## Code Quality

This project uses several tools to maintain code quality:

- **ESLint** - Linting rules for consistent code style
- **Husky** - Pre-commit hooks to ensure code quality
- **TypeScript** - Static type checking

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API
- [React Documentation](https://react.dev) - learn about React
- [TypeScript Documentation](https://www.typescriptlang.org/docs) - learn about TypeScript
- [Sass Documentation](https://sass-lang.com/documentation) - learn about Sass
- [Storybook Documentation](https://storybook.js.org/docs) - learn about Storybook

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
