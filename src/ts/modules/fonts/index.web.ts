/**
 * index.web.ts
 * Copyright: Microsoft 2018
 *
 * Web implementation of "fonts" module.
 */

import {FontBase} from './Fonts'

// FIXME multi lang
class Fonts implements FontBase {
	monospace = 'monospace'

	displayLight = '"iranyekan", sans-serif'
	displayRegular = '"iranyekan", sans-serif'
	displaySemibold = '"iranyekan", sans-serif'
	displayBold = '"iranyekan", sans-serif'
}

export default new Fonts()
