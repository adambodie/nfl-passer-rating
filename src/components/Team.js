import React, { Component } from 'react'
import Select from 'react-select'
import firebase from '../firebase.js'

export default class Team extends Component {
	constructor(props) {
		super(props);
		this.state = {
			teams: []
		}
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(event) {
		this.props.onAllChanges(event.value, event.label, event.textColor, event.primaryColor, event.secondaryColor)
	}
	componentDidMount() {
		const teamsRef = firebase.database().ref();
		teamsRef.on('value', (snapshot) => {
			let teams = snapshot.val();
			let newState = [];
			for (let team in teams) {
				newState.push({
					id: team,
					label: teams[team].label,
					primaryColor: teams[team].primaryColor,
					secondaryColor: teams[team].secondaryColor,
					textColor: teams[team].textColor,
					value: teams[team].value
				});
			}
			this.setState({teams: newState});
		});
	}

 
	render() {
		const { value } = this.props
		const { teams } = this.state
		return (
			<Select
				name="form-field-name"
				value={value}
				options={teams}
				onChange={this.handleChange}
				clearable={false}
			/>
		)
	}
}
