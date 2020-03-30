/*
 * Setup.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import Styles from '@App/Styles'
import { ThemeContext } from '@App/ThemeContext'
import Back from '@Common/Back/Back'
import LocationStore from '@Services/LocationStore'
import ResponsiveWidthStore from '@Services/ResponsiveWidthStore'
import RX from 'reactxp'
import { ComponentBase } from 'resub'
import AssistantChat from './AssistantChat'


const MODAL_ID = 'SETUP'
const MAX_WIDTH = 451

const _styles = {
  container: RX.Styles.createViewStyle({
    // alignItems: 'center',
    // justifyContent: 'center',
    maxWidth: MAX_WIDTH,
    alignSelf: 'center',
  }),
  modalContainerBackground: RX.Styles.createViewStyle({
    position: 'absolute',
    backgroundColor: '#5168ec',
    borderRadius: 10000,

    // @ts-ignore web
    // zIndex: 2
  }),
}

interface SetupScreenProps {
  style?: any,
}

interface SetupScreenState {
  width: number,
  height: number,
  isTinyWidth: boolean,
}

export default class SetupScreen extends ComponentBase<SetupScreenProps, SetupScreenState> {
  private _scrollViewRef: RX.ScrollView | null = null
  private _circleScaleAnimationValue = new RX.Animated.Value(0)
  private _circleTopAnimationValue = new RX.Animated.Value(0)
  private _circleAnimationStyle = RX.Styles.createAnimatedViewStyle({
    top: this._circleTopAnimationValue,
    transform: [{ scale: this._circleScaleAnimationValue }],
  })
  private _contentTopAnimationValue = new RX.Animated.Value(0)
  private _contentAnimationStyle = RX.Styles.createAnimatedViewStyle({
    top: this._contentTopAnimationValue,
  })

  componentDidMount() {
    RX.Animated.parallel([
      RX.Animated.timing(this._circleScaleAnimationValue, {
        toValue: 2.5,
        duration: 400,
        easing: RX.Animated.Easing.Out(),
        useNativeDriver: true
      }),
      RX.Animated.timing(this._circleTopAnimationValue, {
        toValue: this.state.height * 1 / 4,
        duration: 300,
        easing: RX.Animated.Easing.Out(),
        useNativeDriver: true
      }),
      RX.Animated.timing(this._contentTopAnimationValue, {
        toValue: 0,
        duration: 300,
        easing: RX.Animated.Easing.Out(),
        useNativeDriver: true
      })
    ]).start()
  }

  render() {
    const _fullScreenStyle = { width: this.state.width, height: this.state.width }

    return (
      <ThemeContext.Consumer>
        {({ theme }) => (
          <RX.View style={{
            ...Styles.values.absolutelyExtended,
            alignItems: 'center',

            // @ts-ignore // FIXME
            zIndex: 11,
          }}>
            <RX.Animated.View
              style={[
                _styles.modalContainerBackground,
                _fullScreenStyle,
                this._circleAnimationStyle,
              ]}
            >
            </RX.Animated.View>
            <RX.Animated.View style={[
              {
                position: 'absolute',
              },
              this._contentAnimationStyle
            ]}>
              <RX.ScrollView
                style={_styles.container}
                ref={ref => this._scrollViewRef = ref}
              >
                <AssistantChat
                  width={this.state.isTinyWidth ? this.state.width : MAX_WIDTH}
                  height={this.state.height}
                  setScrollTop={this._onScrollToTop}
                  onClose={this._onChatClose}
                />
              </RX.ScrollView>
              <RX.View
                ignorePointerEvents
                style={{
                  backgroundColor: '#5168ec',
                  [Styles.values.borderBottomEndRadius]: 10,
                  position: 'absolute',
                  [Styles.values.start]: Styles.values.spacing / 2,
                  top: 0,
                  padding: Styles.values.spacing / 2,
                  [Styles.values.paddingEnd]: Styles.values.spacing,
                  opacity: .9
                }}
              >
                <Back
                  onPress={this._onChatClose}
                />
              </RX.View>
            </RX.Animated.View>
          </RX.View>
        )}
      </ThemeContext.Consumer>
    )
  }

  protected _buildState(props: SetupScreenProps, initialBuild: boolean): Partial<SetupScreenState> | undefined {
    const height = ResponsiveWidthStore.getHeight()

    if (initialBuild) {
      RX.Animated.parallel([
        RX.Animated.timing(this._circleTopAnimationValue, {
          toValue: height * 2,
          duration: 0,
        }),
        RX.Animated.timing(this._contentTopAnimationValue, {
          toValue: height * 2,
          duration: 0,
          easing: RX.Animated.Easing.InOut(),
          useNativeDriver: true
        })
      ])
        .start()
    }

    return {
      height: height,
      width: ResponsiveWidthStore.getWidth(),
      isTinyWidth: ResponsiveWidthStore.isTinyWidth(),
    }
  }

  private _onClose = async () => {
    return new Promise((resolve => RX.Animated.parallel([
      RX.Animated.timing(this._circleScaleAnimationValue, {
        toValue: 0,
        duration: 300,
        easing: RX.Animated.Easing.Out(),
        useNativeDriver: true
      }),
      RX.Animated.timing(this._circleTopAnimationValue, {
        toValue: this.state.height,
        duration: 300,
        easing: RX.Animated.Easing.Out(),
        useNativeDriver: true
      }),
      RX.Animated.timing(this._contentTopAnimationValue, {
        toValue: this.state.height,
        duration: 200,
        easing: RX.Animated.Easing.InOut(),
        useNativeDriver: true
      })
    ]).start(resolve)))
  }

  private _onChatClose = () => {
    this._onClose()
      .then(() => {
        if (this.props.location.state) {
          this.props.history.push({
            ...this.props.location.state.background,
            state: undefined,
          })
        }
      })
  }

  private _handleBack = () => {
    return this._onClose()
      .then(() => LocationStore.navigate(this.props, 'back'))
  }

  private _onScrollToTop = (top: number) => {
    if (!this._scrollViewRef) return null

    this._scrollViewRef.setScrollTop(top)
  }
}

export const showSetupModal = ({ style, onDismiss }: any) => {
  return RX.Modal.show(
    <SetupScreen />,
    MODAL_ID)
}
