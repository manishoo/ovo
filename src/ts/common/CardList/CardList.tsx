/*
 * CardList.tsx
 * Copyright: Ouranos Studio 2019
 */

import RX from 'reactxp'
import { ComponentBase } from 'resub'
import Styles from 'src/ts/app/Styles'
import ResponsiveWidthStore from 'src/ts/stores/ResponsiveWidthStore'


interface RecipesListProps extends RX.CommonProps {
  style?: any,
  items: any[],
  showAddButton?: boolean,
  onLayout?: (e: RX.Types.ViewOnLayoutEvent) => void,
  renderAddCell: (size: number) => any,
  renderCell: (item: any, size: number) => any,
  hideAvatar?: boolean,
}

interface RecipesListState {
  columns: number,
  windowWidth: number,
  isSmallOrTiny?: boolean,
}

export default class CardList extends ComponentBase<RecipesListProps, RecipesListState> {
  public render() {
    const { style } = this.props

    return (
      <RX.View
        style={[styles.container, { minWidth: this._getCellSize() * this.state.columns }, style]}
        onLayout={this.props.onLayout}
      >
        {this.props.showAddButton && this.props.renderAddCell(this._getCellSize())}

        {this.props.items.map(item => this.props.renderCell(item, this._getCellSize()))}
      </RX.View>
    )
  }

  protected _buildState(props: RecipesListProps, initialBuild: boolean): Partial<RecipesListState> | undefined {
    return {
      columns: ResponsiveWidthStore.isSmallOrTinyScreenSize() ? 2 : 4,
      isSmallOrTiny: ResponsiveWidthStore.isSmallOrTinyScreenSize(),
      windowWidth: ResponsiveWidthStore.getWidth(),
    }
  }

  private _getMaximum1024 = (width: number) => (width > Styles.values.mainContentMaxWidth ? Styles.values.mainContentMaxWidth : width) // maximum 1024

  private _getWindowWidthConsideringDrawer = () => this._getMaximum1024(this.state.isSmallOrTiny ? this.state.windowWidth : this.state.windowWidth - Styles.values.drawerWidth)

  private _getCellSize = () => (this._getWindowWidthConsideringDrawer() - ((Styles.values.spacing * 2) * this.state.columns) - (Styles.values.spacing * 2)) / this.state.columns
}

const styles = {
  container: RX.Styles.createViewStyle({
    flexDirection: 'row',
    flexWrap: 'wrap',
    maxWidth: Styles.values.mainContentMaxWidth
  }),
}
