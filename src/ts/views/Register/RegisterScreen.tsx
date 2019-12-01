/*
 * RegisterScreen.tsx
 * Copyright: Ouranos Studio 2019
 */

import Image from '@Common/Image/Image'
import ImageSource from '@Modules/images'
import ResponsiveWidthStore from '@Services/ResponsiveWidthStore'
import RegisterForm from '@Views/Register/RegisterForm'
import RX from 'reactxp'
import { ComponentBase } from 'resub'


interface RegisterScreenProps extends RX.CommonProps {
  style?: any,
}

interface RegisterScreenState {
  isSmallOrTinyScreenSize: boolean,
  height: number,
}

export default class RegisterScreen extends ComponentBase<RegisterScreenProps, RegisterScreenState> {
  public render() {
    return (
      <RX.View style={[styles.wrapper, { height: this.state.height }]}>
        {
          false/*!this.state.isSmallOrTinyScreenSize*/ &&
          <Image
            source={ImageSource.KitchenIllustration}
            style={styles.image}
          />
        }
        <Image
          source={ImageSource.Brand}
          style={styles.brand}
        />
        <RegisterForm />
      </RX.View>
    )
  }

  protected _buildState(props: RegisterScreenProps, initialBuild: boolean): Partial<RegisterScreenState> | undefined {
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
  image: RX.Styles.createImageStyle({
    position: 'absolute',
    right: 0,
    width: 600,
    height: 500,
  }),
  brand: RX.Styles.createImageStyle({
    width: 165,
    height: 75,
  })
}
