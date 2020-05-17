/*
 * DayEmpty.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import Styles from '@App/Styles'
import { ThemeContext } from '@App/ThemeContext'
import FilledButton from '@Common/FilledButton/FilledButton'
import LoadingIndicator from '@Common/LoadingIndicator/LoadingIndicator'
import { translate } from '@Common/LocalizedText/LocalizedText'
import Text from '@Common/Text/Text'
import RX from 'reactxp'
import { DayComponentProps } from '../DayComponent/DayComponent'


const INNER_CONTAINER_WIDTH = 200
const INNER_CONTAINER_HEIGHT = 200

interface DayEmptyProps extends DayComponentProps {
  onDayRegenerate: () => void,
  dayRegenerating?: boolean,
  dayCreating?: boolean,
  loading?: boolean,
  onDayCreate: () => void,
}

export default class DayEmpty extends RX.Component<DayEmptyProps> {
  render() {
    const { dayRegenerating, dayCreating, loading } = this.props

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
            {
              loading
                ? <RX.View
                  style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <LoadingIndicator />
                </RX.View>
                : <>
                  <Text type={Text.types.subtitle} style={{ fontSize: 14, textAlign: 'center' }}
                        translate={'This day doesn\'t have a meal plan yet'} />
                  <RX.View>
                    <FilledButton
                      label={translate('Generate')}
                      onPress={this.props.onDayRegenerate}
                      loading={dayRegenerating}
                      style={{
                        marginBottom: Styles.values.spacing / 2,
                      }}
                    />
                    <FilledButton
                      mode={FilledButton.mode.default}
                      label={translate('New blank plan')}
                      onPress={this.props.onDayCreate}
                      loading={dayCreating}
                    />
                  </RX.View>
                </>
            }
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
