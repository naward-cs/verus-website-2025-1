import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, Calendar } from 'lucide-react';

type Article = {
  title: string;
  link: string;
  pubDate: string;
  content: string;
  thumbnail: string;
  description: string;
};

async function getMediumArticles() {
  try {
    const response = await fetch('http://localhost:3000/api/medium', {
      next: { revalidate: 3600 } // Revalidate every hour
    });
    const data = await response.json();
    return data.articles;
  } catch (error) {
    console.error('Error fetching Medium articles:', error);
    return [];
  }
}

export default async function MediumFeed() {
  const articles = await getMediumArticles();

  if (!articles.length) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 dark:text-gray-400">No articles found</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {articles.slice(0, 6).map((article: Article, index: number) => (
        <Link
          key={article.link + index}
          href={article.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-white dark:bg-gray-800 border border-[#E9EFFC] dark:border-gray-700 rounded-lg overflow-hidden hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-200 md:block shadow-sm hover:shadow-md"
        >
          {article.thumbnail && (
            <div className="relative aspect-[16/9] w-full bg-gray-100 dark:bg-gray-700">
              <Image
                src={article.thumbnail}
                alt=""
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-200"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          )}
          <div className="p-6">
            <h3 className="font-medium text-lg mb-2 line-clamp-2 text-gray-900 dark:text-white group-hover:text-verus-blue dark:group-hover:text-blue-400 transition-colors">
              {article.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
              {article.description}
            </p>
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                <Calendar className="w-4 h-4" />
                <time dateTime={new Date(article.pubDate).toISOString()}>
                  {new Date(article.pubDate).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                  })}
                </time>
              </div>
              <span className="flex items-center gap-1 text-verus-blue dark:text-blue-400">
                Read more
                <ExternalLink className="w-4 h-4" />
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}