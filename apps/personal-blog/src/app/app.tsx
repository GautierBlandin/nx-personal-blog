import { Route, Routes } from 'react-router-dom';
import Home from './home';
import { ArticlePage } from '@nx-personal-blog/web-articles';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/articles/deploy-remix-vite-on-lambda-using-pulumi" element={<ArticlePage
        articleLink="/content/deploying-remix-vite-on-aws-with-pulumi.md"
        title="Deploying Remix-Vite on Lambda using Pulumi"
        description="Gautier Blandin - A blog about software engineering"
      />} />
    </Routes>
  );
}
