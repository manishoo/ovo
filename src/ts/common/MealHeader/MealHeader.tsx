/*
 * MealHeader.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import Styles from '@App/Styles'
import { useTheme } from '@App/ThemeContext'
import CalorieIndicator from '@Common/CalorieIndicator/CalorieIndicator'
import { translate } from '@Common/LocalizedText/LocalizedText'
import NutritionPie from '@Common/NutritionInfo/components/NutritionPie/NutritionPie'
import Text from '@Common/Text/Text'
import TimingPie from '@Common/TimingPie/TimingPie'
import calculateMealTiming from '@Utils/meals/calculate-meal-timing'
import { calculateMealItemsNutrition } from '@Utils/shared/calculate-meal-nutrition'
import { MealCellMeal } from '@Views/ProfileScreen/components/MealsList/components/MealCell/types/MealCellMeal'
import { FC, useMemo } from 'react'
import RX from 'reactxp'


const _styles = {
  amountText: RX.Styles.createTextStyle({
    fontWeight: 'bold',
    fontSize: 16,
    marginHorizontal: Styles.values.spacing / 4,
  }),
  caloriesText: RX.Styles.createTextStyle({
    fontWeight: '100',
    fontSize: 12,
    top: 1,
  }),
  row: RX.Styles.createViewStyle({
    flexDirection: 'row',
    alignItems: 'center',
  }),
  headerContainer: RX.Styles.createViewStyle({
    flexDirection: 'row',
    alignItems: 'center',
    padding: Styles.values.spacing / 2,
    paddingHorizontal: Styles.values.spacingLarge,
    justifyContent: 'space-between',
  }),
  nutritionPie: RX.Styles.createViewStyle({
    marginHorizontal: Styles.values.spacing / 2,
  })
}

interface MealHeaderProps {
  style?: any,
  meal: MealCellMeal,
}

const MealHeader: FC<MealHeaderProps> = ({ style, meal, children }) => {
  const theme = useTheme()
  const stringifiedMeal = JSON.stringify(meal)

  // FIXME performance of stringification?
  const nutrition = useMemo(() => calculateMealItemsNutrition(meal.items), [stringifiedMeal])
  const timing = useMemo(() => calculateMealTiming(meal), [stringifiedMeal])

  const _textColor = useMemo(() => RX.Styles.createTextStyle({
    color: theme.colors.text,
  }, false), [theme.colors.text])

  return (
    <RX.View
      style={_styles.headerContainer}
    >
      {
        nutrition.calories &&
        <RX.View style={_styles.row}>
          <CalorieIndicator
            calories={nutrition.calories.amount}
          />
          <Text style={[_styles.amountText, _textColor]}>{Math.round(nutrition.calories.amount)}</Text>
          <Text style={[_styles.caloriesText, _textColor]} translate={translate.keys.Calories} />
        </RX.View>
      }

      <RX.View style={_styles.row}>
        <TimingPie
          timing={timing}
          size={30}
        />
        <NutritionPie
          nutrition={nutrition}
          size={30}
          style={_styles.nutritionPie}
        />
        {children}
      </RX.View>
    </RX.View>
  )
}

export default MealHeader
