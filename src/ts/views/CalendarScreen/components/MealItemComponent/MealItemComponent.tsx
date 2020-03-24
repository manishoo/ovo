/*
 * MealItemComponent.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import { ExecutionResult, gql, useMutation } from '@apollo/client'
import Styles from '@App/Styles'
import { ThemeContext } from '@App/ThemeContext'
import FoodPreview from '@Common/FoodPickerDialog/components/FoodPreview'
import HoverView from '@Common/HoverView/HoverButton'
import InputNumber from '@Common/Input/InputNumber'
import { translate } from '@Common/LocalizedText/LocalizedText'
import MenuItem from '@Common/MenuItem/MenuItem'
import Select, { Option } from '@Common/Select/Select'
import Text from '@Common/Text/Text'
import { IngredientFood } from '@Models/types/IngredientFood'
import { IngredientRecipe } from '@Models/types/IngredientRecipe'
import { withNavigation } from '@Modules/navigator'
import CalendarService from '@Services/CalendarService'
import { renderImageOrPlaceholder } from '@Utils'
import addAlpha from '@Utils/add-alpha'
import areFieldsEqual from '@Utils/areFieldsEqual'
import { MealComponentDayMeal } from '@Views/CalendarScreen/components/MealComponent/types/MealComponentDayMeal'
import { MealComponentLogMealMutation } from '@Views/CalendarScreen/components/MealComponent/types/MealComponentLogMealMutation'
import {
  MealItemComponentMealItem,
  MealItemComponentMealItem_item,
  MealItemComponentMealItem_item_Food,
  MealItemComponentMealItem_item_Recipe,
  MealItemComponentMealItem_unit,
  MealItemComponentMealItem_unit_Weight
} from '@Views/CalendarScreen/components/MealItemComponent/types/MealItemComponentMealItem'
import {
  MealItemComponentMutation,
  MealItemComponentMutationVariables
} from '@Views/CalendarScreen/components/MealItemComponent/types/MealItemComponentMutation'
import { FoodScreen } from '@Views/FoodScreen/FoodScreen'
import { RecipeScreen } from '@Views/RecipeScreen/RecipeScreen'
import React, { useEffect, useState } from 'react'
import RX from 'reactxp'
import ItemControl from '../ItemControl/ItemControl'


interface MealItemComponentCommonProps {
  style?: any,
  mealItem: MealItemComponentMealItem,
  meal: MealComponentDayMeal,
  dayId?: string,
  onMealItemRemove: () => any,
  onMealItemChange: (mealItem: MealItemComponentMealItem) => Promise<ExecutionResult<MealComponentLogMealMutation>>
}

interface MealItemComponentProps extends MealItemComponentCommonProps {
  onMealItemRegenerate: () => Promise<ExecutionResult<MealItemComponentMutation>>,
  mealItemRegenerating?: boolean,
}

function determineIfIsFood(toBeDetermined: MealItemComponentMealItem_item): toBeDetermined is MealItemComponentMealItem_item_Food {
  // @ts-ignore __typename
  return toBeDetermined.__typename === 'Food'
}

function determineIfIsRecipe(toBeDetermined: MealItemComponentMealItem_item): toBeDetermined is MealItemComponentMealItem_item_Recipe {
  // @ts-ignore __typename
  return toBeDetermined.__typename === 'Recipe'
}

function determineIsFull(toBeDetermined: MealItemComponentMealItem | MealItemComponentMealItem): toBeDetermined is MealItemComponentMealItem {
  return !!toBeDetermined.item && Object.keys(toBeDetermined.item).length > 2
}

export function determineIfIsWeight(toBeDetermined: MealItemComponentMealItem_unit): toBeDetermined is MealItemComponentMealItem_unit_Weight {
  // @ts-ignore __typename
  return toBeDetermined.__typename === 'Weight'
}

const MealItemComponent = withNavigation(React.memo(({ style, mealItemRegenerating, mealItem, onMealItemRemove, onMealItemChange, onMealItemRegenerate }: MealItemComponentProps) => {
  // const client = useApolloClient()

  // if (determineIsFull(mealItem)) {
  //   item = mealItem.item
  // } else if (mealItem.item) {
  //   if (determineIfIsFood(mealItem.item)) {
  //     item = client.readFragment({
  //       fragment: IngredientCard.fragments.food,
  //       fragmentName: 'IngredientFood',
  //       id: defaultDataIdFromObject(mealItem.item as any),
  //     }) as IngredientFood
  //   }
  //
  //   if (determineIfIsRecipe(mealItem.item)) {
  //     item = client.readFragment({
  //       fragment: IngredientCard.fragments.recipe,
  //       fragmentName: 'IngredientRecipe',
  //       id: defaultDataIdFromObject(mealItem.item as any),
  //     }) as IngredientRecipe
  //   }
  // }

  let item = mealItem.item

  const isItemRecipe = (i: IngredientFood | IngredientRecipe): i is IngredientRecipe => {
    // @ts-ignore
    return i.__typename === 'Recipe'
  }

  // const jack: MealItemComponentMealItem = client.readFragment({
  //   fragment: FoodPreview.fragments.mealItemIngredientItem,
  //   fragmentName: 'FoodPreviewMealItemIngredientItem',
  //   id: mealItem.id,
  // })!

  // if (!determineIsFull(mealItem)) {
  //   mealItem = client.readFragment({
  //     fragment: FoodPreview.fragments.mealItemIngredientItem,
  //     fragmentName: 'FoodPreviewMealItemIngredientItem',
  //     id: mealItem.id,
  //   })
  // }

  const [amount, setAmount] = useState<string>(String(mealItem.amount))
  const [unit, setUnit] = useState(mealItem.unit)

  useEffect(() => {
    setAmount(String(mealItem.amount))
    setUnit(mealItem.unit)
  }, [mealItem.id])

  const _getCommonMealItem = (): any => {
    if (item) {
      if (!isItemRecipe(item)) {
        return {
          amount,
          title: item.name,
          thumbnail: item.thumbnail,
          totalTime: 5,
          selectedUnit: unit ? (determineIfIsWeight(unit) ? unit.id : 'customUnit') : 'g',
          units: ([
            ...item.weights.map(weight => ({
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
          amount,
          title: item.title,
          thumbnail: item.thumbnail,
          selectedUnit: 'serving',
          units: ([
            { value: 'serving', text: translate('serving') },
            mealItem.customUnit ? {
              value: 'customUnit',
              text: <Text translations={mealItem.customUnit.name} />
            } : undefined,
          ] as Option[]).filter(Boolean),
          totalTime: item.timing.totalTime,
        }
      }
    } else {
      return {
        amount: '',
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

  const commonMealItem = _getCommonMealItem()

  const _onPress = () => {
  }

  let _onMealItemAmountChange = (am: string, selectedUnit: string) => {
    const mItem = { ...mealItem }
    mItem.amount = Number(am)

    if (item) {
      if (!isItemRecipe(item)) {
        mItem.item = item
        switch (selectedUnit) {
          case 'g':
            mItem.unit = null
            break
          case 'customUnit':
            mItem.unit = mItem.customUnit
            break
          default:
            const weight = item.weights.find(p => p.id === selectedUnit)
            if (!weight) throw new Error('selectedUnit is unknown')

            mItem.unit = weight
        }
      } else {
        mItem.item = item
        switch (selectedUnit) {
          case 'serving':
          case 'g':
          default:
            mItem.unit = null
            break
        }
      }
    }

    setUnit(mItem.unit)
    return onMealItemChange(mItem as MealItemComponentMealItem)
  }

  const _handleMealItemUnitChange = (selectedUnit: string) => {
    if (!amount) return null

    let newAmount = +amount
    if (!item) return

    if (!isItemRecipe(item)) {
      switch (selectedUnit) {
        case 'g':
          if (unit && unit.gramWeight) {
            newAmount = (+amount * unit.gramWeight)
          }
          break
        case 'customUnit':
          if (mealItem.customUnit && mealItem.customUnit.gramWeight) {
            newAmount = ((+amount * mealItem.customUnit.gramWeight) / (unit && unit.gramWeight ? unit.gramWeight : 1))
          }
          break
        default:
          const weight = item.weights.find(p => p.id === selectedUnit)
          if (!weight) throw new Error('selectedUnit is unknown')
          if (!weight.gramWeight) throw new Error('weight does not have gramWeight')

          newAmount = ((+amount * ((unit && unit.gramWeight ? unit.gramWeight : 1))) / weight.gramWeight)
      }
    } else {
      switch (selectedUnit) {
        case 'serving':
        case 'g':
        default:
          break
      }
    }

    setAmount(String(newAmount))
    return _onMealItemAmountChange(String(newAmount), selectedUnit)

  }
  const _onMealItemRegenerate = () => {
    if (mealItemRegenerating) return

    return onMealItemRegenerate()

  }
  const _onMealItemClick = () => {
    if (!item) return

    if (!isItemRecipe(item)) {
      FoodScreen.showModal({
        slug: item.origFoodClassSlug,
      })
    } else {
      RecipeScreen.showModal({
        slug: item.slug,
      })
    }
  }

  let amountText = commonMealItem.amount

  if (commonMealItem.amount.includes('.') && commonMealItem.amount[commonMealItem.amount.length - 1] !== '.') {
    amountText = Number(commonMealItem.amount).toFixed(1)
  }

  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <HoverView
          onRenderChild={isHovering => (
            <RX.View
              key={commonMealItem.id}
              onPress={_onPress}
              activeOpacity={0.7}
              style={[styles.container, style, {
                borderWidth: 1,
                borderColor: isHovering ? theme.colors.mealItemBorder : 'transparent',
                transition: 'all 0.3s'
              }]}
            >
              <HoverView
                onPress={_onMealItemClick}
                style={{
                  cursor: 'pointer',
                }}
                onRenderChild={hovering => renderImageOrPlaceholder(
                  commonMealItem.thumbnail,
                  {
                    width: 60,
                    height: 60,
                    borderRadius: 10,
                    borderWidth: 2,
                    borderColor: hovering ? theme.colors.primary : (isHovering ? addAlpha(theme.colors.primary, 0.5) : 'transparent'),
                    // @ts-ignore web
                    transition: 'all 0.3s',

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
                        translations={commonMealItem.title || []}
                        style={[
                          styles.title,
                          {
                            color: hovering ? theme.colors.primary : theme.colors.text,
                          }
                        ]}
                        onPress={_onMealItemClick}
                      />
                    )}
                  />
                  {/*<Text
                    translations={commonMealItem.description || []}
                    style={styles.description}
                  />*/}
                  {/*{!!commonMealItem.totalTime && <TotalTime totalTime={commonMealItem.totalTime} />}*/}
                </RX.View>
                <RX.View
                  style={{
                    flexDirection: 'row',
                    [Styles.values.marginStart]: -Styles.values.spacing / 4,
                  }}
                >
                  <InputNumber
                    value={amountText}
                    onChange={(value) => {
                      setAmount(value)
                      _onMealItemAmountChange(value, commonMealItem.selectedUnit)
                    }}
                    autoWidth
                    totalHorizontalPadding={12}
                    textInputStyle={[
                      styles.amountInput,
                      {
                        backgroundColor: isHovering ? theme.colors.textInputBg : 'transparent',
                        // width: (amountText.length * 10) + 8,
                      }
                    ]}
                    style={{
                      marginBottom: 0,
                    }}
                  />
                  <Select
                    value={commonMealItem.selectedUnit}
                    options={commonMealItem.units}
                    onChange={_handleMealItemUnitChange}
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
                onRegenerate={_onMealItemRegenerate}
                regenerating={mealItemRegenerating}
                style={{
                  position: 'absolute',
                  [Styles.values.end]: Styles.values.spacing,
                }}
              >
                <MenuItem
                  label={translate('Remove from meal')}
                  onPress={onMealItemRemove}
                />
              </ItemControl>
            </RX.View>
          )}
        />
      )}
    </ThemeContext.Consumer>
  )
}, areFieldsEqual([
  'mealItem',
  'mealItemRegenerating',
])))

const MealItemComponentContainer = (props: MealItemComponentCommonProps) => {
  const [suggestMealItem, { loading }] = useMutation<MealItemComponentMutation, MealItemComponentMutationVariables>(MealItemComponentContainer.operations.suggestMealItem)

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
        update: (proxy, { data }) => data && props.dayId && CalendarService.setMealItem(proxy, props.meal.id, props.mealItem, data.suggestMealItem),
      })}
    />
  )
}

MealItemComponentContainer.fragments = {
  mealItem: gql`
    fragment MealItemComponentMealItem on MealItem {
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
        ...FoodPreviewMealItemIngredientItem
      }
    }

    ${FoodPreview.fragments.mealItemIngredientItem}
  `
}

MealItemComponentContainer.operations = {
  suggestMealItem: gql`
    mutation MealItemComponentMutation($userMealId: String!, $mealItemId: String!, $date: DateTime!) {
      suggestMealItem(userMealId: $userMealId, mealItemId: $mealItemId, date: $date) {
        ...MealItemComponentMealItem
      }
    }

    ${MealItemComponentContainer.fragments.mealItem}
  `
}

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
  title: RX.Styles.createTextStyle({
    fontWeight: '500',
    // @ts-ignore web
    transition: 'all 0.3s',
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
    padding: Styles.values.spacing / 4,
    [Styles.values.paddingEnd]: Styles.values.spacing / 4,
    [Styles.values.borderTopEndRadius]: 0,
    [Styles.values.borderBottomEndRadius]: 0,
  }),
  unitInput: RX.Styles.createViewStyle({
    padding: Styles.values.spacing / 4,
    [Styles.values.paddingStart]: 0,
    [Styles.values.borderTopStartRadius]: 0,
    [Styles.values.borderBottomStartRadius]: 0,
    marginBottom: 0,
  })
}
