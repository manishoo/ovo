/*
 * DayPayWall.tsx
 * Copyright: Ouranos Studio 2020
 */

import Styles from '@App/Styles'
import { ThemeContext } from '@App/ThemeContext'
import FilledButton from '@Common/FilledButton/FilledButton'
import Link from '@Common/Link/Link'
import { translate } from '@Common/LocalizedText/LocalizedText'
import Text from '@Common/Text/Text'
import { Routes } from '@Models/common'
import RX from 'reactxp'


const INNER_CONTAINER_WIDTH = 200
const INNER_CONTAINER_HEIGHT = 200

interface DayPayWallProps {
  style?: any,
}

export default class DayPayWall extends RX.Component<DayPayWallProps> {
  render() {
    const { style } = this.props

    return (
      <ThemeContext.Consumer>
        {({ theme }) => (
          <RX.View
            style={[
              styles.innerContainer,
              style,
              {
                backgroundColor: theme.colors.calendarEmptyStateBG
              }
            ]}
          >
            <Text type={Text.types.title} translate>Prana Premium</Text>
            <Text type={Text.types.body} translate>With Prana Premium, you can plan future meals!</Text>
            <Link to={Routes.membership}>
              <FilledButton
                style={{ marginTop: Styles.values.spacing }}
                label={translate('Learn More')} onPress={() => null}
              />
            </Link>
          </RX.View>
        )}
      </ThemeContext.Consumer>
    )
  }
}

const styles = {
  innerContainer: RX.Styles.createViewStyle({
    borderRadius: 10,
    padding: Styles.values.spacing,
    width: INNER_CONTAINER_WIDTH,
    height: INNER_CONTAINER_HEIGHT,
    justifyContent: 'space-between'
  })
}
