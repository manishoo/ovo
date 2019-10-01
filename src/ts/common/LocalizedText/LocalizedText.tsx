/*
 * LocalizedText.tsx
 * Copyright: Ouranos Studio 2019
 */


import RX from 'reactxp'
import { default as RXI18n } from 'reactxp-i18n'
import AppConfig from 'src/ts/app/AppConfig'
import ENLocale from '../../../../locales/en.json'
import FALocale from '../../../../locales/fa.json'

interface LocalizedTextProps {
	style?: any,
	children: string
}

const locale = AppConfig.locale

const translations: { [index: string]: any } = {
	fa: Object.create(FALocale),
	en: Object.create(ENLocale),
}

export function getLocalizedText(key: string, variables?: { [k: string]: string }) {
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

export function __(key: string) {
	return translations[locale][key]
}

export default class LocalizedText extends RX.Component<LocalizedTextProps> {
	render() {
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
