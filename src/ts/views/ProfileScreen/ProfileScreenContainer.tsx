/*
 * ProfileScreenContainer.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import { MeContext } from '@Models/graphql/me/me'
import RX from 'reactxp'
import ProfileScreen from './ProfileScreen'


export default function ProfileScreenContainer() {
  return (
    <MeContext.Consumer>
      {({ me }) => (
        <ProfileScreen
          user={me!}
          isMyProfile
        />
      )}
    </MeContext.Consumer>
  )
}
