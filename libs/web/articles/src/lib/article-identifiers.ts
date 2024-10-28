export const deployRemixViteOnAwsWithPulumi = 'deploy-remix-vite-on-aws-with-pulumi';
export const typescriptSwitchExhaustivenessCheck = 'typescript-switch-exhaustiveness-check';

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