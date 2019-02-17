import React, { Component } from 'react';
import Select from 'react-select';

export default class Team extends Component {
  constructor(props) {
    super(props);
    this.state = {
        teams: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.fetchApiToEntries = this.fetchApiToEntries.bind(this);
  }
  handleChange(event) {
      this.props.onValueChange(event.value);
      this.props.ontextColorChange(event.textColor);
      this.props.onBackgroundChange(event.primaryColor);
      this.props.onSecondaryColorChange(event.secondaryColor);
      this.props.onNameChange(event.label);
  }
  componentDidMount() {
    this.fetchApiToEntries('https://s3-us-west-2.amazonaws.com/nfl-passer-rating.bodiewebdesign.com/data/teams.json');
  }
  fetchApiToEntries(apiToFetch) {
      fetch(apiToFetch)
          .then(result => result.json())
          .then((teams) => {
              this.setState({
                  ...this.state,
                  teams
              })
          })
          .catch((error) => console.log(error));
  }
 
  render() {
    const { value } = this.props;
    const { teams } = this.state;
    return (
      <Select
          name="form-field-name"
          value={value}
          options={teams}
          onChange={this.handleChange}
          clearable={false}
        />
    );
  }
}
