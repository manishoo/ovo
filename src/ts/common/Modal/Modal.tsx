/*
 * Modal.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import { ApolloProvider, ApolloProvider as ApolloHooksProvider } from '@apollo/client'
import client from '@App/client'
import Styles from '@App/Styles'
import { Theme } from '@App/Theme'
import { ThemeContext } from '@App/ThemeContext'
import ResponsiveWidthStore from '@Services/ResponsiveWidthStore'

import KeyCodes from '@Utils/KeyCodes'
import assert from 'assert'

import RX from 'reactxp'
import { ComponentBase } from 'resub'


interface ModalProps extends RX.CommonProps {
  modalId: string;
  children?: JSX.Element | JSX.Element[];
  modalWidth?: number;
  fullWidth?: boolean;
  modalHeight?: number;
  fullHeight?: boolean;
  theme: Theme
}

interface ModalState {
  widthStyle?: RX.Types.ViewStyleRuleSet;
  heightStyle?: RX.Types.ViewStyleRuleSet;
}

const _opacityAnimationDuration = 150
const _scalingAnimationDuration = 250
const _initialScalingRatio = 0.5

const _styles = {
  modalContainerBackground: RX.Styles.createViewStyle({
    ...Styles.values.absolutelyExtended,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    flexDirection: 'row'
  }),
  modalContainer: RX.Styles.createViewStyle({
    flex: -1,
    flexDirection: 'row'
  }),
  modalBox: RX.Styles.createViewStyle({
    flex: -1,
    alignItems: 'center',
    justifyContent: 'center',
    // margin: 32
  })
}

export default class Modal extends ComponentBase<ModalProps, ModalState> {
  private static _visibleModalMap: { [modalId: string]: Modal } = {}

  private _contentOpacityValue = new RX.Animated.Value(1)
  private _contentScaleValue = new RX.Animated.Value(_initialScalingRatio)
  private _contentScaleAnimationStyle = RX.Styles.createAnimatedViewStyle({
    opacity: this._contentOpacityValue,
    transform: [{
      scale: this._contentScaleValue
    }]
  })

  private _opacityAnimationValue = new RX.Animated.Value(1)
  private _opacityAnimationStyle = RX.Styles.createAnimatedViewStyle({
    opacity: this._opacityAnimationValue
  })

  static async dismissAnimated(modalId: string) {
    return new Promise((resolve, reject) => {
      let modal = Modal._visibleModalMap[modalId]
      if (!modal) {
        reject('modal id not found')
      }

      modal._animateClose(() => {
        RX.Modal.dismiss(modalId)
        resolve()
      })
    })
  }

  componentWillMount() {
    // To give children a chance to cancel the ESC handler,
    // subscribing in componentWillMount so that the children
    // could subscribe after.
    super.componentWillMount()

    RX.Input.keyUpEvent.subscribe(this._onKeyUp)
  }

  componentDidMount() {
    super.componentDidMount()

    Modal._visibleModalMap[this.props.modalId] = this

    RX.Animated.timing(this._contentScaleValue, {
      toValue: 1,
      duration: _scalingAnimationDuration,
      easing: RX.Animated.Easing.OutBack(),
      useNativeDriver: true
    }).start()
  }

  componentWillUnmount() {
    super.componentWillUnmount()

    delete Modal._visibleModalMap[this.props.modalId]

    RX.Input.keyUpEvent.unsubscribe(this._onKeyUp)
  }

  componentWillUpdate(newProps: ModalProps, newState: ModalState, newContext: any) {
    super.componentWillUpdate!(newProps, newState, newContext)

    // We assume the modalId doesn't change.
    assert.ok(newProps.modalId === this.props.modalId)
  }

  public render() {
    const modalBoxStyles = [_styles.modalBox, this.state.widthStyle, this.state.heightStyle]
    const modalContentStyles = [_styles.modalContainer, this._contentScaleAnimationStyle, this.state.heightStyle]

    let modalContent = (
      <RX.Animated.View style={modalContentStyles}>
        <RX.View
          style={modalBoxStyles}
          onPress={this._clickInside}
          accessibilityTraits={RX.Types.AccessibilityTrait.Dialog}
          restrictFocusWithin={true}
          disableTouchOpacityAnimation={true}
          tabIndex={-1}
        >
          {this.props.children}
        </RX.View>
      </RX.Animated.View>
    )

    return (
      <ApolloProvider client={client}>
        <ApolloHooksProvider client={client}>
          <ThemeContext.Provider
            value={{
              theme: this.props.theme,
              toggleTheme: () => null,
            }}
          >
            <RX.Animated.View
              style={[_styles.modalContainerBackground, this._opacityAnimationStyle]}
              onPress={this._clickOutside}
              onLongPress={this._onLongPressOutside}
              disableTouchOpacityAnimation={true}
            >
              {modalContent}
            </RX.Animated.View>
          </ThemeContext.Provider>
        </ApolloHooksProvider>
      </ApolloProvider>

    )
  }

  protected _buildState(props: ModalProps, initialBuild: boolean): Partial<ModalState> {
    let newState: Partial<ModalState> = {}

    newState.widthStyle = undefined
    newState.heightStyle = undefined

    if (props.modalWidth) {
      newState.widthStyle = RX.Styles.createViewStyle({
        width: props.modalWidth,
      }, false)
    }
    if (props.fullWidth) {
      newState.widthStyle = RX.Styles.createViewStyle({
        width: ResponsiveWidthStore.getWidth(),
      }, false)
    }

    if (props.modalHeight) {
      newState.heightStyle = RX.Styles.createViewStyle({
        height: props.modalHeight,
      }, false)
    }
    if (props.fullHeight) {
      newState.heightStyle = RX.Styles.createViewStyle({
        height: ResponsiveWidthStore.getHeight(),
      }, false)
    }

    return newState
  }

  private _onKeyUp = (e: RX.Types.KeyboardEvent) => {
    if (e.keyCode === KeyCodes.Escape) {
      this._clickOutside(e)
      return true
    }
    return false
  }

  private _clickInside = (e: RX.Types.SyntheticEvent) => {
    // Do nothing, keeps click/press from propogating up to the dismissal action.
    e.stopPropagation()
  }

  private _onLongPressOutside = (e: RX.Types.SyntheticEvent) => {
    // Do nothing, required to keep linkTo from firing on long press.
    e.stopPropagation()
  }

  private _clickOutside = (e: RX.Types.SyntheticEvent) => {
    e.stopPropagation()
    Modal.dismissAnimated(this.props.modalId)
  }

  private _animateClose(onAnimationComplete: () => void) {
    RX.Animated.parallel([
      RX.Animated.timing(this._opacityAnimationValue, {
        toValue: 0,
        duration: _opacityAnimationDuration,
        easing: RX.Animated.Easing.Out(),
        useNativeDriver: true
      }),
      RX.Animated.timing(this._contentOpacityValue, {
        toValue: 0,
        duration: _opacityAnimationDuration,
        easing: RX.Animated.Easing.Out(),
        useNativeDriver: true
      }),
      RX.Animated.timing(this._contentScaleValue, {
        toValue: _initialScalingRatio,
        duration: _scalingAnimationDuration,
        easing: RX.Animated.Easing.Out(),
        useNativeDriver: true
      })
    ]).start(() => {
      onAnimationComplete()
    })
  }
}
