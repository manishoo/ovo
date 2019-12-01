/*
 * ExploreSearch.tsx
 * Copyright: Ouranos Studio 2019
 */

import Styles from '@App/Styles'
import Input from '@Common/Input/Input'
import { translate } from '@Common/LocalizedText/LocalizedText'
import { Routes } from '@Models/common'
import { navigate } from '@Utils'
import Keys from '@Utils/KeyCodes'
import { SearchResultQueryVariables } from '@Views/SearchResult/types/SearchResultQuery'
import RX from 'reactxp'


interface ExploreSearchProps {
  style?: any,
  variables: SearchResultQueryVariables,
  onChange?: (variables: SearchResultQueryVariables) => void,
  onSubmit?: (variables: SearchResultQueryVariables) => void,
}

interface ExploreSearchState extends SearchResultQueryVariables {
}

export default class ExploreSearch extends RX.Component<ExploreSearchProps, ExploreSearchState> {
  _input: any

  public render() {
    const { style } = this.props

    return (
      <RX.View
        style={[styles.container, style]}
      >
        <Input
          inputRef={(ref: any) => this._input = ref}
          autoFocus
          value={this.props.variables.nameSearchQuery}
          onChange={nameSearchQuery => this.props.onChange ? this.props.onChange({
            ...this.props.variables,
            nameSearchQuery,
          }) : () => {
          }}
          placeholder={translate('e.g. Easy Sesame Chicken')}
          onKeyPress={(e) => {
            if (e.keyCode === Keys.Return) {
              if (this.props.onSubmit) {
                this.props.onSubmit({
                  ...this.props.variables,
                  nameSearchQuery: this.props.variables.nameSearchQuery,
                })
              }

              // FIXME FOR NATIVE
              navigate(this.props, `${Routes.searchRecipes}?q=${this.props.variables.nameSearchQuery}`)
            }
          }}
          textInputStyle={{
            fontSize: Styles.fontSizes.size16,
          }}
        />
      </RX.View>
    )
  }

  public focus = () => this._input.focus()
}

const styles = {
  container: RX.Styles.createViewStyle({}),
}
