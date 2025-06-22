// eslint.config.mjs
import antfu from '@antfu/eslint-config'

export default antfu(
  // Configures for antfu's config
  {
    unocss: true,
    formatters: {
      /**
       * Format CSS, LESS, SCSS files, also the `<style>` blocks in Vue
       * By default uses Prettier
       */
      css: true,
      /**
       * Format HTML files
       * By default uses Prettier
       */
      html: true,
      /**
       * Format Markdown files
       * Supports Prettier and dprint
       * By default uses Prettier
       */
      markdown: false,
    },
    ignores: [
      '**/node_modules/*',
      '!**/.vuepress/**',
      '**/.vuepress/.cache/**',
      '**/.vuepress/.temp/**',
      '**/.vuepress/dist/**',
      '**/*.md',
    ],
  },
  {
    rules: {
      'no-console': 'off',
      'node/prefer-global/process': 'off',
      'symbol-description': 'off',
    },
  },
  {
    files: ['**/*.vue'],
    rules: {
      'vue/valid-attribute-name': 'off',
      'vue/block-order': [
        'error',
        {
          order: ['template', 'script', 'style'],
        },
      ],
      'vue/html-comment-content-spacing': [
        'error',
        'always',
        {
          exceptions: [],
        },
      ],
      'vue/no-deprecated-model-definition': [
        'error',
        {
          allowVue3Compat: true,
        },
      ],
      'vue/component-name-in-template-casing': [
        'error',
        'PascalCase',
        {
          registeredComponentsOnly: false,
          ignores: ['/^n-/'],
          globals: [],
        },
      ],
      'vue/define-props-declaration': ['error', 'type-based'],
    },
  },
)
