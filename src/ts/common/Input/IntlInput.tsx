/*
 * IntlInput.tsx
 * Copyright: Ouranos Studio 2019
 */

import RX from 'reactxp'
import AppConfig from 'src/ts/app/AppConfig'
import { Translation } from 'src/ts/models/common'
import Input, { InputProps } from './Input'


interface IntlInputProps extends InputProps {
  translations: Translation[],
  onTranslationsChange: (translations: Translation[]) => void,
}

export default function IntlInput(props: IntlInputProps) {
  const _getValue = () => {
    if (props.translations.length === 0) return ''

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
