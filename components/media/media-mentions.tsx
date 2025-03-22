// Media mentions component displaying articles and press about Verus
"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { ExternalLink, Calendar } from 'lucide-react'

// Only URL is required; all other data will be fetched from the URL
interface RawMediaItem {
  url: string
}

// Full media item with all metadata
interface MediaItem {
  title: string
  source: string
  date: string
  description: string
  url: string
  image: string
  isLoading: boolean
  error?: string
}

// Example data with just URLs - the rest will be fetched
const mediaUrls: RawMediaItem[] = [
  {
    url: "https://finance.yahoo.com/news/introducing-llama-3-verusgpt-open-183700217.html"
  }
]

export function MediaMentions() {
  const [mediaItems, setMediaItems] = useState<MediaItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize with loading placeholders
    setMediaItems(mediaUrls.map(item => ({
      ...item,
      title: "",
      source: "",
      date: "",
      description: "",
      image: "",
      isLoading: true
    })));
    
    // Fetch metadata for each URL
    const fetchMetadataForUrls = async () => {
      const promises = mediaUrls.map(async (item, index) => {
        try {
          const response = await fetch(`/api/og-metadata?url=${encodeURIComponent(item.url)}`);
          if (!response.ok) {
            throw new Error('Failed to fetch metadata');
          }
          
          const metadata = await response.json();
          return {
            ...metadata,
            isLoading: false
          };
        } catch (error) {
          console.error('Error fetching metadata for URL:', item.url, error);
          // Return a fallback item with error state
          return {
            url: item.url,
            title: `Article from ${new URL(item.url).hostname.replace('www.', '')}`,
            source: new URL(item.url).hostname.replace('www.', '').split('.')[0],
            date: "Publication date unavailable",
            description: "Article description could not be loaded.",
            image: "",
            isLoading: false,
            error: "Failed to load article metadata"
          };
        }
      });
      
      // Wait for all promises to resolve
      const results = await Promise.all(promises);
      setMediaItems(results);
      setIsLoading(false);
    };
    
    fetchMetadataForUrls();
  }, []);

  return (
    <div className="px-4 md:px-0">
      <div className="mb-8 md:mb-12">
        <h2 className="text-[20px] md:text-[28px] font-medium text-gray-900 dark:text-white">
          Media Coverage
        </h2>
        <p className="text-[14px] md:text-[16px] text-gray-600 dark:text-gray-300 mt-2">
          Recent articles, interviews, and press features about Verus and its technology.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mediaItems.map((item, index) => (
          <Link
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white dark:bg-gray-800 border border-[#E9EFFC] dark:border-gray-700 rounded-lg overflow-hidden hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-200 shadow-sm hover:shadow-md"
          >
            <div className="relative aspect-[16/9] w-full bg-gradient-to-br from-blue-50/70 to-indigo-50/70 dark:from-blue-950/50 dark:to-indigo-950/30 flex items-center justify-center p-4">
              {item.isLoading ? (
                <div className="h-8 w-32 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
              ) : (
                <div className="text-center">
                  <div className="font-medium text-[24px] md:text-[28px] text-verus-blue dark:text-blue-300 capitalize tracking-tight">
                    {item.source}
                  </div>
                  <div className="text-[12px] text-gray-500 dark:text-gray-400 mt-1">
                    {item.date}
                  </div>
                </div>
              )}
            </div>
            
            <div className="p-4">
              {item.isLoading ? (
                // Loading state
                <>
                  <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full mb-1"></div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-2/3 mb-3"></div>
                  <div className="flex items-center justify-between">
                    <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/3"></div>
                    <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/4"></div>
                  </div>
                </>
              ) : (
                // Loaded content
                <>
                  <h3 className="font-medium text-base mb-2 line-clamp-2 text-gray-900 dark:text-white group-hover:text-verus-blue dark:group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-2">
                    {item.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                      <Calendar className="w-3 h-3" />
                      <time dateTime={new Date(item.date).toISOString()}>
                        {item.date}
                      </time>
                    </div>
                    <span className="flex items-center gap-1 text-verus-blue dark:text-blue-400">
                      Read more
                      <ExternalLink className="w-3 h-3" />
                    </span>
                  </div>
                </>
              )}
            </div>
          </Link>
        ))}
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-[14px] text-gray-600 dark:text-gray-300">
          For press inquiries, please contact our media team at{" "}
          <a href="mailto:press@verus.io" className="text-verus-blue dark:text-blue-400 hover:underline">
            press@verus.io
          </a>
        </p>
      </div>
    </div>
  )
} 