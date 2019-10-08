/*
 * ProfileMeals.tsx
 * Copyright: Ouranos Studio 2019
 */

import gql from 'graphql-tag'
import RX from 'reactxp'
import { ComponentBase } from 'resub'
import client from 'src/ts/app/client'
import { Role } from 'src/ts/models/global-types'
import UserStore from 'src/ts/stores/UserStore'
import MealsList from 'src/ts/views/ProfileScreen/components/MealsList/MealsList'
import { ProfileMealsFragments } from 'src/ts/views/ProfileScreen/components/ProfileMeals/ProfileMealsFragments'
import {
  ProfileMealsQuery,
  ProfileMealsQuery_meals_meals,
  ProfileMealsQueryVariables
} from 'src/ts/views/ProfileScreen/components/ProfileMeals/types/ProfileMealsQuery'
import { Me } from 'src/ts/views/Register/types/Me'


interface ProfileMealsProps {
  onHeightChange: (height: number) => void,
  userId: string,
  showAddMeal?: boolean,
}

interface ProfileMealsState {
  meals: ProfileMealsQuery_meals_meals[],
  hasNext?: boolean,
  me: Me,
  fetching: boolean,
}

export default class ProfileMeals extends ComponentBase<ProfileMealsProps, ProfileMealsState> {
  protected _buildInitialState(): Readonly<ProfileMealsState> {
    return {
      meals: [],
      me: UserStore.getUser(),
      fetching: false,
    }
  }

  componentDidMount() {
    this.fetchMore()
  }

  render() {
    return (
      <MealsList
        meals={this.state.meals}
        showAddMeal={this.props.showAddMeal}
        hideAvatar={this.state.me.role === Role.user}
        onLayout={e => this.props.onHeightChange(e.height)}
      />
    )
  }

  public fetchMore = () => {
    if (!this.state.hasNext && this.state.meals.length > 0) return null
    if (this.state.fetching) return null

    let lastId

    const lastItem = this.state.meals[this.state.meals.length - 1]
    if (lastItem) {
      lastId = lastItem.id
    }

    return new Promise(((resolve, reject) => {
      this.setState({ fetching: true }, () => {
        client.query<ProfileMealsQuery, ProfileMealsQueryVariables>({
          query: PROFILE_MEALS_QUERY,
          fetchPolicy: 'cache-first',
          variables: {
            userId: this.props.userId,
            lastId
          },
        })
          .then(({ data }) => {
            if (data) {
              this.setState({
                fetching: false,
                meals: [
                  ...this.state.meals,
                  ...data.meals.meals
                ],
                hasNext: data.meals.pagination.hasNext,
              }, resolve)
            }
          })
          .catch(reject)
      })
    }))
  }
}

export const PROFILE_MEALS_QUERY = gql`
  query ProfileMealsQuery($lastId: String, $userId: String) {
    meals(lastId: $lastId, authorId: $userId) {
      meals {
        ...MyMeal
      }
      pagination {
        hasNext
        lastId
      }
    }
  }

  ${ProfileMealsFragments.myMeal}
`
