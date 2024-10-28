import { Route, Routes } from 'react-router-dom';
import Home from './home';
import { ArticlePage, articleRoute, articles } from '@nx-personal-blog/web-articles';

export function App() {


  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path={articleRoute(articles.deployRemixViteOnAwsWithPulumi.identifier)} element={<ArticlePage
        articleLink="/content/deploying-remix-vite-on-aws-with-pulumi.md"
        title="Deploying Remix-Vite on Lambda using Pulumi"
        description="Gautier Blandin - A blog about software engineering"
      />} />
      <Route path="/articles" element={<ArticlePage
        articleLink="/content/articles.md"
        title="Gautier Blandin - A blog about software engineering"
        description="Gautier Blandin - A blog about software engineering"
      />} />
    </Routes>
  );
}
