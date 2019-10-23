/*
 * KeyboardAvoidable.ios.tsx
 * Copyright: Ouranos Studio 2019
 */

import { KeyboardAvoidingView, KeyboardAvoidingViewProps } from 'react-native'
import RX from 'reactxp'


export default class KeyboardAvoidable extends RX.Component<KeyboardAvoidingViewProps> {
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
