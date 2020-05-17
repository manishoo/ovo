/*
 * NutritionDetail.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import Styles from '@App/Styles'
import { useTheme } from '@App/ThemeContext'
import FlatButton from '@Common/FlatButton/FlatButton'
import Text from '@Common/Text/Text'
import { Nutrition } from '@Models/types/Nutrition'
import { useCallback, useMemo, useState } from 'react'
import RX from 'reactxp'


const NUTRIENTS: string[][] = [
  ['fiber', 'Fiber'],
  ['totalAvailableCarbs', 'Net Carbs'],
  ['sodium', 'Sodium'],
  ['cholesterol', 'Cholesterol'],
  ['potassium', 'Potassium'],

  ['label-Sugars', 'Sugars'],
  ['sugar', 'Sugar'],
  ['sucrose', 'Sucrose'],
  ['glucose', 'Glucose'],
  ['fructose', 'Fructose'],
  ['lactose', 'Lactose'],
  ['maltose', 'Maltose'],
  ['galactose', 'Galactose'],
  ['starch', 'Starch'],

  ['label-Fats', 'Fats'],
  ['saturatedFats', 'Saturated Fats'],
  ['monounsaturatedFats', 'Monounsaturated Fats'],
  ['polyunsaturatedFats', 'Polyunsaturated Fats'],
  ['transFats', 'Trans Fats'],

  ['label-Fatty acids', 'Fatty acids'],
  ['omega3', 'Omega3'],
  ['omega6', 'Omega6'],
  ['ALA', 'ALA'],
  ['DHA', 'DHA'],
  ['EPA', 'EPA'],
  ['DPA', 'DPA'],

  ['label-Vitamins', 'Vitamins'],
  ['caffeine', 'Caffeine'],
  ['theobromine', 'Theobromine'],
  ['calcium', 'Calcium'],
  ['choline', 'Choline'],
  ['copper', 'Copper'],
  ['fluoride', 'Fluoride'],
  ['folate', 'Folate'],
  ['iron', 'Iron'],
  ['lycopene', 'Lycopene'],
  ['magnesium', 'Magnesium'],
  ['manganese', 'Manganese'],
  ['niacin', 'Niacin'],
  ['phosphorus', 'Phosphorus'],
  ['retinol', 'Retinol'],
  ['riboflavin', 'Riboflavin'],
  ['selenium', 'Selenium'],
  ['thiamine', 'Thiamine'],
  ['alphaCarotene', 'Alpha-Carotene'],
  ['betaCarotene', 'Beta-Carotene'],
  ['pantothenicAcid', 'Pantothenic Acid'],
  ['vitA', 'Vitamin A'],
  ['vitAIU', 'Vitamin A, IU'],
  ['vitB6', 'Vitamin B6'],
  ['vitB12', 'Vitamin B12'],
  ['vitC', 'Vitamin C'],
  ['vitD', 'Vitamin D'],
  ['vitD2', 'Vitamin D2'],
  ['vitD3', 'Vitamin D3'],
  ['vitE', 'Vitamin E'],
  ['vitK', 'Vitamin K'],
  ['zinc', 'Zinc'],

  ['label-Amino Acids', 'Amino Acids'],
  ['tryptophan', 'Tryptophan'],
  ['threonine', 'Threonine'],
  ['isoleucine', 'Isoleucine'],
  ['leucine', 'Leucine'],
  ['lysine', 'Lysine'],
  ['methionine', 'Methionine'],
  ['cystine', 'Cystine'],
  ['phenylalanine', 'Phenylalanine'],
  ['tyrosine', 'Tyrosine'],
  ['valine', 'Valine'],
  ['methionine', 'Methionine'],
  ['arginine', 'Arginine'],
  ['histidine', 'Histidine'],
  ['alanine', 'Alanine'],
  ['asparticAcid', 'Aspartic Acid'],
  ['glutamicAcid', 'Glutamic Acid'],
  ['glycine', 'Glycine'],
  ['proline', 'Proline'],
  ['serine', 'Serine'],
  ['hydroxyproline', 'Hydroxyproline'],
]

const _styles = {
  container: RX.Styles.createViewStyle({
    height: 250,
    marginTop: Styles.values.spacing,
  }),
  nutrientName: RX.Styles.createTextStyle({
    fontWeight: '500',
  }),
  nutrientTitle: RX.Styles.createTextStyle({
    fontWeight: 'bold',
    marginVertical: Styles.values.spacing / 2,
  }),
  nutrient: RX.Styles.createTextStyle({
    fontSize: 12,
    fontWeight: '300',
  })
}

interface NutritionDetailProps {
  style?: any,
  nutrition: Nutrition,
}

const NutritionDetail = ({ style, nutrition }: NutritionDetailProps) => {
  const theme = useTheme()
  const [detailedNutritionVisible, showDetailedNutrition] = useState(false)
  const _toggleDetailedNutrition = useCallback(() => {
    showDetailedNutrition(!detailedNutritionVisible)
  }, [detailedNutritionVisible])

  const items = useMemo(() => NUTRIENTS.map(NUTR => {
    if (NUTR[0].includes('label-')) {
      return <Text style={_styles.nutrientTitle}>{NUTR[1]}</Text>
    } else {
      // @ts-ignore
      const nutrient = nutrition[NUTR[0]]

      if (!nutrient) return null
      return <Text style={_styles.nutrient}><Text translate
                                                  style={_styles.nutrientName}>{NUTR[1]}</Text>: {Math.round(nutrient.amount)}{nutrient.unit}
      </Text>
    }
  }), [JSON.stringify(nutrition)])

  const _labelStyle = useMemo(() => RX.Styles.createTextStyle({
    color: theme.colors.subtitle,
  }, false), [theme.colors.subtitle])

  return (
    <>
      <FlatButton
        label={'Show detailed nutrition'}
        onPress={_toggleDetailedNutrition}
        color={theme.colors.borderLight}
        labelStyle={_labelStyle}
      />

      {
        detailedNutritionVisible &&
        <RX.ScrollView
          style={[
            _styles.container,
            style,
          ]}
        >
          <RX.View>
            {items}
          </RX.View>
        </RX.ScrollView>
      }
    </>
  )
}

export default NutritionDetail
