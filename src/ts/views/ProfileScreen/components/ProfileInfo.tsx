/*
 * ProfileInfo.tsx
 * Copyright: Ouranos Studio 2019
 */

import FilledButton from 'common/FilledButton/FilledButton'
import Image from 'common/Image/Image'
import Link from 'common/Link/Link'
import { getLocalizedText } from 'common/LocalizedText/LocalizedText'
import Text from 'common/Text/Text'
import gql from 'graphql-tag'
import ImageSource from 'modules/images'
import RX from 'reactxp'
import Styles from 'src/ts/app/Styles'
import { Routes } from 'src/ts/models/common'
import { navigate } from 'src/ts/utilities'
import { ProfileInfoUser } from 'src/ts/views/ProfileScreen/components/types/ProfileInfoUser'


const SOCIAL_MEDIA_ICON_SIZE = 20

interface ProfileInfoProps {
  style?: any,
  user: ProfileInfoUser,
}

export default class ProfileInfo extends RX.Component<ProfileInfoProps> {
  render() {
    const { style, user } = this.props

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

        <Text type={Text.types.subtitle}>@{user.username}</Text>
        {
          user.bio &&
          <Text type={Text.types.body}
                style={{ marginTop: Styles.values.spacing, marginBottom: Styles.values.spacing }}>{user.bio}</Text>
        }

        {
          /**
           * If any social media accounts were added
           * */
          Object.keys(user.socialNetworks).filter(k => user.socialNetworks[k] && (k !== '__typename')).length > 0 &&
          <RX.View style={{ flexDirection: 'row', marginBottom: Styles.values.spacing }}>
            {
              user.socialNetworks.instagram && <Link
                openInNewTab
                to={`https://instagram.com/${user.socialNetworks.instagram}`}
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
              user.socialNetworks.twitter && <Link
                openInNewTab
                to={`https://twitter.com/${user.socialNetworks.twitter}`}
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
              user.socialNetworks.pinterest && <Link
                openInNewTab
                to={`https://pinterest.com/${user.socialNetworks.pinterest}`}
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
              user.socialNetworks.website &&
              <Link
                openInNewTab
                to={`http://${user.socialNetworks.website}`}
              >
                {user.socialNetworks.website}
              </Link>
            }
          </RX.View>
        }

      </RX.View>
    )
  }

  private _getName = () => {
    const { user } = this.props

    if (!user.firstName && !user.lastName) return user.username

    return `${user.firstName} ${user.lastName}`
  }

  static fragments = {
    user: gql`
      fragment ProfileInfoUser on BaseUser {
        bio
        username
        firstName
        lastName
        socialNetworks {
          instagram
          pinterest
          twitter
          website
        }
      }
    `
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
