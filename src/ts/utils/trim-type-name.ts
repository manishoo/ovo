/*
 * trim-type-name.ts
 * Copyright: Ouranos Studio 2019
 */

export default function trimTypeName(o: Object): any {
  let result = {}

  Object.keys(o).map(k => {
    // @ts-ignore
    if (o[k] && typeof o[k] === 'object') {
      // @ts-ignore
      result[k] = trimTypeName(o[k])
      return
    }

    // @ts-ignore
    if (k !== '__typename') result[k] = o[k]
  })

  return result
}
