export function MediaItemSkeleton() {
  return (
    <div className="overflow-hidden rounded-lg border border-[#E9EFFC] bg-white shadow-sm transition-all duration-200 hover:border-gray-300 hover:shadow-md dark:border-gray-700 dark:bg-gray-800 dark:hover:border-gray-600">
      <div className="relative flex aspect-[16/9] w-full items-center justify-center bg-gradient-to-br from-blue-50/70 to-indigo-50/70 p-4 dark:from-blue-950/50 dark:to-indigo-950/30">
        <div className="h-8 w-32 animate-pulse rounded bg-gray-200 dark:bg-gray-700" />
      </div>
      <div className="p-4">
        <div className="mb-2 h-5 w-3/4 rounded bg-gray-200 dark:bg-gray-700"></div>
        <div className="mb-1 h-4 w-full rounded bg-gray-200 dark:bg-gray-700"></div>
        <div className="mb-3 h-4 w-2/3 rounded bg-gray-200 dark:bg-gray-700"></div>
        <div className="flex items-center justify-between">
          <div className="h-3 w-1/3 rounded bg-gray-200 dark:bg-gray-700"></div>
          <div className="h-3 w-1/4 rounded bg-gray-200 dark:bg-gray-700"></div>
        </div>
      </div>
    </div>
  )
}
