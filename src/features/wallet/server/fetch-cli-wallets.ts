import 'server-only'

import type {GithubRelease} from '../utils/types'

import {env} from '@/configs/env'

export const fetchCliWallets = async () => {
  try {
    const response = await fetch(
      `${env.VERUS_GITHUB_API}/VerusCoin/releases/latest`,
      {
        headers: {
          Accept: 'application/vnd.github.v3+json',
          'User-Agent': 'Verus-Website',
        },
        next: {revalidate: 3600}, // Cache for 1 hour
      }
    )
    if (!response.ok) {
      throw new Error(`Failed to fetch GitHub cli release: ${response.status}`)
    }
    const releases: GithubRelease = await response.json()

    return releases
  } catch (error) {
    console.error('Error fetching from GitHub desktop API:', error)
    throw error
  }
}
