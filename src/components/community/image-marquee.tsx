// Scrolling image carousel for community page
"use client"

import { useEffect, useState } from "react"

// Define image paths for both rows
const row1Images = Array.from({ length: 10 }, (_, i) => `/img/community/${i + 1}.webp`)
const row2Images = Array.from({ length: 9 }, (_, i) => `/img/community/${i + 11}.webp`)

export function ImageMarquee() {
  // State to track if component has mounted (avoids hydration issues)
  const [isMounted, setIsMounted] = useState(false)
  
  useEffect(() => {
    setIsMounted(true)
  }, [])
  
  // Only render after component has mounted on client
  if (!isMounted) {
    return null
  }
  
  return (
    <div className="w-full overflow-hidden mb-16">
      <div className="relative">
        <h2 className="text-[22px] md:text-[32px] text-gray-800 dark:text-white tracking-tight font-medium text-center leading-[1.2] mb-8">
          The growing Verus community.
        </h2>
        
        {/* Full-width container for the marquee */}
        <div className="w-screen relative left-[50%] right-[50%] mx-[-50vw]">
          {/* Row 1: Left to Right */}
          <div className="relative mb-4 overflow-hidden">
            <div className="flex animate-marquee-ltr">
              {/* First set of images for complete coverage */}
              {[...row1Images, ...row1Images, ...row1Images, ...row1Images].map((src, index) => (
                <div 
                  key={`row1-${index}`} 
                  className="flex-shrink-0 h-[120px] md:h-[180px] w-[180px] md:w-[270px] mx-2 md:mx-4 rounded-xl overflow-hidden"
                >
                  <img 
                    src={src} 
                    alt={`Community Image ${index % 10 + 1}`}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Row 2: Right to Left */}
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee-rtl">
              {/* First set of images for complete coverage */}
              {[...row2Images, ...row2Images, ...row2Images, ...row2Images].map((src, index) => (
                <div 
                  key={`row2-${index}`} 
                  className="flex-shrink-0 h-[120px] md:h-[180px] w-[180px] md:w-[270px] mx-2 md:mx-4 rounded-xl overflow-hidden"
                >
                  <img 
                    src={src} 
                    alt={`Community Image ${index % 9 + 11}`}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 