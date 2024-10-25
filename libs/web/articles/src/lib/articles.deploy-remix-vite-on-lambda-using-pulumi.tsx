import Prism from 'prismjs';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Article } from './web-articles';

export function DeployRemixViteOnLambda() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div className="max-w-3xl mx-auto">
      <Helmet>
        <title>Gautier Blandin - A blog about Software</title>
        <meta name="description" content="A blog about software engineering" />
      </Helmet>
      <div className="mt-12 mb-12 ml-2 mr-2">
        <Article content={'<div>hello world</div>'} />
      </div>
    </div>
  );
}
