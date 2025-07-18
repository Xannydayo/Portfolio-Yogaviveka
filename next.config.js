/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    domains: [
      "res.cloudinary.com",
      "i.scdn.co",
      "cdn.sanity.io",
      "cdn.discordapp.com",
      "asset.cloudinary.com",
    ],
  },
};

module.exports = nextConfig;
