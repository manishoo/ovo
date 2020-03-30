/*
 * MacroTargets.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import { gql } from '@apollo/client'
import { ThemeContext } from '@App/ThemeContext'
import { useMe } from '@Models/graphql/me/me'
import RX from 'reactxp'
import Styles from '../../app/Styles'
import { translate } from '../LocalizedText/LocalizedText'
import NutritionProfileForm from '../NutritionProfileForm/NutritionProfileForm'
import Text from '../Text/Text'
import { NutritionProfile } from './types/NutritionProfile'


interface MacroTargetsProps {
  style?: any,
  nutritionProfile?: NutritionProfile
}

export default function MacroTargets({ style }: MacroTargetsProps) {
  const _renderPercentTarget = (percent: number, gram: number) => {
    return (
      <RX.View style={styles.row} key={`${percent}:${gram}`}>
        <Text style={styles.text}>~ </Text>
        <Text style={styles.text}>{gram}</Text>
        <Text style={styles.text}>{translate('g')} ({percent}%)</Text>
      </RX.View>
    )
  }

  const _renderRangeTarget = (min: number, max: number) => {
    return (
      <RX.View style={styles.row} key={`${min}:${max}`}>
        <Text style={styles.text}>{min}</Text>
        <Text style={styles.text}>-</Text>
        <Text style={styles.text}>{max}</Text>
        <Text style={styles.text}>{translate('g')}</Text>
      </RX.View>
    )
  }

  const { nutritionProfile } = useMe()!

  return (
    <RX.View
      style={[styles.container, style]}
    >
      <ThemeContext.Consumer>
        {({ theme }) => (
          <Text
            translate={'Targets'}
            style={styles.title}
            onPress={() => NutritionProfileForm.showModal({
              nutritionProfile,
              theme
            })}
          />
        )}
      </ThemeContext.Consumer>

      <RX.View>
        <Text style={styles.text}>{nutritionProfile.calories}</Text>
      </RX.View>
      {
        nutritionProfile.mode === 'range'
          ? [
            _renderRangeTarget(
              nutritionProfile.protein.min,
              nutritionProfile.protein.max,
            ),
            _renderRangeTarget(
              nutritionProfile.fat.min,
              nutritionProfile.fat.max,
            ),
            _renderRangeTarget(
              nutritionProfile.carbs.min,
              nutritionProfile.carbs.max,
            )
          ]
          : (
            (
              nutritionProfile.protein.percentage &&
              nutritionProfile.fat.percentage &&
              nutritionProfile.carbs.percentage
            ) &&
            [
              _renderPercentTarget(nutritionProfile.protein.percentage, Math.round((nutritionProfile.protein.percentage * nutritionProfile.calories / 100) / 4)),
              _renderPercentTarget(nutritionProfile.fat.percentage, Math.round((nutritionProfile.fat.percentage * nutritionProfile.calories / 100) / 9)),
              _renderPercentTarget(nutritionProfile.carbs.percentage, Math.round((nutritionProfile.carbs.percentage * nutritionProfile.calories / 100) / 4)),
            ]
          )
      }
    </RX.View>
  )

}

MacroTargets.fragments = {
  nutritionProfile: gql`
    fragment NutritionProfile on NutritionProfile {
      ...NutritionProfileFormNutritionProfile
    }

    ${NutritionProfileForm.fragments.nutritionProfile}
  `
}

const styles = {
  container: RX.Styles.createViewStyle({
    alignItems: 'center',
  }),
  row: RX.Styles.createViewStyle({
    flexDirection: 'row'
  }),
  title: RX.Styles.createTextStyle({
    textAlign: 'center',
    fontWeight: '300',
    marginBottom: Styles.values.spacing / 2,
  }),
  text: RX.Styles.createTextStyle({
    fontWeight: '300'
  })
}
