/*
 * CalorieIndicator.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import Styles from '@App/Styles'
import { useTheme } from '@App/ThemeContext'
import { useEffect, useMemo, useState } from 'react'
import RX from 'reactxp'


const _styles = {
  container: RX.Styles.createViewStyle({
    justifyContent: 'flex-end',
    top: -1,
  }),
  bar: RX.Styles.createViewStyle({
    width: 8,
    height: 2,
    marginTop: 1,
    borderRadius: 10,
  }),
}

interface CalorieIndicatorProps {
  style?: any,
  calories: number,
}

const _getBars = (calories: number) => {
  let bars = {
    color: 'transparent',
    count: 0,
  }

  if (calories < 100) {
    bars = {
      count: 1,
      color: Styles.values.powerRange[1]
    }
  } else if (calories < 200) {
    bars = {
      count: 2,
      color: Styles.values.powerRange[2]
    }
  } else if (calories < 500) {
    bars = {
      count: 3,
      color: Styles.values.powerRange[3]
    }
  } else if (calories < 800) {
    bars = {
      count: 4,
      color: Styles.values.powerRange[4]
    }
  } else if (calories >= 800) {
    bars = {
      count: 5,
      color: Styles.values.powerRange[5]
    }
  }

  return bars
}

const CalorieIndicator = ({ style, calories }: CalorieIndicatorProps) => {
  const theme = useTheme()
  const [bars, setBars] = useState(_getBars(calories))

  useEffect(() => setBars(_getBars(calories)), [calories])

  const barArray = useMemo(() => new Array(5).fill(false).fill(true, 0, bars.count).reverse(), [bars.count])

  return (
    <RX.View
      style={[
        _styles.container,
        style,
      ]}
    >
      {
        barArray.map((bar, index) => <RX.View key={index}
                                              style={[_styles.bar, { backgroundColor: bar ? bars.color : theme.colors.textInputBg }]} />)
      }
    </RX.View>
  )
}

export default CalorieIndicator
