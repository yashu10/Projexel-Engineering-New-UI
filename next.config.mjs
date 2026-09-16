/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    // Required for static export — Next.js cannot run the image optimisation
    // server in exported mode. Pre-converted WebP assets are used instead.
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
