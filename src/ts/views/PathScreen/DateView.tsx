/*
 * DateView.tsx
 * Copyright: Ouranos Studio 2019
 */

// import React from 'react'
import RX from 'reactxp'
import moment from 'moment'
import theme from 'src/ts/app/Theme'

interface DateViewProps {
	date: string,
}

export default class DateView extends RX.Component<DateViewProps> {
	render() {
		const {date} = this.props

		return (
			<RX.View style={styles.container}>
				<RX.Text style={styles.dayName}>{moment.weekdays()[moment(date).weekday()]}</RX.Text>
				<RX.Text style={styles.date}>{moment.months()[moment(date).month()]} {moment(date).format('D')}</RX.Text>
			</RX.View>
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
		color: theme.colors.pathDateSubtitle
	})
}
