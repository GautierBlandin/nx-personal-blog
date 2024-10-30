import { Article } from './Article';
import { NavbarLayout } from '@nx-personal-blog/navigation';

export interface ArticlePageProps {
  articleLink: string;
  title: string;
  description: string;
}

export const ArticlePage = ({ articleLink, title, description }: ArticlePageProps) => {
  return (
    <NavbarLayout title={title} description={description}>
      <Article articleLink={articleLink} />
    </NavbarLayout>
  );
};
