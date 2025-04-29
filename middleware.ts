// This file handles CORS headers for API routes and permanent redirects for old website URLs.
// Changes:
// - Added permanent (301) redirects for legacy URLs.
// - Updated the matcher to run middleware on relevant page routes as well as API routes.
// - Integrated redirect logic before CORS logic.
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Define allowed origins outside the function for efficiency
const allowedOrigins = [
  'http://localhost:3000',    // Local development
  'https://verus.io', 
  'https://www.verus.io',         // Production domain
  'https://nextdev.verus.io', // test domain
  'https://verus-website-2025-1-meyse.replit.app' // Replit deployment
];

// Define static CORS headers in a constant object
const corsHeaders = {
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  'Access-Control-Allow-Credentials': 'true',
};

// Define permanent redirects from old paths to new paths
const permanentRedirects: { [key: string]: string } = {
  '/economy': '/statistics',
  '/signatures': '/verify',
  '/exchanges': '/get-vrsc',
  '/wallet/desktop': '/wallet',
  '/wallet/desktop-wallet': '/wallet',
  '/wallet/mobile': '/wallet',
  '/wallet/mobile-wallet': '/wallet',
  '/verusid-lookup/mike': '/verusid-search?id=mike%40',
  '/verusid-lookup': '/verusid-search',
  '/create': '/build',
  '/foundations': '/intro',
  '/eth-bridge': '/ethereum-bridge',
};

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const origin = request.headers.get('origin') || '';

  // --- Handle Permanent Redirects ---
  // Check for exact match first
  let redirectPath = permanentRedirects[pathname];

  // If no exact match, check if it's a subpath of /verusid-lookup/
  // This handles dynamic paths like /verusid-lookup/anything -> /verusid-search?id=anything%40
  // We specifically exclude the /mike case which is handled above by exact match.
  if (!redirectPath && pathname.startsWith('/verusid-lookup/')) {
     const pathSegments = pathname.split('/');
     // Expecting ['', 'verusid-lookup', 'id']
     if (pathSegments.length === 3 && pathSegments[2]) {
        const lookupId = pathSegments[2];
        // Construct the new path with the query parameter
        redirectPath = `/verusid-search?id=${encodeURIComponent(lookupId)}%40`;
     } else if (pathname === '/verusid-lookup') {
        // Handle the base /verusid-lookup case separately if needed, though it's in permanentRedirects
        // This case is technically already handled by the permanentRedirects map, 
        // but kept here for potential future adjustments.
        redirectPath = permanentRedirects['/verusid-lookup']; // Use the map value
     }
  }

  if (redirectPath) {
    const newUrl = new URL(redirectPath, request.url);

    // Query parameters are now handled directly within the redirectPath for dynamic cases
    // or are absent for simple cases. We don't need to manually copy search params here
    // as new URL(redirectPath, ...) correctly includes them if they are part of redirectPath.
    // If you *also* needed to preserve *additional* query params from the original request 
    // (e.g., /verusid-lookup/cragorn?source=old), more complex merging logic would be needed here.

    return NextResponse.redirect(newUrl, 301); // 301 Moved Permanently
  }

  // --- Handle CORS for API Routes ---
  const isApiRoute = pathname.startsWith('/api');
  if (isApiRoute) {
    // Check if the origin is allowed
    const isAllowed = allowedOrigins.includes(origin);
    
    // Create a new response
    const response = NextResponse.next();
    
    // Set the dynamic Access-Control-Allow-Origin header
    // Only allow requests from origins in the allowed list.
    response.headers.set('Access-Control-Allow-Origin', isAllowed ? origin : allowedOrigins[0]);
    
    // Set the static CORS headers using the corsHeaders object
    Object.entries(corsHeaders).forEach(([key, value]) => {
      response.headers.set(key, value);
    });
    
    // Handle OPTIONS preflight requests
    if (request.method === 'OPTIONS') {
      // Respond with OK status and the headers
      return new Response(null, {
        status: 204, // No Content for preflight
        headers: response.headers, // Use the headers we just configured
      });
    }

    return response;
  }

  // If no redirect happened and it's not an API route needing CORS, continue
  return NextResponse.next();
}

// Configure the middleware to run on specific paths
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes) - Handled separately for CORS
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * We also include the specific paths that need redirects.
     * And explicitly include the API routes for CORS handling.
     */
    '/economy',
    '/signatures',
    '/exchanges',
    '/wallet/desktop',
    '/wallet/desktop-wallet',
    '/wallet/mobile',
    '/wallet/mobile-wallet',
    '/verusid-lookup/:path*', // Match base and subpaths like /mike
    '/create',
    '/eth-bridge',
    '/foundations',
    '/api/:path*', // Keep API routes for CORS
  ],
}; 