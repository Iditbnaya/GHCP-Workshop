# Lab 1: Ask Mode - Understand the Travel Quote

**Time:** 15 minutes  
**Outcome:** Two short, evidence-based explanations in chat.

## Why this matters

A system analyst often receives unfamiliar code and needs to answer a simple
question: **What does the product do today?** You do not need to understand the
programming syntax. Copilot can translate it into business language.

Before continuing, confirm that `.github/copilot-instructions.md` exists and
contains the stable workshop boundaries from `WORKSHOP.md`.

## Step 1: Open the right context (3 min)

1. Open Copilot Chat.
2. Select **Ask** mode.
3. Add the `starter-app` folder as context.
4. Confirm that the selected folder is inside `travel-insurance-workshop`.

Ask:

```text
Using only the selected `starter-app` folder, explain what this travel-insurance
application does in five short bullets for a new system analyst.

For every bullet, cite a file and function. If the code does not explain why a
rule exists, say "Reason not documented".
```

### Check your answer

It should mention:

- A travel-insurance quote.
- Trip length, traveler ages, destination, and adventure sports.
- One total premium.
- Validation of the supplied information.
- Evidence from `index.js` and `travelQuote.js`.

## Step 2: Explain the sample quote (6 min)

Ask:

```text
Explain the sample quote in `starter-app/src/index.js`.

Return only this table:
| Step | Simple calculation | Amount | Evidence |

Use no more than four rows. End with the total premium. Do not explain
JavaScript syntax and do not invent a business reason for a rate.
```

Check the calculation:

1. Adult: 7 days × ₪10 × 1.0 = ₪70.
2. Child: 7 days × ₪10 × 0.8 = ₪56.
3. Europe and no adventure sports add no increase.
4. Total: **₪126**.

If Copilot gives another total, ask it to recalculate from the sample input.

## Step 3: Compare two kinds of explanation (6 min)

1. Open `starter-app/src/travelQuote.js`.
2. Select only the `ageMultiplier` function.
3. Ask:

```text
Explain the selected function twice:
1. For a developer.
2. As a business rule for a system analyst.

Keep each explanation under 60 words. State that the reason for the age bands
is not documented.
```

Notice how the evidence stays the same while the language changes for the
audience.

## What good looks like

- The answers are short enough to review.
- Every rule has evidence.
- The price is ₪126.
- No explanation invents why the age bands exist.

## GitHub documentation

- [Asking GitHub Copilot questions in your IDE](https://docs.github.com/en/copilot/how-tos/chat-with-copilot/chat-in-ide)

## Continue

[Continue to Lab 2: Plan a One-Page Product Snapshot](02-plan-one-page-product-snapshot.md)
