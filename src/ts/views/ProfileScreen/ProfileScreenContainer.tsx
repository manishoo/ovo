/*
 * ProfileScreenContainer.tsx
 * Copyright: Ouranos Studio 2019
 */

import UserStore from '@Services/UserService'
import { Me } from '@Services/types/Me'
import RX from 'reactxp'
import { ComponentBase } from 'resub'
import ProfileScreen from './ProfileScreen'


interface ProfileScreenContainerState {
  me: Me,
}

export default class ProfileScreenContainer extends ComponentBase<RX.CommonProps, ProfileScreenContainerState> {
  public render() {
    return (
      <ProfileScreen
        user={this.state.me}
        isMyProfile
      />
    )
  }

  protected _buildState(props: RX.CommonProps, initialBuild: boolean): Partial<ProfileScreenContainerState> | undefined {
    return {
      me: UserStore.getUser()!,
    }
  }
}
