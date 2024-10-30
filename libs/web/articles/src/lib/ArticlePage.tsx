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
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <Article articleLink={articleLink} />
    </NavbarLayout>
  );
};
