/*
 * LoginScreen.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import Styles from '@App/Styles'
import Link from '@Common/Link/Link'
import Text from '@Common/Text/Text'
import { Routes } from '@Models/common'
import ImageSource from '@Modules/images'
import ResponsiveWidthStore from '@Services/ResponsiveWidthStore'
import RX from 'reactxp'
import { ComponentBase } from 'resub'
import LoginForm from './LoginForm'


interface LoginScreenProps {
  //
}

interface LoginScreenState {
  isSmallOrTinyScreenSize: boolean,
  height: number,
}

export default class LoginScreen extends ComponentBase<LoginScreenProps, LoginScreenState> {
  public render() {
    return (
      <RX.View style={[styles.wrapper, { height: this.state.height }]}>
        <RX.Image
          source={ImageSource.Brand}
          style={styles.brand}
        />
        <LoginForm {...this.props} />
        <Link to={Routes.register}><Text translate='dontHaveAnAccount' /></Link>
        <Link to={Routes.forgotPassword} style={{ marginTop: Styles.values.spacing / 2 }}><Text
          translate='forgotPassword' /></Link>
      </RX.View>
    )
  }

  protected _buildState(props: LoginScreenProps, initialBuild: boolean): Partial<LoginScreenState> | undefined {
    return {
      isSmallOrTinyScreenSize: ResponsiveWidthStore.isSmallOrTinyScreenSize(),
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
