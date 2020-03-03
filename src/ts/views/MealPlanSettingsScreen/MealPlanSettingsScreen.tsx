/*
 * MealPlanSettingsScreen.tsx
 * Copyright: Ouranos Studio 2019
 */

import { useMutation } from '@apollo/react-hooks'
import client from '@App/client'
import Styles from '@App/Styles'
import { ThemeContext } from '@App/ThemeContext'
import Page from '@Common/Page'
import LoadingIndicator from '@Common/LoadingIndicator/LoadingIndicator'
import { translate } from '@Common/LocalizedText/LocalizedText'
import Modal from '@Common/Modal/Modal'
import Navbar from '@Common/Navbar/Navbar'
import { NutritionProfileFormContainer } from '@Common/NutritionProfileForm/NutritionProfileForm'
import Text from '@Common/Text/Text'
import UserMeals from '@Common/UserMeals/UserMeals'
import { Me } from '@Services/types/Me'
import UserStore from '@Services/UserService'
import trimTypeName from '@Utils/trim-type-name'
import { MealPlanSettingsMeal } from '@Views/MealPlanSettingsScreen/types/MealPlanSettingsMeal'
import {
  MealPlanSettingsScreenMutation,
  MealPlanSettingsScreenMutationVariables
} from '@Views/MealPlanSettingsScreen/types/MealPlanSettingsScreenMutation'
import MealSettingsScreen from '@Views/MealSettingsScreen/MealSettingsScreen'
import gql from 'graphql-tag'
import { ExecutionResult } from 'react-apollo'
import RX from 'reactxp'
import { ComponentBase } from 'resub'


interface MealPlanSettingsScreenCommonProps {
  style?: any,
  onSubmit: (meals: MealPlanSettingsMeal[]) => void,
  submitMustSave?: boolean,
}

interface MealPlanSettingsScreenProps extends MealPlanSettingsScreenCommonProps {
  onUpdateMealPlanSettings: (variables: MealPlanSettingsScreenMutationVariables) => Promise<ExecutionResult<MealPlanSettingsScreenMutation>>,
  loading?: boolean,
}

interface MealPlanSettingsScreenState {
  me: Me | null,
}

const MODAL_ID = 'mealPlanSettingsModal'

class MealPlanSettingsScreen extends ComponentBase<MealPlanSettingsScreenProps, MealPlanSettingsScreenState> {
  static operations = {
    updateMealPlanSettings: gql`
      mutation MealPlanSettingsScreenMutation($userMeals: [UserMealInput!]!) {
        updateUserMeals(userMeals: $userMeals) {
          ...MealSettingsMeal
        }
      }

      ${MealSettingsScreen.fragments.mealSettingsMeal}
    `
  }

  protected _buildState(props: MealPlanSettingsScreenProps, initialBuild: boolean): Partial<MealPlanSettingsScreenState> | undefined {
    return {
      me: UserStore.getUser(),
    }
  }

  private _userMeals: null | UserMeals = null

  static showModal = (props: MealPlanSettingsScreenCommonProps) => (
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
            <MealPlanSettingsScreenContainer
              {...props}
            />
          </Modal>
        )}
      </ThemeContext.Consumer>,
      MODAL_ID,
    )
  )

  render() {
    const { me } = this.state
    if (!me) return

    return (
      <Page>
        <Navbar
          title={translate(translate.keys.editMealPlanSettings)}
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
          <UserMeals
            ref={ref => this._userMeals = ref}
            meals={me.meals}
          />
        </RX.View>
      </Page>
    )
  }

  private _onSubmit = () => {
    const userMeals = this._userMeals
    if (!userMeals) throw new Error()
    const meals = userMeals.getMeals()

    return this.props.onUpdateMealPlanSettings({
      userMeals: meals.map(trimTypeName),
    })
      .then(() => {
        Modal.dismissAnimated(MODAL_ID).then(() => this.props.onSubmit(meals))
      })
  }
}

export default function MealPlanSettingsScreenContainer(props: MealPlanSettingsScreenCommonProps) {
  const [updateUserMeals, { loading }] = useMutation<MealPlanSettingsScreenMutation, MealPlanSettingsScreenMutationVariables>(MealPlanSettingsScreen.operations.updateMealPlanSettings, {
    client
  })

  return (
    <MealPlanSettingsScreen
      {...props}
      onUpdateMealPlanSettings={variables => updateUserMeals({ variables })}
      loading={loading}
    />
  )
}

MealPlanSettingsScreenContainer.operations = MealPlanSettingsScreen.operations
MealPlanSettingsScreenContainer.showModal = MealPlanSettingsScreen.showModal

const styles = {
  innerContainer: RX.Styles.createViewStyle({})
}
