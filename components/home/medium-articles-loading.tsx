export default function MediumArticlesLoading() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="bg-white dark:bg-gray-800 border border-[#E9EFFC] dark:border-gray-700 rounded-lg overflow-hidden animate-pulse shadow-sm">
          <div className="aspect-[16/9] bg-gray-200 dark:bg-gray-700" />
          <div className="p-6">
            <div className="h-6 bg-gray-200 dark:bg-gray-600 rounded mb-2" />
            <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded mb-2" />
            <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded mb-4 w-3/4" />
            <div className="h-3 bg-gray-200 dark:bg-gray-600 rounded w-1/4" />
          </div>
        </div>
      ))}
    </div>
  );
}