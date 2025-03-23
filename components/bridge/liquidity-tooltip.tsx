"use client"

import { useState, useRef, useEffect } from "react"
import { HelpCircle } from "lucide-react"

interface LiquidityTooltipProps {
  content: string
}

export function LiquidityTooltip({ content }: LiquidityTooltipProps) {
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
      <HelpCircle className="h-3 w-3 md:h-4 md:w-4 text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400 transition-colors cursor-pointer" />
      
      {isOpen && (
        <>
          {/* Mobile tooltip - fixed at bottom */}
          <div className="md:hidden fixed left-4 right-4 bottom-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-gray-700 p-4 rounded-lg shadow-lg z-50 mx-auto" style={{ maxWidth: '90vw' }}>
            <p className="text-sm">{content}</p>
          </div>

          {/* Desktop tooltip - positioned relative to icon */}
          <div className="hidden md:block absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-gray-700 px-4 py-3 rounded-md shadow-md z-50 min-w-[180px] w-auto">
            <div className="w-3 h-3 bg-white dark:bg-gray-800 border-r border-b border-gray-200 dark:border-gray-700 transform rotate-45 absolute -bottom-1.5 left-1/2 ml-[-6px]"></div>
            <p className="text-sm whitespace-normal text-center">{content}</p>
          </div>
        </>
      )}
    </div>
  )
}