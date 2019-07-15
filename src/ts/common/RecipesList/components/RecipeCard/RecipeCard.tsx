/*
 * RecipeCell.tsx
 * Copyright: Ouranos Studio 2019
 */

// import React from 'react'
import RX from 'reactxp'
import {Recipe} from 'src/ts/models/FoodModels'
import Text from 'common/Text'
import {navigate, withNavigation} from 'src/ts/utilities'
import theme from 'src/ts/app/Theme'
import Link from 'common/Link/Link'
import Image from 'common/Image/Image'
import LikeButton from 'common/LikeButton/LikeButton'
import AppConfig from 'src/ts/app/AppConfig'

// import Image from 'common/Image'

interface AddRecipeCellProps {
	wrapperStyle?: any,
	size: number,
	recipe: Recipe,
	hideAvatar?: boolean,
}


@withNavigation
export default class RecipeCard extends RX.Component<AddRecipeCellProps> {
	render() {
		const {recipe} = this.props
		return (
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
						borderRadius: this.props.size / 12,
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
				>{recipe.title}</Text>

				{
					!this.props.hideAvatar &&
          <Link to={`/${recipe.author.username}`} style={styles.avatarContainer}>
            <Image
              source={recipe.author.avatar.url}
              style={{
								width: this.props.size / 5,
								height: this.props.size / 5,
								borderRadius: this.props.size / 50,
							}}
            />
          </Link>
				}

				{this._renderLikes()}
				{this._renderTime()}
				{/*<Text>likesCount: {recipe.likesCount}</Text>*/}
				{/*<Text>likedByUser: {recipe.likedByUser}</Text>*/}
			</RX.View>
		)
	}

	private _renderLikes = () => {
		return // TODO

		let size = this.props.size / 4
		if (size < 60) {
			size = 60
		}

		return (
			<RX.View style={[styles.likesContainer, {top: (this.props.size * 1.3) - (size - 10)}]}>
				<LikeButton
					size={size}
					liked={this.props.recipe.likedByUser}
					onChange={liked => {

					}}
				/>
				<Text style={styles.likeText}>{this.props.recipe.likesCount}</Text>
			</RX.View>
		)
	}
	private _renderTime = () => {
		return (
			<RX.View style={[styles.timingContainer, {top: ((this.props.size * 1.3) - 30)}]}>
				<Text translate style={styles.timingUnit}>min</Text>
				<Text style={styles.timingNumber}>{this.props.recipe.timing.totalTime}</Text>
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

	private _previewScaleAnimatedValue = RX.Animated.createValue(1)
	private _previewAnimatedStyle = RX.Styles.createAnimatedViewStyle({
		transform: [{scale: this._previewScaleAnimatedValue}]
	})
}

const styles = {
	container: RX.Styles.createViewStyle({
		// backgroundColor: '#fff',
		// borderWidth: 1,
		// borderColor: '#eee',
		cursor: 'pointer',
		paddingBottom: theme.styles.spacing,
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
		marginTop: theme.styles.spacingLarge / 2,
		font: theme.fonts.displayBold,
		fontSize: theme.fontSizes.size16,
	}),
	avatarImage: RX.Styles.createImageStyle({
		width: 50,
		height: 50,
		borderRadius: 25,
	}),
	avatarContainer: RX.Styles.createViewStyle({
		position: 'absolute',
		top: 10,
		[theme.styles.end]: 10,
	}),
	likesContainer: RX.Styles.createViewStyle({
		position: 'absolute',
		[theme.styles.end]: -10,
		flexDirection: AppConfig.isRTL() ? 'row-reverse' : 'row',
		alignItems: 'center',
	}),
	likeText: RX.Styles.createTextStyle({
		font: theme.fonts.displayLight,
		color: theme.colors.recipeCardLikeText,
		top: 2,
		[theme.styles.end]: -15,
		fontSize: theme.fontSizes.size16,
	}),
	timingContainer: RX.Styles.createViewStyle({
		flexDirection: AppConfig.isRTL() ? 'row-reverse' : 'row',
		position: 'absolute',
		[theme.styles.start]: 16,
	}),
	timingUnit: RX.Styles.createTextStyle({
		color: theme.colors.recipeCardTimingUnitColor,
		font: theme.fonts.displayLight,
	}),
	timingNumber: RX.Styles.createTextStyle({
		color: theme.colors.recipeCardTimingNumberColor,
		font: theme.fonts.displayBold,
		fontSize: theme.fontSizes.size16,
		[theme.styles.marginEnd]: 5,
	}),
}
