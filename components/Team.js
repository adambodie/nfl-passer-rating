// Libs
import React from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';


var options = [
    { value: 'nfl', label: 'NFL' },
    { value: 'az', label: 'Arizona Cardinals' },
    { value: 'atl', label: 'Atlanta Falcons' },
    { value: 'bal', label: 'Baltimore Ravens' },
    { value: 'buf', label: 'Buffalo Bills' },
    { value: 'car', label: 'Carolina Panthers' },
    { value: 'chi', label: 'Chicago Bears' },
    { value: 'cin', label: 'Cincinnati Bengals' },
    { value: 'cle', label: 'Cleveland Browns' },
    { value: 'dal', label: 'Dallas Cowboys' },
    { value: 'den', label: 'Denver Broncos' },
    { value: 'det', label: 'Detroit Lions' },
    { value: 'gb', label: 'Green Bay Packers' },
    { value: 'hou', label: 'Houston Texans' },
    { value: 'ind', label: 'Indianapolis Colts' },
    { value: 'jax', label: 'Jacksonville Jaguars' },
    { value: 'kc', label: 'Kansas City Chiefs' },
    { value: 'lac', label: 'Los Angeles Chargers' },
    { value: 'lar', label: 'Los Angeles Rams' },
    { value: 'mia', label: 'Miami Dolphins' },
    { value: 'min', label: 'Minnesota Vikings' },
    { value: 'ne', label: 'New England Patriots' },
    { value: 'no', label: 'New Orleans Saints' },
    { value: 'nyg', label: 'New York Giants' },
    { value: 'nyj', label: 'New York Jets' },
    { value: 'oak', label: 'Oakland Raiders' },
    { value: 'phi', label: 'Philadelphia Eagles' },
    { value: 'pit', label: 'Pittsburgh Steelers' },
    { value: 'sea', label: 'Seattle Seahawks' },
    { value: 'sf', label: 'San Francisco 49ers' },
    { value: 'tb', label: 'Tampa Bay Buccaneers' },
    { value: 'ten', label: 'Tennessee Titans' },
    { value: 'was', label: 'Washington Redskins' }

];

class Team extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'nfl'};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.value});
  }

  render() {
    return (
      <div>
      <img className="thumbnail" src={'img/' + this.state.value + '.gif'}/>
      <Select
          name="form-field-name"
          value={this.state.value}
          options={options}
          onChange={this.handleChange}
          clearable={false}
        />
      </div>
    );
  }
}

export default Team;
