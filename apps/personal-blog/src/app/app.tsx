import { Route, Routes } from 'react-router-dom';
import {
  ArticlePage,
  articleRoute,
  articles,
  articleToArticlePageProps
} from '@nx-personal-blog/web-articles';
import { Home } from '@nx-personal-blog/home';

export function App() {


  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {...Object.values(articles).map((article) =>
        <Route path={articleRoute(article.identifier)} element={<ArticlePage
        {...articleToArticlePageProps(article)}
        />} />)}
      <Route path="/articles" element={<ArticlePage
        articleLink="/content/articles.md"
        title="Gautier Blandin - A blog about software engineering"
        description="Gautier Blandin - A blog about software engineering"
      />} />
    </Routes>
  );
}
