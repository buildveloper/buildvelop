import type { NextConfig } from "next";

const CONNEX_ORIGIN = "https://connex-eight-tawny.vercel.app";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  skipTrailingSlashRedirect: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async rewrites() {
    return [
      { source: "/connex", destination: `${CONNEX_ORIGIN}/connex/` },
      { source: "/connex/", destination: `${CONNEX_ORIGIN}/connex/` },
      { source: "/connex/:path*", destination: `${CONNEX_ORIGIN}/connex/:path*` },
    ];
  },
};

export default nextConfig;
