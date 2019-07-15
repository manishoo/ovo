/*
 * Markdown.ios.tsx
 * Copyright: Ouranos Studio 2019
 */

// import React from 'react'
import RX from 'reactxp'
// @ts-ignore
import RNMarkdown from 'react-native-easy-markdown'

interface MarkdownProps {
	style?: any,
}

export default class Markdown extends RX.Component<MarkdownProps> {
	render() {
		const {style} = this.props

		return (
			<RNMarkdown
				markdownStyles={{
					text: style,
				}}
			>
				{this.props.children}
			</RNMarkdown>
		)
	}
}
