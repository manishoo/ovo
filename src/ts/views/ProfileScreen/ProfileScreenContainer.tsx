/*
 * ProfileScreenContainer.tsx
 * Copyright: Ouranos Studio 2019
 */

import RX from 'reactxp'
import { ComponentBase } from 'resub'
import UserStore from 'src/ts/stores/UserStore'
import { Me } from 'src/ts/views/Register/types/Me'
import ProfileScreen from './ProfileScreen'


interface ProfileScreenContainerState {
  me: Me,
}

export default class ProfileScreenContainer extends ComponentBase<RX.CommonProps, ProfileScreenContainerState> {
  constructor(props: RX.CommonProps) {
    super(props)

    this.state = {
      me: UserStore.getUser(),
    }
  }

  protected _buildState(props: RX.CommonProps, initialBuild: boolean): Partial<ProfileScreenContainerState> | undefined {
    return {
      me: UserStore.getUser(),
    }
  }

  render() {
    return (
      <ProfileScreen
        user={this.state.me}
        isMyProfile
      />
    )
  }
}
