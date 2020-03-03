/*
 * LoginScreen.tsx
 * Copyright: Ouranos Studio 2020
 */

import Link from '@Common/Link/Link'
import Text from '@Common/Text/Text'
import { Routes } from '@Models/common'
import ImageSource from '@Modules/images'
import ResponsiveWidthStore from '@Services/ResponsiveWidthStore'
import RX from 'reactxp'
import { ComponentBase } from 'resub'
import ForgotPasswordForm from './ForgotPasswordForm'


interface ForgotPasswordScreenProps {
  //
}

interface ForgotPasswordScreenState {
  height: number,
}

export default class ForgotPasswordScreen extends ComponentBase<ForgotPasswordScreenProps, ForgotPasswordScreenState> {
  public render() {
    return (
      <RX.View style={[styles.wrapper, { height: this.state.height }]}>
        <RX.Image
          source={ImageSource.Brand}
          style={styles.brand}
        />
        <ForgotPasswordForm {...this.props} />
      </RX.View>
    )
  }

  protected _buildState(props: ForgotPasswordScreenProps, initialBuild: boolean): Partial<ForgotPasswordScreenState> | undefined {
    return {
      height: ResponsiveWidthStore.getHeight(),
    }
  }
}

const styles = {
  wrapper: RX.Styles.createViewStyle({
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }),
  brand: RX.Styles.createImageStyle({
    width: 165,
    height: 75,
  })
}
