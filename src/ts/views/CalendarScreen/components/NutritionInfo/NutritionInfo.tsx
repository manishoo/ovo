/*
 * NutritionInfo.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import Styles from '@App/Styles'
import { translate } from '@Common/LocalizedText/LocalizedText'
import Text from '@Common/Text/Text'
import NutritionFragment from '@Models/nutrition'
import { Nutrition } from '@Models/types/Nutrition'
import areFieldsEqual from '@Utils/areFieldsEqual'
import MacroTargets from '@Views/CalendarScreen/components/NutritionInfo/MacroTargets'
import React, { memo, Suspense } from 'react'
import RX from 'reactxp'
import { NutritionProfile } from './types/NutritionProfile'


const styles = {
  row: RX.Styles.createViewStyle({
    flexDirection: 'row',
    justifyContent: 'space-between',
  }),
  title: RX.Styles.createTextStyle({
    textAlign: 'center',
    fontWeight: '300',
    marginBottom: Styles.values.spacing / 2,
  })
}

interface NutritionInfoProps {
  nutrition: Nutrition,
  title?: string,
  nutritionProfile?: NutritionProfile,
  style?: any,
}

export const fragments = {
  nutrition: NutritionFragment
}

const NutritionInfo = memo(({ nutrition, nutritionProfile, title, style }: NutritionInfoProps) => {
  if (nutrition.calories && nutrition.calories.amount === 0) return null

  // @ts-ignore
  const VictoryPieLazy = React.lazy(() => import('reactxp-chart').then(module => ({ default: module.VictoryPie })))
  // @ts-ignore
  const VictoryLabel = React.lazy(() => import('reactxp-chart').then(module => ({ default: module.VictoryLabel })))

  const _getMacroPercent = (macro: 'protein' | 'fat' | 'carbs') => {
    const total =
      (nutrition.proteins!.amount * 4) +
      (nutrition.fats!.amount * 9) +
      (nutrition.totalCarbs!.amount * 4)
    switch (macro) {
      case 'protein':
        return Math.round(((nutrition.proteins!.amount * 4) * 100) / total)
      case 'fat':
        return Math.round(((nutrition.fats!.amount * 9) * 100) / total)
      case 'carbs':
        return Math.round(((nutrition.totalCarbs!.amount * 4) * 100) / total)
    }
  }

  const colors = {
    proteins: '#e95855',
    fats: '#ffd633',
    carbs: '#60c365',
  }

  return (
    <RX.View style={style}>
      <RX.View style={{ margin: -54 }}>
        <Suspense fallback={<RX.View />}>
          {
            (
              nutrition.proteins &&
              nutrition.fats &&
              nutrition.totalCarbs
            ) &&
            <VictoryPieLazy
              height={250}
              width={250}
              labelRadius={() => 50}
              labelComponent={<VictoryLabel textAnchor={'middle'} style={{
                fill: '#fff',
                fontFamily: Styles.fonts.displayRegular.fontFamily,
                fontSize: 8
              }} />}
              colorScale={[colors.proteins, colors.fats, colors.carbs]}
              data={[
                {
                  x: `${translate('proteins')}\n${_getMacroPercent('protein')}%`,
                  y: Math.round(nutrition.proteins.amount * 4)
                },
                { x: `${translate('fats')}\n${_getMacroPercent('fat')}%`, y: Math.round(nutrition.fats.amount * 9) },
                {
                  x: `${translate('carbs')}\n${_getMacroPercent('carbs')}%`,
                  y: Math.round(nutrition.totalCarbs.amount * 4)
                },
              ]}
            />
          }
        </Suspense>
      </RX.View>

      <RX.View
        style={{
          flex: 1,
          flexDirection: 'row',
          padding: Styles.values.spacing,
          paddingTop: 0,
          marginTop: -Styles.values.spacing / 2,
          minWidth: 260, //FIXME
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
              <Text style={{ color: colors.proteins, fontWeight: 'bold' }} translate={'proteins'} />
              <Text style={{
                color: colors.proteins,
                fontWeight: 'bold'
              }}>{Math.round(nutrition.proteins.amount)}{translate(nutrition.proteins.unit)}</Text>
            </RX.View>
          }
          {
            nutrition.fats &&
            <RX.View
              style={styles.row}
            >
              <Text style={{ color: colors.fats, fontWeight: 'bold' }} translate={'fats'} />
              <Text style={{
                color: colors.fats,
                fontWeight: 'bold'
              }}>{Math.round(nutrition.fats.amount)}{translate(nutrition.fats.unit)}</Text>
            </RX.View>
          }
          {
            (nutrition.totalCarbs) &&
            <RX.View
              style={styles.row}
            >
              <Text style={{ color: colors.carbs, fontWeight: 'bold' }} translate={'carbs'} />
              <Text style={{
                color: colors.carbs,
                fontWeight: 'bold'
              }}>{Math.round(nutrition.totalCarbs.amount)}{translate((nutrition.totalCarbs)!.unit)}</Text>
            </RX.View>
          }
        </RX.View>
        {
          nutritionProfile &&
          <RX.View style={{ flex: 2 }}>
            <MacroTargets
              nutritionProfile={nutritionProfile}
            />
          </RX.View>
        }
      </RX.View>
    </RX.View>
  )
}, areFieldsEqual([
  'nutrition',
  'nutritionProfile',
]))

export default NutritionInfo
