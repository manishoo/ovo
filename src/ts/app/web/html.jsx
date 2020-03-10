/*
 * html.jsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

const React = require('react')
const PropTypes = require('prop-types')

const isProd = process.env.NODE_ENV === 'production'

const Html = props => {
  const { assets, chunkNames, lang, state = {}, title } = props

  let { content } = props
  let scripts
  let preloadLinks

  if (isProd) {
    content = <div className="app-container" dangerouslySetInnerHTML={{ __html: content }} />

    const urls = [
      'manifest.js',
      'vendor.js',
      ...chunkNames,
      'main.js',
    ].map(name => assets[name])

    scripts = []
    preloadLinks = []

    urls.forEach(url => {
      scripts.push(<script src={url} />)
      preloadLinks.push(<link rel='preload' as='script' href={url} />)
    })
  } else {
    content = <div className="app-container" />
    scripts = <script src='/static/app.js' />
  }

  return (
    <html lang={lang || 'en'} dir={lang === 'fa' ? 'rtl' : 'ltr'}>
    <head>
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='theme-color' content='#606c76' />
      <title>{title}</title>
      {isProd && preloadLinks}
      <link rel='manifest' href='/manifest.json' />
      <link rel='shortcut icon' href='/favicon.ico' />
      <link rel='stylesheet' href='/app.css' />
      {/*{isProd && <link href={assets['main.css']} type='text/css' rel='stylesheet' />}*/}
    </head>
    <body>
    <input type="hidden" name="appVersion" id="appVersion" value="{{ version }}" />
    {content}
    <script dangerouslySetInnerHTML={{
      __html: `window.__APOLLO_STATE__=${JSON.stringify(state).replace(/</g, '\\u003c')};`,
    }} />
    {scripts}
    </body>
    </html>
  )
}

Html.propTypes = {
  assets: PropTypes.object,
  chunkNames: PropTypes.array,
  content: PropTypes.string,
  lang: PropTypes.string,
}

module.exports = Html
