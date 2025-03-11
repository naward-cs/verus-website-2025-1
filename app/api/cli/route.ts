import { NextResponse } from 'next/server';

// Configure for static export
export const dynamic = 'force-static';
export const revalidate = 43200; // 12 hours

type GithubAsset = {
  name: string;
  browser_download_url: string;
  size: number;
}

type GithubRelease = {
  tag_name: string;
  published_at: string;
  assets: GithubAsset[];
}

function processAssets(assets: GithubAsset[]) {
  return assets.reduce((acc, asset) => {
    let os: string | null = null;
    
    if (asset.name.includes('Windows')) os = 'Windows';
    else if (asset.name.includes('MacOS')) os = 'macOS';
    else if (asset.name.includes('Linux')) {
      if (asset.name.includes('arm64') || asset.name.includes('aarch64')) os = 'Linux ARM';
      else if (asset.name.includes('x86_64')) os = 'Linux';
    }

    if (os) {
      acc[os] = {
        url: asset.browser_download_url,
        size: `${Math.round(asset.size / (1024 * 1024))} MB`
      };
    }

    return acc;
  }, {} as Record<string, { url: string, size: string }>);
}

export async function GET() {
  try {
    console.log('Fetching CLI release data from GitHub...');
    
    const response = await fetch(
      'https://api.github.com/repos/VerusCoin/VerusCoin/releases/latest',
      {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
          'User-Agent': 'Verus-Website'
        },
        next: { revalidate: 3600 } // Cache for 1 hour
      }
    );

    if (!response.ok) {
      console.error(`GitHub CLI API returned status: ${response.status}`);
      throw new Error(`Failed to fetch GitHub CLI release: ${response.status}`);
    }

    const release: GithubRelease = await response.json();
    const assets = processAssets(release.assets);
    
    // Add debugging log
    console.log(`CLI release: ${release.tag_name}, assets count: ${Object.keys(assets).length}`);

    const responseData = {
      version: release.tag_name.replace('v', ''),
      date: new Date(release.published_at).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }),
      assets
    };
    
    console.log('Successfully fetched CLI release data');
    
    return NextResponse.json(responseData, {
      headers: {
        'Cache-Control': 'public, max-age=3600', // Cache for 1 hour
      }
    });
  } catch (error) {
    console.error('Error in CLI API route:', error);
    
    // Return a lightweight response instead of a 500 error
    return NextResponse.json({
      version: '0.9.4',
      date: 'January 10, 2024',
      assets: {
        'Windows': { url: '#', size: 'GitHub API Error' },
        'macOS': { url: '#', size: 'GitHub API Error' },
        'Linux': { url: '#', size: 'GitHub API Error' },
        'Linux ARM': { url: '#', size: 'GitHub API Error' }
      },
      error: error instanceof Error ? error.message : 'Unknown error',
    }, { 
      status: 200 // Return 200 even on error to avoid breaking the client
    });
  }
}