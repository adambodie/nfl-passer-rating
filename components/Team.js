// Libs
import React from 'react';

class Team extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'nfl'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    console.log(event.target.value);
  }

  handleSubmit(event) {
    console.log(this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div>
      <img className="thumbnail" src={'img/' + this.state.value + '.gif'}/>
      <form>
          <select value={this.state.value} onChange={this.handleChange}>
            <option value={'nfl'}>NFL</option>
            <option value={'min'}>Minnesota Vikings</option>
          </select>
      </form>
      </div>
    );
  }
}

export default Team;
