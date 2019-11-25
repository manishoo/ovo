/*
 * PublishRecipe.tsx
 * Copyright: Ouranos Studio 2019
 */

import { useMutation } from '@apollo/react-hooks'
import Styles from '@App/Styles'
import FilledButton from '@Common/FilledButton/FilledButton'
import { translate } from '@Common/LocalizedText/LocalizedText'
import { IngredientInput, InstructionInput, RecipeInput, RecipeStatus, Role } from '@Models/global-types'
import authorized from '@Utils/authorized'
import { PROFILE_RECIPES_QUERY } from '@Views/ProfileScreen/components/ProfileRecipes/ProfileRecipes'
import { ProfileRecipesFragments } from '@Views/ProfileScreen/components/ProfileRecipes/ProfileRecipesFragments'
import {
  PublishRecipeUpdateMutation,
  PublishRecipeUpdateMutationVariables
} from '@Views/Recipe/components/types/PublishRecipeUpdateMutation'
import { PublicRecipe } from '@Views/Recipe/types/PublicRecipe'
import { Me } from '@Views/Register/types/Me'
import gql from 'graphql-tag'
import RX from 'reactxp'


interface PublishRecipeProps {
  style?: any,
  recipe: PublicRecipe,
  user: Me,
}

export default function PublishRecipe({ recipe, user }: PublishRecipeProps) {
  const [updateRecipe, { loading }] = useMutation<PublishRecipeUpdateMutation, PublishRecipeUpdateMutationVariables>(gql`
    mutation PublishRecipeUpdateMutation($id: ObjectId!, $recipe: RecipeInput!) {
      updateRecipe(recipeId: $id, recipe: $recipe) { ...MyRecipe }
    }

    ${ProfileRecipesFragments.myRecipe}
  `, {
    update: (proxy, { data }) => {
      const { recipes } = proxy.readQuery({
        query: PROFILE_RECIPES_QUERY,
        variables: {
          userId: user.id,
          size: 20,
        },
      })

      proxy.writeQuery({
        query: PROFILE_RECIPES_QUERY,
        variables: {
          userId: user.id,
          size: 20,
        },
        data: {
          recipes: {
            ...recipes,
            recipes: recipes.recipes.map((r: any) => {
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

  const _getRecipe = (accept?: boolean): RecipeInput => {
    return {
      title: recipe.title.map(i => ({ locale: i.locale, text: i.text })),
      description: recipe.description.map(i => ({ locale: i.locale, text: i.text })),
      ingredients: recipe.ingredients.map(ingredient => ({
        food: ingredient.food && ingredient.food.id,
        name: ingredient.name && ingredient.name.map(tr => ({ text: tr.text, locale: tr.locale })),
        amount: ingredient.amount,
        weight: ingredient.weight ? ingredient.weight.id : undefined,
        customUnit: ingredient.customUnit,
        description: ingredient.description.map(i => ({ locale: i.locale, text: i.text })),
      }) as IngredientInput),
      instructions: recipe.instructions.map(instruction => ({
        text: instruction.text.map(i => ({ locale: i.locale, text: i.text })),
        step: instruction.step,
      }) as InstructionInput),
      serving: recipe.serving,
      timing: {
        totalTime: recipe.timing.totalTime,
        prepTime: recipe.timing.prepTime,
        cookTime: recipe.timing.cookTime,
      },
      difficulty: recipe.difficulty,
      slug: recipe.slug,
      status: _getStatus(accept)
    }
  }

  const _onPress = (accept?: boolean) => () => {
    return updateRecipe({
      variables: {
        id: recipe.id,
        recipe: _getRecipe(accept),
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
