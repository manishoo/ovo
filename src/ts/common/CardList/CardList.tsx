/*
 * CardList.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import Styles from '@App/Styles'
import LoadingIndicator from '@Common/LoadingIndicator/LoadingIndicator'
import { ResponsiveWidth } from '@Models/ResponsiveWidthModels'
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
  columns?: number,
}

interface RecipesListState {
  columns: number,
  width: number,
  isSmallOrTiny?: boolean,
}

export default class CardList extends ComponentBase<RecipesListProps, RecipesListState> {
  public render() {
    const { style } = this.props

    const size = this._getCellSize()
    return (
      <RX.View
        style={[styles.container, { minWidth: size * this.state.columns }, style]}
        onLayout={this.props.onLayout}
      >
        {this.props.showAddButton && this.props.renderAddCell(size)}

        {this.props.items.map(item => this.props.renderCell(item, size))}

        {
          this.props.loading && <RX.View
            style={{
              width: size,
              height: size,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <LoadingIndicator />
          </RX.View>
        }
      </RX.View>
    )
  }

  protected _buildState(props: RecipesListProps, initialBuild: boolean): Partial<RecipesListState> | undefined {
    let columns = this.props.columns || 3

    switch (ResponsiveWidthStore.getResponsiveWidth()) {
      case ResponsiveWidth.Large:
        columns = columns + 1
        break
      case ResponsiveWidth.Medium:
        break
      case ResponsiveWidth.Small:
      default:
        columns = columns - 1
        break
    }

    return {
      columns,
      isSmallOrTiny: ResponsiveWidthStore.isSmallOrTinyScreenSize(),
      width: ResponsiveWidthStore.getWidthConsideringMaxWidth(),
    }
  }

  private _getCellSize = () => (this.state.width - ((Styles.values.spacing * 2) * this.state.columns) - (Styles.values.spacing * 2)) / this.state.columns
}

const styles = {
  container: RX.Styles.createViewStyle({
    flexDirection: 'row',
    flexWrap: 'wrap',
    maxWidth: 1200
  }),
}
