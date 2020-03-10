/*
 * webpack.server.config.js
 * Copyright: Mehdi J. Shooshtari 2020
 */

const webpack = require('webpack')
const merge = require('webpack-merge')
const nodeExternals = require('webpack-node-externals')

const baseConfig = require('./webpack.base.config')
const paths = require('./paths')

module.exports = merge(baseConfig, {
  target: 'node',
  entry: paths.entryServer,
  output: {
    filename: 'server-bundle.js',
    libraryTarget: 'commonjs2'
  },
  externals: nodeExternals({
    // do not externalize CSS files in case we need to import it from a dep
    whitelist: /\.css$/
  }),
  plugins: [
    new webpack.DefinePlugin({
      // 'document': {}, // FIXME PLEASE
      // 'window': {}, // FIXME PLEASE
      'process.env': {
        'isNode': '"true"',
      }
    }),
  ],
})
