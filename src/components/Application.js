import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import Team from './Team'
import Rating from './Rating'
import Header from './Header'
import Footer from './Footer'

export default class Application extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: 'NFL Passer Rating',
			value: 'nfl',
			primaryColor: '#013A73',
			textColor: '#FFFFFF',
			secondaryColor: '#DB1B26',
		};
		this.handleValueChange = this.handleValueChange.bind(this)
		this.handleNameChange = this.handleNameChange.bind(this)
		this.handletextColorChange = this.handletextColorChange.bind(this)
		this.handleSecondaryColorChange = this.handleSecondaryColorChange.bind(this)
		this.handleprimaryColorChange = this.handleprimaryColorChange.bind(this)
	}

	handleValueChange(value){
		this.setState({value: value})
	}
	handleNameChange(name){
		this.setState({name: name})
	}
	handletextColorChange(textColor){
		this.setState({textColor: textColor})
	}
	handleSecondaryColorChange(secondaryColor){
		this.setState({secondaryColor: secondaryColor})
	}
	handleprimaryColorChange(primaryColor){
		this.setState({primaryColor: primaryColor})
	}
	render() {
		const { textColor, secondaryColor, primaryColor, value, name } = this.state
		return (
			<Grid container style={{height: window.innerHeight, color: textColor, backgroundColor: primaryColor, overflow: 'hidden'}}>
				<Header 
					names={name}
					textColors={textColor} 
					secondaryColors={secondaryColor} 
					primaryColors={primaryColor} 
				/>
				<Grid container style={{padding: '20px'}}>
					<Grid item lg={3} className='teams'>
						<img className="thumbnail" src={`http://nfl-passer-rating.bodiewebdesign.com/img/${value}.gif`}/>
						<Team
							onValueChange={this.handleValueChange}
							ontextColorChange={this.handletextColorChange}
							onSecondaryColorChange={this.handleSecondaryColorChange}
							onBackgroundChange={this.handleprimaryColorChange}
							onNameChange={this.handleNameChange}
						/>
					</Grid>
				<Grid container alignItems="center" item lg={9} className='stats'>
					<Rating 
						textColors={textColor} 
						secondaryColors={secondaryColor} 
						primaryColors={primaryColor}              
					/>
				</Grid>
			</Grid>
			<Footer 
				textColors={textColor} 
				secondaryColors={secondaryColor} 
				primaryColors={primaryColor}
			/>
		</Grid>
		)
	}
}

