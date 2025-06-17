/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': '.',
      '@components': './components',
      '@atoms': './components/atoms',
      '@hero': './components/hero'
    };
    return config;
  }
};

module.exports = nextConfig; 