/*
 * CenterAlignedPageView.tsx
 * Copyright: Ouranos Studio 2019
 */

import Styles from '@App/Styles'
import { ThemeContext } from '@App/ThemeContext'
import Footer from '@Common/Footer/Footer'
import ResponsiveWidthStore from '@Services/ResponsiveWidthStore'
import RX from 'reactxp'
import { ComponentBase } from 'resub'


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
  private _animatedValue = RX.Animated.createValue(0)
  private _animatedStyle = RX.Styles.createAnimatedViewStyle({
    opacity: this._animatedValue
  })

  protected _buildState(props: CenterAlignedPageViewProps, initialBuild: boolean): Partial<CenterAlignedPageViewState> | undefined {
    return {
      width: ResponsiveWidthStore.getWidthConsideringDrawer(),
      height: ResponsiveWidthStore.getHeight(),
      hideDrawer: !ResponsiveWidthStore.isDrawerVisible(),
    }
  }

  public render() {
    const { width } = this.state

    return (
      <ThemeContext.Consumer>
        {({ theme }) => (
          <RX.ScrollView
            {...this.props.scrollViewProps}
            style={[
              styles.container, {
                // backgroundColor: theme.colors.bg,
                height: this.state.height,
                width
              },
              this.props.scrollViewProps ? this.props.scrollViewProps.style : {}
            ]}
          >
            <RX.Animated.View
              style={[
                {
                  width,
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
            <Footer />
          </RX.ScrollView>
        )}
      </ThemeContext.Consumer>
    )
  }

  componentDidMount() {
    RX.Animated.timing(this._animatedValue, {
      toValue: 1,
      duration: 300,
    }).start()
  }

  private _getMaxWidth = () => {
    if (this.props.maxWidth) return this.props.maxWidth

    return this.state.width
  }
}

const styles = {
  container: RX.Styles.createScrollViewStyle({
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    alignSelf: 'center',
    // padding: Styles.values.spacingLarge,
  }),
}
