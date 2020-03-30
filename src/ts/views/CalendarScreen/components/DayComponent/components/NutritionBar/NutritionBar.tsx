/*
 * NutritionBar.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import Styles from '@App/Styles'
import { useTheme } from '@App/ThemeContext'
import { translate } from '@Common/LocalizedText/LocalizedText'
import NutritionPie from '@Common/NutritionInfo/components/NutritionPie/NutritionPie'
import NutritionInfo from '@Common/NutritionInfo/NutritionInfo'
import Text from '@Common/Text/Text'
import { Nutrition } from '@Models/types/Nutrition'
import { useCallback, useMemo, useState } from 'react'
import RX from 'reactxp'


const _styles = {
  container: RX.Styles.createViewStyle({
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: Styles.values.spacing / 2,
    cursor: 'pointer',
  }),
  innerContainer: RX.Styles.createViewStyle({
    flexDirection: 'row',
    padding: Styles.values.spacing / 2,
    alignItems: 'center',
  })
}

interface NutritionBarProps {
  style?: any,
  nutrition: Nutrition
}

const NutritionBar = ({ style, nutrition }: NutritionBarProps) => {
  const theme = useTheme()
  const [details, showDetails] = useState(false)

  const _containerStyle = useMemo(() => RX.Styles.createViewStyle({
    borderColor: theme.colors.borderLight,
  }, false), [])

  const _infoStyle = useMemo(() => RX.Styles.createViewStyle({
    width: 25,
    height: 25,
    borderRadius: 12.5,
    backgroundColor: '#ddd',
    position: 'absolute',
    [Styles.values.end]: Styles.values.spacing,
    alignItems: 'center',
    justifyContent: 'center',
  }, false), [])

  const _onPress = useCallback(() => showDetails(!details), [details])

  return (
    <RX.View
      style={[
        _styles.container,
        _containerStyle,
        style,
      ]}
    >
      <RX.View
        onPress={_onPress}
        activeOpacity={0.7}
        style={_styles.innerContainer}
      >
        <NutritionPie
          nutrition={nutrition}
          size={50}
          pieProps={{
            padding: Styles.values.spacing / 4,
          }}
        />

        {
          nutrition.calories &&
          <Text
            style={{
              [Styles.values.marginStart]: Styles.values.spacing / 2,
              fontWeight: '500',
              fontSize: 16
            }}
          >{Math.round(nutrition.calories.amount)} {nutrition.calories.unit}</Text>
        }

        <RX.View
          style={_infoStyle}
        >
          {/*<Arrow size={30} direction={'down'} color={'#eee'} />*/}
          <Text style={{ fontSize: 20, color: theme.colors.cardBg, fontWeight: 'bold' }}>i</Text>
        </RX.View>
      </RX.View>

      {
        details &&
        <NutritionInfo
          title={translate('Total Nutrition')}
          nutrition={nutrition}
          showPie={false}
        />
      }

    </RX.View>
  )
}

export default NutritionBar
