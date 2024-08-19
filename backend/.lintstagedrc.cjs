module.exports = {
  "*": "gitleaks protect --staged -v --log-level error --redact",
  "*.{js,jsx,ts,tsx}": ["eslint --fix", "prettier --write"],
};
