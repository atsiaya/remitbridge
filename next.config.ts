import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async redirects() {
    // Keep links to the previous site structure working.
    return [
      { source: "/products", destination: "/", permanent: true },
      { source: "/solutions", destination: "/", permanent: true },
      { source: "/solutions/money-transfers", destination: "/remittance", permanent: true },
      { source: "/solutions/currency-exchange", destination: "/remittance", permanent: true },
      { source: "/solutions/mobile-topups", destination: "/", permanent: true },
      { source: "/solutions/esim", destination: "/", permanent: true },
      { source: "/developers", destination: "/", permanent: true },
      { source: "/blog", destination: "/", permanent: true },
      { source: "/download-app", destination: "/get-started", permanent: true },
      { source: "/register", destination: "/get-started", permanent: true },
    ];
  },
};

export default nextConfig;
