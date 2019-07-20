/*
 * MealSettings.tsx
 * Copyright: Ouranos Studio 2019
 */

import ImageSource from 'modules/images'
import RX from 'reactxp'
import Input from 'src/ts/common/Input/Input'
import SubmitButton from '../SubmitButton'
import MacroNutrientBar from './components/MacroNutrientBar'

interface MealSettingsProps {
	style?: any,
	settings: any,
	onSubmit: (data: any) => void
}

interface MealSettingsState {
	protein: number
	fat: number
	carbs: number
	tdee: number
}

export default class MealSettings extends RX.Component<MealSettingsProps, MealSettingsState> {
	hintOpacityAnimated = RX.Animated.createValue(0)
	hintLeftAnimated = RX.Animated.createValue(200)

	constructor(props: MealSettingsProps) {
		super(props)

		this.state = {
			protein: props.settings.protein,
			fat: props.settings.fat,
			carbs: props.settings.carbs,
			tdee: props.settings.tdee,
		}
	}

	componentDidMount(): void {
		this.showHint()
	}

	onMacroNutrientChange = (field: string) => (value: number) => {
		// @ts-ignore
		this.setState({
			[field]: value,
		})
	}

	onTDEEChange = (tdee: string) => {
		this.setState({
			tdee: Number(tdee),
		})
	}

	showHint = () => {
		let OpacityAnimation = RX.Animated.timing(this.hintOpacityAnimated,
			{
				toValue: 1,
				duration: 350,
				easing: RX.Animated.Easing.InOut(),
			}
		)
		OpacityAnimation.start()
		let LeftAnimation = RX.Animated.timing(this.hintLeftAnimated,
			{
				toValue: 250,
				duration: 750,
				easing: RX.Animated.Easing.InOut(),
			}
		)
		LeftAnimation.start(() => {
			let LeftAnimationBack = RX.Animated.timing(this.hintLeftAnimated,
				{
					toValue: 200,
					duration: 750,
					easing: RX.Animated.Easing.InOut(),
				}
			)
			LeftAnimationBack.start(() => LeftAnimation.start())
		})

		setTimeout(() => {
			let OpacityAnimation = RX.Animated.timing(this.hintOpacityAnimated,
				{
					toValue: 0,
					duration: 350,
					easing: RX.Animated.Easing.InOut(),
				}
			)
			OpacityAnimation.start()
		}, 2000)
	}

	renderHint = () => {
		return (
			<RX.Animated.Image
				source={ImageSource.Finger}
				// @ts-ignore
				style={{
					opacity: this.hintOpacityAnimated,
					width: 100,
					height: 100,
					position: 'absolute',
					top: 20,
					left: this.hintLeftAnimated,
				}}
			/>
		)
	}

	onSubmit = () => {
		const { onSubmit } = this.props

		onSubmit({
			mealPlanSettings: {
				protein: Math.ceil(this.state.protein * 100),
				fat: Math.ceil(this.state.fat * 100),
				carbs: Math.ceil(this.state.carbs * 100),
				tdee: this.state.tdee,
			}
		})
	}

	render() {
		const { style } = this.props
		const {
			protein,
			fat,
			carbs,
			tdee,
		} = this.state

		return (
			<RX.View
				style={[styles.container, style]}
			>
				<MacroNutrientBar
					label='Protein'
					tdee={tdee}
					color='#e53935'
					value={protein}
					onChange={this.onMacroNutrientChange('protein')}
				/>
				<MacroNutrientBar
					label='Fat'
					tdee={tdee}
					color='#fdd835'
					value={fat}
					onChange={this.onMacroNutrientChange('fat')}
				/>
				<MacroNutrientBar
					label='Carbs'
					tdee={tdee}
					color='#cddc39'
					value={carbs}
					onChange={this.onMacroNutrientChange('carbs')}
				/>
				{this.renderHint()}
				<Input
					label='TDEE (target calories burnt per day)'
					value={String(tdee)}
					onChange={this.onTDEEChange}
					textInputStyle={{ width: 50 }}
					style={styles.input}
					returnKeyType={'done'}
					keyboardType={'numeric'}
				/>
				<SubmitButton
					onPress={this.onSubmit}
					style={styles.submitButton}
				/>
			</RX.View>
		)
	}
}

const styles = {
	container: RX.Styles.createViewStyle({
		padding: 10,
		paddingBottom: 50,
	}),
	input: RX.Styles.createTextInputStyle({
		marginTop: 10,
	}),
	submitButton: RX.Styles.createViewStyle({
		position: 'absolute',
		right: 10,
		bottom: 0,
	})
}
