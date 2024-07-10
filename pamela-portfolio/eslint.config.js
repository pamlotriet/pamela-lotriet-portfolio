// @ts-check
const eslint = require("@eslint/js");
const tseslint = require("@typescript-eslint/eslint-plugin");
const angular = require("@angular-eslint/eslint-plugin");

module.exports = {
  overrides: [
    {
      files: ["**/*.ts"],
      extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/stylistic",
        "plugin:@angular-eslint/recommended",
        "plugin:prettier/recommended" // Add Prettier config
      ],
      parser: "@typescript-eslint/parser",
      plugins: ["@typescript-eslint", "prettier"],
      processor: "@angular-eslint/template/parser",
      rules: {
        "prettier/prettier": "error",
        "@angular-eslint/directive-selector": [
          "error",
          {
            type: "attribute",
            prefix: "app",
            style: "camelCase"
          }
        ],
        "@angular-eslint/component-selector": [
          "error",
          {
            type: "element",
            prefix: "app",
            style: "kebab-case"
          }
        ]
      }
    },
    {
      files: ["**/*.html"],
      extends: [
        "plugin:@angular-eslint/template/recommended",
        "plugin:@angular-eslint/template/accessibility"
      ],
      plugins: ["prettier"],
      rules: {
        "prettier/prettier": "error"
      }
    }
  ]
};
