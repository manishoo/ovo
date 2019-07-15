/*
 * index.web.tsx
 * Copyright: Ouranos Studio 2019
 */

import AppBootstrapperWeb from './app/AppBootstrapperWeb'

// This prevents bundlers/optimizers from stripping out the import above.
if (AppBootstrapperWeb) {
	console.log('App started')
}
