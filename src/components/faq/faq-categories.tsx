'use client'

import {useState} from 'react'

import {ChevronDown} from 'lucide-react'

import {cn} from '@/lib/utils'

type Category = {
  title: string
  questions: {
    q: string
    a: string | JSX.Element
  }[]
}

function FaqQuestion({
  question,
}: {
  question: {q: string; a: string | JSX.Element}
}) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-t border-gray-200 pt-4 first:border-t-0 first:pt-0 dark:border-gray-800 md:mt-8 md:w-[700px]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex w-full items-start justify-between gap-4 text-left"
      >
        <h3 className="text-[14px] font-medium text-gray-900 transition-colors group-hover:text-verus-blue dark:text-white dark:group-hover:text-blue-400 md:text-[16px]">
          {question.q}
        </h3>
        <ChevronDown
          className={cn(
            'mt-0.5 h-4 w-4 flex-shrink-0 text-gray-700 transition-transform dark:text-gray-400',
            isOpen && 'rotate-180'
          )}
        />
      </button>
      {isOpen && (
        <div className="mt-3 whitespace-pre-line text-[13px] leading-[1.6] text-gray-700 dark:text-gray-300 md:text-[16px]">
          {question.a}
        </div>
      )}
    </div>
  )
}

function FaqCategory({category}: {category: Category}) {
  return (
    <div className="max-w-[900px]">
      {/* Category Header */}
      <h2 className="mb-6 text-[15px] text-gray-500 dark:text-gray-400 md:text-[17px]">
        {category.title}
      </h2>

      {/* Questions */}
      <div className="space-y-4">
        {category.questions.map((item, index) => (
          <FaqQuestion key={index} question={item} />
        ))}
      </div>
    </div>
  )
}

export function FaqCategories({
  data,
  categories,
}: {
  data?: Category[]
  categories?: string[]
}) {
  if (categories) {
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

  return (
    <div className="space-y-16">
      {data?.map((category, index) => (
        <FaqCategory key={index} category={category} />
      ))}
    </div>
  )
}
