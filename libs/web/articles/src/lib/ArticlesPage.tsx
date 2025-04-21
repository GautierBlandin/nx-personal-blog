import { NavbarLayout } from '@nx-personal-blog/navigation';
import { ContentContainer } from '@nx-personal-blog/ui';
import { Markdown } from './Markdown';

export const ArticlesPage = () => {
  return (
    <NavbarLayout
      title="Gautier Blandin - A blog about software engineering"
      description="Gautier Blandin - A blog about software engineering"
    >
      <main className="flex-grow">
        <ContentContainer>
          <Markdown
            content={`#### 2025

- [Terraform vs Pulumi vs SST - A tradeoffs analysis](/articles/terraform-pulumi-sst-tradeoff-analysis)

#### 2024

- [Check switch statement exhaustiveness in Typescript](/articles/typescript-switch-exhaustiveness-check)
- [Deploying Remix-Vite on AWS using Pulumi](/articles/deploy-remix-vite-on-aws-using-pulumi)
`}
          />
        </ContentContainer>
      </main>
    </NavbarLayout>
  );
};
