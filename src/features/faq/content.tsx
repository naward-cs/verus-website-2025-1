import {faqData} from '@/data/faq'

import {FaqCategories} from './faq-categories'

// Server component that provides the data
export function FaqContent() {
  return (
    <div className="grid grid-cols-1 gap-x-12 gap-y-10 px-4 md:grid-cols-3 md:px-0">
      <div className="col-span-1">
        <FaqCategories categories={faqData.map((cat) => cat.title)} />
      </div>

      <div className="col-span-1 md:col-span-2">
        {faqData.map((category, idx) => (
          <div
            key={idx}
            className="mb-16 scroll-m-24"
            id={category.title.toLowerCase().replace(/\s+/g, '-')}
          >
            <h2 className="mb-8 text-[20px] font-medium text-gray-900 dark:text-white md:text-[26px]">
              {category.title}
            </h2>

            <div className="space-y-8 md:space-y-10">
              {category.questions.map((item, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-gray-200/60 bg-white/80 p-6 shadow-sm backdrop-blur-sm dark:border-gray-800/30 dark:bg-gray-900/30"
                >
                  <h3 className="mb-3 text-[16px] font-medium text-gray-900 dark:text-white md:text-[18px]">
                    {item.q}
                  </h3>
                  <p className="text-[14px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
