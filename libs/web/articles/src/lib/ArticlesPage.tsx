import { NavbarLayout } from '@nx-personal-blog/navigation';
import { ContentContainer } from '@nx-personal-blog/ui';
import { Markdown } from './Markdown';

export const ArticlesPage = ({ content }: { content: string }) => {
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
