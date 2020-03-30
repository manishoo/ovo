/*
 * NutritionInfo.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import Styles from '@App/Styles'
import { translate } from '@Common/LocalizedText/LocalizedText'
import NutritionPie from '@Common/NutritionInfo/components/NutritionPie/NutritionPie'
import Text from '@Common/Text/Text'
import NutritionFragment from '@Models/nutrition'
import { Nutrition } from '@Models/types/Nutrition'
import areFieldsEqual from '@Utils/areFieldsEqual'
import React, { memo } from 'react'
import RX from 'reactxp'
import NutritionDetail from './components/NutritionDetail/NutritionDetail'
import MacroTargets from './MacroTargets'
import { NutritionProfile } from './types/NutritionProfile'


const styles = {
  row: RX.Styles.createViewStyle({
    flexDirection: 'row',
    justifyContent: 'space-between',
  }),
  title: RX.Styles.createTextStyle({
    textAlign: 'center',
    // fontWeight: '300',
    marginBottom: Styles.values.spacing / 2,
  })
}

interface NutritionInfoProps {
  nutrition: Nutrition,
  title?: string,
  nutritionProfile?: NutritionProfile,
  style?: any,
  showDetails?: boolean,
  showMacros?: boolean,
  showPie?: boolean,
}

export const fragments = {
  nutrition: NutritionFragment
}

const NutritionInfo = memo(({ nutrition, nutritionProfile, title, style, showDetails = true, showMacros = true, showPie = true }: NutritionInfoProps) => {
  if (nutrition.calories && nutrition.calories.amount === 0) return null
  if (!nutrition.proteins) return null
  if (!nutrition.fats) return null
  if (!nutrition.totalCarbs) return null

  return (
    <RX.View style={style}>
      {
        showPie &&
        <NutritionPie
          nutrition={nutrition}
          size={250}
          pieProps={{
            padding: { bottom: Styles.values.spacing / 2 }
          }}
        />
      }

      <RX.View
        style={{
          padding: Styles.values.spacing,
          paddingTop: 0,
          // marginTop: -Styles.values.spacing / 2,
          // minWidth: simple ? undefined : 260, //FIXME
        }}
      >
        <RX.View
          style={{
            flex: 1,
            flexDirection: 'row',
            marginBottom: Styles.values.spacing,
          }}
        >
          <RX.View
            style={{
              flex: 3,
            }}
          >
            {!!title && <Text style={styles.title}>{title}</Text>}
            {
              nutrition.calories &&
              <RX.View
                style={styles.row}
              >
                <Text style={{ fontWeight: 'bold' }} translate={'calories'} />
                <Text
                  style={{ fontWeight: 'bold' }}>{Math.round(nutrition.calories.amount)}</Text>
              </RX.View>
            }
            {
              nutrition.proteins &&
              <RX.View
                style={styles.row}
              >
                <Text style={{ color: Styles.values.macroColors.proteins, fontWeight: 'bold' }}
                      translate={'proteins'} />
                <Text style={{
                  color: Styles.values.macroColors.proteins,
                  fontWeight: 'bold'
                }}>{Math.round(nutrition.proteins.amount)}{translate(nutrition.proteins.unit)}</Text>
              </RX.View>
            }
            {
              nutrition.fats &&
              <RX.View
                style={styles.row}
              >
                <Text style={{ color: Styles.values.macroColors.fats, fontWeight: 'bold' }} translate={'fats'} />
                <Text style={{
                  color: Styles.values.macroColors.fats,
                  fontWeight: 'bold'
                }}>{Math.round(nutrition.fats.amount)}{translate(nutrition.fats.unit)}</Text>
              </RX.View>
            }
            {
              (nutrition.totalCarbs) &&
              <RX.View
                style={styles.row}
              >
                <Text style={{ color: Styles.values.macroColors.carbs, fontWeight: 'bold' }} translate={'carbs'} />
                <Text style={{
                  color: Styles.values.macroColors.carbs,
                  fontWeight: 'bold'
                }}>{Math.round(nutrition.totalCarbs.amount)}{translate((nutrition.totalCarbs)!.unit)}</Text>
              </RX.View>
            }
          </RX.View>
          {
            showMacros &&
            <RX.View style={{ flex: 2 }}>
              <MacroTargets
                nutritionProfile={nutritionProfile}
              />
            </RX.View>
          }
        </RX.View>

        {
          showDetails && <NutritionDetail nutrition={nutrition} />
        }
      </RX.View>
    </RX.View>
  )
}, areFieldsEqual([
  'nutrition',
  'nutritionProfile',
]))

export default NutritionInfo
