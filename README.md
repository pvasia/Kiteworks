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
