/*
 * TotalTime.tsx
 * Copyright: Ouranos Studio 2019
 */

import Image from 'common/Image/Image'
import RX from 'reactxp'


interface TotalTimeProps {
  style?: any,
  totalTime: number,
}

export default class TotalTime extends RX.Component<TotalTimeProps> {
  getImageSource = () => {
    const t = this.props.totalTime
    if (t <= 5) {
      return require('./assets/icons8-time-100-green.png')
    } else if (t > 5 && t <= 20) {
      return require('./assets/icons8-time-100-yellow.png')
    } else if (t > 20) {
      return require('./assets/icons8-time-100-red.png')
    }

    return require('./assets/icons8-time-100-green.png')
  }

  public render() {
    const { style } = this.props

    return (
      <RX.View
        style={[styles.container, style]}
      >
        <Image
          source={this.getImageSource()}
          style={{
            width: 13,
            height: 13,
          }}
        />
        <RX.Text style={{ fontSize: 10, fontWeight: '100' }}>{this.props.totalTime}m</RX.Text>
      </RX.View>
    )
  }
}

const styles = {
  container: RX.Styles.createViewStyle({
    flexDirection: 'row',
    marginTop: 3,
  }),
}
