/*
 * RootView.tsx
 * Copyright: Ouranos Studio 2019
 */

import SafeArea from 'common/SafeArea/SafeArea'
import ToastContainer from 'common/ToastContainer/ToastContainer'
import RX from 'reactxp'
import AppConfig from 'src/ts/app/AppConfig'
import { Theme } from 'src/ts/app/Theme'
import { ThemeContext } from 'src/ts/app/ThemeContext'
import Navigator from 'src/ts/navigator/navigator'
import LocationStore from 'src/ts/stores/LocationStore'


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

    LocationStore.setHistory(props.history)
    this.state = {
      theme: new Theme('light'),
    }
  }

  public render() {
    return (
      <ThemeContext.Provider
        value={{
          theme: this.state.theme,
          toggleTheme: (mode: 'dark' | 'light') => this.setState({ theme: new Theme(mode) })
        }}
      >
        <RX.View style={styles.root} onLayout={this.props.onLayout}>
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
