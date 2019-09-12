/*
 * RecipeCard.tsx
 * Copyright: Ouranos Studio 2019
 */


import Image from 'common/Image/Image'
import LikeButton from 'common/LikeButton/LikeButton'
import Link from 'common/Link/Link'
import Text from 'common/Text/Text'
import RX from 'reactxp'
import AppConfig from 'src/ts/app/AppConfig'
import Styles from 'src/ts/app/Styles'
import { Theme } from 'src/ts/app/Theme'
import { ThemeContext } from 'src/ts/app/ThemeContext'
import { Recipe } from 'src/ts/models/FoodModels'
import { navigate, withNavigation } from 'src/ts/utilities'

// import Image from 'common/Image'

interface AddRecipeCellProps {
	wrapperStyle?: any,
	size: number,
	recipe: Recipe,
	hideAvatar?: boolean,
}


@withNavigation
export default class RecipeCard extends RX.Component<AddRecipeCellProps> {
	private _previewScaleAnimatedValue = RX.Animated.createValue(1)
	private _previewAnimatedStyle = RX.Styles.createAnimatedViewStyle({
		transform: [{ scale: this._previewScaleAnimatedValue }]
	})

	render() {
		const { recipe } = this.props
		return (
			<ThemeContext.Consumer>
				{({ theme }) => (
					<RX.View
						onMouseEnter={this._onHoverStart}
						onMouseLeave={this._onHoverEnd}
						style={[
							styles.container,
							this.props.wrapperStyle,
							{
								width: this.props.size,
								// height: this.props.size * 1.25,
								// borderRadius: this.props.size / 12,
							},
						]}
					>
						<RX.View
							onPress={() => navigate(this.props, `/recipe/${recipe.slug}/`)}
							style={{
								width: this.props.size,
								height: this.props.size * 1.3,
								borderRadius: this.props.size / 20,
								backgroundColor: theme.colors.recipeCardImagePlaceholderBG,
							}}
						>
							{
								recipe.coverImage &&
                <RX.Animated.Image
                  source={recipe.coverImage.url}
                  style={[styles.image, this._previewAnimatedStyle]}
                  resizeMode={'cover'}
                />
							}
						</RX.View>

						<Text
							onPress={() => navigate(this.props, `/recipe/${recipe.slug}/`)}
							style={styles.title}
							translations={recipe.title}
						/>

						{
							!this.props.hideAvatar &&
              <Link to={`/${recipe.author.username}`} style={styles.avatarContainer}>
                <Image
                  source={recipe.author.imageUrl!.url}
                  style={{
										width: this.props.size / 5,
										height: this.props.size / 5,
										borderRadius: 100,
									}}
                />
              </Link>
						}

						{this._renderLikes(theme)}
						{this._renderTime(theme)}
					</RX.View>
				)}
			</ThemeContext.Consumer>
		)
	}

	private _renderLikes = (theme: Theme) => {
		return null // TODO

		let size = this.props.size / 4
		if (size < 60) {
			size = 60
		}

		return (
			<RX.View style={[styles.likesContainer, { top: (this.props.size * 1.3) - (size - 10) }]}>
				<LikeButton
					size={size}
					liked={this.props.recipe.userLikedRecipe || false}
					onChange={liked => {

					}}
				/>
				<Text
					style={[styles.likeText, { color: theme.colors.recipeCardLikeText }]}>{this.props.recipe.likesCount}</Text>
			</RX.View>
		)
	}

	private _renderTime = (theme: Theme) => {
		return (
			<RX.View style={[styles.timingContainer, { top: ((this.props.size * 1.3) - 30) }]}>
				<Text style={[styles.timingNumber, { color: theme.colors.recipeCardTimingNumberColor, }]}>{this.props.recipe.timing.totalTime}</Text>
				<Text translate style={[styles.timingUnit, { color: theme.colors.recipeCardTimingUnitColor }]}>min</Text>
			</RX.View>
		)
	}

	private _setUI = (isHovering: boolean) => {
		RX.Animated.timing(this._previewScaleAnimatedValue, {
			toValue: isHovering ? 1.1 : 1,
			duration: 500,
		}).start()
	}

	private _onHoverStart = () => {
		this._setUI(true)
	}

	private _onHoverEnd = () => {
		this._setUI(false)
	}
}

const styles = {
	container: RX.Styles.createViewStyle({
		// backgroundColor: '#fff',
		// borderWidth: 1,
		// borderColor: '#eee',
		cursor: 'pointer',
		paddingBottom: Styles.values.spacing,
	}),
	innerContainer: RX.Styles.createViewStyle({
		// height: 200,
		// width: 100,
	}),
	image: RX.Styles.createImageStyle({
		position: 'absolute',
		left: 0,
		top: 0,
		right: 0,
		bottom: 0,
	}),
	title: RX.Styles.createTextStyle({
		marginTop: Styles.values.spacingLarge / 2,
		font: Styles.fonts.displayLight,
		color: 'inherit'
	}),
	avatarImage: RX.Styles.createImageStyle({
		width: 50,
		height: 50,
		borderRadius: 25,
	}),
	avatarContainer: RX.Styles.createViewStyle({
		position: 'absolute',
		top: 10,
		[Styles.values.end]: 10,
	}),
	likesContainer: RX.Styles.createViewStyle({
		position: 'absolute',
		[Styles.values.end]: -10,
		flexDirection: AppConfig.isRTL() ? 'row-reverse' : 'row',
		alignItems: 'center',
	}),
	likeText: RX.Styles.createTextStyle({
		font: Styles.fonts.displayLight,
		top: 2,
		[Styles.values.end]: -15,
		fontSize: Styles.fontSizes.size16,
	}),
	timingContainer: RX.Styles.createViewStyle({
		flexDirection: AppConfig.isRTL() ? 'row-reverse' : 'row',
		position: 'absolute',
		alignItems: 'flex-end',
		[Styles.values.start]: 16,
	}),
	timingUnit: RX.Styles.createTextStyle({
		font: Styles.fonts.displayLight,
	}),
	timingNumber: RX.Styles.createTextStyle({
		font: Styles.fonts.displayBold,
		fontSize: Styles.fontSizes.size16,
		[Styles.values.marginEnd]: 3,
	}),
}
