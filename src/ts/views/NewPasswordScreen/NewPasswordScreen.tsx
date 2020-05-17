/*
 * NewPasswordScreen.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import ImageSource from '@Modules/images'
import ResponsiveWidthStore from '@Services/ResponsiveWidthStore'
import RX from 'reactxp'
import { ComponentBase } from 'resub'
import NewPasswordForm from './NewPasswordForm'


interface NewPasswordScreenProps {
  //
}

interface NewPasswordScreenState {
  height: number,
}

export default class NewPasswordScreen extends ComponentBase<NewPasswordScreenProps, NewPasswordScreenState> {
  public render() {
    return (
      <RX.View style={[styles.wrapper, { height: this.state.height }]}>
        <RX.Image
          source={ImageSource.Brand}
          style={styles.brand}
        />
        <NewPasswordForm {...this.props} />
      </RX.View>
    )
  }

  protected _buildState(props: NewPasswordScreenProps, initialBuild: boolean): Partial<NewPasswordScreenState> | undefined {
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
