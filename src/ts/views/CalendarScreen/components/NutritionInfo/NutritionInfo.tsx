/*
 * NutritionInfo.tsx
 * Copyright: Ouranos Studio 2019
 */

import Styles from '@App/Styles'
import { translate } from '@Common/LocalizedText/LocalizedText'
import Text from '@Common/Text/Text'
import { NutritionInfoNutrition } from '@Views/CalendarScreen/components/NutritionInfo/types/NutritionInfoNutrition'
import gql from 'graphql-tag'
import React, { Suspense } from 'react'
import RX from 'reactxp'


const styles = {
  row: RX.Styles.createViewStyle({
    flexDirection: 'row',
    justifyContent: 'space-between',
  })
}

interface NutritionInfoProps {
  nutrition: NutritionInfoNutrition,
}

export const fragments = {
  nutrition: gql`
    fragment NutritionInfoNutrition on Nutrition {
      calories { ...NutritionInfoNutrientUnit }
      proteins { ...NutritionInfoNutrientUnit }
      carbsByDifference { ...NutritionInfoNutrientUnit }
      totalCarbs { ...NutritionInfoNutrientUnit }
      totalAvailableCarbs { ...NutritionInfoNutrientUnit }
      fats { ...NutritionInfoNutrientUnit }
    }

    fragment NutritionInfoNutrientUnit on NutrientUnit {
      amount
      id
      unit
    }
  `
}

const NutritionInfo = ({ nutrition }: NutritionInfoProps) => {
  // @ts-ignore
  const VictoryPieLazy = React.lazy(() => import('reactxp-chart').then(module => ({ default: module.VictoryPie })))
  // @ts-ignore
  const VictoryLabel = React.lazy(() => import('reactxp-chart').then(module => ({ default: module.VictoryLabel })))

  return (
    <RX.View>
      <Suspense fallback={<RX.View />}>
        <VictoryPieLazy
          height={300}
          width={300}
          labelComponent={<VictoryLabel style={{ fontFamily: Styles.fonts.displayRegular.fontFamily }} />}
          colorScale={['#E53935', '#FFCC00', '#43A047']}
          data={[
            nutrition.proteins ? { x: translate('proteins'), y: nutrition.proteins.amount * 4 } : undefined,
            nutrition.fats ? { x: translate('fats'), y: nutrition.fats.amount * 9 } : undefined,
            (nutrition.totalCarbs || nutrition.carbsByDifference) ? {
              x: translate('totalCarbs'),
              y: (nutrition.totalCarbs || nutrition.carbsByDifference)!.amount * 4
            } : undefined,
          ].filter(Boolean)}
        />
      </Suspense>

      <RX.View
        style={{
          flex: 1,
          flexDirection: 'row',
          padding: Styles.values.spacing,
        }}
      >
        <RX.View
          style={{
            flex: 1,
          }}
        >
          {
            nutrition.calories &&
            <RX.View
              style={styles.row}
            >
              <Text style={{ fontWeight: 'bold' }} translate={'calories'} />
              <Text style={{ fontWeight: 'bold' }}>{nutrition.calories.amount} {translate(nutrition.calories.unit)}</Text>
            </RX.View>
          }
          {
            nutrition.proteins &&
            <RX.View
              style={styles.row}
            >
              <Text style={{color: '#E53935', fontWeight: 'bold' }} translate={'proteins'} />
              <Text style={{ color: '#E53935', fontWeight: 'bold' }}>{nutrition.proteins.amount} {translate(nutrition.proteins.unit)}</Text>
            </RX.View>
          }
          {
            nutrition.fats &&
            <RX.View
              style={styles.row}
            >
              <Text style={{color: '#FFCC00', fontWeight: 'bold' }} translate={'fats'} />
              <Text style={{color: '#FFCC00', fontWeight: 'bold' }}>{nutrition.fats.amount} {translate(nutrition.fats.unit)}</Text>
            </RX.View>
          }
          {
            (nutrition.totalCarbs || nutrition.carbsByDifference) &&
            <RX.View
              style={styles.row}
            >
              <Text style={{color: '#43A047', fontWeight: 'bold' }} translate={'totalCarbs'} />
              <Text style={{color: '#43A047', fontWeight: 'bold' }}>{(nutrition.totalCarbs || nutrition.carbsByDifference)!.amount} {translate((nutrition.totalCarbs || nutrition.carbsByDifference)!.unit)}</Text>
            </RX.View>
          }
        </RX.View>
        {/*<RX.View>
          <Text>Abc</Text>
          <Text>Abc</Text>
          <Text>Abc</Text>
        </RX.View>*/}
      </RX.View>
    </RX.View>
  )

  /**
   * proteins
   totalCarbs
   fats
   * */
}

export default NutritionInfo
