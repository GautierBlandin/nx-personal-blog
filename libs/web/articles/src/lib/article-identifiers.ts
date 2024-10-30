export interface Article {
  identifier: string;
  title: string;
  description: string;
  date: string; // YYYY-MM-DD
}

export const articles = {
  typescriptSwitchExhaustivenessCheck: {
    identifier: 'typescript-switch-exhaustiveness-check',
    title: 'Check switch statement exhaustiveness with typescript',
    description: 'A technical tutorial for checking switch statement exhaustiveness with typescript.',
    date: '2024-10-28',
  },
  deployRemixViteOnAwsWithPulumi: {
    identifier: 'deploy-remix-vite-on-aws-using-pulumi',
    title: 'Deploy Remix-Vite on AWS with Pulumi',
    description: 'A technical tutorial for deploying a Remix-Vite app on AWS using Pulumi.',
    date: '2024-06-15',
  }
} satisfies Record<string, Article>;

export function articleToArticlePageProps(article: Article) {
  return {
    articleLink: articleContentPath(article.identifier),
    title: article.title,
    description: article.description,
  };
}

export function articleContentPath(articleIdentifier: string) {
  return `/content/${articleIdentifier}.md`;
}

export function articleRoute(articleIdentifier: string) {
  return `/articles/${articleIdentifier}`;
}

