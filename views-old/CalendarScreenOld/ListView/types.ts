/*
 * types.ts
 * Copyright: Ouranos Studio 2019
 */

import { Event } from 'src/ts/models/FoodModels'


export interface ListViewProps {
  style?: any,
  path: Event[],
  renderItem: (item: Event) => any,
  findClosestMeal: () => any,
  onDateTimeChange: (activeDateTime: any) => void
}

export interface ListViewState {
  path: Event[],
  itemsRelativeSize?: number[],
  centerEvent?: Event
}
