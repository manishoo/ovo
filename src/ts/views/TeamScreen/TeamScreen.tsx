/*
 * TeamScreen.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import Styles from '@App/Styles'
import { translate } from '@Common/LocalizedText/LocalizedText'
import Navbar from '@Common/Navbar/Navbar'
import Page from '@Common/Page'
import RX from 'reactxp'


const _styles = {
  container: RX.Styles.createViewStyle({
    //
  }),
}

interface TeamScreenProps {
  style?: any
}

const TeamScreen = ({ style }: TeamScreenProps) => {
  return (
    <Page
      maxWidth={Styles.values.mainContentMaxWidth}
    >
      <Navbar
        title={translate('Team')}
      />
      <RX.View
        style={[
          _styles.container,
          style,
        ]}
      >

      </RX.View>
    </Page>
  )
}

export default TeamScreen