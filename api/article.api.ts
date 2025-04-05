import type { Article } from '@/types/article.type'

export const getArticleList = async (): Promise<Article[]> => {
  const res = await fetch('http://localhost:3000/data/article.json', {
    next: { revalidate: 60 },
  });
  
  return await res.json() as Article[];
}

export const getArticleById = async (articleId: string): Promise<Article|null> => {
  const articles = await getArticleList();

  return articles.find(({ id }) => articleId === id) ?? null;
}
