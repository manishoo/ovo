/*
 * PlansList.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import { gql, useQuery } from '@apollo/client'
import Styles from '@App/Styles'
import AddCell from '@Common/AddCell/AddCell'
import Link from '@Common/Link/Link'
import PlanCard, { PlanCardFragments } from '@Common/PlanCard/PlanCard'
import { Routes } from '@Models/common'
import LocationStore from '@Services/LocationStore'
import { PlansListPlansQuery } from '@Views/ProfileScreen/components/PlansList/types/PlansListPlansQuery'
import RX from 'reactxp'


const _styles = {
  item: RX.Styles.createViewStyle({
    marginTop: Styles.values.spacing,
  }),
  container: RX.Styles.createViewStyle({
    flexDirection: 'row',
    flexWrap: 'wrap',
  }),
}

interface PlansListProps {
  style?: any,
  cardStyle?: any,
  showAdd?: boolean,
}

const PlansList = ({ style, showAdd, cardStyle }: PlansListProps) => {
  const { data } = usePlans()

  return (
    <RX.View
      style={[
        _styles.container,
        style,
      ]}
    >
      {
        showAdd &&
        <AddCell
          translatedText='CreateNewMeal'
          size={330}
          innerContainerStyle={{
            height: 220,
          }}
          wrapperStyle={{
            height: 220,
          }}
          onPress={() => LocationStore.navigate({}, Routes.newPlan)}
        />
      }

      {
        data && data.plans.map(plan => (
          <Link
            to={`${Routes.plan}/${plan.id}`}
            style={_styles.item}
          >
            <PlanCard
              plan={plan}
              style={cardStyle}
            />
          </Link>
        ))
      }
    </RX.View>
  )
}

export const usePlans = () => {
  return useQuery<PlansListPlansQuery>(operations.plansQuery, {
    fetchPolicy: 'cache-and-network',
  })
}

export const operations = {
  plansQuery: gql`
    query PlansListPlansQuery($userId: String) {
      plans(userId: $userId) {
        ...PlanCardPlan
      }
    }

    ${PlanCardFragments.plan}
  `
}

export default PlansList
