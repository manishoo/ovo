/*
 * PublishRecipe.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import { gql, useMutation } from '@apollo/client'
import Styles from '@App/Styles'
import FilledButton from '@Common/FilledButton/FilledButton'
import { translate } from '@Common/LocalizedText/LocalizedText'
import { RecipeStatus, Role } from '@Models/global-types'
import { Me } from '@Models/graphql/me/types/Me'
import authorized from '@Utils/authorized'
import { transformRecipeToRecipeInput } from '@Utils/transformers/recipe.transformer'
import { ProfileRecipesQuery, ProfileRecipesQueryVariables } from '@Views/ProfileScreen/types/ProfileRecipesQuery'
import { PROFILE_RECIPES_QUERY } from '@Views/ProfileScreen/useProfileTabs.hook'
import {
  PublishRecipeUpdateMutation,
  PublishRecipeUpdateMutationVariables
} from '@Views/RecipeScreen/components/types/PublishRecipeUpdateMutation'
import { fragments as RecipeScreenFragments } from '@Views/RecipeScreen/RecipeScreen'
import { Recipe } from '@Views/RecipeScreen/types/Recipe'
import RX from 'reactxp'


interface PublishRecipeProps {
  style?: any,
  recipe: Recipe,
  user: Me,
}

export default function PublishRecipe({ recipe, user }: PublishRecipeProps) {
  const [updateRecipe, { loading }] = useMutation<PublishRecipeUpdateMutation, PublishRecipeUpdateMutationVariables>(gql`
    mutation PublishRecipeUpdateMutation($id: ObjectId!, $recipe: RecipeInput!) {
      updateRecipe(recipeId: $id, recipe: $recipe) { ...Recipe }
    }

    ${RecipeScreenFragments.recipe}
  `, {
    update: (proxy, { data }) => {
      if (!data) return
      const profileRecipesQuery = proxy.readQuery<ProfileRecipesQuery, ProfileRecipesQueryVariables>({
        query: PROFILE_RECIPES_QUERY,
        variables: {
          userId: user.id,
          size: 20,
        },
      })
      if (!profileRecipesQuery) return

      proxy.writeQuery({
        query: PROFILE_RECIPES_QUERY,
        variables: {
          userId: user.id,
          size: 20,
        },
        data: {
          recipes: {
            ...profileRecipesQuery.recipes,
            recipes: profileRecipesQuery.recipes.recipes.map((r: any) => {
              if (r.id === data.updateRecipe.id) {
                return Object.assign({}, r, data.updateRecipe)
              }

              return r
            })
          },
        }
      })
    }
  })

  const _getLabel = () => {
    if (
      (user.role === Role.operator) ||
      (user.role === Role.admin) ||
      (user.id !== recipe.author.id) // If it wasn't your recipe
    ) {
      if (recipe.status === RecipeStatus.review) {
        if (loading) {
          return translate('Rejecting')
        }

        return translate('Reject Request')
      }
    }

    if (recipe.status === RecipeStatus.public) {
      if (loading) {
        return translate('Bringing down')
      }

      return translate('Bring down')
    }

    if (recipe.status === RecipeStatus.private) {
      if (loading) {
        return translate('Requesting for Publication')
      }

      return translate('Request Publication')
    }

    if (recipe.status === RecipeStatus.review) {
      if (loading) {
        return translate('Cancelling')
      }

      return translate('Cancel Publication Request')
    }
  }

  const _getStatus = (accept?: boolean) => {
    if (accept) return RecipeStatus.public

    switch (recipe.status) {
      case RecipeStatus.review:
        return RecipeStatus.private // reject
      case RecipeStatus.private:
        return RecipeStatus.review // request for publication
      case RecipeStatus.public:
        return RecipeStatus.private // restore
    }
  }

  const _onPress = (accept?: boolean) => () => {
    return updateRecipe({
      variables: {
        id: recipe.id,
        recipe: transformRecipeToRecipeInput({
          ...recipe,
          status: _getStatus(accept),
        }),
      }
    })
  }

  const _getLabel2 = () => {
    if (loading) {
      return translate('Accepting')
    }

    return translate('Accept Publication Request')
  }

  const _getFirstLabelMode = () => {
    switch (recipe.status) {
      case RecipeStatus.review:
        if (user.id === recipe.author.id) {
          return FilledButton.mode.default
        } else {
          return FilledButton.mode.danger
        }
      case RecipeStatus.private:
        return FilledButton.mode.primary
      case RecipeStatus.public:
      default:
        return FilledButton.mode.default
    }
  }

  return (
    <>
      {/**
       * Reject, Cancel and Publish button (for user and operator)
       * */}
      <FilledButton
        label={_getLabel()}
        onPress={_onPress()}
        mode={_getFirstLabelMode()}
        style={{
          [Styles.values.marginStart]: Styles.values.spacing / 2
        }}
      />
      {
        /**
         * Accept button (for operator)
         * */
        authorized([Role.operator], user.role) &&
        recipe.status === RecipeStatus.review &&
        <FilledButton
          label={_getLabel2()}
          onPress={_onPress(true)}
          mode={FilledButton.mode.primary}
          style={{
            [Styles.values.marginStart]: Styles.values.spacing / 2
          }}
        />
      }
    </>
  )
}
