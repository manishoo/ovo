/*
 * NewPlan.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import { gql, useMutation } from '@apollo/client'
import Styles from '@App/Styles'
import FilledButton from '@Common/FilledButton/FilledButton'
import { translate } from '@Common/LocalizedText/LocalizedText'
import Navbar from '@Common/Navbar/Navbar'
import Page from '@Common/Page'
import { PlanCardFragments } from '@Common/PlanCard/PlanCard'
import PlanForm from '@Common/PlanForm/PlanForm'
import { Routes } from '@Models/common'
import LocationStore from '@Services/LocationStore'
import getGraphQLUserInputErrors from '@Utils/get-graphql-user-input-errors'
import { NewPlanMutation, NewPlanMutationVariables } from '@Views/NewPlanScreen/types/NewPlanMutation'
import { useCallback, useMemo, useState } from 'react'
import RX from 'reactxp'


const FORM_WIDTH = 330

const _styles = {
  container: RX.Styles.createViewStyle({
    justifyContent: 'center',
    alignItems: 'center',
    padding: Styles.values.spacing,
  }),
  inputContainer: RX.Styles.createViewStyle({
    alignSelf: 'center',
    width: FORM_WIDTH,
  }),
  submitButton: RX.Styles.createViewStyle({
    marginTop: Styles.values.spacing
  }),
}

interface NewPlanProps {
  style?: any
}

const NewPlanScreen = ({ style, ...props }: NewPlanProps) => {
  const [planInput, setPlanInput] = useState({})
  const [newPlan, { error }] = useNewPlanMutation()

  const _handleSubmit = useCallback(() => {
    newPlan({
      variables: {
        planInput
      }
    })
      .then((result) => {
        if (!result.data) return

        LocationStore.navigate(props, `${Routes.plan}/${result.data.newPlan.id}`, { params: { replace: true } })
      })
  }, [
    planInput
  ])

  const defaultPlan = useMemo(() => ({
    name: [],
    description: [],
    coverImage: null,
    id: undefined
  }), [])

  return (
    <Page
      maxWidth={700}
      style={[_styles.container, style]}
    >
      <Navbar
        title={translate(translate.keys.NewPlan)}
      >
        <FilledButton
          label={translate('Create')}
          onPress={_handleSubmit}
          containerStyle={_styles.submitButton}
        />
      </Navbar>
      <RX.View style={_styles.inputContainer}>
        <PlanForm
          fieldErrors={getGraphQLUserInputErrors(error)}
          onChange={input => setPlanInput(input)}
          plan={defaultPlan}
        />
      </RX.View>
    </Page>
  )
}

const useNewPlanMutation = () => {
  return useMutation<NewPlanMutation, NewPlanMutationVariables>(NewPlanOperations.newPlan)
}

export const NewPlanOperations = {
  newPlan: gql`
    mutation NewPlanMutation($planInput: PlanInput!) {
      newPlan(planInput: $planInput) {
        ...PlanCardPlan
      }
    }

    ${PlanCardFragments.plan}
  `
}

export default NewPlanScreen
