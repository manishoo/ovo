/*
 * ProfileInfo.tsx
 * Copyright: Ouranos Studio 2019
 */

import FilledButton from 'common/FilledButton/FilledButton'
import Image from 'common/Image/Image'
import Link from 'common/Link/Link'
import { getLocalizedText } from 'common/LocalizedText/LocalizedText'
import Text from 'common/Text/Text'
import ImageSource from 'modules/images'
import RX from 'reactxp'
import Styles from 'src/ts/app/Styles'
import { Routes } from 'src/ts/models/common'
import { navigate } from 'src/ts/utilities'
import { Me } from 'src/ts/views/Register/types/Me'


const SOCIAL_MEDIA_ICON_SIZE = 20

interface ProfileInfoProps {
  style?: any,
  me: Me,
}

export default class ProfileInfo extends RX.Component<ProfileInfoProps> {
  render() {
    const { style, me } = this.props

    return (
      <RX.View
        style={[styles.container, style]}
      >
        <RX.View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text type={Text.types.title}>{this._getName()}</Text>
          <FilledButton
            mode={FilledButton.mode.default}
            label={getLocalizedText('ProfileSettings')}
            onPress={() => navigate(this.props, Routes.settings)}
            style={{ [Styles.values.marginStart]: Styles.values.spacing }}
            // labelStyle={{ fontSize: 14 }}
          />
        </RX.View>

        <Text type={Text.types.subtitle}>@{me.username}</Text>
        {
          me.bio &&
          <Text type={Text.types.body}
                style={{ marginTop: Styles.values.spacing, marginBottom: Styles.values.spacing }}>{me.bio}</Text>
        }

        {
          /**
           * If any social media accounts were added
           * */
          Object.keys(me.socialNetworks).filter(k => me.socialNetworks[k] && (k !== '__typename')).length > 0 &&
          <RX.View style={{ flexDirection: 'row', marginBottom: Styles.values.spacing }}>
            {
              me.socialNetworks.instagram && <Link
                openInNewTab
                to={`https://instagram.com/${me.socialNetworks.instagram}`}
                style={styles.socialMediaIconWrapper}
              >
                <Image
                  source={ImageSource.InstagramIcon}
                  style={{
                    width: SOCIAL_MEDIA_ICON_SIZE,
                    height: SOCIAL_MEDIA_ICON_SIZE,
                  }}
                />
              </Link>
            }
            {
              me.socialNetworks.twitter && <Link
                openInNewTab
                to={`https://twitter.com/${me.socialNetworks.twitter}`}
                style={styles.socialMediaIconWrapper}
              >
                <Image
                  source={ImageSource.TwitterIcon}
                  style={{
                    width: SOCIAL_MEDIA_ICON_SIZE,
                    height: SOCIAL_MEDIA_ICON_SIZE,
                  }}
                />
              </Link>
            }
            {
              me.socialNetworks.pinterest && <Link
                openInNewTab
                to={`https://pinterest.com/${me.socialNetworks.pinterest}`}
                style={styles.socialMediaIconWrapper}
              >
                <Image
                  source={ImageSource.PinterestIcon}
                  style={{
                    width: SOCIAL_MEDIA_ICON_SIZE,
                    height: SOCIAL_MEDIA_ICON_SIZE,
                  }}
                />
              </Link>
            }

            {
              me.socialNetworks.website &&
              <Link
                openInNewTab
                to={`http://${me.socialNetworks.website}`}
              >
                {me.socialNetworks.website}
              </Link>
            }
          </RX.View>
        }

      </RX.View>
    )
  }

  private _getName = () => {
    const { me } = this.props

    if (!me.firstName && !me.lastName) return me.username

    return `${me.firstName} ${me.lastName}`
  }
}

const styles = {
  container: RX.Styles.createViewStyle({
    //
  }),
  socialMediaIconWrapper: RX.Styles.createViewStyle({
    [Styles.values.marginEnd]: Styles.values.spacing,
    cursor: 'pointer',
  })
}
