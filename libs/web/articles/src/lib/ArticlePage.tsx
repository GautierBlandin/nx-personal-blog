import { Article } from './Article';
import { Banner } from './Banner';
import { NavbarLayout } from '@nx-personal-blog/navigation';
import React from 'react';

export interface ArticlePageProps {
  articleLink: string;
  title: string;
  description: string;
  publishedAt: string;
  subtitle?: string;
}

export const ArticlePage = ({
  title,
  articleLink,
  description,
  publishedAt,
  subtitle,
}: ArticlePageProps) => {
  return (
    <NavbarLayout title={title} description={description}>
      <main>
        <div className="pb-12">
          <Banner title={title} subtitle={subtitle} />
        </div>
        <div className="flex-grow">
          <div className="flex justify-center mx-4">
            <div className="max-w-6xl w-full">
              <p className="pb-12">Published: {formatDate(publishedAt)}</p>
              <Article articleLink={articleLink} />
            </div>
          </div>
        </div>
      </main>
    </NavbarLayout>
  );
};

function formatDate(dateString: string) {
  const date = new Date(dateString);

  return date.toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
