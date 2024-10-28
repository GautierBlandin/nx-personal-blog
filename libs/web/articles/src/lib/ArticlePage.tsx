import { Helmet } from 'react-helmet';
import { Article } from './Article';
import { WithNavbar } from '@nx-personal-blog/navigation';

export interface ArticlePageProps {
  articleLink: string;
  title: string;
  description: string;
}

const ArticlePageContent = ({ articleLink, title, description }: ArticlePageProps) => {
  return (
    <div className="flex justify-center mx-4">
      <div className="max-w-3xl w-full">
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
        </Helmet>
        <Article articleLink={articleLink} />
      </div>
    </div>
  );
};

export const ArticlePage = WithNavbar(ArticlePageContent);
