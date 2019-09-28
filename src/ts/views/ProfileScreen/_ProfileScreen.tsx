/*
 * _ProfileScreen.tsx
 * Copyright: Ouranos Studio 2019
 */

import CenterAlignedPageView from 'common/CenterAlignedPageView'
import FilledButton from 'common/FilledButton/FilledButton'
import { getLocalizedText } from 'common/LocalizedText/LocalizedText'
import ImageSource from 'modules/images'
import RX from 'reactxp'
import { ComponentBase } from 'resub'
import AppConfig from 'src/ts/app/AppConfig'
import Styles from 'src/ts/app/Styles'
import { ThemeContext } from 'src/ts/app/ThemeContext'
import { Routes } from 'src/ts/models/common'
import ResponsiveWidthStore from 'src/ts/stores/ResponsiveWidthStore'
import UserStore from 'src/ts/stores/UserStore'
import { navigate } from 'src/ts/utilities'
import ProfileInfo from 'src/ts/views/ProfileScreen/components/ProfileInfo'
import ProfileMeals from 'src/ts/views/ProfileScreen/components/ProfileMeals/ProfileMeals'
import ProfileRecipes from 'src/ts/views/ProfileScreen/components/ProfileRecipes/ProfileRecipes'
import { RecipesListQuery_recipes_recipes } from 'src/ts/views/ProfileScreen/types/RecipesListQuery'
import { Me } from 'src/ts/views/Register/types/Me'
import Avatar from './components/Avatar'


interface ProfileState {
  height: number,
  width: number,
  recipes: RecipesListQuery_recipes_recipes[],
  me: Me,
  activeTab: number
}

export default class ProfileScreen extends ComponentBase<RX.CommonProps, ProfileState> {
  constructor(props: RX.CommonProps) {
    super(props)

    this.state = {
      activeTab: 0,
      me: UserStore.getUser(),
      width: ResponsiveWidthStore.getHeight(),
      height: ResponsiveWidthStore.getHeight(),
      recipes: [],
    }
  }

  public componentWillMount(): void {
    this._loadStateFromStorage()
  }

  protected _buildState(props: RX.CommonProps, initialBuild: boolean): Partial<ProfileState> | undefined {
    return {
      me: UserStore.getUser(),
      width: ResponsiveWidthStore.getWidth(),
      height: ResponsiveWidthStore.getHeight(),
      recipes: initialBuild ? [] : this.state.recipes,
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {({ theme }) => (
          <CenterAlignedPageView
            scrollViewProps={{
              onScroll: this._onScroll(this._handleOnReachEnd),
            }}
          >
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
              user={this.state.me}
            />

            <RX.View style={{ flexDirection: 'row', marginTop: Styles.values.spacing }}>
              <FilledButton
                label={getLocalizedText('Recipes')}
                onPress={() => this.setState({ activeTab: 0 }, this._saveStateToStorage)}
                mode={this.state.activeTab === 0 ? FilledButton.mode.primary : FilledButton.mode.default}
                containerStyle={styles.tabButton}
              />
              <FilledButton
                label={getLocalizedText('Meals')}
                onPress={() => this.setState({ activeTab: 1 }, this._saveStateToStorage)}
                mode={this.state.activeTab === 1 ? FilledButton.mode.primary : FilledButton.mode.default}
                containerStyle={styles.tabButton}
              />
              {/*<FilledButton
                label={getLocalizedText('Collections')}
                onPress={() => this.setState({ activeTab: 2 })}
                mode={this.state.activeTab === 2 ? FilledButton.mode.primary : FilledButton.mode.default}
                containerStyle={styles.tabButton}
              />*/}
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
    switch (this.state.activeTab) {
      case 0:
        return (
          <ProfileRecipes
            userId={''}
            ref={ref => this._recipes = ref}
            onHeightChange={this._onRecipesHeightChange}
          />
        )
      case 1:
        return (
          <ProfileMeals
            userId={''}
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

  // private _clearStateStorage = () => {
  //   RX.Storage.removeItem(ProfileScreen.storageKeys.activeTab)
  // }

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

  private _recipes: any
  private _recipesListHeight: number | undefined

  private _meals: any
  private _mealsListHeight: number | undefined

  static storageKeys = {
    activeTab: '_ProfileScreen_activeTab'
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
