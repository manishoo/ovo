/*
 * index.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import RX from 'reactxp'
import { SvgProps } from './types'


const Svg = ({ xml }: SvgProps) => {
  return <div dangerouslySetInnerHTML={{ __html: xml }} />
}

export default Svg
