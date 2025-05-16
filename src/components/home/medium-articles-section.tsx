'use client'

import React from 'react'

import {FaMedium} from 'react-icons/fa'

import MediumFeed from '../MediumFeed'

// Error boundary component for MediumFeed
class MediumErrorBoundary extends React.Component<
  {children: React.ReactNode},
  {hasError: boolean}
> {
  constructor(props: {children: React.ReactNode}) {
    super(props)
    this.state = {hasError: false}
  }

  static getDerivedStateFromError() {
    return {hasError: true}
  }

  componentDidCatch(error: Error) {
    console.error('Medium feed error:', error)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="py-12 text-center">
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
    <section className="w-full pt-16 md:pt-20">
      <div className="mx-auto max-w-[1220px] px-4">
        <div className="mb-10 text-center">
          <h2 className="mb-3 text-2xl font-medium tracking-tight text-gray-900 dark:text-white md:text-3xl">
            Latest Articles
          </h2>
          <p className="mx-auto max-w-2xl tracking-tight text-gray-600 dark:text-gray-400">
            Stay up to date with the latest news and developments from the Verus
            community.
          </p>
          <a
            href="https://medium.com/veruscoin"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-2 text-verus-blue hover:underline dark:text-blue-400"
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
