/*
 * Page.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import Styles from '@App/Styles'
import { ThemeContext } from '@App/ThemeContext'
import Footer from '@Common/Footer/Footer'
import ResponsiveWidthStore from '@Services/ResponsiveWidthStore'
import RX from 'reactxp'
import { ComponentBase } from 'resub'


interface PageProps {
  style?: any,
  scrollViewProps?: RX.Types.ScrollViewProps,
  outermostViewStyle?: RX.Types.ViewStyle,
  innermostViewStyle?: RX.Types.ViewStyle,
  maxWidth?: number
  outerContainerChildren?: any,
}

interface PageState {
  height: number,
  width: number,
  screenWidth: number,
  hideDrawer: boolean,
}

export default class Page extends ComponentBase<PageProps, PageState> {
  public render() {
    const { width, screenWidth } = this.state

    return (
      <ThemeContext.Consumer>
        {({ theme }) => (
          <RX.ScrollView
            {...this.props.scrollViewProps}
            style={[
              styles.container, {
                // backgroundColor: theme.colors.bg,
                height: this.state.height,
                width: screenWidth,
              },
              this.props.scrollViewProps ? this.props.scrollViewProps.style : {}
            ]}
          >
            <RX.Animated.View
              style={[
                {
                  width: screenWidth,
                  alignItems: 'center',
                },
                this.props.outermostViewStyle,
              ]}
            >
              <RX.View
                style={[{
                  width,
                  paddingTop: Styles.values.spacingLarge,
                  padding: Styles.values.spacing,
                }, this.props.innermostViewStyle]}
              >
                {this.props.children}
              </RX.View>

              {this.props.outerContainerChildren}
            </RX.Animated.View>
            <Footer
              style={{
                width
              }}
            />
          </RX.ScrollView>
        )}
      </ThemeContext.Consumer>
    )
  }

  protected _buildState(props: PageProps, initialBuild: boolean): Partial<PageState> | undefined {
    return {
      screenWidth: ResponsiveWidthStore.getWidth(),
      width: ResponsiveWidthStore.getWidthConsideringMaxWidth(),
      height: ResponsiveWidthStore.getHeight(),
      hideDrawer: !ResponsiveWidthStore.isDrawerVisible(),
    }
  }
}

const styles = {
  container: RX.Styles.createScrollViewStyle({
    flex: 1,
    alignSelf: 'center',
  }),
}
