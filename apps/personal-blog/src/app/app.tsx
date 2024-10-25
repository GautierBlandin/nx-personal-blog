import { Route, Routes } from 'react-router-dom';
import Home from './home';
import { DeployRemixViteOnLambda } from '@nx-personal-blog/web-articles';
import { Root } from './root';

export function App() {
  return (
    <Routes>
      <Route element={<Root />}>
        <Route path="/" element={<Home />} />
        <Route path="/articles/deploy-remix-vite-on-lambda-using-pulumi" element={<DeployRemixViteOnLambda />} />
      </Route>
    </Routes>
  );
}
