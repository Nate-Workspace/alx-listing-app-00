import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
   images: {
    domains: ['example.com'], // allow this domain
  },
};

export default nextConfig;
