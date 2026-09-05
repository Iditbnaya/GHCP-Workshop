# Facilitator Guide

## Audience and format

- Audience: system analysts and business analysts new to GitHub Copilot
- Duration: 120 minutes
- Format: short demonstrations followed by individual or paired practice
- Suggested ratio: one facilitator per 15-20 participants

## Before the session

1. Confirm the repository URL in [SETUP.md](SETUP.md) is accessible to participants.
2. Complete [SETUP.md](SETUP.md) on the presentation machine.
3. Confirm participants can clone the repository and access GitHub Copilot.
4. Decide which available Copilot model to demonstrate. Model availability varies by plan and organization policy.
5. Keep Explorer, Copilot Chat, and Markdown Preview visible during exercises.
6. Do not ask participants to install software, use a terminal, execute code, commit, or push.

## Timing plan

| Time | Activity | Facilitator focus |
|---|---|---|
| 00:00-00:20 | Fundamentals | Orientation, selection, context, and chat |
| 00:20-00:40 | Features | Analysis workflows, context, reusable outputs |
| 00:40-01:00 | Models, tools, agents, MCP | Mental model and safe tool use |
| 01:00-01:20 | Code analysis | Current-state rules, requirements, gaps |
| 01:20-01:35 | Reverse engineering | Context, process, and sequence diagrams |
| 01:35-01:45 | Refactoring | Improve a functional specification |
| 01:45-02:00 | Prompt practices | Context discipline and prompt iteration |

## Demonstration guidance

### Fundamentals

Show Explorer, Search, Copilot Chat, model selection, chat modes, and the context picker. Source Control and inline code completion are not required for this audience. Avoid presenting keyboard shortcuts as universal because they can differ by operating system and keymap.

### Features

Use the same analysis task in multiple workflows:

- Ask: explain `calculateOrder`.
- Focused context: analyze one selected calculation.
- Agent: inspect multiple files and prepare a current-state summary without editing.

Emphasize that participants should explicitly say `Do not modify files or run write actions`.

### Models, tools, agents, MCP

Use this simple distinction:

| Concept | Beginner definition |
|---|---|
| Model | The reasoning and generation engine |
| Tool | A capability the model can invoke, such as read-only workspace search |
| Agent | A workflow that plans steps and uses tools toward a goal |
| MCP | A standard way to expose external tools and context to an AI client |

Do not configure an unapproved MCP server during the session. Demonstrate only servers permitted by the participant's organization.

### Code analysis

Require citations to files and symbols. Teach four labels: **current behavior**, **requested behavior**, **assumption**, and **open question**. If Copilot makes an unsupported claim, ask: `What exact source supports that conclusion?`

### Diagramming

Render Mermaid diagrams in Markdown preview. Compare every actor, process, message, node, and edge against the available evidence. Generated diagrams are hypotheses until verified.

### Refactoring

Refactor an unclear functional-specification paragraph, not the application. Preserve business meaning while separating rules, validation, exceptions, acceptance criteria, assumptions, and questions.

## Debrief questions

- What made a prompt easy for Copilot to answer?
- When was a narrow context better than workspace-wide context?
- Which output required the most human verification?
- When would you use focused file context rather than an agent?
- What organizational policy applies to MCP servers and source-code context?

## Common issues

| Issue | Response |
|---|---|
| Copilot cannot see the project | Open the workshop root as the VS Code workspace |
| Suggestions differ between participants | Explain that model, context, version, and prior chat affect output |
| Agent wants to edit or run a command | Decline it; these exercises are read-only |
| Mermaid does not render | Check the code fence language is `mermaid` and simplify syntax |
| Copilot invents a requirement | Mark it as an assumption or open question and request evidence |
| A feature is unavailable | Demonstrate conceptually and continue with Ask mode |
