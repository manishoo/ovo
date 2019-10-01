/*
 * webpack.base.config.js
 * Copyright: Ouranos Studio 2019
 */

const webpack = require('webpack')
const merge = require('webpack-merge')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

const platform = process.env.PLATFORM || 'web'
const isTest = (platform === 'tests')
const isDev = (process.env.NODE_ENV === 'development')
const getConfig = require('../buildconfig.js')
const config = getConfig(platform, isDev)
const parts = require('./webpack.parts')
const paths = require('./paths')
const isProd = process.env.NODE_ENV === 'production'

const commonConfig = merge(
  {
    entry: paths.src,
    output: {
      path: paths.build,
      chunkFilename: '[name].[chunkhash:8].js',
      filename: '[name].[chunkhash:8].js',
      publicPath: process.env.PUBLIC_PATH || '/static/',
    },
    // module: {
    //   rules: [{
    //     test: function (modulePath) {
    //       return !modulePath.endsWith('ios.tsx')
    //     },
    //     exclude: [
    //       /.*\.ios\..*/,
    //       /.*\.android\..*/,
    //       /.*\.native\..*/,
    //     ]
    //   }]
    // },
    resolve: {
      unsafeCache: true,
      symlinks: false,
      modules: [paths.nodeModules, 'node_modules'],
      extensions: ['.mjs', '.ts', '.tsx', '.js', '.json', '.jsx'],
      // alias: [
      //   {name: 'src', alias: paths.src,},
      //   {name: 'common', alias: paths.common,},
      // ],
      alias: Object.assign({}, {
        src: paths.src,
        common: paths.common,
      }, config.bundling.aliases),
    },
    plugins: [
      new webpack.DefinePlugin({
        '__DEV__': isDev,
        '__TEST__': isTest,
        '__WEB__': true,
        '__ANDROID__': false,
        '__IOS__': false,
        '__WINDOWS__': false,
        '__MACOS__': false,
        'process.env.API_ADDRESS': JSON.stringify(process.env.API_ADDRESS),
        'process.env.GRAPHQL_ENDPOINT': JSON.stringify(process.env.GRAPHQL_ENDPOINT),
        'process.env.TAG': JSON.stringify(process.env.TAG),
      })
    ],
  },
  parts.loadJS(),
  parts.loadFonts({
    include: paths.src,
    options: {
      name: `${paths.buildFonts}/[name].[hash:8].[ext]`
    }
  }),
  parts.optimizeChunks(),
)

const productionConfig = merge(
  {
    performance: {
      hints: 'warning', // 'error' or false are valid too
      maxEntrypointSize: 100000, // in bytes
      maxAssetSize: 450000 // in bytes
    }
  },
  parts.minifyJS(),
  parts.loadImages({
    include: paths.src,
    options: {
      limit: 15000,
      name: `${paths.buildImages}/[name].[hash:8].[ext]`
    }
  }),
  // should go after loading images
  parts.optimizeImages()
)

const developmentConfig = merge(
  {
    devtool: 'cheap-module-source-map',
    plugins: [
      new FriendlyErrorsPlugin(),
    ]
  },
  parts.loadImages({ include: paths.src })
)

module.exports = isProd
  ? merge(commonConfig, productionConfig)
  : merge(commonConfig, developmentConfig)
