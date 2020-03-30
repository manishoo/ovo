/*
 * Grid.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import { FC } from 'react'
import RX from 'reactxp'


const _styles = {
  row: RX.Styles.createViewStyle({
    flexDirection: 'row',
  }),
}

interface RowProps extends RX.Types.ViewProps {
  style?: any
}

export const Row: FC<RowProps> = (props) => {
  return (
    <RX.View
      {...props}
      style={[
        _styles.row,
        props.style,
      ]}
    >

    </RX.View>
  )
}

interface ColProps extends RX.Types.ViewProps {
  style?: any,

  xs?: number
  sm?: number
  md?: number
  lg?: number
  xl?: number
}

export const Col: FC<ColProps> = (props) => {
  return (
    <RX.View
      {...props}
    >

    </RX.View>
  )
}
