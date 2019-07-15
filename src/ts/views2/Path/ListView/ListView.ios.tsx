/*
 * ListView.ios.tsx
 * Copyright: Ouranos Studio 2019
 */

// import React from 'react'
import RX from 'reactxp'
import {FlatList, StyleSheet} from 'react-native'
import {Event} from 'src/ts/models/FoodModels'
import moment from 'moment-timezone'
import theme from 'src/ts/app/Theme'
import {ListViewProps, ListViewState} from './types'
import {EVENT_CONTAINER_HEIGHT} from '../Event'

function findTheCenterEvent(items: Event[]): Event | undefined {
	let maxSize = 0
	let centerEvent: Event | undefined = undefined
	items.forEach((item: Event) => {
		if (item.relativeSize > maxSize) {
			maxSize = item.relativeSize
			centerEvent = item
		}
	})

	return centerEvent
}

export default class ListView extends RX.Component<ListViewProps, ListViewState> {
	_flatList: any

	constructor(props: ListViewProps) {
		super(props)

		this.state = {
			path: props.path,
			itemsRelativeSize: [],
		}
	}

	componentDidMount(): void {
		setTimeout(() => this.scrollToCurrentMeal(true), 500)
	}

	private _onScroll = (event: any) => {
		const LIST_ITEM_HEIGHT = EVENT_CONTAINER_HEIGHT
		const offsetFromBottom = event.nativeEvent.contentOffset.y
		const renderViewHeight = event.nativeEvent.layoutMeasurement.height
		const centerOfScreen = offsetFromBottom + (renderViewHeight / 2)
		const bottomOfScreen = offsetFromBottom
		const topOfScreen = offsetFromBottom + renderViewHeight

		const items = this.state.path.map((item: Event, index: number) => {
			const itemCenterLocation = ((index + 1) * LIST_ITEM_HEIGHT) - (LIST_ITEM_HEIGHT / 2)
			if ((itemCenterLocation < topOfScreen) && (itemCenterLocation > bottomOfScreen)) {
				const differenceToCenter = Math.abs(centerOfScreen - itemCenterLocation)
				let r = ((100 * differenceToCenter) / (renderViewHeight / 2)) / 100
				if (r < 0.2) {
					r = 0.2
				}

				item.relativeSize = 1 - r
			} else {
				item.relativeSize = 0
			}

			return item
		})

		let activeDateTime = String(new Date())

		const centerEvent = findTheCenterEvent(items)
		if (centerEvent) {
			activeDateTime = centerEvent.datetime
			// centerEvent.datetime
		}

		this.setState({
			itemsRelativeSize: items.map(i => i.relativeSize),
			centerEvent,
		})
		this.props.onDateTimeChange(activeDateTime)
		/* activeDateTime,centerEvent*/
	}

	scrollToCurrentMeal = (animated: boolean = false) => {
		const closestMeal = this.props.findClosestMeal()
		if (!closestMeal) return

		// console.log('W', this.state.items.findIndex((a: Event) => a.id === nextMeal.id))
		setTimeout(() => {
			// @ts-ignore
			this._flatList.scrollToIndex({index: closestMeal.nextMealIndex, animated, viewPosition: 0.5})
		}, 0)
	}

	renderGoToToday = () => {
		if (!this.state.centerEvent) return
		const closestMeal = this.props.findClosestMeal()
		if (!closestMeal) return null
		if (closestMeal.nextMeal === undefined) return null

		if (closestMeal.nextMeal.id === this.state.centerEvent.id) return null
		// const activeMealDay = moment(this.state.activeMeal.datetime).format('YYYY-MM-DD')

		if (moment(this.state.centerEvent.datetime).isAfter(moment())) {
			// current day was in the past
			return (
				<RX.View style={[styles.goToToday, {top: 32}]} onPress={() => this.scrollToCurrentMeal(true)}>
					<RX.Image
						source={require('../assets/Back.png')}
						style={{
							width: 25,
							height: 25,
							transform: [{rotate: '90deg'}],
							top: -2
						}}
					/>
				</RX.View>
			)
		} else {
			// current day is in the future
			return (
				<RX.View style={[styles.goToToday, {bottom: 100}]} onPress={() => this.scrollToCurrentMeal(true)}>
					<RX.Image
						source={require('../assets/Back.png')}
						style={{
							width: 25,
							height: 25,
							transform: [{rotate: '-90deg'}],
							bottom: -2
						}}
					/>
				</RX.View>
			)
		}
	}

	render() {
		return [
			<FlatList
				scrollsToTop={false}
				bounces={false}
				ref={(ref: any) => this._flatList = ref}
				data={this.state.path}
				renderItem={({item}: {item: Event}) => this.props.renderItem(item)}
				onScroll={this._onScroll}
				extraData={this.state.itemsRelativeSize}
				snapToInterval={EVENT_CONTAINER_HEIGHT}
				snapToAlignment={'center'}
				onScrollToIndexFailed={info => console.error(info)}
				getItemLayout={(_data, index) => ({
					index,
					offset: EVENT_CONTAINER_HEIGHT * index,
					length: EVENT_CONTAINER_HEIGHT,
				})}
			/>,
			this.renderGoToToday()
		]
	}
}

const styles = StyleSheet.create({
	goToToday: {
		position: 'absolute',
		width: 50,
		height: 50,
		// padding: 10,
		// backgroundColor: '#fff',
		borderRadius: 25,
		borderWidth: 2,
		borderColor: theme.colors.goToTodayBorder,
		alignSelf: 'center',
		justifyContent: 'center',
		alignItems: 'center',
	},
	// goToTodayText: {
	// 	color: 'red',
	// 	textAlign: 'center',
	// },
})
