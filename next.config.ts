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
};

export default nextConfig;
