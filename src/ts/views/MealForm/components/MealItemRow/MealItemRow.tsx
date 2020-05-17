/*
 * MealItemRow.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import { gql } from '@apollo/client'
import Styles from '@App/Styles'
import { useTheme } from '@App/ThemeContext'
import FilledButton from '@Common/FilledButton/FilledButton'
import FlatButton from '@Common/FlatButton/FlatButton'
import FoodPreview from '@Common/FoodPickerDialog/components/FoodPreview'
import { FoodPickerMealItem, FoodTypes } from '@Common/FoodPickerDialog/FoodPicker'
import { showFoodPicker } from '@Common/FoodPickerDialog/FoodPickerDialog'
import { translate } from '@Common/LocalizedText/LocalizedText'
import MealItemComponent from '@Common/MealItemComponent/MealItemComponent'
import Text from '@Common/Text/Text'
import { createId } from '@Utils/create-id'
import useMealItemDragAndDrop from '@Utils/hooks/useMealItemDragAndDrop'
import { determineIfIsFood } from '@Utils/ingredients'
import {
  MealItemRowMealItem,
  MealItemRowMealItem_alternativeMealItems
} from '@Views/MealForm/components/MealItemRow/types/MealItemRowMealItem'
import { useCallback, useState } from 'react'
import RX from 'reactxp'


interface MealItemRowProps {
  style?: any,
  mealItem: MealItemRowMealItem,
  onMealItemChange?: (mealItem: MealItemRowMealItem) => void,
  onMealItemDelete?: (mealItemId: string) => void,
  editable?: boolean,
  draggingItem?: FoodPickerMealItem,
  onDragEnter?: (e: RX.Types.DragEvent) => void,
}

export default function MealItemRow(props: MealItemRowProps) {
  const {
    mealItem,
    onMealItemDelete,
    onMealItemChange,
    draggingItem,
    onDragEnter: onMainMealDragEnter,
    editable = true,
  } = props

  const [spaceIndex, setSpaceIndex] = useState<number>()

  const theme = useTheme()

  const [alternativesVisible, toggleAlternatives] = useState(false)

  const _onMealItemDelete = useCallback((mi: MealItemRowMealItem_alternativeMealItems, isMainMealItem?: boolean) => () => {
    if (isMainMealItem) {
      onMealItemDelete!(mealItem.id)
    } else {
      onMealItemChange!({
        ...mealItem,
        alternativeMealItems: mealItem.alternativeMealItems.filter(alternativeMealItem => alternativeMealItem.id !== mi.id)
      })
    }
  }, [mealItem, onMealItemDelete, onMealItemChange])

  const _onMealItemIngredientChange = useCallback((mi: MealItemRowMealItem_alternativeMealItems, isMainMealItem?: boolean) => (ingredient: any) => {
    if (isMainMealItem) {
      onMealItemChange!({
        ...mealItem,
        ...ingredient as FoodPickerMealItem,
        // item: ingredient.item ? {
        //   ...ingredient.item,
        //   nutrition: ingredient.item.nutrition,
        // } : null,
      })
    } else {
      onMealItemChange!({
        ...mealItem,
        alternativeMealItems: mealItem.alternativeMealItems.map(alternativeMealItem => {
          if (alternativeMealItem.id === mi.id) {
            return ingredient as FoodPickerMealItem
          }

          return alternativeMealItem
        })
      })
    }
  }, [onMealItemChange, mealItem])

  const _onMealItemAlternativeCreation = useCallback((mi: FoodPickerMealItem, userMealId?: string, index: number = 0) => {
    const alternativeMealItems = [...mealItem.alternativeMealItems]

    alternativeMealItems.splice(
      index,
      0,
      {
        ...mi,
        id: mi.id || createId(),
      }
    )

    onMealItemChange!({
      ...mealItem,
      alternativeMealItems
    })
    toggleAlternatives(true)
  }, [onMealItemChange])

  const {
    onDrop,
    onDragOver,
    onDragLeave,
    onDragEnter,
  } = useMealItemDragAndDrop({
    setSpaceIndex: index => setSpaceIndex(index),
    onMealItemDropped: (mealItem, index) => _onMealItemAlternativeCreation(mealItem, undefined, index),
    spaceIndex,
  })

  const _showFoodPicker = useCallback(() => showFoodPicker({
    foodTypes: [FoodTypes.all, FoodTypes.food, FoodTypes.recipe],
    onDismiss: () => null,
    onSubmit: _onMealItemAlternativeCreation,
    showOptional: true,
    submitButtonLabel: translate('Add Meal Item')
  }), [_onMealItemAlternativeCreation])

  const _mealItemName = determineIfIsFood(mealItem.item!) ? mealItem.item.name : mealItem.item!.title

  let mealItems = [...mealItem.alternativeMealItems]

  if (spaceIndex !== undefined && draggingItem) {
    mealItems
      .splice(spaceIndex || 0, 0, {
        ...draggingItem,
      })
  }

  return (
    <RX.View>
      <MealItemComponent
        onDragEnter={editable ? onMainMealDragEnter : undefined}
        mealItem={mealItem}
        onMealItemRemove={editable ? _onMealItemDelete(mealItem, true) : undefined}
        onMealItemChange={editable ? _onMealItemIngredientChange(mealItem, true) : undefined}
        visibleItemControl
        containerStyle={{
          marginBottom: Styles.values.spacing / 2,
          opacity: draggingItem && draggingItem.id === mealItem.id ? 0.8 : 1,
        }}
      >
        {
          mealItem.alternativeMealItems.length > 0 ?
            <FlatButton
              label={alternativesVisible ? 'Hide Alternatives' : `Show ${mealItem.alternativeMealItems.length} Alternatives`}
              onPress={() => toggleAlternatives(!alternativesVisible)}
            /> :
            editable ? <FilledButton
              label={'Add Alternative'}
              onPress={_showFoodPicker}
            /> : undefined
        }
      </MealItemComponent>

      {
        alternativesVisible && mealItems.length > 0 &&
        <RX.View
          onDrop={editable ? onDrop : undefined}
          onDragOver={editable ? onDragOver : undefined}
          onDragLeave={editable ? onDragLeave : undefined}
          style={[
            styles.alternativesContainer,
            {
              borderColor: mealItems.length > 0 ? theme.colors.primary : 'transparent',
            }
          ]}
        >
          <RX.View
            style={styles.innerChild}
          >
            <Text style={styles.alternativesTitle}>Alternatives für <Text translations={_mealItemName} /></Text>
          </RX.View>

          {
            mealItems.map((alternativeMealItem, index) => (
              <MealItemComponent
                onDragEnter={editable ? onDragEnter(index) : undefined}
                // onDragEnter={onDragEnter(index)}
                mealItem={alternativeMealItem}
                onMealItemRemove={editable ? _onMealItemDelete(alternativeMealItem, false) : undefined}
                onMealItemChange={editable ? _onMealItemIngredientChange(alternativeMealItem, false) : undefined}
                visibleItemControl
                containerStyle={{
                  marginBottom: Styles.values.spacing / 2,
                  // opacity: draggingItem && draggingItem.id === mealItem.id ? 0.8 : 1,

                  // @ts-ignore web
                  // cursor: props.meal ? undefined : 'grab',
                }}
              />
            ))
          }

          {
            editable &&
            <FilledButton
              label={'Add Alternative'}
              onPress={_showFoodPicker}
              containerStyle={styles.innerChild}
            />
          }
        </RX.View>
      }
    </RX.View>
  )
}

MealItemRow.fragments = {
  mealItem: gql`
    fragment MealItemRowMealItem on MealItem {
      id
      amount
      name { text locale }
      description { text locale }
      customUnit {
        gramWeight
        name { text locale }
      }
      isOptional
      hasAlternatives
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
      item {
        ...FoodPreviewMealItemIngredientItem
      }
      alternativeMealItems {
        id
        amount
        name { text locale }
        description { text locale }
        isOptional
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
        item {
          ...FoodPreviewMealItemIngredientItem
        }
      }
    }

    ${FoodPreview.fragments.mealItemIngredientItem}
  `
}

// export default class MealItemRow1 extends RX.Component<MealItemRowProps> {
//   public render() {
//     return (
//       <ThemeContext.Consumer>
//         {({ theme }) => (
//           <RX.ScrollView
//             horizontal
//             style={[
//               styles.scrollView,
//               {
//                 flexDirection: 'row',
//                 marginBottom: Styles.values.spacing,
//               }
//             ]}
//           >
//             <RX.View
//               style={[
//                 styles.row,
//                 {
//                   [Styles.values.marginEnd]: Styles.values.spacing,
//                   borderRadius: 10,
//                   backgroundColor: theme.colors.textInputBg,
//                 }
//               ]}
//             >
//               {this._renderMealItem(this.props.mealItem, true)}
//             </RX.View>
//
//             <RX.View
//               style={[
//                 styles.row,
//                 {
//                   borderWidth: 1,
//                   borderColor: this.props.mealItem.alternativeMealItems.length > 0 ? theme.colors.primary : 'transparent',
//                   borderStyle: 'dashed',
//                 }
//               ]}
//             >
//               {
//                 this.props.mealItem.alternativeMealItems.map(alternativeMealItem => (
//                   this._renderMealItem(alternativeMealItem)
//                 ))
//               }
//
//               {
//                 this.props.editable &&
//                 <RX.View style={{ width: 150, justifyContent: 'center', alignItems: 'center' }}>
//                   <FlatButton
//                     onPress={() => showFoodPicker({
//                       foodTypes: [FoodTypes.all, FoodTypes.food, FoodTypes.recipe],
//                       onDismiss: () => null,
//                       onSubmit: this._onMealItemAlternativeCreation,
//                       showOptional: true,
//                       submitButtonLabel: translate('Add Alternative Meal Item')
//                     })}
//                     label={translate('Add Alternative')}
//                   />
//                 </RX.View>
//               }
//             </RX.View>
//           </RX.ScrollView>
//         )}
//       </ThemeContext.Consumer>
//     )
//   }
// }

const styles = {
  alternativesTitle: RX.Styles.createTextStyle({
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: Styles.values.spacing / 2,
  }),
  alternativesContainer: RX.Styles.createViewStyle({
    borderWidth: 1,
    borderStyle: 'dashed',
    margin: Styles.values.spacing,
    marginTop: 0,
    borderRadius: 10,
    paddingVertical: Styles.values.spacing,
  }),
  row: RX.Styles.createViewStyle({
    padding: Styles.values.spacing,
    flexDirection: 'row',
    borderRadius: 10,
  }),
  scrollView: RX.Styles.createScrollViewStyle({
    // @ts-ignore
    display: 'flex',
  }),
  mealItem: RX.Styles.createViewStyle({
    [Styles.values.marginEnd]: Styles.values.spacing,
  }),
  innerChild: RX.Styles.createViewStyle({
    marginHorizontal: Styles.values.spacingLarge,
  })
}
