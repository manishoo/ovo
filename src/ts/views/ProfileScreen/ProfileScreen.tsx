/*
 * _ProfileScreen.tsx
 * Copyright: Ouranos Studio 2019
 */

import AppConfig from '@App/AppConfig'
import Styles from '@App/Styles'
import { ThemeContext } from '@App/ThemeContext'
import CenterAlignedPageView from '@Common/CenterAlignedPageView'
import FilledButton from '@Common/FilledButton/FilledButton'
import { translate } from '@Common/LocalizedText/LocalizedText'
import Navbar from '@Common/Navbar/Navbar'
import { Routes } from '@Models/common'
import { Role } from '@Models/global-types'
import ImageSource from '@Modules/images'
import ResponsiveWidthStore from '@Services/ResponsiveWidthStore'
import { navigate } from '@Utils'
import authorized from '@Utils/authorized'
import gql from 'graphql-tag'
import RX from 'reactxp'
import { ComponentBase } from 'resub'
import Avatar from './components/Avatar'
import ProfileInfo from './components/ProfileInfo'
import ProfileMeals from './components/ProfileMeals/ProfileMeals'
import ProfileRecipes from './components/ProfileRecipes/ProfileRecipes'
import { ProfileRecipesQuery_recipes_recipes } from './components/ProfileRecipes/types/ProfileRecipesQuery'
import ReviewRecipes from './components/ReviewRecipes/ReviewRecipes'
import { ProfileUser } from './types/ProfileUser'


interface ProfileScreenProps extends RX.CommonProps {
  user: ProfileUser,
  isMyProfile?: boolean,
}

interface ProfileState {
  height: number,
  width: number,
  recipes: ProfileRecipesQuery_recipes_recipes[],
  activeTab: number,
}

export default class ProfileScreen extends ComponentBase<ProfileScreenProps, ProfileState> {
  static storageKeys = {
    activeTab: '_ProfileScreen_activeTab'
  }
  static fragments = {
    user: gql`
      fragment ProfileUser on BasicUser {
        id
        role
        ...ProfileInfoUser
      }

      ${ProfileInfo.fragments.user}
    `
  }
  private _recipes: any
  private _recipesListHeight: number | undefined
  private _meals: any
  private _reviewRecipes: any
  private _mealsListHeight: number | undefined
  private _reviewRecipesHeight: number | undefined

  constructor(props: ProfileScreenProps) {
    super(props)

    this.state = {
      activeTab: 0,
      width: ResponsiveWidthStore.getHeight(),
      height: ResponsiveWidthStore.getHeight(),
      recipes: [],
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
          <CenterAlignedPageView
            scrollViewProps={{
              onScroll: this._onScroll(this._handleOnReachEnd),
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
                onPress={() => this.setState({ activeTab: 0 }, this.props.isMyProfile ? this._saveStateToStorage : null)}
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
                  onPress={() => this.setState({ activeTab: 1 }, this.props.isMyProfile ? this._saveStateToStorage : null)}
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
                  onPress={() => this.setState({ activeTab: 2 }, this.props.isMyProfile ? this._saveStateToStorage : null)}
                  mode={this.state.activeTab === 2 ? FilledButton.mode.primary : FilledButton.mode.default}
                  style={{
                    padding: 16
                  }}
                  fontSize={16}
                  containerStyle={styles.tabButton}
                />
              }
            </RX.View>

            <RX.View style={styles.innerContainer}>
              {
                this._renderTabContent()
              }
            </RX.View>
          </CenterAlignedPageView>
        )}
      </ThemeContext.Consumer>
    )
  }

  protected _buildState(props: RX.CommonProps, initialBuild: boolean): Partial<ProfileState> | undefined {
    return {
      width: ResponsiveWidthStore.getWidth(),
      height: ResponsiveWidthStore.getHeight(),
      recipes: initialBuild ? [] : this.state.recipes,
    }
  }

  private _renderTabContent = () => {
    const { user } = this.props

    switch (this.state.activeTab) {
      case 0:
        return (
          <ProfileRecipes
            showAddRecipe={this.props.isMyProfile}
            userId={user.id}
            ref={ref => this._recipes = ref}
            onHeightChange={this._onRecipesHeightChange}
          />
        )
      case 1:
        return (
          <ProfileMeals
            showAddMeal={this.props.isMyProfile}
            userId={user.id}
            ref={ref => this._meals = ref}
            onHeightChange={this._onMealsHeightChange}
          />
        )
      case 2:
        return (
          <ReviewRecipes
            userId={user.id}
            ref={ref => this._reviewRecipes = ref}
            onHeightChange={this._onReviewRecipesHeightChange}
          />
        )
      default:
        return null
    }
  }

  private _onRecipesHeightChange = (height: number) => {
    this._recipesListHeight = height

    if (height > this._recipesListHeight) {
      this._recipes.fetchMore()
    }
  }

  private _onMealsHeightChange = (height: number) => {
    this._mealsListHeight = height

    if (height > this._mealsListHeight) {
      this._meals.fetchMore()
    }
  }

  private _onReviewRecipesHeightChange = (height: number) => {
    this._reviewRecipesHeight = height

    if (height > this._reviewRecipesHeight) {
      this._reviewRecipes.fetchMore()
    }
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

  private _onScroll = (onReachEnd: () => void) => (newScrollValue: number) => {
    const { height, activeTab } = this.state

    const OFFSET = 100

    const bottomOfViewPoint = newScrollValue + height + OFFSET

    switch (activeTab) {
      case 2:
        if (bottomOfViewPoint >= this._reviewRecipesHeight) {
          onReachEnd()
        }
        break
      case 1:
        if (bottomOfViewPoint >= this._mealsListHeight) {
          onReachEnd()
        }
        break
      case 0:
      default:
        if (bottomOfViewPoint >= this._recipesListHeight) {
          onReachEnd()
        }
    }
  }

  private _handleOnReachEnd = () => {
    const { activeTab } = this.state

    switch (activeTab) {
      case 2:
        this._reviewRecipes.fetchMore()
        break
      case 1:
        this._meals.fetchMore()
        break
      case 0:
        this._recipes.fetchMore()
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
    marginRight: Styles.values.spacing,
  })
}
