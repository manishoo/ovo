/*
 * ProfileInfo.tsx
 * Copyright: Ouranos Studio 2019
 */

import FlatButton from 'common/FlatButton/FlatButton'
import Image from 'common/Image/Image'
import { getLocalizedText } from 'common/LocalizedText/LocalizedText'
import Text from 'common/Text/Text'
import RX from 'reactxp'
import Styles from 'src/ts/app/Styles'
import { Routes } from 'src/ts/models/common'
import { navigate } from 'src/ts/utilities'
import { Me } from 'src/ts/views/Register/types/Me'
import ImageSource from 'modules/images'


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
          <Text type={Text.types.title}>{me.firstName} {me.lastName}</Text>
          <FlatButton
            label={getLocalizedText('ProfileSettings')}
            onPress={() => navigate(this.props, Routes.settings)}
            style={{ [Styles.values.marginStart]: Styles.values.spacing }}
            labelStyle={{ fontSize: 14 }}
          />
        </RX.View>

        <Text type={Text.types.subtitle}>@{me.username}</Text>
        <Text type={Text.types.body} style={{ marginTop: Styles.values.spacing, marginBottom: Styles.values.spacing }}>{me.bio}</Text>

        <RX.View style={{flexDirection: 'row', marginBottom: Styles.values.spacing}}>
          <RX.View onPress={() => {}} style={styles.socialMediaIconWrapper}>
            <Image
            source={ImageSource.InstagramIcon}
            style={{
              width: SOCIAL_MEDIA_ICON_SIZE,
              height: SOCIAL_MEDIA_ICON_SIZE,
            }}
          />
          </RX.View>
          <RX.View onPress={() => {}} style={styles.socialMediaIconWrapper}>
            <Image
            source={ImageSource.TwitterIcon}
            style={{
              width: SOCIAL_MEDIA_ICON_SIZE,
              height: SOCIAL_MEDIA_ICON_SIZE,
            }}
          />
          </RX.View>
          <RX.View onPress={() => {}} style={styles.socialMediaIconWrapper}>
            <Image
            source={ImageSource.PinterestIcon}
            style={{
              width: SOCIAL_MEDIA_ICON_SIZE,
              height: SOCIAL_MEDIA_ICON_SIZE,
            }}
          />
          </RX.View>

          <Text onPress={() => {}}>{me.socialNetworks.website}</Text>
        </RX.View>
      </RX.View>
    )
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
