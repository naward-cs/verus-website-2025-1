// Automatically remove console logs (except errors) in production builds.
/** @type {import('next').NextConfig} */
const nextConfig = {
  // For development, we'll use the standard Next.js build
  // For production on Replit, we'll use the 'export' output
  
  compiler: {
    // Remove all console logs except console.error in production builds
    removeConsole: {
      exclude: ['error'],
    },
  },
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