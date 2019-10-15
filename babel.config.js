/*
 * babel.config.js
 * Copyright: Ouranos Studio 2019
 */

module.exports = {
  presets: [
    'module:metro-react-native-babel-preset'
  ],
  plugins: [
    '@babel/plugin-syntax-dynamic-import',
    'lodash',
    './buildtools/inline-require.js'
  ]
}
