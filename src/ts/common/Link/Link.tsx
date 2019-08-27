/*
 * Link.tsx
 * Copyright: Ouranos Studio 2019
 */

import RX from 'reactxp'
import { ThemeContext } from 'src/ts/app/ThemeContext'
import { navigate, withNavigation } from 'src/ts/utilities'

interface LinkProps {
	style?: any,
	to: string,
}

@withNavigation
export default class Link extends RX.Component<LinkProps> {
	render() {
		return (
			<ThemeContext.Consumer>
				{({ theme }) => (
					<a
						href={this.props.to}
						style={Object.assign({}, { color: theme.colors.linkColor }, this.props.style)}
						onClick={e => {
							e.stopPropagation()
							e.preventDefault()
							navigate(this.props, this.props.to)
						}}
					>
						{this.props.children}
					</a>
				)}
			</ThemeContext.Consumer>
		)
	}
}
