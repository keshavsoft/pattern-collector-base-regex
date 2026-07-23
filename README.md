# pattern-collector-base-regex 🔍

> **A high-performance utility to run a single line against a custom parser regular expression and extract captured groups.**

[![npm version](https://img.shields.io/npm/v/pattern-collector-base-regex.svg?style=flat-square&color=38bdf8)](https://www.npmjs.com/package/pattern-collector-base-regex)
[![license](https://img.shields.io/npm/l/pattern-collector-base-regex.svg?style=flat-square&color=34d399)](LICENSE)

🔗 **Quick Links:**
*   📦 **NPM Registry**: [npmjs.com/package/pattern-collector-base-regex](https://www.npmjs.com/package/pattern-collector-base-regex)
*   💻 **GitHub Repo**: [github.com/keshavsoft/pattern-collector-base-regex](https://github.com/keshavsoft/pattern-collector-base-regex)
*   📄 **Interactive Docs**: [keshavsoft.github.io/pattern-collector-base-regex](https://keshavsoft.github.io/pattern-collector-base-regex/)
*   ⚙️ **Publish Workflow**: [.github/workflows/npm-publish.yml](file:///d:/KeshavSoftRepos/2026-07-23(1)/pattern-collector-base-regex/.github/workflows/npm-publish.yml)

---

## 📖 Overview

`pattern-collector-base-regex` is a lightweight helper designed to parse a specific text line against a capturing Regular Expression. It returns the first two captured groups as an object containing `variable` and `folderName`.

This is typically used downstream inside file segment extractors to isolate variables, aliases, route subdirectories, or specific file path tokens from a matched line of code.

---

## ✨ Features

*   **⚡ Zero Dependencies**: Light, fast, and secure.
*   **📂 Group Extraction**: Extracts structured fields (like `variable` and `folderName`) from regular expression capture groups.
*   **📦 ESM Native**: Built for modern ES module environments.

---

## 🚀 Installation

```bash
npm install pattern-collector-base-regex
```

---

## 🛠️ API Reference

### `default(options)`

#### Parameters

An options object containing:

*   **`matchLine`** `(string)`: The raw text line to match (e.g., an import or route usage line).
*   **`parseRegex`** `(RegExp)`: A regular expression with capture groups to extract specific variables (`variable`) and folder names (`folderName`).
*   **`showLog`** `(boolean)` *(optional)*: Whether to print debug logs.

#### Returns

*   `Object` | `undefined`: If the line matches the regular expression, it returns an object containing:
    *   `variable` `(string)`: The first captured group.
    *   `folderName` `(string)`: The second captured group.
    If there is no match, it returns `undefined`.

---

## 💻 Usage Example

```javascript
import extractVariable from 'pattern-collector-base-regex';

const line = 'import { router as routerFromv1 } from "./v1/routes.js";';
const parseRegex = /import\s*\{[^}]*router\s+as\s+(\w+)[^}]*\}\s*from\s*['"]\.\/([^/]+)\/.*['"]/;

const result = extractVariable({
  matchLine: line,
  parseRegex
});

console.log(result);
/*
Output:
{
  variable: 'routerFromv1',
  folderName: 'v1'
}
*/
```

---

## ⚖️ License

MIT License. Designed with ❤️ by [KeshavSoft](https://github.com/keshavsoft).
