import { Article } from './Article';
import { NavbarLayout } from '@nx-personal-blog/navigation';
import React from 'react';

export const ArticlesPage = () => {
  return (
    <NavbarLayout
      title="Gautier Blandin - A blog about software engineering"
      description="Gautier Blandin - A blog about software engineering"
    >
      <main className="flex-grow">
        <div className="flex justify-center mx-4">
          <div className="max-w-6xl w-full">
            <Article articleLink="/content/articles.md" />
          </div>
        </div>
      </main>
    </NavbarLayout>
  );
};
