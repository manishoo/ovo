/*
 * GroceryList.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import Styles from '@App/Styles'
import { ThemeContext } from '@App/ThemeContext'
import Text from '@Common/Text/Text'
import RX from 'reactxp'


const MEAL_MAX_WIDTH = 350

const styles = {
  container: RX.Styles.createViewStyle({
    // @ts-ignore
    transition: 'all 0.5s',
    borderWidth: 1,
    borderRadius: 20,
    marginBottom: Styles.values.spacing,
    maxWidth: MEAL_MAX_WIDTH,
  }),
  mealName: RX.Styles.createTextStyle({
    fontSize: 20,
    fontWeight: '100',
    [Styles.values.start]: Styles.values.spacingLarge,
    marginTop: Styles.values.spacingLarge,
    marginBottom: Styles.values.spacing / 2,
  }),
}

interface GroceryListProps {
  title: any,
  children: any,
}

const GroceryList = ({ title, children }: GroceryListProps) => {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <RX.View
          style={[
            styles.container,
            {
              backgroundColor: theme.colors.mealCardBackgroundColor,
              borderColor: theme.colors.borderLight,
            },
          ]}
        >
          <Text style={styles.mealName}>{title}</Text>

          {children}
        </RX.View>
      )}
    </ThemeContext.Consumer>
  )
}

export default GroceryList
