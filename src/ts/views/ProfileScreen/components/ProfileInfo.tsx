/*
 * ProfileInfo.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import { gql } from '@apollo/client'
import Styles from '@App/Styles'
import FilledButton from '@Common/FilledButton/FilledButton'
import Image from '@Common/Image/Image'
import Link from '@Common/Link/Link'
import { translate } from '@Common/LocalizedText/LocalizedText'
import Text from '@Common/Text/Text'
import { Routes } from '@Models/common'
import ImageSource from '@Modules/images'
import { navigate } from '@Utils'
import { ProfileInfoUser } from '@Views/ProfileScreen/components/types/ProfileInfoUser'
import RX from 'reactxp'


const SOCIAL_MEDIA_ICON_SIZE = 20

interface ProfileInfoProps {
  style?: any,
  user: ProfileInfoUser,
  isMyProfile?: boolean,
}

export default class ProfileInfo extends RX.Component<ProfileInfoProps> {
  static fragments = {
    user: gql`
      fragment ProfileInfoUser on BasicUser {
        bio
        username
        firstName
        lastName
        avatar { url }
        socialNetworks {
          instagram
          pinterest
          twitter
          website
        }
      }
    `
  }

  public render() {
    const { style, user } = this.props

    return (
      <RX.View
        style={[styles.container, style]}
      >
        <RX.View style={{ flexDirection: 'row', alignItems: 'center' }}>
          {
            !this.props.isMyProfile &&
            <Image
              source={user.avatar!.url}
              style={[
                styles.avatar,
                {
                  [Styles.values.marginEnd]: Styles.values.spacing / 2,
                }
              ]}
            />
          }

          <RX.View style={{ flexDirection: 'row' }}>
            <RX.View>
              <Text type={Text.types.title} style={{ marginBottom: Styles.values.spacing / 2 }}>{this._getName()}</Text>
              <Text type={Text.types.subtitle}>@{user.username}</Text>
            </RX.View>

            {
              this.props.isMyProfile &&
              <FilledButton
                mode={FilledButton.mode.default}
                label={translate('ProfileSettings')}
                onPress={() => navigate(this.props, Routes.settings)}
                style={{ [Styles.values.marginStart]: Styles.values.spacing }}
              />
            }

          </RX.View>
        </RX.View>

        {
          user.bio &&
          <Text
            type={Text.types.body}
            style={{ marginTop: Styles.values.spacing, marginBottom: Styles.values.spacing }}
          >{user.bio}</Text>
        }

        {
          /**
           * If any social media accounts were added
           * */
          user.socialNetworks &&
          // @ts-ignore
          Object.keys(user.socialNetworks).filter(k => user.socialNetworks![k] && (k !== '__typename')).length > 0 &&
          <RX.View style={{ flexDirection: 'row', marginTop: Styles.values.spacing }}>
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

    let name = ''
    if (user.firstName) {
      name += user.firstName
    }
    if (user.lastName) {
      if (name.length > 0) {
        name += ` ${user.lastName}`
      } else {
        name += user.lastName
      }
    }
    return name
  }
}

const styles = {
  container: RX.Styles.createViewStyle({
    //
  }),
  socialMediaIconWrapper: RX.Styles.createViewStyle({
    [Styles.values.marginEnd]: Styles.values.spacing,
    cursor: 'pointer',
  }),
  avatar: RX.Styles.createImageStyle({
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
  })
}
