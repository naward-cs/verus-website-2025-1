/** @type {import('next').NextConfig} */
const nextConfig = {
  // For development, we'll use the standard Next.js build
  // For production on Replit, we'll use the 'export' output
  
  images: { 
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;