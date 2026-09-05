# Lab 2: GitHub Copilot Features & Capabilities

**Time:** 20 minutes

## Goal

Choose the smallest Copilot workflow and context that fits an analysis task.

## 1. Ask mode: understand (6 min)

Ask Copilot:

```text
In `starter-app/src/orderService.js`, explain how membership affects the final total.
Show the function call sequence. Do not modify files.
```

Use Ask mode when the outcome is information rather than a code change.

## 2. Focused context: derive rules (7 min)

Select `discountRate` in `starter-app/src/orderService.js` and request:

```text
Convert only the selected code into a business-rules table with:
rule ID, condition, outcome, source, and confidence.
Do not modify files or add rules not present in the selection.
```

Review whether every row has evidence.

## 3. Agent workflow: coordinate analysis (5 min)

In Agent mode, request:

```text
Inspect `docs/stakeholder-request.md` and `starter-app/src`.
Plan how to compare requested and current behavior.
Do not edit files or run commands. Name the sources you would inspect,
the deliverables you would produce, and the questions you expect to raise.
```

Inspect the plan. Do not implement it yet.

## 4. Match feature to task (2 min)

| Need | Good starting point |
|---|---|
| Explain a function | Ask |
| Extract rules from a selected function | Focused selection |
| Compare requirements across several sources | Agent |
| Draft a structured document | Chat plus a template |

**Checkpoint:** You can explain why more autonomy is not always better.
