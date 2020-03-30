/*
 * utils.ts
 * Copyright: Mehdi J. Shooshtari 2020
 */

import { AssistantExpectations, MessageSender, MessageType } from '@Models/global-types'
import { createId } from '@Utils/create-id'
import { MessageInput } from '@Views/AssistantChat/components/ChatInput'
import {
  AssistantChatMutation_setup_messages,
  AssistantChatMutation_setup_messages_data_items
} from '@Views/AssistantChat/types/AssistantChatMutation'


export function getLastInputType(messages: AssistantChatMutation_setup_messages[]): MessageInput {
  let inputType: MessageType | null = null
  let expect: AssistantExpectations | null = null
  let items: AssistantChatMutation_setup_messages_data_items[] | null = []
  let skip: boolean | null = false
  let mealPlanSettings: any = null
  let data: any = null

  messages.forEach((message) => {
    if (message.sender == 'assistant') {
      inputType = message.type
      if (message.data) {
        if (message.data.expect) {
          const type = message.data.expect
          Object.keys(AssistantExpectations).map((key: string) => {
            if (key === type) {
              // @ts-ignore
              expect = AssistantExpectations[key]
            }
          })
        }

        items = message.data.items
        skip = message.data.skip
        mealPlanSettings = message.data.mealPlanSettings
      }

      data = message.data
    }
  })

  if (!expect) throw new Error('no expect')
  if (!inputType) throw new Error('no inputType')

  return {
    expect,
    inputType,
    items,
    mealPlanSettings,
    skip,
    data,
  }
}

export function createMessage(text: string, data?: any): AssistantChatMutation_setup_messages {
  return {
    id: createId(),
    sender: MessageSender.user,
    text,
    timestamp: String(Date.now()),
    type: MessageType.text,
    data,
  }
}
