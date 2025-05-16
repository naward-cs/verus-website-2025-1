export function CliDownloadsSkeleton() {
  return (
    <div className="pt-8 md:pt-16 md:mt-0">
      <h2 className="text-[22px] md:text-[32px] text-black dark:text-white tracking-tight font-medium leading-[1.1] mb-4">
        Command-Line Interface (CLI) for advanced users
      </h2>
      <div className="flex items-center gap-8 text-[14px] md:text-[16px] text-black/60 dark:text-white/60 mb-8">
        <div className="h-6 w-32 bg-gray-200 dark:bg-gray-700 animate-pulse rounded" />
        <div className="h-6 w-48 bg-gray-200 dark:bg-gray-700 animate-pulse rounded" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {[...Array(4)].map((_, i) => (
          <div 
            key={i}
            className="h-[66px] bg-gray-200 dark:bg-gray-700 animate-pulse rounded-lg"
          />
        ))}
      </div>
      <div className="h-5 w-48 bg-gray-200 dark:bg-gray-700 animate-pulse rounded mt-8" />
    </div>
  )
}