/*
 * DateView.tsx
 * Copyright: Ouranos Studio 2019
 */


import moment from 'moment'
import RX from 'reactxp'
import { ThemeContext } from 'src/ts/app/ThemeContext'

interface DateViewProps {
	date: string,
}

export default class DateView extends RX.Component<DateViewProps> {
	render() {
		const { date } = this.props

		return (
			<ThemeContext.Consumer>
				{({ theme }) => (
					<RX.View style={styles.container}>
						<RX.Text style={styles.dayName}>{moment.weekdays()[moment(date).weekday()]}</RX.Text>
						<RX.Text
							style={[styles.date, { color: theme.colors.pathDateSubtitle }]}>{moment.months()[moment(date).month()]} {moment(date).format('D')}</RX.Text>
					</RX.View>
				)}
			</ThemeContext.Consumer>
		)
	}
}

const styles = {
	container: RX.Styles.createViewStyle({
		position: 'absolute',
		top: 16,
		left: 20,
	}),
	dayName: RX.Styles.createTextStyle({
		fontSize: 16,
		fontWeight: 'bold',
	}),
	date: RX.Styles.createTextStyle({
		fontSize: 12,
		fontWeight: '200',
	})
}
