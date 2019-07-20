/*
 * MoreButton.tsx
 * Copyright: Ouranos Studio 2019
 */


import RX from 'reactxp'
import ImageSource from 'modules/images'

interface MoreButtonProps {
	style?: any,
	onPress: () => any
}

export default class MoreButton extends RX.Component<MoreButtonProps> {
	render() {
		const { style, onPress } = this.props

		return (
			<RX.View style={style} onPress={onPress}>
				<RX.Image
					source={ImageSource.More}
					style={styles.moreIcon}
				/>
			</RX.View>
		)
	}
}

const styles = {
	moreIcon: RX.Styles.createImageStyle({
		width: 22,
		height: 6,
	}),
}
