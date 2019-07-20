/*
 * Link.tsx
 * Copyright: Ouranos Studio 2019
 */

import RX from 'reactxp'
import theme from 'src/ts/app/Theme'
import { navigate, withNavigation } from 'src/ts/utilities'

interface LinkProps {
	style?: any,
	to: string,
}

@withNavigation
export default class Link extends RX.Component<LinkProps> {
	render() {
		return (
			<a
				href={this.props.to}
				style={Object.assign({}, styles.container, this.props.style)}
				onClick={e => {
					e.stopPropagation()
					e.preventDefault()
					navigate(this.props, this.props.to)
				}}
			>
				{this.props.children}
			</a>
		)
	}
}

const styles = {
	container: {
		color: theme.colors.linkColor
	},
}
