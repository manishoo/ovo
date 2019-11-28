/*
 * ErrorComponent.tsx
 * Copyright: Ouranos Studio 2019
 */

import { ThemeContext } from '@App/ThemeContext'
import Text from '@Common/Text/Text'
import { ApolloError } from 'apollo-client'
import RX from 'reactxp'


interface ErrorComponentProps {
  style?: any,
  error: ApolloError,
}

export default class ErrorComponent extends RX.Component<ErrorComponentProps> {
  render() {
    const { style, error } = this.props

    return (
      <ThemeContext.Consumer>
        {({ theme }) => (
          <RX.View
            style={[styles.container, style]}
          >
            <Text
              style={[
                styles.text,
                {
                  color: theme.colors.red,
                }
              ]}
            >{error.message}</Text>
          </RX.View>
        )}
      </ThemeContext.Consumer>
    )
  }
}

const styles = {
  container: RX.Styles.createViewStyle({
    //
  }),
  text: RX.Styles.createViewStyle({
    //
  }),
}
