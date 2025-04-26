import { useLoaderData, MetaFunction } from 'react-router';
import { ArticlePage } from '@nx-personal-blog/web-articles';
import { articles } from '@nx-personal-blog/static-articles';
import { loadArticleContent } from '@nx-personal-blog/server-articles';

export async function loader({ params }: { params: { identifier: string } }) {
  const identifier = params.identifier;
  const article = articles[identifier];

  if (!article) {
    throw new Response('Not Found', { status: 404 });
  }

  const content = loadArticleContent({
    name: identifier,
    toRoot: '../../../../',
  });

  return {
    ...article,
    content,
  };
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  return [
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    { title: (data as any).title },
  ];
};

export default function ArticleRoute() {
  const articleProps = useLoaderData<typeof loader>();

  return (
    <ArticlePage
      title={articleProps.title}
      subtitle={articleProps.subtitle}
      publishedAt={articleProps.date}
      description={articleProps.description}
      content={articleProps.content}
    />
  );
}
