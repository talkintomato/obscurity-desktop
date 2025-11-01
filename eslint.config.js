import { createRequire } from 'module'
const require = createRequire(import.meta.url)

const electronToolkit = require('@electron-toolkit/eslint-config-ts')
const react = require('eslint-plugin-react')
const prettier = require('eslint-plugin-prettier/recommended')

export default electronToolkit.config(
  {
    ignores: ['out', 'dist', 'node_modules', '.vite', '.electron-vite']
  },
  ...electronToolkit.configs.recommended,
  {
    files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
    plugins: {
      react
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    rules: {
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      '@typescript-eslint/explicit-function-return-type': 'off'
    },
    settings: {
      react: {
        version: 'detect'
      }
    }
  },
  {
    files: ['**/*.config.{js,cjs,mjs}'],
    rules: {
      '@typescript-eslint/no-require-imports': 'off'
    }
  },
  {
    ...prettier,
    rules: {
      ...prettier.rules,
      'prettier/prettier': 'warn'
    }
  }
)
