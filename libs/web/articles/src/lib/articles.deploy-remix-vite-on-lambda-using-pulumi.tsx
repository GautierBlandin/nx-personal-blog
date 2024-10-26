import Prism from 'prismjs';
import { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { Article } from './web-articles';

export function DeployRemixViteOnLambda() {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      Prism.highlightAllUnder(contentRef.current);
    }
  }, []);

  return (
    <div className="max-w-3xl mx-auto">
      <Helmet>
        <title>Gautier Blandin - A blog about Software</title>
        <meta name="description" content="A blog about software engineering" />
      </Helmet>
      <div className="mt-12 mb-12 ml-2 mr-2" ref={contentRef}>
        <Article articleLink={'/content/deployRemixViteOnAwsWithPulumi.md'} />
      </div>
    </div>
  );
}
