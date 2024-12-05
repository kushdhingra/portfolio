import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "images.unsplash.com",   // Unsplash
      "cdn.pixabay.com",       // Pixabay
      "images.pexels.com",     // Pexels
      "raw.githubusercontent.com", // raw GitHub content
      "*.githubusercontent.com",   // all GitHub user content
      "http.cat"
    ],
  },
};

export default nextConfig;

