/*
 * paths.js
 * Copyright: Mehdi J. Shooshtari 2020
 */

const fs = require('fs')
const path = require('path')

const appDirectory = fs.realpathSync(process.cwd())
const resolveApp = relativePath => path.resolve(appDirectory, relativePath)

module.exports = {
  root: appDirectory,
  src: resolveApp('src'),
  common: resolveApp('src/ts/common'),

  services: resolveApp('src/ts/services'),
  views: resolveApp('src/ts/views'),
  utils: resolveApp('src/ts/utils'),
  models: resolveApp('src/ts/models'),
  app: resolveApp('src/ts/app'),
  locales: resolveApp('src/ts/locales'),

  entryClient: resolveApp('src/ts/index.web.tsx'),
  entryServer: resolveApp('src/ts/app/web/entry-server'),

  public: resolveApp('web'),
  manifest: resolveApp('web/manifest.json'),
  appCss: resolveApp('web/app.css'),
  favicon: resolveApp('web/favicon.ico'),
  images: resolveApp('web/images'),
  fonts: resolveApp('web/fonts'),

  build: resolveApp('web/build'),
  assets: resolveApp('web/build/assets.json'),
  buildServer: resolveApp('web/build/server-bundle'),
  buildSW: resolveApp('web/build/sw.js'),

  // These paths are relatve to the 'build' folder
  buildImages: 'images',
  buildFonts: 'fonts',
  buildStyles: 'styles',

  packageJson: resolveApp('package.json'),
  nodeModules: resolveApp('node_modules')
}
