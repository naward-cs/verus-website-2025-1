import {getDesktopWallets} from '@/features/wallet/server/get-desktop-wallets'

export async function DownloadReleaseInfo() {
  const {mainnet, error} = await getDesktopWallets()
  const gitHubError = error && error.includes('GitHub')
  return (
    <div className="mb-8 flex items-center gap-8 text-[14px] text-black/60 dark:text-white/60 md:text-[16px]">
      <span>
        Version:{' '}
        <span className="font-medium text-black dark:text-white">
          {gitHubError ? 'Unavailable' : mainnet.version}
        </span>
      </span>
      <span>
        Date:{' '}
        <span className="font-medium text-black dark:text-white">
          {mainnet.date}
        </span>
      </span>
    </div>
  )
}
