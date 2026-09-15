# Setup

## What you need

- Visual Studio Code provided by your organization.
- A GitHub account with access to GitHub Copilot.
- GitHub Copilot Chat enabled in Visual Studio Code.
- Git configured by your organization for repository cloning.

Figma and MCP access are optional. The complete workshop can be finished using
the files in this repository.

## 1. Clone the workshop in Visual Studio Code

1. Open Visual Studio Code.
2. Open the Command Palette with **Ctrl+Shift+P**.
3. Select **Git: Clone**.
4. Enter:

   `https://github.com/Iditbnaya/GHCP-Workshop.git`

5. Choose a local folder.
6. Select **Open** when cloning finishes.
7. If Visual Studio Code asks whether you trust the repository, confirm only
   after checking the repository URL.

## 2. Verify GitHub Copilot

1. Confirm that the complete repository is open.
2. Open Copilot Chat.
3. Select **Ask** mode.
4. Ask:

   ```text
   What folders are in this workshop? Do not change files.
   ```

5. Confirm that the answer mentions `labs`, `references`, and `starter-app`.

## 3. Continue

[Open the workshop guide](WORKSHOP.md)
