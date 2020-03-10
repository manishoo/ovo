/*
 * LinearGradient.tsx
 * Copyright: Mehdi J. Shooshtari 2020
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
            backgroundImage: `linear-gradient(${this._getDirection()}, ${colors.join(', ')})`
          }
        ]}
      >
      </RX.View>
    )
  }

  private _getDirection = () => {
    switch (this.props.direction) {
      case 'toLeft':
        return 'to left'
      case 'toRight':
        return 'to right'
    }
  }
}

const styles = {
  container: RX.Styles.createViewStyle({
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  }),
}
