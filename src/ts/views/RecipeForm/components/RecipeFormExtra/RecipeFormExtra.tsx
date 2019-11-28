/*
 * RecipeFormExtra.tsx
 * Copyright: Ouranos Studio 2019
 */

import FilledButton from '@Common/FilledButton/FilledButton'
import { translate } from '@Common/LocalizedText/LocalizedText'
import { User } from '@Models/FoodModels'
import TagsInput from '@Views/RecipeForm/components/TagsInput/TagsInput'
import { RecipeFormUpdateMutation_updateRecipe } from '@Views/RecipeForm/types/RecipeFormUpdateMutation'
import { Me } from '@Views/Register/types/Me'
import RX from 'reactxp'


interface RecipeFormExtraProps {
  style?: any,
  recipe: RecipeFormUpdateMutation_updateRecipe,
  selectedTags: string[],
  onTagsChange: (tags: string[]) => void,
  onSubmit: (selectedTags: string[]) => void,
  user: Me,
}

export function RecipeFormExtra(props: RecipeFormExtraProps) {
  return (
    <RX.View
      style={[styles.container]}
    >
      <TagsInput
        user={props.user}
        onTagsChange={tags => props.onTagsChange(tags)}
        selectedTags={props.selectedTags}
      />

      <FilledButton
        label={translate(translate.keys.Submit)}
        onPress={() => props.onSubmit(props.selectedTags)}
      />
    </RX.View>
  )
}

const styles = {
  container: RX.Styles.createViewStyle({
    //
  }),
}
