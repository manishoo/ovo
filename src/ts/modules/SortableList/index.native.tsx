/*
 * index.native.tsx
 * Copyright: Ouranos Studio 2019
 */

import { TouchableOpacity } from 'react-native'
// import arrayMove from 'array-move'
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

  render() {
    return (
      <DraggableFlatList
        data={this.props.items}
        renderItem={this._renderItem}
        keyExtractor={(item) => `draggable-item-${item.id}`}
        scrollPercent={5}
        onMoveEnd={({ data }) => this.props.onItemsChange(data)}
      />
    )
  }
}
