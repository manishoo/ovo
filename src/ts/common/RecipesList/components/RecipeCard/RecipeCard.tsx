/*
 * RecipeCard.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import AppConfig from '@App/AppConfig'
import Styles from '@App/Styles'
import { Theme } from '@App/Theme'
import { ThemeContext } from '@App/ThemeContext'
import Image from '@Common/Image/Image'
import Link from '@Common/Link/Link'
import { translate } from '@Common/LocalizedText/LocalizedText'
import Text from '@Common/Text/Text'
import { RecipeStatus } from '@Models/global-types'
import { IngredientRecipe } from '@Models/types/IngredientRecipe'
import ImageSource from '@Modules/images'
import { withNavigation } from '@Modules/navigator'
import { navigate } from '@Utils'
import RX from 'reactxp'
import { StyleRuleSetRecursive, ViewStyleRuleSet } from 'reactxp/src/common/Types'


const CLEAR_ICON_DIMENSION = 20

interface RecipeCellProps {
  wrapperStyle?: any,
  size: number,
  recipe: IngredientRecipe,
  serving?: number,
  onServingChange?: (serving: number) => void,
  hideAvatar?: boolean,
  onDelete?: () => void,
  imageOnly?: boolean,
  linkTo?: string
  style?: StyleRuleSetRecursive<ViewStyleRuleSet>,
}

interface RecipeCellState {
  isHovering?: boolean,
}

@withNavigation
export default class RecipeCard extends RX.Component<RecipeCellProps, RecipeCellState> {
  state = {
    isHovering: false,
  }
  private _overlayBackgroundOpacity = RX.Animated.createValue(0)
  private _overlayAnimatedStyle = RX.Styles.createAnimatedViewStyle({
    opacity: this._overlayBackgroundOpacity
  })
  private _previewScaleAnimatedValue = RX.Animated.createValue(1)
  private _previewAnimatedStyle = RX.Styles.createAnimatedViewStyle({
    transform: [{ scale: this._previewScaleAnimatedValue }]
  })
  private _animation: RX.Types.Animated.CompositeAnimation | null = null

  public render() {
    const { recipe } = this.props

    const content = (
      <ThemeContext.Consumer>
        {({ theme }) => (
          <RX.Animated.View
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
              this.props.style,
            ]}
          >
            <RX.View
              style={{
                width: this.props.size,
                height: this.props.size,
                // height: this.props.size * 1.3,
                borderRadius: this.props.size / 20,
                backgroundColor: this.state.isHovering ? theme.colors.recipeCardImagePlaceholderBGOnHover : theme.colors.recipeCardImagePlaceholderBG,
              }}
            >
              {
                recipe.thumbnail &&
                <RX.Animated.Image
                  source={recipe.thumbnail.url}
                  style={[styles.image, this._previewAnimatedStyle]}
                  resizeMode={'cover'}
                />
              }
              <RX.Animated.View
                style={[
                  styles.overlay,
                  this._overlayAnimatedStyle,
                ]}
              />
            </RX.View>

            {
              !this.props.imageOnly &&
              <Text
                onPress={() => navigate(this.props, `/recipe/${recipe.slug}/`)}
                style={[styles.title, { color: theme.colors.text }]}
                translations={recipe.title}
              />
            }

            {
              this.props.serving &&
              <RX.View style={{ flexDirection: 'row' }}>
                <RX.View
                  // onPress={this._onServingPress}
                  style={[styles.unitWrapper, {
                    // cursor: this.props.onServingChange ? 'pointer' : 'default',
                    backgroundColor: theme.colors.recipeIngredientUnitBG
                  }]}
                >
                  <Text style={[{
                    color: theme.colors.recipeIngredientUnitTextColor,
                    fontSize: Styles.fontSizes.size12
                  }]}>{this.props.serving} {translate('serving')}</Text>
                </RX.View>
              </RX.View>
            }

            {
              (
                (recipe.status === RecipeStatus.public) ||
                (recipe.status === RecipeStatus.review)
              ) &&
              <Image
                source={recipe.status === RecipeStatus.public ? ImageSource.VerifiedBadge : ImageSource.VerifyingBadge}
                style={styles.verifiedBadge}
                resizeMode={'cover'}
              />
            }

            {!this.props.imageOnly && this._renderLikes(theme)}
            {!this.props.imageOnly && this._renderTime(theme)}

            {/**
             * Delete button
             * */}
            {
              this.props.onDelete &&
              <RX.View
                style={styles.clearWrapper}
                onPress={this.props.onDelete}
              >
                <Image
                  source={ImageSource.Clear}
                  style={styles.clearIcon}
                />
              </RX.View>
            }

            {
              !this.props.hideAvatar &&
              <Link to={`/${recipe.author.username}`}>
                <RX.View
                  style={styles.avatarContainer}
                >
                  <Image
                    source={recipe.author.avatar!.url}
                    style={{
                      width: this.props.size / 5,
                      height: this.props.size / 5,
                      borderRadius: 100,
                      [Styles.values.marginEnd]: Styles.values.spacing / 2,
                    }}
                  />

                  <RX.View>
                    <Text style={{ fontWeight: '500' }}>{recipe.author.firstName} {recipe.author.lastName}</Text>
                    <Text style={{ color: theme.colors.text, fontWeight: '300' }}>Member</Text>
                  </RX.View>
                </RX.View>
              </Link>
            }
          </RX.Animated.View>
        )}
      </ThemeContext.Consumer>
    )

    return this.props.linkTo ?
      <Link to={this.props.linkTo}>{content}</Link> :
      content
  }

  // private _onServingPress = () => {
  //   showFoodPreviewModal({
  //     inputRef: () => null,
  //     onDismiss: () => null,
  //     mealItem: {
  //       name: [],
  //       description: null,
  //       customUnit: null,
  //       unit: null,
  //       item: this.props.recipe,
  //       amount: this.props.serving || 1,
  //       id: this.props.recipe.id,
  //       isOptional: null,
  //     },
  //     onSubmit: mealItem => this.props.onServingChange && this.props.onServingChange(mealItem.amount || 0),
  //     height: 400, // FIXME not a constant!
  //   })
  // }

  private _renderLikes = (theme: Theme) => {
    return null

    // let size = this.props.size / 4
    // if (size < 60) {
    //   size = 60
    // }
    //
    // return (
    //   <RX.View style={[styles.likesContainer, { top: (this.props.size) - (size - 10) }]}>
    //     <Text
    //       style={[styles.likeText, { color: theme.colors.recipeCardLikeText }]}>{this.props.recipe.likesCount}</Text>
    //     <LikeButton
    //       size={size}
    //       liked={this.props.recipe.userLikedRecipe || false}
    //       onChange={liked => {
    //
    //       }}
    //     />
    //
    //   </RX.View>
    // )
  }

  private _renderTime = (theme: Theme) => {
    return (
      <RX.View style={[styles.timingContainer, { top: ((this.props.size) - 30) }]}>
        <Text
          style={[styles.timingNumber, { color: theme.colors.recipeCardTimingNumberColor, }]}>{this.props.recipe.timing.totalTime}</Text>
        <Text translate style={[styles.timingUnit, { color: theme.colors.recipeCardTimingUnitColor }]}>min</Text>
      </RX.View>
    )
  }

  private _setUI = (isHovering: boolean) => {
    if (!this.props.recipe.thumbnail) {
      this.setState({
        isHovering,
      })
    }
    if (this._animation) {
      this._animation.stop()
    }
    this._animation = RX.Animated.parallel([
      RX.Animated.timing(this._previewScaleAnimatedValue, {
        toValue: isHovering ? 1.1 : 1,
        duration: 300,
      }),
      RX.Animated.timing(this._overlayBackgroundOpacity, {
        toValue: isHovering ? 0.5 : 0,
        duration: 300,
      })
    ])
    this._animation.start()
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
    // paddingBottom: Styles.values.spacing,
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
    fontWeight: '300',
  }),
  avatarImage: RX.Styles.createImageStyle({
    width: 50,
    height: 50,
    borderRadius: 25,
  }),
  avatarContainer: RX.Styles.createViewStyle({
    flexDirection: 'row',
    marginTop: Styles.values.spacing / 2,
    alignItems: 'center',
  }),
  likesContainer: RX.Styles.createViewStyle({
    position: 'absolute',
    [Styles.values.end]: -10,
    flexDirection: AppConfig.isRTL() ? 'row-reverse' : 'row',
    alignItems: 'center',
  }),
  likeText: RX.Styles.createTextStyle({
    fontWeight: '300',
    top: 2,
    [Styles.values.end]: -15,
    fontSize: Styles.fontSizes.size16,
  }),
  timingContainer: RX.Styles.createViewStyle({
    flexDirection: 'row',
    position: 'absolute',
    alignItems: 'flex-end',
    [Styles.values.start]: 16,
  }),
  timingUnit: RX.Styles.createTextStyle({
    fontWeight: '300',
  }),
  timingNumber: RX.Styles.createTextStyle({
    fontWeight: 'bold', // displayBold
    fontSize: Styles.fontSizes.size16,
    [Styles.values.marginEnd]: 3,
  }),

  clearIcon: RX.Styles.createImageStyle({
    width: CLEAR_ICON_DIMENSION,
    height: CLEAR_ICON_DIMENSION,
  }),
  clearWrapper: RX.Styles.createViewStyle({
    position: 'absolute',
    top: Styles.values.spacing / 2,
    [Styles.values.start]: Styles.values.spacing / 2,
    cursor: 'pointer',
  }),

  unitWrapper: RX.Styles.createViewStyle({
    padding: 5,
    paddingHorizontal: 8,
    flex: 0,
    flexDirection: 'row',
    borderRadius: 20,
    marginTop: 5,
  }),
  unitText: RX.Styles.createTextStyle({
    fontSize: Styles.fontSizes.size12,
    [Styles.values.marginStart]: Styles.values.spacing / 4,
  }),
  verifiedBadge: RX.Styles.createImageStyle({
    width: 15,
    height: 15,
    position: 'absolute',
    top: Styles.values.spacing / 2,
    [Styles.values.start]: Styles.values.spacing / 2,
  }),
  overlay: RX.Styles.createViewStyle({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: '#000',
  })
}
