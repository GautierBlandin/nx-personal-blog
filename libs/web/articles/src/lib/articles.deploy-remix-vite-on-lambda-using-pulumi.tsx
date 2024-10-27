import { Helmet } from 'react-helmet';
import { Article } from './web-articles';

export function DeployRemixViteOnLambda() {
  return (
    <div className="max-w-3xl mx-auto">
      <Helmet>
        <title>Gautier Blandin - A blog about Software</title>
        <meta name="description" content="A blog about software engineering" />
      </Helmet>
      <div className="mt-12 mb-12 ml-2 mr-2">
        <Article articleLink={'/content/deploying-remix-vite-on-aws-with-pulumi.md'} />
      </div>
    </div>
  );
}
