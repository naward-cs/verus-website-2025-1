// API route to fetch Open Graph metadata from a URL
import { NextResponse } from 'next/server';
import { parse } from 'node-html-parser';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get('url');

  if (!url) {
    return NextResponse.json({ error: 'URL parameter is required' }, { status: 400 });
  }

  try {
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; VerusMediaBot/1.0; +https://verus.io)'
      }
    });

    if (!response.ok) {
      return NextResponse.json({ error: 'Failed to fetch URL' }, { status: response.status });
    }

    const html = await response.text();
    const root = parse(html);

    // Extract Open Graph metadata
    const metadata = {
      title: getMetaContent(root, 'og:title') || 
             getMetaContent(root, 'twitter:title') || 
             root.querySelector('title')?.text || '',
             
      description: getMetaContent(root, 'og:description') || 
                  getMetaContent(root, 'twitter:description') || 
                  getMetaContent(root, 'description') || '',
                  
      image: getMetaContent(root, 'og:image') || 
             getMetaContent(root, 'twitter:image') || '',
             
      source: getMetaContent(root, 'og:site_name') || 
              new URL(url).hostname.replace('www.', '').split('.')[0],
              
      url: url,
      
      // Extract date - try various methods
      date: getMetaContent(root, 'article:published_time') || 
            getMetaContent(root, 'og:article:published_time') || 
            getPublishedDate(html) || 
            new Date().toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })
    };

    return NextResponse.json(metadata);
  } catch (error) {
    console.error('Error fetching metadata:', error);
    return NextResponse.json({ error: 'Failed to parse metadata' }, { status: 500 });
  }
}

// Helper function to extract meta content
function getMetaContent(root: any, property: string): string | null {
  // Try Open Graph format
  const ogMeta = root.querySelector(`meta[property="${property}"]`);
  if (ogMeta) return ogMeta.getAttribute('content');
  
  // Try name attribute format
  const nameMeta = root.querySelector(`meta[name="${property}"]`);
  if (nameMeta) return nameMeta.getAttribute('content');
  
  return null;
}

// Helper function to try to extract published date from common patterns in HTML
function getPublishedDate(html: string): string | null {
  // Common date patterns in article pages
  const datePatterns = [
    /datetime="([^"]+)"/i,
    /"datePublished":\s*"([^"]+)"/i,
    /"publishedDate":\s*"([^"]+)"/i,
    /"dateCreated":\s*"([^"]+)"/i
  ];
  
  for (const pattern of datePatterns) {
    const match = html.match(pattern);
    if (match && match[1]) {
      try {
        const date = new Date(match[1]);
        return date.toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        });
      } catch (e) {
        // Continue if this format fails
      }
    }
  }
  
  return null;
} 