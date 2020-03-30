/*
 * LandingScreen.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import Styles from '@App/Styles'
import { Theme } from '@App/Theme'
import { ThemeContext } from '@App/ThemeContext'
import Assistant from '@Common/Assistant/Assistant'
import FilledButton from '@Common/FilledButton/FilledButton'
import AppFooter from '@Common/Footer/Footer'
import Image from '@Common/Image/Image'
import { translate } from '@Common/LocalizedText/LocalizedText'
import Text from '@Common/Text/Text'
import { Routes } from '@Models/common'
import ImageSource from '@Modules/images'
import LocationStore from '@Services/LocationStore'
import ResponsiveWidthStore from '@Services/ResponsiveWidthStore'
import GeneratorSample from '@Views/LandingScreen/components/GeneratorSample'
import GoDownIndicator from '@Views/LandingScreen/components/GoDownIndicator'
import LandingHeader from '@Views/LandingScreen/components/LandingHeader/LandingHeader'
import { RouteChildrenProps } from 'react-router'
import RX from 'reactxp'
import { ComponentBase } from 'resub'


const { SectionsContainer, Section, Header, Footer, ScrollToTopOnMount } = require('react-fullpage')

const HEADER_FULL_HEIGHT = 140
const CONTENT_MAX_WIDTH = Styles.values.mainContentMaxWidth

// const HEADER_HEIGHT = 80
const GENERATOR_SECTION = 6

interface LandingScreenProps extends RX.CommonProps {
  style?: any,
}

interface LandingScreenState {
  height: number,
  width: number,
  isSmallOrTinyScreenSize?: boolean,
  isTinyWidth?: boolean,

  activeSection: number,
  scrollDisabled?: boolean,
}

export default class LandingScreen extends ComponentBase<LandingScreenProps & RouteChildrenProps<null, { isInBackground: boolean }>, LandingScreenState> {
  private _sectionsContainerRef: any

  public render() {
    const options = {
      sectionClassName: 'section',
      anchors: ['sectionOne', 'sectionTwo', 'sectionThree', 'sectionFour', 'sectionFive', 'sectionSix', 'get-a-plan'],
      scrollBar: false,
      navigation: true,
      verticalAlign: false,
      // sectionPaddingTop: '102px',
      // sectionPaddingBottom: '64px',
      arrowNavigation: true,
      delay: 300,
      scrollCallback: (states: any) => this.setState({ activeSection: states.activeSection, scrollDisabled: false })
    }
    const isInBackground = this.props.location.state && this.props.location.state.isInBackground

    const { text: textColor, bg: bgColor } = this._getColorForSection()

    return (
      <ThemeContext.Consumer>
        {({ theme }) => (
          <>
            <ScrollToTopOnMount />

            <Header>
              <LandingHeader
                onLinkPress={this.scrollTo}
                backgroundColor={this.state.activeSection === GENERATOR_SECTION ? this._getColorForSection(GENERATOR_SECTION).bg : undefined}
                textColor={textColor}
                style={[
                  {
                    width: this.state.width > CONTENT_MAX_WIDTH ? CONTENT_MAX_WIDTH : this.state.width,
                  },
                  this.state.activeSection === GENERATOR_SECTION && {
                    backgroundColor: bgColor,
                  },
                ]}
              />
            </Header>
            <SectionsContainer
              {...options}
              disabled={isInBackground || this.state.scrollDisabled}
              activeSection={this.state.activeSection}
              ref={(ref: any) => this._sectionsContainerRef = ref}
              navigationStyle={{
                right: 0,
                [Styles.values.end]: 0,
                color: textColor,
              }}
              navigationAnchorStyle={{
                backgroundColor: textColor,
              }}
            >
              <Section verticalAlign color={this._getColorForSection(0).bg}>
                <RX.View style={[
                  styles.alignCenter,
                  {
                    height: this.state.height/* - 102*/,
                    justifyContent: 'center',
                    alignItems: this.state.isSmallOrTinyScreenSize ? 'center' : undefined,
                    padding: Styles.values.spacing,
                  }
                ]}>
                  <Text
                    translate
                    style={[styles.title, {
                      color: textColor,
                      textAlign: this.state.isSmallOrTinyScreenSize ? 'center' : undefined,
                      [Styles.values.marginEnd]: this.state.isTinyWidth ? Styles.values.spacing * 3 : undefined,
                    }]}
                    selectable
                    type={Text.types.title}
                  >landingTitle</Text>
                  <Text
                    translate
                    style={[styles.subtitle, {
                      color: textColor,
                      // color: theme.colors.landingSubtitle,
                      textAlign: this.state.isSmallOrTinyScreenSize ? 'center' : undefined,
                      [Styles.values.marginEnd]: this.state.isTinyWidth ? Styles.values.spacing * 3 : undefined,
                    }]}
                  >landingSubtitle</Text>

                  <RX.View style={{ alignItems: 'stretch', width: 403 }}>
                    <RX.View style={{ flexDirection: 'row', marginTop: Styles.values.spacing }}>
                      <Image
                        source={ImageSource.GooglePlayButton}
                        style={[styles.storeButton, { [Styles.values.marginEnd]: Styles.values.spacing, }]}
                        resizeMode={'contain'}
                      />
                      <Image
                        source={ImageSource.AppStoreButton}
                        style={styles.storeButton}
                        resizeMode={'contain'}
                      />
                    </RX.View>
                    <Text
                      translate={translate.keys.Or}
                      style={{
                        color: textColor,
                        textAlign: 'center',
                        marginTop: Styles.values.spacing / 2,
                        marginBottom: Styles.values.spacing / 2,
                      }}
                    />
                    {/*<FilledButton label={translate.keys.GetStartedNow} onPress={this._openSetupModal} />*/}
                    <RX.View>
                      <FilledButton
                        label={translate.keys.GetStartedNow}
                        onPress={() => LocationStore.navigate(this.props, {
                          pathname: Routes.setupProcess,
                          state: { background: { ...this.props.location, state: { isInBackground: true } } }
                        })}
                      />
                    </RX.View>
                  </RX.View>

                  <RX.View
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      alignItems: 'center',
                    }}
                  >
                    <GoDownIndicator />
                  </RX.View>
                </RX.View>
              </Section>
              <Section color={this._getColorForSection(1).bg} verticalAlign>
                {this._renderSection(theme, translate('landing_1_t'), translate('landing_1_s'))}
              </Section>
              <Section color={this._getColorForSection(2).bg} verticalAlign>
                {this._renderSection(theme, translate('landing_2_t'), translate('landing_2_s'))}
              </Section>
              <Section color={this._getColorForSection(3).bg} verticalAlign>
                {this._renderSection(theme, translate('landing_3_t'), translate('landing_3_s'))}
              </Section>
              <Section color={this._getColorForSection(4).bg} verticalAlign>
                {this._renderSection(theme, translate('landing_4_t'), translate('landing_4_s'))}
              </Section>
              <Section color={this._getColorForSection(5).bg} verticalAlign>
                {this._renderSection(theme, translate('landing_4_t'), translate('landing_4_s'))}
              </Section>
              <Section
                // verticalAlign
                onScroll={this._onLastSectionScroll}
              >
                {this._renderGeneratorSample()}

                <AppFooter
                  style={{
                    width: this.state.width,
                  }}
                />
              </Section>
            </SectionsContainer>

            {false && this._renderBottomCall2Action()}

            {this._renderPhone()}
          </>
        )}
      </ThemeContext.Consumer>
    )
  }

  protected _buildState(props: LandingScreenProps, initialBuild: boolean): Partial<LandingScreenState> | undefined {
    const state: Partial<LandingScreenState> = {
      height: ResponsiveWidthStore.getHeight(),
      width: ResponsiveWidthStore.getWidth(),
      isSmallOrTinyScreenSize: ResponsiveWidthStore.isSmallOrTinyScreenSize(),
      isTinyWidth: ResponsiveWidthStore.isTinyWidth(),
    }

    if (initialBuild) {
      state.activeSection = 0
    }

    return state
  }

  private _getColorForSection = (activeSection: number = this.state.activeSection) => {
    switch (activeSection) {
      case 0:
        return {
          text: '#4a4a4a',
          bg: '#fafafa',//'#1E88E5', // #4a148c
        }
      case 1:
        return {
          text: '#fff',
          bg: Styles.values.rainbow[4],//'#1a237e',
        }
      case 2:
        return {
          text: '#000',
          bg: Styles.values.rainbow[2],//'#1565c0',
        }
      case 3:
        return {
          text: '#fff',
          bg: Styles.values.rainbow[3],//'#4caf50',
        }
      case 4:
        return {
          text: '#fff',
          bg: Styles.values.rainbow[1],//'#fec401',
        }
      case 5:
        return {
          text: '#fff',
          bg: Styles.values.rainbow[0],//'#ff9800',
        }
      case 6:
        return {
          text: '#fff',
          bg: Styles.values.rainbow[6],//'#b71c1c',
        }
    }

    throw new Error('section undefined')
  }

  private _onLastSectionScroll = (e: any) => {
    if (e.target.scrollTop === 0 && this.state.scrollDisabled) {
      setTimeout(() => this.setState({
        scrollDisabled: false,
      }), 100)
    } else if (!this.state.scrollDisabled) {
      this.setState({
        scrollDisabled: true,
      })
    }
  }

  private scrollTo = (section: number) => {
    this.setState({ activeSection: section }, this._sectionsContainerRef && this._sectionsContainerRef.handleResize)
  }

  private _renderPhone = () => {
    if (this.state.activeSection >= GENERATOR_SECTION) return

    let phoneHeight = this.state.height * 2 / 3
    let phoneWidth = phoneHeight / 1.8

    let phoneStyle = [
      styles.phoneContainer,
      {
        top: (this.state.height / 2) - (phoneHeight / 2),
        right: this.state.width > CONTENT_MAX_WIDTH ? (((this.state.width - CONTENT_MAX_WIDTH) / 2) + 32) : 32,

        // @ts-ignore web
        position: 'fixed',
      }
    ]

    if (this.state.isSmallOrTinyScreenSize) {
      if (this.state.activeSection == 0) return

      phoneHeight = this.state.height / 2
      phoneWidth = this.state.width
      phoneStyle = [
        styles.phoneContainer,
        {
          top: this.state.height / 6,
        }
      ]
    }

    return (
      <RX.View
        ignorePointerEvents
        // @ts-ignore
        style={phoneStyle}
      >
        <Image
          source={ImageSource.Phone}
          style={{
            width: phoneWidth,
            height: phoneHeight,
            // @ts-ignore
            pointerEvents: 'none'
          }}
          resizeMode={'contain'}
        />
        <RX.View
          ignorePointerEvents
          style={[
            {
              top: 55,
              // width: phoneWidth - 91,
              height: phoneHeight - 80,
              borderBottomLeftRadius: phoneHeight / 23,
              borderBottomRightRadius: phoneHeight / 23,
            },
            styles.introductionContainer,
          ]}
        >
          {
            this._renderPhoneInnerImage(phoneWidth - 91, phoneHeight - 80)
          }
        </RX.View>
      </RX.View>
    )
  }

  private _renderPhoneInnerImage = (width: number, height: number) => {
    const { activeSection } = this.state

    const found = [
      {
        section: 0,
        component: <RX.Image
          source={ImageSource.SC1}
          style={{
            width,
            height,
          }}
          resizeMode={'contain'}
        />,
      },
      {
        section: 1,
        component: <RX.Image
          source={ImageSource.SC2}
          style={{
            width,
            height,
          }}
          resizeMode={'contain'}
        />,
      },
      {
        section: 2,
        component: <RX.Image
          source={ImageSource.SC3}
          style={{
            width,
            height,
          }}
          resizeMode={'contain'}
        />,
      },
      {
        section: 3,
        component: <RX.Image
          source={ImageSource.SC4}
          style={{
            width,
            height,
          }}
          resizeMode={'contain'}
        />,
      },
    ].find(({ section }) => section === activeSection)
    if (!found) return null

    return found.component
  }

  private _renderSection = (theme: Theme, title: string, subtitle: string) => {
    const { text: textColor } = this._getColorForSection()

    return (
      <>
        {
          this.state.isSmallOrTinyScreenSize &&
          <RX.View
            ignorePointerEvents
            style={{
              width: this.state.width,
              height: this.state.height / 2,
              alignSelf: 'center',

              marginBottom: Styles.values.spacing,
            }}
          />
        }
        <RX.View style={styles.sectionContainer}>
          <RX.View>
            <RX.View style={[styles.circle, { borderColor: theme.colors.sectionCircle }]} />
          </RX.View>
          <RX.View style={{ maxWidth: 350, flex: 1 }}>
            <Text type={Text.types.title}
                  style={[styles.sectionTitle, { color: textColor }]}>{title}</Text>
            <Text style={[styles.sectionSubtitle, { color: textColor }]}>{subtitle}</Text>
          </RX.View>
        </RX.View>
      </>
    )
  }

  private _renderBottomCall2Action = () => {
    return [
      <Assistant
        size={150}
      />,
      <FilledButton
        label={translate('LandingStartFree')}
        fontSize={24}
        style={{ paddingRight: Styles.values.spacingLarge * 2, paddingLeft: Styles.values.spacingLarge * 2 }}
        onPress={() => {
        }}
      />
    ]
  }

  private _renderGeneratorSample = () => {
    const { height, activeSection, width } = this.state

    const { text: textColor, bg: bgColor } = this._getColorForSection(GENERATOR_SECTION)
    return (
      <RX.View style={{
        flex: 1,
        alignItems: 'center',
        paddingTop: (height / 3)/* - 102*/,
        paddingBottom: height / 3,
        justifyContent: 'center',
        backgroundColor: bgColor
      }}>
        <RX.View
          style={{
            minHeight: height * 1 / 3,
          }}
        >
          <Text
            type={Text.types.title}
            style={[styles.sectionTitle, { color: textColor }]}
            translate={'Wanna give it a shot?'} />
          <Text
            style={[styles.sectionSubtitle, { marginBottom: Styles.values.spacing, color: textColor }]}
            translate={'Get a meal plan, right here, right now!'} />
          <GeneratorSample screenWidth={width} />
        </RX.View>
      </RX.View>
    )
  }
}

const styles = {
  loginButtonContainer: RX.Styles.createViewStyle({
    padding: Styles.values.spacing,
    backgroundColor: '#fff',
    ...Styles.values.defaultShadow,
  }),
  phone: RX.Styles.createImageStyle({
    width: 300,
    height: 530,
  }),
  phoneContainer: RX.Styles.createViewStyle({
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    right: 0,
  }),
  title: RX.Styles.createTextStyle({
    fontSize: 70,
    fontWeight: 'bold',
    lineHeight: 60,
    maxWidth: 403,
    marginBottom: Styles.values.spacing / 2,
  }),
  subtitle: RX.Styles.createTextStyle({
    fontSize: 20,
    marginVertical: Styles.values.spacing,
    maxWidth: 403
  }),
  introductionContainer: RX.Styles.createViewStyle({
    position: 'absolute',
  }),
  initialPageContainer: RX.Styles.createViewStyle({
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'center',
    // marginTop: Styles.values.spacing
  }),
  sectionImage: RX.Styles.createImageStyle({
    width: 333,
    height: 650,
  }),
  footerContainer: RX.Styles.createViewStyle({
    flex: 1,
    padding: Styles.values.spacing,
    alignItems: 'center',
    paddingBottom: Styles.values.spacing * 4
  }),
  sectionContainer: RX.Styles.createViewStyle({
    flexDirection: 'row',
    alignItems: 'center',
    maxWidth: Styles.values.mainContentMaxWidth,
    paddingHorizontal: Styles.values.spacing,

    // @ts-ignore
    margin: 'auto',
  }),
  alignCenter: RX.Styles.createViewStyle({
    maxWidth: Styles.values.mainContentMaxWidth,

    // @ts-ignore
    margin: 'auto',
  }),
  circle: RX.Styles.createViewStyle({
    borderWidth: 6,
    width: 20,
    height: 20,
    borderRadius: 10,
    marginTop: 5,
    [Styles.values.marginEnd]: 10,
  }),
  sectionTitle: RX.Styles.createTextStyle({
    fontSize: Styles.fontSizes.size32,
    fontWeight: 'bold', // displayBold
    marginBottom: 5,
  }),
  sectionSubtitle: RX.Styles.createTextStyle({
    fontSize: Styles.fontSizes.size16,
    fontWeight: '100',
  }),
  footerTitle: RX.Styles.createTextStyle({
    fontWeight: 'bold', // displayBold
  }),
  socialMediaIcon: RX.Styles.createImageStyle({
    width: 30,
    height: 30,
    marginHorizontal: Styles.values.spacing
  }),
  socialMediaText: RX.Styles.createTextStyle({
    fontSize: Styles.fontSizes.size16,
    marginTop: Styles.values.spacing
  }),
  storeButton: RX.Styles.createViewStyle({
    flex: 1,
    // width: 150,
    height: 60,
  })
}
