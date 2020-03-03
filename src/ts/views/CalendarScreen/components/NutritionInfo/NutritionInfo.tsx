/*
 * NutritionInfo.tsx
 * Copyright: Ouranos Studio 2019
 */

import Styles from '@App/Styles'
import { translate } from '@Common/LocalizedText/LocalizedText'
import Text from '@Common/Text/Text'
import NutritionFragment from '@Models/nutrition'
import { Nutrition } from '@Models/types/Nutrition'
import MacroTargets from '@Views/CalendarScreen/components/NutritionInfo/MacroTargets'
import React, { Suspense } from 'react'
import RX from 'reactxp'


const styles = {
  row: RX.Styles.createViewStyle({
    flexDirection: 'row',
    justifyContent: 'space-between',
  }),
  title: RX.Styles.createTextStyle({
    textAlign: 'center',
    fontWeight: '300',
    marginBottom: Styles.values.spacing
  })
}

interface NutritionInfoProps {
  nutrition: Nutrition,
  title?: string,
  showTargets?: boolean,
}

export const fragments = {
  nutrition: NutritionFragment
}

const NutritionInfo = ({ nutrition, showTargets, title }: NutritionInfoProps) => {
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

  return (
    <RX.View>
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
              colorScale={['#e95855', '#ffd633', '#8ed091']}
              data={[
                {
                  x: `${translate('proteins')}\n${_getMacroPercent('protein')}%`,
                  y: Math.round(nutrition.proteins.amount * 4)
                },
                { x: `${translate('fats')}\n${_getMacroPercent('fat')}%`, y: Math.round(nutrition.fats.amount * 9) },
                {
                  x: `${translate('totalCarbs')}\n${_getMacroPercent('carbs')}%`,
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
                style={{ fontWeight: 'bold' }}>{Math.round(nutrition.calories.amount)} {translate(nutrition.calories.unit)}</Text>
            </RX.View>
          }
          {
            nutrition.proteins &&
            <RX.View
              style={styles.row}
            >
              <Text style={{ color: '#E53935', fontWeight: 'bold' }} translate={'proteins'} />
              <Text style={{
                color: '#E53935',
                fontWeight: 'bold'
              }}>{Math.round(nutrition.proteins.amount)} {translate(nutrition.proteins.unit)}</Text>
            </RX.View>
          }
          {
            nutrition.fats &&
            <RX.View
              style={styles.row}
            >
              <Text style={{ color: '#FFCC00', fontWeight: 'bold' }} translate={'fats'} />
              <Text style={{
                color: '#FFCC00',
                fontWeight: 'bold'
              }}>{Math.round(nutrition.fats.amount)} {translate(nutrition.fats.unit)}</Text>
            </RX.View>
          }
          {
            (nutrition.totalCarbs) &&
            <RX.View
              style={styles.row}
            >
              <Text style={{ color: '#43A047', fontWeight: 'bold' }} translate={'totalCarbs'} />
              <Text style={{
                color: '#43A047',
                fontWeight: 'bold'
              }}>{Math.round(nutrition.totalCarbs.amount)} {translate((nutrition.totalCarbs)!.unit)}</Text>
            </RX.View>
          }
        </RX.View>
        {
          showTargets &&
          <RX.View style={{ flex: 2 }}>
            <MacroTargets />
          </RX.View>
        }
      </RX.View>
    </RX.View>
  )
}

export default NutritionInfo
