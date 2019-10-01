/*
 * Prompt.native.tsx
 * Copyright: Ouranos Studio 2019
 */

import RX from 'reactxp'


interface PromptNativeProps {
  style?: any,
}

/**
 * TODO
 * */
export default class PromptNative extends RX.Component<PromptNativeProps> {
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

  }),
}
