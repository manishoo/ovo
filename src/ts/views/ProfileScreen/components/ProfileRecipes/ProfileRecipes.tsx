/*
 * ProfileRecipes.tsx
 * Copyright: Ouranos Studio 2019
 */

import client from '@App/client'
import RecipesList from '@Common/RecipesList/RecipesList'
import { Role } from '@Models/global-types'
import UserStore from '@Services/UserStore'
import { ProfileRecipesFragments } from '@Views/ProfileScreen/components/ProfileRecipes/ProfileRecipesFragments'
import {
  ProfileRecipesQuery,
  ProfileRecipesQuery_recipes_recipes,
  ProfileRecipesQueryVariables
} from '@Views/ProfileScreen/components/ProfileRecipes/types/ProfileRecipesQuery'
import { Me } from '@Views/Register/types/Me'
import gql from 'graphql-tag'
import RX from 'reactxp'
import { ComponentBase } from 'resub'


interface ProfileRecipesProps {
  userId: string,
  onHeightChange: (height: number) => void,
  showAddRecipe?: boolean,
}

interface ProfileRecipesState {
  recipes: ProfileRecipesQuery_recipes_recipes[],
  hasNext?: boolean,
  me: Me,
  fetching: boolean,
}

export default class ProfileRecipes extends ComponentBase<ProfileRecipesProps, ProfileRecipesState> {
  componentDidMount() {
    this.fetchMore()
  }

  public render() {
    return (
      <RecipesList
        recipes={this.state.recipes}
        showAddRecipe={this.props.showAddRecipe}
        hideAvatar={this.state.me.role === Role.user}
        onLayout={e => this.props.onHeightChange(e.height)}
        loading={this.state.fetching}
      />
    )
  }

  public fetchMore = () => {
    if (!this.state.hasNext && this.state.recipes.length > 0) return null
    if (this.state.fetching) return null

    let lastId

    const lastItem = this.state.recipes[this.state.recipes.length - 1]
    if (lastItem) {
      lastId = lastItem.id
    }

    return new Promise(((resolve, reject) => {
      this.setState({ fetching: true }, () => {
        client.query<ProfileRecipesQuery, ProfileRecipesQueryVariables>({
          query: PROFILE_RECIPES_QUERY,
          variables: {
            userId: this.props.userId,
            size: 20,
            lastId
          },
        })
          .then(({ data }) => {
            if (data) {
              this.setState({
                fetching: false,
                recipes: [
                  ...this.state.recipes,
                  ...data.recipes.recipes
                ],
                hasNext: data.recipes.pagination.hasNext,
              }, resolve)
            }
          })
          .catch(reject)
      })
    }))
  }

  protected _buildInitialState(): Readonly<ProfileRecipesState> {
    return {
      recipes: [],
      me: UserStore.getUser(),
      fetching: false,
    }
  }
}

export const PROFILE_RECIPES_QUERY = gql`
  query ProfileRecipesQuery($lastId: ObjectId, $userId: ObjectId, $size: Int) {
    recipes(lastId: $lastId, userId: $userId, size: $size) {
      recipes {
        ...MyRecipe
      }
      pagination {
        hasNext
        lastId
      }
    }
  }

  ${ProfileRecipesFragments.myRecipe}
`
