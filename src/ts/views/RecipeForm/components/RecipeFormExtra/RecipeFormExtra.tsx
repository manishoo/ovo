/*
 * RecipeFormExtra.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import FilledButton from '@Common/FilledButton/FilledButton'
import { translate } from '@Common/LocalizedText/LocalizedText'
import { Me } from '@Services/types/Me'
import TagsInput from '@Views/RecipeForm/components/TagsInput/TagsInput'
import { RecipeFormQuery_recipe } from '@Views/RecipeForm/types/RecipeFormQuery'
import RX from 'reactxp'


interface RecipeFormExtraProps {
  style?: any,
  recipe: RecipeFormQuery_recipe,
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
