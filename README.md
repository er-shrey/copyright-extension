# Copyright Add

A VS Code extension that inserts a copyright/license notice comment at the top of the current
file with a single command. It picks the comment style (`/* */`, `<!-- -->`, `"""` `"""`, etc.)
automatically based on the file's extension, and stamps the notice with the current year and the
local OS username.

## Tech Stack

- Node.js / JavaScript (VS Code Extension API, `vscode` engine `^1.53.0`)
- ESLint for linting, Mocha + `vscode-test` for extension tests

## Prerequisites

- Node.js (LTS) and npm
- Visual Studio Code 1.53.0 or newer

## Installation

```bash
git clone https://github.com/er-shrey/copyright-extension.git
cd copyright-extension
npm install
```

## Running / Debugging

Open the folder in VS Code and press `F5` (or **Run > Start Debugging**) to launch an Extension
Development Host window with the extension loaded.

## Usage

Inside the Extension Development Host, open any file and run the command:

```
Ctrl+P (or Cmd+P) > Copyright Add
```

This inserts a license/copyright comment block at the top of the file, using the correct comment
syntax for: Python, JavaScript, HTML, CSS, Java, Go, C, and C++ (any other extension falls back to
`/* */` style).

## Lint & Test

```bash
npm run lint    # eslint .
npm test        # runs lint, then the extension test suite via vscode-test
```

## Packaging

To produce a `.vsix` package for manual installation, use `vsce` (not currently a listed
dependency):

```bash
npx vsce package
```
