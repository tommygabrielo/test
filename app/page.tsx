import type { Article } from '@/types/article.type'
import Link from 'next/link'
import Image from 'next/image'
import { getArticleList } from '@/api/article.api'

export default async function Home() {
  const articles: Article[] = await getArticleList();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-gray-500 text-3xl font-700 text-center">Blog</h1>
      <main className="flex flex-col row-start-2sm:items-start">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {articles.map((article) => (
            <div
              key={article.id}
              className="max-w-xl p-4 rounded-xl shadow-lg hover:border-gray-300 border border-gray-50 flex flex-row items-center sm:items-start transition-transform duration-300 ease-in-out hover:scale-105"
            >
              <Link href={`/articles/${article.id}`}>
                <div className="flex flex-row items-center justify-center gap-4">
                  <Image
                    src={article.image}
                    width={130}
                    height={150}
                    alt={article.title}
                    className="object-cover rounded-md mb-4 transition-transform duration-300"
                  />
                  <div>
                    <h2 className="text-xl font-bold mb-2 w-60">{article.title}</h2>
                    <p className="text-gray-800 w-50">{article.description}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
