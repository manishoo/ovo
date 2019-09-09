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
	onPress?: () => void,
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
              setTimeout(() => {
                navigate(this.props, this.props.to)
                if (this.props.onPress) this.props.onPress()
              }, 0)
						}}
					>
						{this.props.children}
					</a>
				)}
			</ThemeContext.Consumer>
		)
	}
}
