# Terraform vs Pulumi vs SST: A tradeoffs analysis

When starting a new project, it is always necessary to define how the software solution will be deployed [Think of a different intro phrase. That one is not catchy]. The industry has widely [is this usage correct ?]
adopted Infrastructure as Code (IaC) as the standard, but choosing the appropriate tool can be difficult.

In this article, I look at three popular tools for writing infrastructure code and which one I would recommend based on the circumstances of the team. First, though, let's start from the basics.

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
providers and benefits from a widespread adoption in the DevOps community. The Terraform ecosystem offers many tools supporting various
use-cases <!---expand on this and provide concrete examples, such as terragrunt and other useful tooling-->.

### Strengths

### Challenges

## Pulumi

### Strengths

### Challenges

## SST

### Strengths

### Challenges

## Table summary

## Recommendations

<s> <h2>Introduction</h2>
Pulumi was created in 2017 by former Microsoft employees, and went open-source in 2018. It enables users to define infrastructure using mainstream programming languages (Typescript, Python, Java, and more). Like Terraform, Pulumi supports a wide variety of cloud providers
(thanks to bridging, any Terraform-supported provider is usable through Pulumi), and benefits from a growing popularity.

SST was created in 2021. Unlike Terraform and Pulumi, SST is mostly focused on AWS and its serverless stack, and only supports Typescript as a language to define infrastructure. Its main differentiator is a focus on higher-level APIs,
enabling users to quickly define coherent component groups that would a significant to design and write using other frameworks. SST uses the Pulumi engine under the hood, and supports extensibility by allowing users to use Pulumi code in
addition to the higher-level constructs provided by SST.

### Terraform

- Mature ecosystem and community
- Extensive support among virtually all cloud providers and related tooling
- High-quality documentation with a wealth of examples
  </s>
