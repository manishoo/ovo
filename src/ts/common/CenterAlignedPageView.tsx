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
        style={[styles.container, {
          height: this.state.height,
          width: this._getWindowTrueWidth()
        }, this.props.scrollViewProps ? this.props.scrollViewProps.style : {}]}
      >
        <RX.View
          style={[{
            width: this._getWindowTrueWidth(),
            alignItems: 'center',
          }, this.props.outermostViewStyle]}
        >
          <RX.View
            style={[{
              width: this.state.width < Styles.values.mainContentMaxWidth ? this.state.width : Styles.values.mainContentMaxWidth,
            }, this.props.innermostViewStyle]}
          >
            {this.props.children}
          </RX.View>
        </RX.View>
      </RX.ScrollView>
    )
  }

  private _getWindowTrueWidth = () => {
    if (this.state.hideDrawer) {
      return this.state.width
    }

    return this.state.width - Styles.values.drawerWidth
  }
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
