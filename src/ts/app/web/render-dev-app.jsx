/*
 * render-dev-app.jsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

const React = require('react')
const { renderToString } = require('react-dom/server')
const Html = require('./html')

const renderDevApp = (res) => {
  const html = renderToString(<Html lang={'en'} />)

  res.send(`<!doctype html>${html}`)
}

module.exports = renderDevApp
