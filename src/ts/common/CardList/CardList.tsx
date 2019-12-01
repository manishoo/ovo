/*
 * CardList.tsx
 * Copyright: Ouranos Studio 2019
 */

import Styles from '@App/Styles'
import LoadingIndicator from '@Common/LoadingIndicator/LoadingIndicator'
import ResponsiveWidthStore from '@Services/ResponsiveWidthStore'
import RX from 'reactxp'
import { ComponentBase } from 'resub'


interface RecipesListProps extends RX.CommonProps {
  style?: any,
  items: any[],
  showAddButton?: boolean,
  onLayout?: (e: RX.Types.ViewOnLayoutEvent) => void,
  renderAddCell: (size: number) => any,
  renderCell: (item: any, size: number) => any,
  hideAvatar?: boolean,
  loading?: boolean,
}

interface RecipesListState {
  columns: number,
  width: number,
  isSmallOrTiny?: boolean,
}

export default class CardList extends ComponentBase<RecipesListProps, RecipesListState> {
  public render() {
    const { style } = this.props

    return [
      <RX.View
        style={[styles.container, { minWidth: this._getCellSize() * this.state.columns }, style]}
        onLayout={this.props.onLayout}
      >
        {this.props.showAddButton && this.props.renderAddCell(this._getCellSize())}

        {this.props.items.map(item => this.props.renderCell(item, this._getCellSize()))}
      </RX.View>,
      this.props.loading && <RX.View
        style={{
          width: this.state.width,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <LoadingIndicator />
      </RX.View>
    ]
  }

  protected _buildState(props: RecipesListProps, initialBuild: boolean): Partial<RecipesListState> | undefined {
    return {
      columns: ResponsiveWidthStore.isSmallOrTinyScreenSize() ? 2 : 4,
      isSmallOrTiny: ResponsiveWidthStore.isSmallOrTinyScreenSize(),
      width: ResponsiveWidthStore.getWidthConsideringDrawer(),
    }
  }

  private _getCellSize = () => (this.state.width - ((Styles.values.spacing * 2) * this.state.columns) - (Styles.values.spacing * 2)) / this.state.columns
}

const styles = {
  container: RX.Styles.createViewStyle({
    flexDirection: 'row',
    flexWrap: 'wrap',
    maxWidth: Styles.values.mainContentMaxWidth
  }),
}
