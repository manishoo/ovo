/*
 * nodeserver.js
 * Copyright: Ouranos Studio 2019
 *
 * Serves the web app for development and production.
 * For development it
 */

const http = require('http')
const express = require('express')
const compression = require('compression')
const chalk = require('chalk')
const favicon = require('serve-favicon')
const devWebpackConfig = require('./webpack/webpack.client.config')
const paths = require('./webpack/paths')
const shimBrowser = require('./shim-browser')

const isProd = process.env.NODE_ENV === 'production'
const publicPath = devWebpackConfig.output.publicPath

const app = express()
const port = process.env.PORT || 9090
const hostname = process.env.HOST_NAME || 'localhost'

const serve = (path, cache) => express.static(path, {
  maxAge: cache && isProd ? 1000 * 60 * 60 * 24 * 30 : 0
})

app.use(compression({ threshold: 0 }))
app.use(publicPath.slice(0, -1), serve(paths.build, true))
app.use('/fonts', serve(paths.fonts, true))
app.use('/images', serve(paths.images, true))
app.use('/manifest.json', serve(paths.manifest, true))
app.use('/app.css', serve(paths.appCss, true))
app.use('/sw.js', serve(paths.buildSW))
app.use(favicon(paths.favicon))

if (isProd) {
  const assets = require('./web/build/assets.json')

  // TODO should handle multiple languages probably based on request
  shimBrowser('fa', 'rtl')
  app.get('*', require('./web/build/server-bundle').default(assets))
} else {
  require('@babel/register')
  app.get('*', require('./src/ts/app/web/render-dev-app'))
}

app.use((err, req, res, next) => {
  console.error(chalk`{red error:} {underline.redBright ${err.message}}`)
  res.status(err.status || 500)
})

const server = http.createServer(app)
server.listen(port, hostname, () => {
  console.log(chalk`{blue the server is running at} {bold.cyan ${hostname}:${port}}`)
})
