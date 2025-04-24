// This file applies CORS headers to API routes to ensure requests only come from allowed domains.
// Changes:
// - Moved allowedOrigins outside the middleware function for efficiency.
// - Refactored static header setting using a corsHeaders constant and a loop for maintainability.
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Define allowed origins outside the function for efficiency
const allowedOrigins = [
  'http://localhost:3000',    // Local development
  'https://verus.io',         // Production domain
  'https://nextdev.verus.io', // test domain
  'https://verus-website-2025-1-meyse.replit.app' // Replit deployment
];

// Define static CORS headers in a constant object
const corsHeaders = {
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  'Access-Control-Allow-Credentials': 'true',
};

export function middleware(request: NextRequest) {
  // Get the origin from the request headers
  const origin = request.headers.get('origin') || '';
  
  // Check if the path starts with /api
  const isApiRoute = request.nextUrl.pathname.startsWith('/api');
  
  // Only apply CORS for API routes
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
  
  // If not an API route, just pass through
  return NextResponse.next();
}

// Configure the middleware to only run on API routes
export const config = {
  matcher: '/api/:path*',
}; 