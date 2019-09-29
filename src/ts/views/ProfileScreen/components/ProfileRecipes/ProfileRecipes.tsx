/*
 * ProfileRecipes.tsx
 * Copyright: Ouranos Studio 2019
 */

import RecipesList from 'common/RecipesList/RecipesList'
import gql from 'graphql-tag'
import RX from 'reactxp'
import { ComponentBase } from 'resub'
import client from 'src/ts/app/client'
import { UserRole } from 'src/ts/models/global-types'
import UserStore from 'src/ts/stores/UserStore'
import { ProfileRecipesFragments } from 'src/ts/views/ProfileScreen/components/ProfileRecipes/ProfileRecipesFragments'
import {
  ProfileRecipesQuery,
  ProfileRecipesQueryVariables
} from 'src/ts/views/ProfileScreen/components/ProfileRecipes/types/ProfileRecipesQuery'
import { RecipesListQuery_recipes_recipes } from 'src/ts/views/ProfileScreen/types/RecipesListQuery'
import { Me } from 'src/ts/views/Register/types/Me'


interface ProfileRecipesProps {
  userId: string,
  onHeightChange: (height: number) => void,
  showAddRecipe?: boolean,
}

interface ProfileRecipesState {
  recipes: RecipesListQuery_recipes_recipes[],
  hasNext?: boolean,
  me: Me,
  fetching: boolean,
}

export default class ProfileRecipes extends ComponentBase<ProfileRecipesProps, ProfileRecipesState> {
  protected _buildInitialState(): Readonly<ProfileRecipesState> {
    return {
      recipes: [],
      me: UserStore.getUser(),
      fetching: false,
    }
  }

  componentDidMount() {
    this.fetchMore()
  }

  render() {
    return (
      <RecipesList
        recipes={this.state.recipes}
        showAddRecipe={this.props.showAddRecipe}
        hideAvatar={this.state.me.role === UserRole.user}
        onLayout={e => this.props.onHeightChange(e.height)}
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
          fetchPolicy: 'cache-first',
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
}

export const PROFILE_RECIPES_QUERY = gql`
  query ProfileRecipesQuery($lastId: String, $userId: String, $size: Int) {
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
