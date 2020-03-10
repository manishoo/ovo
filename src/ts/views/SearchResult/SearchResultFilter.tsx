/*
 * SearchResultFilter.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import Styles from '@App/Styles'
import FilledButton from '@Common/FilledButton/FilledButton'
import RX from 'reactxp'


interface SearchResultFilterProps {
  style?: any,
}

interface SearchResultFilterState {
  activeTab: number
}

export default class SearchResultFilter extends RX.Component<SearchResultFilterProps, SearchResultFilterState> {
  state = {
    activeTab: 1,
  }

  public render() {
    const { style } = this.props
    const { activeTab } = this.state

    return (
      <RX.View
        style={[styles.container, style]}
      >
        <RX.View style={{ flexDirection: 'row' }}>
          <FilledButton label={'Calories'} onPress={() => this.setState({ activeTab: 2 })}
                        mode={activeTab === 2 ? FilledButton.mode.primary : FilledButton.mode.default} />
          <FilledButton label={'Meal Types'} onPress={() => this.setState({ activeTab: 3 })}
                        mode={activeTab === 3 ? FilledButton.mode.primary : FilledButton.mode.default} />
        </RX.View>

        <RX.View>
          {this._renderTabContent()}
        </RX.View>
      </RX.View>
    )
  }

  private _renderTabContent = () => {
    switch (this.state.activeTab) {
      case 1:
      case 2:
      case 3:
      case 4:
      default:
        return null
    }
  }
}

const styles = {
  container: RX.Styles.createViewStyle({
    backgroundColor: '#eee',
    padding: Styles.values.spacing,
  }),
}
