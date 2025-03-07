import { NextResponse } from 'next/server';

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
    const response = await fetch(
      'https://api.github.com/repos/VerusCoin/VerusCoin/releases/latest',
      {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
          'User-Agent': 'Verus-Website'
        }
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch GitHub release');
    }

    const release: GithubRelease = await response.json();
    const assets = processAssets(release.assets);

    return NextResponse.json({
      version: release.tag_name.replace('v', ''),
      date: new Date(release.published_at).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }),
      assets
    });
  } catch (error) {
    console.error('Error fetching CLI release:', error);
    return NextResponse.json({ error: 'Failed to fetch release info' }, { status: 500 });
  }
}