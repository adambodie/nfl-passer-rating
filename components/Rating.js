// Libs
import React from 'react';
import ReactDOM from 'react-dom';
import aValue from '../scripts/aValue';
import bValue from '../scripts/bValue';
import cValue from '../scripts/cValue';
import dValue from '../scripts/dValue';
import eValue from '../scripts/eValue';

class Rating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      completions: '',
      attempts: '',
      yards: '',
      touchdowns: '',
      interceptions: '',
      passerRating: ''
    };

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
    let pattern = /\D/;

    let a = parseFloat(this.state.completions);
    let b = parseFloat(this.state.attempts);
    let c = parseFloat(this.state.yards);
    let d = parseFloat(this.state.touchdowns);
    let e = parseFloat(this.state.interceptions);

    let values = [a,b,c,d,e];

    let result = eValue(a, b, c, d, e);

    for (var i = 0; i < values.length; i++) {
      if (pattern.test(values[i]) == true) {
        result = "Please try again";
      }
    }
    if ( a > b ) {
      result = "More completions than attempts not allowed.  Try again.";
    }
    if ( d > b ) {
      result = "More touchdowns than attempts not allowed.  Try again.";
    }
    if ( e > b ) {
      result = "More interceptions than attempts not allowed.  Try again.";
    }

    this.setState({passerRating: result });
    this.setState({completions: '', attempts: '', yards: '', touchdowns: '', interceptions: ''});
    event.preventDefault();
  }

  render() {
    return (
      <div>
      <div className="row">
        <form onSubmit={this.handleSubmit}>
            <div className="small-12 large-4 columns">
              <input type="text" name="completions" placeholder="Completions" value={this.state.completions} onChange={this.handleChange} />
            </div>
            <div className="small-12 large-4 columns">
              <input type="text" name="attempts" placeholder="Attempts" value={this.state.attempts} onChange={this.handleChange}/>
            </div>
            <div className="small-12 large-4 columns">
              <input type="text" name="yards" placeholder="Yards" value={this.state.yards} onChange={this.handleChange} />
            </div>
            <div className="small-12 large-4 columns">
              <input type="text" name="touchdowns" placeholder="Touchdowns" value={this.state.touchdowns} onChange={this.handleChange} />
            </div>
            <div className="small-12 large-4 columns">
              <input type="text" name="interceptions" placeholder="Interceptions" value={this.state.interceptions} onChange={this.handleChange} />
            </div>
            <div className="small-12 large-4 columns">
              <button className="button"><span>Submit </span></button>
            </div>
          </form>
          </div>
          <div className="row">
          <h1 className="passerRating">{this.state.passerRating}</h1>
          </div>
        </div>
    );
  }
}

Rating.propTypes = {
  completions: React.PropTypes.number,
  attempts: React.PropTypes.number,
  yards: React.PropTypes.number,
  touchdowns: React.PropTypes.number,
  interceptions: React.PropTypes.number
}
export default Rating;
