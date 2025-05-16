/*
* Server API route for fetching Arweave data
* - Handles server-side Arweave transactions fetching
* - Prevents client-side Arweave library usage in production
* - Provides endpoints for both transaction data and GraphQL queries
*/

import { NextRequest, NextResponse } from 'next/server';
import Arweave from 'arweave';

// Initialize Arweave client
const arweave = Arweave.init({
  host: 'arweave.net',
  port: 443,
  protocol: 'https',
});

// Cache to prevent excessive requests
const CACHE_TIME = 300; // 5 minutes
const cache = new Map();

/**
 * Helper to get data from cache or fetch it
 */
const getFromCacheOrFetch = async (key: string, fetchFn: () => Promise<any>) => {
  const now = Date.now();
  const cachedItem = cache.get(key);
  
  if (cachedItem && now - cachedItem.timestamp < CACHE_TIME * 1000) {
    return { data: cachedItem.data, cached: true };
  }
  
  try {
    const data = await fetchFn();
    cache.set(key, { data, timestamp: now });
    return { data, cached: false };
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

/**
 * API route to fetch transaction data from Arweave
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { action, txId, ownerAddress, publicVdxfid } = body;
    
    // Validate request
    if (!action) {
      return NextResponse.json(
        { error: 'Missing required parameter: action' },
        { status: 400 }
      );
    }
    
    // Route for getting transaction data
    if (action === 'getTransactionData' && txId) {
      const cacheKey = `tx_${txId}`;
      
      const result = await getFromCacheOrFetch(cacheKey, async () => {
        const data = await arweave.transactions.getData(txId, {
          decode: true,
          string: true,
        });
        
        return data.toString();
      });
      
      return NextResponse.json({
        data: result.data,
        cached: result.cached
      }, { status: 200 });
    }
    
    // Route for GraphQL queries to find transactions
    if (action === 'findOwnerTransactions' && ownerAddress) {
      const cacheKey = `owner_${ownerAddress}_${publicVdxfid || ''}`;
      
      const result = await getFromCacheOrFetch(cacheKey, async () => {
        // GraphQL query to get transactions by owner
        const ownerQueryStr = `query {
          transactions(
            first: 10
            sort: HEIGHT_DESC
            owners: ["${ownerAddress}"]
          ) {
            edges {
              node {
                id
                tags {
                  name
                  value
                }
              }
            }
          }
        }`;
        
        // Execute owner query
        const response = await fetch('https://arweave.net/graphql', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({ query: ownerQueryStr }),
        });
        
        if (!response.ok) {
          throw new Error(`GraphQL query failed: ${response.statusText}`);
        }
        
        return await response.json();
      });
      
      return NextResponse.json({
        data: result.data,
        cached: result.cached
      }, { status: 200 });
    }
    
    return NextResponse.json(
      { error: 'Invalid action or missing required parameters' },
      { status: 400 }
    );
  } catch (error) {
    console.error('Error processing Arweave data request:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Unknown error processing request' },
      { status: 500 }
    );
  }
} 