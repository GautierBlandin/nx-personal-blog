import { Route, Routes } from 'react-router-dom';
import Home from './home';
import { ArticlePage, articleRoute, articles, articleToArticlePageProps } from '@nx-personal-blog/web-articles';

export function App() {


  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path={articleRoute(articles.deployRemixViteOnAwsWithPulumi.identifier)} element={<ArticlePage
        {...articleToArticlePageProps(articles.deployRemixViteOnAwsWithPulumi)}
      />} />
      <Route path="/articles" element={<ArticlePage
        articleLink="/content/articles.md"
        title="Gautier Blandin - A blog about software engineering"
        description="Gautier Blandin - A blog about software engineering"
      />} />
    </Routes>
  );
}
