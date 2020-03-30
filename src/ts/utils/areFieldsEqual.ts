/*
 * areFieldsEqual.ts
 * Copyright: Mehdi J. Shooshtari 2020
 */

import isEqual from 'react-fast-compare'


const selectFromObj = (obj: any, fields: string[]) => {
  const newObj: any = {}

  fields.map(f => {
    newObj[f] = obj[f]
  })

  return newObj
}

const areFieldsEqual = (fields: string[]) => (prevProps: any, nextProps: any) => isEqual(selectFromObj(prevProps, fields), selectFromObj(nextProps, fields))

export default areFieldsEqual
