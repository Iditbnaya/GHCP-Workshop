# GitHub Copilot Prompt Cheat Sheet

## A reliable prompt shape

```text
Goal: <one analysis deliverable>
Context: <specific business request, files, selection, or symbols>
Requirements:
- <questions the output must answer>
- <scope limit>
- <required format and evidence>
Validation: <how claims and diagrams should be checked>
```

## Useful beginner prompts

### Explain

```text
Explain the business behavior implemented by `calculateOrder` for a system analyst.
Trace one example input through the function.
Cite the relevant file, function, and calculation.
Separate rules from validation and exceptions.
Do not modify files.
```

### Analyze

```text
Analyze only `starter-app/src/orderService.js`.
List implemented business rules, validations, edge cases, and ambiguities.
For each item, cite the function and explain the evidence.
Do not make changes.
```

### Derive candidate requirements

```text
Using `docs/stakeholder-request.md` and `starter-app/src/orderService.js`,
create a requirements gap table with requested behavior, current behavior,
gap, evidence, and open question. Do not invent missing decisions.
```

### Draft a functional specification

```text
Draft a functional specification using `FUNCTIONAL_SPEC_TEMPLATE.md`.
Use only verified source material. Mark inferred content as an assumption
and unresolved decisions as open questions. Do not modify source code.
```

### Generate a diagram

```text
Create a Mermaid sequence diagram of order calculation.
Include only verified actors and calls. After the diagram, provide an
evidence table mapping every message to a file and function.
```

## Context discipline

- Start with one business question and the smallest relevant sources.
- Start a new chat when the goal changes.
- Remove repeated background information.
- Ask for a compact output format.
- Split discovery, requirements, specification, diagrams, and review into separate steps.
- Ask for tables and traceability instead of long narrative summaries.

## Verification reminders

- Generated requirements can sound authoritative without approval.
- Source code shows implemented behavior, not necessarily intended behavior.
- Tool calls can modify files or systems; use read-only actions for analysis.
- The workshop does not require terminal commands or code execution.
- MCP servers extend the trust boundary; use approved servers only.
- Business-owner and developer review remain necessary.
