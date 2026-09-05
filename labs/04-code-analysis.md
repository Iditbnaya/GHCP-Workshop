# Lab 4: Using Copilot to Analyze Existing Code

**Time:** 20 minutes

## Goal

Build an evidence-based current-state analysis and convert it into candidate requirements.

## 1. Map the codebase (6 min)

Ask:

```text
Analyze the `starter-app` folder without changing anything.
Return a table with each source file, its responsibility, public exports,
and direct dependencies. Cite exact file paths and function names.
```

Verify at least two claims by opening the cited files.

## 2. Trace behavior (6 min)

Ask:

```text
Trace this input through the application:
membership = "gold"
items = [{ name: "Keyboard", price: 100, quantity: 2 }]

Show intermediate subtotal, discount, tax, and total.
Tie each step to the responsible function. Do not modify files.
```

Calculate the result yourself and compare it with Copilot's answer.

## 3. Compare requested and current behavior (5 min)

Ask:

```text
Compare `docs/stakeholder-request.md` with
`starter-app/src/orderService.js`.
Return a table with requested behavior, current behavior, status
(aligned, gap, or unclear), evidence, and open question.
Do not invent decisions or modify files.
```

Then classify each statement as:

- Current implemented behavior
- Requested future behavior
- Assumption
- Open question

Challenge unsupported claims with:

```text
For each claim, quote the smallest relevant code fragment and explain
whether the conclusion is certain or inferred.
```

## 4. Draft candidate requirements (3 min)

Ask Copilot to rewrite only the verified and requested behaviors as uniquely identified `shall` statements with acceptance criteria. Keep unresolved items in a separate questions list.

**Checkpoint:** Your analysis distinguishes implementation, request, assumption, gap, and open question.
