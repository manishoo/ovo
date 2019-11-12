/*
 * CalendarScreen.tsx
 * Copyright: Ouranos Studio 2019
 */

import RX from 'reactxp'


interface CalendarScreenProps {
  style?: any,
}

export default class CalendarScreen extends RX.Component<CalendarScreenProps> {
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
