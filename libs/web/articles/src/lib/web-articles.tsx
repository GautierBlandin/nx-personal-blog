import { useState, useEffect } from 'react';
import 'prismjs/themes/prism-okaidia.css';
import 'prismjs/components/prism-typescript.js';
import 'prismjs/components/prism-bash.js';
import 'prismjs/components/prism-json.js';
import 'prismjs/plugins/toolbar/prism-toolbar.min.css';
import 'prismjs/plugins/toolbar/prism-toolbar.min.js';
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.min.js';
import { Markdown } from './Markdown';

export const Article = ({ articleLink }: { articleLink: string }) => {
  const [content, setContent] = useState<string>('');

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await fetch(articleLink);
        const html = await response.text();
        setContent(html);
      } catch (error) {
        console.error('Error fetching article:', error);
        setContent('<p>Error loading article</p>');
      }
    };

    fetchArticle();
  }, [articleLink]);

  if (!content) return null;

  return <Markdown content={content} />;
};
