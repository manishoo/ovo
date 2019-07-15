/*
 * Event.tsx
 * Copyright: Ouranos Studio 2019
 */

// import React from 'react'
import RX from 'reactxp'
import {fullHeight, navigate, renderImageOrPlaceholder, withNavigation} from 'src/ts/utilities'
import {Meal, Event, MealItem} from 'src/ts/models/FoodModels'
import theme from 'src/ts/app/Theme'
import moment from 'moment'
import {Routes} from 'src/ts/navigator/routes'


interface EventProps {
	style?: any,
	relativeSize: number,
	item: Event,
	active: boolean,
	containerWidth: number,
}

export const EVENT_CONTAINER_HEIGHT = fullHeight() / 2

@withNavigation
export default class EventComponent extends RX.Component<EventProps> {
	relativeSize: RX.Animated.Value = RX.Animated.createValue(1)

	shouldComponentUpdate(nextProps: Readonly<EventProps>): boolean {
		return (nextProps.relativeSize !== this.props.relativeSize) || (nextProps.containerWidth !== this.props.containerWidth)
	}

	componentWillReceiveProps(nextProps: Readonly<EventProps>): void {
		const toValue = 1 + (nextProps.relativeSize * 1.8)
		if (!toValue) return
		RX.Animated.timing(this.relativeSize, {
			duration: 50,
			toValue,
		}).start()
	}

	/*private renderMeal = (meal: Meal, relativeSize: number) => {
		const SIZE = 20
		let dimensions = 100 - (meal.foods.length * SIZE)
		return (
			<RX.View
				onPress={this.onEventPress}
				activeOpacity={1}
				style={[styles.meal, {transform: [{scale: 1 + (relativeSize * 1.8)}]}]}
			>
				{
					meal.foods.map((food: FoodUnit, index: number) => {
						let to = 12

						if (meal.foods.length === 1) {
							to = 8
						}
						if (meal.foods.length === 2) {
							to = 12
						}
						if (meal.foods.length >= 3) {
							to = 16
						}

						return (
							<RX.View
								style={{
									position: 'absolute',
									width: dimensions + (index * SIZE),
									height: dimensions + (index * SIZE),
									justifyContent: 'center',
									alignItems: 'center',
									top: (index * 8) * relativeSize,
								}}
							>
								{
									food.eaters.map((eater, i) => {
										const d = (dimensions + (index * SIZE)) - (i * (to / food.eaters.length))
										return (
											<RX.View
												style={{
													width: d,
													height: d,
													borderRadius: d / 2,
													position: 'absolute',
													backgroundColor: eater.user.color,
												}}
											/>
										)
									})
								}
								<RX.Image
									source={food.food.image ? food.food.image.url : ''}
									resizeMode={'cover'}
									style={{
										width: ((dimensions + (index * SIZE)) - to),
										height: ((dimensions + (index * SIZE)) - to),
										borderRadius: ((dimensions + (index * SIZE)) - to) / 2,
										// bottom: (index * 5) * relativeSize,
										position: 'absolute',
									}}
								/>
							</RX.View>
						)
					})
				}
				{
					false && meal.recipes.map((recipe: RecipeUnit, index: number) => (
						<RX.Image
							source={recipe.recipe.coverImage ? recipe.recipe.coverImage.url : ''}
							resizeMode={'cover'}
							style={{
								width: 80,
								height: 80,
								borderRadius: 40,
								bottom: (index * 5) * relativeSize,
								position: 'absolute',
							}}
						/>
					))
				}
			</RX.View>
		)
	}*/
	private renderMeal = (meal: Meal, relativeSize: RX.Animated.Value, borderWidth: number) => {
		const SIZE = 30
		const pureDimension = this.props.containerWidth / 4
		let dimensions = pureDimension - (meal.items.length * SIZE)

		return (
			<RX.Animated.View
				onPress={this.onEventPress}
				disableTouchOpacityAnimation={true}
				style={[styles.meal, {width: pureDimension, height: pureDimension}, {transform: [{scale: relativeSize}]}]}
			>
				{
					meal.items.map((mealItem: MealItem, index: number) => {
						return (
							<RX.Animated.View
								style={{
									position: 'absolute',
									width: dimensions + (index * SIZE),
									height: dimensions + (index * SIZE),
									justifyContent: 'center',
									alignItems: 'center',
									top: (index * 8) * this.props.relativeSize,
									// transform: [{translateY: (index * 10) * this.props.relativeSize}]
									// transform: [{scaleY: (index * 8) * this.props.relativeSize}]
								}}
							>
								{renderImageOrPlaceholder(mealItem.thumbnail, {
									width: ((dimensions + (index * SIZE))),
									height: ((dimensions + (index * SIZE))),
									borderRadius: ((dimensions + (index * SIZE))) / 2,
									// bottom: (index * 5) * relativeSize,
									backgroundColor: '#eee',
									borderWidth,
									borderColor: theme.colors.activeMealItemBorderColor,
									position: 'absolute',
								})}
							</RX.Animated.View>
						)
					})
				}
			</RX.Animated.View>
		)
	}

	/*private renderLine = (event: Event) => {
		if (event.type === EventTypes.Meal) {
			if (!event.meal) return
			// const eaters: any[] = []
			event.meal.items.forEach((mealItem: MealItem) => {
				recipe.eaters.forEach((eater: Eater) => {
					if (!eaters.find((a: any) => a.id === eater.user.id)) {
						eaters.push({id: eater.user.id, color: eater.user.color})
					}
				})
			})
			// event.meal.foods.forEach((food: FoodUnit) => {
			// 	food.eaters.forEach((eater: Eater) => {
			// 		if (!eaters.find((a: any) => a.id === eater.user.id)) {
			// 			eaters.push({id: eater.user.id, color: eater.user.color})
			// 		}
			// 	})
			// })

			const calculateLineHeight = () => {
				if (this.props.active) {
					return EVENT_CONTAINER_HEIGHT / 2
				}
				if (new Date() > new Date(event.date)) {
					return EVENT_CONTAINER_HEIGHT
				}
				if (new Date() < new Date(event.date)) {
					return 0
				}

				return 0
			}

			return (
				<RX.View
					style={[styles.line, {height: calculateLineHeight()}]}
				>
					{
						eaters.map((eater: any) => (
							<RX.View
								style={[
									{
										backgroundColor: eater.color,
										flex: 1,
									}
								]}
							/>
						))
					}
				</RX.View>
			)
		}

		return null
	}*/
	// private renderLine = (event: Event) => {
	// 	console.log('TYPE:', event)
	// 	if (event.type === EventTypes.Meal) {
	// 		const calculateLineHeight = () => {
	// 			if (this.props.active) {
	// 				return EVENT_CONTAINER_HEIGHT / 2
	// 			}
	// 			if (new Date() > new Date(event.datetime)) {
	// 				return EVENT_CONTAINER_HEIGHT
	// 			}
	// 			if (new Date() < new Date(event.datetime)) {
	// 				return 0
	// 			}
	//
	// 			return 0
	// 		}
	//
	// 		return (
	// 			<RX.View
	// 				style={[styles.line, {height: calculateLineHeight()}]}
	// 			>
	// 				<RX.View
	// 					style={[
	// 						{
	// 							backgroundColor: theme.colors.pathLine,
	// 							flex: 1,
	// 						}
	// 					]}
	// 				/>
	// 			</RX.View>
	// 		)
	// 	}
	//
	// 	return null
	// }

	private onEventPress = () => {
		navigate(this.props, Routes.mealDetails, {
			params: {
				meal: this.props.item.meal,
				datetime: this.props.item.datetime,
			}
		})
	}

	render() {
		const {style, item} = this.props
		let lineHeight: number = 0
		let borderWidth: number = 0
		if (this.props.active) {
			lineHeight = EVENT_CONTAINER_HEIGHT / 2
			borderWidth = 3
		}
		if (new Date() > new Date(item.datetime)) {
			lineHeight = EVENT_CONTAINER_HEIGHT
			borderWidth = 1
		}
		// if (new Date() < new Date(item.datetime)) {
		// 	lineHeight = 0
		// }

		// return 0

		return (
			<RX.View
				style={
					[
						styles.container,
						{width: this.props.containerWidth},
						style,
					]
				}
			>
				<RX.View
					style={[styles.line, {height: lineHeight}]}
				>
					<RX.View
						style={[
							{
								backgroundColor: theme.colors.pathLine,
								flex: 1,
							}
						]}
					/>
				</RX.View>
				{!!item.meal && this.renderMeal(item.meal, this.relativeSize, borderWidth)}
				<RX.View style={styles.mealTime}>
					<RX.Text style={styles.time}>{moment(item.datetime).format('HH:mm')}</RX.Text>
					<RX.Text style={styles.mealName}>{item.name}</RX.Text>
				</RX.View>
			</RX.View>
		)
	}
}

const styles = {
	container: RX.Styles.createViewStyle({
		height: EVENT_CONTAINER_HEIGHT,
		// backgroundColor: 'yellow',
		// marginTop: 100,
		// marginBottom: 100,
		// borderRadius: 100,
		justifyContent: 'center',
		alignItems: 'center',
	}),
	meal: RX.Styles.createViewStyle({
		top: 20,
		// width: 100,
		// height: 100,
		// backgroundColor: '#F23E3E',
		alignSelf: 'center',
		// marginTop: 100,
		// marginBottom: 100,
		// borderRadius: 100,
		justifyContent: 'center',
		alignItems: 'center'
	}),
	mealTime: RX.Styles.createViewStyle({
		position: 'absolute',
		right: 16,
	}),
	time: RX.Styles.createTextStyle({
		textAlign: 'right',
	}),
	mealName: RX.Styles.createTextStyle({
		textAlign: 'right',
		fontSize: 12,
		fontWeight: '100'
	}),
	line: RX.Styles.createViewStyle({
		position: 'absolute',
		top: 0,
		width: 10,
		flexDirection: 'row'
	}),
}
