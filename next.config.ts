import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Performance optimizations
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
  // Optimize images
  images: {
    domains: ['images.pexels.com'],
    formats: ['image/webp', 'image/avif'],
  },
  // Reduce bundle size
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
    eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  } ,
    webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      'leaflet': path.resolve(__dirname, 'node_modules/leaflet')
    };
    return config;
  } ,
  // Enable static optimization
  trailingSlash: false,
  // Optimize for production
  poweredByHeader: false,
};

export default nextConfig;
