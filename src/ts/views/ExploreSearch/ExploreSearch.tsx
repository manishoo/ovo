/*
 * ExploreSearch.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import Styles from '@App/Styles'
import { useTheme } from '@App/ThemeContext'
import Input from '@Common/Input/Input'
import { translate } from '@Common/LocalizedText/LocalizedText'
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
  const theme = useTheme()
  const [isFocusing, setIsFocusing] = useState(props.autoFocus)
  const [input, setInput] = useState('')
  const [blur, setBlur] = useState(true)

  const _onBlur = useCallback(() => {
    if (isFocusing) {
      setIsFocusing(false)
      setBlur(true)
      props.onBlur && props.onBlur()
    }
  }, [props.onBlur, isFocusing])
  const _onFocus = useCallback(() => {
    setIsFocusing(true)
    setBlur(false)
    props.onFocus && props.onFocus()
  }, [props.onFocus, isFocusing])

  const _onChange = useCallback((value: string) => {
    setInput(value)
    props.onChange && props.onChange({
      ...props.variables,
      nameSearchQuery: value,
    })
  }, [!!props.onChange])

  return (
    <RX.View
      style={[styles.container, props.style]}
    >
      <Input
        inputRef={ref}
        autoFocus={props.autoFocus}
        onBlur={_onBlur}
        onFocus={_onFocus}
        value={input}
        onChange={_onChange}
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
            // navigate(props, `${Routes.searchRecipes}?q=${props.variables.nameSearchQuery}`)
          }
        }}
        textInputStyle={[
          {
            fontSize: Styles.fontSizes.size16,
            textAlign: isFocusing ? 'inherit' : 'center',
            color: blur ? theme.colors.subtitle : 'inherit',
          },
        ]}
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
