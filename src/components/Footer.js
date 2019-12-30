import React from 'react'

const Footer = ({textColors, secondaryColors, primaryColors}) => (
	<div className="footer" 
		style={{
			color: textColors, 
			backgroundColor: secondaryColors, 
			textShadow: '4px 4px 8px ' + primaryColors,
			width: '100%'
		}} >
			<h3>Adam Bodie <span>©{new Date().getFullYear()}</span></h3>
		</div>
)

export default Footer
