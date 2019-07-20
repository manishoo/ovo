/*
 * index.native.ts
 * Copyright: Ouranos Studio 2019
 */

import { FontBase } from './Fonts'

class Fonts implements FontBase {
	monospace = 'System'

	displayLight = 'System'
	displayRegular = 'System'
	displaySemibold = 'System'
	displayBold = 'System'
}

export default new Fonts()
