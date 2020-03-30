/*
 * RegisterScreen.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import Styles from '@App/Styles'
import Assistant from '@Common/Assistant/Assistant'
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
            resizeMode={'cover'}
          />
        }
        <RX.View style={{ flexDirection: 'row' }}>
          <Assistant size={70} />
          <Image
            source={ImageSource.Brand}
            style={styles.brand}
            resizeMode={'contain'}
          />
        </RX.View>
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
    width: 120,
    [Styles.values.marginStart]: Styles.values.spacing
  })
}
