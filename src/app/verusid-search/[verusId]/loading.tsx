import {Skeleton} from '@/components/ui/skeleton'

export default function Loading() {
  return (
    <>
      <div className="mb-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
        <div className="w-full flex-1 space-y-2">
          <Skeleton className="h-5 w-12 rounded-lg bg-gray-200 shadow-sm backdrop-blur-sm" />
          <Skeleton className="h-12 w-full rounded-lg bg-gray-200 shadow-sm backdrop-blur-sm" />
          <Skeleton className="h-3 w-48 rounded-lg bg-gray-200 shadow-sm backdrop-blur-sm" />
        </div>

        <Skeleton className="mt-1 h-11 w-full bg-gray-200 shadow-sm backdrop-blur-sm sm:w-32" />
      </div>
      <div className="flex flex-col items-center justify-center rounded-lg border border-blue-100/80 bg-white/80 py-12 shadow-sm backdrop-blur-sm dark:border-blue-900/30 dark:bg-gray-900/50">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
        <p className="mt-4 text-gray-600 dark:text-gray-300">
          Searching for verusID...
        </p>
      </div>
    </>
  )
}
