/*
 * RecipeDevelopers.tsx
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

interface RecipeDevelopersProps {
  style?: any
}

const RecipeDevelopersScreen = ({ style }: RecipeDevelopersProps) => {
  return (
    <Page
      maxWidth={Styles.values.mainContentMaxWidth}
    >
      <Navbar
        title={translate('Recipe Developers')}
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

export default RecipeDevelopersScreen
