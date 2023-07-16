/** @type {import('next').NextConfig} */

const nextConfig = {
  compiler: {
    styledComponents: {
      displayName: false,
      ssr: false
    }
  },
  env: {
    TMDB_API_KEY: process.env.TMDB_API_KEY
  },
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["image.tmdb.org"],
  },
  reactStrictMode: true,
  swcMinify: true,
  };

module.exports = nextConfig
