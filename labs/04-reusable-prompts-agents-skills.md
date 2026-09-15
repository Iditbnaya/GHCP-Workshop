# Lab 4: Create Reusable Prompts, Agents & Skills

**Time:** 20 minutes

## Goal

Turn the successful reverse-engineering workflow into three reusable Copilot
customizations: a prompt file, a custom agent, and an agent skill.

## Connection to real work

**Real task:** Standardize a repeated analysis method so a team does not rewrite
the same instructions for every project.

**Uses:** The reviewed report and process from Labs 1-3.

**Produces:** A reusable reverse-engineering prompt, system-analyst agent, and
evidence-based skill that establish the pattern used to create the focused
user-story agent in Lab 5.

## 1. Choose the right reusable asset (4 min)

| Asset | Purpose | Location |
|---|---|---|
| Prompt file | A manually invoked, repeatable task with a consistent input and output | `.github/prompts/*.prompt.md` |
| Custom agent | A reusable role with behavior, boundaries, and optional tool configuration | `.github/agents/*.agent.md` |
| Agent skill | A focused method that an agent can discover and load when the task matches | `.github/skills/<skill-name>/SKILL.md` |

A prompt is invoked by the user. A custom agent defines who performs the work.
A skill defines reusable expertise the agent can apply.

## 2. Ask Agent mode to create the assets (8 min)

In Agent mode, use the report and the workflow from Labs 1-3 as context:

```text
Create three reusable GitHub Copilot customizations for evidence-based system
reverse engineering:

1. `.github/prompts/reverse-engineer.prompt.md`
   - Manually invoked for a supplied folder or feature.
   - Requests a source map, calculation trace, rules, validations, diagrams,
     assumptions, open questions, and evidence.
2. `.github/agents/system-analyst.agent.md`
   - Defines a beginner-friendly system analyst.
   - Requires exact file/function citations and explicit evidence labels.
   - Prohibits source changes and application execution.
3. `.github/skills/evidence-based-reverse-engineering/SKILL.md`
   - Uses valid YAML frontmatter with the matching lowercase skill name and a
     description that says when the skill should be used.
   - Defines the repeatable discovery, tracing, diagramming, and verification
     method from `workshop-output/reverse-engineering-report.md`.

Use the current VS Code GitHub Copilot file conventions. Do not modify any
other files. If exact tool names cannot be verified, omit the agent's `tools`
field instead of guessing.
```

## 3. Inspect the generated files (5 min)

Check that:

- Each file has one clear responsibility.
- The prompt is manually invokable and accepts a target.
- The agent defines role, evidence standards, and write boundaries.
- The skill folder name matches its frontmatter `name`.
- The skill describes when it should activate and how results are verified.
- None of the three files contains insurance rules presented as universal facts.

## 4. Try one reusable asset (3 min)

Start a new chat. Type `/` and select the new reverse-engineering prompt, or
select the new system-analyst agent if your VS Code version exposes it. Target
`starter-app/src/quoteService.js` and request a compact rules table.

Compare the result with the report from Lab 2. If a new asset is not immediately
listed, reload the VS Code window after the lab; do not install an extension.

**Checkpoint:** You can explain when to use a prompt, custom agent, or skill and
inspect each reusable asset for scope, evidence, and safety.

## Continue

[Continue to Lab 5: Create a User-Story Custom Agent](05-user-story-custom-agent.md)
