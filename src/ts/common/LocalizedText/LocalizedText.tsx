/*
 * LocalizedText.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import AppConfig from '@App/AppConfig'
import RX from 'reactxp'
import ENLocale from '../../locales/en'


const locale = AppConfig.locale

const translations: { [index: string]: any } = {
  [locale]: require(`../../locales/${locale}`).default,
  en: ENLocale,
}

export function translate(key: string, variables?: { [k: string]: string }) {
  let v = translations[locale][key] || translations['en'][key]

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

translate.keys = ENLocale

export function __(key: string) {
  return translations[locale][key]
}
