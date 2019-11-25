/*
 * types.ts
 * Copyright: Ouranos Studio 2019
 */

import { VirtualListViewCellRenderDetails } from 'reactxp-virtuallistview'
import { VirtualListViewItemInfo } from 'reactxp-virtuallistview/src/VirtualListView'
import { Day } from '../types/Day'


export interface ListViewProps {
  style?: any,
  calendar: Day[],
  renderItem: (item: VirtualListViewCellRenderDetails<VirtualListViewItemInfo & Day>) => any,
  findClosestMeal: () => any,
  onDateTimeChange: (activeDateTime: any) => void
}

export interface ListViewState {
  calendar: Day[],
  itemsRelativeSize?: number[],
  centerEvent?: Day,
}
