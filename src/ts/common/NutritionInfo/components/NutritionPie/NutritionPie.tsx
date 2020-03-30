/*
 * NutritionPie.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import AppConfig from '@App/AppConfig'
import Styles from '@App/Styles'
import { translate } from '@Common/LocalizedText/LocalizedText'
import { Nutrition } from '@Models/types/Nutrition'
import RX from 'reactxp'


const _styles = {
  container: RX.Styles.createViewStyle({
    //
  }),
}

interface NutritionPieProps {
  style?: any,
  nutrition: Nutrition,
  size: number,
  pieProps?: any,
}

const NutritionPie = ({ style, nutrition, size, pieProps }: NutritionPieProps) => {
  const VictoryPieLazy = require('reactxp-chart').VictoryPie
  const VictoryLabel = require('reactxp-chart').VictoryLabel

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

  const _getLabel = ({ datum }: any) => {
    switch (datum._x) {
      case 0:
        return `${translate('proteins')}\n${_getMacroPercent('protein')}%`
      case 1:
        return `${translate('fats')}\n${_getMacroPercent('fat')}%`
      case 2:
        return `${translate('carbs')}\n${_getMacroPercent('carbs')}%`
    }
  }

  return (
    <RX.View>
      {
        (
          nutrition.proteins &&
          nutrition.fats &&
          nutrition.totalCarbs
        ) &&
        <VictoryPieLazy
          animate={{ duration: 500 }}
          height={size}
          width={size}
          labels={_getLabel}
          labelRadius={() => 50}
          labelComponent={<VictoryLabel
            textAnchor={'middle'}
            style={{
              fill: '#fff',
              fontFamily: Styles.fonts[AppConfig.locale].text, //FIXME
              fontSize: 12,
              fontWeight: '100'
            }}
          />}
          colorScale={[Styles.values.macroColors.proteins, Styles.values.macroColors.fats, Styles.values.macroColors.carbs]}
          data={[
            nutrition.proteins.amount * 4,
            nutrition.fats.amount * 9,
            nutrition.totalCarbs.amount * 4,
          ]}
          padding={0}
          {...pieProps}
        />
      }
    </RX.View>
  )
}

export default NutritionPie
