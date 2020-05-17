/*
 * Link.native.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import RX from 'reactxp'


interface LinkProps {
  style?: any,
}

export default class Link extends RX.Component<LinkProps> {
  public render() {
    const { style } = this.props

    return (
      <RX.View
        style={[styles.container, style]}
      >

      </RX.View>
    )
  }
}

const styles = {
  container: RX.Styles.createViewStyle({
    //
  }),
}
