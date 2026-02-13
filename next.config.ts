import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: "/",
        destination: "/user/login",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
