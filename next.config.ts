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
        protocol: "http",
        hostname: "localhost",
        port: "1337",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "bold-garden-3f85097a55.media.strapiapp.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
