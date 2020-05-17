/*
 * index.native.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import RX from 'reactxp'


interface PromptNativeProps {
  style?: any,
}

/**
 * TODO
 * */
export default class PromptNative extends RX.Component<PromptNativeProps> {
  public render() {
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
  container: RX.Styles.createViewStyle({}),
}
