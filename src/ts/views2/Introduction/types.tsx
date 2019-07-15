/*
 * types.tsx
 * Copyright: Ouranos Studio 2019
 */

export class Item {
	text: string
}

export enum MessageType {
	text = 'text',
	number = 'number',
	email = 'email',
	password = 'password',
	select = 'select',
	form = 'form',
	food = 'food',
	weight = 'weight',
	height = 'height',
	mealPlanSettings = 'mealPlanSettings',
	mealPlan = 'mealPlan',
}

export enum EXPECTATIONS {
	gender = 'gender',
	nickname = 'nickname',
	age = 'age',
	weight = 'weight',
	height = 'height',
	activity = 'activity',
	goal = 'goal',
	meals = 'meals',
	register = 'register',
	allergy = 'allergy',
	dislikedFoods = 'dislikedFoods',
	diet = 'diet',
	chooseDiet = 'chooseDiet',
	meal = 'meal',
	normalRoutine = 'normalRoutine',
	introduction = 'introduction',
	mealPlan = 'mealPlan',
}

export interface Message {
	id: string
	sender: string
	text: string
	timestamp: string
	type: MessageType
	items?: Item[]
	expect?: EXPECTATIONS
	data?: any
}

export enum SENDERS {
	assistant = 'assistant',
	user = 'user',
}