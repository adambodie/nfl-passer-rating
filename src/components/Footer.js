import React from 'react';

const Footer = ({textColors, secondaryColors, primaryColors}) => { 
	return (
		<div className="footer" style={{
			color: textColors, 
			backgroundColor: secondaryColors, 
			textShadow: '4px 4px 8px ' + primaryColors
		}} >
			<h3>Adam Bodie <span>©{new Date().getFullYear()}</span></h3>
		</div>
		)
}

export default Footer;
