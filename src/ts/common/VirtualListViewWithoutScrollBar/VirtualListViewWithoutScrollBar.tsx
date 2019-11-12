/*
 * VirtualListViewWithoutScrollBar.tsx
 * Copyright: Ouranos Studio 2019
 */

import { useState } from 'react'
import RX from 'reactxp'
import {VirtualListView as OriginalVirtualListView, VirtualListViewProps} from 'reactxp-virtuallistview'
import Styles from 'src/ts/app/Styles'

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
