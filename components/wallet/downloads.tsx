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
      <div className="w-full md:rounded-lg border-x-0 md:border-2 border-y-2 border-[#E9EFFC] bg-gradient-to-b from-[#E9EFFC] to-white p-8 md:p-16 shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)]">
        <div className="flex flex-col md:grid md:grid-cols-[1fr,1fr] gap-8 md:gap-0 relative">
          {/* Mobile Section - Shows first on mobile */}
          <div className="md:hidden pb-8 border-b-2 border-[#E9EFFC]">
            <MobileDownloads />
          </div>

          {/* Left Column - Desktop */}
          <div className="md:pr-16">
            <Suspense fallback={<DownloadSectionSkeleton />}>
              <DownloadSection />
            </Suspense>
          </div>

          {/* Right Column - Mobile & CLI */}
          <div className="space-y-0 md:pl-16 md:border-l-2 md:border-[#E9EFFC]">
            {/* Mobile Section */}
            <div className="hidden md:block pb-8 md:pb-16 border-b-2 border-[#E9EFFC]">
              <MobileDownloads />
            </div>

            {/* CLI Section */}
            {/* Mobile-only divider before CLI section */}
            <div className="h-px w-full bg-[#E9EFFC] my-8 md:hidden" />
            
            <Suspense fallback={<CliDownloadsSkeleton />}>
              <CliDownloads />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  )
}