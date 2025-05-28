import Link from 'next/link'

export function TabBar({activeTab}: {activeTab: string}) {
  return (
    <div className="border-b border-gray-200 dark:border-gray-800">
      <div className="scrollbar-hide flex space-x-1 overflow-x-auto md:space-x-2">
        <Link
          href={`/media/press-kit`}
          className={`whitespace-nowrap border-b-2 px-5 py-3 text-[14px] font-medium transition-colors md:px-8 md:text-[16px] ${
            activeTab === 'press-kit'
              ? 'border-verus-blue text-verus-blue dark:border-blue-400 dark:text-blue-400'
              : 'border-transparent text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300'
          }`}
        >
          Press Kit
        </Link>

        <Link
          href={`/media/media-coverage`}
          className={`whitespace-nowrap border-b-2 px-5 py-3 text-[14px] font-medium transition-colors md:px-8 md:text-[16px] ${
            activeTab === 'media-coverage'
              ? 'border-verus-blue text-verus-blue dark:border-blue-400 dark:text-blue-400'
              : 'border-transparent text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300'
          }`}
        >
          Media Coverage
        </Link>

        <Link
          href={'/media/brand-assets'}
          className={`whitespace-nowrap border-b-2 px-5 py-3 text-[14px] font-medium transition-colors md:px-8 md:text-[16px] ${
            activeTab === 'brand-assets'
              ? 'border-verus-blue text-verus-blue dark:border-blue-400 dark:text-blue-400'
              : 'border-transparent text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300'
          }`}
        >
          Brand Assets
        </Link>
      </div>
    </div>
  )
}
