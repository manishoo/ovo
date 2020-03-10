/*
 * webpack.parts.js
 * Copyright: Mehdi J. Shooshtari 2020
 */

const webpack = require('webpack')
// const fs = require('fs')
// const path = require('path')
// const ExtractTextPlugin = require('extract-text-webpack-plugin')
const BabiliPlugin = require('babili-webpack-plugin')
// const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const paths = require('./paths')
const { CheckerPlugin } = require('awesome-typescript-loader')
const localIdentName = '[name]_[local]_[hash:base64:5]'
const isProd = (process.env.NODE_ENV === 'production')

exports.localIdentName = localIdentName

exports.extractBundles = bundles => ({
  plugins: bundles.map(bundle => (
    new webpack.optimize.CommonsChunkPlugin(bundle)
  )),
})

exports.optimizeChunks = () => ({
  optimization: {
    minimize: isProd,
    splitChunks: {
      chunks: 'async',
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      noEmitOnErrors: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  }
})

exports.loadImages = ({ include, exclude, options } = {}) => ({
  module: {
    rules: [
      {
        test: /\.(gif|png|jpe?g|svg)$/,

        include,
        exclude,

        use: {
          loader: 'url-loader',
          options
        }
      }
    ]
  }
})

exports.optimizeImages = ({ include, exclude } = {}) => ({
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|svg)$/i,

        include,
        exclude,

        use: {

          loader: 'image-webpack-loader',

          options: {
            progressive: true,
            disable: true,

            // optimizationLevel: 7,

            gifsicle: {
              interlaced: false
            },

            /*
            mozjpeg: {

            },

            svgo: {

            }, */

            pngquant: {
              quality: '65-90',
              speed: 4
            }
          }
        }
      }
    ]
  }
})

exports.loadFonts = ({ include, exclude, options } = {}) => ({
  module: {
    rules: [
      {
        // Capture eot, ttf, woff, and woff2
        test: /\.(eot|ttf|woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,

        include,
        exclude,

        use: {
          loader: 'file-loader',
          options
        }
      }
    ]
  }
})

exports.loadJS = () => ({
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,

        include: paths.src,
        exclude: paths.nodeModules,

        loader: 'babel-loader',
        options: /*JSON.parse(fs.readFileSync(calendar.resolve(__dirname, '../.babelrc')))*/
          {
            cacheDirectory: true,
            // babelrc: true,
            presets: [
              '@babel/preset-env',
              'module:metro-react-native-babel-preset'
            ],
            plugins: [
              [
                '@babel/plugin-proposal-decorators',
                {
                  legacy: true,
                }
              ],
              '@babel/plugin-proposal-class-properties',
              '@babel/plugin-syntax-dynamic-import',
              './buildtools/inline-require.js'
            ],
          }
      },
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { enforce: "pre", test: /\.tsx?$/, loader: "source-map-loader" },
    ],
  },
  plugins: [
    new CheckerPlugin()
  ]
  // externals: {
  //   'react': 'React',
  //   'react-dom': 'ReactDOM'
  // },
})

exports.minifyJS = () => ({
  plugins: [
    new BabiliPlugin()
  ]
})
