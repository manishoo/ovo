/*
 * UserMeals.tsx
 * Copyright: Ouranos Studio 2019
 */

import Text from 'common/Text/Text'
import ImageSource from 'modules/images'
import SortableList from 'modules/SortableList'
import RX from 'reactxp'
import Styles from 'src/ts/app/Styles'
import { Theme } from 'src/ts/app/Theme'
import { ThemeContext } from 'src/ts/app/ThemeContext'
import Content from 'src/ts/locales/en'
import MealSettingsScreen from 'src/ts/views/MealSettingsScreen/MealSettingsScreen'
import { MealSettingsMeal } from 'src/ts/views/MealSettingsScreen/types/MealSettingsMeal'


interface UserMealsProps {
  style?: any,
  meals: MealSettingsMeal[],

}

interface UserMealsState {
  meals: MealSettingsMeal[]
}

export default class UserMeals extends RX.Component<UserMealsProps, UserMealsState> {
  constructor(props) {
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
              onItemsChange={(meals) => this.setState({ meals })}
            />
            {this._renderAddMealItem(theme)}
          </RX.View>
        )}
      </ThemeContext.Consumer>
    )
  }

  public getMeals = () => this.state.meals

  private _renderAddMealItem = (theme: Theme) => {
    return (
      <RX.View
        onPress={() => MealSettingsScreen.showModal({
          onSubmit: meal => {
            this.setState(({ meals }) => ({
              meals: [
                ...meals,
                meal,
              ]
            }))
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
          translate={Content.CreateUserMeal}
          style={{ color: theme.colors.userMealsMealItemBG }}
        />
      </RX.View>
    )
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
            <RX.View style={[styles.bar, { backgroundColor: theme.colors.bg }]} />
            <RX.View style={[styles.bar, { backgroundColor: theme.colors.bg }]} />
            <RX.View style={[styles.bar, { backgroundColor: theme.colors.bg }]} />
            <RX.View style={[styles.bar, { backgroundColor: theme.colors.bg }]} />
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
              onSubmit: meal => {
                this.setState(({ meals }) => ({
                  meals: meals.map(m => {
                    if (m.id == meal.id) {
                      return meal
                    }

                    return m
                  })
                }))
              }
            })}
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
            }))}
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
    }))
  }
}

const styles = {
  bar: RX.Styles.createViewStyle({
    width: 15,
    height: 1,
    marginBottom: 3,
  }),
  container: RX.Styles.createViewStyle({
    flex: 1,
  }),
  mealItemContainer: RX.Styles.createViewStyle({
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
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 8,
    padding: Styles.values.spacing / 2,
  })
}
