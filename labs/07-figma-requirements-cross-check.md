# Lab 7: Create, Check & Improve a Figma Design

**Time:** 30 minutes

## Goal

Create a digital-insurance landing page with the Figma agent, use the official
Figma MCP server to compare it with organizational requirements, and turn the
verified gaps into a revision prompt for the Figma agent.

## Connection to real work

**Real task:** Check whether a proposed UX design represents both the product
request and cross-cutting organizational requirements before development.

**Uses:** `references/stakeholder-request.md`, the SR-03 user story from Lab 5,
`references/figma-agent-brief.md`, and
`references/organizational-requirements.md`.

**Produces:** Product and organizational coverage reports, a traceable Figma
revision prompt, and a revised design for stakeholder review.

The exercise deliberately begins with a green design while the workshop brand
requirement specifies an orange hero. The mismatch makes the cross-check and
revision easy to observe.

## 1. Understand the workflow (2 min)

```text
Initial prompt
    ↓
Figma agent creates the first design
    ↓
Figma MCP reads the selected frame
    ↓
Copilot compares the frame with the organizational requirements
    ↓
Copilot creates a revision prompt from verified gaps
    ↓
Figma agent creates the revised design
```

The analyst does not ask Copilot to redesign the page based on taste. Every
requested change must map to a requirement ID.

## 2. Create the initial green design (5 min)

1. Open [Figma Design](https://www.figma.com/design/) and sign in.
2. Open [figma.new](https://figma.new) to create a new Figma Design file.
3. Open
   [`references/figma-agent-brief.md`](../references/figma-agent-brief.md).
4. Paste its prompt into the available Figma design-generation agent.
5. Name the page `Digital Insurance`.
6. Name the generated desktop frame `Landing Page - Initial Green`.

If Figma design generation is unavailable for your account, open the
[workshop starter design](https://www.figma.com/design/iDKJGKSaPmsZeOzfyc5AdE/digital-insurance-product?node-id=0-1)
and duplicate it to your Figma drafts.

Do not correct the green color yet. It is an intentional requirement gap.

## 3. Connect the official Figma MCP server (7 min)

First confirm that your organization permits the official Figma remote MCP
server.

1. In VS Code, open the Command Palette with **Ctrl+Shift+P**.
2. Run **MCP: Open User Configuration**.
3. In `mcp.json`, add:

   ```json
   {
     "servers": {
       "figma": {
         "type": "http",
         "url": "https://mcp.figma.com/mcp"
       }
     }
   }
   ```

   Preserve any existing `inputs` section or other server entries.

4. Save the file.
5. Locate the `figma` server and select **Start**.
6. Sign in to Figma in the opened browser window and authorize the connection.
7. Return to VS Code and confirm that the server is running.

If the UI differs, use Figma's official
[VS Code MCP setup guide](https://help.figma.com/hc/en-us/articles/39890361040535-VS-Code-and-Figma-Set-up-the-MCP-server).

## 4. Prove that Copilot can read the frame (3 min)

1. In Figma, select `Landing Page - Initial Green`.
2. Choose **Copy link to selection**.
3. In VS Code, open Copilot Chat in **Agent** mode.
4. Open **Configure Tools** and enable only the required Figma read tools.
5. Ask:

   ```text
   Use Figma read tools to inspect only this selected frame:
   <paste link to Landing Page - Initial Green>

   Return the Figma file, page, frame, and top-level layer names. Also report
   the hero background color. Do not modify the Figma file.
   ```

Continue only if the answer names the selected frame, its layers, and the green
hero color using Figma tool evidence.

## 5. Compare the design with the requirements (5 min)

1. First compare the selected frame with `SR-01`, `SR-02`, and `SR-03` in
   [`references/stakeholder-request.md`](../references/stakeholder-request.md),
   plus
   `workshop-output/user-story.md`.
2. Ask:

   ```text
   Use Figma read tools to compare the selected frame with SR-01, SR-02, and
   SR-03 in `references/stakeholder-request.md` and with
   `workshop-output/user-story.md`.

   Return:
   | Source ID | Expected product behavior | Matching Figma layer | Status | Gap |

   Use only Covered, Partial, Missing, or Cannot determine from design.
   Quote a Figma layer for Covered or Partial results. Do not infer behavior
   that is not visible in the static frame. Save the result to
   `workshop-output/figma-product-coverage-initial.md`.
   ```

3. Then open
   [`references/organizational-requirements.md`](../references/organizational-requirements.md).
4. Treat rows marked `[TO VERIFY]` as training assumptions, not approved
   organizational wording.
5. Copy the cross-check prompt from that file.
6. Add the selected Figma link and:

   ```text
   Use Figma read tools only. Save the coverage table to
   `workshop-output/figma-coverage-initial.md`.
   ```

7. Review both results:
   - `SR-03` is `Partial` because the initial design shows a monthly
     illustration but no annual premium.
   - There is one row for each of the 25 requirement IDs.
   - Every `Covered` or `Partial` row names a Figma layer.
   - `BRD-04` identifies the green hero as a gap against the required orange.
   - Behavior a static screen cannot prove is `Cannot determine from design`.
   - Findings address requirements, not visual preference.

## 6. Create a revision prompt from verified gaps (4 min)

Ask Copilot:

```text
Using `references/organizational-requirements.md`,
`workshop-output/figma-coverage-initial.md`, and the original prompt in
`references/figma-agent-brief.md`, plus
`workshop-output/figma-product-coverage-initial.md` and
`workshop-output/user-story.md`, create a revision prompt for the Figma agent.

Include only Missing or Partial requirements that can be represented in a
static design. For every requested change, include the requirement ID and name
the existing Figma layer to update. Explicitly change the hero background from
green to the required orange #F58220 for BRD-04.

Preserve elements already marked Covered. Do not invent brand rules, legal
copy, validation behavior, or technical implementation. Put unresolved wording
in clearly named placeholders. Tell the Figma agent to duplicate the initial
frame and name the copy `Landing Page - Revised Orange`.

Save only the prompt to `workshop-output/figma-revision-prompt.md`.
```

Review the prompt before using it. Remove any change that does not cite a
requirement ID.

## 7. Revise and verify the design (4 min)

1. Paste `workshop-output/figma-revision-prompt.md` into the Figma agent.
2. Confirm that it creates `Landing Page - Revised Orange` without replacing
   the initial frame.
3. Select the revised frame and choose **Copy link to selection**.
4. Ask Copilot to rerun the requirements cross-check against the revised link
   and save it to `workshop-output/figma-coverage-revised.md`.
5. Compare the initial and revised results:
   - `BRD-04` should now be Covered.
   - Already Covered requirements should not regress.
   - Requirements that cannot be proven from a static design should remain
     `Cannot determine from design`.

**Checkpoint:** You used requirements evidence to move from an initial design
to a targeted revision prompt and verified the result without confusing design
preference with organizational policy.

## Troubleshooting

| Problem | What to check |
|---|---|
| Figma design generation is unavailable | Duplicate the workshop starter design linked in step 2. |
| Figma authorization is blocked | Stop and contact the organization administrator; do not bypass the policy. |
| Figma tools are not listed | Confirm the MCP server is running, then reopen **Configure Tools**. |
| Copilot reads the wrong content | Copy the link to the selected frame, not the file URL. |
| The response is too large | Read one frame and request top-level structure first. |
| The revised design changes unrelated elements | Restore the duplicate and narrow the prompt to named requirement IDs and layers. |

## Workshop complete

[Return to the participant guide](../WORKSHOP.md)
