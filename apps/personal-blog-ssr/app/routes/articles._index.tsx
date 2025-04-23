import { ArticlesPage } from '@nx-personal-blog/web-articles';
import { useLoaderData } from 'react-router';
import { loadArticleContent } from '@nx-personal-blog/server-articles';

export async function loader() {
  return {
    content: loadArticleContent({
      name: 'articles',
      toRoot: '../../../../',
    }),
  };
}

export default function ArticlesRoot() {
  const data = useLoaderData<typeof loader>();

  return <ArticlesPage content={data.content} />;
}
