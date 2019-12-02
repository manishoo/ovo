/*
 * FoodPickerMealItem.tsx
 * Copyright: Ouranos Studio 2019
 */

import { useMutation } from '@apollo/react-hooks'
import Styles from '@App/Styles'
import { ThemeContext } from '@App/ThemeContext'
import FoodPickerContainer from '@Common/FoodPickerDialog/FoodPicker'
import HoverView from '@Common/HoverView/HoverButton'
import InputNumber from '@Common/Input/InputNumber'
import MenuItem from '@Common/MenuItem/MenuItem'
import RecipeCard from '@Common/RecipesList/components/RecipeCard/RecipeCard'
import Select from '@Common/Select/Select'
import Text from '@Common/Text/Text'
import TotalTime from '@Common/TotalTime/TotalTime'
import { withNavigation } from '@Modules/navigator'
import CalendarService from '@Services/CalendarService'
import { renderImageOrPlaceholder } from '@Utils'
import ItemControl from '@Views/CalendarScreen/components/ItemControl'
import { DayMeal } from '@Views/CalendarScreen/components/types/DayMeal'
import { MealComponentLogMealMutation } from '@Views/CalendarScreen/components/types/MealComponentLogMealMutation'
import {
  MealItemComponentMutation,
  MealItemComponentMutationVariables
} from '@Views/CalendarScreen/components/types/MealItemComponentMutation'
import gql from 'graphql-tag'
import { ExecutionResult } from 'react-apollo'
import RX from 'reactxp'
import { MealItem } from './types/MealItem'


interface MealItemComponentCommonProps {
  style?: any,
  mealItem: MealItem,
  meal: DayMeal,
  dayId: string,
  onMealItemRemove: () => any,
  onMealItemChange: (mealItem: MealItem) => Promise<ExecutionResult<MealComponentLogMealMutation>>
}

interface MealItemComponentProps extends MealItemComponentCommonProps {
  onMealItemRegenerate: () => Promise<ExecutionResult<MealItemComponentMutation>>,
  mealItemRegenerating?: boolean,
}

// interface MealItemComponentState {
//   mealItem: MealItem,
// }

@withNavigation
class MealItemComponent extends RX.Component<MealItemComponentProps> {
  static fragments = {
    mealItem: gql`
      fragment MealItem on MealItem {
        id
        amount
        recipe {
          ...RecipeCardRecipe
        }
        food {
          ...FoodPickerFood
        }
        amount
        customUnit
        gramWeight
        description { text locale }
        weight {
          amount
          gramWeight
          id
          name { text locale }
        }
      }

      ${FoodPickerContainer.fragments.food}
      ${RecipeCard.fragments.recipe}
    `
  }
  static operations = {
    suggestMealItem: gql`
      mutation MealItemComponentMutation($userMealId: String!, $mealItemId: String!, $date: DateTime!) {
        suggestMealItem(userMealId: $userMealId, mealItemId: $mealItemId, date: $date) {
          ...MealItem
        }
      }

      ${MealItemComponent.fragments.mealItem}
    `
  }

  // constructor(props) {
  //   super(props)
  //
  //   this.state = {
  //     mealItem: props.mealItem,
  //   }
  // }

  _onPress = () => {
    // const type = this.props.mealItem.type
    // // either food or recipe. Send to their corresponding routes
    // LocationStore.navigate(this.props, `${type}/${this.props.mealItem.slug}`, {
    //   params: {
    //     [`${type}Id`]: this.props.mealItem.id,
    //   },
    // })
  }

  public render() {
    const { style, mealItemRegenerating } = this.props

    const mealItem = this._getCommonMealItem()

    return (
      <ThemeContext.Consumer>
        {({ theme }) => (
          <RX.View
            style={{
              padding: Styles.values.spacing / 2,
            }}
          >
            <HoverView
              onRenderChild={isHovering => (
                <RX.View
                  key={mealItem.id}
                  onPress={this._onPress}
                  activeOpacity={0.7}
                  style={[styles.container, style, {
                    borderWidth: 1,
                    borderColor: isHovering ? theme.colors.mealItemBorder : 'transparent',
                    transition: 'all 0.3s'
                  }]}
                >
                  {renderImageOrPlaceholder(mealItem.thumbnail, styles.image)}
                  <RX.View style={styles.textsContainer}>
                    <RX.View
                      style={{
                        flexDirection: 'row',
                        marginBottom: Styles.values.spacing / 4
                      }}
                    >
                      <Text
                        translations={mealItem.title}
                        style={styles.title}
                      />
                      {!!mealItem.totalTime && <TotalTime totalTime={mealItem.totalTime} />}
                    </RX.View>
                    <RX.View
                      style={{
                        flexDirection: 'row',
                        [Styles.values.marginStart]: -Styles.values.spacing / 2,
                      }}
                    >
                      <InputNumber
                        value={mealItem.amount}
                        onChange={(value) => this._onMealItemAmountChange(value, mealItem.selectedUnit)}
                        textInputStyle={{
                          backgroundColor: isHovering ? theme.colors.textInputBg : 'transparent',
                          padding: Styles.values.spacing / 2,
                          [Styles.values.paddingEnd]: Styles.values.spacing / 4,
                          [Styles.values.borderTopEndRadius]: 0,
                          [Styles.values.borderBottomEndRadius]: 0,
                          width: (String(mealItem.amount).length * 10) + (Styles.values.spacing / 2) + (Styles.values.spacing / 4)
                        }}
                        style={{
                          marginBottom: 0,
                        }}
                      />
                      <Select
                        value={mealItem.selectedUnit}
                        options={mealItem.units}
                        onChange={value => this._onMealItemAmountChange(mealItem.amount, value)}
                        style={{
                          backgroundColor: isHovering ? theme.colors.textInputBg : 'transparent',
                          padding: Styles.values.spacing / 2,
                          [Styles.values.paddingStart]: 0,
                          [Styles.values.borderTopStartRadius]: 0,
                          [Styles.values.borderBottomStartRadius]: 0,
                          marginBottom: 0,
                        }}
                      />
                    </RX.View>
                  </RX.View>

                  <ItemControl
                    visible={isHovering || mealItemRegenerating}
                    onRegenerate={this._onMealItemRegenerate}
                    regenerating={mealItemRegenerating}
                    style={{
                      position: 'absolute',
                      [Styles.values.end]: Styles.values.spacing,
                    }}
                  >
                    <MenuItem
                      label={'Remove from meal'}
                      onPress={this.props.onMealItemRemove}
                    />
                  </ItemControl>
                </RX.View>
              )}
            />
          </RX.View>
        )}
      </ThemeContext.Consumer>
    )
  }

  private _onMealItemAmountChange = (amount: number, selectedUnit: string) => {
    const mealItem = this.props.mealItem
    const { food, recipe } = mealItem

    mealItem.amount = amount

    if (recipe) {
      switch (selectedUnit) {
        case 'serving':
        case 'g':
        default:
          break
      }
    }

    if (food) {
      switch(selectedUnit) {
        case 'g':
          mealItem.customUnit = null
          mealItem.gramWeight = null
          mealItem.weight = null
          break
        case mealItem.customUnit:
          mealItem.customUnit = selectedUnit
          mealItem.weight = null
          break
        default:
          const weight = food.weights.find(p => p.id === selectedUnit)
          if (!weight) throw new Error('selectedUnit is unknown')

          mealItem.customUnit = null
          mealItem.gramWeight = null
          mealItem.weight = weight
      }
    }

    this.props.onMealItemChange(mealItem)
  }

  private _onMealItemRegenerate = () => {
    if (this.props.mealItemRegenerating) return

    this.props.onMealItemRegenerate()
  }

  private _getCommonMealItem = () => {
    const mealItem = this.props.mealItem
    const { food, recipe } = mealItem

    if (recipe) {
      return {
        ...mealItem,
        title: recipe.title,
        thumbnail: recipe.thumbnail,
        selectedUnit: 'serving',
        units: [
          {value: 'serving', text: 'serving'}, //FIXME
          {value: 'g', text: 'grams'},
          mealItem.customUnit ? { value: mealItem.customUnit, text: mealItem.customUnit } : undefined,
        ].filter(Boolean),
        totalTime: recipe.timing.totalTime,
      }
    }

    if (food) {
      return {
        ...mealItem,
        title: food.name,
        thumbnail: food.thumbnail,
        totalTime: 5,
        selectedUnit: (mealItem.weight && mealItem.weight.id) || mealItem.customUnit || 'g', // Either weight, customUnit, or grams (no weight)
        units: [
          ...food.weights.map(weight => ({
            text: weight.name[0].text, //FIXME
            value: weight.id,
          })),
          mealItem.customUnit ? { value: mealItem.customUnit, text: mealItem.customUnit } : undefined,
          {value: 'g', text: 'grams'}
        ].filter(Boolean),
      }
    }

    throw new Error('no food or recipe')
  }
}

const MealItemComponentContainer = (props: MealItemComponentCommonProps) => {
  const [suggestMealItem, { loading }] = useMutation<MealItemComponentMutation, MealItemComponentMutationVariables>(MealItemComponent.operations.suggestMealItem)

  return (
    <MealItemComponent
      {...props}
      mealItemRegenerating={loading}
      onMealItemRegenerate={() => suggestMealItem({
        variables: {
          date: props.meal.time,
          userMealId: props.meal.userMeal.id,
          mealItemId: props.mealItem.id,
        },
        update: (proxy, { data: { suggestMealItem } }) => CalendarService.setMealItem(props.dayId, props.meal.id, props.mealItem.id, suggestMealItem),
      })}
    />
  )
}

MealItemComponentContainer.operations = MealItemComponent.operations
MealItemComponentContainer.fragments = MealItemComponent.fragments

export default MealItemComponentContainer

const styles = {
  container: RX.Styles.createViewStyle({
    padding: Styles.values.spacing,
    paddingHorizontal: Styles.values.spacingLarge,
    flexDirection: 'row',
    alignItems: 'center',
    cursor: 'pointer',
    borderRadius: 8,
  }),
  textsContainer: RX.Styles.createViewStyle({
    [Styles.values.paddingStart]: 16,
    justifyContent: 'center',
  }),
  image: RX.Styles.createImageStyle({
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#fafafa',
  }),
  title: RX.Styles.createTextStyle({
    fontWeight: '500',
    [Styles.values.marginEnd]: Styles.values.spacing / 2
  }),
  subtitle: RX.Styles.createTextStyle({
    fontWeight: '100',
    fontSize: 11,
    marginTop: 2,
  }),
  moreButton: RX.Styles.createViewStyle({
    position: 'absolute',
    right: 20,
  })
}
