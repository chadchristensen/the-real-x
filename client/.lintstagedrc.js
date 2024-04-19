const path = require("path");

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(" --file ")}`;

module.exports = {
  "*": "gitleaks protect --staged -v --log-level error --redact",
  "*.{js,jsx,ts,tsx}": [
    buildEslintCommand,
    "prettier --write",
    "npm run test -- --findRelatedTests --bail --passWithNoTests",
  ],
};
