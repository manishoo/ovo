/*
 * types.ts
 * Copyright: Mehdi J. Shooshtari 2020
 */

export default interface SortableListProps {
  items: any[],
  renderItem: (item: any, index: number) => any,
  onItemsChange: (items: any[]) => void,
  disabled?: boolean,
}
