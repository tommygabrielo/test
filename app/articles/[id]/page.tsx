import Image from 'next/image';
import { Article } from '../../../types/article.type'
import { getArticleById } from '@/api/article.api'
import { GetServerSidePropsContext } from 'next'
import Page404 from '@/component/page404';
import Link from 'next/link';

interface Props {
    article: Article;
}

const ArticleItem = ({ article }: Props) => {
    return (
        <div className="w-2/4 flex flex-col items-center mt-10">
            <h1 className="text-xl font-bold text-grayyyy-700 mb-8">{article.title}</h1>
            <Image
                src={article.image}
                alt={article.title}
                width={400}
                height={400}
                className="rounded-xl"
            />
            <p className="w-96 mt-8 mb-4">{article.content}</p>
            <p>Publié le: {new Date(article.createdAt).toLocaleDateString()}</p>
            <Link href={`/`} className='mt-8 text-gray-400 hover:text-gray-800 hover:underline'>
                Retour
            </Link>
        </div>
    )
}

const ArticlePage = async (context: GetServerSidePropsContext<{ id: string }>) => {
    const id = (await context.params)?.id
    const article = id ? (await getArticleById(id)) : null

    return (
        <div className="w-full items-center flex flex-col">
            {!article ? (
                <Page404 />
            ) : (
                <ArticleItem article={article} />
            )}
        </div>
    );
};

export default ArticlePage;