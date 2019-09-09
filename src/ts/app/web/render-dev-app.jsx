/*
 * render-dev-app.jsx
 * Copyright: Ouranos Studio 2019
 *
 * this file will be used in nodeserver.js to serve the dev app locally
 */

const React = require('react')
const { renderToString } = require('react-dom/server')
const Html = require('./html')

const renderDevApp = (res, lang) => {
  const html = renderToString(<Html lang={lang} />)

  res.send(`<!doctype html>${html}`)
}

module.exports = renderDevApp
