import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/tela", destination: "/aitech-workshop", permanent: true },
      { source: "/tools/tela-closing-checklist.pdf", destination: "/tools/aitech-workshop-closing-checklist.pdf", permanent: true },
      { source: "/tools/tela-business-tools.xlsx", destination: "/tools/aitech-workshop-business-tools.xlsx", permanent: true },
    ];
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
