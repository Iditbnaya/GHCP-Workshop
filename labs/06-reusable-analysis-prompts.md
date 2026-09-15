# Lab 6: Build a Reusable Analysis Prompt Toolkit

**Time:** 10 minutes

## Goal

Create reusable prompts for common system-analysis tasks that work with any
codebase, reduce repeated instructions, and keep context focused.

## Connection to real work

**Real task:** Reuse the successful workshop methods on the next application,
request, or user story without rebuilding every prompt.

**Uses:** The tasks and outputs from Labs 1-5 plus
`references/prompt-library.md`.

**Produces:** Four generic prompt files that participants can take to other
projects. One is tested against the same SR-03 sources used for the user story.

## 1. Understand what saves time and tokens (2 min)

A prompt file stores the instructions that stay the same. For each use, the
analyst supplies only the changing target and the smallest relevant sources.

Reusable prompts help by:

- Avoiding repeated role, format, evidence, and safety instructions.
- Requesting compact, predictable outputs.
- Limiting context to the relevant folder, file, function, or requirement.
- Making the same analysis easier to repeat and review.

They do not guarantee fewer tokens. Adding the entire workspace or requesting
unnecessary detail can still make a reusable prompt expensive and inaccurate.

## 2. Create the daily prompt toolkit (5 min)

Review
[`references/prompt-library.md`](../references/prompt-library.md), then ask
Agent mode:

```text
Using `references/prompt-library.md`, create these generic VS Code prompt files:

- `.github/prompts/map-unfamiliar-system.prompt.md`
- `.github/prompts/trace-business-rule.prompt.md`
- `.github/prompts/compare-request-to-code.prompt.md`
- `.github/prompts/draft-user-story.prompt.md`

Each prompt must:
- accept a target or named sources instead of referring to this insurance case,
- have one analysis goal and a compact output format,
- request exact file, function, or document evidence,
- separate Current, Requested, Assumed, Gap, and Open question information
  where relevant,
- use the smallest context supplied by the user,
- include a clear validation step,
- avoid application changes and execution.

Use the current VS Code `.prompt.md` format. Create only these four files.
```

Check that the generated files contain no insurance-specific values, actors, or
rules. They should be portable to another project.

## 3. Use one prompt (3 min)

Start a new chat, type `/`, and select **compare-request-to-code**. Supply only
`references/stakeholder-request.md`, `starter-app/src/quoteService.js`, and
request ID `SR-03`.

Compare the result with `workshop-output/user-story.md` and the verified
reverse-engineering report. Confirm that it is compact, distinguishes current
calculation output from the requested customer journey, and does not need you
to repeat the full analysis instructions. If the prompt is not listed, reload
the VS Code window after the lab.

**Checkpoint:** You leave the workshop with reusable prompts for mapping a
system, tracing a rule, comparing a request with code, and drafting a user
story.

## Optional extension: Add and use the Awesome Copilot PRD skill

This optional exercise is outside the 10-minute lab. Use it only if community
skills are allowed by organizational policy.

The [Awesome Copilot PRD skill](https://awesome-copilot.github.com/skill/prd/)
creates a broad Product Requirements Document. It is useful when starting a
feature or turning a vague product idea into a structured draft. It is broader
than the user-story agent from Lab 5 because it also covers the problem,
success measures, scope, non-goals, architecture, integrations, risks, and
roadmap.

### 1. Review before adding

Open the skill page and its
[source `SKILL.md`](https://github.com/github/awesome-copilot/blob/main/skills/prd/SKILL.md).
Check:

- The repository and publisher.
- The discovery questions it requires.
- The document sections it generates.
- Whether any instruction conflicts with organizational policy.
- Whether the strict PRD structure fits the task.

This is a community-contributed skill. Do not add it only because it appears in
a public collection.

### 2. Add it to this project

Without using the terminal:

1. Create the folder `.github/skills/prd`.
2. Create `.github/skills/prd/SKILL.md`.
3. Copy the reviewed contents of the source `SKILL.md` into the new file.
4. Save the file.
5. Reload the VS Code window if Copilot does not discover the skill.

Keeping the skill under `.github/skills` makes it project-specific. Other
projects do not receive it automatically.

### 3. Use the skill

Start a new chat in **Agent** mode. Provide
`references/stakeholder-request.md` and
`workshop-output/reverse-engineering-report.md` as context, then ask:

```text
Use the PRD skill to prepare a draft Product Requirements Document for the
requested digital motor-insurance quote-and-buy journey.

Before drafting, ask only questions that are not answered by the supplied
sources. Cite the source for every current behavior and requested outcome.
Mark unsupported success metrics, personas, technical solutions, integrations,
architecture, and roadmap decisions as TBD or assumptions to verify.
Do not present the PRD as approved organizational policy.
Save the draft only to `workshop-output/prd-draft.md`.
```

Answer the skill's discovery questions only when the available sources support
the answer. Otherwise respond `TBD — decision owner required`.

### 4. Review the PRD

- Did it ask questions before drafting?
- Are proposed solutions clearly separated from current behavior?
- Were KPIs, personas, integrations, or roadmap items invented?
- Does every user story trace to a source?
- Are privacy, underwriting, payment, and consent gaps still visible?

Use the **user-story agent** for one focused, traceable story. Use the **PRD
skill** when a broader product document is genuinely needed and enough
stakeholder information is available.

## GitHub documentation

- [Your first prompt file](https://docs.github.com/en/copilot/tutorials/customization-library/prompt-files/your-first-prompt-file)
- [About agent skills](https://docs.github.com/en/copilot/concepts/agents/about-agent-skills)

## Continue

[Continue to Lab 7: Create, Check & Improve a Figma Design](07-figma-requirements-cross-check.md)
