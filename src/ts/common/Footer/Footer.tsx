/*
 * Footer.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import AppConfig from '@App/AppConfig'
import Storage from '@App/Storage/Storage'
import Styles from '@App/Styles'
import { ThemeMode } from '@App/Theme'
import { ThemeContext } from '@App/ThemeContext'
import HoverButton from '@Common/HoverButton/HoverButton'
import FBIcon from '@Common/icons/FB/FB'
import INIcon from '@Common/icons/IN/IN'
import PINIcon from '@Common/icons/PIN/PIN'
import TELIcon from '@Common/icons/TEL/TEL'
import TWIcon from '@Common/icons/TW/TW'
import YTIcon from '@Common/icons/YT/YT'
import Image from '@Common/Image/Image'
import Link from '@Common/Link/Link'
import { translate } from '@Common/LocalizedText/LocalizedText'
import Select from '@Common/Select/Select'
import Text from '@Common/Text/Text'
import { Routes } from '@Models/common'
import { LanguageCode } from '@Models/global-types'
import RX from 'reactxp'
import ImageSource from 'src/ts/modules/images/index.web'


const styles = {
  footerContainer: RX.Styles.createViewStyle({
    flex: 1,
    alignItems: 'stretch',
    paddingTop: Styles.values.spacing * 3,
    paddingBottom: Styles.values.spacing,
    marginHorizontal: Styles.values.spacing * 2,
    // maxWidth: Styles.values.mainContentMaxWidth,
    alignSelf: 'center',
    paddingHorizontal: Styles.values.spacing * 2,
    maxWidth: Styles.values.mainContentMaxWidth,
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
    // fontSize: Styles.fontSizes.size16,
    marginBottom: Styles.values.spacing
  })
}

const LANGUAGE_OPTIONS = [
  { text: 'English', value: LanguageCode.en },
  { text: 'Deutsch', value: LanguageCode.de },
  { text: 'Français', value: LanguageCode.fr },
  { text: 'Español', value: LanguageCode.es },
  { text: 'Italiano', value: LanguageCode.it },
  { text: 'فارسی', value: LanguageCode.fa },
  { text: 'عربی', value: LanguageCode.ar },
]

const THEME_OPTIONS = [
  { text: translate('lightTheme'), value: ThemeMode.light },
  { text: translate('darkTheme'), value: ThemeMode.dark },
]

const Footer = ({ style }: { style?: any }) => {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <RX.View
          style={{
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
              }}
            >
              <RX.View style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                [Styles.values.marginEnd]: Styles.values.spacing * 2
              }}>
                <RX.View
                  style={{
                    [Styles.values.marginEnd]: Styles.values.spacing * 2
                  }}
                >
                  <Text
                    translate='Partners'
                    style={[styles.footerTitle, { color: theme.colors.footerTitleColor }]}
                  />
                  <Link
                    to={Routes.recipeDevelopers}
                    style={{ marginTop: Styles.values.spacing }}
                  >
                    <Text
                      type={Text.types.link}
                      translate='Recipe Developers'
                    />
                  </Link>
                  <Link
                    to={Routes.healthProfessionals}
                    style={{ marginTop: Styles.values.spacing }}
                  >
                    <Text
                      type={Text.types.link}
                      translate='Health Professionals'
                    />
                  </Link>
                  <Link
                    to={Routes.fitnessTrainers}
                    style={{ marginTop: Styles.values.spacing }}
                  >
                    <Text
                      type={Text.types.link}
                      translate='Fitness Trainers'
                    />
                  </Link>
                  <Link
                    to={Routes.corporations}
                    style={{ marginTop: Styles.values.spacing }}
                  >
                    <Text
                      type={Text.types.link}
                      translate='Corporations'
                    />
                  </Link>
                </RX.View>
                <RX.View
                  style={{
                    [Styles.values.marginEnd]: Styles.values.spacing * 2
                  }}
                >
                  <Text
                    translate='Help'
                    style={[styles.footerTitle, { color: theme.colors.footerTitleColor }]}
                  />
                  <Link
                    to={Routes.faq}
                    style={{ marginTop: Styles.values.spacing }}
                  >
                    <Text
                      type={Text.types.link}
                      translate='FAQ'
                    />
                  </Link>

                  <Text
                    type={Text.types.link}
                    translate='LandingFooterContactUs'
                    onPress={() => RX.Linking.launchEmail({
                      to: [AppConfig.emailTo],
                    })}
                    style={{ marginTop: Styles.values.spacing }}
                  />
                </RX.View>
                <RX.View
                  style={{
                    [Styles.values.marginEnd]: Styles.values.spacing * 2
                  }}
                >
                  <Text
                    translate='Learn More'
                    style={[styles.footerTitle, { color: theme.colors.footerTitleColor }]}
                  />
                  <Link
                    to={Routes.about}
                    style={{ marginTop: Styles.values.spacing }}
                  >
                    <Text
                      type={Text.types.link}
                      translate='AboutOvo'
                    />
                  </Link>
                  <Link
                    to={Routes.team}
                    style={{ marginTop: Styles.values.spacing }}
                  >
                    <Text
                      type={Text.types.link}
                      translate='Team'
                    />
                  </Link>
                  <Link
                    to='#'
                    style={{ marginTop: Styles.values.spacing }}
                  >
                    <Text
                      type={Text.types.link}
                      translate='Health Education'
                    />
                  </Link>

                </RX.View>

                <RX.View>
                  <Text
                    translate='Legal'
                    style={[styles.footerTitle, { color: theme.colors.footerTitleColor }]}
                  />
                  <Link
                    to={Routes.terms}
                    style={{ marginTop: Styles.values.spacing }}
                  >
                    <Text
                      type={Text.types.link}
                      translate='Terms'
                    />
                  </Link>
                  <Link
                    to={Routes.privacy}
                    style={{ marginTop: Styles.values.spacing }}
                  >
                    <Text
                      type={Text.types.link}
                      translate='Privacy'
                    />
                  </Link>
                  <Link
                    to={Routes.cookies}
                    style={{ marginTop: Styles.values.spacing }}
                  >
                    <Text
                      type={Text.types.link}
                      translate='Cookies'
                    />
                  </Link>
                </RX.View>
              </RX.View>
              <RX.View>
                <Image
                  source={ImageSource.Brand}
                  style={{
                    width: 150,
                    height: 61,
                    alignSelf: 'flex-end',
                    marginBottom: Styles.values.spacing * 2,
                  }}
                  resizeMode={'contain'}
                />
                <RX.View>
                  <Link
                    to='#'
                    style={{
                      [Styles.values.marginStart]: Styles.values.spacing,
                      marginBottom: Styles.values.spacing,
                    }}
                  >
                    <Image
                      source={ImageSource.GooglePlayButton}
                      resizeMode={'contain'}
                      style={{
                        width: 151,
                        height: 45,
                      }}
                    />
                  </Link>
                  <Link
                    to='#'
                    style={{
                      [Styles.values.marginStart]: Styles.values.spacing,
                      marginBottom: Styles.values.spacing,
                    }}
                  >
                    <Image
                      source={ImageSource.AppStoreButton}
                      resizeMode={'contain'}
                      style={{
                        width: 151,
                        height: 49,
                      }}
                    />
                  </Link>
                </RX.View>
              </RX.View>
            </RX.View>
            <RX.View
              style={{
                flexDirection: 'row'
              }}
            >
              <Select
                label='Language'
                value={AppConfig.locale}
                options={LANGUAGE_OPTIONS}
                onChange={value => {
                  Storage.setItem('locale', value)
                    .then(() => (typeof window !== 'undefined') && window.location.reload())
                }}
                labelStyle={{
                  fontWeight: 'bold',
                }}
                containerStyle={{
                  width: 151,
                  [Styles.values.marginEnd]: Styles.values.spacing,
                  // alignSelf: 'flex-end'
                }}
              />
              <Select
                label='Theme'
                value={AppConfig.theme}
                options={THEME_OPTIONS}
                labelStyle={{
                  fontWeight: 'bold',
                }}
                onChange={value => {
                  Storage.setItem('theme', value)
                    .then(() => (typeof window !== 'undefined') && window.location.reload())
                }}
                containerStyle={{
                  width: 151,
                  // alignSelf: 'flex-end'
                }}
              />
            </RX.View>
            <RX.View
              style={{
                alignItems: 'center',
                marginTop: Styles.values.spacing * 2,
              }}
            >
              <Text
                translate='LandingFooterSocialMediaText'
                style={[styles.socialMediaText, { color: theme.colors.footerTitleColor }]}
              />

              <RX.View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: (6 * 30) + (6 * Styles.values.spacing / 2)
                }}
              >
                <HoverButton
                  onRenderChild={isHovering => (
                    <FBIcon
                      size={30}
                      color={isHovering ? undefined : theme.colors.text}
                    />
                  )}
                />
                <HoverButton
                  onRenderChild={isHovering => (
                    <YTIcon
                      size={30}
                      color={isHovering ? undefined : theme.colors.text}
                    />
                  )}
                />
                <HoverButton
                  onRenderChild={isHovering => (
                    <TWIcon
                      size={30}
                      color={isHovering ? undefined : theme.colors.text}
                    />
                  )}
                />
                <HoverButton
                  onRenderChild={isHovering => (
                    <PINIcon
                      size={30}
                      color={isHovering ? undefined : theme.colors.text}
                    />
                  )}
                />
                <HoverButton
                  onRenderChild={isHovering => (
                    <INIcon
                      size={30}
                      color={isHovering ? undefined : theme.colors.text}
                    />
                  )}
                />
                <HoverButton
                  onRenderChild={isHovering => (
                    <TELIcon
                      size={30}
                      color={isHovering ? undefined : theme.colors.text}
                    />
                  )}
                />
              </RX.View>

            </RX.View>

            <Text
              translate='landingfooterAck'
              style={{
                // position: 'absolute',
                // bottom: Styles.values.spacing,
                color: theme.colors.footerTitleColor,
                fontWeight: '300',
                fontSize: 12,
                textAlign: 'center',
                paddingTop: Styles.values.spacing * 2,
              }}
            />
          </RX.View>
        </RX.View>
      )}
    </ThemeContext.Consumer>
  )
}

export default Footer
