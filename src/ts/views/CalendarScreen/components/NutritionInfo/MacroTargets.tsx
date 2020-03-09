/*
 * MacroTargets.tsx
 * Copyright: Ouranos Studio 2020
 */

import Styles from '@App/Styles'
import { ThemeContext } from '@App/ThemeContext'
import NutritionProfileForm from '@Common/NutritionProfileForm/NutritionProfileForm'
import Text from '@Common/Text/Text'
import gql from 'graphql-tag'
import RX from 'reactxp'
import { NutritionProfile } from './types/NutritionProfile'


interface MacroTargetsProps {
  style?: any,
  nutritionProfile: NutritionProfile
}

export default class MacroTargets extends RX.Component<MacroTargetsProps> {
  render() {
    const { style, nutritionProfile } = this.props

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
              this._renderRangeTarget(
                nutritionProfile.protein.min,
                nutritionProfile.protein.max,
              ),
              this._renderRangeTarget(
                nutritionProfile.fat.min,
                nutritionProfile.fat.max,
              ),
              this._renderRangeTarget(
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
                this._renderPercentTarget(nutritionProfile.protein.percentage, Math.round((nutritionProfile.protein.percentage * nutritionProfile.calories / 100) / 4)),
                this._renderPercentTarget(nutritionProfile.fat.percentage, Math.round((nutritionProfile.fat.percentage * nutritionProfile.calories / 100) / 9)),
                this._renderPercentTarget(nutritionProfile.carbs.percentage, Math.round((nutritionProfile.carbs.percentage * nutritionProfile.calories / 100) / 4)),
              ]
            )
        }
      </RX.View>
    )
  }

  private _renderPercentTarget = (percent: number, gram: number) => {
    return (
      <RX.View style={styles.row}>
        <Text style={styles.text}>~ </Text>
        <Text style={styles.text}>{gram}</Text>
        <Text style={styles.text}>g ({percent}%)</Text>
      </RX.View>
    )
  }

  private _renderRangeTarget = (min: number, max: number) => {
    return (
      <RX.View style={styles.row}>
        <Text style={styles.text}>{min}</Text>
        <Text style={styles.text}>-</Text>
        <Text style={styles.text}>{max}</Text>
      </RX.View>
    )
  }

  static fragments = {
    nutritionProfile: gql`
      fragment NutritionProfile on NutritionProfile {
        ...NutritionProfileFormNutritionProfile
      }

      ${NutritionProfileForm.fragments.nutritionProfile}
    `
  }
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
  })
}
