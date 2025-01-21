import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // TODO: Remove dangerouslyAllowSVG: true when the issue is fixed
    dangerouslyAllowSVG: true,
    remotePatterns: [{ protocol: "https", hostname: "*" }],
  },
};

export default nextConfig;
