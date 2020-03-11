/*
 * Page.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import Styles from '@App/Styles'
import Footer from '@Common/Footer/Footer'
import LoadingIndicator from '@Common/LoadingIndicator/LoadingIndicator'
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

  lazyRender?: boolean,
}

interface PageState {
  height: number,
  width: number,
  screenWidth: number,

  shouldRender?: boolean,
}

export default class Page extends ComponentBase<PageProps, PageState> {
  constructor(props: PageProps) {
    super(props)

    this.state = {
      screenWidth: ResponsiveWidthStore.getWidth(),
      width: ResponsiveWidthStore.getWidthConsideringMaxWidth(),
      height: ResponsiveWidthStore.getHeight(),
      shouldRender: !props.lazyRender,
    }
  }

  componentDidMount() {
    if (this.props.lazyRender) {
      setImmediate(() => {
        this.setState({
          shouldRender: true,
        })
      })
    }
  }

  public render() {
    const { width, screenWidth, shouldRender } = this.state

    return (
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
              minHeight: this.state.height,
              width,
              paddingTop: Styles.values.spacingLarge,
              padding: Styles.values.spacing,
            }, this.props.innermostViewStyle]}
          >
            {
              shouldRender
                ? this.props.children
                : (
                  <RX.View
                    style={{
                      position: 'absolute',
                      left: 0,
                      right: 0,
                      top: 0,
                      height: this.state.height,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <LoadingIndicator />
                  </RX.View>
                )
            }
          </RX.View>

          {this.props.outerContainerChildren}
        </RX.Animated.View>
        <Footer
          style={{
            width
          }}
        />
      </RX.ScrollView>
    )
  }

  protected _buildState(props: PageProps, initialBuild: boolean): Partial<PageState> | undefined {
    return {
      screenWidth: ResponsiveWidthStore.getWidth(),
      width: ResponsiveWidthStore.getWidthConsideringMaxWidth(),
      height: ResponsiveWidthStore.getHeight(),
    }
  }
}

const styles = {
  container: RX.Styles.createScrollViewStyle({
    flex: 1,
    alignSelf: 'center',
  }),
}
