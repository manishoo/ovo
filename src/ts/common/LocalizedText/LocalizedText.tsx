/*
 * LocalizedText.tsx
 * Copyright: Ouranos Studio 2019
 */

import AppConfig from '@App/AppConfig'
import { LanguageCode } from '@Models/global-types'
import RX from 'reactxp'
import { default as RXI18n } from 'reactxp-i18n'
import ENLocale from '../../locales/en'
import FALocale from '../../locales/fa'


interface LocalizedTextProps {
  style?: any,
  children: string
}

const locale = AppConfig.locale

const translations: { [index: string]: any } = {
  fa: FALocale,
  en: ENLocale,
}

export function translate(key: string | ENLocale, variables?: { [k: string]: string }) {
  let v = translations[locale][key]
  if (v) {
    if (variables) {
      Object.keys(variables).map(k => {
        const regEx = new RegExp('\{\{' + k + '\}\}', 'g')
        v = v.replace(regEx, variables[k])
      })
    }

    return v
  }

  return key
}

translate.keys = locale === LanguageCode.fa ? FALocale : ENLocale

export function __(key: string) {
  return translations[locale][key]
}

export default class LocalizedText extends RX.Component<LocalizedTextProps> {
  public render() {
    return (
      <RXI18n
        toTranslate={this.props.children}
        translations={translations}
        customization={{
          locale,
        }}
      />
    )
  }
}
