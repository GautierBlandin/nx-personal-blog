import { Helmet } from 'react-helmet';
import { Article } from './Article';
import { NavbarLayout } from '@nx-personal-blog/navigation';

export interface ArticlePageProps {
  articleLink: string;
  title: string;
  description: string;
}

export const ArticlePage = ({ articleLink, title, description }: ArticlePageProps) => {
  return (
    <NavbarLayout>
      <div className="flex justify-center mx-4">
        { /*           ^ minimum x-margin for small screens */ }
        <div className="max-w-3xl w-full">
          <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
          </Helmet>
          <Article articleLink={articleLink} />
        </div>
      </div>
    </NavbarLayout>
  );
};
