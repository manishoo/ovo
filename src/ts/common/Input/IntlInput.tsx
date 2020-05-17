/*
 * IntlInput.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import AppConfig from '@App/AppConfig'
import { Translation } from '@Models/common'
import { useCallback } from 'react'
import RX from 'reactxp'
import Input, { InputProps } from './Input'


interface IntlInputProps extends InputProps {
  translations: Translation[],
  onTranslationsChange: (translations: Translation[]) => void,
}

export const getTranslatedText = (translations: Translation[]) => {
  if (translations.length === 0) return ''

  const foundTranslation = translations.find(p => p.locale === AppConfig.locale)
  if (foundTranslation) return foundTranslation.text

  return translations[0].text
}

export default function IntlInput(props: IntlInputProps) {
  const _getValue = useCallback((translations: Translation[]) => {
    if (translations.length === 0) return ''

    const foundTranslation = translations.find(p => p.locale === AppConfig.locale)
    if (foundTranslation) return foundTranslation.text

    return translations[0].text
  }, [AppConfig.locale])

  const _onChange = useCallback((value: string) => {
    props.onTranslationsChange([
      {
        text: value,
        locale: AppConfig.locale
      }
    ])
  }, [props.onTranslationsChange, AppConfig.locale])

  return (
    // @ts-ignore
    <Input
      {...props}
      value={_getValue(props.translations)}
      onChange={_onChange}
    />
  )
}
