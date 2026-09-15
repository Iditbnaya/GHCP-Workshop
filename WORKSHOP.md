# Participant Guide

## First step

Before starting the labs, clone the workshop repository through VS Code by following [SETUP.md](SETUP.md). Do not download individual files or open only the `starter-app` folder; Copilot needs the complete workspace for the exercises.

## Scenario

You are a system analyst joining a team that owns a digital motor-insurance product for private customers in Israel. A small premium-calculation service exists, but the documentation is incomplete and the request for a customer-facing quote-and-buy journey is ambiguous. You will use GitHub Copilot to understand current behavior, identify gaps, draft requirements and user stories, create verified diagrams, build reusable analysis tools, and cross-check a Hebrew RTL landing-page design against organizational requirements.

The JavaScript code is a case study. Participants do not change application or
source documents. Some labs create analysis deliverables under
`workshop-output` and reusable Copilot assets under approved `.github` folders.

After cloning, all exercises use files and Copilot Chat. Do not run the
application, install packages, use a terminal, create commits, or push changes.

## Working agreement

- Copilot assists; the analyst remains accountable.
- Treat generated requirements and diagrams as drafts.
- Give Copilot only the relevant business and technical context.
- Ask for evidence: documents, file names, functions, calculations, and assumptions.
- Never present inferred intent as an approved requirement.
- Never paste secrets, credentials, private customer data, or restricted code into a prompt.

## One connected workshop workflow

The labs follow the same change from discovery to design:

| Stage | Real system-analysis task | Workshop output |
|---|---|---|
| 1. Understand | Explain unfamiliar current behavior from code | Evidence-based answers in chat |
| 2. Document | Set stable boundaries and reverse engineer the current system | `.github/copilot-instructions.md` and `workshop-output/reverse-engineering-report.md` |
| 3. Verify | Review evidence and correct unsupported analysis | Verified reverse-engineering report |
| 4. Reuse | Package the proven method for future projects | Reusable prompt, agent, and skill |
| 5. Specify | Turn one supported request into a backlog item | `workshop-output/user-story.md` |
| 6. Accelerate | Build reusable prompts for daily work | Generic `.prompt.md` toolkit |
| 7. Validate design | Check and improve a design against product and organizational requirements | Initial/revised coverage reports and a Figma revision prompt |

## Labs

| Lab | Topic | Time | Guide |
|---|---|---:|---|
| 1 | Ask mode and code analysis | 20 min | [Open lab](labs/01-ask-mode-code-analysis.md) |
| 2 | Plan and create a reverse-engineering report | 20 min | [Open lab](labs/02-plan-reverse-engineering-report.md) |
| 3 | Agent mode, tools, and MCP | 20 min | [Open lab](labs/03-agent-mode-tools-mcp.md) |
| 4 | Create reusable prompts, agents, and skills | 20 min | [Open lab](labs/04-reusable-prompts-agents-skills.md) |
| 5 | Create a user-story custom agent | 15 min | [Open lab](labs/05-user-story-custom-agent.md) |
| 6 | Build a reusable analysis prompt toolkit | 10 min | [Open lab](labs/06-reusable-analysis-prompts.md) |
| 7 | Create, check, and improve a Figma design | 30 min | [Open lab](labs/07-figma-requirements-cross-check.md) |

## Completion checklist

- [ ] I used Copilot Chat with a file, selection, and workspace context.
- [ ] I compared focused analysis with an agent-assisted workflow.
- [ ] I created and reviewed a reverse-engineering report with verified diagrams.
- [ ] I created a reusable prompt, custom agent, and agent skill.
- [ ] I can explain the difference between models, tools, agents, and MCP.
- [ ] I distinguished current behavior, requested behavior, assumptions, and gaps.
- [ ] I drafted requirements and acceptance criteria with traceability.
- [ ] I created and checked system diagrams.
- [ ] I created and tested an evidence-based user-story custom agent.
- [ ] I created reusable prompts for common daily analysis tasks.
- [ ] I cross-checked a Figma screen against requirement IDs without inferring unsupported coverage.
