// /*
//  * navigator.ios.tsx
//  * Copyright: Ouranos Studio 2019
//  */
//
// import {createSwitchNavigator, createStackNavigator} from 'react-navigation'
// import Introduction from 'src/views/Introduction/Introduction'
// // import MealPlanInput from 'src/views/Introduction/components/MealPlanInput/MealPlanInput'
// import Home from 'src/views/Home/Home'
// import MealDetails from 'src/views/MealDetails/MealDetails'
// import MealPlanContainer from 'src/views/MealPlan/MealPlanContainer'
// import RecipeContainer from 'src/views/Recipe/RecipeContainer'
// import FoodContainer from 'src/views/Food/FoodContainer'
// import AuthLoadingScreen from 'src/views/AuthLoadingScreen/AuthLoadingScreen'
// import Login from 'src/views/Login/Login'
// import Settings from 'src/views/Settings/Settings'
// import AssistantScreen from 'src/views/AssistantScreen/AssistantScreen'
// import ShoppingList from 'src/views/ShoppingList/ShoppingList'
// import RecipeForm from 'src/views/RecipeForm/RecipeForm'
// import {Routes} from 'src/navigator/routes'
// import SelectDialog from 'common/Select/components/SelectDialog'
//
// const CardStack = createStackNavigator(
// 	{
// 		home: {
// 			path: 'home',
// 			screen: Home,
// 		},
// 		settings: {
// 			path: 'settings',
// 			screen: Settings,
// 		},
// 		recipe: {
// 			path: 'recipe/:recipeId',
// 			screen: RecipeContainer,
// 		},
// 		food: {
// 			path: 'food/:foodId',
// 			screen: FoodContainer,
// 		},
// 		mealPlan: {
// 			path: 'mealPlan',
// 			screen: MealPlanContainer,
// 		},
// 		shoppingList: {
// 			path: 'shoppingList',
// 			screen: ShoppingList,
// 		},
// 		[Routes.recipeForm]: {
// 			path: 'recipeForm',
// 			screen: RecipeForm,
// 		},
// 		MealDetails,
// 		// MealPlanInput,
// 	},
// 	{
// 		// mode: 'modal',
// 		initialRouteName: Routes.recipeForm,
// 		headerMode: 'none',
// 		cardStyle: {
// 			backgroundColor: '#fff',
// 		},
// 		navigationOptions: {
// 			// gesturesEnabled: false,
// 		},
// 	}
// )
//
// const AppStack = createStackNavigator(
// 	{
// 		main: CardStack,
// 		mealPlan: {
// 			path: 'mealPlan',
// 			screen: MealPlanContainer,
// 		},
// 		assistant: {
// 			path: 'assistant',
// 			screen: AssistantScreen,
// 		},
// 		[Routes.selectDialog]: {
// 			path: 'selectDialog',
// 			screen: SelectDialog,
// 		},
// 	},
// 	{
// 		mode: 'modal',
// 		initialRouteName: 'main',
// 		headerMode: 'none',
// 		cardStyle: {
// 			backgroundColor: '#fff',
// 		},
// 		navigationOptions: {
// 			// gesturesEnabled: false,
// 		},
// 	}
// )
//
// const AuthStack = createStackNavigator(
// 	{
// 		introduction: {
// 			path: 'introduction',
// 			screen: Introduction,
// 		},
// 		login: {
// 			path: 'login',
// 			screen: Login,
// 		},
// 	},
// 	{
// 		initialRouteName: 'introduction',
// 		headerMode: 'none',
// 		cardStyle: {
// 			backgroundColor: '#fff',
// 		},
// 		navigationOptions: {
// 			// gesturesEnabled: false,
// 		},
// 	}
// )
//
// export default createSwitchNavigator(
// 	{
// 		AuthLoading: AuthLoadingScreen,
// 		App: AppStack,
// 		Auth: AuthStack,
// 	},
// 	{
// 		backBehavior: 'none',
// 		initialRouteName: 'AuthLoading',
// 	}
// )
