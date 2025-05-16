export function DownloadSectionSkeleton() {
  return (
    <>
      <h2 className="mb-4 text-[22px] font-medium leading-[1.1] tracking-tight text-black dark:text-white md:text-[32px]">
        Download Verus Desktop
      </h2>
      <div className="mb-8 flex items-center gap-8 text-[14px] text-black/60 dark:text-white/60 md:text-[16px]">
        <div className="h-6 w-32 animate-pulse rounded bg-gray-200 dark:bg-gray-700" />
        <div className="h-6 w-48 animate-pulse rounded bg-gray-200 dark:bg-gray-700" />
      </div>

      <div className="relative space-y-4">
        {/* Main Download Button */}
        <div className="h-[50px] animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700" />

        {/* Other Downloads Button */}
        <div className="h-[50px] animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700" />
      </div>

      <div className="mt-8">
        <div className="mb-8 h-5 w-48 animate-pulse rounded bg-gray-200 dark:bg-gray-700" />

        <div className="mt-8 border-t border-[#E9EFFC] pt-8 dark:border-gray-700">
          <h3 className="mb-4 text-[16px] font-medium text-black dark:text-white md:text-[18px]">
            🧪 Testnet Downloads
          </h3>
          <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="h-[66px] animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700"
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
