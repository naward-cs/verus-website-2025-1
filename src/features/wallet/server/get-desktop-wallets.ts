'use server'

import type {NetWallet} from '../utils/types'

import {processAssets} from '../utils/process_assets'
import {fetchDesktopWallets} from './fetch-desktop-wallets'

type DesktopWallets = {
  mainnet: NetWallet
  testnet?: NetWallet
  error?: string
}

export async function getDesktopWallets() {
  const desktopWallets: DesktopWallets = {
    mainnet: {
      version: '1.2.8',
      date: 'January 15, 2024',
      assets: {
        Windows: {url: '#', size: 'GitHub API Error'},
        macOS: {url: '#', size: 'GitHub API Error'},
        Linux: {url: '#', size: 'GitHub API Error'},
        'Linux ARM': {url: '#', size: 'GitHub API Error'},
      },
    },
  }
  try {
    const {mainRelease, testnetRelease} = await fetchDesktopWallets()

    if (!mainRelease) throw new Error('Failed to fetch desktop wallets')
    desktopWallets.mainnet.version = mainRelease.tag_name
    desktopWallets.mainnet.date = new Date(
      mainRelease.published_at
    ).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
    desktopWallets.mainnet.assets = processAssets(mainRelease.assets)

    if (testnetRelease) {
      desktopWallets.testnet = {
        version: testnetRelease.tag_name,
        date: new Date(testnetRelease.published_at).toLocaleDateString(
          'en-US',
          {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          }
        ),
        assets: processAssets(testnetRelease.assets),
      }
    }

    // More detailed logging for debugging
    console.log(
      `Main release: ${mainRelease.tag_name}, assets count: ${Object.keys(desktopWallets.mainnet.assets).length}`
    )
    if (testnetRelease) {
      console.log(
        `Testnet release: ${testnetRelease.tag_name}, assets count: ${Object.keys(desktopWallets.testnet!.assets).length}`
      )
    } else {
      console.log('No testnet release found to process')
    }
    return desktopWallets
  } catch (error) {
    return {
      ...desktopWallets,
      error: error instanceof Error ? error.message : 'Unknown error',
    }
  }
}
