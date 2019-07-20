/*
 * FoodModels.ts
 * Copyright: Ouranos Studio 2019
 */

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
	male = 'Male',
	female = 'Female',
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
	id: string,
	username: string,
	session: string,
	email: string,
	firstName: string,
	middleName: string,
	lastName: string,
	avatar: Image,
	caloriesPerDay: number,
	height: Height,
	weight: WeightUnit,
	age: number,
	bodyFat: number,
	gender: GENDER,
	path: Event[],
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

export interface MealItem {
	id?: string,
	title: string,
	type: 'recipe' | 'food' | 'dish',
	unitDescription?: string,
	customUnit?: string,
	subtitle?: string,
	thumbnail?: Image,
	key: any
	totalTime?: number
	weights: Weight[]
	slug: string
}


export interface Meal {
	name: string
	time: string
	datetime: string
	energyPercentageOfDay: number
	availableTime: number
	mealFor?: number
	cook: boolean
	items: MealItem[]
}


export interface Recipe {
	id: string
	title: string
	ingredientsRaw: string
	ingredients: Ingredient[]
	instructionsRaw: string
	instructions: Instruction[]
	yield: number
	notes?: string[]
	description?: string
	courses?: string[]
	cuisine?: string
	calories?: number
	coverImage?: Image
	images?: Image[]
	dataVersion?: number
	additionalData?: any
	slug: string
	author: User,
	createdAt: Date,
	likesCount: number,
	likedByUser: boolean,
	timing: {
		prepTime?: number,
		cookTime?: number,
		totalTime: number,
	},
}

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