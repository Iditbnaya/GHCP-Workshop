# Lab 4: Create One Clear User Story

**Time:** 15 minutes  
**Outcome:** `workshop-output/user-story.md`

## Why this matters

A user story turns one requested outcome into something a product owner,
designer, and developer can discuss. It should not hide decisions that the
stakeholder has not made.

## Step 1: Choose one request (2 min)

Open `references/customer-request.md` and find **TR-02**:

> The traveler sees one total premium and a simple explanation of the price.

Use only this request and the verified product snapshot.

## Step 2: Understand acceptance criteria (3 min)

Acceptance criteria describe something observable:

- **Given** the starting situation.
- **When** the traveler performs an action.
- **Then** the traveler sees a result.

They do not describe coding tasks or invent missing policy.

## Step 3: Create the story (7 min)

In Agent mode, add `references/customer-request.md` and
`workshop-output/product-snapshot.md`, then ask:

```text
Create one clear user story for TR-02.

Save it to `workshop-output/user-story.md` using exactly:
- Title
- As a / I want / So that
- Three Given/When/Then acceptance criteria
- Current pricing rules needed by the story
- Maximum three open questions
- Sources
- Readiness: Ready for review or Needs clarification

Use business language. Do not add payment plans, cover details, systems, or
messages not supported by the sources.
```

## Step 4: Review together (3 min)

Check:

- Is the traveler the actor?
- Can each acceptance criterion be observed?
- Is the total price separated from an explanation of the price?
- Are missing coverage details still open questions?
- Does every claim cite TR-02 or the snapshot?

## What good looks like

The story fits on one screen, has three testable outcomes, and makes uncertainty
visible.

## GitHub documentation

- [Prompt engineering for GitHub Copilot Chat](https://docs.github.com/en/copilot/concepts/prompting/prompt-engineering)

## Continue

[Continue to Lab 5: Save One Reusable Prompt](05-save-one-reusable-prompt.md)
