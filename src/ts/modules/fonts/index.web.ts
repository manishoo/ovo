/*
 * index.web.ts
 * Copyright: Ouranos Studio 2019
 */

import { FontBase } from './Fonts'

// FIXME multi lang
class Fonts implements FontBase {
	monospace = 'monospace'

	displayLight = '"iranyekan", sans-serif'
	displayRegular = '"iranyekan", sans-serif'
	displaySemibold = '"iranyekan", sans-serif'
	displayBold = '"iranyekan", sans-serif'
}

export default new Fonts()
