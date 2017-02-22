// Libs
import React from 'react';

class Application extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    const a = parseInt(this.state.completions);
    const b = parseInt(this.state.attempts);
    const c = parseInt(this.state.yards);
    const d = parseInt(this.state.touchdowns);
    const e = parseInt(this.state.interceptions);
    alert(a + b + c + d + e);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Completions:
          <input type="text" name="completions" value={this.state.completions} onChange={this.handleChange} />
        </label>
        <label>
          Attempts:
          <input type="text" name="attempts" value={this.state.attempts} onChange={this.handleChange}/>
        </label>
        <label>
          Yards:
          <input type="text" name="yards" value={this.state.yards} onChange={this.handleChange} />
        </label>
        <label>
          Touchdowns:
          <input type="text" name="touchdowns" value={this.state.touchdowns} onChange={this.handleChange} />
        </label>
        <label>
          Interceptions:
          <input type="text" name="interceptions" value={this.state.interceptions} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Application;
