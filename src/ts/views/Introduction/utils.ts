/*
 * utils.ts
 * Copyright: Ouranos Studio 2019
 */

import { AssistantExpectations, MessageSenders, MessageType } from 'src/ts/models/global-types'
import { MessageInput } from 'src/ts/views/Introduction/components/ChatInput'
import {
  IntroductionMutation_setup_messages,
  IntroductionMutation_setup_messages_data_items
} from 'src/ts/views/Introduction/types/IntroductionMutation'


export function getLastInputType(messages: IntroductionMutation_setup_messages[]): MessageInput {
  let inputType: MessageType = undefined
  let expect: AssistantExpectations = undefined
  let items: IntroductionMutation_setup_messages_data_items[] = []
  let skip: boolean = false
  let mealPlanSettings: any = null
  let data: any = null

  messages.forEach((message) => {
    if (message.sender == 'assistant') {
      inputType = message.type
      if (message.data.expect) {
        const type = message.data.expect
        Object.keys(AssistantExpectations).map((key: string) => {
          if (key === type) {
            // @ts-ignore
            expect = AssistantExpectations[key]
          }
        })
      }
      data = message.data
      items = message.data.items
      skip = message.data.skip
      mealPlanSettings = message.data.mealPlanSettings
    }
  })
console.log('messages', messages)
console.log('data', data)
  return {
    expect,
    inputType,
    items,
    mealPlanSettings,
    skip,
    data,
  }
}

export function createMessage(text: string, data?: any): IntroductionMutation_setup_messages {
  return {
    id: String(Math.random()),
    sender: MessageSenders.user,
    text,
    timestamp: String(Date.now()),
    type: MessageType.text,
    data,
  }
}
