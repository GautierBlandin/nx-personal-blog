import { Article } from './article-identifiers';
import { Route } from 'react-router-dom';
import { ArticlePage, ArticlePageProps } from './ArticlePage';

export function ArticleRoute({ article }: { article: Article }) {
  return (
    <Route
      path={articleRoute(article.identifier)}
      element={<ArticlePage {...articleToArticlePageProps(article)} />}
    />
  );
}

export function articleToArticlePageProps(article: Article): ArticlePageProps {
  return {
    articleLink: articleContentPath(article.identifier),
    title: article.title,
    description: article.description,
  };
}

export function articleContentPath(articleIdentifier: string) {
  return `/content/${articleIdentifier}.md`;
}

export function articleRoute(articleIdentifier: string) {
  return `/articles/${articleIdentifier}`;
}
