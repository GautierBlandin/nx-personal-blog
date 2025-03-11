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
  noBanner?: boolean;
}

export const ArticlePage = ({
  title,
  articleLink,
  description,
  publishedAt,
  subtitle,
  noBanner,
}: ArticlePageProps) => {
  return (
    <NavbarLayout title={title} description={description}>
      {!noBanner && (
        <div className="pb-12">
          <Banner title={title} subtitle={subtitle} />
        </div>
      )}
      <main className="flex-grow">
        <div className="flex justify-center mx-4">
          <div className="max-w-6xl w-full">
            <p className="pb-12">Published: {formatDate(publishedAt)}</p>
            <Article articleLink={articleLink} />
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
