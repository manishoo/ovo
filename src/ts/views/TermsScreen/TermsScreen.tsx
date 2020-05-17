/*
 * TermsScreen.tsx
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

interface TermsScreenProps {
  style?: any
}

const TermsScreen = ({ style }: TermsScreenProps) => {
  return (
    <Page
      maxWidth={Styles.values.mainContentMaxWidth}
    >
      <Navbar
        title={translate('Terms')}
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

export default TermsScreen
