/*
 * MealItem.tsx
 * Copyright: Ouranos Studio 2019
 */

import TotalTime from 'common/TotalTime/TotalTime'
import RX from 'reactxp'
import { ThemeContext } from 'src/ts/app/ThemeContext'
import { MealItem as MealItemType } from 'src/ts/models/FoodModels'
import { navigate, renderImageOrPlaceholder, withNavigation } from 'src/ts/utilities'

interface MealItemProps {
	style?: any,
	mealItem: MealItemType,
}


@withNavigation
export default class MealItem extends RX.Component<MealItemProps> {
	onPress = () => {
		const type = this.props.mealItem.type
		// either food or recipe. Send to their corresponding routes
		navigate(this.props, `${type}/${this.props.mealItem.slug}`, {
			params: {
				[`${type}Id`]: this.props.mealItem.id,
			},
		})
	}

	render() {
		const { style } = this.props

		return (
			<ThemeContext.Consumer>
				{({ theme }) => (
					<RX.View
						onPress={this.onPress}
						activeOpacity={0.7}
						style={[styles.container, style]}
					>
						{renderImageOrPlaceholder(this.props.mealItem.thumbnail, styles.image)}
						<RX.View style={styles.textsContainer}>
							<RX.Text style={styles.title}>{this.props.mealItem.title}</RX.Text>
							<RX.Text
								style={[styles.subtitle, { color: theme.colors.mealItemSubtitle }]}>{this.props.mealItem.subtitle}</RX.Text>
							{!!this.props.mealItem.totalTime && <TotalTime totalTime={this.props.mealItem.totalTime} />}
						</RX.View>
					</RX.View>
				)}
			</ThemeContext.Consumer>
		)
	}
}


const styles = {
	container: RX.Styles.createViewStyle({
		padding: 20,
		flexDirection: 'row',
		alignItems: 'center',
		cursor: 'pointer',
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
	}),
	moreButton: RX.Styles.createViewStyle({
		position: 'absolute',
		right: 20,
	})
}
