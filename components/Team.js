// Libs
import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import teams from '../scripts/teams.js';

export default class Team extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
      this.props.onValueChange(event.value);
      this.props.ontextColorChange(event.textColor);
      this.props.onBackgroundChange(event.primaryColor);
      this.props.onSecondaryColorChange(event.secondaryColor);
      this.props.onNameChange(event.label);
  }
  render() {
    const textColor = this.props.textColor;
    const secondaryColor = this.props.secondaryColor;
    const primaryColor = this.props.primaryColor;
    const value = this.props.value;
    const name = this.props.label;
    return (
      <div >
      <Select
          name="form-field-name"
          value={value}
          options={teams}
          onChange={this.handleChange}
          clearable={false}
        />
      </div>
    );
  }
}
