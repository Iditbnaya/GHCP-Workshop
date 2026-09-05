# Lab 3: Copilot Models, Tools, Agents & MCP

**Time:** 20 minutes

## Goal

Understand the components behind a Copilot workflow and use them safely.

## Mental model (5 min)

- **Model:** produces reasoning and text/code; models vary in speed, capability, and availability.
- **Tool:** performs or retrieves something, such as read-only workspace search.
- **Agent:** breaks a goal into steps and may select tools to complete them.
- **MCP server:** exposes tools or resources through the Model Context Protocol.

An agent is not a guarantee of correctness. A tool result is evidence, but the model can still interpret it incorrectly.

## Compare models (5 min)

If model selection is available, ask two available models:

```text
Explain `calculateOrder` in at most 120 words for a beginner.
Include one example and one potential edge case.
```

Compare accuracy, clarity, latency, and instruction-following. Do not assume the more verbose answer is better.

## Observe read-only tool use (6 min)

In Agent mode, ask:

```text
Find the files that define order calculation and currency formatting.
Explain how you found them and what read-only search tools you used.
Do not edit files or run terminal commands.
```

Confirm that every tool action is read-only and limited to the workshop folder.

## MCP discussion (4 min)

For an MCP tool, ask:

- Who operates the server?
- What data can it read?
- What actions can it perform?
- Where does its output go?
- Does organizational policy approve it?

Examples relevant to analysts include approved connectors for work items, wikis, documentation, or architecture inventories. Optional, only with an approved server: list its available tools without invoking a write action.

**Checkpoint:** Given a Copilot action, identify the model, agent, read-only tool, and external trust boundary involved.
