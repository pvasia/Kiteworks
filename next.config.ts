import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  sassOptions: {},
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": ".",
      "@components": "./components",
      "@atoms": "./components/atoms",
      "@hero": "./components/hero",
    };
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      {
        protocol: "http", // or 'https'
        hostname: "localhost", // or your Strapi domain
        port: "1337", // or your Strapi port
        pathname: "/uploads/**",
      },
      {
        protocol: "https",
        hostname: "bold-garden-3f85097a55.strapiapp.com",
        pathname: "/uploads/**",
      },
    ],
  },
};

export default nextConfig;
