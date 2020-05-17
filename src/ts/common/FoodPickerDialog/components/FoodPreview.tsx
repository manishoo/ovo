/*
 * FoodPreview.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import { gql } from '@apollo/client'
import Styles from '@App/Styles'
import { Theme } from '@App/Theme'
import { ThemeContext } from '@App/ThemeContext'
import Checkbox from '@Common/Checkbox/Checkbox'
import FilledButton from '@Common/FilledButton/FilledButton'
import SubmitSelect, { SubmitSelectProps } from '@Common/FoodPickerDialog/components/components/SubmitSelect'
import {
  FoodPreviewMealItem,
  FoodPreviewMealItem_unit,
  FoodPreviewMealItem_unit_Weight
} from '@Common/FoodPickerDialog/components/types/FoodPreviewMealItem'
import Image from '@Common/Image/Image'
import IngredientCard from '@Common/IngredientCard/IngredientCard'
import InputNumber from '@Common/Input/InputNumber'
import IntlInput from '@Common/Input/IntlInput'
import { translate } from '@Common/LocalizedText/LocalizedText'
import Modal from '@Common/Modal/Modal'
import NutritionInfo from '@Common/NutritionInfo/NutritionInfo'
import Select, { Option } from '@Common/Select/Select'
import Text from '@Common/Text/Text'
import NutritionFragment from '@Models/nutrition'
import { IngredientFood } from '@Models/types/IngredientFood'
import { IngredientRecipe } from '@Models/types/IngredientRecipe'
import getFloatFromString from '@Utils/get-float-from-string'
import { calculateMealItemNutrition } from '@Utils/shared/calculate-meal-nutrition'
import { determineIfIsFood } from '@Utils/transformers/meal.transformer'
import RX from 'reactxp'


export function determineIfIsWeight(toBeDetermined: FoodPreviewMealItem_unit): toBeDetermined is FoodPreviewMealItem_unit_Weight {
  // @ts-ignore __typename
  return toBeDetermined.__typename == 'Weight'
}

const isItemRecipe = (i: IngredientFood | IngredientRecipe): i is IngredientRecipe => {
  // @ts-ignore
  return i.__typename === 'Recipe'
}

const MODAL_ID = 'FoodPreview'
const TEXT_HEADING_WIDTH = 200

export type FoodPreviewOnSubmit = (mealItem: FoodPreviewMealItem, userMealId?: string) => void

interface FoodPreviewProps {
  style?: any,
  onDismiss: () => any,
  inputRef: (ref: any) => any,
  mealItem: FoodPreviewMealItem,
  onSubmit: FoodPreviewOnSubmit,
  height: number,
  selectProps?: SubmitSelectProps,
  showOptional?: boolean,
  submitButtonLabel?: string,
}

type LocalFoodPreviewMealItem = Omit<FoodPreviewMealItem, 'amount'> & { amount: string | null }

interface FoodPreviewState {
  mealItem: LocalFoodPreviewMealItem,
  selectedWeightValue?: string,
}

export default class FoodPreview extends RX.Component<FoodPreviewProps, FoodPreviewState> {
  static fragments = {
    food: gql`
      fragment FoodPreviewFood on Food {
        ...IngredientFood
        origFoodClassSlug
        nutrition {
          ...Nutrition
        }
      }

      ${NutritionFragment}
      ${IngredientCard.fragments.food}
    `,
    recipe: gql`
      fragment FoodPreviewRecipe on Recipe {
        ...IngredientRecipe
        author {
          username
        }
        nutrition {
          ...Nutrition
        }
      }

      ${NutritionFragment}
      ${IngredientCard.fragments.recipe}
    `,
    get mealItemIngredientItem() {
      return gql`
        fragment FoodPreviewMealItemIngredientItem on IngredientItem {
          ... on Food {
            ...FoodPreviewFood
          }
          ... on Recipe {
            ...FoodPreviewRecipe
          }
        }

        ${this.food}
        ${this.recipe}
      `
    },
    get mealItem() {
      return gql`
        fragment FoodPreviewMealItem on Ingredient {
          id
          name {text locale}
          description {text locale}
          amount
          customUnit {
            gramWeight
            name { text locale }
          }
          isOptional
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

        ${this.mealItemIngredientItem}
        ${NutritionFragment}
      `
    }
  }

  private _amountInputRef: any

  constructor(props: FoodPreviewProps) {
    super(props)

    let selectedWeightValue
    let description = null
    let defaultAmount = ''

    if (props.mealItem.description && props.mealItem.description.length > 0) {
      description = props.mealItem.description
    }

    if (props.mealItem.item && determineIfIsFood(props.mealItem.item)) {
      defaultAmount = '100'
    } else {
      defaultAmount = '1'
    }

    if (props.mealItem.unit) {
      if (determineIfIsWeight(props.mealItem.unit)) {
        selectedWeightValue = props.mealItem.unit.id
      } else {
        selectedWeightValue = 'custom'
      }
    }

    this.state = {
      mealItem: {
        ...props.mealItem,
        amount: props.mealItem.amount ? String(props.mealItem.amount) : defaultAmount,
        description,
      },
      selectedWeightValue
    }
  }

  componentDidMount() {
    if (this._amountInputRef) {
      this._amountInputRef.selectAll()
    }
  }

  public render() {
    const { style } = this.props

    return (
      <ThemeContext.Consumer>
        {({ theme }) => (
          <RX.View
            style={[styles.previewContainer, style]}
          >
            {this._renderContent(theme)}

            <RX.View
              onPress={this._dismiss}
              style={styles.cancelSelectedMealContainer}
            >
              <Text translate style={[styles.cancelText, { color: theme.colors.primary }]}>Cancel</Text>
            </RX.View>
          </RX.View>
        )}
      </ThemeContext.Consumer>
    )
  }

  private _onSubmit = (userMealId?: string) => {
    this.props.onSubmit({
      ...this.state.mealItem,
      amount: getFloatFromString(this.state.mealItem.amount),
    }, userMealId)
    this.props.onDismiss()
  }

  private _onMealItemChange = (mealItem: Partial<LocalFoodPreviewMealItem>) => {
    this.setState(prevState => ({
      mealItem: {
        ...prevState.mealItem,
        ...mealItem,
      }
    }))
  }

  private _handleMealItemUnitChange = (selectedUnit: string) => {
    const { mealItem } = this.state

    const amount = +(mealItem.amount || 0)
    let newAmount = amount

    this.setState({
      selectedWeightValue: selectedUnit,
    })

    let unit: FoodPreviewMealItem_unit | null = null
    let customUnit = mealItem.customUnit

    if (selectedUnit) {
      if (selectedUnit === 'custom') {
        customUnit = mealItem.customUnit || {
          name: [],
          gramWeight: null
        }
        unit = customUnit
      } else if (mealItem.item && determineIfIsFood(mealItem.item)) {
        unit = mealItem.item.weights.find(p => p.id === selectedUnit) || null
      }
    }

    /**
     * Change amount according to the selected unit
     * */
    if (!mealItem.item) return

    const previousUnit = mealItem.unit

    if (!isItemRecipe(mealItem.item)) {
      switch (selectedUnit) {
        case undefined:
          if (previousUnit && previousUnit.gramWeight) {
            newAmount = (+amount * previousUnit.gramWeight)
          }
          break
        case 'customUnit':
          if (mealItem.customUnit && mealItem.customUnit.gramWeight) {
            newAmount = ((+amount * mealItem.customUnit.gramWeight) / (previousUnit && previousUnit.gramWeight ? previousUnit.gramWeight : 1))
          }
          break
        default:
          const weight = mealItem.item.weights.find(p => p.id === selectedUnit)
          if (!weight) throw new Error('selectedUnit is unknown')
          if (!weight.gramWeight) throw new Error('weight does not have gramWeight')

          newAmount = ((+amount * ((previousUnit && previousUnit.gramWeight ? previousUnit.gramWeight : 1))) / weight.gramWeight)
      }
    } else {
      switch (selectedUnit) {
        case 'serving':
        case 'g':
        default:
          break
      }
    }

    this._onMealItemChange({
      amount: String(newAmount),
      unit,
      customUnit
    })

  }

  private _renderContent = (theme: Theme) => {
    const { mealItem } = this.state
    const { inputRef } = this.props

    if (!mealItem.item) return null

    const units: Option[] = [
      { value: undefined, text: determineIfIsFood(mealItem.item) ? translate('g') : translate('serving') },
      { value: 'custom', text: translate('Custom Weight') },
    ]

    if (determineIfIsFood(mealItem.item)) {
      units.splice(1, 0, ...mealItem.item.weights.map(w => ({
        value: w.id,
        text: <Text translations={w.name} />,
      })))
    }

    const mealItemNutrition = calculateMealItemNutrition({
      ...mealItem,
      amount: Number(mealItem.amount)
    })

    return [
      <RX.View
        style={styles.firstRow}
      >
        <Image
          source={mealItem.item.thumbnail ? mealItem.item.thumbnail.url : ''}
          style={styles.imageStyle}
          resizeMode={'cover'}
        />
        <RX.View>
          <RX.View
            style={styles.textHeadingContainer}
          >
            <Text
              style={styles.bigTitle}
              translations={determineIfIsFood(mealItem.item) ? mealItem.item.name : mealItem.item.title}
            />
            {
              determineIfIsFood(mealItem.item) ?
                <Text
                  style={styles.subtitle}
                  translations={mealItem.item.description || []}
                /> :
                <Text
                  style={styles.subtitle}
                >
                  @{mealItem.item.author.username}
                </Text>
            }

          </RX.View>
        </RX.View>
      </RX.View>,
      <RX.View
        style={{
          flexDirection: 'row',
        }}
      >
        <RX.View
          style={{
            flex: 3,
            [Styles.values.paddingEnd]: Styles.values.spacing / 2
          }}
        >
          <RX.View
            style={styles.flex1}
          >
            <InputNumber
              autoFocus
              inputRef={(ref: any) => {
                inputRef(ref)
                this._amountInputRef = ref
              }}
              value={String(Math.round(Number(mealItem.amount)))}
              onChange={amount => this._onMealItemChange({ amount })}
              label={translate('Amount')}
              keyboardType={'number-pad'}
              style={[styles.row, { [Styles.values.marginEnd]: Styles.values.spacing / 2 }]}
            />
            <RX.View style={[styles.row, { [Styles.values.marginStart]: Styles.values.spacing / 2 }]}>
              <Text translate style={[styles.label, { color: theme.colors.labelInput }]}>Unit</Text>
              <Select
                value={this.state.selectedWeightValue}
                options={units}
                onChange={this._handleMealItemUnitChange}
              />
            </RX.View>
          </RX.View>
          {
            mealItem.unit && !determineIfIsWeight(mealItem.unit) &&
            <RX.View
              style={styles.flex1}
            >
              <IntlInput
                autoFocus
                translations={mealItem.unit.name}
                onTranslationsChange={customUnitName => this._onMealItemChange({
                  unit: {
                    ...mealItem.unit,
                    gramWeight: mealItem.unit!.gramWeight,
                    name: customUnitName
                  },
                  customUnit: {
                    gramWeight: mealItem.unit!.gramWeight,
                    name: customUnitName
                  }
                })}
                label={translate('weightName')}
                style={[styles.row, { [Styles.values.marginEnd]: Styles.values.spacing / 2 }]}
              />
              <InputNumber
                value={mealItem.unit.gramWeight}
                onChange={gramWeight => this._onMealItemChange({
                  unit: {
                    ...mealItem.unit,
                    name: mealItem.unit!.name,
                    gramWeight: getFloatFromString(gramWeight),
                  },
                  customUnit: {
                    name: mealItem.unit!.name,
                    gramWeight: getFloatFromString(gramWeight),
                  }
                })}
                label={translate('estimatedGramWeight')}
                keyboardType={'number-pad'}
                style={[styles.row, { [Styles.values.marginStart]: Styles.values.spacing / 2 }]}
              />
            </RX.View>
          }
          <RX.View>
            <IntlInput
              translations={mealItem.description || []}
              onTranslationsChange={description => this._onMealItemChange({ description })}
              label={translate('Description')}
              style={{ flex: 1 }}
            />

            {
              this.props.showOptional &&
              <RX.View
                style={[
                  styles.flex1,
                  {
                    marginTop: Styles.values.spacing,
                  }
                ]}
              >
                <Text
                  style={{
                    fontWeight: '500',
                    color: theme.colors.labelInput,
                    [Styles.values.marginEnd]: Styles.values.spacing,
                  }}
                  translate={'optional'}
                />
                <Checkbox
                  size={20}
                  value={mealItem.isOptional || false}
                  onChange={isOptional => this.setState(prevState => ({
                    mealItem: {
                      ...prevState.mealItem,
                      isOptional,
                    }
                  }))}
                />
              </RX.View>
            }
          </RX.View>

        </RX.View>
        {
          mealItem.item.nutrition && mealItem.amount &&
          <RX.View
            style={{
              flex: 2
            }}
          >
            {
              mealItemNutrition &&
              <NutritionInfo
                showMacros={false}
                showDetails={false}
                nutrition={mealItemNutrition}
              />
            }
          </RX.View>
        }
      </RX.View>,
      this.props.selectProps ?
        <SubmitSelect
          {...this.props.selectProps}
          onSubmit={this._onSubmit}
        /> :
        <FilledButton
          label={this.props.submitButtonLabel || translate('AddIngredient')}
          onPress={() => this._onSubmit()}
          containerStyle={styles.addToMeal}
        />
    ]
  }

  private _dismiss = () => {
    this.props.onDismiss()
  }
}

export function showFoodPreviewModal(props: FoodPreviewProps) {
  RX.Modal.show(
    <ThemeContext.Consumer>
      {({ theme }) => (
        <Modal
          modalId={MODAL_ID}
          maxWidth={500}
          modalHeight={500}
          theme={theme}
        >
          <RX.View
            style={[
              {
                flex: 1,
                backgroundColor: '#fff',
                borderRadius: 8,
                width: 500,
                height: 500,
              }
            ]}
          >
            <FoodPreview
              {...props}
              style={{
                position: 'absolute',
                top: Styles.values.spacing * 2,
                left: Styles.values.spacing * 2,
                right: Styles.values.spacing * 2,
              }}
              onDismiss={() => Modal.dismissAnimated(MODAL_ID)}
            />
          </RX.View>
        </Modal>
      )}
    </ThemeContext.Consumer>,
    MODAL_ID
  )
}

const styles = {
  previewContainer: RX.Styles.createViewStyle({
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  }),
  cancelSelectedMealContainer: RX.Styles.createViewStyle({
    position: 'absolute',
    [Styles.values.end]: -16,
    top: -16,
    // width: 50,
    // height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    padding: Styles.values.spacing,
    cursor: 'pointer',
  }),
  cancelText: RX.Styles.createTextInputStyle({
    fontWeight: 'bold',
  }),
  firstRow: RX.Styles.createViewStyle({
    flexDirection: 'row',
    paddingTop: 0,
  }),
  textHeadingContainer: RX.Styles.createViewStyle({
    [Styles.values.marginEnd]: 50,
    maxWidth: 200,
  }),
  bigTitle: RX.Styles.createTextStyle({
    fontSize: 25,
    width: TEXT_HEADING_WIDTH,
    marginBottom: Styles.values.spacing / 2,
    // wordBreak: 'break-word',
    top: 2
  }),
  subtitle: RX.Styles.createTextStyle({
    fontSize: 12,
  }),
  flex1: RX.Styles.createViewStyle({
    // flex: 1,
    flexDirection: 'row',
  }),
  chartContainer: RX.Styles.createViewStyle({
    flex: 1,
    borderColor: '#eee',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 120,
    borderRadius: 10,
    marginLeft: 20,
  }),
  chartTextContainer: RX.Styles.createTextStyle({
    fontSize: 12,
    width: 100,
    textAlign: 'center',
  }),
  previewStyle: RX.Styles.createImageStyle({
    width: 80,
    height: 80,
    marginRight: 16,
    borderRadius: 20,
    backgroundColor: '#eee'
  }),
  addToMeal: RX.Styles.createViewStyle({
    marginTop: Styles.values.spacing,
    flex: 1,
  }),
  label: RX.Styles.createTextStyle({
    fontWeight: '500',
    marginBottom: Styles.values.spacing / 2,
  }),
  imageStyle: RX.Styles.createImageStyle({
    width: 80,
    height: 80,
    borderRadius: 8,
    backgroundColor: '#ddd',
    marginBottom: Styles.values.spacing,
    [Styles.values.marginEnd]: Styles.values.spacing,
  }),
  row: RX.Styles.createViewStyle({
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch'
  })
}
