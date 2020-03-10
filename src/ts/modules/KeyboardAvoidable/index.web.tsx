/*
 * index.web.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import RX from 'reactxp'


interface KeyboardAvoidableProps {
  enabled?: boolean,
  style?: any,

  [k: string]: any,
}

export default class KeyboardAvoidable extends RX.Component<KeyboardAvoidableProps> {
  public render() {
    const { children, ...props } = this.props

    return (
      <RX.View {...props}>
        {children}
      </RX.View>
    )
  }
}
