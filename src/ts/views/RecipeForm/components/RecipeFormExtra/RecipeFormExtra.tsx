/*
 * RecipeFormExtra.tsx
 * Copyright: Ouranos Studio 2019
 */

import FilledButton from 'common/FilledButton/FilledButton'
import RX from 'reactxp'
import TagsInput from 'src/ts/views/RecipeForm/components/TagsInput/TagsInput'
import { RecipeFormUpdateMutation_updateRecipe } from 'src/ts/views/RecipeForm/types/RecipeFormUpdateMutation'
import { Me } from 'src/ts/views/Register/types/Me'


interface RecipeFormExtraProps {
  style?: any,
  recipe: RecipeFormUpdateMutation_updateRecipe,
  selectedTags: string[],
  onTagsChange: (tags: string[]) => void,
  userId?: string
  onSubmit: (selectedTags: string[]) => void,
  me: Me,
}

export function RecipeFormExtra(props: RecipeFormExtraProps) {
  return (
    <RX.View
      style={[styles.container]}
    >
      <TagsInput
        me={props.me}
        onTagsChange={tags => props.onTagsChange(tags)}
        selectedTags={props.selectedTags}
      />

      <FilledButton
        label={'Submit'}
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
