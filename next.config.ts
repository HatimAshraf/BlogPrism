import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    remotePatterns:[
      {
        hostname:"www.techjuice.pk",
        protocol:"https",
        port:'',
      },
      {
        hostname:"upload.wikimedia.org",
        protocol:"https",
        port:'',
      }
    ]
  }
};

export default nextConfig;
