'use client'

import {useEffect, useState} from 'react'

import {Moon, RotateCwIcon, SunMoon} from 'lucide-react'
import {useTheme} from 'next-themes'

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const {theme, setTheme} = useTheme()
  const isDark = theme === 'dark'
  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="ml-2 p-2 text-verus-blue opacity-50 transition-opacity hover:opacity-100 focus:outline-none dark:text-white"
      aria-label={`Switch to ${!isDark ? 'light' : 'dark'} mode`}
      suppressHydrationWarning
    >
      {!mounted ? (
        <RotateCwIcon className="size-5 animate-spin" />
      ) : isDark ? (
        <SunMoon className="size-5" />
      ) : (
        <Moon className="size-5" />
      )}
    </button>
  )
}
