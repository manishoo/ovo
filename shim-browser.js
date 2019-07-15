/*
 * prepareForSSR.js
 * Copyright: Ouranos Studio 2019
 */

const jsdom = require('jsdom')
const { JSDOM } = jsdom

module.exports = function (lang, dir) {
  /**
   * Bring browser environments to NodeJS process.
   * Because some packages aren't fully isomorphic.
   * */
  const dom = new JSDOM(`<!DOCTYPE html><html lang='${lang}' dir='${dir}'><body><div class='app-container' /></body></html>`, {
    url: 'http://localhost/',
  })

  global.document = dom.window.document
  global.window = dom.window
  global.navigator = dom.window.navigator
}
