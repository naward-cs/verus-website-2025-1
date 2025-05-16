import Image from 'next/image';
import Link from 'next/link';



import {getMediumArticles} from '@/features/home/server/get-articles'
import {Calendar, ExternalLink} from 'lucide-react'





export default async function MediumFeed() {
  const articles = await getMediumArticles()

  if (!articles.length) {
    return (
      <div className="py-12 text-center">
        <p className="text-gray-500 dark:text-gray-400">
          No articles available at this moment. Please check back later.
        </p>
      </div>
    )
  }

  return (
    <div className="mx-auto grid max-w-[1220px] grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
      {articles.slice(0, 6).map((article, index) => (
        <Link
          key={article.link + index}
          href={article.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group overflow-hidden rounded-lg border border-[#E9EFFC] bg-white shadow-sm transition-all duration-200 hover:border-gray-300 hover:shadow-md dark:border-gray-700 dark:bg-gray-800 dark:hover:border-gray-600"
        >
          {article.thumbnail && (
            <div className="relative aspect-[16/9] w-full bg-gray-100 dark:bg-gray-700">
              <Image
                src={article.thumbnail}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          )}
          <div className="p-4">
            <h3 className="mb-2 line-clamp-2 text-base font-medium text-gray-900 transition-colors group-hover:text-verus-blue dark:text-white dark:group-hover:text-blue-400">
              {article.title}
            </h3>
            <p className="mb-3 line-clamp-2 text-sm text-gray-600 dark:text-gray-300">
              {article.description}
            </p>
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                <Calendar className="h-3 w-3" />
                <time dateTime={new Date(article.pubDate).toISOString()}>
                  {new Date(article.pubDate).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </time>
              </div>
              <span className="flex items-center gap-1 text-verus-blue dark:text-blue-400">
                Read more
                <ExternalLink className="h-3 w-3" />
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}