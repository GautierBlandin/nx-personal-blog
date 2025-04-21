import { NavbarLayout } from '@nx-personal-blog/navigation';
import { ContentContainer } from '@nx-personal-blog/ui';
import { Article } from './Article';

export const ArticlesPage = () => {
  return (
    <NavbarLayout
      title="Gautier Blandin - A blog about software engineering"
      description="Gautier Blandin - A blog about software engineering"
    >
      <main className="flex-grow">
        <ContentContainer>
          <Article articleLink="/content/articles.md" />
        </ContentContainer>
      </main>
    </NavbarLayout>
  );
};
