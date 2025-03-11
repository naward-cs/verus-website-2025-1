import { DownloadSection } from "./download-section"
import { MobileDownloads } from "./mobile-downloads"
import { CliDownloads } from "./cli-downloads"
import { Suspense } from "react"
import { DownloadSectionSkeleton } from "./download-section-skeleton"
import { CliDownloadsSkeleton } from "./cli-downloads-skeleton"

export function WalletDownloads() {
  return (
    <div className="w-full max-w-[1220px] mt-8 md:mt-16">
      {/* Wallet Image */}
      <div className="relative w-full flex justify-center">
        <img
          src="/img/wallets-big.png"
          alt="Verus Wallet Interface"
          className="w-[220px] md:w-[500px] h-auto relative z-10 object-contain"
        />
      </div>

      {/* Download Sections */}
      <div className="w-full md:rounded-lg overflow-hidden relative shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_40px_-12px_rgba(0,0,0,0.3)]">
        {/* Background gradient and pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/70 to-white dark:from-blue-950/40 dark:to-gray-950 z-0"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_50%)] z-0"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-6 right-6 md:top-10 md:right-10 h-14 w-14 md:h-20 md:w-20 rounded-full bg-blue-400/5 dark:bg-blue-400/10 backdrop-blur-xl z-0"></div>
        <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-blue-500/3 dark:bg-blue-500/5 blur-[60px] z-0"></div>
        <div className="absolute bottom-20 right-20 h-24 w-24 rounded-full bg-blue-400/5 dark:bg-blue-400/10 blur-[20px] z-0"></div>
        
        {/* Content with border */}
        <div className="relative z-10 border border-blue-100/80 dark:border-blue-900/30 p-8 md:p-16">
          <div className="flex flex-col md:grid md:grid-cols-[1fr,1fr] gap-8 md:gap-0 relative">
            {/* Mobile Section - Shows first on mobile */}
            <div className="md:hidden pb-8 border-b border-blue-100/80 dark:border-blue-900/30">
              <MobileDownloads />
            </div>

            {/* Left Column - Desktop */}
            <div className="md:pr-16">
              <Suspense fallback={<DownloadSectionSkeleton />}>
                <DownloadSection />
              </Suspense>
            </div>

            {/* Right Column - Mobile & CLI */}
            <div className="space-y-0 md:pl-16 md:border-l md:border-blue-100/80 dark:md:border-blue-900/30">
              {/* Mobile Section */}
              <div className="hidden md:block pb-8 md:pb-16 border-b border-blue-100/80 dark:border-blue-900/30">
                <MobileDownloads />
              </div>

              {/* CLI Section */}
              {/* Mobile-only divider before CLI section */}
              <div className="h-px w-full bg-blue-100/80 dark:bg-blue-900/30 my-8 md:hidden" />
              
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