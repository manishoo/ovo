/*
 * AuthLoadingScreen.tsx
 * Copyright: Ouranos Studio 2019
 */

import { ThemeContext } from '@App/ThemeContext'
import { navigate } from '@Utils'
import RX from 'reactxp'


export default class AuthLoadingScreen extends RX.Component {
  constructor(props: any) {
    super(props)

    this.bootstrap()
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {({ theme }) => (
          <RX.View style={{ flex: 1, backgroundColor: theme.colors.authLoadingBg }} />
        )}
      </ThemeContext.Consumer>
    )
  }

  private bootstrap = async () => {
    const token = await RX.Storage.getItem('token')

    navigate(this.props, token ? 'App' : 'Auth', {
      replace: true,
    })
  }
}
