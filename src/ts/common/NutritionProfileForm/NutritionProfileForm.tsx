/*
 * NutritionProfileForm.tsx
 * Copyright: Ouranos Studio 2020
 */

import { useMutation } from '@apollo/react-hooks'
import client from '@App/client'
import Styles from '@App/Styles'
import { Theme } from '@App/Theme'
import Page from '@Common/Page'
import FilledButton from '@Common/FilledButton/FilledButton'
import InputNumber from '@Common/Input/InputNumber'
import LoadingIndicator from '@Common/LoadingIndicator/LoadingIndicator'
import { translate } from '@Common/LocalizedText/LocalizedText'
import Modal from '@Common/Modal/Modal'
import Navbar from '@Common/Navbar/Navbar'
import {
  NutritionProfileMutation,
  NutritionProfileMutationVariables
} from '@Common/NutritionProfileForm/types/NutritionProfileMutation'
import Text from '@Common/Text/Text'
import { NutritionProfileInput, NutritionProfileMode } from '@Models/global-types'
import UserService from '@Services/UserService'
import trimTypeName from '@Utils/trim-type-name'
import { ExecutionResult } from 'graphql'
import gql from 'graphql-tag'
import RX from 'reactxp'
import { NutritionProfileFormNutritionProfile } from './types/NutritionProfileFormNutritionProfile'
import { ThemeContext } from 'src/ts/app/ThemeContext'


const MODAL_ID = 'NutritionProfileForm'

const styles = {
  container: RX.Styles.createViewStyle({}),
  minMax: RX.Styles.createViewStyle({
    width: 80,
    marginBottom: 0,
    [Styles.values.marginEnd]: Styles.values.spacing / 4
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
  error?: boolean,
  style?: any,
}

interface NutritionProfileFormState {
  nutritionProfile: NutritionProfileFormNutritionProfile,
}

export default class NutritionProfileForm extends RX.Component<NutritionProfileFormProps, NutritionProfileFormState> {
  constructor(props: NutritionProfileFormProps) {
    super(props)

    this.state = {
      nutritionProfile: props.nutritionProfile,
    }
  }

  render() {
    const { style } = this.props
    const { nutritionProfile } = this.state

    return (
      <RX.View
        style={[styles.container, style]}
      >
        <InputNumber
          label={translate('calories')}
          value={nutritionProfile.calories}
          onChange={(calories) => this.setState(prevState => ({
            nutritionProfile: {
              ...prevState.nutritionProfile,
              calories: Number(calories),
            }
          }))}
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
      </RX.View>
    )
  }

  public getNutritionProfile = () => trimTypeName(this.state.nutritionProfile)

  private _renderPercentForm = (label: any, field: 'carbs' | 'protein' | 'fat') => {
    const { nutritionProfile } = this.state

    return (
      <RX.View
        style={{
          flexDirection: 'row',
        }}
      >
        <InputNumber
          label={label}
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
    )
  }

  private _renderRangeForm = (label: any, field: 'carbs' | 'protein' | 'fat') => {
    const { nutritionProfile } = this.state

    return (
      <RX.View
        style={{
          flexDirection: 'row',
          alignItems: 'flex-end',
          marginBottom: Styles.values.spacing,
        }}
      >
        <InputNumber
          label={label}
          value={nutritionProfile[field].min}
          onChange={(min) => this.setState(prevState => ({
            nutritionProfile: {
              ...prevState.nutritionProfile,
              [field]: {
                ...prevState.nutritionProfile[field],
                min: Number(min),
              },
            }
          }))}
          style={styles.minMax}
        />
        <Text translate={'g'} style={{ fontSize: 12 }} />
        <RX.View style={{ width: Styles.values.spacing / 2 }} />
        <Text translate={'to'} />
        <RX.View style={{ width: Styles.values.spacing / 2 }} />
        <InputNumber
          value={nutritionProfile[field].max}
          onChange={(max) => this.setState(prevState => ({
            nutritionProfile: {
              ...prevState.nutritionProfile,
              [field]: {
                ...prevState.nutritionProfile[field],
                max: Number(max),
              },
            }
          }))}
          style={styles.minMax}
        />
        <Text translate={'g'} style={{ fontSize: 12 }} />
      </RX.View>
    )
  }

  static fragments = {
    nutritionProfile: gql`
      fragment NutritionProfileFormNutritionProfile on NutritionProfile {
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

  public static showModal = (props: NutritionProfileFormCommonProps) => (
    RX.Modal.show(
      <ThemeContext.Consumer>
        {({ theme }) => (
          <Modal
            key={MODAL_ID}
            modalId={MODAL_ID}
            fullWidth
            fullHeight
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
}

const NutritionProfileModal = (props: NutritionProfileFormProps) => {
  let formRef: any

  return (
    <RX.View
      style={{
        backgroundColor: props.theme.colors.cardBg,
        padding: Styles.values.spacing,
        borderRadius: 15,
      }}
    >
      <Navbar
        title={translate(translate.keys.editMealPlanSettings)}
        inModal
        onBackPress={() => Modal.dismissAnimated(MODAL_ID)}
      >
        <RX.View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            [Styles.values.marginStart]: Styles.values.spacing,
          }}
        >
          <Text
            translate={translate.keys.Save}
            onPress={() => formRef && props.onNutritionProfileUpdate(formRef.getNutritionProfile()).then(() => Modal.dismissAnimated(MODAL_ID))}
          />
          {
            props.loading &&
            <LoadingIndicator size={30} />
          }
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
          if (mutationResult.data) UserService.setNutritionProfile(mutationResult.data.updateNutritionProfile)
        }
      })}
      loading={loading}
      error={!!error}
    />
  )
}
