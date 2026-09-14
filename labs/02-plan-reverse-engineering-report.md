# Lab 2: Plan and Create a Reverse-Engineering Report

**Time:** 20 minutes

## Goal

Use Plan mode to create and review an evidence-based reverse-engineering plan
for the digital motor-insurance application, then implement it as a reviewable
Markdown report with verified diagrams.

## Connection to real work

**Real task:** Turn initial code investigation into current-state documentation
that developers, analysts, and product owners can review.

**Uses:** Lab 1 findings, `starter-app/src`,
`references/stakeholder-request.md`, and `references/diagram-guide.md`.

**Produces:** `workshop-output/reverse-engineering-report.md` for verification
in Lab 3.

## 1. Open Plan mode (3 min)

1. Open Copilot Chat.
2. Select **Plan** mode.
3. Confirm that the workshop root is open in VS Code.

Plan mode is useful when the task has multiple analysis steps and you want to
review the proposed approach before any work begins.

## 2. Request a reverse-engineering plan (5 min)

Add `#starter-app`, `references/stakeholder-request.md`, and
`references/diagram-guide.md` as context, then ask:

```text
Create a plan to reverse engineer the code in #starter-app for a system analyst
and produce `workshop-output/reverse-engineering-report.md`.

The plan must explain how you will:
- map each source file, exported function, and dependency,
- trace the motor-insurance quote calculation from input to output,
- extract current business rules, validations, and exception behavior,
- identify assumptions, ambiguities, and missing documentation,
- create a current-state calculation flowchart and sequence diagram,
- create a proposed context diagram from `references/stakeholder-request.md`,
- map every report statement and diagram element to evidence.

For every step, name the files or functions to inspect, the evidence to collect,
and the report section to produce. Do not execute the plan yet. Never modify
`starter-app` or `references`, and do not run the application. The only
permitted write is `workshop-output/reverse-engineering-report.md`.
```

## 3. Review the proposed plan (3 min)

Check whether the plan:

- Starts with a bounded inventory before detailed analysis.
- Names `index.js`, `quoteService.js`, and `formatters.js`.
- Separates implemented behavior from inferred business intent.
- Includes inputs, calculations, validation, errors, outputs, and dependencies.
- Requires file and function evidence for every conclusion.
- Treats diagrams as outputs that must be verified against evidence.
- Creates all of these report sections: source map, calculation trace, current
  rules, validation and exceptions, gaps and questions, diagrams, and evidence.
- Avoids source changes, terminal commands, and application execution.

Do not start implementation until the plan has passed this review.

## 4. Improve the plan (2 min)

If evidence, sequencing, or deliverables are unclear, ask:

```text
Revise the plan only. Add an evidence checkpoint after each analysis step,
require Current, Requested, Assumed, and Open question labels, and state how a
reviewer will detect unsupported assumptions. Do not execute it yet.
```

Compare the first and revised plans. Identify one change that makes the analysis
safer or easier to verify.

## 5. Start implementation (7 min)

When the plan is ready, select **Start implementation**. Copilot may present
implementation choices whose wording varies by product version:

| Choice | How Copilot works | Best fit |
|---|---|---|
| **Implement interactively** | Copilot follows the plan but pauses at useful checkpoints so you can review results, answer questions, and redirect the work. | New, ambiguous, or high-risk work where the analyst wants close control. |
| **Implement in autopilot** | Copilot continues through the plan with minimal intervention and stops when it completes the task, reaches a blocker, or needs permission or input. | Well-defined, low-risk work whose scope and validation are already clear. |

For this workshop, choose **Implement interactively**. This lets you inspect
Copilot's evidence and correct an unsupported conclusion before it continues.

Before starting, confirm that the implementation instructions still say:

- Read source files without changing them.
- Write only `workshop-output/reverse-engineering-report.md`.
- Do not run the application.
- Include the reverse-engineering outputs and Mermaid diagrams in the report.

Allow Copilot to complete the report, then open it in Markdown Preview. Check
that each diagram renders and that every important element has evidence or an
explicit `Requested`, `Assumed`, or `Open question` label.

Do not choose autopilot only because it is faster; autonomy does not reduce the
analyst's responsibility to verify the result.

**Checkpoint:** You can create and review a plan, choose an appropriate
implementation mode, and verify that execution follows the approved scope.
