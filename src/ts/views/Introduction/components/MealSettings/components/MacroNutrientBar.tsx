/*
 * MacroNutrientBar.tsx
 * Copyright: Ouranos Studio 2019
 */

import RX from 'reactxp'
import theme from 'src/ts/app/Theme'

interface MacroNutrientBarProps {
	style?: any,
	label: string,
	color: string,
	value: number,
	tdee: number,
	onChange: (value: number) => void,
}

export default class MacroNutrientBar extends RX.Component<MacroNutrientBarProps> {
	prevLocationX?: number
	renderBar = (percentageFill: number, color: string) => {
		return (
			<RX.View
				style={styles.bar}
			>
				<RX.View
					style={[styles.barFilled, { flex: percentageFill, backgroundColor: color }]}
				/>
				<RX.View
					style={{ flex: 100 - percentageFill }}
				/>
			</RX.View>
		)
	}

	onResponderMove = (e: RX.Types.SyntheticEvent): void => {
		const { value, onChange } = this.props
		console.log(e.nativeEvent)
		if (e.nativeEvent.pageX === this.prevLocationX) return undefined
		if (this.prevLocationX) {
			const locationXDiff = e.nativeEvent.pageX - this.prevLocationX
			let finalVal = value + (locationXDiff / 200)
			if (finalVal >= 1) {
				finalVal = 1
			}
			if (finalVal <= 0) {
				finalVal = 0
			}
			onChange(finalVal)
			this.prevLocationX = e.nativeEvent.pageX
		} else {
			this.prevLocationX = e.nativeEvent.pageX
		}
	}

	onResponderEnd = () => {
		this.prevLocationX = undefined
	}

	render() {
		const {
			style,
			label,
			value,
			color,
			tdee,
		} = this.props

		return (
			<RX.View
				style={[styles.container, style]}
			>
				<RX.View
					style={styles.container1}
				>
					<RX.Text style={styles.label}>{label}</RX.Text>
					<RX.Text style={{ color }}>%{Math.ceil(value * 100)}</RX.Text>
					<RX.Text style={{ color: '#ccc', fontSize: 12 }}>~{Math.ceil(value * tdee)} calories</RX.Text>
				</RX.View>
				<RX.View
					style={styles.container2}
					onResponderMove={this.onResponderMove}
					onResponderEnd={this.onResponderEnd}
					onResponderRelease={this.onResponderEnd}
					onStartShouldSetResponder={() => {
						console.log('setting shit')
						return true
					}}
					onMoveShouldSetResponder={() => false}
				>
					{this.renderBar(value * 100, color)}
				</RX.View>
			</RX.View>
		)
	}
}

const styles = {
	label: RX.Styles.createTextStyle({
		fontSize: 18,
		color: theme.colors.labelInput,
		fontWeight: 'bold',
	}),
	container: RX.Styles.createViewStyle({
		flex: 1,
		flexDirection: 'row',
		marginBottom: 8,
	}),
	container1: RX.Styles.createViewStyle({
		width: 100,
	}),
	container2: RX.Styles.createViewStyle({
		flex: 1,
	}),
	bar: RX.Styles.createViewStyle({
		flexDirection: 'row',
		justifyContent: 'flex-start',
	}),
	barFilled: RX.Styles.createViewStyle({
		height: 40,
		borderTopRightRadius: 20,
		borderBottomRightRadius: 20,
		borderTopLeftRadius: 5,
		borderBottomLeftRadius: 5,
	}),
}
