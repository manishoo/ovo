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
const paths = require('./webpack/paths')
const shimBrowser = require('./shim-browser')

const publicPath = process.env.PUBLIC_PATH || '/static/'

const isProd = process.env.NODE_ENV === 'production'

const app = express()
const port = process.env.CLIENT_SERVER_PORT || 8080
const hostname = process.env.CLIENT_SERVER_URL || 'localhost'

const serve = (path, cache) => express.static(path, {
  maxAge: cache && isProd ? 1000 * 60 * 60 * 24 * 30 : 0
})

// app.use(compression({ threshold: 0 }))
// app.use(publicPath.slice(0, -1), serve(paths.build, true))
// app.use('/fonts', serve(paths.fonts, true))
// app.use('/images', serve(paths.images, true))
// app.use('/manifest.json', serve(paths.manifest, true))
// app.use('/app.css', serve(paths.appCss, true))
// app.use('/sw.js', serve(paths.buildSW))
app.use(favicon(paths.favicon))

const supportedLanguages = [
  'en',
  'fa',
]

if (isProd) {
  const assets = require('./web/build/assets.json')

  supportedLanguages.map(lang => {
    app.get('/' + lang + '*', (req, res) => {
      shimBrowser(lang, lang === 'fa' ? 'rtl' : 'ltr')
      return require('./web/build/server-bundle').default(assets)(req, res, lang)
    })
  })

  // fallback on en
  app.get('/', (req, res) => res.redirect('/en/'))
} else {
  require('@babel/register')

  supportedLanguages.map(lang => {
    app.get('/' + lang + '*', (req, res) => {
      return require('./src/ts/app/web/render-dev-app')(res, lang)
    })
  })

  // fallback on en
  app.get('/', (req, res) => res.redirect('/en/'))
}

app.use((err, req, res, next) => {
  console.error(chalk`{red error:} {underline.redBright ${err.message}}`)
  res.status(err.status || 500)
})

const server = http.createServer(app)
server.listen(port, hostname, () => {
  console.log(chalk`{blue the server is running at} {bold.cyan ${hostname}:${port}}`)
})
