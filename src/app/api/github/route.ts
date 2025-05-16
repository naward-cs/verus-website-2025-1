import {NextResponse} from 'next/server'

// Configure for static export
export const dynamic = 'force-static'
export const revalidate = 43200 // 12 hours

type GithubAsset = {
  name: string
  browser_download_url: string
  size: number
}

type GithubRelease = {
  tag_name: string
  published_at: string
  assets: GithubAsset[]
}

async function getLatestReleases() {
  console.log('Fetching GitHub releases data...')

  try {
    const [mainResponse, testnetResponse] = await Promise.all([
      fetch(
        'https://api.github.com/repos/VerusCoin/Verus-Desktop/releases/latest',
        {
          headers: {
            Accept: 'application/vnd.github.v3+json',
            'User-Agent': 'Verus-Website',
          },
          next: {revalidate: 3600}, // Cache for 1 hour
        }
      ),
      fetch('https://api.github.com/repos/VerusCoin/Verus-Desktop/releases', {
        headers: {
          Accept: 'application/vnd.github.v3+json',
          'User-Agent': 'Verus-Website',
        },
        next: {revalidate: 3600}, // Cache for 1 hour
      }),
    ])

    if (!mainResponse.ok) {
      console.error(`Main release API returned status: ${mainResponse.status}`)
      throw new Error(
        `Failed to fetch main GitHub release: ${mainResponse.status}`
      )
    }

    if (!testnetResponse.ok) {
      console.error(
        `Testnet release API returned status: ${testnetResponse.status}`
      )
      throw new Error(
        `Failed to fetch testnet GitHub releases: ${testnetResponse.status}`
      )
    }

    const mainRelease: GithubRelease = await mainResponse.json()
    const allReleases: GithubRelease[] = await testnetResponse.json()

    // Find latest testnet release with more robust checking
    const testnetRelease = allReleases.find(
      (release) =>
        release.tag_name.includes('-testnet') &&
        release.assets &&
        release.assets.length > 0
    )

    if (!testnetRelease) {
      console.log('No valid testnet release found with assets')
    } else {
      console.log(`Found testnet release: ${testnetRelease.tag_name}`)
    }

    return {mainRelease, testnetRelease}
  } catch (error) {
    console.error('Error fetching from GitHub API:', error)
    throw error
  }
}

function processAssets(assets: GithubAsset[]) {
  return assets.reduce(
    (acc, asset) => {
      let os: string | null = null

      if (asset.name.includes('Windows')) os = 'Windows'
      else if (asset.name.includes('MacOS')) os = 'macOS'
      else if (asset.name.includes('Linux')) {
        if (asset.name.includes('arm64')) os = 'Linux ARM'
        else if (asset.name.includes('x86_64')) os = 'Linux'
      }

      if (os) {
        acc[os] = {
          url: asset.browser_download_url,
          size: `${Math.round(asset.size / (1024 * 1024))} MB`,
        }
      }

      return acc
    },
    {} as Record<string, {url: string; size: string}>
  )
}

export async function GET() {
  try {
    const {mainRelease, testnetRelease} = await getLatestReleases()

    const mainAssets = processAssets(mainRelease.assets)
    const testnetAssets = testnetRelease
      ? processAssets(testnetRelease.assets)
      : {}

    // More detailed logging for debugging
    console.log(
      `Main release: ${mainRelease.tag_name}, assets count: ${Object.keys(mainAssets).length}`
    )
    if (testnetRelease) {
      console.log(
        `Testnet release: ${testnetRelease.tag_name}, assets count: ${Object.keys(testnetAssets).length}`
      )
    } else {
      console.log('No testnet release found to process')
    }

    const responseData = {
      version: mainRelease.tag_name.replace('v', ''),
      date: new Date(mainRelease.published_at).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
      assets: mainAssets,
      testnet: testnetRelease
        ? {
            version: testnetRelease.tag_name.replace('v', ''),
            date: new Date(testnetRelease.published_at).toLocaleDateString(
              'en-US',
              {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              }
            ),
            assets: testnetAssets,
          }
        : null,
    }

    console.log('Successfully fetched GitHub release data')

    return NextResponse.json(responseData, {
      headers: {
        'Cache-Control': 'public, max-age=3600', // Cache for 1 hour
      },
    })
  } catch (error) {
    console.error('Error in GitHub API route:', error)

    // Return a lightweight response instead of a 500 error
    return NextResponse.json(
      {
        version: '1.2.8',
        date: 'January 15, 2024',
        assets: {
          Windows: {url: '#', size: 'GitHub API Error'},
          macOS: {url: '#', size: 'GitHub API Error'},
          Linux: {url: '#', size: 'GitHub API Error'},
          'Linux ARM': {url: '#', size: 'GitHub API Error'},
        },
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      {
        status: 200, // Return 200 even on error to avoid breaking the client
      }
    )
  }
}
