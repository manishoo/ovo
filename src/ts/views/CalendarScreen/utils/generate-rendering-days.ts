/*
 * generate-rendering-days.ts
 * Copyright: Mehdi J. Shooshtari 2020
 */

import { DateTime } from 'luxon'


const generateRenderingDays = (dayCursor: DateTime, daysOnEachSide: number): DateTime[] => {
  const renderingDays: DateTime[] = []
  for (let i = daysOnEachSide; i > 0; i--) {
    renderingDays.push(dayCursor.minus({ day: i }))
  }
  renderingDays.push(dayCursor)
  for (let i = 1; i <= daysOnEachSide; i++) {
    renderingDays.push(dayCursor.plus({ day: i }))
  }
  return renderingDays
}

export default generateRenderingDays
