/*
 * index.web.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import arrayMove from 'array-move'
import { SortableContainer, SortableElement } from 'react-sortable-hoc'
import RX from 'reactxp'
import SortableListProps from './types'

// @ts-ignore
const SortableItem = SortableElement(({ children }) => <div>{children}</div>)

// @ts-ignore
const InnerSortableList = SortableContainer(({ items, renderItem }) => {
  return (
    <div>
      {
        // @ts-ignore
        items.map((value, index) => (
          <SortableItem key={value && `item-${value.id}`} index={index}>
            {renderItem(value, index)}
          </SortableItem>
        ))
      }
    </div>
  )
})

export default class SortableList extends RX.Component<SortableListProps> {
  onSortEnd = ({ oldIndex, newIndex }: { oldIndex: number, newIndex: number }) => {
    this.props.onItemsChange(arrayMove(this.props.items, oldIndex, newIndex))
  }

  render() {
    return (
      <InnerSortableList
        pressDelay={100}
        // shouldCancelStart={(e: any) => {
        //   console.log('event', e.target.outerHTML.includes('id="handler"'))
        //   return !e.target.outerHTML.includes('id="handler"')
        // }}
        // lockToContainerEdges
        items={this.props.items}
        onSortEnd={this.onSortEnd}
        renderItem={this.props.renderItem}
      />
    )
  }
}
