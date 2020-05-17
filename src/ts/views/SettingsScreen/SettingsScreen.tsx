/*
 * SettingsScreen.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import { gql, useApolloClient, useMutation } from '@apollo/client'
import Styles from '@App/Styles'
import { ThemeContext } from '@App/ThemeContext'
import FilledButton from '@Common/FilledButton/FilledButton'
import FlatButton from '@Common/FlatButton/FlatButton'
import Image from '@Common/Image/Image'
import Input from '@Common/Input/Input'
import { translate } from '@Common/LocalizedText/LocalizedText'
import Navbar from '@Common/Navbar/Navbar'
import Page from '@Common/Page'
import Select from '@Common/Select/Select'
import Text from '@Common/Text/Text'
import TextInputAutoGrow from '@Common/TextInputAutoGrow/TextInputAutoGrow'
import { Routes } from '@Models/common'
import { Gender, UserUpdateInput } from '@Models/global-types'
import { useLogOut } from '@Models/graphql/auth/auth'
import { MeFragment, MeOperation, useMe } from '@Models/graphql/me/me'
import { Me } from '@Models/graphql/me/types/Me'
import FilePicker from '@Modules/FilePicker'
import ImageSource from '@Modules/images'
import LocationStore from '@Services/LocationStore'
import UsernameInput from '@Views/Register/components/UsernameInput'
import { SettingsMutation, SettingsMutationVariables } from '@Views/SettingsScreen/types/SettingsMutation'
import { ExecutionResult } from 'graphql'
import _set from 'lodash/set'
import React from 'react'
import RX from 'reactxp'


const AVATAR_SIZE = 150

interface SettingsProps {
  me: Me,

  style?: any,
  onUpdate: (variables: SettingsMutationVariables) => Promise<ExecutionResult<SettingsMutation>>,
  onLogOut: () => Promise<any>,
}

interface SettingsState {
  me: Me,

  avatarImage?: any,
  avatarImagePreview?: any,

  newPassword: string,
  password: string,
  password2: string,
}

class SettingsScreen extends React.PureComponent<SettingsProps, SettingsState> {
  constructor(props: SettingsProps) {
    super(props)

    this.state = {
      me: props.me,

      newPassword: '',
      password: '',
      password2: '',
    }
  }

  public render() {
    const { me } = this.state

    return (
      <ThemeContext.Consumer>
        {({ theme }) => (
          <Page
            maxWidth={500}
          >
            <Navbar title={translate('Edit Profile')} />
            {this._renderAvatar()}
            <Text translate type={Text.types.title}>Account Info</Text>

            <Input
              value={me.firstName || undefined}
              onChange={this._onChange(['firstName'])}
              label={translate('First Name')}
            />
            <Input
              value={me.lastName || undefined}
              onChange={this._onChange(['lastName'])}
              label={translate('Last Name')}
            />
            <Select
              label={translate('Gender')}
              value={me.gender}
              options={[
                { value: null, text: <Text translate>Select gender</Text> },
                { value: Gender.female, text: <Text translate>{'female'}</Text> },
                { value: Gender.male, text: <Text translate>{'male'}</Text> },
              ]}
              onChange={this._onChange(['gender'])}
            />
            <Input
              value={me.email}
              onChange={this._onChange(['email'])}
              label={translate('Email')}
            />
            <TextInputAutoGrow
              label={translate('Bio')}
              value={me.bio || undefined}
              placeholder={translate('Tell others about yourself')}
              onChangeText={this._onChange(['bio'])}
            />
            <UsernameInput
              value={me.username}
              onChange={this._onChange(['username'])}
            />

            <Input
              value={me.socialNetworks && me.socialNetworks.website ? me.socialNetworks.website : undefined}
              onChange={this._onChange(['socialNetworks', 'website'])}
              label={translate('Website')}
            />

            <Text translate type={Text.types.title}>Social Media</Text>

            <Input
              value={me.socialNetworks && me.socialNetworks.instagram ? me.socialNetworks.instagram : undefined}
              onChange={this._onChange(['socialNetworks', 'instagram'])}
              label={translate('Instagram')}
              placeholder={translate('socialMediaPlaceholderInstagram')}
            />
            <Input
              value={me.socialNetworks && me.socialNetworks.twitter ? me.socialNetworks.twitter : undefined}
              onChange={this._onChange(['socialNetworks', 'twitter'])}
              label={translate('Twitter')}
              placeholder={translate('socialMediaPlaceholderTwitter')}
            />
            <Input
              value={me.socialNetworks && me.socialNetworks.pinterest ? me.socialNetworks.pinterest : undefined}
              onChange={this._onChange(['socialNetworks', 'pinterest'])}
              label={translate('Pinterest')}
              placeholder={translate('socialMediaPlaceholderPinterest')}
            />

            {
              false && [
                <Text translate type={Text.types.title}>Change Password</Text>,
                <Input
                  value={this.state.newPassword}
                  onChange={this._onChange(['newPassword'])}
                  label={translate('NewPassword')}
                  validate={value => value.length >= 4}
                  secureTextEntry
                />,
                <Input
                  value={this.state.password}
                  onChange={this._onChange(['password'])}
                  label={translate('Password')}
                  validate={value => value.length >= 4}
                  secureTextEntry
                />,
                <Input
                  value={this.state.password2}
                  onChange={this._onChange(['password2'])}
                  label={translate('passwordConfirmation')}
                  validate={value => value === this.state.password}
                  secureTextEntry
                />
              ]
            }

            <FilledButton label={translate('Submit')} onPress={this._onUpdate} />

            <FlatButton
              onPress={this._handleLogOut}
              containerStyle={{
                marginTop: Styles.values.spacing,
              }}
              style={{
                borderWidth: 0,
              }}
              labelStyle={{
                color: theme.colors.red,
              }}
              label={translate('Log out')}
            />
          </Page>
        )}
      </ThemeContext.Consumer>
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
          <Image source={this.state.avatarImagePreview || me.avatar!.url} style={styles.avatar} />

          <RX.View
            style={[styles.avatarIcon, { [Styles.values.end]: Styles.values.spacing, }]}
          >
            <FilePicker
              onImageChange={avatarImage => this.setState({ avatarImage })}
              compress
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

    if (fieldNameAddress.length > 1) {
      // @ts-ignore
      me[fieldNameAddress[0]] = {
        // @ts-ignore
        ...me[fieldNameAddress[0]],
        [fieldNameAddress[1]]: value
      }
    } else {
      _set(me, fieldNameAddress, value)
    }

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
      socialNetworks: {
        instagram: me.socialNetworks && me.socialNetworks.instagram,
        twitter: me.socialNetworks && me.socialNetworks.twitter,
        pinterest: me.socialNetworks && me.socialNetworks.pinterest,
        website: me.socialNetworks && me.socialNetworks.website,
      },
      username: me.username,
      avatar: this.state.avatarImage,
    }
  }

  private _onUpdate = () => {
    this.props.onUpdate({
      id: this.state.me.id,
      user: this._getUser()
    })
      .then(({ data }) => {
        if (!data) return
        LocationStore.navigate(this.props, `/${data.updateUser.username}`, { params: { replace: true } })

        /**
         * If profile image changed, reload the page
         * */
        if (this.state.avatarImage && typeof window !== 'undefined') {
          window.location.reload()
        }
      })
  }

  private _handleLogOut = () => {
    this.props.onLogOut()
      .then(() => LocationStore.navigate(this.props, Routes.home))
  }
}

export default function () {
  const client = useApolloClient()

  const [updateUser] = useMutation<SettingsMutation, SettingsMutationVariables>(gql`
    mutation SettingsMutation($id: ObjectId!, $user: UserUpdateInput!) {
      updateUser(id: $id, user: $user) {
        ...Me
      }
    }

    ${MeFragment}
  `, {
    fetchPolicy: 'no-cache',
    onCompleted: ({ updateUser }) => {
      client.writeQuery({
        query: MeOperation,
        data: {
          me: updateUser,
        },
      })
    },
  })
  const logOut = useLogOut()

  return (
    <SettingsScreen
      me={useMe()!}
      onUpdate={variables => updateUser({ variables })}
      onLogOut={logOut}
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
