/*
 * VirtualListViewWithoutScrollBar.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import Styles from '@App/Styles'
import { useState } from 'react'
import RX from 'reactxp'
import { VirtualListView as OriginalVirtualListView, VirtualListViewProps } from 'reactxp-virtuallistview'


export default function VirtualListViewWithoutScrollBar(props: VirtualListViewProps<any>) {
  const [scrollViewWidth, setScrollViewWidth] = useState(0)

  return (
    <RX.ScrollView
      style={{
        width: scrollViewWidth + 17,
      }}
    >
      <OriginalVirtualListView
        {...props}
        onLayout={e => scrollViewWidth === 0 && setScrollViewWidth(e.width)}
        style={[
          props.style,
          {
            [Styles.values.paddingStart]: 17,
          }
        ]}
      />
    </RX.ScrollView>
  )
}
