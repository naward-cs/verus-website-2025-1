export type GithubAsset = {
  name: string
  browser_download_url: string
  size: number
}

export type GithubRelease = {
  tag_name: string
  published_at: string
  assets: GithubAsset[]
}

export type NetWallet = {
  version: string
  date: string
  assets: Record<
    string,
    {
      url: string
      size: string
    }
  >
}
