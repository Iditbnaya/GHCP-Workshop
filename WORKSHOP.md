# Travel-Insurance Workshop

## Start: Set the workshop boundaries (5 min)

Before opening Copilot Chat, create one short repository instruction file. It
will apply automatically throughout the workshop and prevents repeated safety
instructions in every prompt.

1. In the VS Code Explorer, open the existing `.github` folder.
2. Inside it, create `copilot-instructions.md`.
3. Paste:

```markdown
# Workshop instructions

- Never modify `starter-app` or `references`, and do not run the application or terminal commands.
- Write only the exact output named in the current lab.
- Treat `starter-app` as evidence of current behavior and `references` as requested behavior or design evidence.
- Label Current, Requested, Assumed, Gap, and Open question information.
- Cite files and functions for code claims, and document IDs for requested behavior.
- Use concise business language for system analysts.
- When evidence is missing or conflicting, record an Open question and do not invent an answer.
```

4. Save the file.
5. Do not add travel-insurance rules or task-specific output formats. The file
   should contain only stable instructions that apply to every lab.

## Scenario

You have joined a team creating a simple online travel-insurance quote journey.
A small calculation already exists, and a product owner has written a short
request. Your job is to understand what exists, explain it clearly, create one
user story, and check whether a proposed screen represents the request.

You are not expected to understand JavaScript. Ask Copilot to translate the
source into business language and always check the cited evidence.

## What makes this path easy to follow

- Every lab has one outcome and a visible checkpoint.
- The main report is limited to one easy-to-scan product snapshot.
- Diagrams contain no more than six nodes.
- Tables contain no more than six rows.
- Prompts state exactly which files to use and which file may be written.
- MCP and Figma are optional extensions rather than prerequisites.

## Connected journey

| Lab | Analyst task | Output | Time |
|---|---|---|---:|
| Start | Set stable workshop boundaries | `.github/copilot-instructions.md` | 5 min |
| 1 | Understand a quote in Ask mode | Two clear answers in chat | 15 min |
| 2 | Plan a one-page product snapshot | `workshop-output/product-snapshot.md` | 20 min |
| 3 | Verify the snapshot in Agent mode | Corrected product snapshot | 15 min |
| 4 | Turn one request into a user story | `workshop-output/user-story.md` | 15 min |
| 5 | Save a useful daily prompt | `.github/prompts/explain-current-behavior.prompt.md` | 10 min |
| 6 | Check a proposed screen | `workshop-output/design-check.md` | 15 min |
| **Total** |  |  | **95 min** |

## Labs

1. [Ask mode: understand the quote](labs/01-ask-understand-the-quote.md)
2. [Plan mode: create a one-page product snapshot](labs/02-plan-one-page-product-snapshot.md)
3. [Agent mode: verify the snapshot](labs/03-agent-verify-the-snapshot.md)
4. [Create one user story](labs/04-create-one-user-story.md)
5. [Save one reusable prompt](labs/05-save-one-reusable-prompt.md)
6. [Check a simple design](labs/06-check-a-simple-design.md)

## Working agreement

- Treat `starter-app` as evidence of current behavior.
- Treat `references` as requested behavior or design evidence.
- Never modify `starter-app` or `references`.
- Do not run the application or use terminal commands.
- Write only the exact output named in the current lab.
- If a source does not answer a question, write `Open question`.
- Prefer a short correct answer over a long speculative answer.
