/*
 * TimingPie.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import Styles from '@App/Styles'
import { useTheme } from '@App/ThemeContext'
import Text from '@Common/Text/Text'
import { Recipe_timing } from '@Views/RecipeScreen/types/Recipe'
import { useMemo } from 'react'
import RX from 'reactxp'


const _styles = {
  container: RX.Styles.createViewStyle({
    alignItems: 'center',
    justifyContent: 'center',
  }),
}

interface TimingPieProps {
  style?: any,
  timing: Recipe_timing,
  size?: number,
  labelStyle?: any,

  prepTimeColor?: string,
  cookTimeColor?: string,
}

const TimingPie = (props: TimingPieProps) => {
  const { style, timing, size = 65, labelStyle } = props

  const theme = useTheme()
  const VictoryPieLazy = require('reactxp-chart').VictoryPie

  const timingChartData = []

  const prepTimeColor = props.prepTimeColor || Styles.values.timingColors.prepTimeColor
  const cookTimeColor = props.cookTimeColor || Styles.values.timingColors.cookTimeColor

  if (timing.prepTime) timingChartData.push({ x: 'prepTime', y: timing.prepTime })
  if (timing.cookTime) timingChartData.push({ x: 'cookTime', y: timing.cookTime })

  if (!timing.prepTime && !timing.cookTime) {
    timingChartData.push({ x: 'totalTime', y: timing.totalTime || 1 })
  }

  const _containerStyle = useMemo(() => RX.Styles.createViewStyle({
    width: size,
    height: size,
  }, false), [size])

  return (
    <RX.View
      style={[
        _styles.container,
        _containerStyle,
        style,
      ]}
    >
      <VictoryPieLazy
        innerRadius={() => 130}
        labelRadius={() => 50}
        padding={0}
        labels={() => null}
        style={{
          data: {
            fill: ({ datum }: any) => {
              switch (datum.x) {
                case 'totalTime':
                  return prepTimeColor
                case 'prepTime':
                  return prepTimeColor
                case 'cookTime':
                  return cookTimeColor
              }
            },
          }
        }}
        data={timingChartData}
      />

      <Text
        style={useMemo(() => ([
          {
            position: 'absolute',
            fontWeight: 'bold',
            fontSize: size / 3,
            color: theme.colors.text
          },
          labelStyle
        ]), [theme.colors.text, labelStyle])}
      >{timing.totalTime === Infinity ? '∞' : timing.totalTime}</Text>
    </RX.View>
  )
}

export default TimingPie
