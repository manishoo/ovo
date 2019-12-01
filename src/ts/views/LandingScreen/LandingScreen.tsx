/*
 * LandingScreen.tsx
 * Copyright: Ouranos Studio 2019
 */

import Styles from '@App/Styles'
import { Theme } from '@App/Theme'
import { ThemeContext } from '@App/ThemeContext'
import Assistant from '@Common/Assistant/Assistant'
import FilledButton from '@Common/FilledButton/FilledButton'
import HoverButton from '@Common/HoverButton/HoverButton'
import Image from '@Common/Image/Image'
import { translate } from '@Common/LocalizedText/LocalizedText'
import Text from '@Common/Text/Text'
import { Routes } from '@Models/common'
import ImageSource from '@Modules/images'
import ResponsiveWidthStore from '@Services/ResponsiveWidthStore'
import { navigate } from '@Utils'
import Introduction from '@Views/Introduction/Introduction'
import GoDownIndicator from '@Views/LandingScreen/components/GoDownIndicator'
import RX from 'reactxp'
import { ComponentBase } from 'resub'


const HEADER_MAX_WIDTH = 950

// const HEADER_HEIGHT = 80

interface AssistantScreenProps extends RX.CommonProps {
  style?: any,
}

interface AssistantScreenState {
  height: number,
  width: number,
}

export default class LandingScreen extends ComponentBase<AssistantScreenProps, AssistantScreenState> {
  public render() {
    const { style } = this.props

    return (
      <ThemeContext.Consumer>
        {({ theme }) => (
          <RX.ScrollView style={[styles.container, style]}>
            <RX.View
              style={[
                {
                  height: this.state.height,
                  minHeight: 650
                },
                styles.initialPageContainer,
              ]}>
              {/*<Text translate style={styles.title}>landingTitle</Text>*/}
              {/*<Text translate style={[styles.subtitle, { color: theme.colors.landingSubtitle }]}>landingSubtitle</Text>*/}

              {this._renderPhone()}

              {false && <GoDownIndicator />}
            </RX.View>

            {false && this._renderSection(theme, ImageSource.SC1, translate('landing_1_t'), translate('landing_1_s'))}
            {false && this._renderSection(theme, ImageSource.SC2, translate('landing_2_t'), translate('landing_2_s'), {
              width: 400,
            })}
            {false && this._renderSection(theme, ImageSource.SC3, translate('landing_3_t'), translate('landing_3_s'))}
            {false && this._renderSection(theme, ImageSource.SC4, translate('landing_4_t'), translate('landing_4_s'))}

            {false && this._renderBottomCall2Action()}
            {false && this._renderFooter(theme)}
            {false && this._renderHeader(theme)}
          </RX.ScrollView>
        )}
      </ThemeContext.Consumer>
    )
  }

  protected _buildState(props: AssistantScreenProps, initialBuild: boolean): Partial<AssistantScreenState> | undefined {
    return {
      height: ResponsiveWidthStore.getHeight(),
      width: ResponsiveWidthStore.getWidth(),
    }
  }

  private _renderHeader = (theme: Theme) => {
    return (
      <RX.View style={styles.headerContainer}>
        <RX.View
          style={styles.brandContainer}
          activeOpacity={0.7}
        >
          <Image
            source={ImageSource.Brand}
            style={styles.brand}
            resizeMode={'contain'}
          />
        </RX.View>
        {false && <HoverButton
          onPress={() => navigate(this.props, Routes.login)}
          onRenderChild={isHovering => (
            <RX.View
              style={[
                styles.loginButtonContainer,
                {
                  opacity: isHovering ? 0.8 : 1,
                }
              ]}
            >
              <Text
                translate
                style={{ color: theme.colors.loginButtonTextColor }}
              >Login</Text>
            </RX.View>
          )}
        />}
      </RX.View>
    )
  }

  private _renderPhone = () => {
    // let { height } = this.state

    // if (height < 900) {
    //   height = 900
    // }
    //
    // let phoneHeight = height / 1.5
    // let phoneWidth = phoneHeight / 1.8
    //
    // if (phoneHeight > 650) {
    //   phoneHeight = 650
    // }
    //
    // if (phoneWidth > 361) {
    //   phoneWidth = 361
    // }

    const phoneHeight = 650
    const phoneWidth = 361

    return (
      <RX.View style={styles.phoneContainer}>
        <Image
          source={ImageSource.Phone}
          style={{
            width: phoneWidth,
            height: phoneHeight,
            right: 2
          }}
          resizeMode={'contain'}
        />
        <RX.View
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
          <Introduction
            introductionWidth={phoneWidth - 91}
            introductionHeight={phoneHeight - 80}
          />
        </RX.View>
      </RX.View>
    )
  }

  private _renderSection = (theme: Theme, image: any, title: string, subtitle: string, imageStyle?: any) => {
    const { height, width } = this.state

    let sectionWidth = width
    if (width >= 950) {
      sectionWidth = 950
    }

    return (
      <RX.View style={[styles.sectionContainer, { minHeight: height, width: sectionWidth }]}>
        <RX.View>
          <Image
            source={image}
            style={[styles.sectionImage, imageStyle]}
          />
        </RX.View>
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

  private _renderFooter = (theme: Theme) => {
    const footerLinkStyle = RX.Styles.createTextStyle({
      marginTop: Styles.values.spacing,
      color: theme.colors.footerLinkColor,
    }, false)

    return [
      <Image
        source={ImageSource.LandingCurve}
        style={{
          width: this.state.width + 32,
          height: this.state.width / 15.9,
        }}
        resizeMode={'cover'}
      />,
      <RX.View
        style={[styles.footerContainer, { width: this.state.width, backgroundColor: theme.colors.landingFooterBG }]}>
        <RX.View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginRight: Styles.values.spacing,
            marginLeft: Styles.values.spacing,
          }}
        >
          <RX.View style={{ [Styles.values.marginEnd]: Styles.values.spacing * 2 }}>
            <Text translate
                  style={[styles.footerTitle, { color: theme.colors.footerTitleColor }]}>LandingFooterCentralOffice</Text>
            <Text translate style={footerLinkStyle}>LandingFooterAboutPrana</Text>
            <Text translate style={footerLinkStyle}>LandingFooterContactUs</Text>
            <Text translate style={footerLinkStyle}>LandingFooterTerms</Text>
          </RX.View>
          <RX.View>
            <Image
              source={ImageSource.BrandWhite}
              style={{
                width: 152,
                height: 31,
                alignSelf: 'flex-end',
                marginBottom: Styles.values.spacing * 2,
              }}
            />
            <Image
              source={ImageSource.ComingSoonButtonGroup}
              style={{
                width: 400,
                height: 143,
              }}
            />
          </RX.View>
        </RX.View>
        <RX.View
          style={{
            alignItems: 'center',
            marginTop: Styles.values.spacing * 4,
          }}
        >
          <RX.View
            style={{
              flexDirection: 'row',
            }}
          >
            <HoverButton
              onRenderChild={isHovering => (
                <Image
                  source={ImageSource.FaceBookIcon}
                  style={[
                    styles.socialMediaIcon,
                    { opacity: isHovering ? 0.8 : 1, }
                  ]}
                />
              )}
            />
            <HoverButton
              onRenderChild={isHovering => (
                <Image
                  source={ImageSource.YoutubeIcon}
                  style={[
                    styles.socialMediaIcon,
                    { opacity: isHovering ? 0.8 : 1, }
                  ]}
                />
              )}
            />
            <HoverButton
              onRenderChild={isHovering => (
                <Image
                  source={ImageSource.TwitterIcon}
                  style={[
                    styles.socialMediaIcon,
                    { opacity: isHovering ? 0.8 : 1, }
                  ]}
                />
              )}
            />
            <HoverButton
              onRenderChild={isHovering => (
                <Image
                  source={ImageSource.PinterestIcon}
                  style={[
                    styles.socialMediaIcon,
                    { opacity: isHovering ? 0.8 : 1, }
                  ]}
                />
              )}
            />
            <HoverButton
              onRenderChild={isHovering => (
                <Image
                  source={ImageSource.InstagramIcon}
                  style={[
                    styles.socialMediaIcon,
                    { opacity: isHovering ? 0.8 : 1, }
                  ]}
                />
              )}
            />
            <HoverButton
              onRenderChild={isHovering => (
                <Image
                  source={ImageSource.TelegramIcon}
                  style={[
                    styles.socialMediaIcon,
                    { opacity: isHovering ? 0.8 : 1, }
                  ]}
                />
              )}
            />
          </RX.View>
          <Text
            translate
            style={[styles.socialMediaText, { color: theme.colors.footerTitleColor }]}
          >LandingFooterSocialMediaText</Text>
        </RX.View>

        <Text
          translate
          style={{
            position: 'absolute',
            bottom: Styles.values.spacing,
            width: this.state.width,
            color: theme.colors.footerTitleColor,
            font: Styles.fonts.displayLight,
            fontSize: 12,
            textAlign: 'center',
          }}
        >landingfooterAck</Text>
      </RX.View>
    ]
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
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    minHeight: 50,
    maxWidth: HEADER_MAX_WIDTH,
    padding: Styles.values.spacing,
    marginTop: Styles.values.spacing,
    // @ts-ignore
    margin: 'auto' //FIXME only web
  }),
  brandContainer: RX.Styles.createViewStyle({
    position: 'absolute',
    left: Styles.values.spacing,
    top: Styles.values.spacing,
  }),
  brand: RX.Styles.createImageStyle({
    width: 150,
    get height() {
      return this.width / 5
    },
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
  }),
  title: RX.Styles.createTextStyle({
    fontSize: Styles.fontSizes.size32,
    font: Styles.fonts.displayBold,
    marginBottom: Styles.values.spacingLarge,
  }),
  subtitle: RX.Styles.createTextStyle({
    fontSize: Styles.fontSizes.size20,
    marginBottom: Styles.values.spacing,
  }),
  introductionContainer: RX.Styles.createViewStyle({
    position: 'absolute',
  }),
  initialPageContainer: RX.Styles.createViewStyle({
    alignItems: 'center',
    justifyContent: 'center',
    // marginTop: HEADER_HEIGHT
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
    fontSize: Styles.fontSizes.size20,
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
  })
}
