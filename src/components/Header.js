import React from 'react'

const Header = ({textColors, secondaryColors, primaryColors, names}) =>  {
	const styles = {
		color: textColors, 
		backgroundColor: secondaryColors, 
		textShadow: '4px 4px 8px ' + primaryColors,
		width: '100%'
	}
	return (
		<div className="header" style={styles}>
			<h1 className="headline">{names}</h1>
		</div>
	)
}

export default Header;
