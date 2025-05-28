export function FaqCategories({categories}: {categories: string[]}) {
  return (
    <div className="sticky top-24">
      <h3 className="mb-6 text-[16px] font-medium text-gray-900 dark:text-white md:text-[18px]">
        Categories
      </h3>
      <ul className="space-y-3">
        {categories.map((cat, index) => (
          <li key={index}>
            <a
              href={`#${cat.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-[15px] text-gray-700 transition-colors hover:text-verus-blue dark:text-gray-300 dark:hover:text-blue-400"
            >
              {cat}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
