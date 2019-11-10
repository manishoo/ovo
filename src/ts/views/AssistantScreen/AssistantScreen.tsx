/*
 * AssistantScreen.tsx
 * Copyright: Ouranos Studio 2019
 */

import Assistant from 'common/Assistant/Assistant'
import FilledButton from 'common/FilledButton/FilledButton'
import { getLocalizedText } from 'common/LocalizedText/LocalizedText'
import Navbar from 'common/Navbar/Navbar'
import RX from 'reactxp'
import Styles from 'src/ts/app/Styles'
import { navigate } from 'src/ts/utilities'
import { AssistantMessage } from 'src/ts/views/Introduction/components/ChatBox'


interface AssistantScreenProps {
  style?: any,
}

export default class AssistantScreen extends RX.Component<AssistantScreenProps> {
  render() {
    const { style } = this.props

    return (
      <RX.View
        style={[styles.container, style]}
      >
        <RX.View style={styles.assistantContainer}>
          <Assistant size={100} />
        </RX.View>
        <AssistantMessage text={'What can I do for you?'} />
        <RX.View style={styles.footer}>
          <FilledButton label={getLocalizedText('showMeMealPlan')} onPress={() => navigate(this.props, 'mealPlan')} />
        </RX.View>
        <Navbar />
      </RX.View>
    )
  }
}

const styles = {
  container: RX.Styles.createViewStyle({
    padding: Styles.values.spacing,
    flex: 1,
  }),
  assistantContainer: RX.Styles.createViewStyle({
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  }),
  footer: RX.Styles.createViewStyle({
    position: 'absolute',
    bottom: Styles.values.spacing,
    left: Styles.values.spacing,
    right: Styles.values.spacing,
  }),
}
