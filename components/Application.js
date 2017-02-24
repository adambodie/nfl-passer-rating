// Libs
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';

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
      <div>
      <Header />
          <div className="row">
            <div className="column medium-3">
              <img class="thumbnail" src="https://placehold.it/850x850"/>
            </div>
            <div className="column medium-9">
              <form onSubmit={this.handleSubmit}>
                  <input type="text" name="completions" placeholder="Completions" value={this.state.completions} onChange={this.handleChange} />
                  <input type="text" name="attempts" placeholder="Attempts" value={this.state.attempts} onChange={this.handleChange}/>
                  <input type="text" name="yards" placeholder="Yards" value={this.state.yards} onChange={this.handleChange} />
                  <input type="text" name="touchdowns" placeholder="Touchdowns" value={this.state.touchdowns} onChange={this.handleChange} />
                  <input type="text" name="interceptions" placeholder="Interceptions" value={this.state.interceptions} onChange={this.handleChange} />
                <input type="submit" value="Submit" className="button" />
              </form>
          </div>
          </div>
      </div>
    );
  }
}

export default Application;
