import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // Set basePath to match the repository name on GitHub Pages for production builds
  basePath: isProd ? "/ApexFinancesWebsite" : "",
};

export default nextConfig;
