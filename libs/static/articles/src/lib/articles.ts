export interface Article {
  identifier: string;
  title: string;
  subtitle?: string;
  description: string;
  date: string; // YYYY-MM-DD
}

export const articles: Record<string, Article> = {
  'terraform-pulumi-sst-tradeoff-analysis': {
    identifier: 'terraform-pulumi-sst-tradeoff-analysis',
    title: 'Terraform vs Pulumi vs SST',
    subtitle: 'A tradeoffs analysis',
    description:
      'An in-depth comparison of three popular Infrastructure as Code tools.',
    date: '2025-03-12',
  },
  'typescript-switch-exhaustiveness-check': {
    identifier: 'typescript-switch-exhaustiveness-check',
    title: 'Check switch statement exhaustiveness with Typescript',
    description:
      'A technical tutorial for checking switch statement exhaustiveness with typescript.',
    date: '2024-10-28',
  },
  'deploy-remix-vite-on-aws-using-pulumi': {
    identifier: 'deploy-remix-vite-on-aws-using-pulumi',
    title: 'Deploy Remix-Vite on AWS with Pulumi',
    description:
      'A technical tutorial for deploying a Remix-Vite app on AWS using Pulumi.',
    date: '2024-06-15',
  },
};

export function fullTitle({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}): string {
  return subtitle ? `${title} - ${subtitle}` : title;
}

export function articleRoute(articleIdentifier: string) {
  return `/articles/${articleIdentifier}`;
}
