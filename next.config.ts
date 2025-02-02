import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    remotePatterns:[{
      protocol: 'https',
      hostname: 'pexels.com',
      port: '',
      pathname: '/**',
    },
    {
      protocol: 'https',
      hostname: 'example.com',
      port: '',
      pathname: '/**',
    }
  ],
  },
};

export default nextConfig;
