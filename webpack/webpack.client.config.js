/*
 * webpack.client.config.js
 * Copyright: Ouranos Studio 2019
 */

const webpack = require('webpack')
const merge = require('webpack-merge')
const ManifestPlugin = require('webpack-manifest-plugin')
const SWPrecachePlugin = require('sw-precache-webpack-plugin')
const CleanPlugin = require('clean-webpack-plugin')

const baseConfig = require('./webpack.base.config')
const paths = require('./paths')

const isProd = process.env.NODE_ENV === 'production'

const productionConfig = merge(
  {
    entry: ['@babel/polyfill', paths.entryClient],
    plugins: [
      // new CleanPlugin(),
      new webpack.HashedModuleIdsPlugin(),
      new webpack.NormalModuleReplacementPlugin(
        /\.\/sync/,
        './async'
      ),
      new ManifestPlugin({
        fileName: 'assets.json',
        publicPath: process.env.PUBLIC_PATH || '/static/',
      }),
      new SWPrecachePlugin({
        // change it to your app's cache name
        cacheId: 'supernova',
        dontCacheBustUrlsMatching: /./,
        minify: true,
        filename: 'sw.js',
        staticFileGlobsIgnorePatterns: [/\.map$/, /\.json$/],
        runtimeCaching: [
          {
            urlPattern: '/',
            handler: 'networkFirst'
          }
        ]
      }),
    ]
  },
)

const developmentConfig = {
  entry: [
    '@babel/polyfill',
    'react-hot-loader/patch',
    'webpack-hot-middleware/client?noInfo=false&reload=true&overlay=true',
    paths.entryClient
  ],
  devtool: 'cheap-module-source-map',
  output: {
    filename: 'app.js',
    devtoolModuleFilenameTemplate: 'webpack:///[absolute-resource-path]',
  },
  plugins: [
    // new CleanPlugin({
    //   root: process.cwd(),
    // }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
}

module.exports = isProd
  ? merge(baseConfig, productionConfig)
  : merge(baseConfig, developmentConfig)
