/*
 * Food.tsx
 * Copyright: Ouranos Studio 2019
 */


import Navbar from 'common/Navbar/Navbar'
import RX from 'reactxp'
import { Food as FoodType } from 'src/ts/models/FoodModels'
import { getImageUrl } from 'src/ts/utilities'

interface FoodProps {
	style?: any,
	food: FoodType
}

export default class FoodScreen extends RX.Component<FoodProps> {
	render() {
		const food = this.props.food

		return (
			<RX.View
				style={[styles.container, this.props.style]}
			>
				<RX.Image
					source={getImageUrl(food.image)}
					resizeMode={'cover'}
					style={styles.coverImage}
				/>
				<RX.View style={styles.innerContainer}>
					<RX.Text style={styles.name}>{food.name}</RX.Text>
					<RX.Text style={styles.subtitle}>{food.description}</RX.Text>
				</RX.View>
				<Navbar />
			</RX.View>
		)
	}
}

const styles = {
	container: RX.Styles.createViewStyle({
		flex: 1,
	}),
	innerContainer: RX.Styles.createViewStyle({
		padding: 16,
	}),
	coverImage: RX.Styles.createImageStyle({
		height: 250,
	}),
	name: RX.Styles.createTextStyle({
		fontWeight: '500',
		fontSize: 25,
	}),
	subtitle: RX.Styles.createTextStyle({
		fontSize: 14,
		fontWeight: '200',
		color: '#9B9B9B',
		marginTop: 5,
	}),
}
