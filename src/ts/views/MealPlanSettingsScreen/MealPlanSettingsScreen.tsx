/*
 * MealPlanSettingsScreen.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import { ExecutionResult, gql, useMutation } from '@apollo/client'
import client from '@App/client'
import Styles from '@App/Styles'
import { ThemeContext } from '@App/ThemeContext'
import LoadingIndicator from '@Common/LoadingIndicator/LoadingIndicator'
import { translate } from '@Common/LocalizedText/LocalizedText'
import Modal from '@Common/Modal/Modal'
import Navbar from '@Common/Navbar/Navbar'
import Page from '@Common/Page'
import Text from '@Common/Text/Text'
import UserMeals from '@Common/UserMeals/UserMeals'
import { useMe } from '@Models/graphql/me/me'
import { Me } from '@Models/graphql/me/types/Me'
import trimTypeName from '@Utils/trim-type-name'
import MealSettingsScreen from '@Views/MealSettingsScreen/MealSettingsScreen'
import { PureComponent } from 'react'
import RX from 'reactxp'
import {
  MealPlanSettingsScreenMutation,
  MealPlanSettingsScreenMutation_updateUserMeals,
  MealPlanSettingsScreenMutationVariables
} from './types/MealPlanSettingsScreenMutation'


interface MealPlanSettingsScreenCommonProps {
  style?: any,
  onSubmit: (meals: MealPlanSettingsScreenMutation_updateUserMeals[]) => void,
  submitMustSave?: boolean,
  me: Me | null,
}

interface MealPlanSettingsScreenProps extends MealPlanSettingsScreenCommonProps {
  onUpdateMealPlanSettings: (variables: MealPlanSettingsScreenMutationVariables) => Promise<ExecutionResult<MealPlanSettingsScreenMutation>>,
  loading?: boolean,
}

const MODAL_ID = 'mealPlanSettingsModal'

class MealPlanSettingsScreen extends PureComponent<MealPlanSettingsScreenProps> {
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
    const { me } = this.props
    if (!me) return

    return (
      <Page lazyRender>
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
      me={useMe()}
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
