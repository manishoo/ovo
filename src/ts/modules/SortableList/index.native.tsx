/*
 * index.native.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import { TouchableOpacity } from 'react-native'
// @ts-ignore
import DraggableFlatList from 'react-native-draggable-flatlist'
import RX from 'reactxp'
import SortableListProps from './types'


class SortableItem extends RX.Component<any> {
  public shouldComponentUpdate(nextProps: Readonly<any>, nextState: Readonly<{}>, nextContext: any): boolean {
    return true
  }

  render() {
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        onLongPress={this.props.move}
        onPressOut={this.props.moveEnd}
      >
        {this.props.renderItem(this.props.item)}
      </TouchableOpacity>
    )
  }
}

export default class SortableList extends RX.Component<SortableListProps> {
  render() {
    return (
      <DraggableFlatList
        data={this.props.items}
        renderItem={this._renderItem}
        keyExtractor={(item: any) => `draggable-item-${item.id}`}
        scrollPercent={5}
        // @ts-ignore
        onMoveEnd={({ data }) => this.props.onItemsChange(data)}
      />
    )
  }

  // @ts-ignore
  private _renderItem = ({ item, index, move, moveEnd }) => {
    return (
      <SortableItem
        item={item}
        index={index}
        move={move}
        moveEnd={moveEnd}
        renderItem={this.props.renderItem}
      />
    )
  }
}
