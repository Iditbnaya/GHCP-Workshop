# Lab 6: Refactoring a Functional Specification

**Time:** 10 minutes

## Goal

Use Copilot to turn an ambiguous paragraph into a reviewable functional specification without changing code.

## 1. Inspect the draft (2 min)

Read this draft:

```text
Gold customers get a discount. The system calculates the order,
adds tax, and displays the result. We also want coupon support.
```

Identify mixed concerns and missing decisions.

## 2. Refactor the specification (5 min)

```text
Refactor the draft into:
1. verified current-state rules,
2. requested future-state requirements,
3. acceptance criteria,
4. assumptions,
5. open questions.

Use `docs/stakeholder-request.md` and `starter-app/src/orderService.js`
as evidence. Assign unique IDs. Do not invent coupon rules or modify files.
```

## 3. Review traceability (3 min)

Check that:

- Every current-state rule cites code evidence.
- Every requested requirement cites the stakeholder request.
- Coupon details remain open questions.
- Acceptance criteria are observable and testable.

**Checkpoint:** The new specification is clearer without adding unsupported business decisions.
