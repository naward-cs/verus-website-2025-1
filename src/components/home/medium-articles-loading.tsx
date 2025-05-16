export default function MediumArticlesLoading() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="animate-pulse overflow-hidden rounded-lg border border-[#E9EFFC] bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800"
        >
          <div className="aspect-[16/9] bg-gray-200 dark:bg-gray-700" />
          <div className="p-6">
            <div className="mb-2 h-6 rounded bg-gray-200 dark:bg-gray-600" />
            <div className="mb-2 h-4 rounded bg-gray-200 dark:bg-gray-600" />
            <div className="mb-4 h-4 w-3/4 rounded bg-gray-200 dark:bg-gray-600" />
            <div className="h-3 w-1/4 rounded bg-gray-200 dark:bg-gray-600" />
          </div>
        </div>
      ))}
    </div>
  )
}
