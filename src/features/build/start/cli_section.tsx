import Image from 'next/image'
import Link from 'next/link'

import {getCliWallets} from '@/features/wallet/server/get-cli-wallets'

export async function CliSection() {
  const {version, assets} = await getCliWallets()

  return (
    <div className="relative overflow-hidden p-10 md:p-14">
      <div className="absolute right-0 top-0 z-0 h-[250px] w-[250px] -translate-y-1/3 translate-x-1/3 transform rounded-full bg-blue-500/5 blur-[60px] dark:bg-blue-500/10"></div>
      <div className="relative z-10">
        <h3 className="mb-4 bg-gradient-to-br from-blue-600 to-indigo-500 bg-clip-text text-[24px] font-medium text-gray-800 text-transparent dark:from-blue-400 dark:to-indigo-300 dark:text-white md:text-[30px]">
          Download CLI Wallet
        </h3>
        <p className="mb-6 max-w-[500px] text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[17px]">
          Get started with the Verus CLI wallet {version}. Download for your
          operating system.
        </p>

        <div className="space-y-2">
          {Object.entries(assets).map(([os, info]) => (
            <Link
              key={os}
              href={info.url}
              target="_blank"
              className={`flex items-center gap-2 rounded-lg border border-[#E9EFFC] p-3 transition-colors hover:bg-[#E9EFFC]/5 dark:border-gray-700 dark:hover:bg-white/5 ${!info.url || info.url === '#' ? 'pointer-events-none opacity-50' : ''}`}
            >
              <Image
                src={`/img/${os.toLowerCase().includes('windows') ? 'windows' : os.toLowerCase().includes('mac') ? 'apple' : 'linux'}-black.svg`}
                alt={os}
                width={20}
                height={20}
                className="size-5 dark:invert"
              />
              <div className="flex flex-col">
                <span className="text-[14px] text-black/75 dark:text-white/75">
                  {os}
                </span>
                <span className="text-[12px] text-black/40 dark:text-white/40">
                  {info.size}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
