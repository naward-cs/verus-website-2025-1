"use client"

import { useEffect, useRef } from 'react'
import { ExternalLink } from 'lucide-react'
import { milestones } from './timeline-data'

export function TimelineClient() {
  const timelineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Add animate-in class to first two items on mount
    const timelineItems = document.querySelectorAll('.timeline-item')
    timelineItems.forEach((item, index) => {
      if (index < 2) {
        item.classList.add('animate-in')
      }
    })

    // Set up intersection observer for remaining items
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
          }
        })
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
      }
    )

    // Only observe items after the first two
    timelineItems.forEach((item, index) => {
      if (index >= 2) {
        observer.observe(item)
      }
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={timelineRef} className="relative px-4 md:px-0">
      {/* Timeline line */}
      <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-verus-blue/50 via-verus-blue/25 to-transparent" />

      {/* Timeline items */}
      <div className="relative space-y-16 md:space-y-16">
        {milestones.map((milestone, index) => (
          <div 
            key={index}
            className={`timeline-item opacity-0 transform translate-y-4 transition-all duration-300 ease-out
              ${index < 2 ? 'initial-item' : ''}
            `}
          >
            <div className={`
              relative flex flex-col md:w-1/2 
              ${index % 2 === 0 ? 'md:ml-auto md:pl-16' : 'md:mr-auto md:pr-16'}
            `}>
              {/* Dot - Only show on desktop */}
              <div 
                className="hidden md:block absolute w-[13px] h-[13px] rounded-full bg-verus-blue"
                style={{
                  top: '50%',
                  transform: 'translateY(-50%)',
                  [index % 2 === 0 ? 'left' : 'right']: '-6.5px'
                }}
              />

              {/* Content */}
              <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 md:p-8 shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] hover:shadow-lg transition-shadow duration-300">
                <div className="text-[12px] md:text-[14px] text-verus-blue font-medium tracking-wider mb-2">
                  {milestone.date}
                </div>
                <h3 className="text-[18px] md:text-[22px] font-medium text-black mb-4">
                  {milestone.title}
                </h3>
                <p className="text-[14px] md:text-[15px] text-black/75 tracking-tight leading-[1.8]">
                  {milestone.description}
                </p>
                {milestone.link && (
                  <a
                    href={milestone.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 text-[14px] md:text-[15px] text-verus-blue hover:underline group"
                  >
                    {milestone.link.text}
                    <ExternalLink className="h-4 w-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}