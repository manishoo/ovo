/*
 * MealComponent.tsx
 * Copyright: Ouranos Studio 2019
 */

// import React from 'react'
import {Platform} from 'reactxp'
import RX from 'reactxp'
import theme from 'src/ts/app/Theme'
import {ActionSheetIOS} from 'react-native'
import {FoodUnit, Meal, RecipeUnit} from 'src/ts/models/FoodModels'
import {SwipeRow, SwipeListView} from 'react-native-swipe-list-view'
import {getLocalizedText} from 'common/LocalizedText'

interface MealComponentProps {
	style?: any,
	onAdd: () => any,
	meal: Meal,
}

interface MealItem {
	id: string,
	name: string,
	image: string,
	calories: number,
	recipeServing?: number,
	foodAmount?: any,
	type: string
}

interface MealComponentState {
	mealItems: MealItem[]
}

export default class MealComponent extends RX.Component<MealComponentProps, MealComponentState> {
	constructor(props: MealComponentProps) {
		super(props)

		const mealItems: MealItem[] = []

		props.meal.recipes.forEach((recipe: RecipeUnit) => {
			mealItems.push({
				id: recipe.recipe.id,
				name: recipe.recipe.title,
				image: recipe.recipe.coverImage.url,
				calories: recipe.calories,
				recipeServing: recipe.servings,
				type: 'recipe',
			})
		})
		props.meal.foods.forEach((food: FoodUnit) => {
			mealItems.push({
				id: food.food.id,
				name: food.food.name,
				image: food.food.image.url,
				calories: food.calories,
				foodAmount: {
					amount: food.amount,
					unit: food.unit,
				},
				type: 'recipe',
			})
		})

		this.state = {
			mealItems,
		}

		this.rowTranslateAnimatedValues = {}
		mealItems.forEach((item: MealItem) => {
			this.rowTranslateAnimatedValues[`${item.id}`] = RX.Animated.createValue(1)
		})
	}

	rowTranslateAnimatedValues: any
	animationIsRunning: boolean

	onSwipeValueChange = (swipeData: any) => {
		const {key, value} = swipeData
		// 375 or however large your screen is (i.e. Dimensions.get('window').width)
		if (value < -375 && !this.animationIsRunning) {
			this.animationIsRunning = true
			RX.Animated.timing(this.rowTranslateAnimatedValues[key], {toValue: 0, duration: 200}).start(() => {
				const newData = [...this.state.mealItems]
				const prevIndex = this.state.mealItems.findIndex(item => item.id === value.id)
				newData.splice(prevIndex, 1)
				this.setState({mealItems: newData})
				this.animationIsRunning = false
			})
		}
	}

	onEllipsisPress = () => {
		Platform.select({
			ios: ActionSheetIOS.showActionSheetWithOptions(
				{
					options: [
						getLocalizedText('cancel'),
						getLocalizedText('recurOn'),
						getLocalizedText('viewAlternatives'),
						getLocalizedText('editMealSettings'),
					],
					// destructiveButtonIndex: 1,
					cancelButtonIndex: 0,
				},
				(buttonIndex) => {
					if (buttonIndex === 1) { /* destructive action */
						//
					}
				}
			),
		})
	}

	renderMealItems = () => {
		const {meal} = this.props
		const {mealItems} = this.state

		if (meal.foods.length + meal.recipes.length >= 1) {
			return (
				<SwipeListView
					useFlatList
					data={mealItems}
					disableLeftSwipe={RX.International.isRTL()}
					disableRightSwipe={!RX.International.isRTL()}
					friction={10}
					renderItem={(data: { item: MealItem }) => (
						<RX.Animated.View
							style={[
								styles.mealItemVisibleItem,
								{
									height: this.rowTranslateAnimatedValues[data.item.id].interpolate({
										inputRange: [0, 1],
										outputRange: [0, 50],
									})
								}
							]}
						>
							<RX.View
								onPress={_ => console.log('You touched me')}
								activeOpacity={0.7}
								style={styles.mealItemFront}
								// underlayColor={'#AAA'}
							>
								<RX.Image
									source={data.item.image}
									style={styles.mealItemImage}
								/>
								<RX.View style={styles.mealItemTextContainer}>
									<RX.Text style={styles.mealItemTitle}>{data.item.name}</RX.Text>
									<RX.Text style={styles.mealItemSubtitle}>1 serving • 125 calories</RX.Text>
								</RX.View>
							</RX.View>
						</RX.Animated.View>
					)}
					renderHiddenItem={() => (
						<RX.View style={styles.mealItemHiddenItem}>
							<RX.Image
								source={require('../assets/garbage.png')}
								style={styles.garbage}
							/>
						</RX.View>
					)}
					rightOpenValue={-375}
					onSwipeValueChange={this.onSwipeValueChange}
				/>
			)
		}

		return (
			<RX.View
				style={styles.noMealItems}
			>
				<RX.Text
					style={styles.noMealItemsText}
				>
					No items
				</RX.Text>
			</RX.View>
		)
	}

	renderEllipsisButton = () => {
		return (
			<RX.View
				style={styles.ellipsisButton}
				onPress={this.onEllipsisPress}
			>
				<RX.View style={styles.ellipsisDot} />
				<RX.View style={styles.ellipsisDot} />
				<RX.View style={styles.ellipsisDot} />
			</RX.View>
		)
	}

	renderAddButton = () => {
		const { onAdd } = this.props

		return (
			<RX.View
				onPress={onAdd}
				style={styles.addButton}
			>
				<RX.Text style={styles.addButtonText}>+</RX.Text>
			</RX.View>
		)
	}

	renderHeading = () => {
		const { meal } = this.props

		return (
			<SwipeRow
				closeOnRowPress={false}
				leftOpenValue={false ? 30 : 0}
				disableLeftSwipe={!RX.International.isRTL()}
				disableRightSwipe={RX.International.isRTL()}
				// onRowDidOpen={() => alert('fuck')}
				// onRowOpen={() => alert('fuck')}
				// stopLeftSwipe={50}
			>
				<RX.View style={styles.headingBackContainer}>
					<RX.Image
						source={require('../assets/refresh.png')}
						style={styles.garbage}
					/>
				</RX.View>
				<RX.View style={styles.headingFrontContainer}>
					<RX.Text style={styles.name}>{meal.name}</RX.Text>
				</RX.View>
			</SwipeRow>
		)
	}

	render() {
		const {
			style,
		} = this.props

		return (
			<RX.View
				style={[styles.container, style]}
			>
				<RX.View
					style={styles.header}
				>
					{this.renderHeading()}
					{this.renderEllipsisButton()}
				</RX.View>
				<RX.View>
					{this.renderMealItems()}
				</RX.View>
				{this.renderAddButton()}
			</RX.View>
		)
	}
}

const styles = {
	name: RX.Styles.createTextStyle({
		fontSize: 20,
		color: theme.colors.inputLabel,
	}),
	container: RX.Styles.createViewStyle({
		flex: 1,
		borderWidth: 1,
		borderColor: '#eee',
		borderRadius: 20,
		marginBottom: 20,
		// margin: 10,
	}),
	ellipsisButton: RX.Styles.createViewStyle({
		flexDirection: 'column',
		justifyContent: 'space-between',
		width: 50,
		height: 50,
		alignItems: 'center',
		// backgroundColor: 'red',
		// paddingBottom: 12.5,
		padding: 13.5,
		position: 'absolute',
		top: 2,
		right: 0,
	}),
	ellipsisDot: RX.Styles.createViewStyle({
		backgroundColor: theme.colors.inputLabel,
		width: 5,
		height: 5,
		borderRadius: 2.5,
	}),
	buttonText: RX.Styles.createTextStyle({
		color: theme.colors.inputLabel,
	}),
	imageCover: RX.Styles.createImageStyle({
		flex: 1,
		height: 125,
		overflow: 'hidden',
		backgroundColor: 'red',
		justifyContent: 'center',
		alignItems: 'center'
	}),
	image: RX.Styles.createImageStyle({
		position: 'absolute',
		left: 0,
		top: 0,
		right: 0,
		bottom: 0,
	}),
	header: RX.Styles.createViewStyle({
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: 16,
	}),
	noMealItems: RX.Styles.createViewStyle({
		alignItems: 'center',
		justifyContent: 'center',
	}),
	noMealItemsText: RX.Styles.createTextStyle({
		color: theme.colors.subtitle,
	}),
	addButton: RX.Styles.createViewStyle({
		width: 50,
		height: 50,
		backgroundColor: '#eee',
		alignSelf: 'flex-end',
		justifyContent: 'center',
		alignItems: 'center',
		borderTopLeftRadius: 20,
	}),
	addButtonText: RX.Styles.createTextStyle({
		color: theme.colors.orange,
		fontSize: 30,
		fontWeight: '300',
	}),
	mealItemHiddenItem: RX.Styles.createViewStyle({
		height: 50,
		backgroundColor: theme.colors.red,
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'center',
		// justifyContent:
	}),
	mealItemVisibleItem: RX.Styles.createViewStyle({
		// height: 50,
		backgroundColor: '#fff',
		borderBottomWidth: 1,
		borderColor: '#eee'
	}),
	mealItemFront: RX.Styles.createViewStyle({
		height: 50,
		flexDirection: 'row',
	}),
	mealItemImage: RX.Styles.createViewStyle({
		height: 50,
		width: 50,
		// flexDirection: 'column',
	}),
	mealItemTextContainer: RX.Styles.createViewStyle({
		// height: 50,
		flexDirection: 'column',
		paddingTop: 5,
		paddingLeft: 5,
	}),
	mealItemTitle: RX.Styles.createTextStyle({
		textAlign: 'left'
		// flex: 1,
		// backgroundColor: 'red',
	}),
	mealItemSubtitle: RX.Styles.createTextStyle({
		textAlign: 'left',
		color: theme.colors.subtitle,
		// backgroundColor: 'blue',
	}),
	headingBackContainer: RX.Styles.createViewStyle({
		// marginTop: 3,
	}),
	headingFrontContainer: RX.Styles.createViewStyle({
		backgroundColor: '#fff',
		top: -3
	}),
	garbage: RX.Styles.createViewStyle({
		width: 20,
		height: 20,
		marginRight: 10,
	})
}
