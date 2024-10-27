import { Helmet } from 'react-helmet';
import { Article } from './Article';

export const ArticlePage = ({ articleLink, title, description }: { articleLink: string, title: string, description: string }) => {
  return (
    <div className="max-w-3xl mx-auto">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <div className="mt-12 mb-12 ml-2 mr-2">
        <Article articleLink={articleLink} />
      </div>
    </div>
  );
};
