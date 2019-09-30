/*
 * _ProfileScreen.tsx
 * Copyright: Ouranos Studio 2019
 */

import CenterAlignedPageView from 'common/CenterAlignedPageView'
import FilledButton from 'common/FilledButton/FilledButton'
import { getLocalizedText } from 'common/LocalizedText/LocalizedText'
import Navbar from 'common/Navbar/Navbar'
import gql from 'graphql-tag'
import ImageSource from 'modules/images'
import RX from 'reactxp'
import { ComponentBase } from 'resub'
import AppConfig from 'src/ts/app/AppConfig'
import Styles from 'src/ts/app/Styles'
import { ThemeContext } from 'src/ts/app/ThemeContext'
import { Routes } from 'src/ts/models/common'
import ResponsiveWidthStore from 'src/ts/stores/ResponsiveWidthStore'
import { navigate } from 'src/ts/utilities'
import { ProfileInfoUser } from 'src/ts/views/ProfileScreen/components/types/ProfileInfoUser'
import Avatar from './components/Avatar'
import ProfileInfo from './components/ProfileInfo'
import ProfileMeals from './components/ProfileMeals/ProfileMeals'
import ProfileRecipes from './components/ProfileRecipes/ProfileRecipes'
import { RecipesListQuery_recipes_recipes } from './types/RecipesListQuery'


interface ProfileScreenProps extends RX.CommonProps {
  user: ProfileInfoUser & { id: string },
  isMyProfile?: boolean,
}

interface ProfileState {
  height: number,
  width: number,
  recipes: RecipesListQuery_recipes_recipes[],
  activeTab: number,
}

export default class ProfileScreen extends ComponentBase<ProfileScreenProps, ProfileState> {
  constructor(props: ProfileScreenProps) {
    super(props)

    this.state = {
      activeTab: 0,
      width: ResponsiveWidthStore.getHeight(),
      height: ResponsiveWidthStore.getHeight(),
      recipes: [],
    }
  }

  protected _buildState(props: RX.CommonProps, initialBuild: boolean): Partial<ProfileState> | undefined {
    return {
      width: ResponsiveWidthStore.getWidth(),
      height: ResponsiveWidthStore.getHeight(),
      recipes: initialBuild ? [] : this.state.recipes,
    }
  }

  componentWillMount() {
    if (this.props.isMyProfile) {
      this._loadStateFromStorage()
    }
  }

  render() {
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
                label={getLocalizedText('Recipes')}
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
                  label={getLocalizedText('Meals')}
                  onPress={() => this.setState({ activeTab: 1 }, this.props.isMyProfile ? this._saveStateToStorage : null)}
                  mode={this.state.activeTab === 1 ? FilledButton.mode.primary : FilledButton.mode.default}
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

    const bottomOfViewPoint = newScrollValue + height

    switch (activeTab) {
      case 2:
      case 1:
        if ((bottomOfViewPoint + OFFSET) >= this._mealsListHeight) {
          onReachEnd()
        }
        break
      case 0:
      default:
        if ((bottomOfViewPoint + OFFSET) >= this._recipesListHeight) {
          onReachEnd()
        }
    }
  }

  private _handleOnReachEnd = () => {
    const { activeTab } = this.state

    switch (activeTab) {
      case 2:
      case 1:
        this._meals.fetchMore()
        break
      case 0:
      default:
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

  static storageKeys = {
    activeTab: '_ProfileScreen_activeTab'
  }

  static fragments = {
    user: gql`
      fragment ProfileUser on BaseUser {
        id
        ...ProfileInfoUser
      }

      ${ProfileInfo.fragments.user}
    `
  }

  private _recipes: any
  private _recipesListHeight: number | undefined

  private _meals: any
  private _mealsListHeight: number | undefined
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
