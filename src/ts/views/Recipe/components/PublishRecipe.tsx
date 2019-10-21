/*
 * PublishRecipe.tsx
 * Copyright: Ouranos Studio 2019
 */

import { useMutation } from '@apollo/react-hooks'
import FilledButton from 'common/FilledButton/FilledButton'
import { getLocalizedText } from 'common/LocalizedText/LocalizedText'
import gql from 'graphql-tag'
import RX from 'reactxp'
import Styles from 'src/ts/app/Styles'
import { IngredientInput, InstructionInput, RecipeInput, RecipeStatus } from 'src/ts/models/global-types'
import { PROFILE_RECIPES_QUERY } from 'src/ts/views/ProfileScreen/components/ProfileRecipes/ProfileRecipes'
import { ProfileRecipesFragments } from 'src/ts/views/ProfileScreen/components/ProfileRecipes/ProfileRecipesFragments'
import {
  PublishRecipeUpdateMutation,
  PublishRecipeUpdateMutationVariables
} from 'src/ts/views/Recipe/components/types/PublishRecipeUpdateMutation'
import { PublicRecipe } from 'src/ts/views/Recipe/types/PublicRecipe'


interface PublishRecipeProps {
  style?: any,
  recipe: PublicRecipe,
  userId: string,
}

export default function PublishRecipe({ recipe, userId }: PublishRecipeProps) {
  const [updateRecipe, { loading }] = useMutation<PublishRecipeUpdateMutation, PublishRecipeUpdateMutationVariables>(gql`
    mutation PublishRecipeUpdateMutation($id: String!, $recipe: RecipeInput!) {
      updateRecipe(recipeId: $id, recipe: $recipe) { ...MyRecipe }
    }

    ${ProfileRecipesFragments.myRecipe}
  `, {
    update: (proxy, { data }) => {
      const { recipes } = proxy.readQuery({
        query: PROFILE_RECIPES_QUERY,
        variables: {
          userId,
          size: 20,
        },
      })

      proxy.writeQuery({
        query: PROFILE_RECIPES_QUERY,
        variables: {
          userId,
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

  const _getRecipe = (): RecipeInput => {
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
      status: recipe.status === RecipeStatus.public ? RecipeStatus.private : RecipeStatus.public
    }
  }

  const _onPress = () => {
    return updateRecipe({
      variables: {
        id: recipe.id,
        recipe: _getRecipe(),
      }
    })
  }

  const _getLabel = () => {
    if (recipe.status === RecipeStatus.private) {
      if (loading) {
        return getLocalizedText('Publishing')
      }

      return getLocalizedText('Publish Recipe')
    }
    if (recipe.status === RecipeStatus.public) {
      if (loading) {
        return getLocalizedText('UnPublishing')
      }

      return getLocalizedText('UnPublish Recipe')
    }
  }

  return (
    <FilledButton
      label={_getLabel()}
      onPress={_onPress}
      mode={FilledButton.mode.primary}
      style={{
        [Styles.values.marginStart]: Styles.values.spacing / 2
      }}
    />
  )
}
