/*
 * index.native.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import { KeyboardAvoidingView } from 'react-native'
import RX from 'reactxp'


interface KeyboardAvoidableProps {
  enabled?: boolean,
}

export default class KeyboardAvoidable extends RX.Component<KeyboardAvoidableProps> {
  public render() {
    const { children, enabled, ...props } = this.props

    return (
      <KeyboardAvoidingView
        behavior='position'
        enabled={enabled}
        {...props}
      >
        {children}
      </KeyboardAvoidingView>
    )
  }
}
