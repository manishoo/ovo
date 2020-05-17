/*
 * PlanEdit.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import { ApolloError, gql, useMutation, useQuery } from '@apollo/client'
import FilledButton from '@Common/FilledButton/FilledButton'
import { getTranslatedText } from '@Common/Input/IntlInput'
import { translate } from '@Common/LocalizedText/LocalizedText'
import Navbar from '@Common/Navbar/Navbar'
import PlanForm from '@Common/PlanForm/PlanForm'
import LocationStore from '@Services/LocationStore'
import ToastStore, { ToastTypes } from '@Services/ToastStore'
import getGraphQLUserInputErrors from '@Utils/get-graphql-user-input-errors'
import { useCalendarContext } from '@Views/CalendarScreen/CalendarScreen'
import {
  PlanEditDeleteMutation,
  PlanEditDeleteMutationVariables
} from '@Views/CalendarScreen/components/PlanEdit/types/PlanEditDeleteMutation'
import { PlanEditQuery, PlanEditQueryVariables } from '@Views/CalendarScreen/components/PlanEdit/types/PlanEditQuery'
import {
  PlanEditUpdateMutation,
  PlanEditUpdateMutationVariables
} from '@Views/CalendarScreen/components/PlanEdit/types/PlanEditUpdateMutation'
import { showDeletePrmopt } from '@Views/MealForm/MealForm'
import { useCallback } from 'react'
import RX from 'reactxp'


const _styles = {
  container: RX.Styles.createViewStyle({
    //
  }),
}

interface PlanEditProps {
  style?: any,
}

const PlanEdit = ({ style }: PlanEditProps) => {
  const { planId } = useCalendarContext()
  const { data, loading, error } = useGetPlan(planId)
  const [updatePlan, {}] = useUpdatePlan()
  const [deletePlan] = useDeletePlan(planId)

  const _onDelete = useCallback(() => {
    showDeletePrmopt(() => deletePlan()
      .then(({ errors }) => LocationStore.navigate({}, 'back'))
      .catch(e => {
        if (e instanceof ApolloError) {
          e.graphQLErrors.map(error => ToastStore.toast({ message: error.message, type: ToastTypes.Error }))
        }
      })
    )
  }, [])

  if (!data) return null

  return (
    <RX.View
      style={{
        width: 260 + 330,
        alignSelf: 'center',
        // alignItems: 'flex-start'
      }}
    >
      <Navbar
        title={getTranslatedText(data.plan.name || [])}
      >
        <FilledButton
          label={translate('Delete')}
          onPress={_onDelete}
          mode={FilledButton.mode.danger}
        />
      </Navbar>

      <PlanForm
        fieldErrors={getGraphQLUserInputErrors(error)}
        plan={data.plan}
        onChange={input => updatePlan({ variables: { input, id: planId } })}
        submitDebounce={500}
      />
    </RX.View>
  )
}

PlanEdit.fragments = {
  plan: gql`
    fragment PlanEditPlan on Plan {
      id
      name { text locale }
      description { text locale }
      coverImage { url }
    }
  `
}

PlanEdit.operations = {
  getPlan: gql`
    query PlanEditQuery($id: ObjectId!) {
      plan(planId: $id) {
        ...PlanEditPlan
      }
    }

    ${PlanEdit.fragments.plan}
  `,
  updatePlan: gql`
    mutation PlanEditUpdateMutation($id: ObjectId!, $input: PlanInput!) {
      updatePlan(id: $id, planInput: $input) {
        ...PlanEditPlan
      }
    }

    ${PlanEdit.fragments.plan}
  `,
  deletePlan: gql`
    mutation PlanEditDeleteMutation($id: ObjectId!) {
      deletePlan(planId: $id)
    }
  `,
}

function useGetPlan(id: string) {
  return useQuery<PlanEditQuery, PlanEditQueryVariables>(PlanEdit.operations.getPlan, {
    variables: {
      id
    }
  })
}

function useUpdatePlan() {
  return useMutation<PlanEditUpdateMutation, PlanEditUpdateMutationVariables>(PlanEdit.operations.updatePlan, {})
}

function useDeletePlan(id: string) {
  return useMutation<PlanEditDeleteMutation, PlanEditDeleteMutationVariables>(PlanEdit.operations.deletePlan, {
    variables: {
      id
    }
  })
}

export default PlanEdit
