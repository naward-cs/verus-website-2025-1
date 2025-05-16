'use client'

import {useEffect, useRef, useState} from 'react'

interface FeatureTooltipProps {
  children: React.ReactNode
  description: string
}

export function FeatureTooltip({children, description}: FeatureTooltipProps) {
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
      <div ref={ref} onClick={handleClick} className="relative cursor-pointer">
        {children}
        {isOpen && (
          <div
            className="fixed bottom-4 left-4 right-4 z-50 mx-auto rounded-lg border border-gray-200 bg-white p-4 text-gray-600 shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 md:hidden"
            style={{maxWidth: '90vw'}}
          >
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
        <div className="absolute bottom-[-8px] left-1/2 z-[9999] hidden min-w-[320px] max-w-[400px] -translate-x-1/2 translate-y-full transform rounded-lg border border-gray-200 bg-white p-4 text-gray-600 shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 md:block">
          <div className="absolute -top-1.5 left-1/2 ml-[-6px] h-3 w-3 rotate-45 transform border-l border-t border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800"></div>
          <p className="text-sm">{description}</p>
        </div>
      )}
    </div>
  )
}
