import { Article } from './Article';
import { NavbarLayout } from '@nx-personal-blog/navigation';
import React from 'react';
import { ContentContainer } from '@nx-personal-blog/ui';

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
