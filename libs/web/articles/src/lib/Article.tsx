import { useState, useEffect } from 'react';
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

  return (
    <div className="max-w-6xl w-full">
      <Markdown content={content} />
    </div>
  );
};
