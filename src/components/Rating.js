import React, { Component } from 'react';
import { Row, Column } from 'react-foundation';

export const aValue = (completions, attempts) => {
	if (attempts < 0 || completions < 0) {
		return "Must be greater than or equal to zero";
	}
	if (attempts < completions) {
		return "More completions than attempts not allowed";
	} else {
		let a = ((completions/attempts) - 0.3) * 5;
		if (a > 2.375) {
			a = 2.375;
		}
		if (a < 0) {
			a = 0;
		}
		return a;
	}
}

export const bValue = (yards, attempts) => {
	if (yards != 0 && attempts == 0) {
		return "Need at least one attempt to produce a B value";
	}
	let b = ((yards/attempts) - 3) * 0.25;
	if (b > 2.375) {
		b = 2.375;
	}
	if (b < 0) {
		b = 0;
	}
	return b;
}

export const cValue = (touchdowns, attempts) => {
	if (attempts < 0 || touchdowns < 0) {
		return "Must be greater than or equal to zero";
	}
	if (touchdowns > attempts) {
		return "More touchdowns than attempts not allowed";
	}
	let c = (touchdowns/attempts) * 20;
	if (c > 2.375) {
		c = 2.375;
	}
	if (c < 0) {
		c = 0;
	}
	return c;
}

export const dValue = (interceptions, attempts) => {
	if (attempts < 0 || interceptions < 0) {
		return "Must be greater than or equal to zero";
	}
	if (interceptions > attempts) {
		return "More interceptions than attempts not allowed";
	}    
	let d = 2.375 - ((interceptions/attempts) * 25);
    if (d > 2.375) {
		d = 2.375;
	}
	if (d < 0) {
		d = 0;
	}
	return d;
}

export const eValue = (completions, attempts, yards, touchdowns, interceptions) => {
	let a = parseFloat(aValue(completions, attempts));
	let b = parseFloat(bValue(yards, attempts));
	let c = parseFloat(cValue(touchdowns, attempts));
	let d = parseFloat(dValue(interceptions, attempts));
	let e = ((a + b + c + d)/ 6) * 100;
	if (e > 158.3) {
		e = 158.3;
	}
	if (e < 0) {
		e = 0;
	}
	return parseFloat(e.toFixed(1));
}
  

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
        const { completions, attempts, yards, touchdowns, interceptions, } = this.state; 
        let pattern = /\D/;
        let a = parseFloat(completions);
        let b = parseFloat(attempts);
        let c = parseFloat(yards);
        let d = parseFloat(touchdowns);
        let e = parseFloat(interceptions);
     
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
      const { completions, attempts, yards, touchdowns, interceptions, passerRating} = this.state;
      const { textColors, primaryColors, secondaryColors } = this.props;
      return (
          <React.Fragment>
              <Row className="display grid-x">
                  <form onSubmit={this.handleSubmit}>
                      <Column large={4}>
                          <input type="text" name="completions" placeholder="Completions" value={completions} onChange={this.handleChange} />
                      </Column>
                      <Column large={4}>
                          <input type="text" name="attempts" placeholder="Attempts" value={attempts} onChange={this.handleChange}/>
                      </Column>
                      <Column large={4}>
                          <input type="text" name="yards" placeholder="Yards" value={yards} onChange={this.handleChange} />
                      </Column>
                      <Column large={4}>
                          <input type="text" name="touchdowns" placeholder="Touchdowns" value={touchdowns} onChange={this.handleChange} />
                      </Column>
                      <Column large={4}>
                          <input type="text" name="interceptions" placeholder="Interceptions" value={interceptions} onChange={this.handleChange} />
                      </Column>
                      <Column large={4}>
                          <button className="button"  style={{
                              color: textColors, 
                              backgroundColor: secondaryColors, 
                              textShadow: `4px 4px 8px ${primaryColors}`
                            }}><span>Submit </span></button>
                      </Column>
                  </form>
              </Row>
              <Row className="display grid-x">
                  <h1 className="passerRating">{passerRating}</h1>
              </Row>
          </React.Fragment>
      );
  }
}
