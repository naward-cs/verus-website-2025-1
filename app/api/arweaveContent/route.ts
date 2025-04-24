import { NextRequest, NextResponse } from 'next/server';
import Arweave from 'arweave';
import { serialize } from 'next-mdx-remote/serialize';

// Initialize Arweave client
const arweave = Arweave.init({
  host: 'arweave.net',
  port: 443,
  protocol: 'https',
});

/**
 * API route to fetch content from Arweave
 * @returns Formatted Arweave content
 */
export async function GET(request: NextRequest) {
  try {
    // Get transaction ID and content type from query parameters
    const { searchParams } = new URL(request.url);
    const txid = searchParams.get('id');
    const contentType = searchParams.get('type');

    if (!txid) {
      return NextResponse.json(
        { error: 'Missing required parameter: id' },
        { status: 400 }
      );
    }

    console.log(`Fetching Arweave content for txid: ${txid}, type: ${contentType || 'unknown'}`);

    // Fetch data from Arweave
    const data = await arweave.transactions.getData(txid, {
      decode: true,
      string: true,
    });

    if (!data) {
      return NextResponse.json(
        { error: 'No data found for the given transaction ID' },
        { status: 404 }
      );
    }

    const dataStr = data.toString();
    console.log(`Retrieved ${dataStr.length} bytes of data`);

    // For post type, treat content as markdown and process it
    if (contentType === 'post') {
      try {
        // Use next-mdx-remote to process markdown content
        const mdxSource = await serialize(dataStr, {
          // Additional MDX options can be added here
          parseFrontmatter: true,
        });

        return NextResponse.json(mdxSource, { 
          status: 200,
          headers: {
            'Cache-Control': 'public, max-age=86400' // Cache for 24 hours
          }
        });
      } catch (mdxError) {
        console.error('Error processing markdown:', mdxError);
        // Fall back to raw content if markdown processing fails
        return NextResponse.json(
          { 
            compiledSource: dataStr,
            error: 'Failed to process as markdown, returning raw content' 
          },
          { status: 200 }
        );
      }
    }

    // For non-post types, return the raw data
    return NextResponse.json(
      { content: dataStr },
      { 
        status: 200,
        headers: {
          'Cache-Control': 'public, max-age=86400' // Cache for 24 hours
        }
      }
    );
  } catch (error) {
    console.error('Error fetching Arweave content:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Unknown error fetching content' },
      { status: 500 }
    );
  }
} 