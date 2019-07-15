/*
 * Text.tsx
 * Copyright: Ouranos Studio 2019
 */

import RX from 'reactxp'
import {getLocalizedText} from 'common/LocalizedText'
import AppConfig from 'src/ts/app/AppConfig'
import {ImportantForAccessibility} from 'reactxp/dist/common/Types'

interface TextProps extends RX.Types.TextProps {
	style?: any,
	translate?: boolean,
	variables?: {[k: string]: string},
	el?: 'h1',
}

const components = {
	h1: (props: any) => <h1 {...props}/>,
}

export default class Text extends RX.Component<TextProps> {
	private _getComponent = () => {
		let Component: any = RX.Text
		if (this.props.el && AppConfig.getPlatformType() === 'web') {
			Component = components[this.props.el]
		}

		return Component
	}

	render() {
		const {style} = this.props

		const Component = this._getComponent()

		return (
			<Component
				{...this.props}
				importantForAccessibility={ImportantForAccessibility.Yes}
				style={[styles.container, style]}
			>
				{this.props.translate ? getLocalizedText(String(this.props.children), this.props.variables) : this.props.children}
			</Component>
		)
	}
}

const styles = {
	container: RX.Styles.createViewStyle({
		//
	}),
}
