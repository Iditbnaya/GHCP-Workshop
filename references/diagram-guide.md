# Diagram Guide for System Analysts

## Choose the diagram by question

| Question | Diagram |
|---|---|
| Who interacts with the system and what lies outside it? | System context diagram |
| What business steps and decisions occur? | Process flowchart |
| How do actors and components interact over time? | Sequence diagram |
| What are the major logical components and dependencies? | Component diagram |
| What are the important business entities and relationships? | Conceptual data model |
| Which requirement is represented by which design element? | Requirements coverage map |

## Evidence labels

Use these labels consistently:

- **Current:** verified in current documentation or implementation.
- **Requested:** explicitly stated in a stakeholder request.
- **Proposed:** a design option that is not approved.
- **Assumed:** introduced to complete a draft and requiring validation.
- **Open question:** insufficient information to model the element.

## Diagram review checklist

- [ ] The title says whether the diagram is current-state or future-state.
- [ ] The system boundary is clear.
- [ ] Actors and external systems have evidence.
- [ ] Every process or message uses business-friendly language.
- [ ] Current and proposed elements are visually distinguishable.
- [ ] Error and alternative flows are represented where relevant.
- [ ] Every important element maps to a source or open question.
- [ ] The diagram does not imply an approved design without evidence.

## Prompt

```text
Create a <diagram type> in Mermaid for <scope>.
Use only <named sources>.
Label the diagram current-state or proposed future-state.
Mark requested, proposed, assumed, and unresolved elements explicitly.
After the diagram, provide an evidence table for every node and edge.
Do not modify files.
```
