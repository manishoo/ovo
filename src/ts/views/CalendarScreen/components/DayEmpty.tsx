/*
 * DayEmpty.tsx
 * Copyright: Ouranos Studio 2019
 */

import FilledButton from '@Common/FilledButton/FilledButton'
import { translate } from '@Common/LocalizedText/LocalizedText'
import RX from 'reactxp'


interface DayEmptyProps {
  style?: any,
  onDayRegenerate: () => void,
}

export default class DayEmpty extends RX.Component<DayEmptyProps> {
  render() {
    const { style } = this.props

    return (
      <RX.View
        style={[styles.container, style]}
      >
        <FilledButton label={translate('Generate')} onPress={() => this.props.onDayRegenerate()} />
      </RX.View>
    )
  }
}

const styles = {
  container: RX.Styles.createViewStyle({
    //
  }),
}
