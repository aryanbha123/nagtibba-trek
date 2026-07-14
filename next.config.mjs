/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Local assets are served from /public; no remote domains needed.
    formats: ["image/webp"],
  },
};

export default nextConfig;
