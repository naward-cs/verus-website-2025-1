import {Suspense} from 'react'

import {CliDownloads} from './cli-downloads'
import {CliDownloadsSkeleton} from './cli-downloads-skeleton'
import {DownloadSection} from './download-section'
import {DownloadSectionSkeleton} from './download-section-skeleton'
import {MobileDownloads} from './mobile-downloads'

export function WalletDownloads() {
  return (
    <div className="mt-8 w-full max-w-[1220px] md:mt-16">
      {/* Wallet Image */}
      <div className="relative flex w-full justify-center">
        <img
          src="/img/wallets-big.png"
          alt="Verus Wallet Interface"
          className="relative z-10 h-auto w-[220px] object-contain md:w-[500px]"
        />
      </div>

      {/* Download Sections */}
      <div className="relative w-full overflow-hidden shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_40px_-12px_rgba(0,0,0,0.3)] md:rounded-lg">
        {/* Background gradient and pattern */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-50/70 to-white dark:from-blue-950/40 dark:to-gray-950"></div>
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_50%)]"></div>

        {/* Decorative elements */}
        <div className="absolute right-6 top-6 z-0 h-14 w-14 rounded-full bg-blue-400/5 backdrop-blur-xl dark:bg-blue-400/10 md:right-10 md:top-10 md:h-20 md:w-20"></div>
        <div className="bg-blue-500/3 absolute -bottom-10 -left-10 z-0 h-40 w-40 rounded-full blur-[60px] dark:bg-blue-500/5"></div>
        <div className="absolute bottom-20 right-20 z-0 h-24 w-24 rounded-full bg-blue-400/5 blur-[30px] dark:bg-blue-400/10"></div>

        {/* Content with border */}
        <div className="relative z-10 border border-blue-100/80 p-8 dark:border-blue-900/30 md:p-16">
          <div className="relative flex flex-col gap-8 md:grid md:grid-cols-[1fr,1fr] md:gap-0">
            {/* Mobile Section - Shows first on mobile */}
            <div className="border-b border-blue-100/80 pb-8 dark:border-blue-900/30 md:hidden">
              <MobileDownloads />
            </div>

            {/* Left Column - Desktop */}
            <div className="md:pr-16">
              <Suspense fallback={<DownloadSectionSkeleton />}>
                <DownloadSection />
              </Suspense>
            </div>

            {/* Right Column - Mobile & CLI */}
            <div className="space-y-0 md:border-l md:border-blue-100/80 md:pl-16 dark:md:border-blue-900/30">
              {/* Mobile Section */}
              <div className="hidden border-b border-blue-100/80 pb-8 dark:border-blue-900/30 md:block md:pb-16">
                <MobileDownloads />
              </div>

              {/* CLI Section */}
              {/* Mobile-only divider before CLI section */}
              <div className="my-8 h-px w-full bg-blue-100/80 dark:bg-blue-900/30 md:hidden" />

              <Suspense fallback={<CliDownloadsSkeleton />}>
                <CliDownloads />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
