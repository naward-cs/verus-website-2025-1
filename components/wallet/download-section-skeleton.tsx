export function DownloadSectionSkeleton() {
  return (
    <>
      <h2 className="text-[22px] md:text-[32px] text-black tracking-tight font-medium leading-[1.1] mb-4">
        Download Verus Desktop
      </h2>
      <div className="flex items-center gap-8 text-[14px] md:text-[16px] text-black/60 mb-8">
        <div className="h-6 w-32 bg-gray-200 animate-pulse rounded" />
        <div className="h-6 w-48 bg-gray-200 animate-pulse rounded" />
      </div>

      <div className="space-y-4 relative">
        {/* Main Download Button */}
        <div className="h-[50px] bg-gray-200 animate-pulse rounded-lg" />
        
        {/* Other Downloads Button */}
        <div className="h-[50px] bg-gray-200 animate-pulse rounded-lg" />
      </div>

      <div className="mt-8">
        <div className="h-5 w-48 bg-gray-200 animate-pulse rounded mb-8" />
        
        <div className="mt-8 pt-8 border-t border-[#E9EFFC]">
          <h3 className="text-[16px] md:text-[18px] font-medium text-black mb-4">
            🧪 Testnet Downloads
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {[...Array(4)].map((_, i) => (
              <div 
                key={i}
                className="h-[66px] bg-gray-200 animate-pulse rounded-lg"
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}