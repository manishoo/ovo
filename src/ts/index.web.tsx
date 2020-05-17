/*
 * index.web.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import AppBootstrapperWeb from './app/AppBootstrapperWeb'

// This prevents bundlers/optimizers from stripping out the import above.
if (AppBootstrapperWeb) {
  console.log('App started')
}
