const postcssPresetEnv = require('postcss-preset-env');
const postcssNested = require('postcss-nested');

module.exports = {
  plugins: [
    postcssPresetEnv({
      /* use stage 3 features + css nesting rules */
      stage: 3,
      features: {
        'nesting-rules': true
      }
    }),
    postcssNested()
  ]
}