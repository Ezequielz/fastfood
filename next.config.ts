import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
        {
            protocol: 'https',
            hostname: 'cache-mcd-ecommerce.appmcdonalds.com',
        },
    ],
},
};

export default nextConfig;
