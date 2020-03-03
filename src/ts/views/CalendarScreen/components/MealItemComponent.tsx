/*
 * FoodPickerMealItem.tsx
 * Copyright: Ouranos Studio 2019
 */

import { useMutation } from '@apollo/react-hooks'
import Styles from '@App/Styles'
import { ThemeContext } from '@App/ThemeContext'
import HoverView from '@Common/HoverView/HoverButton'
import IngredientCard from '@Common/IngredientCard/IngredientCard'
import InputNumber from '@Common/Input/InputNumber'
import { translate } from '@Common/LocalizedText/LocalizedText'
import MenuItem from '@Common/MenuItem/MenuItem'
import Select, { Option } from '@Common/Select/Select'
import Text from '@Common/Text/Text'
import { withNavigation } from '@Modules/navigator'
import CalendarService from '@Services/CalendarService'
import { renderImageOrPlaceholder } from '@Utils'
import getFloatFromString from '@Utils/get-float-from-string'
import ItemControl from '@Views/CalendarScreen/components/ItemControl'
import { DayMeal } from '@Views/CalendarScreen/components/types/DayMeal'
import { MealComponentLogMealMutation } from '@Views/CalendarScreen/components/types/MealComponentLogMealMutation'
import {
  MealItemComponentMutation,
  MealItemComponentMutationVariables
} from '@Views/CalendarScreen/components/types/MealItemComponentMutation'
import { RecipeScreen } from '@Views/RecipeScreen/RecipeScreen'
import { FoodScreen } from '@Views/FoodScreen/FoodScreen'
import gql from 'graphql-tag'
import { ExecutionResult } from 'react-apollo'
import RX from 'reactxp'
import { MealItem, MealItem_item, MealItem_item_Food, MealItem_unit, MealItem_unit_Weight } from './types/MealItem'


interface MealItemComponentCommonProps {
  style?: any,
  mealItem: MealItem,
  meal: DayMeal,
  dayId?: string,
  onMealItemRemove: () => any,
  onMealItemChange: (mealItem: MealItem) => Promise<ExecutionResult<MealComponentLogMealMutation>>
}

interface MealItemComponentProps extends MealItemComponentCommonProps {
  onMealItemRegenerate: () => Promise<ExecutionResult<MealItemComponentMutation>>,
  mealItemRegenerating?: boolean,
}

function determineIfIsFood(toBeDetermined: MealItem_item): toBeDetermined is MealItem_item_Food {
  // @ts-ignore __typename
  return toBeDetermined.__typename === 'Food'
}

export function determineIfIsWeight(toBeDetermined: MealItem_unit): toBeDetermined is MealItem_unit_Weight {
  // @ts-ignore __typename
  return toBeDetermined.__typename === 'Weight'
}

@withNavigation
class MealItemComponent extends RX.Component<MealItemComponentProps> {
  static fragments = {
    mealItem: gql`
      fragment MealItem on MealItem {
        id
        name {text locale}
        description {text locale}
        amount
        customUnit {
          gramWeight
          name { text locale }
        }
        unit {
          ... on Weight {
            amount
            gramWeight
            id
            name { text locale }
          }
          ... on CustomUnit {
            gramWeight
            name { text locale }
          }
        }
        isOptional
        item {
          ... on Food {
            ...IngredientFood
          }
          ... on Recipe {
            ...IngredientRecipe
          }
        }
      }

      ${IngredientCard.fragments.food}
      ${IngredientCard.fragments.recipe}
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

  _onPress = () => {
  }

  public render() {
    const { style, mealItemRegenerating } = this.props

    const mealItem = this._getCommonMealItem()

    return (
      <ThemeContext.Consumer>
        {({ theme }) => (
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
                <HoverView
                  onPress={this._onMealItemClick}
                  style={{
                    cursor: 'pointer',
                  }}
                  onRenderChild={hovering => renderImageOrPlaceholder(
                    mealItem.thumbnail,
                    {
                      width: 60,
                      height: 60,
                      borderRadius: 30,
                      borderWidth: 1,
                      borderColor: hovering ? theme.colors.primary : 'transparent',
                      backgroundColor: '#fafafa',
                    }
                  )}
                />
                <RX.View style={styles.textsContainer}>
                  <RX.View
                    style={{
                      flexDirection: 'row',
                      marginBottom: Styles.values.spacing / 4
                    }}
                  >
                    <HoverView
                      onRenderChild={hovering => (
                        <Text
                          translations={mealItem.title || []}
                          style={[
                            styles.title,
                            {
                              color: hovering ? theme.colors.primary : theme.colors.text,
                            }
                          ]}
                          onPress={this._onMealItemClick}
                        />
                      )}
                    />
                    <Text
                      translations={mealItem.description || []}
                      style={styles.description}
                    />
                    {/*{!!mealItem.totalTime && <TotalTime totalTime={mealItem.totalTime} />}*/}
                  </RX.View>
                  <RX.View
                    style={{
                      flexDirection: 'row',
                      [Styles.values.marginStart]: -Styles.values.spacing / 2,
                    }}
                  >
                    <InputNumber
                      value={mealItem.amount && Number(mealItem.amount.toFixed(1))}
                      onChange={(value) => this._onMealItemAmountChange(getFloatFromString(value), mealItem.selectedUnit)}
                      textInputStyle={[
                        styles.amountInput,
                        {
                          backgroundColor: isHovering ? theme.colors.textInputBg : 'transparent',
                          width: ((mealItem.amount ? mealItem.amount.toFixed(1) : '').length * 10)
                        }
                      ]}
                      style={{
                        marginBottom: 0,
                      }}
                    />
                    <Select
                      value={mealItem.selectedUnit}
                      options={mealItem.units}
                      onChange={this._handleMealItemUnitChange}
                      style={[
                        styles.unitInput,
                        {
                          backgroundColor: isHovering ? theme.colors.textInputBg : 'transparent',
                        },
                      ]}
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
                    label={translate('Remove from meal')}
                    onPress={this.props.onMealItemRemove}
                  />
                </ItemControl>
              </RX.View>
            )}
          />
        )}
      </ThemeContext.Consumer>
    )
  }

  private _handleMealItemUnitChange = (selectedUnit: string) => {
    const mealItem = this.props.mealItem
    if (!mealItem.amount) return null

    let newAmount = mealItem.amount

    if (mealItem.item) {
      if (determineIfIsFood(mealItem.item)) {
        switch (selectedUnit) {
          case 'g':
            if (mealItem.unit && mealItem.unit.gramWeight) {
              newAmount = mealItem.amount * mealItem.unit.gramWeight
            }
            break
          case 'customUnit':
            if (mealItem.customUnit && mealItem.customUnit.gramWeight) {
              newAmount = (mealItem.amount * mealItem.customUnit.gramWeight) / (mealItem.unit && mealItem.unit.gramWeight ? mealItem.unit.gramWeight : 1)
            }
            break
          default:
            const weight = mealItem.item.weights.find(p => p.id === selectedUnit)
            if (!weight) throw new Error('selectedUnit is unknown')
            if (!weight.gramWeight) throw new Error('weight does not have gramWeight')

            newAmount = (mealItem.amount * ((mealItem.unit && mealItem.unit.gramWeight ? mealItem.unit.gramWeight : 1))) / weight.gramWeight
        }
      } else {
        switch (selectedUnit) {
          case 'serving':
          case 'g':
          default:
            break
        }
      }
    }

    this._onMealItemAmountChange(newAmount, selectedUnit)
  }

  private _onMealItemAmountChange = (amount: number | null, selectedUnit: string) => {
    const mealItem = this.props.mealItem

    mealItem.amount = amount

    if (mealItem.item) {
      if (determineIfIsFood(mealItem.item)) {
        switch (selectedUnit) {
          case 'g':
            mealItem.unit = null
            break
          case 'customUnit':
            mealItem.unit = mealItem.customUnit
            break
          default:
            const weight = mealItem.item.weights.find(p => p.id === selectedUnit)
            if (!weight) throw new Error('selectedUnit is unknown')

            mealItem.unit = weight
        }
      } else {
        switch (selectedUnit) {
          case 'serving':
          case 'g':
          default:
            mealItem.unit = null
            break
        }
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

    if (mealItem.item) {
      if (determineIfIsFood(mealItem.item)) {
        return {
          ...mealItem,
          title: mealItem.item.name,
          thumbnail: mealItem.item.thumbnail,
          totalTime: 5,
          selectedUnit: mealItem.unit ? (determineIfIsWeight(mealItem.unit) ? mealItem.unit.id : 'customUnit') : 'g',
          units: ([
            ...mealItem.item.weights.map(weight => ({
              text: weight.name[0].text, //FIXME
              value: weight.id,
            })),
            mealItem.customUnit ? {
              value: 'customUnit',
              text: <Text translations={mealItem.customUnit.name} />
            } : undefined,
            { value: 'g', text: translate('g') }
          ] as Option[]).filter(Boolean),
        }
      } else {
        return {
          ...mealItem,
          title: mealItem.item.title,
          thumbnail: mealItem.item.thumbnail,
          selectedUnit: 'serving',
          units: ([
            { value: 'serving', text: translate('serving') },
            mealItem.customUnit ? {
              value: 'customUnit',
              text: <Text translations={mealItem.customUnit.name} />
            } : undefined,
          ] as Option[]).filter(Boolean),
          totalTime: mealItem.item.timing.totalTime,
        }
      }
    } else {
      return {
        ...mealItem,
        title: mealItem.name,
        thumbnail: null,
        selectedUnit: 'g',
        units: ([
          { value: 'g', text: 'grams' },
          mealItem.customUnit ? { value: 'customUnit', text: mealItem.customUnit } : undefined,
        ] as Option[]),
        totalTime: null,
      }
    }
  }

  private _onMealItemClick = () => {
    const { mealItem } = this.props
    if (!mealItem.item) return

    if (determineIfIsFood(mealItem.item)) {
      FoodScreen.showModal({
        slug: mealItem.item.origFoodClassSlug,
      })
    } else {
      RecipeScreen.showModal({
        slug: mealItem.item.slug,
      })
    }
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
        update: (proxy, { data }) => data && props.dayId && CalendarService.setMealItem(props.dayId, props.meal.id, props.mealItem.id, data.suggestMealItem),
      })}
    />
  )
}

MealItemComponentContainer.operations = MealItemComponent.operations
MealItemComponentContainer.fragments = MealItemComponent.fragments

export default MealItemComponentContainer

const styles = {
  container: RX.Styles.createViewStyle({
    padding: Styles.values.spacing / 2,
    paddingHorizontal: Styles.values.spacingLarge / 2,
    flexDirection: 'row',
    alignItems: 'center',
    // cursor: 'pointer',
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
    // fontWeight: '500',
    [Styles.values.marginEnd]: Styles.values.spacing / 2
  }),
  description: RX.Styles.createTextStyle({
    fontWeight: '300',
    // [Styles.values.marginEnd]: Styles.values.spacing / 2
  }),
  subtitle: RX.Styles.createTextStyle({
    fontWeight: '100',
    fontSize: 11,
    marginTop: 2,
  }),
  moreButton: RX.Styles.createViewStyle({
    position: 'absolute',
    right: 20,
  }),
  amountInput: RX.Styles.createViewStyle({
    padding: Styles.values.spacing / 2,
    [Styles.values.paddingEnd]: Styles.values.spacing / 4,
    [Styles.values.borderTopEndRadius]: 0,
    [Styles.values.borderBottomEndRadius]: 0,
  }),
  unitInput: RX.Styles.createViewStyle({
    padding: Styles.values.spacing / 2,
    [Styles.values.paddingStart]: 0,
    [Styles.values.borderTopStartRadius]: 0,
    [Styles.values.borderBottomStartRadius]: 0,
    marginBottom: 0,
  })
}
