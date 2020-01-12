/*
 * PayScreen.tsx
 * Copyright: Ouranos Studio 2020
 */

import Text from '@Common/Text/Text'
import RX from 'reactxp'


interface PayScreenProps {
  style?: any,
}

export default class PayScreen extends RX.Component<PayScreenProps> {
  render() {
    const { style } = this.props

    return (
      <RX.View
        style={[styles.container, style]}
      >
        <Text>Buy Prana</Text>
      </RX.View>
    )
  }
}

const styles = {
  container: RX.Styles.createViewStyle({
    //
  }),
}
