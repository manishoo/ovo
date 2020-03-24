/*
 * client-cache.ts
 * Copyright: Mehdi J. Shooshtari 2020
 */

import { InMemoryCache } from '@apollo/client'
import writeDefaults from '@App/cache-defaults'


const cache = new InMemoryCache({
  possibleTypes: {
    IngredientItem: ['Recipe', 'Food'],
  },
  typePolicies: {
    // Query: {
    //   fields: {
    //     calendar: {
    //       read(a) {
    //         console.log('QUUERY', a)
    //         return a
    //       },
    //     }
    //   },
    // },

    // CalendarResponse: {
    //   fields: {
    //     // items: {
    //     //   merge(existingItems: CalendarQuery_calendar_items[], incomingItems: CalendarQuery_calendar_items[], { isReference }) {
    //     //     return uniqBy([
    //     //       ...existingItems,
    //     //       ...incomingItems,
    //     //     ], i => isReference(i) ? i.__ref : defaultDataIdFromObject(i as any))
    //     //   },
    //     // },
    //     days: {
    //       merge(existingDays: CalendarQuery_calendar_days[], incomingDays: CalendarQuery_calendar_days[]) {
    //         return uniqBy(incomingDays, '__ref')
    //       },
    //     },
    //   },
    // },

    // MealItem: {
    //   fields: {
    //     item: {
    //       read(a: any, {readField}) {
    //         console.log('READ', readField('id', a))
    //         return a
    //       },
    //       // merge(existing: any, incoming: any) {
    //       //   console.log('mealitem existing', existing)
    //       //   console.log('mealitem incoming', incoming)
    //       //   return {...existing, ...incoming};
    //       // },
    //     }
    //   }
    // },

    // Day: {
    //   fields: {
    //     meals: {
    //       read(a: any) {
    //         return a
    //       },
    //       merge(existing = [], incoming: any[]) {
    //         console.log('dayMeals existing', existing)
    //         console.log('dayMeals incoming', incoming)
    //         return [...existing, ...incoming];
    //       },
    //     }
    //   }
    // },
  },
  // typePolicies: {
  //   MealItem: {
  //     keyFields: ['id', 'item', ['id']]
  //   }
  // },
})
// @ts-ignore
  .restore(window.__APOLLO_STATE__)

writeDefaults(cache)

export { cache }
