/*
 * utils.ts
 * Copyright: Ouranos Studio 2019
 */

import { EXPECTATIONS, Item, Message, MessageType } from './types'


export function getLastInputType(messages: Message[]) {
  // @ts-ignore
  let inputType: MessageType = undefined
  // @ts-ignore
  let expect: EXPECTATIONS = undefined
  let items: Item[] = []
  let skip: boolean = false
  let mealPlanSettings: any = null
  messages.forEach((message) => {
    if (message.sender == 'assistant') {
      inputType = message.type
      if (message.data.expect) {
        const type = message.data.expect
        Object.keys(EXPECTATIONS).map((key: string) => {
          if (key === type) {
            // @ts-ignore
            expect = EXPECTATIONS[key]
          }
        })
      }
      items = message.data.items
      skip = message.data.skip
      mealPlanSettings = message.data.mealPlanSettings
    }
  })
  return {
    expect,
    inputType,
    items,
    mealPlanSettings,
    skip,
  }
}

export function createMessage(text: string, data?: any): Message {
  return {
    id: String(Math.random()),
    sender: 'user',
    text,
    timestamp: String(Date.now()),
    type: MessageType.text,
    data,
  }
}
