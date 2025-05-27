import 'server-only'

import type {GithubRelease} from '../utils/types'

import {env} from '@/configs/env'

export const fetchDesktopWallets = async () => {
  try {
    const releases = await fetch(
      `${env.VERUS_GITHUB_API}/Verus-Desktop/releases`,
      {
        headers: {
          Accept: 'application/vnd.github.v3+json',
          'User-Agent': 'Verus-Website',
        },
        next: {revalidate: 3600}, // Cache for 1 hour
      }
    )
    if (!releases.ok) {
      throw new Error(
        `Failed to fetch GitHub desktop release: ${releases.status}`
      )
    }
    const allReleases: GithubRelease[] = await releases.json()
    const mainRelease = allReleases.find(
      (release) =>
        !release.tag_name.includes('-testnet') && release.assets.length > 0
    )

    if (!mainRelease) {
      console.log('No valid mainnet release found with assets')
    } else {
      console.log(`Found mainnet release: ${mainRelease.tag_name}`)
    }

    const testnetRelease = allReleases.find(
      (release) =>
        release.tag_name.includes('-testnet') && release.assets.length > 0
    )

    if (!testnetRelease) {
      console.log('No valid testnet release found with assets')
    } else {
      console.log(`Found testnet release: ${testnetRelease.tag_name}`)
    }
    return {mainRelease, testnetRelease}
  } catch (error) {
    console.error('Error fetching from GitHub desktop API:', error)
    throw error
  }
}
