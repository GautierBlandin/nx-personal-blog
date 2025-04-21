import { NavbarLayout } from '@nx-personal-blog/navigation';
import { ContentContainer } from '@nx-personal-blog/ui';
import { loadArticleContent } from '@nx-personal-blog/articles';
import { Markdown } from './Markdown';
import { useLoaderData } from 'react-router';

export const loader = async () => {
  return { content: loadArticleContent('articles') };
};

export const ArticlesPage = () => {
  const { content } = useLoaderData<typeof loader>();

  return (
    <NavbarLayout
      title="Gautier Blandin - A blog about software engineering"
      description="Gautier Blandin - A blog about software engineering"
    >
      <main className="flex-grow">
        <ContentContainer>
          <Markdown content={content} />
        </ContentContainer>
      </main>
    </NavbarLayout>
  );
};
