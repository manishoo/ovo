/*
 * CenterAlignedPageView.tsx
 * Copyright: Ouranos Studio 2019
 */

import RX from 'reactxp'
import { ComponentBase } from 'resub'
import Styles from 'src/ts/app/Styles'
import ResponsiveWidthStore from 'src/ts/stores/ResponsiveWidthStore'


interface CenterAlignedPageViewProps {
  style?: any,
  scrollViewProps?: RX.Types.ScrollViewProps,
  outermostViewStyle?: RX.Types.ViewStyle,
  innermostViewStyle?: RX.Types.ViewStyle,
  maxWidth?: number
}

interface CenterAlignedPageViewState {
  height: number,
  width: number,
  hideDrawer: boolean,
}

export default class CenterAlignedPageView extends ComponentBase<CenterAlignedPageViewProps, CenterAlignedPageViewState> {
  constructor(props) {
    super(props)

    this.state = {
      width: ResponsiveWidthStore.getWidth(),
      height: ResponsiveWidthStore.getHeight(),
      hideDrawer: ResponsiveWidthStore.isSmallOrTinyScreenSize(),
    }
  }

  protected _buildState(props: CenterAlignedPageViewProps, initialBuild: boolean): Partial<CenterAlignedPageViewState> | undefined {
    return {
      width: ResponsiveWidthStore.getWidth(),
      height: ResponsiveWidthStore.getHeight(),
      hideDrawer: ResponsiveWidthStore.isSmallOrTinyScreenSize(),
    }
  }

  render() {
    return (
      <RX.ScrollView
        {...this.props.scrollViewProps}
        style={[
          styles.container, {
            height: this.state.height,
            width: this._getWindowTrueWidth()
          },
          this.props.scrollViewProps ? this.props.scrollViewProps.style : {}
        ]}
      >
        <RX.Animated.View
          style={[
            {
              width: this._getWindowTrueWidth(),
              alignItems: 'center',
            },
            this._animatedStyle,
            this.props.outermostViewStyle,
          ]}
        >
          <RX.View
            style={[{
              width: this.state.width < this._getMaxWidth() ? this.state.width : this._getMaxWidth(),
              padding: Styles.values.spacing * 2,
            }, this.props.innermostViewStyle]}
          >
            {this.props.children}
          </RX.View>
        </RX.Animated.View>
      </RX.ScrollView>
    )
  }

  componentDidMount() {
    RX.Animated.timing(this._animatedValue, {
      toValue: 1,
      duration: 500,
    }).start()
  }

  private _getMaxWidth = () => {
    if (this.props.maxWidth) return this.props.maxWidth

    return Styles.values.mainContentMaxWidth
  }

  private _getWindowTrueWidth = () => {
    if (this.state.hideDrawer) {
      return this.state.width
    }

    return this.state.width - Styles.values.drawerWidth
  }

  private _animatedValue = RX.Animated.createValue(0.99)
  private _animatedStyle = RX.Styles.createAnimatedViewStyle({
    transform: [{scale: this._animatedValue}]
  })
}

const styles = {
  container: RX.Styles.createViewStyle({
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // padding: Styles.values.spacingLarge,
    backgroundColor: '#fff',
  }),
}
