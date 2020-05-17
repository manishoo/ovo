/*
 * PlanScreen.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import RX from 'reactxp'


const _styles = {
  container: RX.Styles.createViewStyle({
    //
  }),
}

interface PlanScreenProps {
  style?: any
}

const PlanScreen = ({ style }: PlanScreenProps) => {
  return (
    <RX.View
      style={[
        _styles.container,
        style,
      ]}
    >

    </RX.View>
  )
}

export default PlanScreen
