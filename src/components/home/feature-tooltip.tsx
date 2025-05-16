"use client"

import { useState, useRef, useEffect } from "react"

interface FeatureTooltipProps {
  children: React.ReactNode
  description: string
}

export function FeatureTooltip({ children, description }: FeatureTooltipProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  // Check for mobile on mount and window resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    // Initial check
    checkMobile()
    
    // Add resize listener
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    if (!isMobile) return

    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isMobile])

  const handleClick = (e: React.MouseEvent) => {
    if (isMobile) {
      e.preventDefault()
      e.stopPropagation()
      setIsOpen(!isOpen)
    }
  }

  // Mobile implementation with click behavior
  if (isMobile) {
    return (
      <div 
        ref={ref} 
        onClick={handleClick}
        className="relative cursor-pointer"
      >
        {children}
        {isOpen && (
          <div className="fixed md:hidden left-4 right-4 bottom-4 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 p-4 rounded-lg shadow-lg z-50 mx-auto" style={{ maxWidth: '90vw' }}>
            <p className="text-sm">{description}</p>
          </div>
        )}
      </div>
    )
  }

  // Desktop implementation with pure hover behavior using standard event handlers
  return (
    <div 
      className="relative inline-block"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {children}
      
      {isHovering && (
        <div className="hidden md:block absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 translate-y-full bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 p-4 rounded-lg shadow-lg z-[9999] min-w-[320px] max-w-[400px]">
          <div className="w-3 h-3 bg-white dark:bg-gray-800 border-t border-l border-gray-200 dark:border-gray-700 transform rotate-45 absolute -top-1.5 left-1/2 ml-[-6px]"></div>
          <p className="text-sm">{description}</p>
        </div>
      )}
    </div>
  )
}