"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, Calendar } from 'lucide-react';

type Article = {
  title: string;
  link: string;
  pubDate: string;
  content: string;
  thumbnail: string;
  description: string;
};

// Create a cache object outside the component
// This prevents duplicate requests across component re-renders
const requestCache = {
  data: null as Article[] | null,
  timestamp: 0,
  inProgress: false
};

async function fetchMediumArticles(): Promise<Article[]> {
  // If there's a request in progress, wait for it
  if (requestCache.inProgress) {
    console.log('Request already in progress, waiting...');
    // Wait until current request completes
    await new Promise(resolve => {
      const checkInterval = setInterval(() => {
        if (!requestCache.inProgress) {
          clearInterval(checkInterval);
          resolve(null);
        }
      }, 100);
    });
    
    // Return cached data if we have it
    if (requestCache.data) {
      return requestCache.data;
    }
  }
  
  // If we have cached data less than 5 minutes old, use it
  const cacheAge = Date.now() - requestCache.timestamp;
  if (requestCache.data && cacheAge < 5 * 60 * 1000) {
    console.log('Using cached Medium data (client-side)');
    return requestCache.data;
  }
  
  // Mark that a request is in progress
  requestCache.inProgress = true;
  
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout
  
  try {
    // Add unique timestamp to prevent caching by the browser
    const url = `/api/medium?_t=${Date.now()}`;
    console.log('Fetching Medium data from', url);
    
    // Use a relative URL that works consistently in both development and production
    const response = await fetch(url, {
      signal: controller.signal,
      // Explicitly disable caching to prevent duplicate requests
      cache: 'no-store',
    });
    
    clearTimeout(timeoutId);
    
    if (!response.ok) {
      console.error(`Failed to fetch Medium articles: ${response.status} ${response.statusText}`);
      requestCache.inProgress = false;
      return [];
    }
    
    const data = await response.json();
    const articles = data.articles || [];
    
    // Store in cache
    requestCache.data = articles;
    requestCache.timestamp = Date.now();
    requestCache.inProgress = false;
    
    return articles;
  } catch (error) {
    clearTimeout(timeoutId);
    console.error('Error fetching Medium articles:', error);
    requestCache.inProgress = false;
    return [];
  }
}

function ArticleGrid({ articles }: { articles: Article[] }) {
  if (!articles || !articles.length) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 dark:text-gray-400">No articles available at this moment</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[1220px] mx-auto">
      {articles.slice(0, 6).map((article: Article, index: number) => (
        <Link
          key={article.link + index}
          href={article.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-white dark:bg-gray-800 border border-[#E9EFFC] dark:border-gray-700 rounded-lg overflow-hidden hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-200 shadow-sm hover:shadow-md"
        >
          {article.thumbnail && (
            <div className="relative aspect-[16/9] w-full bg-gray-100 dark:bg-gray-700">
              <Image
                src={article.thumbnail}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          )}
          <div className="p-4">
            <h3 className="font-medium text-base mb-2 line-clamp-2 text-gray-900 dark:text-white group-hover:text-verus-blue dark:group-hover:text-blue-400 transition-colors">
              {article.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-2">
              {article.description}
            </p>
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                <Calendar className="w-3 h-3" />
                <time dateTime={new Date(article.pubDate).toISOString()}>
                  {new Date(article.pubDate).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                  })}
                </time>
              </div>
              <span className="flex items-center gap-1 text-verus-blue dark:text-blue-400">
                Read more
                <ExternalLink className="w-3 h-3" />
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default function MediumFeed() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  
  useEffect(() => {
    // Use a mounting flag to prevent duplicate requests
    let isMounted = true;
    
    const loadArticles = async () => {
      try {
        console.log('Medium feed component mounted, loading articles...');
        
        if (!isMounted) return;
        setLoading(true);
        
        const data = await fetchMediumArticles();
        
        if (isMounted) {
          console.log(`Loaded ${data.length} articles`);
          setArticles(data);
          setLoading(false);
        }
      } catch (err) {
        console.error('Error loading Medium articles:', err);
        if (isMounted) {
          setError(true);
          setLoading(false);
        }
      }
    };
    
    loadArticles();
    
    // Cleanup function
    return () => {
      console.log('Medium feed component unmounting');
      isMounted = false;
    };
  // Add a timestamp to force the effect to only run once per browser session
  // This is an unusual pattern but helps with React 18 Strict Mode's double mounting
  }, [typeof window !== 'undefined' ? window.sessionStorage.getItem('medium-feed-loaded') : null]);
  
  // Mark that we've loaded this component in this session
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (!window.sessionStorage.getItem('medium-feed-loaded')) {
        window.sessionStorage.setItem('medium-feed-loaded', Date.now().toString());
      }
    }
  }, []);
  
  if (loading) {
    return (
      <div className="min-h-[300px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[1220px] mx-auto">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="bg-white dark:bg-gray-800 border border-[#E9EFFC] dark:border-gray-700 rounded-lg overflow-hidden shadow-sm animate-pulse">
            <div className="aspect-[16/9] w-full bg-gray-200 dark:bg-gray-700"></div>
            <div className="p-4">
              <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full mb-1"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-2/3 mb-3"></div>
              <div className="flex items-center justify-between">
                <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/3"></div>
                <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/4"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="text-center py-12 max-w-[1220px] mx-auto">
        <p className="text-gray-500 dark:text-gray-400">Unable to load articles at this time</p>
      </div>
    );
  }
  
  return <ArticleGrid articles={articles} />;
}