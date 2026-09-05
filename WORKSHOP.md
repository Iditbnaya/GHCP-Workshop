# Participant Guide

## First step

Before starting the labs, clone the workshop repository through VS Code by following [SETUP.md](SETUP.md). Do not download individual files or open only the `starter-app` folder; Copilot needs the complete workspace for the exercises.

## Scenario

You are a system analyst joining a team that owns a small order-pricing service. The source code exists, but the documentation is incomplete and a new stakeholder request is ambiguous. You will use GitHub Copilot to understand current behavior, identify gaps, draft requirements and a functional specification, and create verified diagrams.

The JavaScript code is a case study. Participants are not expected to write or change code.

After cloning, all exercises are completed by reading files and using Copilot Chat. Do not run the application, install packages, use a terminal, create commits, or push changes.

## Working agreement

- Copilot assists; the analyst remains accountable.
- Treat generated requirements and diagrams as drafts.
- Give Copilot only the relevant business and technical context.
- Ask for evidence: documents, file names, functions, calculations, and assumptions.
- Never present inferred intent as an approved requirement.
- Never paste secrets, credentials, private customer data, or restricted code into a prompt.

## Labs

| Lab | Topic | Time | Guide |
|---|---|---:|---|
| 1 | VS Code & GitHub Copilot fundamentals | 20 min | [Open lab](labs/01-fundamentals.md) |
| 2 | Features and capabilities | 20 min | [Open lab](labs/02-features.md) |
| 3 | Models, tools, agents, and MCP | 20 min | [Open lab](labs/03-models-tools-agents-mcp.md) |
| 4 | Analyze existing code | 20 min | [Open lab](labs/04-code-analysis.md) |
| 5 | Reverse engineering and diagrams | 15 min | [Open lab](labs/05-reverse-engineering.md) |
| 6 | Refactor a functional specification | 10 min | [Open lab](labs/06-refactoring.md) |
| 7 | Token and prompt practices | 15 min | [Open lab](labs/07-prompt-practices.md) |

## Completion checklist

- [ ] I used Copilot Chat with a file, selection, and workspace context.
- [ ] I compared focused analysis with an agent-assisted workflow.
- [ ] I can explain the difference between models, tools, agents, and MCP.
- [ ] I distinguished current behavior, requested behavior, assumptions, and gaps.
- [ ] I drafted requirements and acceptance criteria with traceability.
- [ ] I created and checked system diagrams.
- [ ] I improved an unclear functional specification.
- [ ] I improved a vague prompt using goal, context, constraints, and validation.
