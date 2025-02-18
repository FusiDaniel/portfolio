import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import turboPlugin from "eslint-plugin-turbo";
import tseslint from "typescript-eslint";
import onlyWarn from "eslint-plugin-only-warn";
import antfuConfig from '@antfu/eslint-config';
import pluginPreferArrow from 'eslint-plugin-prefer-arrow';

/**
 * A shared ESLint configuration for the repository.
 *
 * @type {import("eslint").Linter.Config}
 * */
export const config = [
  js.configs.recommended,
  eslintConfigPrettier,
  ...tseslint.configs.recommended,
  ...await antfuConfig({
    plugins: {
      turbo: turboPlugin,
      'prefer-arrow': pluginPreferArrow,
    },
    rules: {
      "turbo/no-undeclared-env-vars": "warn",
      'antfu/top-level-function': 'off',
        'arrow-body-style': 'error',
        'import/no-default-export': 'error',
        'no-console': 'warn',
        'node/prefer-global/buffer': 'off',
        'node/prefer-global/process': 'off',
        'perfectionist/sort-array-includes': 'error',
        'perfectionist/sort-classes': 'error',
        'perfectionist/sort-enums': 'error',
        'perfectionist/sort-exports': 'error',
        'perfectionist/sort-interfaces': 'error',
        'perfectionist/sort-maps': 'error',
        'perfectionist/sort-object-types': 'error',
        'perfectionist/sort-objects': 'error',
        'perfectionist/sort-union-types': 'error',
        'prefer-arrow-callback': 'error',
        'prefer-arrow/prefer-arrow-functions': [
          'error',
          {
            classPropertiesAllowed: false,
            disallowPrototype: true,
            singleReturnOnly: false,
          },
        ],
        'regexp/no-obscure-range': 'off',
        'regexp/no-super-linear-backtracking': 'off',
        'test/consistent-test-it': ['error', { fn: 'test', withinDescribe: 'test' }],
        'ts/consistent-type-definitions': ['error', 'type'],
        'ts/no-floating-promises': 'off',
        'ts/no-misused-promises': 'off',
        'ts/no-unsafe-argument': 'off',
        'ts/no-unsafe-assignment': 'off',
        'ts/no-unsafe-call': 'off',
        'ts/no-unsafe-member-access': 'off',
        'ts/no-unsafe-return': 'off',
        'ts/promise-function-async': 'off',
        'ts/strict-boolean-expressions': 'off',
        'ts/unbound-method': 'off',
        'unused-imports/no-unused-imports': 'error',
        'unused-imports/no-unused-vars': [
          'error',
          {
            args: 'after-used',
            argsIgnorePattern: '^_',
            caughtErrors: 'none',
            vars: 'all',
            varsIgnorePattern: '^_',
          },
        ],
    },
    stylistic: {
      indent: 2,
      jsx: true,
      quotes: 'single',
      semi: true,
    },
  }),
  {
    plugins: {
      onlyWarn,
    },
  },
  {
    ignores: ["dist/**"],
  },
];
