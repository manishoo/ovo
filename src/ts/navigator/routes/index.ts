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
// export const ShoppingList = loadComponent('ShoppingList')
export const LandingScreen = loadComponent('LandingScreen')
// export const Login = loadComponent('Login', 'LoginForm')
// export const LoginModal = loadComponent('Login', 'LoginModal')
export const LoginScreen = loadComponent('Login', 'LoginScreen')
export const Register = loadComponent('Register', 'RegisterForm')
export const RegisterScreen = loadComponent('Register', 'RegisterScreen')
// export const RegisterModal = loadComponent('Register', 'RegisterModal')
// export const FeedScreen = loadComponent('FeedScreen')
export const ProfileScreen = loadComponent('ProfileScreen', 'ProfileScreenContainer')
export const RecipeForm = loadComponent('RecipeForm')
export const Recipe = loadComponent('Recipe')

export const MealForm = loadComponent('MealForm')
export const FoodScreen = loadComponent('FoodScreen')

// export const RecipeFormContainer = loadComponent('RecipeForm', 'RecipeFormContainer')
export const SettingsScreen = loadComponent('SettingsScreen')
export const PublicProfileScreen = loadComponent('ProfileScreen', 'PublicProfileScreenContainer')
export const MealPlanScreen = loadComponent('MealPlanScreen', 'MealPlanScreenContainer')
export const PathScreen = loadComponent('PathScreen')

export const SearchResult = loadComponent('SearchResult', 'SearchResultContainer')
