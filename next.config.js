/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },

  images: {
    remotePatterns: [{ hostname: "raw.githubusercontent.com" }],
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
