import React, { Component } from 'react';
import { Row, Column } from 'react-foundation';
import eValue from '../scripts/eValue';

export default class Rating extends Component {
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

    values.forEach(value => {
      if (pattern.test(value) == true) {
        result = "Please try again";
      }      
    });
    if ( a > b ) {
      result = "More completions than attempts not allowed.  Try again.";
    }
    if ( d > b ) {
      result = "More touchdowns than attempts not allowed.  Try again.";
    }
    if ( e > b ) {
      result = "More interceptions than attempts not allowed.  Try again.";
    }

    this.setState({passerRating: result, completions: '', attempts: '', yards: '', touchdowns: '', interceptions: ''});
    event.preventDefault();
  }

  render() {
    return (
      <div>
      <Row className="display grid-x">
        <form onSubmit={this.handleSubmit}>
            <Column large={4}>
              <input type="text" name="completions" placeholder="Completions" value={this.state.completions} onChange={this.handleChange} />
            </Column>
            <Column large={4}>
              <input type="text" name="attempts" placeholder="Attempts" value={this.state.attempts} onChange={this.handleChange}/>
            </Column>
            <Column large={4}>
              <input type="text" name="yards" placeholder="Yards" value={this.state.yards} onChange={this.handleChange} />
            </Column>
            <Column large={4}>
              <input type="text" name="touchdowns" placeholder="Touchdowns" value={this.state.touchdowns} onChange={this.handleChange} />
            </Column>
            <Column large={4}>
              <input type="text" name="interceptions" placeholder="Interceptions" value={this.state.interceptions} onChange={this.handleChange} />
            </Column>
            <Column large={4}>
              <button className="button"  style={{
                color: this.props.textColors, 
                backgroundColor: this.props.secondaryColors, 
                textShadow: '4px 4px 8px ' + this.props.primaryColors
                }}><span>Submit </span></button>
            </Column>
          </form>
          </Row>
          <Row className="display grid-x">
          <h1 className="passerRating">{this.state.passerRating}</h1>
          </Row>
        </div>
    );
  }
}
