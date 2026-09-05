# Setup

## 1. Clone the workshop repository

This is the first workshop activity. Git must already be available on the organization-managed computer; participants do not install it during the session.

1. Open Visual Studio Code.
2. Open the Command Palette with **Ctrl+Shift+P**.
3. Select **Git: Clone**.
4. Paste the workshop repository URL:

   ```text
   https://github.com/Iditbnaya/copilot-workshop-for-system-analysts.git
   ```

5. Choose a local folder.
6. When cloning completes, select **Open**.
7. If VS Code asks whether you trust the repository, confirm only after verifying that the URL belongs to the workshop organization.

## Prerequisites

- Visual Studio Code provided by your organization
- A GitHub account with access to GitHub Copilot
- GitHub Copilot and GitHub Copilot Chat enabled in VS Code
- Git already configured by your organization for repository cloning

> UI labels can vary slightly by VS Code and GitHub Copilot extension version.

No participant software installation, terminal, Node.js, npm, or application execution is required.

## 2. Verify GitHub Copilot

1. Confirm that the cloned workshop folder is open in VS Code.
2. Confirm that the Copilot icon is visible.
3. Open Copilot Chat.
4. Ask: `What files are in this workspace? Do not change anything.`
5. Check that the answer refers to this workshop.

## 3. Workshop safety rule

Participants analyze the source but do not edit it. Before using Copilot output in a requirement, specification, or diagram:

1. Identify the source: stakeholder request, documentation, source code, or assumption.
2. Ask Copilot for file and function evidence.
3. Separate verified behavior from inferred intent.
4. Record ambiguities as open questions.
5. Validate important conclusions with a developer or business owner.
