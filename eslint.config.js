const globals = require("globals");
const nodePlugin = require("eslint-plugin-node");
const securityPlugin = require("eslint-plugin-security");
const prettierPlugin = require("eslint-plugin-prettier");
const reactPlugin = require("eslint-plugin-react");
const reactHooksPlugin = require("eslint-plugin-react-hooks");

module.exports = [
  {
    ignores: ["node_modules/**", "eslint.config.js"],
  },
  {
    files: ["**/*.js", "**/*.mjs", "**/*.cjs", "**/*.ts", "**/*.tsx"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      parser: require.resolve("@babel/eslint-parser"),
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          presets: ["@babel/preset-react"],
        },
      },
      globals: {
        ...globals.node,
        ...globals.browser,
      },
    },
    plugins: {
      node: nodePlugin,
      security: securityPlugin,
      prettier: prettierPlugin,
      react: reactPlugin,
      "react-hooks": reactHooksPlugin,
    },
    rules: {
      "prettier/prettier": "error",
      "no-console": "warn",
      "no-unused-vars": [
        "error",
        {
          vars: "all",
          args: "after-used",
          ignoreRestSiblings: false,
        },
      ],
      "no-undef": "error",
      "node/no-unpublished-require": "off",
      "node/no-missing-import": "off",
      "node/no-extraneous-require": "off",
      "node/no-extraneous-import": "off",
      "security/detect-object-injection": "off",
      "react/jsx-uses-react": "error",
      "react/jsx-uses-vars": "error",
      "react/react-in-jsx-scope": "off",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
    },
  },
  {
    files: ["**/*.test.js"],
    languageOptions: {
      ecmaVersion: 2021,
      parser: require.resolve("@babel/eslint-parser"), // Use the same parser as main files
      globals: {
        ...globals.jest,
      },
    },
  },
];
