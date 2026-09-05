# Lab 7: Token Optimization & Prompt Best Practices

**Time:** 15 minutes

## Goal

Improve answer quality while avoiding unnecessary context and repeated output.

> Token counts are model-dependent. The practical goal is relevant context, not an arbitrary minimum.

## 1. Diagnose a vague prompt (3 min)

Vague prompt:

```text
Make this code better.
```

Problems: unclear goal, unknown scope, no constraints, and no validation criteria.

## 2. Rewrite with four ingredients (5 min)

Use:

```text
Goal: Produce current-state business rules for order calculation.
Context: Only `starter-app/src/orderService.js`.
Constraints: Separate calculations, validation, exceptions, and assumptions.
Validation: Cite every rule to a function and flag unsupported conclusions.
```

Ask Copilot for a compact analysis table, not code changes.

## 3. Reduce context deliberately (4 min)

Compare:

```text
Analyze the entire workspace and tell me everything about the system.
```

with:

```text
Extract the membership-discount rules from `discountRate`.
Return a table with condition, outcome, evidence, and open question.
Do not modify files.
```

Discuss why the second prompt is cheaper to process, easier to verify, and less likely to drift.

## 4. Build your reusable prompt (3 min)

Write one prompt for your real work using:

```text
Goal: <requirement, specification section, analysis, or diagram>
Context: <smallest relevant business and technical sources>
Requirements: <format, scope, labels, and evidence>
Validation: <traceability and reviewer checks>
```

Remove any sentence that does not affect the expected output.

**Checkpoint:** Your prompt has one goal, bounded context, explicit constraints, and a verification step.
