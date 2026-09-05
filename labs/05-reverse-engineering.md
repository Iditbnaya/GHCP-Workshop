# Lab 5: Reverse Engineering & Diagram Generation

**Time:** 15 minutes

## Goal

Turn source code and requirements into useful system diagrams and verify every relationship.

## 1. Generate a current-state process diagram (5 min)

Ask:

```text
Read the files in `starter-app/src`.
Create a Mermaid flowchart of the current order-calculation process.
Use business-friendly step names and show validation, subtotal,
discount, tax, and result. Include only behavior supported by code.
Do not change files.
```

Paste the result into a temporary Markdown file and open Markdown Preview.

## 2. Generate a sequence diagram (4 min)

Ask:

```text
Create a compact Mermaid sequence diagram for one order calculation.
Use participants User, Application, OrderService, and Formatter.
After the diagram, map each message to its source evidence.
```

## 3. Create a proposed context diagram (3 min)

Ask:

```text
Using `docs/stakeholder-request.md`, create a proposed system context
diagram. Clearly style or label any external system or flow that is
requested but not verified in the current implementation.
```

## 4. Verify the diagrams (3 min)

For every actor, process, message, and arrow, record its evidence or label it `Proposed`, `Assumed`, or `Open question`. Use [DIAGRAM_GUIDE.md](../DIAGRAM_GUIDE.md).

**Checkpoint:** Every element is traceable or explicitly marked as unverified.
