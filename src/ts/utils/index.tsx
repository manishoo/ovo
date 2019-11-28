/*
 * index.tsx
 * Copyright: Ouranos Studio 2019
 */

import { Routes } from '@Models/common'
import { Image } from '@Models/FoodModels'
import LocationStore from '@Services/LocationStore'
import RX from 'reactxp'
import AppConfig from '../app/AppConfig'


export function fullWidth() {
  return RX.UserInterface.measureWindow().width
}

export function fullHeight() {
  return RX.UserInterface.measureWindow().height
}

export function generateWeightRange() {
  const items: any[] = []
  for (let i = 1; i < 301; i++) {
    items.push({
      label: String(i),
      value: String(i),
    })
  }
  return items
}

export function generateHeightRange() {
  const items: any[] = []
  for (let i = 10; i < 250; i++) {
    items.push({
      label: String(i),
      value: String(i),
    })
  }
  return items
}

export function map(minRange: number, maxRange: number, minDomain: number, maxDomain: number, value: number): number {
  return minDomain + (maxDomain - minDomain) * (value - minRange) / (maxRange - minRange)
}

export function navigate(props: any, route: Routes | string, config: any = { params: {} }): void {
  console.warn('navigate is DEPRECATED! use LocationStore.navigate')
  return LocationStore.navigate(props, route, config)
}

export function getParam(props: any, paramName: string) {
  const type = RX.Platform.getType()

  if (type === 'web') {
    return props.match.params[paramName]
  } else {
    return props.navigation.getParam(paramName)
  }
}

export function getimage(imageObject?: Image) {
  if (imageObject) {
    return `${AppConfig.serverAddress}/${imageObject.url}`
  }

  return '' // placeholder image
}

const DAY_COLORS = [
  { day: 6, color: '#5E35B1' }, // saturday
  { day: 0, color: '#E53935' }, // sunday
  { day: 1, color: '#FFCC00' },
  { day: 2, color: '#F06292' },
  { day: 3, color: '#43A047' },
  { day: 4, color: '#FF9209' },
  { day: 5, color: '#1E88E5' },
]

export function getDayColor(date: Date) {
  const found = DAY_COLORS.find(p => p.day === date.getDay())
  if (!found) return '#fff'

  return found.color
}

export function isEmailValid(email: string) {
  const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  return email.match(EMAIL_REGEX)
}

export function renderImageOrPlaceholder(image?: Image, style?: any) {
  if (image) {
    return (
      <RX.Image
        source={image.url}
        style={style}
        resizeMode={'cover'}
      />
    )
  } else {
    return (
      <RX.View
        style={style}
      />
    )
  }
}