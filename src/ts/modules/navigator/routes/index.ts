/*
 * index.ts
 * Copyright: Mehdi J. Shooshtari 2020
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
export const FindYourPlan = loadComponent('FindYourPlan')
export const PlanScreen = loadComponent('PlanScreen')

export const AboutScreen = loadComponent('AboutScreen')
export const CookiesScreen = loadComponent('CookiesScreen')
export const CorporationsScreen = loadComponent('CorporationsScreen')
export const FAQScreen = loadComponent('FAQScreen')
export const FitnessTrainersScreen = loadComponent('FitnessTrainersScreen')
export const HealthProfessionalsScreen = loadComponent('HealthProfessionalsScreen')
export const PrivacyScreen = loadComponent('PrivacyScreen')
export const RecipeDevelopersScreen = loadComponent('RecipeDevelopersScreen')
export const TeamScreen = loadComponent('TeamScreen')
export const TermsScreen = loadComponent('TermsScreen')

export const LoginScreen = loadComponent('Login', 'LoginScreen')
export const Register = loadComponent('Register', 'RegisterForm')
export const RegisterScreen = loadComponent('Register', 'RegisterScreen')
export const SetupScreen = loadComponent('AssistantChat', 'SetupScreen')
export const CalendarScreen = loadComponent('CalendarScreen')
export const NewPlanScreen = loadComponent('NewPlanScreen')
export const ProfileOr404 = loadComponent('ProfileScreen', 'ProfileOr404')
export const RecipeForm = loadComponent('RecipeForm')
export const RecipeScreen = loadComponent('RecipeScreen')

export const MealForm = loadComponent('MealForm')
export const FoodScreen = loadComponent('FoodScreen')

export const SettingsScreen = loadComponent('SettingsScreen')
export const MealPlanSettingsScreen = loadComponent('MealPlanSettingsScreen')

export const SearchResult = loadComponent('SearchResult', 'SearchResultContainer')
export const PayScreen = loadComponent('PayScreen')

export const ForgotPasswordScreen = loadComponent('ForgotPasswordScreen')
export const NewPasswordScreen = loadComponent('NewPasswordScreen')
