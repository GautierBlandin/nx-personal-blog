import { Article } from './Article';
import { Banner } from './Banner';
import { NavbarLayout } from '@nx-personal-blog/navigation';
import React from 'react';

export interface ArticlePageProps {
  articleLink: string;
  title: string;
  description: string;
  subtitle?: string;
}

export const ArticlePage = ({
  articleLink,
  title,
  description,
  subtitle,
}: ArticlePageProps) => {
  return (
    <NavbarLayout title={title} description={description}>
      <Banner title={title} subtitle={subtitle} />
      <main className="flex-grow">
        <div className="flex justify-center mx-4">
          <div className="max-w-6xl w-full">
            <Article articleLink={articleLink} />
          </div>
        </div>
      </main>
    </NavbarLayout>
  );
};
