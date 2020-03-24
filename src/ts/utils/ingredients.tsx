/*
 * ingredients.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import { Option } from '@Common/Select/Select'
import Text from '@Common/Text/Text'
import { BasicIngredient, BasicIngredient_item, BasicIngredient_item_Food } from '@Models/types/BasicIngredient'
import { determineIfIsWeight } from '@Views/CalendarScreen/components/MealItemComponent/MealItemComponent'
import RX from 'reactxp'


export const handleIngredientAmountChange = (ingredient: BasicIngredient, amount: number | null, selectedUnit: string, onIngredientChange: (ingredient: BasicIngredient) => void) => {
  ingredient.amount = amount

  if (ingredient.item) {
    if (determineIfIsFood(ingredient.item)) {
      switch (selectedUnit) {
        case 'g':
          ingredient.unit = null
          break
        case 'customUnit':
          ingredient.unit = ingredient.customUnit
          break
        default:
          const weight = ingredient.item.weights.find(p => p.id === selectedUnit)
          if (!weight) throw new Error('selectedUnit is unknown')

          ingredient.unit = weight
      }
    } else {
      switch (selectedUnit) {
        case 'serving':
        case 'g':
        default:
          ingredient.unit = null
          break
      }
    }
  }

  onIngredientChange(ingredient)
}

export const handleIngredientUnitChange = (ingredient: BasicIngredient, onIngredientChange: (ingredient: BasicIngredient) => void) => (selectedUnit: string) => {
  if (!ingredient.amount) return null

  let newAmount = ingredient.amount

  if (ingredient.item) {
    if (determineIfIsFood(ingredient.item)) {
      switch (selectedUnit) {
        case 'g':
          if (ingredient.unit && ingredient.unit.gramWeight) {
            newAmount = ingredient.amount * ingredient.unit.gramWeight
          }
          break
        case 'customUnit':
          if (ingredient.customUnit && ingredient.customUnit.gramWeight) {
            newAmount = (ingredient.amount * ingredient.customUnit.gramWeight) / (ingredient.unit && ingredient.unit.gramWeight ? ingredient.unit.gramWeight : 1)
          }
          break
        default:
          const weight = ingredient.item.weights.find(p => p.id === selectedUnit)
          if (!weight) throw new Error('selectedUnit is unknown')
          if (!weight.gramWeight) throw new Error('weight does not have gramWeight')

          newAmount = (ingredient.amount * ((ingredient.unit && ingredient.unit.gramWeight ? ingredient.unit.gramWeight : 1))) / weight.gramWeight
      }
    } else {
      switch (selectedUnit) {
        case 'serving':
        case 'g':
        default:
          break
      }
    }
  }

  handleIngredientAmountChange(ingredient, newAmount, selectedUnit, onIngredientChange)
}

export function determineIfIsFood(toBeDetermined: Partial<BasicIngredient_item>): toBeDetermined is BasicIngredient_item_Food {
  // @ts-ignore __typename
  return toBeDetermined.__typename === 'Food'
}

export function getIngredientCommonFields(ingredient: BasicIngredient) {
  if (ingredient.item) {
    if (determineIfIsFood(ingredient.item)) {
      return {
        ...ingredient,
        title: ingredient.item.name,
        thumbnail: ingredient.item.thumbnail,
        totalTime: 5,
        selectedUnit: ingredient.unit ? (determineIfIsWeight(ingredient.unit) ? ingredient.unit.id : 'customUnit') : 'g',
        units: ([
          ...ingredient.item.weights.map((weight: any) => ({
            text: <Text translations={weight.name} />, //FIXME
            value: weight.id,
          })),
          ingredient.customUnit ? {
            value: 'customUnit',
            text: <Text translations={ingredient.customUnit.name} />
          } : undefined,
          { value: 'g', text: <Text translate={'g'} /> }
        ] as Option[]).filter(Boolean),
      }
    } else {
      return {
        ...ingredient,
        title: ingredient.item.title,
        thumbnail: ingredient.item.thumbnail,
        selectedUnit: 'serving',
        units: ([
          { value: 'serving', text: <Text translate={'serving'} /> },
          ingredient.customUnit ? {
            value: 'customUnit',
            text: <Text translations={ingredient.customUnit.name} />
          } : undefined,
        ] as Option[]).filter(Boolean),
        totalTime: ingredient.item.timing.totalTime,
      }
    }
  } else {
    return {
      ...ingredient,
      title: ingredient.name,
      thumbnail: null,
      selectedUnit: 'g',
      units: ([
        { value: 'g', text: <Text translate={'grams'} /> },
        ingredient.customUnit ? {
          value: 'customUnit',
          text: <Text translations={ingredient.customUnit.name} />
        } : undefined,
      ] as Option[]),
      totalTime: null,
    }
  }
}
