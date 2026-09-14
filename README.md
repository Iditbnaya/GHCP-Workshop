# GitHub Copilot for Digital Insurance System Analysis

A hands-on, 135-minute beginner workshop for system analysts who use GitHub Copilot to understand a digital motor-insurance product, analyze requirements, create evidence-based user stories, build reusable analysis prompts and agents, create diagrams, and cross-check a Figma design against organizational requirements. It requires no software installation, terminal commands, or code execution during the workshop.

The repository also includes a student-facing GitHub Pages site in
[`index.html`](index.html). After GitHub Pages is configured to use
**GitHub Actions**, `.github/workflows/pages.yml` publishes the site from the
`main` branch at
[iditbnaya.github.io/copilot-workshop-for-system-analysts](https://iditbnaya.github.io/copilot-workshop-for-system-analysts/).

## Learning outcomes

By the end of the workshop, participants can:

- Navigate VS Code and use GitHub Copilot Chat without changing source code.
- Choose an appropriate model, context source, tool, or agent for analysis.
- Use Copilot to explain an unfamiliar system and trace business behavior.
- Derive candidate requirements and business rules from code and documentation.
- Produce traceable requirements and user stories with visible open questions.
- Generate and validate context, process, and sequence diagrams.
- Improve unclear requirements using focused, token-efficient prompts.
- Package a successful analysis workflow as a reusable prompt, custom agent, and agent skill.
- Cross-check a Figma landing page against traceable organizational requirements.

## Agenda

| Module | Time |
|---|---:|
| Ask Mode & Code Analysis | 20 min |
| Plan Mode & Reverse-Engineering Report | 20 min |
| Agent Mode, Tools & MCP | 20 min |
| Reusable Prompts, Agents & Skills | 20 min |
| User-Story Custom Agent | 15 min |
| Reusable Daily Analysis Prompts | 10 min |
| Figma Design, Requirements Check & Revision | 30 min |
| **Total** | **135 min** |

## Start here

1. Clone this repository by following [SETUP.md](SETUP.md).
2. Open the cloned repository folder in VS Code.
3. Open [WORKSHOP.md](WORKSHOP.md) and follow the labs in order.

## Repository contents

```text
.
|-- .github/
|   |-- workflows/
|   |   `-- pages.yml
|   `-- copilot-instructions.md
|-- labs/
|   |-- 01-ask-mode-code-analysis.md
|   |-- 02-plan-reverse-engineering-report.md
|   |-- 03-agent-mode-tools-mcp.md
|   |-- 04-reusable-prompts-agents-skills.md
|   |-- 05-user-story-custom-agent.md
|   |-- 06-reusable-analysis-prompts.md
|   `-- 07-figma-requirements-cross-check.md
|-- starter-app/
|   `-- src/
|-- workshop-output/
|   `-- README.md
|-- references/
|   |-- diagram-guide.md
|   |-- figma-agent-brief.md
|   |-- organizational-requirements.md
|   |-- prompt-library.md
|   `-- stakeholder-request.md
|-- README.md
|-- SETUP.md
|-- index.html
|-- site.js
|-- styles.css
`-- WORKSHOP.md
```
