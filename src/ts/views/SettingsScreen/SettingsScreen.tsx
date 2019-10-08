/*
 * SettingsScreen.tsx
 * Copyright: Ouranos Studio 2019
 */

import { useMutation } from '@apollo/react-hooks'
import CenterAlignedPageView from 'common/CenterAlignedPageView'
import FilePicker from 'common/FilePicker/FilePicker'
import FilledButton from 'common/FilledButton/FilledButton'
import Image from 'common/Image/Image'
import Input from 'common/Input/Input'
import { getLocalizedText } from 'common/LocalizedText/LocalizedText'
import Navbar from 'common/Navbar/Navbar'
import Select from 'common/Select/Select'
import Text from 'common/Text/Text'
import TextInputAutoGrow from 'common/TextInputAutoGrow/TextInputAutoGrow'
import gql from 'graphql-tag'
import _set from 'lodash/set'
import ImageSource from 'modules/images'
import { ExecutionResult } from 'react-apollo'
import RX from 'reactxp'
import { ComponentBase } from 'resub'
import Styles from 'src/ts/app/Styles'
import { Gender, UserUpdateInput } from 'src/ts/models/global-types'
import LocationStore from 'src/ts/stores/LocationStore'
import UserStore from 'src/ts/stores/UserStore'
import { RegisterForm } from 'src/ts/views/Register/RegisterForm'
import { Me } from 'src/ts/views/Register/types/Me'
import { SettingsMutation, SettingsMutationVariables } from 'src/ts/views/SettingsScreen/types/SettingsMutation'


const AVATAR_SIZE = 150

interface SettingsProps {
  style?: any,
  onUpdate: (variables: SettingsMutationVariables) => Promise<ExecutionResult<SettingsMutation>>
}

interface SettingsState {
  me?: Me,

  avatarImage?: any,
  avatarImagePreview?: any,

  newPassword: string,
  password: string,
  password2: string,
}

class SettingsScreen extends ComponentBase<SettingsProps, SettingsState> {
  protected _buildState(props: SettingsProps, initialBuild: boolean): Partial<SettingsState> | undefined {
    if (initialBuild) {
      return {
        me: UserStore.getUser(),
      }
    }

    return null
  }

  render() {
    const { me } = this.state

    return (
      <CenterAlignedPageView maxWidth={500}>
        <Navbar title={getLocalizedText('Edit Profile')} />
        {this._renderAvatar()}
        <Text translate type={Text.types.title}>Account Info</Text>

        <Input
          value={me.firstName}
          onChange={this._onChange(['firstName'])}
          label={getLocalizedText('First Name')}
        />
        <Input
          value={me.lastName}
          onChange={this._onChange(['lastName'])}
          label={getLocalizedText('Last Name')}
        />
        <Select
          label={getLocalizedText('Gender')}
          value={me.gender}
          options={[
            { value: null, text: <Text>Select gender</Text> },
            ...Object.keys(Gender).map(k => ({
              value: Gender[k],
              text: <Text>{k}</Text>,
            }))
          ]}
          onChange={this._onChange(['gender'])}
        />
        <Input
          value={me.email}
          onChange={this._onChange(['email'])}
          label={getLocalizedText('Email')}
        />
        <TextInputAutoGrow
          label={getLocalizedText('Bio')}
          value={me.bio}
          placeholder={getLocalizedText('Tell others about yourself')}
          onChangeText={this._onChange(['bio'])}
        />
        <Input
          value={me.username}
          onChange={this._onChange(['username'])}
          label={getLocalizedText('Username')}
        />

        <Input
          value={me.socialNetworks.website}
          onChange={this._onChange(['socialNetworks', 'website'])}
          label={getLocalizedText('Website')}
        />

        <Text translate type={Text.types.title}>Social Media</Text>

        <Input
          value={me.socialNetworks.instagram}
          onChange={this._onChange(['socialNetworks', 'instagram'])}
          label={getLocalizedText('Instagram')}
        />
        <Input
          value={me.socialNetworks.twitter}
          onChange={this._onChange(['socialNetworks', 'twitter'])}
          label={getLocalizedText('Twitter')}
        />
        <Input
          value={me.socialNetworks.pinterest}
          onChange={this._onChange(['socialNetworks', 'pinterest'])}
          label={getLocalizedText('Pinterest')}
        />

        <Text translate type={Text.types.title}>Change Password</Text>

        <Input
          value={this.state.newPassword}
          onChange={this._onChange(['newPassword'])}
          label={getLocalizedText('NewPassword')}
          validate={value => value.length >= 4}
          secureTextEntry
        />
        <Input
          value={this.state.password}
          onChange={this._onChange(['password'])}
          label={getLocalizedText('Password')}
          validate={value => value.length >= 4}
          secureTextEntry
        />
        <Input
          value={this.state.password2}
          onChange={this._onChange(['password2'])}
          label={getLocalizedText('PasswordAgain')}
          validate={value => value === this.state.password}
          secureTextEntry
        />

        <FilledButton label={getLocalizedText('Submit')} onPress={this._onUpdate} />

      </CenterAlignedPageView>
    )
  }

  private _renderAvatar = () => {
    const { me } = this.state

    return (
      <RX.View style={{ alignItems: 'center' }}>
        <RX.View
          style={{
            width: AVATAR_SIZE,
            justifyContent: 'center'
          }}
        >
          <Image source={this.state.avatarImagePreview || me.image!.url} style={styles.avatar} />

          <RX.View
            style={[styles.avatarIcon, { [Styles.values.end]: Styles.values.spacing, }]}
          >
            <FilePicker
              onImageChange={avatarImage => this.setState({ avatarImage })}
              onImagePreviewChange={avatarImagePreview => this.setState({ avatarImagePreview })}
            >
              <Image
                source={ImageSource.Camera}
                style={{
                  width: 23,
                  height: 20,
                }}
              />
            </FilePicker>
          </RX.View>

          {
            this.state.avatarImagePreview &&
            <RX.View
              style={[styles.avatarIcon, { [Styles.values.start]: Styles.values.spacing, }]}
              onPress={() => this.setState({ avatarImagePreview: undefined, avatarImage: undefined })}
            >
              <Image
                source={ImageSource.RemoveIconWhite}
                style={{
                  width: 20,
                  height: 20,
                }}
              />
            </RX.View>
          }
        </RX.View>
      </RX.View>
    )
  }

  private _onChange = (fieldNameAddress: string[]) => (value: any) => {
    const me = { ...this.state.me }

    _set(me, fieldNameAddress, value)
    this.setState({
      me
    })
  }

  private _getUser = (): UserUpdateInput => {
    const { me } = this.state

    return {
      bio: me.bio,
      email: me.email,
      firstName: me.firstName,
      gender: me.gender,
      lastName: me.lastName,
      middleName: me.middleName,
      socialNetworks: {
        instagram: me.socialNetworks.instagram,
        twitter: me.socialNetworks.twitter,
        pinterest: me.socialNetworks.pinterest,
        website: me.socialNetworks.website,
      },
      username: me.username,
      image: this.state.avatarImage,
    }
  }

  private _onUpdate = () => {
    this.props.onUpdate({
      id: this.state.me.id,
      user: this._getUser()
    })
      .then(() => {
        LocationStore.navigate(this.props, 'back')

        /**
         * If profile image changed, reload the page
         * */
        if (this.state.avatarImage) {
          window.location.reload()
        }
      })
  }
}

export default function () {
  const [updateUser] = useMutation<SettingsMutation, SettingsMutationVariables>(gql`
    mutation SettingsMutation($id: String!, $user: UserUpdateInput!) {
      updateUser(id: $id, user: $user) {
        ...Me
      }
    }

    ${RegisterForm.fragments.me}
  `, {
    update: (proxy, { data }) => {
      if (data) {
        UserStore.setUser(data.updateUser)
      }
    }
  })

  return (
    <SettingsScreen
      onUpdate={variables => updateUser({ variables })}
    />
  )
}

const styles = {
  container: RX.Styles.createViewStyle({
    padding: Styles.values.spacing,
  }),
  avatar: RX.Styles.createImageStyle({
    width: AVATAR_SIZE,
    height: AVATAR_SIZE,
    borderRadius: AVATAR_SIZE / 2,
  }),
  avatarIcon: RX.Styles.createViewStyle({
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0, 0.3)',
    padding: 5,
    borderRadius: 100,
    cursor: 'pointer',
  })
}
