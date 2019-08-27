/*
 * PathScreen.tsx
 * Copyright: Ouranos Studio 2019
 */

import ImageSource from 'modules/images'
import RX from 'reactxp'
import { ComponentBase } from 'resub'
import Styles from 'src/ts/app/Styles'
import { Event } from 'src/ts/models/FoodModels'
import { Routes } from 'src/ts/navigator/routes'
import ResponsiveWidthStore from 'src/ts/stores/ResponsiveWidthStore'
import UserStore from 'src/ts/stores/UserStore'
import { fullHeight, navigate } from 'src/ts/utilities'
import DateView from './DateView'
import EventComponent from './Event'
import ListView from './ListView/ListView'

interface PathState {
	activeMeal?: Event,
	path: Event[],
	activeDateTime: string,
	height?: number,
	pureWidth: number,
}

interface PathProps extends RX.CommonProps {
	style?: any,
}

export default class PathScreen extends ComponentBase<PathProps, PathState> {
	render() {
		return (
			<RX.View
				style={[
					styles.container,
					{
						height: this.state.height
					}
				]}
			>
				<RX.View style={styles.track} />
				{this._renderList()}
				<DateView date={this.state.activeDateTime} />
				{this._renderShoppingListIcon()}
			</RX.View>
		)
	}

	findClosestMeal = () => {
		let smallestDistance = 60 * 60 * 60 * 60 * 36000
		let nextMeal: Event | undefined
		let nextMealIndex: number | undefined
		this.state.path.forEach((item: Event, index) => {
			const d = new Date(item.datetime)
			const cd = new Date()
			if (d > cd) {
				const distance = d.getTime() - cd.getTime()
				if (distance < smallestDistance) {
					smallestDistance = distance
					nextMeal = item
					// nextMealIndex = index - 1
					nextMealIndex = index
				}
			}
		})
		if (nextMealIndex === undefined) return

		this.setState({ activeMeal: nextMeal })

		return {
			nextMeal: nextMeal,
			nextMealIndex: nextMealIndex,
		}
	}

	protected _buildState(_props: {}, _initialBuild: boolean): PathState {
		const user = UserStore.getUser()

		let pureWidth = ResponsiveWidthStore.getWidth()

		if (!ResponsiveWidthStore.isSmallOrTinyScreenSize()) {
			pureWidth = pureWidth - Styles.values.drawerWidth
		}

		if (_initialBuild) {
			return {
				path: user ? user.path : [],
				activeMeal: undefined,
				activeDateTime: String(new Date()),
				height: ResponsiveWidthStore.getHeight(), //FIXME optimize
				pureWidth: pureWidth
			}
		}

		return {
			...this.state,
			height: ResponsiveWidthStore.getHeight(),
			pureWidth: pureWidth
		}
	}

	private _renderItem = (item: Event) => {
		return (
			<EventComponent
				item={item}
				relativeSize={item.relativeSize}
				active={this.state.activeMeal ? (item.id === this.state.activeMeal.id) : false}
				containerWidth={this.state.pureWidth}
			/>
		)
	}

	private _renderList = () => {
		return (
			<ListView
				path={this.state.path}
				renderItem={this._renderItem}
				findClosestMeal={this.findClosestMeal}
				onDateTimeChange={(activeDateTime: any) => this.setState({ activeDateTime })} //FIXME
			/>
		)
	}

	private _renderShoppingListIcon = () => (
		<RX.View onPress={() => navigate(this.props, Routes.shoppingList)} style={styles.shoppingListIcon}>
			<RX.Image
				source={ImageSource.ShoppingList}
				style={styles.shoppingListImage}
			/>
		</RX.View>
	)
}

const styles = {
	container: RX.Styles.createViewStyle({
		flex: 1,
		backgroundColor: '#fff',
	}),
	track: RX.Styles.createViewStyle({
		width: 15,
		height: fullHeight(),
		position: 'absolute',
		top: 0,
		alignSelf: 'center',
		backgroundColor: '#F8F8F8',
	}),
	shoppingListIcon: RX.Styles.createViewStyle({
		position: 'absolute',
		top: Styles.values.spacing,
		right: 20,
		justifyContent: 'center',
		alignItems: 'center',
	}),
	shoppingListImage: RX.Styles.createImageStyle({
		width: 24,
		height: 30,
	}),
}
