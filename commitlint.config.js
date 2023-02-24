// pra: just for practice
// feat: A new feature
// sb: add/edit new custom component in storybook
// multi: 初期設定、コンポーネントのベース作成、ページ複数追加、など
// lint: ESLintの設定の変更, 使っていないコードの整理など
// docs: Documentation only changes
// fix: A bug fix
// perf: A code change that improves performance
// test: Adding missing tests or correcting existing tests

module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "body-leading-blank": [1, "always"],
    "body-max-line-length": [2, "always", 100],
    "footer-leading-blank": [1, "always"],
    "footer-max-line-length": [2, "always", 100],
    "header-max-length": [2, "always", 100],
    "scope-case": [2, "always", "lower-case"],
    "subject-case": [
      2,
      "never",
      // ['sentence-case', 'start-case', 'pascal-case', 'upper-case'],
    ],
    "subject-empty": [2, "never"],
    "subject-full-stop": [2, "never", "."],
    "type-case": [2, "always", "lower-case"],
    "type-empty": [2, "never"],
    "type-enum": [
      2,
      "always",
      [
        "chore",
        "multi",
        "docs",
        "feat",
        "fix",
        "perf",
        "revert",
        "test",
        "translation",
        "security",
        "changeset",
        "pra",
        "sb",
        "lint",
      ],
    ],
  },
};
