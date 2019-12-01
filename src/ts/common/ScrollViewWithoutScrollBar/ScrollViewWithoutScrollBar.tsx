/*
 * ScrollViewWithoutScrollBar.tsx
 * Copyright: Ouranos Studio 2019
 */

import Styles from '@App/Styles'
import { useState } from 'react'
import RX from 'reactxp'


export default function ScrollViewWithoutScrollBar(props: RX.Types.ScrollViewProps) {
  const [scrollViewWidth, setScrollViewWidth] = useState(0)

  return (
    <RX.View
      style={{
        width: scrollViewWidth + 17,
        alignItems: 'center'
      }}
    >
      <RX.ScrollView
        {...props}
        onLayout={e => setScrollViewWidth(e.width)}
        style={[
          props.style,
          {
            [Styles.values.paddingStart]: 17,
          }
        ]}
      />
    </RX.View>
  )
}
