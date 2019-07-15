/*
 * index.ios.js
 * Copyright: Ouranos Studio 2019
 */

const AppBootstrapperNative = require('./temp/ios/rnapp/js/app/AppBootstrapperNative.js')

// This prevents bundlers/optimizers from stripping out the import above.
if (AppBootstrapperNative) {
  console.log('App started')
}
