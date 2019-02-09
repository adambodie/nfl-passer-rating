import React from 'react';

const Header = ({textColors, secondaryColors, primaryColors, names}) => { 
	return (
		<div className="header" style={{
			color: textColors, 
			backgroundColor: secondaryColors, 
			textShadow: '4px 4px 8px ' + primaryColors
			}}>
			<h1 className="headline">{names}</h1>
		</div>
	)
}

export default Header;
