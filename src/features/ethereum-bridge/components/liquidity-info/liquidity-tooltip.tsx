'use client'

import {useEffect, useRef, useState} from 'react'

import {HelpCircle} from 'lucide-react'

interface LiquidityTooltipProps {
  content: string
}

export function LiquidityTooltip({content}: LiquidityTooltipProps) {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  // Handle clicks outside to close tooltip
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsOpen(!isOpen)
  }

  return (
    <div
      ref={ref}
      onClick={handleClick}
      className="relative inline-flex cursor-pointer"
    >
      <HelpCircle className="h-3 w-3 cursor-pointer text-gray-400 transition-colors hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400 md:h-4 md:w-4" />

      {isOpen && (
        <>
          {/* Mobile tooltip - fixed at bottom */}
          <div
            className="fixed bottom-4 left-4 right-4 z-50 mx-auto rounded-lg border border-gray-200 bg-white p-4 text-gray-900 shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 md:hidden"
            style={{maxWidth: '90vw'}}
          >
            <p className="text-sm">{content}</p>
          </div>

          {/* Desktop tooltip - positioned relative to icon */}
          <div className="absolute bottom-full left-1/2 z-50 hidden w-auto min-w-[180px] -translate-x-1/2 -translate-y-2 transform rounded-md border border-gray-200 bg-white px-4 py-3 text-gray-900 shadow-md dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 md:block">
            <div className="absolute -bottom-1.5 left-1/2 ml-[-6px] h-3 w-3 rotate-45 transform border-b border-r border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800"></div>
            <p className="whitespace-normal text-center text-sm">{content}</p>
          </div>
        </>
      )}
    </div>
  )
}
