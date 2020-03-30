/*
 * Page.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import Styles from '@App/Styles'
import { ThemeContext } from '@App/ThemeContext'
import Footer from '@Common/Footer/Footer'
import LoadingIndicator from '@Common/LoadingIndicator/LoadingIndicator'
import { ModalContext } from '@Common/Modal/Modal'
import ResponsiveWidthStore from '@Services/ResponsiveWidthStore'
import { createContext, FC, useCallback, useMemo, useState } from 'react'
import RX from 'reactxp'
import { ComponentBase } from 'resub'


interface PageProps {
  style?: any,
  scrollViewProps?: RX.Types.ScrollViewProps,
  outermostViewStyle?: any,
  innermostViewStyle?: any,
  maxWidth?: number
  outerContainerChildren?: any,

  lazyRender?: boolean,
  withFooter?: boolean,
  setScrollContext?: boolean,
}

interface PageState {
  height: number,
  width: number,
  screenWidth: number,
  isSmallOrTinyScreenSize: boolean,

  shouldRender?: boolean,
}

export const PageScrollContext = createContext<{ scrollTop: number, pageHeight: number, setScrollEnabled: (enabled: boolean) => void }>({
  scrollTop: 0,
  pageHeight: 0,
  setScrollEnabled: () => null,
})

const PageScrollProvider: FC<RX.Types.ScrollViewProps> = ({ children, ...props }) => {
  const [scrollTop, setScrollTop] = useState(0)
  const [scrollEnabled, setScrollEnabled] = useState(true)
  const [pageHeight, setPageHeight] = useState(0)
  const context = useMemo(() => ({
    scrollTop,
    pageHeight,
    setScrollEnabled,
  }), [scrollTop, pageHeight])

  return (
    <RX.ScrollView
      {...props}
      scrollEnabled={scrollEnabled}
      onScroll={useCallback((newScrollTop) => setScrollTop(newScrollTop), [])}
      onContentSizeChange={(_width, height) => setPageHeight(height - 417)}
    >
      <PageScrollContext.Provider
        value={context}
      >
        {children}
      </PageScrollContext.Provider>
    </RX.ScrollView>
  )
}

export default class Page extends ComponentBase<PageProps, PageState> {
  constructor(props: PageProps) {
    super(props)

    this.state = {
      screenWidth: ResponsiveWidthStore.getWidth(),
      width: ResponsiveWidthStore.getWidthConsideringMaxWidth(),
      height: ResponsiveWidthStore.getHeight(),
      isSmallOrTinyScreenSize: ResponsiveWidthStore.isSmallOrTinyScreenSize(),
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
    const { withFooter = true, maxWidth = Styles.values.mainContentMaxWidth, setScrollContext } = this.props

    const Container = setScrollContext ? PageScrollProvider : RX.ScrollView

    return (
      <ModalContext.Consumer>
        {({ modalId }) => (
          <Container
            {...this.props.scrollViewProps}
            style={[
              styles.container, {
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
              <ModalContext.Consumer>
                {({ modalId }) => (
                  <ThemeContext.Consumer>
                    {({ theme }) => (
                      <RX.View
                        style={[
                          {
                            minHeight: this.state.height - 54,
                            width,
                            maxWidth,
                            padding: Styles.values.spacing * 2,
                            paddingTop: Styles.values.spacingLarge,
                            backgroundColor: theme.colors.bg,
                            borderRadius: 10,
                            marginTop: modalId ? Styles.values.spacing : undefined,
                            marginBottom: modalId ? Styles.values.spacing : undefined,
                          },
                          this.props.innermostViewStyle,
                        ]}
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
                                  alignItems: 'center',
                                  justifyContent: 'center',

                                  height: this.state.height,
                                }}
                              >
                                <LoadingIndicator />
                              </RX.View>
                            )
                        }
                      </RX.View>
                    )}
                  </ThemeContext.Consumer>
                )}
              </ModalContext.Consumer>


              {this.props.outerContainerChildren}
            </RX.Animated.View>

            {
              !modalId && !this.state.isSmallOrTinyScreenSize &&
              <Footer
                style={{
                  width
                }}
              />
            }
          </Container>
        )}
      </ModalContext.Consumer>
    )
  }

  protected _buildState(props: PageProps, initialBuild: boolean): Partial<PageState> | undefined {
    return {
      screenWidth: ResponsiveWidthStore.getWidth(),
      width: ResponsiveWidthStore.getWidthConsideringMaxWidth(),
      height: ResponsiveWidthStore.getHeight(),
      isSmallOrTinyScreenSize: ResponsiveWidthStore.isSmallOrTinyScreenSize(),
    }
  }
}

const styles = {
  container: RX.Styles.createScrollViewStyle({
    flex: 1,
    alignSelf: 'center',
  }),
}
