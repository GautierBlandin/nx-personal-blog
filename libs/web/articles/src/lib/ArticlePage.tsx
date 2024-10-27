import { Helmet } from 'react-helmet';
import { Article } from './Article';
import { WithNavbar } from '@nx-personal-blog/navigation';

const ArticlePageContent = ({ articleLink, title, description }: { articleLink: string, title: string, description: string }) => {
  return (
    <div className="max-w-3xl mx-auto">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <Article articleLink={articleLink} />
    </div>
  );
};

export const ArticlePage = WithNavbar(ArticlePageContent);
