import {BarChart3, Zap} from 'lucide-react'

export const MainSectionSkeleton = () => {
  return (
    <div className="mb-10 w-full overflow-hidden rounded-lg border border-gray-200 bg-white/90 shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] backdrop-blur-sm dark:border-gray-800 dark:bg-black/30 dark:shadow-[0_4px_40px_-12px_rgba(0,0,0,0.2)]">
      <div className="grid grid-cols-1 divide-y divide-gray-200 dark:divide-gray-800 md:grid-cols-2 md:divide-x md:divide-y-0">
        {/* Price Section */}
        <PriceSectionSkeleton />
        {/* Blockchain Section */}
        <BlockchainSectionSkeleton />
      </div>
    </div>
  )
}

function PriceSectionSkeleton() {
  return (
    <div className="relative overflow-hidden p-10 md:p-14">
      <div className="absolute right-0 top-0 z-0 h-[250px] w-[250px] -translate-y-1/3 translate-x-1/3 transform rounded-full bg-blue-500/5 blur-[60px] dark:bg-blue-500/10"></div>
      <div className="relative z-10">
        <div className="mb-2 flex items-center gap-2">
          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-500 text-white">
            <BarChart3 className="size-3" />
          </div>
          <span className="text-[14px] font-medium uppercase tracking-wide text-gray-600 dark:text-gray-300">
            Current Price
          </span>
        </div>
        <div className="h-8 w-[200px] animate-pulse rounded bg-gray-200 md:h-16" />

        <div className="mt-6 grid grid-cols-2 gap-6">
          <div>
            <div className="mb-1 text-[15px] text-gray-500 dark:text-gray-400">
              Market Cap
            </div>
            <div className="h-[34px] w-[200px] animate-pulse rounded bg-gray-200 md:h-[38px]" />
          </div>
          <div>
            <div className="mb-1 text-[15px] text-gray-500 dark:text-gray-400">
              Circulating Supply
            </div>
            <div>
              <div className="mt-1 inline-flex items-center text-[14px] text-gray-500 dark:text-gray-400">
                Max Supply:{' '}
                <div className="ml-2 h-4 w-[20px] animate-pulse rounded bg-gray-200" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function BlockchainSectionSkeleton() {
  return (
    <div className="relative overflow-hidden p-10 md:p-14">
      <div className="absolute right-0 top-0 z-0 h-[250px] w-[250px] -translate-y-1/3 translate-x-1/3 transform rounded-full bg-blue-500/5 blur-[60px] dark:bg-blue-500/10"></div>
      <div className="relative z-10">
        <div className="mb-2 flex items-center gap-2">
          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-500 text-white">
            <Zap className="h-3 w-3" />
          </div>
          <span className="text-[14px] font-medium uppercase tracking-wide text-gray-600 dark:text-gray-300">
            Block Explorer
          </span>
        </div>

        <div className="h-8 w-[200px] animate-pulse rounded bg-gray-200 md:h-16" />
        <div className="mt-2">
          <span className="text-[15px] font-medium uppercase tracking-wider text-gray-600 dark:text-gray-400 md:text-[17px]">
            Current Block Height
          </span>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-6">
          <div>
            <div className="mb-1 text-[15px] text-gray-500 dark:text-gray-400">
              Network Hash Rate
            </div>
            <div className="h-[34px] w-[200px] animate-pulse rounded bg-gray-200 md:h-[38px]" />
          </div>
          <div>
            <div className="mb-1 text-[15px] text-gray-500 dark:text-gray-400">
              Estimated Staking Amount
            </div>
            <div className="text-[18px] font-medium text-gray-900 dark:text-white">
              <div className="h-[34px] w-[200px] animate-pulse rounded bg-gray-200 md:h-[38px]" />
              <div className="mt-1 inline-flex items-center text-[14px] text-gray-500 dark:text-gray-400">
                <div className="mr-2 h-4 w-[20px] animate-pulse rounded bg-gray-200" />{' '}
                of Supply
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
