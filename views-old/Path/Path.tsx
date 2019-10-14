/*
 * Path.tsx
 * Copyright: Ouranos Studio 2019
 */

import React from 'react'
import RX from 'reactxp'
import { ComponentBase } from 'resub'
import theme from 'src/ts/app/Theme'
import { Event } from 'src/ts/models/FoodModels'
import { Routes } from '../../src/ts/navigator/routes'
import { UserStore } from '../../src/ts/stores'
import { fullHeight, fullWidth, navigate } from '../../src/ts/utilities'
import DateView from 'src/ts/views/Path/DateView'
import EventComponent from 'src/ts/views/Path/Event'
import ListView from 'src/ts/views/Path/ListView/ListView'

interface PathState {
	activeMeal?: Event,
	path: Event[],
	activeDateTime: string,
}

interface PathProps {
	style?: any,
}

export default class Path extends ComponentBase<React.Props<PathProps>, PathState> {
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

	render() {
		return (
			<RX.View
				style={styles.container}
			>
				<RX.View style={styles.track} />
				{this._renderList()}
				<DateView date={this.state.activeDateTime} />
				{this._renderShoppingListIcon()}
			</RX.View>
		)
	}

	protected _buildState(_props: {}, _initialBuild: boolean): PathState {
		const user = UserStore.getUser()

		if (_initialBuild) {
			return {
				path: user ? user.path : [],
				activeMeal: undefined,
				activeDateTime: String(new Date())
			}
		}

		return this.state
	}

	private _renderItem = (item: Event) => {
		return (
			<EventComponent
				item={item}
				relativeSize={item.relativeSize}
				active={this.state.activeMeal ? (item.id === this.state.activeMeal.id) : false}
			/>
		)
	}

	private _renderList = () => {
		return (
			<ListView
				path={this.state.path}
				renderItem={this._renderItem}
				findClosestMeal={this.findClosestMeal}
				onDateTimeChange={activeDateTime => this.setState({ activeDateTime })}
			/>
		)
	}

	private _renderShoppingListIcon = () => (
		<RX.View onPress={() => navigate(this.props, Routes.shoppingList)} style={styles.shoppingListIcon}>
			<RX.Image
				source={require('./assets/shoppinglist.png')}
				style={styles.shoppingListImage}
			/>
		</RX.View>
	)
}

const styles = {
	container: RX.Styles.createViewStyle({
		width: fullWidth(),
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
		top: theme.styles.spacing,
		right: 20,
		justifyContent: 'center',
		alignItems: 'center',
	}),
	shoppingListImage: RX.Styles.createImageStyle({
		width: 24,
		height: 30,
	}),
}
