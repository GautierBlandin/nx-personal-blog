# Terraform vs Pulumi vs SST: A tradeoffs analysis

When starting a new project, it is always necessary to define how the software solution will be deployed [Think of a different intro phrase. That one is not catchy]. The industry has widely [is this usage correct ?]
adopted Infrastructure as Code (IaC) as the standard, but choosing the appropriate tool can be difficult.

In this article, I look at three popular tools for writing infrastructure code and which one I would recommend based on the circumstances of the team. First, let's start with some basics.

## What is Infrastructure as Code?

Infrastructure as Code is the process of provisioning and managing cloud resources through machine-readable files, enabling automated and replicable pipelines, as opposed to a manual deployment process. IaC provides many benefits:
consistent and reproducible deployments, reduced risk of human error, version control with all its advantages, living documentation of the infrastructure through the code itself, and many more.

Just like there many programming languages were created over time to address evolving needs, several tools emerged over the years to provide IaC capabilities. Key concerns for assessing IaC tools include:

- Variety of cloud of provider support
- Ecosystem maturity (quality of documentation and training material, integration capabilities)
- Developer experience (e.g. deployment speed, local development capabilities, language syntax familiarity)
- Testability
- Observability (e.g. monitoring of deployed resources, deployment metrics)
- Security (e.g. secret management, compliance checking, auditability)
- Modularity (ability to define and reuse infrastructure components)

## Terraform

Terraform was created in 2014 by HashiCorp. It enables users to define infrastructure using a purpose-built [domain-specific language](https://en.wikipedia.org/wiki/Domain-specific_language), HCL. Terraform supports virtually all cloud
providers and benefits from a widespread adoption in the DevOps community. <!-- Expand this paragraph --> <!-- Talk about the declarative approach and the state files -->

### Strengths
- Being used by many large organisations, Terraform has demonstrated enterprise-readiness and is a proven technology.
- Terraform supports virtually all cloud providers, making it one of the most versatile IaC tools.
- The official documentation is comprehensive, with a wealth of examples and tutorials.
- Terraform has an active community and a large adoption, making experienced practitioners easier to find. Additionally, HashiCorp offers certifications that may help in the vetting process.
- 
<!-- expand this section -->

### Challenges
- Terraform requires the use of HCL and specialized Terraform-specific knowledge and tooling. This encourages a Software Engineer vs DevOps Specialist divide, which is increasingly seen as hindering productivity, especially in smaller 
  teams.
- Terraform code is hard to keep DRY, and sometimes lack useful features of more expressive programming languages.
<!-- expand this section. Ideas: terraform vault -->

## Pulumi

Pulumi was created in 2017 by former Microsoft employees, and went open-source in 2018. It enables users to define infrastructure using mainstream programming languages (Typescript, Python, Java, and more). Like Terraform, Pulumi supports a
wide variety of cloud providers, and benefits from a growing popularity. <!-- Expand this paragraph --> <!-- Talk about the declarative approach and the state files -->

### Strengths
- By supporting mainstream programming languages, Pulumi encourages tighter integration of DevOps practices in fullstack teams. Language familiarity facilitates software engineers taking part in infrastructure definition.
- High testability with both unit testing, property testing, and integration testing being available.
- High modularity through native language constructs, as code reuse is powered by all the usual mechanisms of abstraction, including functions, inheritance, and composition. <!-- improve what comes after "including" ? -->
- Strong typing and IDE support
- Although less extensive than Terraform's provider collection <!-- use a better word than "collection" ? -->, Pulumi supports a wide array of cloud providers. Additionally, Terraform providers can be bridged to be used with Pulumi to
  provide missing functionality.
- Secrets are encrypted in state files.
- Pulumi Cloud provides strong observability and auditability features.

### Challenges
- While there is growing adoption and support for Pulumi, the documentation and examples are not nearly as comprehensive as that of Terraform. Even while writing Pulumi code, I often found myself looking at Terraform documentation and 
  examples to figure out how to do things.
- The high flexibility provided by programming languages makes it easier for teams with a weaker software engineering culture to shoot themselves in the foot and write hard-to-maintain code.
- All languages supported by Pulumi have feature-parity, but users reports a smoother experience with Typescript and Python, especially on the documentation side.
- Experienced practitioners may be harder to find and vet compared to Terraform.

## SST

SST was created in 2020 and is fundamentally different from Terraform and Pulumi in what it tries to achieve. Where Terraform and Pulumi fulfill a similar purpose using different approaches, SST is narrowly focused on AWS serverless 
services and aims at improving development speed by providing high-level, opinionated APIs for provisioning cloud resources. For example, while deploying a server-side rendered application using Next or Remix might take a significant
amount of engineering effort and infrastructure code using low-level components through Terraform or Pulumi, SST treats it as a single declarable resource. Additionally, SST comes with a powerful Live Lambda feature, enabling hot-reload 
of AWS Lambda functions during development by proxying calls to a local deployment.

SST uses the Pulumi engine under the hood to manage and provision resources, and lets users write Pulumi code in addition to SST's constructs, enabling resources with no associated SST constructs to still be defined and deployed.

### Strengths
- Opinionated, high-level APIs that dramatically reduce development effort for supported patterns.
- Hot-reload for lambda functions provide a very fast feedback loop for serverless backend developers.

### Challenges
- Exclusively supports Typescript as the language for infrastructure code.
- Although extensible through Pulumi, SST constructs are narrowly focused on AWS serverless.
- Relatively new and small, with limited documentation and community adoption.
- SST has its own CLI and can't be connected to Pulumi Cloud. While SST offers their own monitoring solution (the SST Console), it is far from feature-parity with Pulumi Cloud.

## Star rating summary

Note: For SST, most ratings are given under the assumption that AWS Serverless is chosen as the main infrastructure technology.

| Feature                     | Terraform | Pulumi | SST   |
|-----------------------------|-----------|--------|-------|
| Variety of provider support | ★★★★★     | ★★★★   | ★★    |
| Developer experience        | ★★★       | ★★★★   | ★★★★★ |
| Language expressiveness     | ★★★       | ★★★★★  | ★★★★★ |
| High-level APIs             | ★         | ★      | ★★★★  |
| Documentation quality       | ★★★★★     | ★★★★   | ★★★   |
| Testability                 | ★★★       | ★★★★★  | ★★★★  |
| Observability               | ★★★       | ★★★★   | ★★★   |
| Modularity                  | ★★★       | ★★★★★  | ★★★★  |
| Enterprise-readiness        | ★★★★★     | ★★★★   | ★★    |
| Secret Management           | ★★★★      | ★★★★★  | ★★★★★ |
| Auditability                | ★★★       | ★★★★★  | ★     |

## Choosing the appropriate tool

To help make the decision as to which tool to use, I like to consider forces that act for or against a given tool. Forces include:
- Project timeline (do we need to deliver the project very fast, or do we have more time ?)
- Project risk (if an issue arises with the project, how critical is it for the organization ?)
- Infrastructure requirements (do we need to use a particular architecture or a particular cloud provider, or are we free to choose ?)
- Team size & Organizational practices (do we have a tightly-integrated, full-stack team, or do we have separate teams working on backend, frontend, and infrastructure ?)
- Team familiarity with the possible options

### SST

- Shorter-term project
- Low risk project (prototyping, early-stage startups)
- Mostly sticking to AWS Serverless is an acceptable constraint
- Small, tightly integrated team
- The team is familiar with Typescript

### Pulumi

- Longer-term project
- Medium to high risk projects
- Little constraint for infrastructure requirement, although provider support must be verified for lesser-known cloud services
- Pulumi encourages integrated teams with [T-Shaped specialists](https://en.wikipedia.org/wiki/T-shaped_skills) for the DevOps role
- The DevOps specialist is familiar with Typescript or Python (or any of the other supported languages, at the cost of a higher risk)

### Terraform

- Longer-term project
- High to critical risk projects
- Terraform doesn't impose any constraint on infrastructure requirements
- Defined boundaries between DevOps engineers and software engineers
- DevOps engineers are familiar with Terraform and its ecosystem
