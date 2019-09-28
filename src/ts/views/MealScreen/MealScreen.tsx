/*
 * MealScreen.tsx
 * Copyright: Ouranos Studio 2019
 */

import RX from 'reactxp'


interface MealFormProps {
  style?: any,
}

export default class MealScreen extends RX.Component<MealFormProps> {
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

  }),
}
