// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ],
    defaultExtractor: (content) => content.match(/[\w-/.:]+(?<!:)/g) || []
  },
  theme: {
    typography: {
      default: {
        css: {
          a: {
            color: '#1c64f2',
            '&:hover': {
              color: '#3f83f8',
            },
          },
        },
      },
    },
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require('@tailwindcss/ui'),
  ]
}
