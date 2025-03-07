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

async function getLatestReleases() {
  const [mainResponse, testnetResponse] = await Promise.all([
    fetch(
      'https://api.github.com/repos/VerusCoin/Verus-Desktop/releases/latest',
      {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
          'User-Agent': 'Verus-Website'
        }
      }
    ),
    fetch(
      'https://api.github.com/repos/VerusCoin/Verus-Desktop/releases',
      {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
          'User-Agent': 'Verus-Website'
        }
      }
    )
  ]);

  if (!mainResponse.ok || !testnetResponse.ok) {
    throw new Error('Failed to fetch GitHub releases');
  }

  const mainRelease: GithubRelease = await mainResponse.json();
  const allReleases: GithubRelease[] = await testnetResponse.json();
  
  // Find latest testnet release
  const testnetRelease = allReleases.find(release => 
    release.tag_name.includes('-testnet')
  );

  return { mainRelease, testnetRelease };
}

function processAssets(assets: GithubAsset[]) {
  return assets.reduce((acc, asset) => {
    let os: string | null = null;
    
    if (asset.name.includes('Windows')) os = 'Windows';
    else if (asset.name.includes('MacOS')) os = 'macOS';
    else if (asset.name.includes('Linux')) {
      if (asset.name.includes('arm64')) os = 'Linux ARM';
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
    const { mainRelease, testnetRelease } = await getLatestReleases();
    
    const mainAssets = processAssets(mainRelease.assets);
    const testnetAssets = testnetRelease ? processAssets(testnetRelease.assets) : {};

    return NextResponse.json({
      version: mainRelease.tag_name.replace('v', ''),
      date: new Date(mainRelease.published_at).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }),
      assets: mainAssets,
      testnet: testnetRelease ? {
        version: testnetRelease.tag_name.replace('v', ''),
        date: new Date(testnetRelease.published_at).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }),
        assets: testnetAssets
      } : null
    });
  } catch (error) {
    console.error('Error fetching GitHub release:', error);
    return NextResponse.json({ error: 'Failed to fetch release info' }, { status: 500 });
  }
}