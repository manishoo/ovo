/*
 * LandingScreen.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import AppConfig from '@App/AppConfig'
import Styles from '@App/Styles'
import { Theme } from '@App/Theme'
import { ThemeContext } from '@App/ThemeContext'
import Assistant from '@Common/Assistant/Assistant'
import FilledButton from '@Common/FilledButton/FilledButton'
import FlatButton from '@Common/FlatButton/FlatButton'
import Image from '@Common/Image/Image'
import { translate } from '@Common/LocalizedText/LocalizedText'
import Text from '@Common/Text/Text'
import { Routes } from '@Models/common'
import ImageSource from '@Modules/images'
import ResponsiveWidthStore from '@Services/ResponsiveWidthStore'
import { navigate } from '@Utils'
import GeneratorSample from '@Views/LandingScreen/components/GeneratorSample'
import GoDownIndicator from '@Views/LandingScreen/components/GoDownIndicator'
import RX from 'reactxp'
import { ComponentBase } from 'resub'
import Page from 'src/ts/common/Page'


const HEADER_MAX_WIDTH = 950
const HEADER_FULL_HEIGHT = 140
const CONTENT_MAX_WIDTH = 975

// const HEADER_HEIGHT = 80

interface AssistantScreenProps extends RX.CommonProps {
  style?: any,
}

interface AssistantScreenState {
  height: number,
  width: number,
  scrollTop: number,
}

export default class LandingScreen extends ComponentBase<AssistantScreenProps, AssistantScreenState> {
  private _containerBackgroundColorAnimationValue = RX.Animated.createValue(0)
  private _containerAnimationStyle = RX.Styles.createAnimatedViewStyle({
    backgroundColor: RX.Animated.interpolate(this._containerBackgroundColorAnimationValue, [1400, 2800, 3800, 4800], ['red', 'blue', 'yellow', 'orange']),
  })

  public render() {
    return (
      <ThemeContext.Consumer>
        {({ theme }) => (
          [
            <Page
              lazyRender
                  scrollViewProps={{
                onScroll: this._onScroll,
              }}
            >
              {this._renderHeader(theme)}
              <RX.View
                style={[
                  {
                    height: this.state.height - 64 /*double padding*/ - 72 /*header*/,
                    paddingBottom: Styles.values.spacing * 8,
                    minHeight: 650
                  },
                  styles.initialPageContainer,
                ]}>
                <RX.View
                  style={{
                    justifyContent: 'center',
                  }}
                >
                  <Text
                    translate
                    style={styles.title}
                    selectable
                  >landingTitle</Text>
                  <Text
                    translate
                    style={[styles.subtitle, { color: theme.colors.landingSubtitle }]}
                  >landingSubtitle</Text>

                  <RX.View style={{ alignItems: 'stretch', width: 316 }}>
                    <RX.View style={{ flexDirection: 'row', marginTop: Styles.values.spacing }}>
                      <Image
                        source={ImageSource.GooglePlayButton}
                        style={styles.storeButton}
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
                        textAlign: 'center',
                        marginTop: Styles.values.spacing / 2,
                        marginBottom: Styles.values.spacing / 2,
                      }}
                    />
                    <FilledButton label={translate.keys.GetStartedNow} onPress={() => null} />
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

              {this._renderSection(theme, translate('landing_1_t'), translate('landing_1_s'))}
              {this._renderSection(theme, translate('landing_2_t'), translate('landing_2_s'))}
              {this._renderSection(theme, translate('landing_3_t'), translate('landing_3_s'))}
              {this._renderSection(theme, translate('landing_4_t'), translate('landing_4_s'))}
              {this._renderGeneratorSample()}

              {false && this._renderBottomCall2Action()}
            </Page>,
            this._renderPhone()
          ]
        )}
      </ThemeContext.Consumer>
    )
  }

  protected _buildState(props: AssistantScreenProps, initialBuild: boolean): Partial<AssistantScreenState> | undefined {
    return {
      scrollTop: initialBuild ? HEADER_FULL_HEIGHT : this.state.scrollTop,
      height: ResponsiveWidthStore.getHeight(),
      width: ResponsiveWidthStore.getWidth(),
    }
  }

  private _onScroll = (newScrollTop: number) => {
    RX.Animated.timing(this._containerBackgroundColorAnimationValue, {
      toValue: newScrollTop,
    })
      .start()
    this.setState({
      scrollTop: newScrollTop // padding from top,
    })
  }

  private _renderHeader = (theme: Theme) => {
    const navTitleStyle = {
      [Styles.values.marginEnd]: Styles.values.spacing,
      color: theme.colors.text,
    }

    return (
      <RX.View style={styles.headerContainer}>
        <RX.View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image
            source={ImageSource.Logo}
            style={{
              width: 40,
              height: 40,
              [Styles.values.marginEnd]: 5,
            }}
            resizeMode={'contain'}
          />
          <RX.View
            activeOpacity={0.7}
          >
            <Image
              source={ImageSource.Brand}
              style={styles.brand}
              resizeMode={'contain'}
            />
          </RX.View>
          <FlatButton
            borderless
            onPress={() => navigate(this.props, Routes.login)}
            label={translate('Meal Planner')}
            labelStyle={navTitleStyle}
          />
          <FlatButton
            borderless
            onPress={() => navigate(this.props, Routes.login)}
            label={translate('Recipes')}
            labelStyle={navTitleStyle}
          />
          <FlatButton
            borderless
            onPress={() => navigate(this.props, Routes.login)}
            label={translate('Stories')}
            labelStyle={navTitleStyle}
          />
          <FlatButton
            borderless
            onPress={() => navigate(this.props, Routes.login)}
            label={translate('About')}
            labelStyle={navTitleStyle}
          />
        </RX.View>
        <RX.View>
          <FilledButton
            onPress={() => navigate(this.props, Routes.register)}
            label={translate('Sign Up')}
          />
          <FlatButton
            borderless
            onPress={() => navigate(this.props, Routes.login)}
            label={translate(translate.keys.AlreadyAMember)}
          />
        </RX.View>
      </RX.View>
    )
  }

  private _getPhoneFixedStyle = () => {
    const end = 3920

    /**
     * On web, set position to fixed, on mobile, use the state
     * */
    const condition = AppConfig.getPlatformType() === 'web' && (this.state.scrollTop <= end)
    return {
      top: condition ? HEADER_FULL_HEIGHT : (end - this.state.scrollTop + HEADER_FULL_HEIGHT),
      right: this.state.width > CONTENT_MAX_WIDTH ? ((this.state.width - CONTENT_MAX_WIDTH) / 2) : 16,
      position: condition ? 'fixed' : 'absolute',
    }
  }

  private _renderPhone = () => {
    const phoneHeight = 650
    const phoneWidth = 361

    return (
      <RX.View
        ignorePointerEvents
        // @ts-ignore
        style={[
          styles.phoneContainer,
          this._getPhoneFixedStyle()
        ]}
      >
        <Image
          source={ImageSource.Phone}
          style={{
            width: phoneWidth,
            height: phoneHeight,
            right: 2,
            // @ts-ignore
            pointerEvents: 'none'
          }}
          resizeMode={'contain'}
        />
        <RX.View
          ignorePointerEvents
          style={[
            {
              top: 52,
              width: phoneWidth - 91,
              height: phoneHeight - 80,
              borderBottomLeftRadius: phoneHeight / 23,
              borderBottomRightRadius: phoneHeight / 23,
            },
            styles.introductionContainer,
          ]}
        >
          {
            // this._renderPhoneInnerImage(phoneWidth - 91, phoneHeight - 80)
          }
        </RX.View>
      </RX.View>
    )
  }

  private _renderPhoneInnerImage = (width: number, height: number) => {
    const { scrollTop: primaryScrollTop } = this.state

    const found = [
      {
        scrollTop: 1400,
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
        scrollTop: 2800,
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
        scrollTop: 3800,
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
        scrollTop: 4800,
        component: <RX.Image
          source={ImageSource.SC4}
          style={{
            width,
            height,
          }}
          resizeMode={'contain'}
        />,
      },
    ].find(({ scrollTop }) => scrollTop >= primaryScrollTop)
    if (!found) return null

    return found.component
  }

  private _renderSection = (theme: Theme, title: string, subtitle: string) => {
    const { height, width } = this.state

    let sectionWidth = width
    if (width >= 950) {
      sectionWidth = 950
    }

    return (
      <RX.View style={[styles.sectionContainer, { minHeight: height, width: sectionWidth }]}>
        <RX.View style={{ flexDirection: 'row', padding: Styles.values.spacing }}>
          <RX.View>
            <RX.View style={[styles.circle, { borderColor: theme.colors.sectionCircle }]} />
          </RX.View>
          <RX.View style={{ maxWidth: 500 }}>
            <Text style={[styles.sectionTitle, { color: theme.colors.landingSectionTitle }]}>{title}</Text>
            <Text style={[styles.sectionSubtitle, { color: theme.colors.landingSectionSubtitle }]}>{subtitle}</Text>
          </RX.View>
        </RX.View>
      </RX.View>
    )
  }

  private _renderBottomCall2Action = () => {
    return [
      <Assistant
        size={150}
        glowMode={'dark'}
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
    const { height, width } = this.state

    let sectionWidth = width
    if (width >= 950) {
      sectionWidth = 950
    }

    return (
      <RX.View style={{ alignItems: 'center' }}>
        <Text style={styles.sectionTitle} translate={'Wanna give it a shot?'} />
        <Text style={[styles.sectionSubtitle, { marginBottom: Styles.values.spacing }]}
              translate={'Get a meal plan, right now'} />
        <GeneratorSample
          style={[
            styles.sectionContainer,
          ]}
        />
      </RX.View>
    )
  }
}

const styles = {
  container: RX.Styles.createScrollViewStyle({
    flex: 1,
    // alignItems: 'center'
  }),
  headerContainer: RX.Styles.createViewStyle({
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    // position: 'absolute',
    // top: 0,
    // left: 0,
    // right: 0,
    minHeight: 50,
    maxWidth: HEADER_MAX_WIDTH,
    // padding: Styles.values.spacing,
    marginTop: Styles.values.spacing,
    // @ts-ignore
    // margin: 'auto' //FIXME only web
  }),
  // brandContainer: RX.Styles.createViewStyle({
  //   position: 'absolute',
  //   left: Styles.values.spacing,
  //   top: Styles.values.spacing,
  // }),
  brand: RX.Styles.createImageStyle({
    width: 109,
    height: 30,
    [Styles.values.marginEnd]: Styles.values.spacing,
  }),
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
    fontSize: 60,
    font: Styles.fonts.displayBold,
    lineHeight: 60,
    maxWidth: 400,
    marginBottom: Styles.values.spacing / 2,
  }),
  subtitle: RX.Styles.createTextStyle({
    fontSize: Styles.fontSizes.size16,
    marginBottom: Styles.values.spacing,
  }),
  introductionContainer: RX.Styles.createViewStyle({
    position: 'absolute',
  }),
  initialPageContainer: RX.Styles.createViewStyle({
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'center',
    marginTop: Styles.values.spacing
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
    alignItems: 'center'
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
    font: Styles.fonts.displayBold,
    marginBottom: 5,
  }),
  sectionSubtitle: RX.Styles.createTextStyle({
    fontSize: Styles.fontSizes.size16,
    fontWeight: '100',
  }),
  footerTitle: RX.Styles.createTextStyle({
    font: Styles.fonts.displayBold,
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
    width: 150,
    height: 45,
    [Styles.values.marginEnd]: Styles.values.spacing,
  })
}
