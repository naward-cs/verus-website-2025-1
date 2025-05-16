'use client'

import {createContext, useContext, useEffect, useState} from 'react'

// Simplified ThemeContext - focused only on dark mode toggling
type Theme = 'light' | 'dark'

interface ThemeContextType {
  isDark: boolean
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({children}: {children: React.ReactNode}) {
  const [theme, setTheme] = useState<Theme>('dark') // Default to dark for initial render

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    // Check for stored preference
    const storedTheme = localStorage.getItem('theme') as Theme | null

    if (storedTheme) {
      // Use stored preference if available
      setTheme(storedTheme)
    } else {
      // Otherwise use system preference
      const prefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches
      setTheme(prefersDark ? 'dark' : 'light')
    }
  }, [])

  // Apply theme class to document when theme changes
  useEffect(() => {
    // Apply or remove .dark class
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

    // Store in localStorage
    localStorage.setItem('theme', theme)
  }, [theme])

  // Simple toggle function
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  // Expose only what's needed: isDark state and toggle function
  return (
    <ThemeContext.Provider
      value={{
        isDark: theme === 'dark',
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

// Simple hook for using the theme
export function useTheme() {
  const context = useContext(ThemeContext)

  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }

  return context
}
