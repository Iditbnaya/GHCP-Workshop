# Lab 5: Create a User-Story Custom Agent

**Time:** 15 minutes

## Goal

Create and test a reusable custom agent that converts verified analysis into one
traceable user story without inventing missing business decisions.

## Connection to real work

**Real task:** Convert one analyzed stakeholder outcome into a reviewable backlog
item while keeping unresolved decisions visible.

**Uses:** `references/stakeholder-request.md` and the verified
`workshop-output/reverse-engineering-report.md`.

**Produces:** A reusable user-story agent and
`workshop-output/user-story.md`. Lab 7 checks whether the Figma design
represents this story.

## 1. Define the agent's responsibility (3 min)

The agent creates user stories; it does not approve requirements or design the
solution. Every output must contain:

- A short title.
- `As a / I want / So that`.
- Observable Given/When/Then acceptance criteria.
- Relevant business rules and validation.
- Assumptions and open questions.
- Source traceability.
- A readiness result: `Ready for review` or `Needs clarification`.

If the actor, goal, value, rule, or expected outcome is not supported by a
source, the agent must ask a question or label an assumption.

## 2. Create the custom agent (5 min)

In Agent mode, write:

```text
Create `.github/agents/user-story-analyst.agent.md` using the current VS Code
custom-agent format.

The agent is responsible for creating one evidence-based user story at a time
for a system analyst. It must:
- use only the sources provided by the user,
- distinguish Current, Requested, Assumed, and Open question information,
- produce a title, As a/I want/So that statement, Given/When/Then acceptance
  criteria, business rules, validation, assumptions, questions, traceability,
  and a readiness result,
- never invent an actor, business value, rule, message, integration, or policy,
- mark the story Needs clarification when a testable outcome is missing,
- use business language suitable for product-owner review,
- never modify application source or execute the application.

Create only this agent file. If exact tool names cannot be verified, omit the
`tools` frontmatter field instead of guessing.
```

Open the generated file and confirm that its description clearly says when the
agent should be selected. If it does not appear in the agent selector, reload
the VS Code window after the file is saved.

## 3. Test the agent (5 min)

Start a new chat, select the **user-story-analyst** agent, and provide
`references/stakeholder-request.md` plus
`workshop-output/reverse-engineering-report.md` as context. Ask:

```text
Create one user story for SR-03, the requested display of an annual premium and
a monthly illustration. Preserve the stakeholder request ID and save the story
as `workshop-output/user-story.md`.
Use the reverse-engineering report to distinguish current calculation behavior
from the requested customer journey.
Do not assume that the monthly illustration is a payment plan.
```

Approve only the named output file. Check that the agent does not turn the
unresolved payment arrangement into acceptance criteria.

## 4. Review the result (2 min)

- Can every statement be traced to a named source?
- Are the acceptance criteria observable rather than technical tasks?
- Are unresolved decisions visible?
- Does the readiness result match the remaining gaps?

**Checkpoint:** You created a reusable user-story agent and verified that it
produces traceable stories without hiding missing decisions.

## Continue

[Continue to Lab 6: Build a Reusable Analysis Prompt Toolkit](06-reusable-analysis-prompts.md)
