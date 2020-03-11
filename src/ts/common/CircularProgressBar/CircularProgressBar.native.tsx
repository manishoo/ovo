/*
 * CircularProgressBar.native.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import RX from 'reactxp'

//TODO native

interface CircularProgressBarProps {
  style?: any,
}

export default class CircularProgressBar extends RX.Component<CircularProgressBarProps> {
  render() {
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
