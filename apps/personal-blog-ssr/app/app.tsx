import { Home } from '@nx-personal-blog/home';
import type { MetaFunction } from 'react-router';

export const meta: MetaFunction = () => [
  {
    title: 'Gautier Blandin - A blog about software engineering',
  },
];

export function App() {
  return <Home />;
}

export default App;
