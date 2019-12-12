/*
 * calculate-nutrition.ts
 * Copyright: Ouranos Studio 2019
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

function getFoodNutrientAmount(food: any, foodAmount: number, nutrient: any, baseAmount: number, weightId?: string, customGramWeight?: number) {
  let totalAmount = baseAmount
  /**
   * If the food had a weight,
   * use the weight's {gramWeight}
   * */
  if (weightId) {
    const foundWeight = food.weights.find((w: any) => w.id == weightId)
    if (!foundWeight) throw new Error('Weight id not valid')
    totalAmount = (foundWeight.gramWeight || 0) * foodAmount
  } else if (customGramWeight) {
    totalAmount = customGramWeight * foodAmount
  } else {
    totalAmount = foodAmount
  }

  totalAmount += (nutrient.amount / 100) * totalAmount

  return Number(totalAmount.toFixed(2))
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
