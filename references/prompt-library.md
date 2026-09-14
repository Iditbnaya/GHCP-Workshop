# Reusable Prompt Library for System Analysts

These prompts are domain-neutral. Use them with the smallest relevant folder,
file, function, requirement, or document. Replace bracketed values and remove
any requested output that does not support the current task.

## Map an unfamiliar system

```text
Goal: Map the current behavior of [target folder or feature].
Context: Use only the supplied code and documentation.
Output: A compact table with component, business responsibility, inputs,
outputs, dependencies, and exact evidence.
Rules: Separate verified behavior from inferred intent. Record unsupported
conclusions as assumptions or open questions.
Validation: Confirm that every row cites a file and function or document
section, and list any target area that could not be inspected.
```

## Trace a business rule

```text
Goal: Explain how [business outcome or rule] currently works.
Context: Use only [selected files, function, or feature].
Output: A table with input or condition, implemented rule, calculation or
decision, outcome, evidence, and ambiguity.
Rules: Use business language. Do not infer why the organization selected a
threshold, rate, or policy.
Validation: Recalculate any example and verify every conclusion against the
smallest relevant source.
```

## Compare a request with current code

```text
Goal: Compare [request source] with [implementation source].
Output: A table with requested behavior, current behavior, status
(aligned/gap/unclear), impact, evidence, and open question.
Rules: Label Current, Requested, Assumed, Gap, and Open question information.
Do not convert an unresolved request into an approved requirement.
Validation: Every current-state claim cites code; every requested behavior
cites the request; unsupported claims are moved to assumptions or questions.
```

## Draft one user story

```text
Goal: Create one reviewable user story for [requested outcome].
Context: Use only the supplied analysis and requirement sources.
Output: Title; As a/I want/So that; Given/When/Then acceptance criteria;
business rules; validation; assumptions; open questions; traceability; and
Ready for review or Needs clarification.
Rules: Do not invent the actor, value, rule, message, integration, or policy.
Validation: Every statement maps to a source, and every acceptance criterion is
observable.
```

## Create a verified diagram

```text
Goal: Create a [context/process/sequence/component] diagram for [scope].
Context: Use only the supplied sources.
Output: A compact Mermaid diagram followed by an evidence table for every
actor, node, message, and relationship.
Rules: Label the diagram Current or Proposed. Mark unsupported elements as
Assumed or Open question.
Validation: Remove or relabel every diagram element that lacks evidence.
```
