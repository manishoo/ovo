/*
 * RootView.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import AppConfig from '@App/AppConfig'
import { Theme } from '@App/Theme'
import { ThemeContext } from '@App/ThemeContext'
import SafeArea from '@Common/SafeArea/SafeArea'
import ToastContainer from '@Common/ToastContainer/ToastContainer'
import Navigator from '@Modules/navigator'
import RX from 'reactxp'


interface RootViewProps extends RX.CommonProps {
  onLayout?: (e: RX.Types.ViewOnLayoutEvent) => void;
  history?: any
}

interface RootViewState {
  theme: Theme
}

export default class RootView extends RX.Component<RootViewProps, RootViewState> {
  constructor(props: RootViewProps) {
    super(props)

    this.state = {
      theme: new Theme('light'),
    }
  }

  public render() {
    const { theme } = this.state

    return (
      <ThemeContext.Provider
        value={{
          theme,
          toggleTheme: (mode: 'dark' | 'light') => this.setState({ theme: new Theme(mode) })
        }}
      >
        <RX.View style={[
          styles.root,
          {
            backgroundColor: theme.colors.bg,
          }
        ]} onLayout={this.props.onLayout}>
          {AppConfig.getPlatformType() === 'ios' && <SafeArea />}
          <Navigator history={this.props.history} />

          <ToastContainer />
        </RX.View>
      </ThemeContext.Provider>
    )
  }

}

const styles = {
  root: RX.Styles.createViewStyle({
    flex: 1,
    alignSelf: 'stretch',
  })
}
