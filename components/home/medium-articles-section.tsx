import { Suspense } from 'react'
import { FaMedium } from "react-icons/fa"
import MediumFeed from '@/components/MediumFeed'
import MediumArticlesLoading from './medium-articles-loading'

export function MediumArticlesSection() {
  return (
    <div className="-mx-4 md:mx-0 w-screen md:max-w-[1220px] mt-16 md:mt-24">
      <div className="px-4 md:px-0 mb-8 flex items-center justify-between">
        <h2 className="text-[22px] md:text-[40px] text-black tracking-tight font-medium leading-[1.1]">
          Latest from the blog.
        </h2>
        <a 
          href="https://medium.com/veruscoin"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-[14px] md:text-[15px] text-verus-blue hover:underline"
        >
          <FaMedium className="h-5 w-5 text-black" />
          Follow Verus on Medium
        </a>
      </div>

      <div className="px-4 md:px-0">
        <Suspense fallback={<MediumArticlesLoading />}>
          <MediumFeed />
        </Suspense>
      </div>
    </div>
  )
}