import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/dewf3zos0/**",
      },
      {
        protocol: "https",
        hostname: "jma-zvok-cdn.b-cdn.net",
      },
    ],
  },
};

export default nextConfig;
