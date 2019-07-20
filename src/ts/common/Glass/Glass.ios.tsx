/*
 * Glass.ios.tsx
 * Copyright: Ouranos Studio 2019
 */


import { BlurView } from 'react-native-blur'
import RX from 'reactxp'

interface GlassProps {
	style?: any,
	blurType?: 'xlight' | 'light' | 'dark' | 'extraDark' | 'regular' | 'prominent',
}

export default class GlassIos extends RX.Component<GlassProps> {
	render() {
		const { style, children, blurType } = this.props

		return (
			<BlurView
				blurType={blurType || 'light'}
				style={style}
			>
				{children}
			</BlurView>
		)
	}
}