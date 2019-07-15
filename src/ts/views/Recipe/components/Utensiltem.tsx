/*
 * Utensiltem.tsx
 * Copyright: Ouranos Studio 2019
 */

// import React from 'react'
import RX from 'reactxp'


const UtensilItem = ({utensil, style}: any) => {
	return (
		<RX.View
			style={[style, styles.container]}
		>
			{
				utensil.image ?
					<RX.Image
						source={utensil.image.url}
						style={styles.image}
					/> :
					<RX.View
						style={styles.image}
					>
						<RX.Text>{utensil.name[0]}</RX.Text>
					</RX.View>
			}
			<RX.Text>{utensil.name}</RX.Text>
		</RX.View>
	)
}

const styles = {
	container: RX.Styles.createViewStyle({
		justifyContent: 'center',
		alignItems: 'center',
		padding: 20,
		borderWidth: 1,
		borderColor: '#eee'
	}),
	image: RX.Styles.createViewStyle({
		width: 50,
		height: 50,
		borderRadius: 25,
		backgroundColor: '#ddd',
		justifyContent: 'center',
		alignItems: 'center'
	}),
	amountText: RX.Styles.createTextStyle({color: 'orange'})
}

export default UtensilItem