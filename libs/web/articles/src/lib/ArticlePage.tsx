import { Banner } from './Banner';
import { NavbarLayout } from '@nx-personal-blog/navigation';
import { ContentContainer } from '@nx-personal-blog/ui';
import { fullTitle } from '@nx-personal-blog/static-articles';
import { Markdown } from './Markdown';

export interface ArticlePageProps {
  content: string;
  title: string;
  description: string;
  publishedAt: string;
  subtitle?: string;
}

export const ArticlePage = ({
  title,
  content,
  description,
  publishedAt,
  subtitle,
}: ArticlePageProps) => {
  return (
    <NavbarLayout
      title={fullTitle({ title, subtitle })}
      description={description}
    >
      <main>
        <div className="pb-12">
          <Banner title={title} subtitle={subtitle} />
        </div>
        <div className="flex-grow">
          <ContentContainer>
            <p className="pb-12">Published: {formatDate(publishedAt)}</p>
            <Markdown content={content} />
          </ContentContainer>
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
