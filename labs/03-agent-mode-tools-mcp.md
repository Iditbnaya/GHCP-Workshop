# Lab 3: Agent Mode, Tools & MCP

**Time:** 20 minutes

## Goal

Use Agent mode to verify and improve the reverse-engineering report, observe
the tools it calls, and evaluate an MCP server before allowing it to access
workshop or organizational data.

## Connection to real work

**Real task:** Quality-check AI-generated analysis before it becomes project
documentation, while understanding which systems the agent can access.

**Uses:** `workshop-output/reverse-engineering-report.md`, `starter-app/src`,
`references/stakeholder-request.md`, and `references/diagram-guide.md`.

**Updates:** Only `workshop-output/reverse-engineering-report.md`.

**Provides to Lab 4:** A reviewed workflow that is safe enough to package for
reuse.

## 1. Understand tools and MCP (5 min)

A model produces an answer, but it cannot inspect or change a system by itself.
A **tool** gives the agent one named capability.

| Type | Example | Provider | Possible effect |
|---|---|---|---|
| Built-in tool | Search or read workspace files | VS Code or Copilot | Reads local project context |
| Built-in tool | Edit a file | VS Code or Copilot | Changes the local workspace |
| MCP tool | Read a work item, query a design, or list a repository issue | A configured MCP server | Sends a request to another local or remote system |

**MCP** is not one tool. Model Context Protocol is a standard that lets an MCP
server offer tools and context to Copilot. One server may expose several tools,
and each tool can have different read, write, authentication, and data-access
permissions.

The agent chooses among enabled tools, but the analyst must still check the
provider, input, result, and effect of each call.

## 2. Inspect the available tools (4 min)

1. Open Copilot Chat and select **Agent** mode.
2. Select **Configure Tools** near the chat input. Depending on the VS Code
   version, this may appear as a tools icon or a tool count.
3. Expand the groups and identify:
   - Built-in workspace tools.
   - Tools contributed by extensions.
   - Tools grouped under any configured MCP server.
4. For three tools, record:

| Tool | Provider | Reads or writes? | Data or system reached |
|---|---|---|---|
| | | | |

Do not assume that every enabled tool is needed for the task. Disable a tool if
its effect or provider is unclear.

## 3. Run the agent and inspect its tool calls (6 min)

Ask:

```text
Review `workshop-output/reverse-engineering-report.md` against `starter-app/src`,
`references/stakeholder-request.md`, and `references/diagram-guide.md`.

Check every calculation, rule, validation, diagram element, and evidence
reference. Correct only the report. Preserve Current, Requested, Assumed, and
Open question labels. Do not modify source or stakeholder files, run the
application, or use terminal commands. Summarize every correction you make.
```

As the agent works, expand at least one search/read call and one edit call in
the chat. Check:

- **Tool and provider:** Was it built in or supplied by an MCP server?
- **Input:** Which path, query, or data was sent?
- **Output:** What evidence came back?
- **Effect:** Did it read data or change something?
- **Scope:** Was the action limited to the permitted report?

Approve only actions limited to the report. When the agent finishes, verify at
least two corrections by opening the cited source. A successful tool call is
evidence retrieval, not proof that the model interpreted the evidence correctly.

## 4. Explore the MCP gallery safely (5 min)

1. Open the Extensions view with **Ctrl+Shift+X**.
2. Search for `@mcp` to browse servers in the MCP gallery.
3. Select one server relevant to system analysis, such as a connector for
   GitHub, Azure DevOps, or Figma.
4. **Do not install it.** Review the listing and answer:
   - Who publishes and operates the server?
   - Does it run locally or connect to a remote service?
   - What authentication or secrets does it require?
   - Which tools and read/write actions does it expose?
   - What project or organizational data could leave VS Code?
   - Has the organization approved this server and intended use?

If an organization-approved MCP server is already configured, return to
**Configure Tools**, locate its tool group, and enable one read-only tool. Run
only a permitted read-only request and inspect its input and output in the chat.
Otherwise, stop after evaluating the gallery listing.

**Checkpoint:** You can explain how Agent mode differs from Ask and Plan modes,
distinguish built-in and MCP tools, inspect a tool call, and evaluate an MCP
server before connecting it.

## Continue

[Continue to Lab 4: Create Reusable Prompts, Agents & Skills](04-reusable-prompts-agents-skills.md)
