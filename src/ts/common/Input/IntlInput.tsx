/*
 * IntlInput.tsx
 * Copyright: Ouranos Studio 2019
 */

import AppConfig from '@App/AppConfig'
import { Translation } from '@Models/common'
import RX from 'reactxp'
import Input, { InputProps } from './Input'


interface IntlInputProps extends InputProps {
  translations: Translation[],
  onTranslationsChange: (translations: Translation[]) => void,
}

export default function IntlInput(props: IntlInputProps) {
  const _getValue = () => {
    if (props.translations.length === 0) return ''

    const foundTranslation = props.translations.find(p => p.locale === AppConfig.locale)
    if (foundTranslation) return foundTranslation.text

    return props.translations[0].text
  }

  const _onChange = (value: string) => {
    props.onTranslationsChange([
      {
        text: value,
        locale: AppConfig.locale
      }
    ])
  }

  return (
    // @ts-ignore
    <Input
      {...props}
      value={_getValue()}
      onChange={_onChange}
    />
  )
}
