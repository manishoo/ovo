/*
 * ProfileScreen.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import { gql } from '@apollo/client'
import AppConfig from '@App/AppConfig'
import Styles from '@App/Styles'
import { Theme } from '@App/Theme'
import { ThemeContext } from '@App/ThemeContext'
import FilledButton from '@Common/FilledButton/FilledButton'
import { translate } from '@Common/LocalizedText/LocalizedText'
import Navbar from '@Common/Navbar/Navbar'
import Page from '@Common/Page'
import RecipesList from '@Common/RecipesList/RecipesList'
import Text from '@Common/Text/Text'
import { Routes } from '@Models/common'
import { Role } from '@Models/global-types'
import ImageSource from '@Modules/images'
import ResponsiveWidthStore from '@Services/ResponsiveWidthStore'
import { navigate } from '@Utils'
import authorized from '@Utils/authorized'
import MealsList from '@Views/ProfileScreen/components/MealsList/MealsList'
import useProfileTabsHOC, {
  PROFILE_MEALS_QUERY,
  PROFILE_RECIPES_QUERY,
  PROFILE_REVIEW_RECIPES_QUERY,
  ProfileTabsResult
} from '@Views/ProfileScreen/useProfileTabs.hook'
import RX from 'reactxp'
import { ComponentBase } from 'resub'
import Avatar from './components/Avatar'
import ProfileInfo from './components/ProfileInfo'
import { ProfileUser } from './types/ProfileUser'


export interface ProfileScreenProps extends RX.CommonProps {
  user: ProfileUser,
  isMyProfile?: boolean,
}

export type ProfileScreenInnerProps = ProfileScreenProps & ProfileTabsResult

interface ProfileState {
  height: number,
  width: number,
  activeTab: number,
}

export const fragments = {
  user: gql`
    fragment ProfileUser on BasicUser {
      id
      role
      ...ProfileInfoUser
    }

    ${ProfileInfo.fragments.user}
  `
}

export class ProfileScreen extends ComponentBase<ProfileScreenInnerProps & ProfileTabsResult, ProfileState> {
  static storageKeys = {
    activeTab: '_ProfileScreen_activeTab'
  }
  private _recipes: any
  private _recipesListHeight: number | null = null
  private _meals: any
  private _reviewRecipes: any
  private _mealsListHeight: number | null = null
  private _reviewRecipesHeight: number | null = null

  constructor(props: ProfileScreenInnerProps) {
    super(props)

    this.state = {
      activeTab: 0,
      width: ResponsiveWidthStore.getHeight(),
      height: ResponsiveWidthStore.getHeight(),
    }
  }

  componentWillMount() {
    if (this.props.isMyProfile) {
      this._loadStateFromStorage()
    }
  }

  public render() {
    const { user } = this.props

    return (
      <ThemeContext.Consumer>
        {({ theme }) => (
          <Page lazyRender
                scrollViewProps={{
              onScroll: this._onScroll,
            }}
          >
            {
              !this.props.isMyProfile &&
              <Navbar />
            }

            {
              (AppConfig.getPlatformType() !== 'web') &&
              <RX.View
                style={styles.avatarContainer}
              >
                <Avatar
                  source={''}
                  dimensions={75}
                  borderColor={theme.colors.primary}
                />
                {this.renderSettingsIcon()}
              </RX.View>
            }

            <ProfileInfo
              user={user}
              isMyProfile={this.props.isMyProfile}
            />

            <RX.View style={{ flexDirection: 'row', marginTop: Styles.values.spacing * 2 }}>
              <FilledButton
                label={translate('Recipes')}
                onPress={() => this.setState({ activeTab: 0 }, this.props.isMyProfile ? this._saveStateToStorage : undefined)}
                pressed={this.state.activeTab === 0}
                mode={this.state.activeTab === 0 ? FilledButton.mode.primary : FilledButton.mode.default}
                style={{
                  padding: 16
                }}
                fontSize={16}
                containerStyle={styles.tabButton}
              />
              {
                this.props.isMyProfile &&
                <FilledButton
                  label={translate('Meals')}
                  onPress={() => this.setState({ activeTab: 1 }, this.props.isMyProfile ? this._saveStateToStorage : undefined)}
                  pressed={this.state.activeTab === 1}
                  mode={this.state.activeTab === 1 ? FilledButton.mode.primary : FilledButton.mode.default}
                  style={{
                    padding: 16
                  }}
                  fontSize={16}
                  containerStyle={styles.tabButton}
                />
              }
              {
                authorized([Role.admin, Role.operator], user.role) &&
                <FilledButton
                  label={translate('Reviews')}
                  onPress={() => this.setState({ activeTab: 2 }, this.props.isMyProfile ? this._saveStateToStorage : undefined)}
                  pressed={this.state.activeTab === 2}
                  mode={this.state.activeTab === 2 ? FilledButton.mode.primary : FilledButton.mode.default}
                  style={{
                    padding: 16
                  }}
                  fontSize={16}
                  containerStyle={styles.tabButton}
                  suffix={this._renderReviewRecipesIndicator(theme)}
                />
              }
            </RX.View>

            <RX.View style={styles.innerContainer}>
              {
                this._renderTabContent()
              }
            </RX.View>
          </Page>
        )}
      </ThemeContext.Consumer>
    )
  }

  protected _buildState(props: RX.CommonProps, initialBuild: boolean): Partial<ProfileState> | undefined {
    return {
      width: ResponsiveWidthStore.getWidth(),
      height: ResponsiveWidthStore.getHeight(),
    }
  }

  private _renderReviewRecipesIndicator = (theme: Theme) => {
    const { reviewRecipes } = this.props

    if (reviewRecipes.data && reviewRecipes.data.recipes) {
      const recipesCount = reviewRecipes.data.recipes.recipes.length
      if (recipesCount === 0) return null

      return (
        <RX.View
          style={{
            borderRadius: 100,
            backgroundColor: theme.colors.reviewRecipesUnreadIndicatorBg,
            paddingRight: 5,
            paddingLeft: 5,
            [Styles.values.marginStart]: Styles.values.spacing / 2
          }}
        >
          <Text
            style={{
              color: theme.colors.reviewRecipesUnreadIndicatorText
            }}
          >{recipesCount}</Text>
        </RX.View>
      )
    }

    return null
  }

  private _renderTabContent = () => {
    const {
      meals,
      recipes,
      reviewRecipes,
    } = this.props

    switch (this.state.activeTab) {
      case 0:
        return (
          <RecipesList
            showAddRecipe={this.props.isMyProfile}
            hideAvatar={this.props.isMyProfile}
            recipes={recipes.data && recipes.data.recipes ? recipes.data.recipes.recipes : []}
            onLayout={e => this._onRecipesHeightChange(e.height)}
            loading={recipes.loading}
          />
        )
      case 1:
        return (
          <MealsList
            meals={meals.data && meals.data.meals ? meals.data.meals.meals : []}
            showAddMeal={this.props.isMyProfile}
            hideAvatar={this.props.isMyProfile}
            onLayout={e => this._onMealsHeightChange(e.height)}
            loading={meals.loading}
          />
        )
      case 2:
        return (
          <RecipesList
            recipes={reviewRecipes.data && reviewRecipes.data.recipes ? reviewRecipes.data.recipes.recipes : []}
            onLayout={e => this._onReviewRecipesHeightChange(e.height)}
            loading={reviewRecipes.loading}
          />
        )
      default:
        return null
    }
  }

  private _fetchMoreRecipes = () => {
    const { recipes: recipesQuery } = this.props
    if (!recipesQuery.data) return
    if (!recipesQuery.data.recipes.pagination.hasNext) return
    if (recipesQuery.loading) return

    return this.props.recipes.fetchMore({
      variables: {
        lastId: recipesQuery.data.recipes.pagination.lastId,
      },
      query: PROFILE_RECIPES_QUERY,
      updateQuery: (previousResult, { fetchMoreResult }) => {
        if (!fetchMoreResult) return previousResult

        return {
          ...previousResult,
          recipes: {
            recipes: [
              ...previousResult.recipes.recipes,
              ...fetchMoreResult.recipes.recipes,
            ],
            pagination: fetchMoreResult.recipes.pagination,
          }
        }
      }
    })
  }

  private _fetchMoreMeals = () => {
    const { meals: mealsQuery } = this.props
    if (!mealsQuery.data) return
    if (!mealsQuery.data.meals.pagination.hasNext) return
    if (mealsQuery.loading) return

    return this.props.meals.fetchMore({
      variables: {
        lastId: mealsQuery.data.meals.pagination.lastId,
      },
      query: PROFILE_MEALS_QUERY,
      updateQuery: (previousResult, { fetchMoreResult }) => {
        if (!fetchMoreResult) return previousResult

        return {
          ...previousResult,
          meals: {
            meals: [
              ...previousResult.meals.meals,
              ...fetchMoreResult.meals.meals,
            ],
            pagination: fetchMoreResult.meals.pagination,
          }
        }
      }
    })
  }

  private _fetchMoreReviewRecipes = () => {
    const { reviewRecipes: reviewRecipesQuery } = this.props
    if (!reviewRecipesQuery.data) return
    if (!reviewRecipesQuery.data.recipes.pagination.hasNext) return
    if (reviewRecipesQuery.loading) return

    return this.props.reviewRecipes.fetchMore({
      variables: {
        lastId: reviewRecipesQuery.data.recipes.pagination.lastId,
      },
      query: PROFILE_REVIEW_RECIPES_QUERY,
      updateQuery: (previousResult, { fetchMoreResult }) => {
        if (!fetchMoreResult) return previousResult

        return {
          ...previousResult,
          recipes: {
            recipes: [
              ...previousResult.recipes.recipes,
              ...fetchMoreResult.recipes.recipes,
            ],
            pagination: fetchMoreResult.recipes.pagination,
          }
        }
      }
    })
  }

  private _onRecipesHeightChange = (height: number) => {
    this._recipesListHeight = height
  }

  private _onMealsHeightChange = (height: number) => {
    this._mealsListHeight = height
  }

  private _onReviewRecipesHeightChange = (height: number) => {
    this._reviewRecipesHeight = height
  }

  private renderSettingsIcon = () => {
    return (
      <RX.View
        style={styles.imageContainerStyle}
        onPress={() => navigate(this.props, Routes.settings)}
      >
        <RX.Image
          source={ImageSource.SettingsIcon}
          style={styles.imageStyle}
        />
      </RX.View>
    )
  }

  private _onScroll = (newScrollValue: number) => {
    const { height, activeTab } = this.state

    const OFFSET = 100

    const bottomOfViewPoint = newScrollValue + height + OFFSET

    switch (activeTab) {
      case 2:
        if (this._reviewRecipesHeight && (bottomOfViewPoint >= this._reviewRecipesHeight)) {
          return this._fetchMoreReviewRecipes()
        }
        break
      case 1:
        if (this._mealsListHeight && (bottomOfViewPoint >= this._mealsListHeight)) {
          return this._fetchMoreMeals()
        }
        break
      case 0:
      default:
        if (this._recipesListHeight && (bottomOfViewPoint >= this._recipesListHeight)) {
          return this._fetchMoreRecipes()
        }
    }
  }

  private _saveStateToStorage = () => {
    const { activeTab } = this.state

    RX.Storage.setItem(ProfileScreen.storageKeys.activeTab, String(activeTab))
  }

  private _loadStateFromStorage = async () => {
    const activeTabStringified = await RX.Storage.getItem(ProfileScreen.storageKeys.activeTab)

    let activeTab

    if (activeTabStringified) {
      activeTab = Number(activeTabStringified)
    }

    if (activeTab) {
      this.setState({
        activeTab,
      })
    }
  }
}

export default useProfileTabsHOC(ProfileScreen)

const styles = {
  container: RX.Styles.createViewStyle({
    // FIXME width: fullWidth(),
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // padding: Styles.values.spacingLarge,
    backgroundColor: '#fff',
    // alignSelf: 'center',
  }),
  innerContainer: RX.Styles.createViewStyle({
    flex: 1,
    // alignItems: 'center',
    marginTop: Styles.values.spacing
  }),
  avatarContainer: RX.Styles.createViewStyle({
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  }),
  imageStyle: RX.Styles.createImageStyle({
    width: 34,
    height: 34,
  }, true),
  imageContainerStyle: RX.Styles.createImageStyle({
    position: 'absolute',
    top: 0,
    right: 0,
  }, true),
  title: RX.Styles.createTextStyle({
    fontSize: 50,
    // fontWeight: 'bold',
    fontWeight: 'bold',
    color: '#e7e7e7',
    marginBottom: Styles.values.spacing,
  }),
  tabButton: RX.Styles.createViewStyle({
    [Styles.values.marginEnd]: Styles.values.spacing,
  })
}
