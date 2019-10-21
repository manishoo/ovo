/*
 * LoginScreen.tsx
 * Copyright: Ouranos Studio 2019
 */

import Link from 'common/Link/Link'
import Text from 'common/Text/Text'
import RX from 'reactxp'
import { ComponentBase } from 'resub'
import { Routes } from 'src/ts/models/common'
import ImageSource from 'src/ts/modules/images/index.web'
import ResponsiveWidthStore from 'src/ts/stores/ResponsiveWidthStore'
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
        <Link to={Routes.register}><Text translate>Don't Have an account? Register</Text></Link>
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
