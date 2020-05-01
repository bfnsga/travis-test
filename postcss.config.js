const purgecss = require('@fullhuman/postcss-purgecss')
const cssnano = require('cssnano')

module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    process.env.NODE_ENV === 'production' ? require('autoprefixer'),
    process.env.NODE_ENV === 'production' ? purgecss({
      content: ['dist/**/*.html'],
      defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
    }),
    process.env.NODE_ENV === 'production' ? cssnano({
            preset: 'default',
        })
  ]
}
