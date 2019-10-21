/*
 * FeedScreen.tsx
 * Copyright: Ouranos Studio 2019
 */

import Text from 'common/Text/Text'
import RX from 'reactxp'
import { fullWidth } from 'src/ts/utilities'


interface FeedScreenProps {
  style?: any,
}

export default class FeedScreen extends RX.Component<FeedScreenProps> {
  public render() {
    const { style } = this.props

    return (
      <RX.View
        style={[styles.container, style]}
      >
        <Text translate style={styles.title}>Feed</Text>
        <RX.ScrollView
          style={[styles.scrollView, style]}
        >
        </RX.ScrollView>
      </RX.View>
    )
  }
}

const styles = {
  container: RX.Styles.createViewStyle({
    width: fullWidth(),
    padding: 32,
  }),
  scrollView: RX.Styles.createScrollViewStyle({
    width: fullWidth() * 3,
    backgroundColor: '#fff',
  }),
  title: RX.Styles.createTextStyle({
    fontSize: 50,
    fontWeight: 'bold',
    color: '#e7e7e7',
  }),
}
