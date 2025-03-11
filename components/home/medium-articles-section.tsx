"use client"

import React from 'react'
import { FaMedium } from "react-icons/fa"
import MediumFeed from '../MediumFeed'

// Error boundary component for MediumFeed
class MediumErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error: Error) {
    console.error("Medium feed error:", error)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="text-center py-12">
          <p className="text-gray-500 dark:text-gray-400">
            Unable to load articles at this time. Please check back later.
          </p>
        </div>
      )
    }

    return this.props.children
  }
}

export function MediumArticlesSection() {
  return (
    <section className="pt-16 md:pt-20 w-full">
      <div className="max-w-[1220px] mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-gray-900 dark:text-white mb-3">
            Latest Articles
          </h2>
          <p className="text-gray-600 dark:text-gray-400 tracking-tight max-w-2xl mx-auto">
            Stay up to date with the latest news and developments from the Verus community.
          </p>
          <a 
            href="https://medium.com/veruscoin"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-3 text-verus-blue dark:text-blue-400 hover:underline"
          >
            <FaMedium className="h-4 w-4" />
            Follow Verus on Medium
          </a>
        </div>
        <MediumErrorBoundary>
          <MediumFeed />
        </MediumErrorBoundary>
      </div>
    </section>
  )
}