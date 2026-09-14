# Setup

## Prerequisites

- Visual Studio Code provided by your organization
- A GitHub account with access to GitHub Copilot
- GitHub Copilot Chat enabled in Visual Studio Code
- Git configured by your organization for repository cloning
- For Lab 7:
  - A Figma account
  - Access to the workshop starter design or Figma design generation
  - Organizational permission to connect the official remote Figma MCP server

> UI labels can vary slightly by Visual Studio Code and GitHub Copilot version.

No terminal, Node.js, npm, or application execution is required.

## 1. Clone the workshop in Visual Studio Code

1. Open Visual Studio Code.
2. Open the Command Palette with **Ctrl+Shift+P**.
3. Select **Git: Clone**.
4. Enter:
   `https://github.com/Iditbnaya/GHCP-Workshop.git`
5. Choose a local folder for the repository.
6. Select **Open** when cloning finishes.
7. If Visual Studio Code asks whether you trust the repository, confirm only
   after verifying the repository URL.

Open the complete repository, not only `starter-app`. Copilot needs the labs,
references, application code, and workshop instructions as context.

## 2. Verify GitHub Copilot

1. Confirm that the cloned workshop folder is open in Visual Studio Code.
2. Confirm that the Copilot icon is visible.
3. Open Copilot Chat in **Ask** mode.
4. Ask:

   ```text
   What files are in this workspace? Do not change anything.
   ```

5. Check that the answer refers to this workshop.

## 3. Follow the workshop safety rule

Analyze the application source, but do not edit it. Labs may create analysis
deliverables under `workshop-output` and reusable Copilot assets in the named
`.github` customization folders.

Before using Copilot output in a requirement, user story, or diagram:

1. Identify the source: stakeholder request, reference, source code, or
   assumption.
2. Ask Copilot for file and function evidence.
3. Separate verified behavior from inferred intent.
4. Record ambiguities as open questions.
5. Validate important conclusions with a developer or business owner.

For Lab 7, treat the Figma MCP server as an external trust boundary. Connect
only the official endpoint `https://mcp.figma.com/mcp` when organizational
policy permits it, select one workshop frame, and use read tools only.
