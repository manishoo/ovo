/*
 * MealSettingsScreen.tsx
 * Copyright: Ouranos Studio 2019
 */

import { useMutation } from '@apollo/react-hooks'
import client from '@App/client'
import Styles from '@App/Styles'
import { Theme } from '@App/Theme'
import Input from '@Common/Input/Input'
import LoadingIndicator from '@Common/LoadingIndicator/LoadingIndicator'
import { translate } from '@Common/LocalizedText/LocalizedText'
import Modal from '@Common/Modal/Modal'
import Navbar from '@Common/Navbar/Navbar'
import Select from '@Common/Select/Select'
import Text from '@Common/Text/Text'
import { MealAvailableTime, MealSize } from '@Models/global-types'
import { createId } from '@Utils/create-id'
import trimTypeName from '@Utils/trim-type-name'
import { MealSettingsMeal } from '@Views/MealSettingsScreen/types/MealSettingsMeal'
import {
  MealSettingsScreenMutation,
  MealSettingsScreenMutationVariables
} from '@Views/MealSettingsScreen/types/MealSettingsScreenMutation'
import gql from 'graphql-tag'
import React from 'react'
import { ExecutionResult } from 'react-apollo'
import RX from 'reactxp'


interface MealSettingsScreenCommonProps {
  style?: any,
  meal?: MealSettingsMeal,
  onSubmit: (meal: MealSettingsMeal) => void,
  theme: Theme,
  submitMustSave?: boolean,
}

interface MealSettingsScreenProps extends MealSettingsScreenCommonProps {
  onUpdateMealSettings: (variables: MealSettingsScreenMutationVariables) => Promise<ExecutionResult<MealSettingsScreenMutation>>,
  loading?: boolean,
}

interface MealSettingsScreenState {
  meal: MealSettingsMeal
}

const MODAL_ID = 'mealSettingsModal'

class MealSettingsScreen extends RX.Component<MealSettingsScreenProps, MealSettingsScreenState> {
  static fragments = {
    mealSettingsMeal: gql`
      fragment MealSettingsMeal on UserMeal {
        id
        availableTime
        size
        cook
        time
        name
      }
    `
  }
  static operations = {
    updateMealSettings: gql`
      mutation MealSettingsScreenMutation($userMeal: UserMealInput!) {
        updateMealSetting(userMeal: $userMeal) {
          ...MealSettingsMeal
        }
      }

      ${MealSettingsScreen.fragments.mealSettingsMeal}
    `
  }

  constructor(props) {
    super(props)

    this.state = {
      meal: props.meal || {
        availableTime: MealAvailableTime.someTime,
        size: MealSize.normal,
        cook: true,
        id: createId(),
        name: translate(translate.keys.Snack),
        time: '09:00', //FIXME use now!
      }
    }
  }

  static showModal = (props: MealSettingsScreenCommonProps) => {
    // const M = React.cloneElement(RX.View, {type: '', pro})
    return (
      RX.Modal.show(
        <Modal
          key={MODAL_ID}
          modalId={MODAL_ID}
          fullWidth
          fullHeight
        >
          <MealSettingsScreenContainer
            {...props}
          />
        </Modal>,
        MODAL_ID,
      )
    )
  }

  render() {
    const { meal } = this.state
    const { theme } = this.props

    return (
      <RX.View
        style={[
          styles.container,
          {
            backgroundColor: theme.colors.bg,
          }
        ]}
      >
        <Navbar
          inModal
          onBackPress={() => Modal.dismissAnimated(MODAL_ID)}
          title={translate(translate.keys.editMealSettings)}
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
              onPress={this._onSubmit}
            />
            {
              this.props.loading &&
              <LoadingIndicator size={30} />
            }
          </RX.View>
        </Navbar>

        <RX.View style={styles.innerContainer}>
          <Input
            value={meal.name}
            label={translate(translate.keys.Name)}
            onChangeText={name => this.setState(({ meal }) => ({
              meal: {
                ...meal,
                name,
              }
            }))}
          />

          <Select
            label={translate(translate.keys.mealSize)}
            value={meal.size}
            options={[
              ...Object.keys(MealSize).map(key => ({
                value: MealSize[key],
                text: <Text translate={key} />,
              }))
            ]}
            onChange={size => this.setState(({ meal }) => ({
              meal: {
                ...meal,
                size,
              }
            }))}
            style={{
              minWidth: 100,
            }}
          />

          <Select
            label={translate(translate.keys.availableTime)}
            value={meal.availableTime}
            options={[
              ...Object.keys(MealAvailableTime).map(key => ({
                value: MealAvailableTime[key],
                text: <Text translate={key} />,
              }))
            ]}
            onChange={availableTime => this.setState(({ meal }) => ({
              meal: {
                ...meal,
                availableTime,
              }
            }))}
            style={{
              minWidth: 100,
            }}
          />
        </RX.View>
      </RX.View>
    )
  }

  private _onSubmit = () => {
    const { meal } = this.state

    if (this.props.submitMustSave) {
      return this.props.onUpdateMealSettings({
        userMeal: trimTypeName(meal),
      })
        .then(() => {
          Modal.dismissAnimated(MODAL_ID).then(() => this.props.onSubmit(meal))
        })
    }

    return Modal.dismissAnimated(MODAL_ID).then(() => this.props.onSubmit(meal))
  }
}

export default function MealSettingsScreenContainer(props: MealSettingsScreenCommonProps) {
  const [updateMealSetting, { loading }] = useMutation<MealSettingsScreenMutation, MealSettingsScreenMutationVariables>(MealSettingsScreen.operations.updateMealSettings, {
    client
  })

  return (
    <MealSettingsScreen
      {...props}
      onUpdateMealSettings={variables => updateMealSetting({ variables })}
      loading={loading}
    />
  )
}

MealSettingsScreenContainer.fragments = MealSettingsScreen.fragments
MealSettingsScreenContainer.operations = MealSettingsScreen.operations
MealSettingsScreenContainer.showModal = MealSettingsScreen.showModal

const styles = {
  container: RX.Styles.createViewStyle({
    padding: Styles.values.spacing,
    borderRadius: 15,
  }),
  innerContainer: RX.Styles.createViewStyle({})
}
