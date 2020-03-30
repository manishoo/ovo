/*
 * ExploreSearch.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import Styles from '@App/Styles'
import Input from '@Common/Input/Input'
import { translate } from '@Common/LocalizedText/LocalizedText'
import { Routes } from '@Models/common'
import { navigate } from '@Utils'
import Keys from '@Utils/KeyCodes'
import { SearchResultQueryVariables } from '@Views/SearchResult/types/SearchResultQuery'
import { forwardRef, useCallback, useState } from 'react'
import RX from 'reactxp'


interface ExploreSearchProps {
  style?: any,
  variables: SearchResultQueryVariables,
  onChange?: (variables: SearchResultQueryVariables) => void,
  onSubmit?: (variables: SearchResultQueryVariables) => void,
  onFocus?: () => void,
  onBlur?: () => void,
  autoFocus?: boolean,
  loading?: boolean,
}

interface ExploreSearchState extends SearchResultQueryVariables {
}

export default forwardRef((props: ExploreSearchProps, ref) => {
  const [isFocusing, setIsFocusing] = useState(props.autoFocus)

  const _onBlur = useCallback(() => {
    setIsFocusing(false)
    props.onBlur && props.onBlur()
  }, [])
  const _onFocus = useCallback(() => {
    setIsFocusing(true)
    props.onFocus && props.onFocus()
  }, [])

  return (
    <RX.View
      style={[styles.container, props.style]}
    >
      <Input
        inputRef={ref}
        autoFocus={props.autoFocus}
        onBlur={_onBlur}
        onFocus={_onFocus}
        value={props.variables.nameSearchQuery}
        onChange={nameSearchQuery => props.onChange ? props.onChange({
          ...props.variables,
          nameSearchQuery,
        }) : () => {
        }}
        placeholder={translate('Search')}
        clearButtonMode={'while-editing'}
        loading={props.loading}
        onKeyPress={(e) => {
          if (e.keyCode === Keys.Return) {
            if (props.onSubmit) {
              props.onSubmit({
                ...props.variables,
                nameSearchQuery: props.variables.nameSearchQuery,
              })
            }

            // FIXME FOR NATIVE
            navigate(props, `${Routes.searchRecipes}?q=${props.variables.nameSearchQuery}`)
          }
        }}
        textInputStyle={{
          fontSize: Styles.fontSizes.size16,
          textAlign: isFocusing ? 'inherit' : 'center'
        }}
        style={styles.container}
      />
    </RX.View>
  )
})

const styles = {
  container: RX.Styles.createViewStyle({
    minWidth: 125,
    width: 250,
    marginBottom: 0,
  }),
}
