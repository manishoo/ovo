/*
 * LinearGradient.tsx
 * Copyright: Ouranos Studio 2019
 */

import { LinearGradientProps } from '@Common/LinearGradient/types'
import RX from 'reactxp'


export default class LinearGradient extends RX.Component<LinearGradientProps> {
  public render() {
    const { style, colors } = this.props

    return (
      <RX.View
        style={[
          styles.container,
          style,
          {
            backgroundImage: `linear-gradient(${colors.join(', ')})`
          }
        ]}
      >
      </RX.View>
    )
  }
}

const styles = {
  container: RX.Styles.createViewStyle({
    backgroundColor: 'red',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  }),
}
