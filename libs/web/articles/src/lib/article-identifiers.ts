import { ArticlePageProps } from './ArticlePage';

export interface Article {
  identifier: string;
  title: string;
  subtitle?: string;
  description: string;
  date: string; // YYYY-MM-DD
}

export const articles: Record<string, Article> = {
  terraformPulumiSstTradeoffAnalsys: {
    identifier: 'terraform-pulumi-sst-tradeoff-analysis',
    title: 'Terraform vs Pulumi vs SST',
    subtitle: 'A tradeoffs analysis',
    description:
      'An in-depth comparison of three popular Infrastructure as Code tools.',
    date: '2025-03-12',
  },
  typescriptSwitchExhaustivenessCheck: {
    identifier: 'typescript-switch-exhaustiveness-check',
    title: 'Check switch statement exhaustiveness with Typescript',
    description:
      'A technical tutorial for checking switch statement exhaustiveness with typescript.',
    date: '2024-10-28',
  },
  deployRemixViteOnAwsWithPulumi: {
    identifier: 'deploy-remix-vite-on-aws-using-pulumi',
    title: 'Deploy Remix-Vite on AWS with Pulumi',
    description:
      'A technical tutorial for deploying a Remix-Vite app on AWS using Pulumi.',
    date: '2024-06-15',
  },
};

export function articleToArticlePageProps(article: Article): ArticlePageProps {
  return {
    articleLink: articleContentPath(article.identifier),
    title: article.title,
    subtitle: article.subtitle,
    publishedAt: article.date,
    description: article.description,
  };
}

export function articleContentPath(articleIdentifier: string) {
  return `/content/${articleIdentifier}.md`;
}

export function articleRoute(articleIdentifier: string) {
  return `/articles/${articleIdentifier}`;
}
