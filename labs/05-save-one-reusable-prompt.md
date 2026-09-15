# Lab 5: Save One Reusable Daily Prompt

**Time:** 10 minutes  
**Outcome:** `.github/prompts/explain-current-behavior.prompt.md`

## Why this matters

Analysts often ask the same kind of question in different projects. A prompt
file stores the repeated instructions, so next time you provide only the new
target.

## Step 1: Create the prompt file (5 min)

In the Explorer, create `.github/prompts/explain-current-behavior.prompt.md`
inside `travel-insurance-workshop` and paste:

```markdown
---
description: Explain current behavior for a system analyst
---

Explain the supplied target in concise business language.

Return:
1. One-sentence purpose.
2. Inputs and outputs.
3. Maximum five implemented rules with exact evidence.
4. Maximum three open questions.

Do not infer business rationale or requested behavior from code.
```

The prompt contains no travel-insurance values, so it can be reused with
another application.

## Step 2: Try it (3 min)

1. Start a new chat.
2. Type `/` and choose **explain-current-behavior**.
3. Add only `starter-app/src/travelQuote.js`.
4. Submit the prompt.

## Step 3: Compare the effort (2 min)

Compare this request with Lab 1:

- Which instructions did you no longer need to type?
- Was the output still small and predictable?
- Could the same prompt work with another system?

## What good looks like

The prompt is short, generic, manually reusable, and requests an evidence check.

## GitHub documentation

- [Your first prompt file](https://docs.github.com/en/copilot/tutorials/customization-library/prompt-files/your-first-prompt-file)

## Continue

[Continue to Lab 6: Check a Simple Design](06-check-a-simple-design.md)
