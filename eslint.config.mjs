import { FlatCompat } from '@eslint/eslintrc';
import path from 'path';
import { fileURLToPath } from 'url';
import prettier from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

/** @type {import('eslint').Linter.Config[]} */
const configs = [
  ...compat.extends('next/core-web-vitals'),
  ...compat.extends('next/typescript'),
  eslintConfigPrettier, // ✅ Disable ESLint rules that conflict with Prettier
  {
    plugins: {
      prettier, // ✅ Add Prettier as a plugin
    },
    rules: {
      '@typescript-eslint/no-empty-object-type': 'off', // ✅ Disable outdated rule
      '@typescript-eslint/no-empty-interface': 'warn', // ✅ Keep this as a warning
      'prettier/prettier': 'error', // ✅ Enforce Prettier formatting rules
    },
  },
];

export default configs;
