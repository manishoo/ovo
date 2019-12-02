/*
 * MenuItem.tsx
 * Copyright: Ouranos Studio 2019
 */

import Styles from '@App/Styles'
import Text from '@Common/Text/Text'
import RX from 'reactxp'


const MIN_WIDTH = 150

interface MenuItemProps {
  style?: any,
  label: string,
  onPress: () => any,
}

export default class MenuItem extends RX.Component<MenuItemProps> {
  render() {
    const { style, label } = this.props

    return (
      <RX.View
        style={[styles.container, style]}
        onPress={this.props.onPress}
      >
        <Text>{label}</Text>
      </RX.View>
    )
  }
}

const styles = {
  container: RX.Styles.createViewStyle({
    padding: Styles.values.spacing / 2,
    minWidth: MIN_WIDTH,
    flexDirection: 'row',
  }),
}
