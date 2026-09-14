# Figma Agent Brief — Landing Page for Cross-Check Demo

Open [Figma Design](https://www.figma.com/design/) or start a new file at
[figma.new](https://figma.new). If design generation is available, paste the
prompt below into that feature. Otherwise, open the
[workshop starter design](https://www.figma.com/design/iDKJGKSaPmsZeOzfyc5AdE/digital-insurance-product?node-id=0-1)
and duplicate it to your Figma drafts.

Paste the prompt below into the Figma agent. It is written so the result is
deliberately **good but not perfect**: some requirements are met, some partially,
and a few are missing on purpose. That is what makes the GitHub Copilot
cross-check in the next step produce real findings instead of "everything looks
fine".

Keep it to **one screen in a clean file**. Do not build a full design system. A
large Figma file will overload the MCP response.

## Prompt for the Figma agent

```text
Create a single desktop landing page (1440px wide) for a digital insurance product.

Product: an online quote-and-buy flow for car insurance, aimed at private
customers in Israel. Hebrew, right-to-left layout.

Sections, top to bottom:
1. Header with logo placeholder, main navigation (4 items), and a login link.
2. Hero: headline, one supporting sentence, and a primary call-to-action
   button "קבלת הצעת מחיר".
3. A short lead form with these fields: full name, mobile phone, ID number,
   vehicle license plate, and a consent checkbox for marketing contact.
4. Three benefit cards with icon placeholder, title, and one line of text.
5. A price illustration block showing a sample monthly premium.
6. Footer with contact details and links.

Design constraints:
- Hebrew RTL throughout, including form field alignment.
- Use green #168C64 as the hero background and primary accent, with a neutral
  page background.
- Buttons and inputs at consistent sizes.
- Name every layer meaningfully (no "Frame 42", no "Rectangle 7").

Produce only the default state of the page.
```

## Why this prompt

| Choice | What it sets up for the cross-check |
|---|---|
| "Produce only the default state" | Error states, validation messages and loading states will be missing — the classic gap an analyst must catch. |
| ID number + license plate fields | Regulated personal data. Raises consent, retention and masking questions the design cannot answer on its own. |
| A consent checkbox, but no wording specified | The agent will invent placeholder text — a real finding, not a styling comment. |
| "Sample monthly premium" | A price shown without a disclaimer is a compliance issue in insurance marketing. |
| Green #168C64 hero | Deliberately conflicts with organizational requirement BRD-04, which requires orange #F58220. |
| Named layers | The MCP output stays readable. Unnamed layers make the cross-check unusable. |

## After the page is generated

1. Isolate the screen in its own Figma file or page before connecting the MCP.
2. Select only the landing-page frame and use **Copy link to selection**. Reading
   the complete file can return too much unrelated design context.
3. Name the generated frame `Landing Page - Initial Green`.
4. Run the cross-check prompt in `organizational-requirements.md` against this screen.
5. Expect roughly 5–8 genuine gaps. If you get zero, the requirements file is
   too vague; if you get thirty, the selected scope was too broad and Copilot
   is commenting on pixels instead of requirements.

## Access check

Access to the Figma MCP is controlled by the Figma organization administrator
and may be disabled in some organizations. Before Lab 7, confirm that your
account can connect to the official remote endpoint
`https://mcp.figma.com/mcp`. Do not connect an unapproved server.
