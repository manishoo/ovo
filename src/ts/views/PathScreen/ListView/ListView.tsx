/*
 * ListView.tsx
 * Copyright: Ouranos Studio 2019
 */

import RX from 'reactxp'
import {VirtualListView} from 'reactxp-virtuallistview'
import {ListViewProps, ListViewState} from './types'
import moment from 'moment-timezone'
import theme from 'src/ts/app/Theme'
import {EVENT_CONTAINER_HEIGHT} from '../Event'

const _itemTemplate = 'event'
const _itemHeight = EVENT_CONTAINER_HEIGHT

export default class ListView extends RX.Component<ListViewProps, ListViewState> {
	constructor(props: ListViewProps) {
		super(props)

		console.log(JSON.stringify(props.path, null, 2))

		this.state = {
			path: props.path.map(e => ({
				key: e.id,
				template: _itemTemplate,
				height: _itemHeight,
				...e,
			})),
		}
	}

	render() {
		return (
			<VirtualListView
				// @ts-ignore
				itemList={this.state.path}
				onScroll={this._onScroll}
				renderItem={this._renderItem}
			/>
		)
	}

	private _renderItem = (details: any) => {
		return this.props.renderItem(details)
	}

	private _onScroll = (event: any) => {
		// const LIST_ITEM_HEIGHT = EVENT_CONTAINER_HEIGHT
		// const offsetFromBottom = event.nativeEvent.contentOffset.y
		// const renderViewHeight = event.nativeEvent.layoutMeasurement.height
		// const centerOfScreen = offsetFromBottom + (renderViewHeight / 2)
		// const bottomOfScreen = offsetFromBottom
		// const topOfScreen = offsetFromBottom + renderViewHeight
		//
		// const items = this.state.path.map((item: Event, index: number) => {
		// 	const itemCenterLocation = ((index + 1) * LIST_ITEM_HEIGHT) - (LIST_ITEM_HEIGHT / 2)
		// 	if ((itemCenterLocation < topOfScreen) && (itemCenterLocation > bottomOfScreen)) {
		// 		const differenceToCenter = Math.abs(centerOfScreen - itemCenterLocation)
		// 		let r = ((100 * differenceToCenter) / (renderViewHeight / 2)) / 100
		// 		if (r < 0.2) {
		// 			r = 0.2
		// 		}
		//
		// 		item.relativeSize = 1 - r
		// 	} else {
		// 		item.relativeSize = 0
		// 	}
		//
		// 	return item
		// })
		//
		// let activeDateTime = String(new Date())
		//
		// const centerEvent = findTheCenterEvent(items)
		// if (centerEvent) {
		// 	activeDateTime = centerEvent.datetime
		// 	// centerEvent.datetime
		// }
		//
		// this.setState({
		// 	itemsRelativeSize: items.map(i => i.relativeSize),
		// 	centerEvent,
		// })
		// this.props.onDateTimeChange(activeDateTime)
		// /* activeDateTime,centerEvent*/
	}


	componentDidMount(): void {
		setTimeout(() => this._scrollToCurrentMeal(true), 500)
	}

	private _scrollToCurrentMeal = (animated: boolean = false) => {
		const closestMeal = this.props.findClosestMeal()
		if (!closestMeal) return

		setTimeout(() => {
			// this._listView.scrollToIndex({index: closestMeal.nextMealIndex, animated, viewPosition: 0.5})
			if (this._listView) {
				this._listView.scrollToTop(true, 0)
			}
		}, 0)
	}

	// @ts-ignore
	private _renderGoToToday = () => {
		if (!this.state.centerEvent) return
		const closestMeal = this.props.findClosestMeal()
		if (!closestMeal) return null
		if (closestMeal.nextMeal === undefined) return null

		if (closestMeal.nextMeal.id === this.state.centerEvent.id) return null
		// const activeMealDay = moment(this.state.activeMeal.datetime).format('YYYY-MM-DD')

		if (moment(this.state.centerEvent.datetime).isAfter(moment())) {
			// current day was in the past
			return (
				<RX.View style={[styles.goToToday, {top: 32}]} onPress={() => this._scrollToCurrentMeal(true)}>
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
				<RX.View style={[styles.goToToday, {bottom: 100}]} onPress={() => this._scrollToCurrentMeal(true)}>
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

	private _listView: any
}

const styles = {
	goToToday: RX.Styles.createViewStyle({
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
	}),
}
