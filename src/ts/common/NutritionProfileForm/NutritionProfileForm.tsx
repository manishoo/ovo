/*
 * NutritionProfileForm.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import { gql, useMutation } from '@apollo/client'
import client from '@App/client'
import Styles from '@App/Styles'
import { Theme } from '@App/Theme'
import FilledButton from '@Common/FilledButton/FilledButton'
import InputNumber from '@Common/Input/InputNumber'
import { translate } from '@Common/LocalizedText/LocalizedText'
import Modal from '@Common/Modal/Modal'
import Navbar from '@Common/Navbar/Navbar'
import {
  NutritionProfileMutation,
  NutritionProfileMutationVariables
} from '@Common/NutritionProfileForm/types/NutritionProfileMutation'
import Text from '@Common/Text/Text'
import { NutritionProfileInput, NutritionProfileMode } from '@Models/global-types'
import { MeOperation } from '@Models/graphql/me/me'
import { MeQuery } from '@Models/graphql/me/types/MeQuery'
import trimTypeName from '@Utils/trim-type-name'
import { ExecutionResult } from 'graphql'
import debounce from 'lodash/debounce'
import RX from 'reactxp'
import { ThemeContext } from 'src/ts/app/ThemeContext'
import { NutritionProfileFormNutritionProfile } from './types/NutritionProfileFormNutritionProfile'


const MODAL_ID = 'NutritionProfileForm'

const styles = {
  container: RX.Styles.createViewStyle({}),
  minMax: RX.Styles.createViewStyle({
    width: 60,
    marginBottom: 0,
    [Styles.values.marginEnd]: Styles.values.spacing / 4
  }),
  percentageButton: RX.Styles.createViewStyle({
    [Styles.values.marginStart]: Styles.values.spacing / 2,
  }),
  label: RX.Styles.createTextStyle({
    fontWeight: '500',
    marginBottom: Styles.values.spacing / 2,
  }),
  rowContainer: RX.Styles.createViewStyle({
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Styles.values.spacing,
  }),
  errorContainer: RX.Styles.createViewStyle({
    padding: Styles.values.spacing / 2,
    borderRadius: 8,
    width: 300,
  }),
}

interface NutritionProfileFormCommonProps {
  nutritionProfile: NutritionProfileFormNutritionProfile,
  modal?: boolean,
  theme: Theme,
}

interface NutritionProfileFormProps extends NutritionProfileFormCommonProps {
  onNutritionProfileUpdate: (nutritionProfile: NutritionProfileInput) => Promise<ExecutionResult<NutritionProfileMutation>>
  loading?: boolean,
  errors: string[],
  style?: any,
}

interface NutritionProfileFormState {
  nutritionProfile: NutritionProfileFormNutritionProfile,
  calories: number,
}

export default class NutritionProfileForm extends RX.Component<NutritionProfileFormProps, NutritionProfileFormState> {
  static fragments = {
    nutritionProfile: gql`
      fragment NutritionProfileFormNutritionProfile on NutritionProfile {
        id
        calories
        carbs {
          max
          min
          percentage
        }
        fat {
          max
          min
          percentage
        }
        protein {
          max
          min
          percentage
        }
        isStrict
        mode
      }
    `
  }

  constructor(props: NutritionProfileFormProps) {
    super(props)

    this._updateMinMax = debounce(this._updateMinMax, 1000)
    this._handleMinMax = debounce(this._handleMinMax, 1000)
    this.state = {
      nutritionProfile: props.nutritionProfile,
      calories: props.nutritionProfile.calories,
    }
  }

  public static showModal = (props: NutritionProfileFormCommonProps) => (
    RX.Modal.show(
      <ThemeContext.Consumer>
        {({ theme }) => (
          <Modal
            key={MODAL_ID}
            modalId={MODAL_ID}
            theme={theme}
          >
            <NutritionProfileFormContainer
              modal
              {...props}
            />
          </Modal>
        )}
      </ThemeContext.Consumer>,
      MODAL_ID,
    )
  )

  render() {
    const { style, errors, theme } = this.props
    const { nutritionProfile, calories } = this.state

    const _errorTextStyle = RX.Styles.createTextStyle({
      color: theme.colors.darkestRed,
    }, false)

    const _errorContainerStyle = RX.Styles.createViewStyle({
      backgroundColor: theme.colors.lighterRed,
    }, false)

    return (
      <RX.View
        style={[styles.container, style]}
      >
        <InputNumber
          label={translate('calories')}
          value={calories}
          onChange={(value) => this.setState({
            calories: Number(value)
          }, () => this._updateMinMax(Number(value)))}
          style={{ width: 100 }}
        />

        <RX.View
          style={{
            flexDirection: 'row',
            marginBottom: Styles.values.spacing,
          }}
        >
          <FilledButton
            label={'within a Range'}
            onPress={() => this.setState(prevState => ({
              nutritionProfile: {
                ...prevState.nutritionProfile,
                mode: NutritionProfileMode.range,
              }
            }))}
            mode={nutritionProfile.mode === 'range' ? FilledButton.mode.primary : FilledButton.mode.default}
            pressed={nutritionProfile.mode === 'range'}
          />
          <FilledButton
            label={'as Percentage'}
            onPress={() => this.setState(prevState => ({
              nutritionProfile: {
                ...prevState.nutritionProfile,
                mode: NutritionProfileMode.percentage,
              }
            }))}
            mode={nutritionProfile.mode === 'percentage' ? FilledButton.mode.primary : FilledButton.mode.default}
            pressed={nutritionProfile.mode === 'percentage'}
            style={styles.percentageButton}
          />
        </RX.View>

        {
          nutritionProfile.mode === 'range'
            ? [
              this._renderRangeForm(translate('Protein'), 'protein'),
              this._renderRangeForm(translate('Fat'), 'fat'),
              this._renderRangeForm(translate('Carbs'), 'carbs'),
            ]
            : [
              this._renderPercentForm(translate('Protein'), 'protein'),
              this._renderPercentForm(translate('Fat'), 'fat'),
              this._renderPercentForm(translate('Carbs'), 'carbs'),
            ]
        }

        {
          errors.map((error, index) => (
            <RX.View
              key={index}
              style={[
                styles.errorContainer,
                _errorContainerStyle
              ]}
            >
              <Text style={_errorTextStyle}>{error}</Text>
            </RX.View>
          ))
        }
      </RX.View>
    )
  }

  private readonly _updateMinMax = (targetCalories: number) => {
    this.setState(prevState => {
      const proportion = targetCalories / prevState.nutritionProfile.calories

      return {
        nutritionProfile: {
          ...prevState.nutritionProfile,
          carbs: {
            ...prevState.nutritionProfile.carbs,
            min: Math.round(prevState.nutritionProfile.carbs.min * proportion),
            max: Math.round(prevState.nutritionProfile.carbs.max * proportion),
          },
          protein: {
            ...prevState.nutritionProfile.protein,
            min: Math.round(prevState.nutritionProfile.protein.min * proportion),
            max: Math.round(prevState.nutritionProfile.protein.max * proportion),
          },
          fat: {
            ...prevState.nutritionProfile.fat,
            min: Math.round(prevState.nutritionProfile.fat.min * proportion),
            max: Math.round(prevState.nutritionProfile.fat.max * proportion),
          },
          calories: targetCalories,
        },
      }
    })
  }

  public getNutritionProfile = () => trimTypeName(this.state.nutritionProfile)

  private _renderPercentForm = (label: any, field: 'carbs' | 'protein' | 'fat') => {
    const { nutritionProfile } = this.state

    return (
      <>
        <Text style={styles.label}>{label}</Text>
        <RX.View
          style={styles.rowContainer}
        >
          <InputNumber
            value={nutritionProfile[field].percentage}
            onChange={(min) => this.setState(prevState => ({
              nutritionProfile: {
                ...prevState.nutritionProfile,
                [field]: {
                  ...prevState.nutritionProfile[field],
                  percentage: Number(min),
                },
              }
            }))}
            style={styles.minMax}
          />
          <Text translate={'%'} style={{ fontSize: 12 }} />
        </RX.View>
      </>
    )
  }

  private readonly _handleMinMax = (value: number, field: 'protein' | 'fat' | 'carbs', minMax: 'min' | 'max') => {
    switch (minMax) {
      case 'min':
        return this.setState(prevState => ({
          nutritionProfile: {
            ...prevState.nutritionProfile,
            [field]: {
              ...prevState.nutritionProfile[field],
              min: value > prevState.nutritionProfile[field].max ? prevState.nutritionProfile[field].max : value,
            },
          }
        }))
      case 'max':
        return this.setState(prevState => ({
          nutritionProfile: {
            ...prevState.nutritionProfile,
            [field]: {
              ...prevState.nutritionProfile[field],
              max: value < prevState.nutritionProfile[field].min ? prevState.nutritionProfile[field].min : value,
            },
          }
        }))
    }
  }

  private _renderRangeForm = (label: any, field: 'carbs' | 'protein' | 'fat') => {
    const { nutritionProfile } = this.state

    return (
      <>
        <Text style={styles.label}>{label}</Text>
        <RX.View
          style={styles.rowContainer}
        >
          <InputNumber
            value={nutritionProfile[field].min || 0}
            onChange={(min) => this.setState(prevState => ({
              nutritionProfile: {
                ...prevState.nutritionProfile,
                [field]: {
                  ...prevState.nutritionProfile[field],
                  min: Number(min),
                },
              }
            }), () => this._handleMinMax(Number(min), field, 'min'))}
            style={styles.minMax}
          />
          <Text translate={'g'} />
          <RX.View style={{ width: Styles.values.spacing / 2 }} />
          <Text translate={'to'} />
          <RX.View style={{ width: Styles.values.spacing / 2 }} />
          <InputNumber
            value={nutritionProfile[field].max || 0}
            onChange={(max) => this.setState(prevState => ({
              nutritionProfile: {
                ...prevState.nutritionProfile,
                [field]: {
                  ...prevState.nutritionProfile[field],
                  max: Number(max),
                },
              }
            }), () => this._handleMinMax(Number(max), field, 'max'))}
            style={styles.minMax}
          />
          <Text translate={'g'} />
        </RX.View>
      </>
    )
  }
}

const NutritionProfileModal = (props: NutritionProfileFormProps) => {
  let formRef: any

  const _onSubmit = () =>
    formRef &&
    props.onNutritionProfileUpdate(formRef.getNutritionProfile())
      .then(() => Modal.dismissAnimated(MODAL_ID))

  return (
    <RX.View
      style={{
        backgroundColor: props.theme.colors.cardBg,
        padding: Styles.values.spacing,
        borderRadius: 15,
      }}
    >
      <Navbar
        title={translate(translate.keys.editNutritionProfile)}
      >
        <RX.View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            [Styles.values.marginStart]: Styles.values.spacing,
          }}
        >
          <FilledButton
            mode={FilledButton.mode.link}
            label={translate(translate.keys.Save)}
            onPress={_onSubmit}
            loading={props.loading}
            flat
          />
        </RX.View>
      </Navbar>

      <NutritionProfileForm
        {...props}
        ref={(ref: any) => formRef = ref}
      />
    </RX.View>
  )

}

export const NutritionProfileFormContainer = (props: NutritionProfileFormCommonProps) => {
  const [updateNutritionProfile, { loading, error }] = useMutation<NutritionProfileMutation, NutritionProfileMutationVariables>(gql`
    mutation NutritionProfileMutation($nutritionProfile: NutritionProfileInput!) {
      updateNutritionProfile(nutritionProfile: $nutritionProfile) {
        ...NutritionProfileFormNutritionProfile
      }
    }

    ${NutritionProfileForm.fragments.nutritionProfile}
  `, {
    client
  })

  const Element = props.modal ? NutritionProfileModal : NutritionProfileForm

  return (
    <Element
      {...props}
      onNutritionProfileUpdate={nutritionProfile => updateNutritionProfile({
        variables: { nutritionProfile },
        update: (proxy, mutationResult) => {
          if (mutationResult.data) {
            const meQuery = proxy.readQuery<MeQuery>({
              query: MeOperation,
            })
            if (!meQuery) return

            proxy.writeQuery<MeQuery>({
              query: MeOperation,
              data: {
                me: {
                  ...meQuery.me,
                  nutritionProfile: mutationResult.data.updateNutritionProfile,
                },
              }
            })
          }
        }
      })}
      loading={loading}
      errors={error ? error.graphQLErrors.map(i => i.message) : []}
    />
  )
}
