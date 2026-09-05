# Lab 1: VS Code & GitHub Copilot Fundamentals

**Time:** 20 minutes

## Goal

Learn how Copilot uses the current document, selection, chat, and workspace context for system analysis.

## 1. Orient yourself (5 min)

1. Open the workshop root in VS Code.
2. Locate Explorer, Search, Markdown Preview, and Copilot Chat.
3. Open `starter-app/src/orderService.js`.
4. In Copilot Chat, ask:

```text
Describe the business purpose of the currently open file in three bullets.
Cite the functions that support your answer. Do not modify files.
```

Check whether the response names the functions that are actually present.

## 2. Use a selection as context (7 min)

1. Select only the `discountRate` function.
2. Ask Copilot:

```text
Explain the selected business rule using one concrete customer example.
Separate verified behavior from assumptions. Do not edit the file.
```

3. Compare this focused answer with:

```text
Explain the application.
```

Discuss which prompt produced a more useful answer and why.

## 3. Compare technical and functional explanations (5 min)

Ask:

```text
Describe `discountRate` twice:
1. As a technical explanation for a developer.
2. As a business rule for a functional specification.
Keep each explanation under 80 words and do not modify files.
```

Identify which details belong in a functional specification and which do not.

## 4. Close the loop (3 min)

Ask:

```text
What context did you use for your previous answer?
List only files or selections you relied on.
```

**Checkpoint:** You can distinguish current-file, selected-code, and workspace context.
