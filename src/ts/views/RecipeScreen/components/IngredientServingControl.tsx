/*
 * IngredientServingControl.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import Styles from '@App/Styles'
import { ThemeContext } from '@App/ThemeContext'
import Text from '@Common/Text/Text'
import RX from 'reactxp'


interface IngredientServingControlProps {
  serving: number,
  onServingChange: (serving: number) => void,
}

export default function IngredientServingControl(props: IngredientServingControlProps) {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <RX.View
          style={[
            styles.container,
            { borderColor: theme.colors.ingredientServingControlBorder }
          ]}
        >
          <Text style={styles.control}
                onPress={() => props.onServingChange((props.serving - 1) < 0 ? 0 : (props.serving - 1))}>–</Text>
          <Text translate variables={{ number: String(props.serving) }}
                style={styles.mainText}>IngredientsYieldLabel</Text>
          <Text style={styles.control} onPress={() => props.onServingChange(props.serving + 1)}>+</Text>
        </RX.View>
      )}
    </ThemeContext.Consumer>
  )
}

const styles = {
  container: RX.Styles.createViewStyle({
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    paddingHorizontal: Styles.values.spacing,
    borderRadius: 100,
  }),
  mainText: RX.Styles.createTextStyle({
    marginHorizontal: Styles.values.spacing / 2,
  }),
  control: RX.Styles.createTextStyle({
    fontSize: 18,
  })
}
