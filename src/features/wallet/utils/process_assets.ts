import type {GithubAsset} from './types'

export function processAssets(assets: GithubAsset[]) {
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
