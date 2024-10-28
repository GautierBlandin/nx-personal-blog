import { articles } from './article-identifiers';
import { ArticleRoute } from './ArticleRoute';

export function ArticleRoutes() {
  return Object.values(articles).map(article => <ArticleRoute article={article} key={article.identifier} />);
}
