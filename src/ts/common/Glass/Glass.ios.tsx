/*
 * Glass.ios.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import RX from 'reactxp'


interface GlassProps {
  style?: any,
  blurType?: 'xlight' | 'light' | 'dark' | 'extraDark' | 'regular' | 'prominent',
}

export default class GlassIos extends RX.Component<GlassProps> {
  public render() {
    // @ts-ignore
    const { style, children, blurType } = this.props

    return (
      <RX.View
        style={style}
      >
        {children}
      </RX.View>
    )
  }
}
