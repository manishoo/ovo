/*
 * DayEmpty.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import Styles from '@App/Styles'
import { ThemeContext } from '@App/ThemeContext'
import FilledButton from '@Common/FilledButton/FilledButton'
import { translate } from '@Common/LocalizedText/LocalizedText'
import Text from '@Common/Text/Text'
import { DayComponentProps } from '@Views/CalendarScreen/components/DayComponent'
import { DateTime } from 'luxon'
import RX from 'reactxp'


const INNER_CONTAINER_WIDTH = 200
const INNER_CONTAINER_HEIGHT = 200

interface DayEmptyProps extends DayComponentProps {
  style?: any,
  date: DateTime,
}

export default class DayEmpty extends RX.Component<DayEmptyProps> {
  render() {
    const { dayRegenerating } = this.props

    return (
      <ThemeContext.Consumer>
        {({ theme }) => (
          <RX.View
            style={[
              styles.innerContainer,
              {
                backgroundColor: theme.colors.cardBg,
              }
            ]}
          >
            <Text type={Text.types.subtitle} style={{ fontSize: 14 }}
                  translate={'This day doesn\'t have a meal plan yet'} />
            <RX.View>
              <FilledButton
                label={translate('Generate')}
                onPress={dayRegenerating ? undefined : () => this.props.onDayRegenerate()}
                style={{
                  marginBottom: Styles.values.spacing / 2,
                }}
              />
              <FilledButton
                mode={FilledButton.mode.default}
                label={translate('New blank plan')}
                onPress={dayRegenerating ? undefined : () => this.props.onDayRegenerate()}
              />
            </RX.View>
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
