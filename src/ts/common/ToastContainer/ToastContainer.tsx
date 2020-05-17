/*
 * ToastContainer.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import Styles from '@App/Styles'
import { Theme } from '@App/Theme'
import { ThemeContext } from '@App/ThemeContext'
import Text from '@Common/Text/Text'
import ToastStore, { Toast } from '@Services/ToastStore'
import RX from 'reactxp'
import { ComponentBase } from 'resub'


interface ToastProps {
  style?: any,
}

interface ToastState {
  toasts: Toast[]
}

export default class ToastContainer extends ComponentBase<ToastProps, ToastState> {
  public render() {
    const { style } = this.props

    return (
      <ThemeContext.Consumer>
        {({ theme }) => (
          <RX.View
            style={[styles.container, style]}
          >
            {
              this.state.toasts.map(toast => this._renderToast(toast, theme))
            }
          </RX.View>
        )}
      </ThemeContext.Consumer>
    )
  }

  protected _buildState(props: ToastProps, initialBuild: boolean): Partial<ToastState> | undefined {
    return {
      toasts: ToastStore.getToasts(),
    }
  }

  private _renderToast = (toast: Toast, theme: Theme) => {
    switch (toast.type) {
      case ToastStore.Types.Success:
        return (
          <RX.View
            key={toast._id}
            style={[
              styles.toast,
              {
                backgroundColor: theme.colors.toast.success,
                borderWidth: 1,
                borderColor: theme.colors.cardBg,
              }
            ]}
          >
            <Text
              style={{
                color: theme.colors.cardBg,
              }}
            >{toast.message}</Text>
          </RX.View>
        )
      case ToastStore.Types.Error:
        return (
          <RX.View
            key={toast._id}
            style={[
              styles.toast,
              {
                backgroundColor: theme.colors.toast.error,
                borderWidth: 1,
                borderColor: theme.colors.cardBg,
              }
            ]}
          >
            <Text
              style={{
                color: theme.colors.cardBg,
              }}
            >{toast.message}</Text>
          </RX.View>
        )
      default:
        return (
          <RX.View
            key={toast._id}
            style={[
              styles.toast,
              {
                borderWidth: 1,
                borderColor: theme.colors.toast.default
              }
            ]}
          >
            <Text
              style={{
                color: theme.colors.toast.default,
              }}
            >{toast.message}</Text>
          </RX.View>
        )
    }
  }
}

const styles = {
  container: RX.Styles.createViewStyle({
    position: 'absolute',
    top: 0,
    alignSelf: 'center',
  }),
  toast: RX.Styles.createViewStyle({
    padding: Styles.values.spacing,
    borderRadius: 8,
    marginTop: Styles.values.spacing,
  }),
}
