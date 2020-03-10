/*
 * index.web.ts
 * Copyright: Mehdi J. Shooshtari 2020
 */

import { FontBase } from './Fonts'


class Fonts implements FontBase {
  monospace = 'monospace'

  displayLight = '"iranyekan", sans-serif'
  displayRegular = '"iranyekan", sans-serif'
  displaySemibold = '"iranyekan", sans-serif'
  displayBold = '"iranyekan", sans-serif'

  displayFaLight = '"iranyekan", sans-serif'
  displayFaRegular = '"iranyekan", sans-serif'
  displayFaSemibold = '"iranyekan", sans-serif'
  displayFaBold = '"iranyekan", sans-serif'

  displayEnLight = 'system-ui, -apple-system, BlinkMacSystemFont, "Helvetica Neue", "Lucida Grande", "Segoe UI"'
  displayEnRegular = 'system-ui, -apple-system, BlinkMacSystemFont, "Helvetica Neue", "Lucida Grande", "Segoe UI"'
  displayEnSemibold = 'system-ui, -apple-system, BlinkMacSystemFont, "Helvetica Neue", "Lucida Grande", "Segoe UI"'
  displayEnBold = 'system-ui, -apple-system, BlinkMacSystemFont, "Helvetica Neue", "Lucida Grande", "Segoe UI"'
}

export default new Fonts()
