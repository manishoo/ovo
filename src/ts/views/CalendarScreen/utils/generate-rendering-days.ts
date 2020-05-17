/*
 * generate-rendering-days.ts
 * Copyright: Mehdi J. Shooshtari 2020
 */

import addDays from 'date-fns/addDays'
import subDays from 'date-fns/subDays'


const generateRenderingDays = (dayCursor: Date, daysOnEachSide: number): Date[] => {
  const renderingDays: Date[] = []
  for (let i = daysOnEachSide; i > 0; i--) {
    renderingDays.push(subDays(dayCursor, i))
  }
  renderingDays.push(dayCursor)
  for (let i = 1; i <= daysOnEachSide; i++) {
    renderingDays.push(addDays(dayCursor, i))
  }

  return renderingDays
}

export default generateRenderingDays
