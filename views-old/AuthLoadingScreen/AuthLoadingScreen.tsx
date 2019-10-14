/*
 * AuthLoadingScreen.tsx
 * Copyright: Ouranos Studio 2019
 */

import RX from 'reactxp'
import { navigate } from '../../src/ts/utilities'
import { ThemeContext } from '../../src/ts/app/ThemeContext'


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
