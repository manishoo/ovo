/*
 * MealItem.tsx
 * Copyright: Ouranos Studio 2019
 */

// import React from 'react'
import RX from 'reactxp'
import {MealItem as MealItemType} from 'src/ts/models/FoodModels'
import theme from 'src/ts/app/Theme'
import {getImageUrl, navigate, withNavigation} from 'src/ts/utilities'
import TotalTime from 'common/TotalTime/TotalTime'

interface MealItemProps {
	style?: any,
	mealItem: MealItemType,
}


@withNavigation
export default class MealItem extends RX.Component<MealItemProps> {
	onPress = () => {
		const type = this.props.mealItem.type
		// either food or recipe. Send to their corresponding routes
		navigate(this.props, `${type}/:${type}Id`, {
			params: {
				[`${type}Id`]: this.props.mealItem.id,
			},
		})
	}

	render() {
		const {style} = this.props

		return (
			<RX.View
				onPress={this.onPress}
				activeOpacity={0.7}
				style={[styles.container, style]}
			>
				<RX.Image
					source={getImageUrl(this.props.mealItem.thumbnail)}
					style={styles.image}
				/>
				<RX.View style={styles.textsContainer}>
					<RX.Text style={styles.title}>{this.props.mealItem.title}</RX.Text>
					<RX.Text style={styles.subtitle}>{this.props.mealItem.subtitle}</RX.Text>
					{!!this.props.mealItem.totalTime && <TotalTime totalTime={this.props.mealItem.totalTime}/>}
				</RX.View>
				{/*<MoreButton onPress={() => {}} style={styles.moreButton} />*/}
			</RX.View>
		)
	}
}


const styles = {
	container: RX.Styles.createViewStyle({
		padding: 20,
		flexDirection: 'row',
		alignItems: 'center',
	}),
	textsContainer: RX.Styles.createViewStyle({
		marginLeft: 16,
	}),
	image: RX.Styles.createImageStyle({
		width: 50,
		height: 50,
		borderRadius: 25,
		backgroundColor: '#eee',
	}),
	title: RX.Styles.createTextStyle({
		fontWeight: '500',
	}),
	subtitle: RX.Styles.createTextStyle({
		fontWeight: '100',
		fontSize: 11,
		marginTop: 2,
		color: theme.colors.mealItemSubtitle
	}),
	moreButton: RX.Styles.createViewStyle({
		position: 'absolute',
		right: 20,
	})
}
