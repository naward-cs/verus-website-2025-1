import fs from 'fs'
import path from 'path'

import {NextResponse} from 'next/server'

import Parser from 'rss-parser'

// Configure the route for static exporting
export const dynamic = 'force-static'
export const revalidate = 43200 // 12 hours in seconds

// Define cache path
const CACHE_FILE_PATH = path.join(
  process.cwd(),
  'cache',
  'medium-articles.json'
)
const CACHE_TTL = 24 * 60 * 60 * 1000 // 24 hours in milliseconds
const MEDIUM_FEED_URL = 'https://medium.com/feed/veruscoin'

// Track API requests for debugging
let requestCount = 0
let lastRequestTime = 0

// Type definitions
type CachedData = {
  timestamp: number
  articles: any[]
}

// Ensure cache directory exists
function ensureCacheDirectory() {
  const cacheDir = path.dirname(CACHE_FILE_PATH)
  if (!fs.existsSync(cacheDir)) {
    fs.mkdirSync(cacheDir, {recursive: true})
  }
}

// Read from cache
function readCache(): CachedData | null {
  try {
    ensureCacheDirectory()

    if (!fs.existsSync(CACHE_FILE_PATH)) {
      return null
    }

    const data = fs.readFileSync(CACHE_FILE_PATH, 'utf8')
    const cache = JSON.parse(data) as CachedData

    // Check if cache is still valid
    if (Date.now() - cache.timestamp < CACHE_TTL) {
      return cache
    }

    return null
  } catch (error) {
    console.error('Error reading cache:', error)
    return null
  }
}

// Write to cache
function writeCache(articles: any[]) {
  try {
    ensureCacheDirectory()

    const cacheData: CachedData = {
      timestamp: Date.now(),
      articles,
    }

    fs.writeFileSync(
      CACHE_FILE_PATH,
      JSON.stringify(cacheData, null, 2),
      'utf8'
    )
  } catch (error) {
    console.error('Error writing cache:', error)
  }
}

// Fetch articles from Medium
async function fetchMediumArticles() {
  try {
    const parser = new Parser({
      timeout: 10000, // 10 second timeout
      customFields: {
        item: [
          ['content:encoded', 'content'],
          ['dc:creator', 'creator'],
        ],
      },
    })

    const feed = await parser.parseURL(MEDIUM_FEED_URL)

    // Process articles
    const articles = feed.items.map((item) => {
      // Extract thumbnail image from content
      let thumbnail = ''
      if (item.content) {
        const imgMatch = item.content.match(
          /<img[^>]+src=["']([^"']+)["'][^>]*>/i
        )
        if (imgMatch && imgMatch[1]) {
          thumbnail = imgMatch[1]
        }
      }

      // Extract description (first paragraph or partial content)
      let description = ''
      if (item.content) {
        const textMatch = item.content.replace(/<[^>]+>/g, ' ').trim()
        description =
          textMatch.substring(0, 200) + (textMatch.length > 200 ? '...' : '')
      }

      return {
        title: item.title,
        link: item.link,
        pubDate: item.pubDate,
        creator: item.creator,
        content: item.content,
        thumbnail,
        description,
      }
    })

    return articles
  } catch (error) {
    console.error('Error fetching Medium articles:', error)
    throw error
  }
}

// GET handler
export async function GET(request: Request) {
  // Track request frequency
  const now = Date.now()
  const timeSinceLastRequest = now - lastRequestTime
  requestCount++

  // Log request frequency for debugging
  if (timeSinceLastRequest < 1000) {
    console.log(
      `⚠️ Multiple requests within ${timeSinceLastRequest}ms! Request #${requestCount}`
    )
  }

  lastRequestTime = now

  // Check for query params to bypass cache
  const url = new URL(request.url)
  const forceRefresh = url.searchParams.has('refresh')

  try {
    // Only check cache if not forcing refresh
    if (!forceRefresh) {
      const cache = readCache()
      if (cache && cache.articles.length > 0) {
        return NextResponse.json(
          {
            articles: cache.articles,
            source: 'cache',
            timestamp: cache.timestamp,
            requestId: requestCount,
          },
          {
            headers: {
              // Add cache control headers
              'Cache-Control': 'public, max-age=600', // Client-side caching for 10 minutes
            },
          }
        )
      }
    }

    // Fetch fresh data
    console.log('Fetching fresh Medium articles')
    const articles = await fetchMediumArticles()

    // Save to cache
    if (articles.length > 0) {
      writeCache(articles)
    }

    return NextResponse.json(
      {
        articles,
        source: 'fresh',
        timestamp: Date.now(),
        requestId: requestCount,
      },
      {
        headers: {
          // Add cache control headers
          'Cache-Control': 'public, max-age=600', // Client-side caching for 10 minutes
        },
      }
    )
  } catch (error) {
    console.error('Error in Medium API route:', error)

    // Try to return cached data even if it's expired
    const cache = readCache()
    if (cache) {
      console.log('Serving expired cache after fetch failure')
      return NextResponse.json(
        {
          articles: cache.articles,
          source: 'expired-cache',
          timestamp: cache.timestamp,
          requestId: requestCount,
        },
        {
          headers: {
            // Add cache control headers
            'Cache-Control': 'public, max-age=300', // Shorter client-side caching for expired data
          },
        }
      )
    }

    // Return empty response with error status
    return NextResponse.json(
      {
        articles: [],
        error: 'Failed to fetch Medium articles',
        timestamp: Date.now(),
        requestId: requestCount,
      },
      {
        status: 200, // Still return 200 to avoid breaking the client
        headers: {
          'Cache-Control': 'no-cache', // Don't cache error responses
        },
      }
    )
  }
}
