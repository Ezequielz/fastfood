import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
        {
            protocol: 'https',
            hostname: 'cache-mcd-ecommerce.appmcdonalds.com',
        },
        {
            protocol: 'https',
            hostname: 'd2umxhib5z7frz.cloudfront.net',
        },
    ],
},
};

export default nextConfig;
