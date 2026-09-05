# GitHub Copilot for System Analysis in VS Code

A hands-on, two-hour beginner workshop for system analysts who use GitHub Copilot to understand existing systems, analyze requirements, write functional specifications, and create diagrams. It requires no software installation, terminal commands, or code execution during the workshop.

## Learning outcomes

By the end of the workshop, participants can:

- Navigate VS Code and use GitHub Copilot Chat without changing source code.
- Choose an appropriate model, context source, tool, or agent for analysis.
- Use Copilot to explain an unfamiliar system and trace business behavior.
- Derive candidate requirements and business rules from code and documentation.
- Produce a structured functional specification with traceability and open questions.
- Generate and validate context, process, and sequence diagrams.
- Improve unclear requirements using focused, token-efficient prompts.

## Agenda

| Module | Time |
|---|---:|
| VS Code & GitHub Copilot Fundamentals | 20 min |
| GitHub Copilot Features & Capabilities | 20 min |
| Copilot Models, Tools, Agents & MCP | 20 min |
| Using Copilot to Analyze Existing Code | 20 min |
| Reverse Engineering & Diagram Generation | 15 min |
| Refactoring Demo: Improving a Functional Specification | 10 min |
| Token Optimization & Prompt Best Practices | 15 min |
| **Total** | **120 min** |

## Start here

1. Clone this repository by following [SETUP.md](SETUP.md).
2. Open the cloned repository folder in VS Code.
3. Open [WORKSHOP.md](WORKSHOP.md) and follow the labs in order.

Facilitators should also read [FACILITATOR_GUIDE.md](FACILITATOR_GUIDE.md).

## Repository contents

```text
.
|-- .github/
|   `-- copilot-instructions.md
|-- labs/
|   |-- 01-fundamentals.md
|   |-- 02-features.md
|   |-- 03-models-tools-agents-mcp.md
|   |-- 04-code-analysis.md
|   |-- 05-reverse-engineering.md
|   |-- 06-refactoring.md
|   `-- 07-prompt-practices.md
|-- starter-app/
|   `-- src/
|-- CHEATSHEET.md
|-- DIAGRAM_GUIDE.md
|-- FACILITATOR_GUIDE.md
|-- FUNCTIONAL_SPEC_TEMPLATE.md
|-- REQUIREMENTS_TEMPLATE.md
|-- SETUP.md
`-- WORKSHOP.md
```

## Local-only status

This workshop is prepared locally before publication. After it is uploaded, participants clone it through the VS Code interface. No terminal, runtime, package installation, code execution, commit, push, or upload is required during the workshop.
