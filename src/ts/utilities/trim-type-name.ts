/*
 * trim-type-name.ts
 * Copyright: Ouranos Studio 2019
 */

export default function trimTypeName(o: Object): any {
  let result = {}

  Object.keys(o).map(k => {
    if (o[k] && typeof o[k] === 'object') {
      result[k] = trimTypeName(o[k])
      return
    }

    if (k !== '__typename') result[k] = o[k]
  })

  return result
}
