/*
 * FoodModels.ts
 * Copyright: Ouranos Studio 2019
 */

import {
  SelectFoodQuery_foods_foods,
  SelectFoodQuery_foods_foods_weights
} from 'common/FoodDialog/types/SelectFoodQuery'
import { Translation } from 'src/ts/models/common'
import { RecipesListQuery_recipes_recipes } from 'src/ts/views/ProfileScreen/types/RecipesListQuery'
import { Me_height, Me_imageUrl, Me_weight } from 'src/ts/views/Register/types/Me'


export enum TAG_TYPE {
  cuisine = 'cuisine',
  meal = 'meal',
  diet = 'diet',
  recipe = 'recipe',
  ingredient = 'ingredient',
  occasion = 'occasion',
}

export enum WEIGHT_UNITS {
  kg = 'kg',
  pound = 'pound',
}

export enum HEIGHT_UNITS {
  cm = 'cm',
}

export enum GENDER {
  male = 'male',
  female = 'female',
}

export interface Weight {
  id: string
  amount: number
  gramWeight: number
  seq: number
  description: string
  unit?: string
}

export interface Nutrient {
  name: string
  amount: number
  tagname?: string
}

export interface Height {
  value: number
  unit: HEIGHT_UNITS
}

export interface NutritionalData {
  energyKcal?: number
  energyKj?: number
  carbohydrate?: number
  protein?: number
  fat?: number
  water?: number
  fiber?: number
  sugar?: number
  cholesterol?: number
}

export interface Food {
  id: string
  name: string
  description?: string
  fullDescription?: string
  foodGroup: { name: string, id: string }[]
  image?: Image
  thumbnail?: Image
  weights?: Weight[]
  nutrients?: NutritionalData
}

export interface WeightUnit {
  value: number
  unit: WEIGHT_UNITS
}

export enum EventTypes {
  Meal = 'meal',
  Exercise = 'exercise',
}

export interface Event {
  id: string
  relativeSize: number
  name: string
  datetime: string
  type: 'meal' | 'exercise'
  meal?: Meal
}

export interface User {
  id: string;
  username: string;
  session: string;
  email: string;
  firstName: string | null;
  middleName: string | null;
  lastName: string | null;
  imageUrl: Me_imageUrl | null;
  gender: string | null;
  bodyFat: number | null;
  age: number | null;
  weight: Me_weight | null;
  height: Me_height | null;
  caloriesPerDay: number | null;
}

export interface Eater {
  user: User
  amount?: number
  unit?: string
  proportionOfTotal?: string
}

export interface FoodUnit {
  food: Food
  eaters: Eater[]
}

export interface RecipeUnit {
  recipe: Recipe
  eaters: Eater[]
}

export interface DishItem {
  amount?: number
  food?: SelectFoodQuery_foods_foods
  recipe?: Recipe
  weight?: SelectFoodQuery_foods_foods_weights
  id?: string,
  customUnit?: string
  gramWeight?: number
  description?: Translation[]

  // DEPRECATED
  title?: string,
  type?: 'recipe' | 'food' | 'dish',
  unitDescription?: string,
  subtitle?: string,
  thumbnail?: Image,
  key?: any
  totalTime?: number
  weights?: Weight[]
  slug?: string
}

export interface Meal {
  name: string
  time: string
  datetime: string
  energyPercentageOfDay: number
  availableTime: number
  mealFor?: number
  cook: boolean
  items: DishItem[]
}

export interface Recipe extends RecipesListQuery_recipes_recipes {
}/*{
	id: string
	title: Translation[]
	// ingredientsRaw: string
	ingredients: Ingredient[]
	// instructionsRaw: string
	instructions: Instruction[]
  serving: number
	// notes?: string[]
	description?: Translation[]
	// courses?: string[]
	// cuisine?: string
	// calories?: number
	coverImage?: Image
	// images?: Image[]
	// dataVersion?: number
	// additionalData?: any
	slug: string
	author: User,
	// createdAt: Date,
	likesCount: number,
  userLikedRecipe: boolean,
	timing: {
		prepTime?: number,
		cookTime?: number,
		totalTime: number,
	},
	createdAt: any,
}*/

export interface Day {
  dayName: string
  meals: Meal[]
}

export interface MealPlan {
  id: string
  name: string
  days: Day[]
}

export interface Ingredient {
  key: any
  name?: string
  unit?: string
  amount: number
  thumbnail?: Image
  description?: string
  weight?: Weight
  foodId?: string
}

export interface Instruction {
  id: string
  text: string
  image?: Image
  step: number
}

export interface IngredientFood {
  foodId?: string
  name?: string
  image?: Image
  srcDb?: string
}

export interface Image {
  width?: number
  height?: number
  source?: string
  authorName?: string
  url: string
}

export enum FoodTypes {
  food = 'food',
  recipe = 'recipe',
}

export interface Tag {
  slug: string
  title?: string
  info?: string
  type: TAG_TYPE
}
