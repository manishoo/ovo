/*
 * index.web.tsx
 * Copyright: Ouranos Studio 2019
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
          <SortableItem key={`item-${value.id}`} index={index}>
            {renderItem(value)}
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
        pressDelay={200}
        // shouldCancelStart={(e) => {
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
