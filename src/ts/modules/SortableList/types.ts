/*
 * types.ts
 * Copyright: Ouranos Studio 2019
 */

export default interface SortableListProps {
  items: any[],
  renderItem: (item: any) => any,
  onItemsChange: (items: any[]) => void,
}
