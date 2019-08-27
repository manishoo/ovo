/*
 * AddRecipeCell.tsx
 * Copyright: Ouranos Studio 2019
 */

import Text from 'common/Text/Text'
import ImageSource from 'modules/images'
import RX from 'reactxp'
import Styles from 'src/ts/app/Styles'
import { Routes } from 'src/ts/navigator/routes'
import { navigate, withNavigation } from 'src/ts/utilities'

interface AddRecipeCellProps {
	wrapperStyle?: any,
	// imageStyle?: any,
	size?: any,
}

@withNavigation
export default class AddRecipeCell extends RX.Component<AddRecipeCellProps> {
	render() {
		return (
			<RX.View
				style={[styles.container, this.props.wrapperStyle]}
				onPress={() => navigate(this.props, `${Routes.recipeForm}`)}
				activeOpacity={0.7}
			>
				<RX.View
					style={[
						styles.innerContainer,
						{
							width: this.props.size,
							height: this.props.size * 1.3,
							borderRadius: this.props.size / 12,
						},
					]}>
					<RX.Image
						source={ImageSource.PlusIcon}
						style={styles.imageStyle}
					/>
				</RX.View>
				<Text translate>CreateNewRecipe</Text>
			</RX.View>
		)
	}
}

const styles = {
	container: RX.Styles.createViewStyle({
		cursor: 'pointer',
		// alignItems: 'center',
	}),
	innerContainer: RX.Styles.createViewStyle({
		borderWidth: 1,
		borderColor: '#4a4a4a',
		borderStyle: 'dashed',
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: Styles.values.spacingLarge / 2,
	}),
	imageStyle: RX.Styles.createImageStyle({
		width: 25,
		height: 25,
	})
}
