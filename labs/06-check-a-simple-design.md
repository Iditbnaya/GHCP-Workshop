# Lab 6: Check a Simple Design Without Guessing

**Time:** 15 minutes  
**Outcome:** `workshop-output/design-check.md`

## Why this matters

A system analyst checks whether a proposed screen represents the requested
behavior. The goal is not to judge whether the screen is attractive. The goal
is to connect visible evidence to requirement IDs.

## Step 1: Read the two small sources (3 min)

Open:

- `references/sample-screen.md` - what is visible in the proposed screen.
- `references/design-checklist.md` - six expected design outcomes.

Do not use the customer request or source code in this first comparison. Keeping
the context small makes the result easier to verify.

## Step 2: Create the coverage table (6 min)

In Agent mode, add only the two files above and ask:

```text
Compare `references/sample-screen.md` with every row in
`references/design-checklist.md`.

Save `workshop-output/design-check.md` with:
| ID | Expected | Visible evidence | Status | Gap |

Use exactly six rows and only Covered, Partial, Missing, or Cannot determine
from this screen. A Covered or Partial row must name a visible section.

After the table, add exactly three recommended design changes. Each change must
cite a checklist ID. Do not add technical implementation or visual preferences.
```

## Step 3: Review the outcome (3 min)

Expected observations:

- `DES-01`, `DES-02`, `DES-04`, and `DES-06` have visible evidence.
- `DES-03` is Partial because a price appears without an explanation.
- `DES-05` cannot be proven from the default screen.
- Every recommendation cites an ID.

## Step 4: Optional Figma connection (3 min)

If Figma design generation and an approved Figma MCP server are already
available:

1. Use `references/figma-brief.md` to create one screen.
2. Select the generated frame and copy its link.
3. Repeat the same six-row comparison using Figma read tools instead of
   `sample-screen.md`.

Do not configure an MCP server during this lab. The text-based screen
provides the complete core exercise.

## What good looks like

The result is a six-row traceability table that separates visible evidence from
behavior a static screen cannot prove.

## GitHub documentation

- [Extending GitHub Copilot Chat with MCP servers](https://docs.github.com/en/copilot/how-tos/provide-context/use-mcp-in-your-ide/extend-copilot-chat-with-mcp)

## Workshop complete

[Return to the workshop guide](../WORKSHOP.md)
