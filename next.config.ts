import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: false, // Disabling compiler for build to save memory
  output: 'export',
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true, // Takay dashboard ke server components build na rokein
  },
};

export default nextConfig;
