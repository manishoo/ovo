/*
 * Footer.tsx
 * Copyright: Ouranos Studio 2019
 */

import Styles from '@App/Styles'
import { ThemeContext } from '@App/ThemeContext'
import HoverButton from '@Common/HoverButton/HoverButton'
import Image from '@Common/Image/Image'
import Text from '@Common/Text/Text'
import RX from 'reactxp'
import ImageSource from 'src/ts/modules/images/index.web'


const styles = {
  footerContainer: RX.Styles.createViewStyle({
    flex: 1,
    alignItems: 'stretch',
    paddingTop: Styles.values.spacing * 3,
    paddingBottom: Styles.values.spacing * 3,
    marginHorizontal: Styles.values.spacing * 2,
    // maxWidth: Styles.values.mainContentMaxWidth,
    alignSelf: 'center',
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

const Footer = ({style}: {style?: any}) => {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <RX.View
          style={{
            marginTop: Styles.values.spacingLarge,
            borderWidth: 0,
            borderTopWidth: 1,
            borderColor: theme.colors.footerBorderColor,
            alignItems: 'center',
            backgroundColor: theme.colors.cardBg,
          }}
        >
          <RX.View
            style={[styles.footerContainer, style]}>
            <RX.View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginRight: Styles.values.spacing,
                marginLeft: Styles.values.spacing,
              }}
            >
              <RX.View style={{ [Styles.values.marginEnd]: Styles.values.spacing * 2 }}>
                <Text
                  translate
                  style={[styles.footerTitle, { color: theme.colors.footerTitleColor }]}
                >LandingFooterCentralOffice</Text>
                <Text
                  translate
                  onPress={() => {}}
                  style={{ marginTop: Styles.values.spacing }}
                >LandingFooterAboutPrana</Text>
                <Text
                  translate
                  onPress={() => {}}
                  style={{ marginTop: Styles.values.spacing }}
                >LandingFooterContactUs</Text>
                <Text
                  translate
                  onPress={() => {}}
                  style={{ marginTop: Styles.values.spacing }}
                >LandingFooterTerms</Text>
              </RX.View>
              <RX.View>
                <Image
                  source={ImageSource.Brand}
                  style={{
                    width: 127,
                    height: 35,
                    alignSelf: 'flex-end',
                    marginBottom: Styles.values.spacing * 2,
                  }}
                />
                <RX.View>
                  <Image
                    source={ImageSource.GooglePlayButton}
                    style={{
                      width: 151,
                      height: 45,
                      [Styles.values.marginStart]: Styles.values.spacing,
                      marginBottom: Styles.values.spacing,
                    }}
                  />
                  <Image
                    source={ImageSource.AppStoreButton}
                    style={{
                      width: 151,
                      height: 49,
                      [Styles.values.marginStart]: Styles.values.spacing,
                      marginBottom: Styles.values.spacing,
                    }}
                  />
                </RX.View>
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
                      resizeMode={'contain'}
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
                      resizeMode={'contain'}
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
                      resizeMode={'contain'}
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
                      resizeMode={'contain'}
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
                      resizeMode={'contain'}
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
                      resizeMode={'contain'}
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
                color: theme.colors.footerTitleColor,
                font: Styles.fonts.displayLight,
                fontSize: 12,
                fontWeight: 100,
                textAlign: 'center',
              }}
            >landingfooterAck</Text>
          </RX.View>
        </RX.View>
      )}
    </ThemeContext.Consumer>
  )
}

export default Footer
