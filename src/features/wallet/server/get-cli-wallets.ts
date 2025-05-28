'use server'

import type {NetWallet} from '../utils/types'

import {processAssets} from '../utils/process_assets'
import {fetchCliWallets} from './fetch-cli-wallets'

type CliWallet = NetWallet & {
  error?: string
}

export async function getCliWallets() {
  const cliWallets: CliWallet = {
    version: '0.9.4',
    date: 'January 10, 2024',
    assets: {
      Windows: {url: '#', size: 'GitHub API Error'},
      macOS: {url: '#', size: 'GitHub API Error'},
      Linux: {url: '#', size: 'GitHub API Error'},
      'Linux ARM': {url: '#', size: 'GitHub API Error'},
    },
  }
  try {
    const release = await fetchCliWallets()

    cliWallets.version = release.tag_name
    cliWallets.date = new Date(release.published_at).toLocaleDateString(
      'en-US',
      {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }
    )
    cliWallets.assets = processAssets(release.assets)

    // Add debugging log
    console.log(
      `CLI release: ${release.tag_name}, assets count: ${Object.keys(cliWallets.assets).length}`
    )
    return cliWallets
  } catch (error) {
    return {
      ...cliWallets,
      error: error instanceof Error ? error.message : 'Unknown error',
    }
  }
}
