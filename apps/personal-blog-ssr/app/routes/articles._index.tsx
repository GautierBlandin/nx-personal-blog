import { ArticlesPage } from '@nx-personal-blog/web-articles';
import { type MetaFunction, useLoaderData } from 'react-router';
import { loadArticleContent } from '@nx-personal-blog/server-articles';

export const meta: MetaFunction = () => [
  {
    title: 'Gautier Blandin - Articles',
  },
];

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
