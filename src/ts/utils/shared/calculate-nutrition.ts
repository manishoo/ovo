/*
 * calculate-nutrition.ts
 * Copyright: Mehdi J. Shooshtari 2020
 */

import trimTypeName from '@Utils/trim-type-name'


export function calculateNutrition(nutrition: any, totalNutrition: any) {
  /**
   * Iterate nutrition fields
   * */
  Object.keys(trimTypeName(nutrition)).map(fieldName => {
    const nutrient = nutrition[fieldName]!

    totalNutrition[fieldName] = {
      amount: Number((nutrient.amount + (totalNutrition[fieldName] ? totalNutrition[fieldName]!.amount : 0)).toFixed(2)),
      unit: nutrient.unit,
    }
  })
}

export function scaleFoodNutrition(food: any, foodAmount: number, weightId?: string, customGramWeight?: number): any {
  let totalNutrition: Partial<any> = {}

  /**
   * Iterate nutrition fields
   * */
  Object.keys(trimTypeName(food.nutrition)).map(fieldName => {
    const nutrient = food.nutrition[fieldName]!
    if (!nutrient) return

    totalNutrition[fieldName] = {
      amount: getFoodNutrientAmount(food, foodAmount, nutrient, totalNutrition[fieldName] ? totalNutrition[fieldName]!.amount : 0, weightId, customGramWeight),
      unit: nutrient.unit,
    }
  })

  return totalNutrition
}

function getFoodNutrientAmount(food: any, amount: number, nutrient: any, existingNutrientAmount: number, weightId?: string, customGramWeight?: number) {
  let totalGrams = 0

  /**
   * If the food had a weight,
   * use the weight's {gramWeight}
   * */
  if (weightId) {
    const foundWeight = food.weights.find((w: any) => w.id.toString() == weightId.toString())
    if (!foundWeight) throw new Error('Weight id not valid')
    if (!foundWeight.gramWeight) throw new Error('Found weight doesnt have gramWeight')

    totalGrams = foundWeight.gramWeight * amount
  } else if (customGramWeight) {
    totalGrams = customGramWeight * amount
  } else {
    totalGrams = amount
  }

  // 60g of protein
  const totalNutrientAmount =
    // 60g of sugar
    totalGrams *
    // 1g of protein in 100g
    (nutrient.amount / 100)

  return Number((totalNutrientAmount + existingNutrientAmount).toFixed(2))
}

export function scaleRecipeNutrition(recipe: any, serving: number): any {
  let totalNutrition: Partial<any> = {}

  /**
   * Iterate nutrition fields
   * */
  Object.keys(trimTypeName(recipe.nutrition)).map(fieldName => {
    const nutrient = recipe.nutrition[fieldName]!
    if (!nutrient) return

    totalNutrition[fieldName] = {
      amount: getRecipeNutrientAmount(nutrient, totalNutrition[fieldName] ? totalNutrition[fieldName]!.amount : 0, serving),
      unit: nutrient.unit,
    }
  })

  return totalNutrition
}

function getRecipeNutrientAmount(nutrient: any, baseAmount: number, serving: number) {
  let totalAmount = baseAmount

  totalAmount += (nutrient.amount * serving)

  return totalAmount
}
