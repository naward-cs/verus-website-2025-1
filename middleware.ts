import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Define allowed origins
  const allowedOrigins = [
    'http://localhost:3000',    // Local development
    'https://verus.io',         // Production domain
    'https://nextdev.verus.io', // test domain
    'https://verus-website-2025-1-meyse.replit.app' // Replit deployment
  ];
  
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
    
    // Set CORS headers based on whether the origin is allowed
    response.headers.set('Access-Control-Allow-Origin', isAllowed ? origin : allowedOrigins[0]);
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    response.headers.set('Access-Control-Allow-Credentials', 'true');
    
    return response;
  }
  
  return NextResponse.next();
}

// Configure the middleware to only run on API routes
export const config = {
  matcher: '/api/:path*',
}; 