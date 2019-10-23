/*
 * KeyboardAvoidable.tsx
 * Copyright: Ouranos Studio 2019
 */

import RX from 'reactxp'


interface KeyboardAvoidableProps {
  enabled?: boolean,
  style?: any,

  [k: string]: any,
}

export default class KeyboardAvoidable extends RX.Component<KeyboardAvoidableProps> {
  public render() {
    const { children, style } = this.props

    return (
      <RX.View style={style}>
        {children}
      </RX.View>
    )
  }
}
