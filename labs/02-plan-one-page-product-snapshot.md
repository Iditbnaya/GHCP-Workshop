# Lab 2: Plan Mode - Create a One-Page Product Snapshot

**Time:** 20 minutes  
**Outcome:** `workshop-output/product-snapshot.md`

## Why this matters

A useful analyst summary should help a colleague understand the product
quickly. It should not look like a complete technical specification. In this
lab, strict limits keep the output focused and readable.

## Step 1: Start with Plan mode (3 min)

1. Open a new Copilot Chat.
2. Select **Plan** mode.
3. Add these three sources:
   - `#src`
   - `#customer-request.md`
   - Your verified Lab 1 answer

## Step 2: Request a small plan (5 min)

Paste:

```text
Plan how to create a clear, easy-to-read product snapshot from the supplied
travel-insurance sources.

Use exactly four plan steps:
1. Understand the sample journey.
2. Extract implemented pricing and validation rules.
3. Compare current behavior with the customer request.
4. Create and check one Markdown file.

The final output must be `workshop-output/product-snapshot.md` and use exactly:

# Travel Quote - Product Snapshot
> At a glance: one sentence.

## Traveler journey
Four numbered steps.

## Information entered
A table with at most five rows.

## Implemented pricing rules
A table with at most five rows and code evidence.

## Sample quote
The ₪126 calculation in at most four numbered steps.

## Current versus requested
A table with at most five rows and Current, Requested, or Gap labels.

## Open questions
At most three questions.

Do not include architecture, APIs, dependencies, a sequence diagram, test
cases, or implementation recommendations. Do not execute the plan yet.
```

## Step 3: Review before implementation (4 min)

Confirm that the plan:

- Has exactly four steps.
- Produces only one file.
- Uses business language.
- Keeps every requested size limit.
- Separates current code from the customer request.
- Does not add technical sections.

If the plan is still too large, ask:

```text
Shorten the plan. Keep only the four requested steps and the seven requested
sections. Remove every technical deliverable.
```

## Step 4: Create the snapshot (4 min)

Choose **Start Implementation**. Approve only
`workshop-output/product-snapshot.md`.

## Step 5: Review in Markdown Preview (2 min)

1. Open `workshop-output/product-snapshot.md`.
2. Select **Open Preview** from the editor toolbar, or press
   **Ctrl+Shift+V**.
3. Review the rendered document and confirm:

- A clear opening sentence.
- Small tables that fit on screen.
- The ₪126 example.
- Current and Requested labels.
- No more than three open questions.

If a heading, table, or list does not render clearly, correct only the Markdown
formatting. Do not change verified business content during this visual review.

## Step 6: Make it easier to read (2 min)

If a section feels difficult, ask:

```text
Simplify the wording for a system analyst using Copilot for the first time.
Keep all evidence, values, labels, and size limits unchanged.
```

## What good looks like

Someone unfamiliar with the code can understand the quote in three minutes.
The snapshot is a conversation aid, not a full specification.

## GitHub documentation

- [Using Plan mode in your IDE](https://docs.github.com/en/copilot/how-tos/chat-with-copilot/chat-in-ide#plan-mode)

## Continue

[Continue to Lab 3: Verify the Product Snapshot](03-agent-verify-the-snapshot.md)
