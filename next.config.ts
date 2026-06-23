import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i6geujgmiz.ufs.sh"',
        pathname: '/f/**',
      },
      {
        protocol: 'https',
        hostname: "**"
      }
    ]
  }
};

export default nextConfig;
