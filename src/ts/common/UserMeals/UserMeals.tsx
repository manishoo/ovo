/*
 * UserMeals.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import Styles from '@App/Styles'
import { Theme } from '@App/Theme'
import { ThemeContext } from '@App/ThemeContext'
import CalorieIndicator from '@Common/CalorieIndicator/CalorieIndicator'
import Text from '@Common/Text/Text'
import TimingPie from '@Common/TimingPie/TimingPie'
import EnLocale from '@Locales/en'
import { MealAvailableTime, MealSize } from '@Models/global-types'
import ImageSource from '@Modules/images'
import SortableList from '@Modules/SortableList'
import MealSettingsScreen from '@Views/MealSettingsScreen/MealSettingsScreen'
import { MealSettingsMeal } from '@Views/MealSettingsScreen/types/MealSettingsMeal'
import RX from 'reactxp'


interface UserMealsProps {
  style?: any,
  meals: MealSettingsMeal[],
  onMealsChange?: (meals: MealSettingsMeal[]) => void,
}

interface UserMealsState {
  meals: MealSettingsMeal[],
}

export default class UserMeals extends RX.Component<UserMealsProps, UserMealsState> {
  constructor(props: UserMealsProps) {
    super(props)

    this.state = {
      meals: props.meals
    }
  }

  render() {
    const { style } = this.props
    const { meals } = this.state

    return (
      <ThemeContext.Consumer>
        {({ theme }) => (
          <RX.View
            style={[styles.container, style]}
          >
            <SortableList
              items={meals}
              renderItem={this._renderMealItem(theme)}
              onItemsChange={(meals) => this.setState({ meals }, this._onMealsChange)}
            />
            {this._renderAddMealItem(theme)}
          </RX.View>
        )}
      </ThemeContext.Consumer>
    )
  }

  private _onMealsChange = () => {
    const { onMealsChange } = this.props

    onMealsChange && onMealsChange(this.state.meals)
  }

  public getMeals = () => this.state.meals

  private _renderAddMealItem = (theme: Theme) => {
    return (
      <RX.View
        onPress={() => MealSettingsScreen.showModal({
          theme,
          onSubmit: meal => {
            this.setState(({ meals }) => ({
              meals: [
                ...meals,
                meal,
              ]
            }), this._onMealsChange)
          }
        })}
        style={[
          styles.addMeal,
          {
            borderColor: theme.colors.userMealsMealItemBG,
          }
        ]}
      >
        <Text
          translate={EnLocale.CreateUserMeal}
          style={{ color: theme.colors.userMealsMealItemBG }}
        />
      </RX.View>
    )
  }

  private _getCalorieForMealSize = (mealSize: MealSize) => {
    switch (mealSize) {
      case MealSize.tiny:
        return 99
      case MealSize.small:
        return 199
      case MealSize.normal:
        return 499
      case MealSize.big:
        return 799
      case MealSize.huge:
        return 801
    }
  }

  private _getTimingForMealAvailableTime = (availableTime: MealAvailableTime) => {
    switch (availableTime) {
      case MealAvailableTime.noTime:
        return {
          prepTime: 5,
          cookTime: 55,
          totalTime: 5,
        }
      case MealAvailableTime.littleTime:
        return {
          prepTime: 15,
          cookTime: 45,
          totalTime: 15,
        }
      case MealAvailableTime.someTime:
        return {
          prepTime: 30,
          cookTime: 30,
          totalTime: 30,
        }
      case MealAvailableTime.moreTime:
        return {
          prepTime: 45,
          cookTime: 15,
          totalTime: 45,
        }
      case MealAvailableTime.lotsOfTime:
        return {
          prepTime: 60,
          cookTime: 0,
          totalTime: 60,
        }
      case MealAvailableTime.noLimit:
        return {
          prepTime: 0,
          cookTime: 1,
          totalTime: Infinity,
        }
    }
  }

  private _renderMealItem = (theme: Theme) => (meal: MealSettingsMeal) => {
    return (
      <RX.View
        key={meal.id}
        style={[
          styles.mealItemContainer,
          {
            backgroundColor: theme.colors.userMealsMealItemBG,
          }
        ]}
      >
        <RX.View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          {/**
           * The handler
           * */}
          <RX.View
            id='handler'
            style={{
              [Styles.values.marginEnd]: Styles.values.spacing,
              appRegion: 'drag'
            }}
          >
            <RX.View style={[styles.bar, { backgroundColor: theme.colors.cardBg }]} ignorePointerEvents />
            <RX.View style={[styles.bar, { backgroundColor: theme.colors.cardBg }]} ignorePointerEvents />
            <RX.View style={[styles.bar, { backgroundColor: theme.colors.cardBg }]} ignorePointerEvents />
            <RX.View style={[styles.bar, { backgroundColor: theme.colors.cardBg }]} ignorePointerEvents />
          </RX.View>

          {/**
           * Meal Name
           * */}
          <RX.TextInput
            value={meal.name}
            onChangeText={this._handleNameChange(meal)}
            style={[
              styles.input,
              {
                backgroundColor: theme.colors.userMealsInputBG,
                color: theme.colors.userMealsInputText,
              }
            ]}
          />

          <CalorieIndicator
            calories={this._getCalorieForMealSize(meal.size)}
            style={styles.timingPie}
          />
          <TimingPie
            size={30}
            timing={this._getTimingForMealAvailableTime(meal.availableTime)}
            // prepTimeColor='red'
            cookTimeColor={meal.availableTime === MealAvailableTime.noLimit ? 'rgba(255, 255, 255, 0.5)' : '#fff'}
            labelStyle={{
              color: theme.colors.textLight
            }}
          />
        </RX.View>

        <RX.View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >


          {/**
           * Settings icon
           * */}
          <RX.View
            onPress={() => MealSettingsScreen.showModal({
              meal,
              theme,
              onSubmit: meal => {
                this.setState(({ meals }) => ({
                  meals: meals.map(m => {
                    if (m.id == meal.id) {
                      return meal
                    }

                    return m
                  })
                }), this._onMealsChange)
              }
            })}
            style={{
              cursor: 'pointer',
            }}
          >
            <RX.Image
              source={ImageSource.Cog}
              style={{
                width: 20,
                height: 20,
              }}
            />
          </RX.View>

          {/**
           * Delete icon
           * */}
          <RX.View
            onPress={() => this.setState(({ meals }) => ({
              meals: meals.filter(p => p.id !== meal.id)
            }), this._onMealsChange)}
            style={{
              cursor: 'pointer',
            }}
          >
            <RX.Image
              source={ImageSource.Trash}
              style={{
                width: 20,
                height: 20,
                [Styles.values.marginStart]: Styles.values.spacing,
              }}
            />
          </RX.View>
        </RX.View>
      </RX.View>
    )
  }

  private _handleNameChange = (meal: MealSettingsMeal) => (newName: string) => {
    this.setState(prevState => ({
      meals: prevState.meals.map(m => {
        if (m.id === meal.id) {
          m.name = newName
          return m
        }

        return m
      })
    }), this._onMealsChange)
  }
}

const styles = {
  timingPie: RX.Styles.createViewStyle({
    [Styles.values.marginEnd]: Styles.values.spacing / 2,
    [Styles.values.marginStart]: Styles.values.spacing,
  }),
  bar: RX.Styles.createViewStyle({
    width: 15,
    height: 1,
    marginBottom: 3,
  }),
  container: RX.Styles.createViewStyle({
    // flex: 1,
  }),
  mealItemContainer: RX.Styles.createViewStyle({
    // @ts-ignore web
    cursor: 'grab',

    flexDirection: 'row',
    padding: Styles.values.spacing / 2,
    paddingHorizontal: Styles.values.spacing,
    borderRadius: 8,
    marginBottom: Styles.values.spacing / 2,
    justifyContent: 'space-between',
  }),
  input: RX.Styles.createTextInputStyle({
    borderRadius: 5,
    minWidth: 100,
    paddingHorizontal: 5,
  }),
  addMeal: RX.Styles.createViewStyle({
    cursor: 'pointer',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 8,
    padding: Styles.values.spacing / 2,
  })
}
