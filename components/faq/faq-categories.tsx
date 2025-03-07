"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

type Category = {
  title: string
  questions: {
    q: string
    a: string | JSX.Element
  }[]
}

function FaqQuestion({ question }: { question: { q: string; a: string | JSX.Element } }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-t first:border-t-0 border-gray-200 md:w-[700px] md:mt-8 pt-4 first:pt-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-start justify-between gap-4 group text-left"
      >
        <h3 className="text-[14px] md:text-[16px] font-medium text-black group-hover:text-verus-blue transition-colors">
          {question.q}
        </h3>
        <ChevronDown className={cn(
          "h-4 w-4 flex-shrink-0 transition-transform mt-0.5",
          isOpen && "rotate-180"
        )} />
      </button>
      {isOpen && (
        <div className="text-[13px] md:text-[16px] text-black/75 leading-[1.6] whitespace-pre-line mt-3">
          {question.a}
        </div>
      )}
    </div>
  )
}

function FaqCategory({ category }: { category: Category }) {
  return (
    <div className="max-w-[900px]">
      {/* Category Header */}
      <h2 className="text-[15px] md:text-[17px] text-gray-500 mb-6">
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

export function FaqCategories({ data }: { data: Category[] }) {
  return (
    <div className="space-y-16">
      {data.map((category, index) => (
        <FaqCategory
          key={index}
          category={category}
        />
      ))}
    </div>
  )
}