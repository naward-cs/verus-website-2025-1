import { NextResponse } from 'next/server';
import Parser from 'rss-parser';
import fs from 'fs';
import path from 'path';

const CACHE_FILE = path.join(process.cwd(), 'cache', 'medium-articles.json');
const CACHE_TTL = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

type MediumArticle = {
  title: string;
  link: string;
  pubDate: string;
  content: string;
  thumbnail: string;
  description: string;
};

type CacheData = {
  articles: MediumArticle[];
  timestamp: number;
};

// Ensure cache directory exists
try {
  fs.mkdirSync(path.join(process.cwd(), 'cache'), { recursive: true });
} catch (error) {
  console.error('Error creating cache directory:', error);
}

function readCache(): CacheData | null {
  try {
    if (fs.existsSync(CACHE_FILE)) {
      const data = JSON.parse(fs.readFileSync(CACHE_FILE, 'utf8'));
      return data;
    }
  } catch (error) {
    console.error('Error reading cache:', error);
  }
  return null;
}

function writeCache(articles: MediumArticle[]) {
  try {
    const cacheData: CacheData = {
      articles,
      timestamp: Date.now()
    };
    fs.writeFileSync(CACHE_FILE, JSON.stringify(cacheData));
  } catch (error) {
    console.error('Error writing cache:', error);
  }
}

async function fetchMediumArticles(): Promise<MediumArticle[]> {
  const parser = new Parser({
    customFields: {
      item: [['content:encoded', 'content']]
    }
  });

  try {
    const feed = await parser.parseURL('https://medium.com/feed/veruscoin');
    
    return feed.items.map(item => {
      // Extract the first image from content
      const contentString = item.content || '';
      const imgRegex = /<img[^>]+src="([^">]+)"/;
      const match = contentString.match(imgRegex);
      
      // Get high-resolution image URL
      let thumbnail = match ? match[1] : '';
      if (thumbnail && thumbnail.includes('max/')) {
        thumbnail = thumbnail.replace('max/[0-9]+/', 'max/1200/');
      }

      // Clean up description and decode HTML entities
      const cleanDescription = item['content:encoded']
        ? item['content:encoded']
            .replace(/<[^>]*>/g, '') // Remove HTML tags
            .replace(/\s+/g, ' ') // Normalize whitespace
            .trim()
            .slice(0, 160) + '...'
        : '';

      return {
        title: item.title || '',
        link: item.link || '',
        pubDate: item.pubDate || '',
        content: item['content:encoded'] || '',
        thumbnail,
        description: cleanDescription
      };
    });
  } catch (error) {
    console.error('Error fetching Medium articles:', error);
    // Return an empty array instead of throwing
    return [];
  }
}

export async function GET() {
  try {
    // Check cache first
    const cache = readCache();
    const now = Date.now();

    // Use cache if it exists and is not expired
    if (cache && (now - cache.timestamp) < CACHE_TTL) {
      return NextResponse.json({ articles: cache.articles });
    }

    // Fetch new articles
    const articles = await fetchMediumArticles();
    
    // Cache the articles if we got them
    if (articles.length > 0) {
      writeCache(articles);
    } else {
      // If no new articles, use cached articles even if expired
      if (cache) {
        return NextResponse.json({ articles: cache.articles });
      }
    }

    return NextResponse.json({ articles });
  } catch (error) {
    console.error('Error in Medium API route:', error);
    // Return empty array instead of throwing
    return NextResponse.json({ articles: [] });
  }
}