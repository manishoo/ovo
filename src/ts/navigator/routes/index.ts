/*
 * index.ts
 * Copyright: Ouranos Studio 2019
 */

/**
 * Load modules synchronously in development,
 * and asynchronously in production
 * (change `./sync` to `./async` via webpack.NormalModuleReplacementPlugin).
 * */
import loadComponent from './sync'

/**
 * use the default export to load components dynamically
 * (component-level code splitting)
 * */
export default loadComponent

/**
 * use named exports to load routes dynamically
 * (route-level code splitting)
 * */
export const ShoppingList = loadComponent('ShoppingList')
export const LandingScreen = loadComponent('LandingScreen')
export const Login = loadComponent('Login')
export const LoginModal = loadComponent('Login', 'LoginModal')
export const Register = loadComponent('Register')
export const RegisterModal = loadComponent('Register', 'RegisterModal')
export const FeedScreen = loadComponent('FeedScreen')
export const ProfileScreen = loadComponent('ProfileScreen')
export const RecipeForm = loadComponent('RecipeForm')
export const RecipeFormContainer = loadComponent('RecipeForm', 'RecipeFormContainer')
export const Recipe = loadComponent('Recipe', 'RecipeContainer')
export const SettingsScreen = loadComponent('SettingsScreen')
export const PublicProfileScreen = loadComponent('PublicProfileScreen', 'PublicProfileScreenContainer')
export const MealPlanScreen = loadComponent('MealPlanScreen', 'MealPlanScreenContainer')
export const PathScreen = loadComponent('PathScreen')

export const SearchResult = loadComponent('SearchResult', 'SearchResultContainer')

export enum Routes {
	Home,
	mealDetails,
	food,
	selectDialog,
	mealPlan = '/meal-plan',
	settings = '/settings',
	recipe = '/recipe',
	recipeForm = '/create-recipe',
	home = '/',
	// profile = '/',
	feed = 'feed',
	login = 'login',
	register = 'join',
	shoppingList = 'shopping-list',
}