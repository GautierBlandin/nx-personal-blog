import { useState, useEffect } from 'react';
import 'prismjs/themes/prism-okaidia.css';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-json';
import 'prismjs/plugins/toolbar/prism-toolbar.min.css';
import 'prismjs/plugins/toolbar/prism-toolbar.min';
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.min';

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

  return <div dangerouslySetInnerHTML={{ __html: content }} />;
};
